<h1>Mock10 Backend</h1>
The task is to create backend for a Air Ticket booking system that allows users to book flights for their desired destinations.
The system is built using Node.js, Express.js, and MongoDB as the backend stack.
<br/>
<h3>Backend Link:</h3>https://viridian-earthworm-cape.cyclic.app/
<hr/>
<h3>The following API routes should be used to achieve the required functionality:</h3>

| METHOD | 	ENDPOINT | DESCRIPTION |
| --------------- | --------------- | --------------- |
| POST | /api/register | This endpoint should allow users to register. |
| POST | /api/login | This endpoint should allow users to login. |
| GET | /api/flights | This endpoint should return a list of all available flights. |
| GET | /api/flights/:id | This endpoint should return the details of a specific flight identified by its ID. |
| POST | /api/flights | This endpoint should allow users to add new flights to the system. |
| PUT / PATCH | /api/flights/:id | This endpoint should allow users to add new flights to the system. |
| DELETE | /api/flights/:id | This endpoint should allow users to delete a specific flight identified by its ID. |
| POST | /api/booking | This endpoint should allow the user to book flights. |
| GET | /api/dashboard | This point should list all the bookings so far with the user and flight details. |
