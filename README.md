# 🧬 Proyecto 2 - Generación, Fragmentación y Ensamblaje de Hileras Aleatorias de ADN

Curso: Introducción a la Biología Molecular Computacional
Tecnológico de Costa Rica – I Semestre 2025

Desarrollado por:

- Samuel Valverde Arguedas
- Erick Abarca Calderón

## 📁 Estructura del Proyecto

Fragments-Assembly/
├── backend/ # API con Flask (lógica del generador y ensamblador)
│ ├── app.py
│ ├── generator/
│ │ └── fragment_generator.py
│ ├── requirements.txt
│ └── venv/
├── frontend/ # Interfaz en React + Vite
│ ├── src/
│ ├── public/
│ └── ...
├── data/
│ ├── input/ # Archivos originales (ADN o texto)
│ └── output/ # Archivos generados (fragmentos, descriptores, ensamblaje)
├── .gitignore
└── README.md

## 🚀 Instalación y Ejecución

### ✅ Requisitos Previos

- Python 3.10 o superior  
- Node.js 18 o superior  
- Git  
- Navegador web moderno

## 🐍 Backend (Flask)

### 1. Ir a la carpeta del backend

bash
cd backend

### 2. Crear y activar entorno virtual

En Git Bash o Linux/Mac:

python -m venv venv
source venv/Scripts/activate

En PowerShell:

python -m venv venv
.\venv\Scripts\Activate.ps1

### 3. Instalar dependencias

pip install -r requirements.txt

### 4. Ejecutar el servidor Flask

python app.py

Servidor escuchando en: http://localhost:5000

## ⚛️ Frontend (React + Vite)

### 1. Ir a la carpeta del frontend

cd frontend

### 2. Instalar dependencias

npm install

### 3. Ejecutar la app de desarrollo

npm run dev

La interfaz estará disponible en: http://localhost:5173

## 🔗 Comunicación Backend ↔ Frontend

Flask actúa como API REST con CORS habilitado.

React realiza peticiones POST a http://localhost:5000/generate.

El backend devuelve una lista de fragmentos generados con base en la secuencia y parámetros enviados.

## 📁 Directorio de Datos

data/input/ → archivos de entrada (hilera base de ADN o texto).

data/output/ → fragmentos generados, archivos descriptivos, ensamblaje final.

## 👨‍💻 Créditos

Desarrollado por:

Samuel Valverde Arguedas

Erick Abarca Calderón

Curso: IC-8050 – Introducción a la Biología Molecular Computacional
Profesor: M.Sc. Esteban Arias Méndez
