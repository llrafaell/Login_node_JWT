
import app from './app';
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.info('Express server listening on http://localhost:3000');
});