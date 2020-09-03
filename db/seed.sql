-- USERS
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    title VARCHAR(100),
    profile_pic TEXT,
    phone text
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
