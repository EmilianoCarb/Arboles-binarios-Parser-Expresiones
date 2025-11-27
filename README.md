# Evaluador de Expresiones Aritméticas con Árboles Binarios

## Descripción General
Este proyecto es una aplicación web capaz de analizar ecuaciones matemáticas infijas (ej. `3+4*5`), convertirlas en una estructura de datos de árbol binario, y evaluar su resultado mediante recorridos PreOrder (Prefijo) y PostOrder (Posfijo).

El sistema respeta la jerarquía de operaciones matemáticas (multiplicación y división se ejecutan antes que suma y resta).

## Estructura del Proyecto

El código está organizado en módulos para separar la lógica de negocio, las estructuras de datos y las funciones auxiliares.

### 📁 `arbol.js` (Modelo de Datos)
Define las clases base del sistema:
* **Clase `nodo`**: Representa cada unidad de la ecuación. Contiene el valor (`this.valor`) y los punteros a sus hijos (`izquierda`, `derecha`).
* **Clase `Arbol`**: Maneja la raíz y los algoritmos recursivos de recorrido (`preOrder`, `postOrder`).

### 📁 `funcAuxiliares.js` (Lógica de Soporte)
Contiene las herramientas de bajo nivel para la manipulación de arreglos y cálculos:
* **Manejo de Memoria**: Funciones `eliminar` e `insertar` personalizadas para gestionar el arreglo de nodos.
* **`buscarSimbolos(array, p, s)`**: Función modular que encapsula la lógica de búsqueda y construcción de subárboles, simplificando el controlador principal.
* **Cálculo**: Funciones `operacionesPre` y `operaracionesPost` que resuelven la aritmética usando pilas (Stacks).

### 📁 `app.js` (Controlador)
Orquesta el funcionamiento de la aplicación:
* **`arbol(ecuacion)`**: Convierte el texto en objetos y llama a `buscarSimbolos` por niveles de jerarquía (*, / primero; +, - después) para ensamblar el árbol final.
* **`preOrder` y `postOrder`**: Funciones evaluadoras que toman las cadenas generadas por el árbol y calculan el resultado numérico final.

## Instalación y Ejecución

1.  Descargue los archivos en una misma carpeta:
    * `index.html`
    * `app.js`
    * `arbol.js`
    * `funcAuxiliares.js`
2.  Abra el archivo `index.html` en su navegador web preferido.
3.  Ingrese una ecuación matemática (dígitos simples) y presione "Generar y Evaluar".

## Ejemplo de Funcionamiento
**Entrada:** `3+4*5`

1.  El sistema detecta `*` mediante `buscarSimbolos`. Agrupa `4` y `5` en un nodo.
2.  El sistema detecta `+`. Agrupa `3` y el nodo resultante de la multiplicación.
3.  **Salida PreOrder:** `+3*45` -> Resultado: `23`
4.  **Salida PostOrder:** `345*+` -> Resultado: `23`

---
*Versión 1.0 - JavaScript Vanilla*
