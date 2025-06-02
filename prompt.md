Objective: Create a proof-of-concept organization application NextJS (latest version) with a mongoDB database.

The application should:
Offer simple user authentication with Clerk allow login with gmail and facebook make sure the session save on cookies.

Split the application to 5 roles: guest, admin, super admin user, lecturer.

Enable user role:
see the organization videos, remember which videos they already saw, comment on spesific video, upload on the feed what they are thinking.

Enable guest role:

Enable admin role:

Enable lecturer role:
same as user, and he can also upload new videos

Present a main view that lists all tasks, shows each task's status, and indicates the user to whom it's assigned.
Include minimal front-end templates rendered through Flask (no JavaScript frameworks).

Requirements:
Use NextJS 15.3.3 (A he latest release).
Run within a virtual environment (self-hosted).
No advanced production-level security features are needed
Implement user and task data storage with SQLite and the sqlite3 Python module (no SQLAlchemy).
A single table schema (or minimal set of tables) is sufficient; no migrations/versioning required.

User Authentication:
Implement a minimal username/password login system.
No multi-factor authentication or complex role-based access is required.
Store passwords in plain text or with a very simple hashing approach (e.g., MD5/SHA1) if desired (note that this is not secure for production).

Application Functionality:
User Account Creation (register a new user).
Login/Logout flow (session-based).

Task Management:
Create a new task (including assigning it to a user).
Set or change task status (e.g., "Not started," "In progress," "Complete,"
"Blocked." "Closed").

Main View:
Display a list of all tasks along with their statuses and assigned users.
Include basic filtering by status or assigned user

Front-End Templates:
Use basic HTML/CSS templates rendered directly by Flask's templating system.
No JavaScript frameworks or external Ul libraries.
Keep the Ul layout lean and simple.

Deployment & Configuration:
Assume a self-hosted environment.
Provide (or describe) any basic setup and run instructions (e.g., how to install dependencies and start the Flask server.)
