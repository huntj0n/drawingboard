UPDATE groups
SET title = $1
WHERE table_id = $2
RETURNING *;