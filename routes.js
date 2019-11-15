app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("*", function (req, res) {
    res.sendStatus(404).end("404 not found");
});