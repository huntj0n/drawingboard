UPDATE users
SET username = $1,
    title = $2,
    profile_pic = $3,
    phone = $4
WHERE user_id = $5
RETURNING *;