
const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("",(req, res) => {
    res.send("Speial team-Team4");
});
app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});
