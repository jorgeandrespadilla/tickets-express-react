# Parking tickets

A completely functional clothing store for users to create their account and order some cool shirts!

Heroku deployment [HERE!](https://parking-tickets-lc.herokuapp.com/)

Made in React and Express

## Core project

The project consists of two apps, the backend API and the frontend. The backend has the following endpoints: 

- /api/health, GET: Just returns "ok" to check the API status.
- /api/people, POST, a date as body: Filters the people by its expiry ticket date using the passed date inserted in the client app. 
- /api/people, GET: Returns all the people data registered.

Using the web app, you could look at the whole registry of people that have bought tickets, and you could filter them by passing a date, which will return all the people with a ticket expiry date later than the date inserted. This will gather all the people data including how many tickets the have remaining.

---

## Development

Commands to start the backend side:

```
$ cd server
$ npm install
$ npm run dev
```

And to run the frontend using another terminal:

```
$ cd ../client
$ npm install
$ npm start
```
