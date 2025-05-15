const filmModel = require("../models/film.model");

exports.createFilm = async (req, res) => {
    const { title, description, director, release_year } = req.body; // release_year ici
    const user_id = req.user.id;

    try {
        const film = await filmModel.createFilm(
            title,
            description,
            director,
            release_year,
            user_id
        );
        res.status(201).json(film);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAllFilms = async (req, res) => {
    try {
        const films = await filmModel.getAllFilms();
        res.status(200).json(films);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getFilmById = async (req, res) => {
    const { id } = req.params;
    try {
        const film = await filmModel.getFilmById(id);
        if (!film) return res.status(404).json({ message: "Film introuvable" });
        res.status(200).json(film);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateFilm = async (req, res) => {
    const { id } = req.params;
    const { title, description, director, release_year } = req.body; // release_year ici aussi
    const user_id = req.user.id;

    try {
        const updated = await filmModel.updateFilm(
            id,
            title,
            description,
            director,
            release_year,
            user_id
        );
        if (!updated)
            return res
                .status(404)
                .json({ message: "Film introuvable ou non autorisé" });
        res.status(200).json({ message: "Film mis à jour avec succès" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteFilm = async (req, res) => {
    const { id } = req.params;
    const user_id = req.user.id;

    try {
        const deleted = await filmModel.deleteFilm(id, user_id);
        if (!deleted)
            return res
                .status(404)
                .json({ message: "Film introuvable ou non autorisé" });
        res.status(200).json({ message: "Film supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
