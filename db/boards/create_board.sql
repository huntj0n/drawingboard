INSERT INTO boards
(team_id, title, description)
VALUES
($1, $2, $3);

SELECT * FROM boards;