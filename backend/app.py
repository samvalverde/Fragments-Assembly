from flask import Flask, jsonify, request
from flask_cors import CORS
from generator.fragment_generator import generate_fragments

app = Flask(__name__)
CORS(app)  # Permite llamadas desde React

@app.route('/')
def index():
    return jsonify({'message': 'API Flask funcionando correctamente 🎉'})

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    sequence = data.get('sequence', '')
    count = data.get('count', 5)
    mean_length = data.get('mean_length', 5)

    fragments = generate_fragments(sequence, count, mean_length)
    return jsonify({'fragments': fragments})

if __name__ == '__main__':
    app.run(debug=True)
