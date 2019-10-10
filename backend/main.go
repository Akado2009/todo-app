package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client
var collection *mongo.Collection
var idCounter int
var allowedHeaders = "Accept, Content-Type, Content-Length, Accept-Encoding, Authorization,X-CSRF-Token"

//Task ...
type Task struct {
	Name        string
	Status      string
	Description string
	ID          bson.ObjectId
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", allowedHeaders)
	(*w).Header().Set("Access-Control-Expose-Headers", "Authorization")
}

func init() {
	// init db
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://127.0.0.1:27017"))
	if err != nil {
		log.Fatal(err)
	}

	// Create connect
	err = client.Connect(context.TODO())
	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}

	collection = client.Database("tasks").Collection("tasks")

}

//FetchTasks fetches tasks from a db
func FetchTasks(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	var allTasks []Task
	cur, err := collection.Find(context.TODO(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
		return
	}
	for cur.Next(context.TODO()) {

		// create a value into which the single document can be decoded
		var elem Task
		err := cur.Decode(&elem)
		if err != nil {
			log.Fatal(err)
		}

		allTasks = append(allTasks, elem)
	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(allTasks)
	return
}

//AddTask adds a task
func AddTask(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Fatal(err)
	}

	if r.Method == http.MethodPost {
		var task Task

		err = json.Unmarshal(body, &task)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("%+v\n", task)

		task.Status = "not"
		_, err = collection.InsertOne(context.TODO(), task)
		if err != nil {
			log.Fatal(err)
		}
	}
	return
}

//UpdateTask updates a task
func UpdateTask(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	return
}

//DeleteTask deletes a task
func DeleteTask(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	return
}

//DoneTask marks task as done
func DoneTask(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	return
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/tasks", FetchTasks)
	r.HandleFunc("/add", AddTask)
	r.HandleFunc("/delete", DeleteTask)
	r.HandleFunc("/update", UpdateTask)
	r.HandleFunc("/done", DoneTask)

	srv := &http.Server{
		Handler: r,
		Addr:    "127.0.0.1:8000",
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Fatal(srv.ListenAndServe())

}
