const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// TODO - create a POST route for creating a new post
// This should be a protected route, so you'll need to use the withAuth middleware

// TODO - create a PUT route for updating a post's title or body
// This should be a protected route, so you'll need to use the withAuth middleware
router.put("/:id", withAuth, async (req, res) => {
    try {
        const updateBody = await Post.update(
            {
                ...req.body,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
            );
            if (!updatedBody) {
                res.status(404).json({ message: "invalid post" + req.params.id });
            }
        res.status(200).json(updatedBody);
        } catch (err) {
            console.log("update error: " + err.message);
            res.status(500).json(err);
        }
    });


// TODO - create a DELETE route for deleting a post with a specific id
// This should be a protected route, so you'll need to use the withAuth middleware

module.exports = router;
