class nodo
{
    constructor(valor)
    {
        this.valor = valor
        this.izquierda = null;
        this.derecha = null;
    }
}

class Arbol 
{
    constructor()
    {
        this.raiz = null;
    }
    agregarRama(nodo)
    {
        let nuevo = new nodo(valor);
        if(nuevo == null)
        {
            this.raiz = nuevo;
        }
        else
        {
            do
            {
                let lado = actual;
                if (this.nodo.posicion < actual.posicion)
                {
                    actual = actual.izquierda;
                } 
                else if (this.nodo.posicion > actual.posicion)
                {
                    actual = actual.derecha;
                }
                lado = actual;
            } while(lado != null);
        }
    }

  
    preOrder(n = this.raiz) 
    {
        if (n == null) 
        {
            return "";
        }
        return n.valor + this.preOrder(n.izquierda) + this.preOrder(n.derecha);
    }

    postOrder(n = this.raiz) 
    {
        if (n == null) 
        {
            return "";
        }
        return this.postOrder(n.izquierda) + this.postOrder(n.derecha) + n.valor;
  }
}
