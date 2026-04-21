# API Conventions

## REST
- Plural nouns for resources: `/users`, `/posts`
- HTTP verbs: GET (read), POST (create), PUT (replace), PATCH (update), DELETE
- Status codes: 200 success, 201 created, 400 bad input, 401 unauth, 404 not found, 500 server error
- Always return JSON, even for errors

## Error format
```json
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "No user with id 123"
  }
}
```

## Auth
- Bearer token in `Authorization` header
- Never log tokens or passwords
