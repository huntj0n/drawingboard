-- USERS
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    title VARCHAR(100),
    profile_pic TEXT,
    phone text,
    password VARCHAR(500)
);


-- TEAMS (companies)
CREATE TABLE teams (
    team_id SERIAL PRIMARY KEY,
    name TEXT
);

-- TEAM MEMBERS (employees in a given group)
CREATE TABLE team_members (
    tm_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    team_id INTEGER REFERENCES teams(team_id)
);

-- JOIN TEAM MEMBERS W/ USERS
SELECT * FROM 
team_members tm
JOIN users u
ON tm.tm_id = u.user_id;

-- JOIN TEAM MEMBERS W/ TEAMS
SELECT * FROM
team_members tm
JOIN teams t 
ON tm.user_id = t.team_id


-- BOARDS 
CREATE TABLE boards (
    board_id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(team_id),
    title TEXT,
    description TEXT,
);

-- GROUPS (groups of tasks, ie individual tables/projects inside a board)
CREATE TABLE groups (
    group_id SERIAL PRIMARY KEY,
    title TEXT,
    board_id INTEGER REFERENCES boards(board_id)
)

-- TASKS (rows inside groups, individual tasks for each team member)
CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    group_id INTEGER REFERENCES groups(group_id),
    user_id INTEGER REFERENCES users(user_id),
    title TEXT,
    status VARCHAR(50),
    priority VARCHAR(50),
    date VARCHAR(50),
    notes TEXT 
);


-- BEGINNING DUMMY DATA
-- 1	1	TheRock	dwayne@rock.com	BigGuy	url=https://www.mytwintiers.com/wp-content/uploads/sites/89/2020/09/5a4bdcff390942869a5b4ad52e7e5e5d-1.jpg?w=2560&h=1440&crop=1	555-1234	password
-- 2	2	RickSanchez	Rick C-137	BigBrains	url=https://maji-production-store.imgix.net/3ee75cba63f2117eb63a32bd7f2fd3cfd047ffb71af2489b17a52a841a84?ixlib=rails-2.1.4&fit=crop&dpr=2.0&h=170&w=170&auto=format&fm=pjpg	555-1137	password
-- 3	3	AbedNadir	anadir@greendale.edu	StudyGroup3	url=https://i0.wp.com/www.vinsider.ca/wp-content/uploads/2017/11/Abed_Pilot.jpg?fit=1200%2C982&ssl=1	555-8769	password
