const fs = require("fs");

test("index.html debe existir", () => {
    // Verificar que el archivo index.html exista
    expect(fs.existsSync("index.html")).toBe(true);
});

test("index.html debe contener el texto 'Hola Mundo' dentro de un <h1>", () => {
    // Leer el contenido del archivo index.html
    const content = fs.readFileSync("index.html", "utf8");

    // Verificar que contenga el texto correcto dentro del <h1>
    expect(content).toContain("<h1>Hola Mundo</h1>");
});
