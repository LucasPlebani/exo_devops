const db = require("./db");

exports.createFilm = async (title, description, director, release_year, user_id) => {
  const [result] = await db.query(
    `INSERT INTO films (title, description, director, release_year, user_id)
     VALUES (?, ?, ?, ?, ?)`,
    [title, description, director, release_year, user_id]
  );
  return {
    id: result.insertId,
    title,
    description,
    director,
    release_year,
    user_id,
  };
};

exports.getAllFilms = async () => {
  const [rows] = await db.query(`SELECT * FROM films ORDER BY created_at DESC`);
  return rows;
};

exports.getFilmById = async (id) => {
  const [rows] = await db.query(`SELECT * FROM films WHERE id = ?`, [id]);
  return rows[0];
};

exports.updateFilm = async (id, title, description, director, release_year, user_id) => {
  const [result] = await db.query(
    `UPDATE films SET title = ?, description = ?, director = ?, release_year = ?
     WHERE id = ? AND user_id = ?`,
    [title, description, director, release_year, id, user_id]
  );
  return result.affectedRows > 0;
};

exports.deleteFilm = async (id, user_id) => {
  const [result] = await db.query(
    `DELETE FROM films WHERE id = ? AND user_id = ?`,
    [id, user_id]
  );
  return result.affectedRows > 0;
};
