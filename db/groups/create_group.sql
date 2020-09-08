INSERT INTO groups
(title, board_id)
VALUES 
($1, $2
RETURNING *;)