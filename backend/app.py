from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permitir peticiones desde el frontend

# Ruta de ejemplo: Obtener un mensaje de bienvenida
@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"message": "¡Hola desde Flask!"})

# Ruta para recibir datos del frontend (POST)
@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json  # Obtener datos del cuerpo de la solicitud
    if not data:
        return jsonify({"error": "No se enviaron datos"}), 400

    print(f"Datos recibidos: {data}")
    return jsonify({"message": "Datos recibidos correctamente", "data": data}), 200


if __name__ == '__main__':
    app.run(port=8080, debug=True)