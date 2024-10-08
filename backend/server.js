require('dotenv').config({ path: '../.env.local' });

const app = require('./app');
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});