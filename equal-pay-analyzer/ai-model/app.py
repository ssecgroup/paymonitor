from flask import Flask, request, jsonify # type: ignore
from transformers import pipeline
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)

# Load AI Model
ai_model = pipeline("text-classification", model="facebook/bart-large-mnli")

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json.get("text")
    result = ai_model(data)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, port=5001)
