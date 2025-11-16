const Candidate = require('../models/candidate.js')
const async = require('async')

const addFile = async (req, res) => {
    const data = req.body
    
    async.eachSeries(data, (file, callback) => {
        const processRecord = async () => {
            try {

                const record = {
                    name: file["Name of the Candidate"],
                    email: file["Email"],
                    currentDesignation: file["Current Designation"],
                    currentEmployer: file["Current Employer"],
                    currentLocation: file["Current Location"],
                    dateOfBirth: file["Date of Birth"],
                    mobileNo: file["Mobile No."],
                    postalAddress: file["Postal Address"],
                    resumeTitle: file["Resume Title"],
                    workExperience: file["Work Experience"],
                };
                // console.log(file)
                // console.log("Parsed Record:")
                // console.log(record)
                // console.log("----------------")

                const existingCandidate = await Candidate.findOne(record);
                if (existingCandidate) {
                    return callback(); 
                }
                const existingWithEmail = await Candidate.findOne({ email: record.email });
                if (existingWithEmail) {
                    return callback({ type: "duplicate", record });
                }
                // console.log(existingCandidate.email)


                await Candidate.create(record);
                callback();

            } catch (error) {
                callback(error);
            }
        };

        processRecord();
    }, (error) => {
        if (error) {    
            if (error.type == "duplicate") {
                return res.status(409).json({ message: 'Duplicate email found' });
            }
            console.log(error.record);
            return res.status(500).json({ message: 'Server Error' });
        }

        return res.status(200).json({ message: 'File received' });
    });
}

module.exports = { addFile }