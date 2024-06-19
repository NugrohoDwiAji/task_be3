import { query } from "../../databse/Db.js";


// Create Note
export const createNote = async(req,res)=>{
    const {title, datetime, note} = req.body
    try {
        await query("INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)", [title, datetime, note])
        return res.status(201).json({
            message :"Insert Succesfull",
            data:{
                ...req.body
            }
        })   
    } catch (error) {
        console.log(error)
    }
}

// Menampilkan Semua Notes
export const getAllNote =async(req, res)=>{
    try {
        const result = await query("SELECT * FROM notes")
        return res.status(200).json({data:result})
    } catch (error) {
       console.log(error) 
    }
}

//  Menampilkan Notes Berdasarkan ID
export const getNoteById = async(req, res)=>{
    const {id} = req.params
    try {
        const result = await query("SELECT * FROM notes WHERE id = ?", [id])
        return res.status(200).json({data:result})
    } catch (error) {
        console.log(error)
    }
}

// UPDATE Notes
export const UpdateNote = async(req, res)=>{
    const {id} = req.params
    const {title, datetime, note} = req.body
    try {
        const result = await query("UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?",[title, datetime, note, id])
        return res.status(200).json({data:result})
    } catch (error) {
        console.log(error)
    }
}

// DELETE notes
export const deleteNote = async(req, res)=>{
    const {id} = req.body
    try {
        const result = await query("DELETE FROM notes WHERE id = ?", [id])
        return res.status(200).json({data:result})
    } catch (error) {
        
    }
}
