UPDATE tasks
SET group_id = $1,
    title = $2,
    status = $3,
    priority = $4,
    date = $5,
    notes = $6
WHERE task_id = $7
RETURNING *;