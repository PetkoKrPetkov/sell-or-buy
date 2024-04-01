module.exports = (api) => async (req, res, next) => {
    try {
        const id = req.params.id;

        const item = await api.getById(id);
        if (item) {
            res.locals.item = item;
            next();
        } else {
            res.status(404).json({ message: `Item ${id} not found` });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
