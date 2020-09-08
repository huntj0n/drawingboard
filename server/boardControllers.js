const { response } = require("express");

module.exports = {
    getBoard: async (req, res) => {
        const db = req.app.get('db');
        const getBoards = await db.boards.get_boards()
            .then(res => {
                res.status(200).send(getBoards)
            }).catch(err => console.log(`boardCTRL error on getBoard: ${err}`))
    },

    newBoard: async (req, res) => {
        const db = req.app.get('db')
        const {team_id, title, description} = req.body
        const newBoard = await db.boards.create_board([team_id, title, description]);
        res.sstatus(200).send(newBoard)
        
    },

    editBoard: async (req, res) => {
        const {title, description} = req.body;
        const {board_id} = req.params;
        const db = req.app.get('db');
        const editBoard = await db.boards.edit_board([title, description, board_id])
        //do i want to sent this as an object or an array?
        //why? -> 
        res.status(200).send(editBoard)
    },

    deleteBoard: async (req, res) => {
        const {board_id} = req.params;
        const db = req.app.get('db');
        const deleteBoard = await db.boards.deleteBoard(board_id);
        res.status(200).send(deleteBoard);
    },
}