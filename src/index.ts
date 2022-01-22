import port from './components/general/settings';
import app from './app';
app.listen(port, () => {
    console.log(`Server is runnig on port: ${port}`);
}); 