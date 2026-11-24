# Kitchen Table Tracker

This is a react app used to track and view stats on your local metagme for Commander.
Currently this is just a proof of concept but the planned architecture is as follows:

## Tech Stack

### Front-end

- React app currently hosted on S3 Bucket. Planned implementation of AWS Cloudfront or AWS Amplify

### Middle-Tier

- Amazon API Gateway – Exposes REST API endpoints and routes HTTP requests to Lambda functions.

### Back-end

- AWS Lambda – Serverless backend functions for handling CRUD requests with database.

### Database

- Amazon RDS – Relational database in cloud
  - Metagames – Stores metagame information.
  - Games – Stores game history and player information.
  - Decks – Stores deck information and decklists.

## Database Schema

The application uses a relational database hosted on Amazon RDS with three primary tables: `Metagames`, `Games`, and `Decks`.

### Metagames

Stores information about individual metagames.

| Column | Type | Description |
| --- | --- | --- |
| `id` | INT (PK) | Primary key |
| `name` | VARCHAR | Metagame name |
| `image` | VARCHAR | Cutom Image URL |
| `color` | VARCHAR | Custom color |
| `description` | TEXT | Metagame description |

### Games

Stores individual games associated with a metagame.

| Column | Type | Description |
| --- | --- | --- |
| `id` | INT (PK) | Primary key |
| `metagame` | INT (FK) | References `Metagames.id` |
| `calendar` | DATE | Game date (YYYY-MM-DD) |
| `minutes` | INT | Game duration in minutes |
| `winner` | INT | Seat Number of Winner |
| `seat1` | VARCHAR | Player seated at seat 1 |
| `seat2` | VARCHAR | Player seated at seat 2 |
| `seat3` | VARCHAR | Player seated at seat 3 |
| `seat4` | VARCHAR | Player seated at seat 4 |

### Decks

Stores deck information associated with a metagame.

| Column | Type | Description |
| --- | --- | --- |
| `id` | INT (PK) | Primary key |
| `metagame` | INT (FK) | References `Metagames.id` |
| `name` | VARCHAR | Deck name |
| `decklist` | VARCHAR | Custom Decklist URL |
| `image` | VARCHAR | Custom Image URL |
| `color` | VARCHAR | Custom color |
| `description` | TEXT | Deck description |

### Database Relationships

- One Metagame can have multiple Games.
- One Metagame can have multiple Decks.
- Each Game belongs to one Metagame.
- Each Deck belongs to one Metagame.

## API Architecture

The application follows a serverless architecture using AWS services.

text

```text
React Frontend
      |
      | HTTP Requests
      v
Amazon API Gateway
      |
      | Routes Requests
      v
AWS Lambda Functions
      |
      | SQL Queries
      v
Amazon RDS
      |
      +-- Metagames
      +-- Games
      +-- Decks
```
### API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/metagames/{id}` | Retrieve a specific metagame |
| GET | `/decks/{id}` | Retrieve a specific deck |