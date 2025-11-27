function arbol(ecuacion)
{
    let eq = convStringANodo(ecuacion);

    buscarSimbolos(eq, "*","/");
    buscarSimbolos(eq, "+", "-");
    let arbol = new Arbol();
    arbol.raiz = eq[0];
    return arbol;
}

function preOrder(preO) {
    let pre = convertirArray(preO);
    let pila = [];


    while (pre.length) {
        let actual = pre.pop();
        if (actual >= "0" && actual <= "9") 
        {
            pila.push(Number(actual));
        } 
        else 
        {
            operacionesPre(actual, pila);
        }
    }

  return pila[0];
}

//

function postOrder(postO) {
    let post = convertirArray(postO);
    let pila = [];

   
    for (let i = 0; i < post.length; i++) 
    {
    let simbolo = post[i];
        if (simbolo >= "0" && simbolo <= "9") 
        {
            pila.push(Number(simbolo));
        } 
        else 
        {
            operaracionesPost(simbolo, pila);
        }
    }

    return pila[0];
}
