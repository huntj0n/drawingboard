UPDATE boards
SET 
title = $1, 
description = $2
WHERE board_id = $3;

SELECT * FROM boards;