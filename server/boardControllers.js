const { response } = require("express");

module.exports = {
    //works
    getBoard: async (req, res) => {
        const db = req.app.get('db');
        const getBoards = await db.boards.get_boards()
        res.status(200).send(getBoards);
    },

    //works
    newBoard: async (req, res) => {
        const {team_id, title, description} = req.body
        const db = req.app.get('db')
        const newBoard = await db.boards.create_board([team_id, title, description]);
        res.status(200).send(newBoard)
        
    },

    //no parameter $3
    editBoard: async (req, res) => {
        const {title, description} = req.body;
        const {board_id} = req.params;
        const db = req.app.get('db');
        const board = await db.boards.edit_board({title, description, board_id})
        //do i want to sent this as an object or an array?
        //why? -> 
        res.status(200).send(board)
    },

    //twerksas
    deleteBoard: async (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');
        const boards = await db.boards.delete_board([id]);
        res.status(200).send(boards)
    },
}