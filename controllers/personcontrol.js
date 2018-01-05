var mongoose = require("mongoose");
var per = mongoose.model('person');



module.exports = {
    perpost: function (req, res, next) {

        console.log('in person post');
        var iperson = new per();
        iperson.name = req.body.name;
        iperson.age = req.body.age;
        iperson.save(function (error) {
            console.log(req.body);
            if (error)
                console.log(error);
            else {
                console.log('Success');
                res.send(req.body.name + " has been saved.");
            }
        });

    },
    perget: function (req, res) {
        // console.log("Enter select actions ===================>>>>>>>>>>>>>>>")
        console.log('in person get');
        per.find({ _id: req.params.person_data })
            .exec(function (err, actions) {
                if (err) {
                    return res.status(500).json({ status: false, message: 'Database error' })
                } else {
                    // console.log("actions selected 
                    return res.status(200).json({ status: true, message: 'Actions fetched', data: actions })
                }
            });
    },
    perput: function (req, res) {
        per.findOneAndUpdate({ _id: req.params.person_data, },
            { $set: { name: req.body.name, age: req.body.age } }, { new: true },
            function (err, rule) {
                if (err) { return res.status(400).json(err) } else {

                    return res.status(200).json({ status: true, message: "data updated", data: rule })
                }
            })
    },
    perdelete: function (req, res) {
        console.log("in delete method");
        per.findOne({ _id: req.params.person_data })
            .remove(function (err, rule) {
                if (err) {
                    return res.status(400).json({ status: false, message: 'Databse error', data: err })
                } else {
                    return res.status(200).json({ status: true, message: 'Person Removed' })
                }
            });
    }
}
