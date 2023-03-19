const path = require('path');

exports.getHomepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'homepage.html'));
}