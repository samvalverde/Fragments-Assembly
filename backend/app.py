from flask import Flask, jsonify, request
from flask_cors import CORS
from generator.fragment_generator import generate_fragments

# source venv/Scripts/activate
# python app.py

app = Flask(__name__)
CORS(app)  # Permite llamadas desde React

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    sequence = data.get('sequence', '')
    count = int(data.get('count', 5))
    mean_length = int(data.get('mean_length', 5))
    std_dev = float(data.get('std_dev', mean_length * 0.1))

    fragments = generate_fragments(sequence, count, mean_length, std_dev)
    return jsonify({'fragments': fragments})

@app.route('/')
def index():
    return jsonify({'message': 'Flask API lista 🎉'})

if __name__ == '__main__':
    app.run(debug=True)
