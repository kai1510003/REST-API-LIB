# Library API

This is a simple RESTful API for managing a library's book collection. It allows you to perform CRUD (Create, Read, Update, Delete) operations on books.

## Features

*   **Add Books:** Create new book entries with title, author, and ISBN.
*   **View Books:** Retrieve a list of all books or a single book by its ID.
*   **Update Books:** Modify existing book details.
*   **Delete Books:** Remove books from the collection.

## Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd library-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the server:**
    ```bash
    npm start
    ```

    The API will be running at `http://localhost:3000`.

## API Endpoints

### Books

*   **GET /api/books**
    *   Get all books.
*   **GET /api/books/:id**
    *   Get a single book by ID.
*   **POST /api/books**
    *   Add a new book.
    *   Request Body:
        ```json
        {
            "title": "Book Title",
            "author": "Author Name",
            "isbn": "1234567890"
        }
        ```
*   **PUT /api/books/:id**
    *   Update a book by ID.
    *   Request Body:
        ```json
        {
            "title": "Updated Book Title",
            "author": "Updated Author Name",
            "isbn": "0987654321"
        }
        ```
*   **DELETE /api/books/:id**
    *   Delete a book by ID.

## Usage

You can use tools like Postman, Insomnia, or `curl` to interact with the API.

### Example using curl:

**Add a new book:**

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "isbn": "978-0743273565"}' http://localhost:3000/api/books
```

**Get all books:**

```bash
curl http://localhost:3000/api/books
```

**Get a book by ID (replace :id with an actual book ID):**

```bash
curl http://localhost:3000/api/books/YOUR_BOOK_ID
``` 
