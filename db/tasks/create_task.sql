INSERT INTO tasks
(group_id, title, status, priority, date, notes)
VALUES
($1, $2, $3, $4, $5, $6);
SELECT * FROM tasks;