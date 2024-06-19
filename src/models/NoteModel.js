import express from 'express'
import fs from 'fs'
import path from 'path'
import url from 'url'
import { Db } from '../../databse/Db.js'

export const createTable = async(req, res, next)=>{
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
    try {
        const sql = fs.readFileSync(path.join(__dirname, '../../sql/template.sql'), 'utf8');
        await Db.query(sql);
        // res.send('Table created successfully');
        next()
      } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
      }
}