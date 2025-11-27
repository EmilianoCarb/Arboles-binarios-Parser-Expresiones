function convStringANodo(t)
{
    let arreglo = [];
    for (let i = 0, length = t.length; i < length; i++)
        arreglo.push(new nodo(t[i]));
    return arreglo;
}

function convertirArray(t)
{
    let arreglo = [];
    for (let i = 0, length = t.length; i < length; i++)
    {        
        arreglo.push(t[i]);
    } 
    return arreglo;
}

function eliminar(arreglo, posicion) 
{
    for (let i = posicion, length = arreglo.length; i< length; i++)
    {
        arreglo[i] = arreglo[i+1];
    }
    arreglo.pop()
}

function insertar(arreglo, posicion, valor) 
{
    arreglo.push(arreglo[arreglo.length - 1]);
    for (let i = arreglo.length -2; i > posicion; i--)
    {
        arreglo[i] = arreglo[i-1];
    }
    arreglo[posicion] = valor;
}

function operacionesPre(op, array) 
    {
        let a = array.pop();
        let b = array.pop();
        if (op == "*")
        {
            array.push(a * b);
        }
        else if (op == "/") 
        {
            array.push(a / b);
        }
        else if (op == "+") 
        {
            array.push(a + b);
        }
        else if (op == "-") 
        {
            array.push(a - b);
        }
    }
    
function operaracionesPost(op, array) 
{    
    let b = array.pop();
    let a = array.pop();
    if (op == "+") 
    {
        array.push(a + b);
    }
    else if (op == "-") 
    {
        array.push(a - b);
    }
    else if (op == "*") 
    {
        array.push(a * b);
    }
    else if (op == "/") 
    {
        array.push(a / b);
    }
}

function buscarSimbolos(array, p, s) 
{
    
    for (let i = 0; i < array.length; i++) 
    {
        if (array[i].valor == p || array[i].valor == s) 
        {
            let nodo = array[i];
            nodo.izquierda = array[i - 1];
            nodo.derecha = array[i + 1];

            eliminar(array, i - 1);
            eliminar(array, i - 1);
            eliminar(array, i - 1);
            insertar(array, i - 1, nodo);
            i--;
        }
    }

}