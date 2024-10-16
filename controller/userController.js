const User = require('../model/userModel'); // Correct path to the model

exports.setUser = async (req, res) => {
    try {
        const { name, email, phoneNo } = req.body;

        const isExisting = await User.findOne({ email }); 
        if (isExisting) {
            return res.json({
                success: false,
                message: 'User already exists',
            });
        }
        const newUser = new User({ name, email, phoneNo });
        await newUser.save();

        return res.json({
            success: true,
            message: 'User saved successfully',
        });
    } catch (error) {
        return res.json({
            error: "Failed to save the user",
        });
    }
};
