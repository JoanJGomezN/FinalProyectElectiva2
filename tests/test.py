import os

def test_html_exists():
    assert os.path.exists("index.html"), "index.html no encontrado"

def test_html_content():
    with open("index.html", "r") as f:
        content = f.read()
        assert "<h1>Hola Mundo</h1>" in content, "El contenido del H1 no es correcto"