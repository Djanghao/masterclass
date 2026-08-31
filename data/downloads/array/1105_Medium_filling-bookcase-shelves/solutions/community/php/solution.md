# 🔥🔥 Explicación y Resolución Del Ejercicio En Español Java | Python | PHP | JavaScript | C++ 🔥🔥

**Author:** hermescoder02
**Votes:** 3
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/5564301/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/5564301/)

---

# Lectura
1105 Filling Bookcase Shelves

El ejercicio consiste en organizar una colecci\xF3n de libros en un librero de forma que se minimice la altura total ocupada.

Hay que encontrar una manera de organizar los libros en los estantes de manera que la suma de las alturas de todos los estantes sea la menor posible.


Ejemplo:

Entrada: libros = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], 
Ancho del estante = 4
Salida: 6

**Explicaci\xF3n:**
La suma de las alturas de los 3 estantes es 1 + 3 + 2 = 6.
Observe que el libro n\xFAmero 2 no tiene por qu\xE9 estar en el primer estante.


Si te gust\xF3 el contenido \xA1te invito a suscribirte!: 
\u2705https://www.youtube.com/@hermescoder?sub_confirmation=1

\u2705 Informaci\xF3n sobre clases particulares de algoritmos y programaci\xF3n:
https://www.instagram.com/p/CxvsUwYOzFx/

# Pasos para realizar el algoritmo:

**1.-** Se calcula el n\xFAmero total de libros.
Se crea un arreglo para realizar programaci\xF3n dinamica de tama\xF1o n+1. 
Cada elemento representar\xE1 la altura m\xEDnima para colocar los primeros libros.

**2.-**  La altura inicial siempre va a ser 0.

**3.-**  Recorremos todos los libros, iniciando en la posici\xF3n 1, porque la posici\xF3n 0 es 0.

**4.-**   Inicializamos la altura actual como la altura del libro actual, y agregamos la altura actual en el estante que estamos evaluando.
  
**5.-**  Iteramos sobre los libros anteriores para ver si podemos colocarlos en el mismo estante.

Se actualiza el ancho actual.

Si el ancho excede el ancho m\xE1ximo del estante, se finaliza el bucle, porque pasamos al siguiente libro.

Se actualiza dp[i] si la nueva aluta de libros resulta menor.

**6.-** Se retorna la altura m\xEDnima para colocar todos los libros almacenados en dp[n].

# C\xF3digo 

```Java []
class Solution {
    public int minHeightShelves(int[][] libros, int anchoEstante) {
        //Paso#1
        //Se calcula el n\xFAmero total de libros.
        //Se crea un arreglo para realizar programaci\xF3n dinamica de tama\xF1o n+1. 
        //Cada elemento representar\xE1 la altura m\xEDnima para colocar los primeros libros.
        int n = libros.length;
        int[] dp = new int[n + 1];

        //Paso#2
        //La altura inicial siempre va a ser 0
        dp[0] = 0;

        //Paso#3
        //Recorremos todos los libros, iniciando en la posici\xF3n 1, porque la posici\xF3n 0 es 0
        for (int i = 1; i <= n; i++) {
            //Paso#4
            // Inicializamos la altura actual como la altura del libro actual, y agregamos
            // la altura actual en el estante que estamos evaluando
            int alturaActual = libros[i - 1][1];
            int anchoActual  = libros[i - 1][0];
            dp[i] = dp[i - 1] + alturaActual; // Si ponemos el libro actual en un nuevo estante

            //Paso#5
            // Iteramos sobre los libros anteriores para ver si podemos colocarlos en el mismo estante
            for (int j = i - 1; j >= 1; j--) {
                //Se actualiza el ancho actual.
                anchoActual += libros[j - 1][0];
                //Si el ancho excede el ancho m\xE1ximo del estante, se finaliza el bucle, porque pasamos al siguiente libro.
                if (anchoActual > anchoEstante) break;

                //Se actualiza la altura actual si el libro anterior es m\xE1s alto.
                
                alturaActual = Math.max(alturaActual, libros[j - 1][1]);
                //Se actualiza dp[i] si la nueva aluta de libros resulta menor.
                dp[i] = Math.min(dp[i], dp[j - 1] + alturaActual);
            }
        }

        //Paso#6
        //Se retorna la altura m\xEDnima para colocar todos los libros almacenados en dp[n].
        return dp[n];
    }
}
```

```PHP []
class Solution {

    /**
     * @param Integer[][] $books
     * @param Integer $shelfWidth
     * @return Integer
     */
    function minHeightShelves($libros, $anchoEstante) {
         //Paso#1
        $n = count($libros);
        $dp = array_fill(0, $n + 1, 0);

        //Paso#2
        $dp[0] = 0;

        //Paso#3
        for ($i = 1; $i <= $n; $i++) {
            //Paso#4
            $alturaActual = $libros[$i - 1][1];
            $anchoActual  = $libros[$i - 1][0];
            $dp[$i] = $dp[$i - 1] + $alturaActual; 
            //Paso#5

            for ($j = $i - 1; $j >= 1; $j--) {
                $anchoActual += $libros[$j - 1][0];

                if ($anchoActual > $anchoEstante) break;

         
                $alturaActual = max($alturaActual, $libros[$j - 1][1]);
                $dp[$i] = min($dp[$i], $dp[$j - 1] + $alturaActual);
            }
        }

        //Paso#6
        return $dp[$n];
    }
}
```

```Python []
class Solution(object):
    def minHeightShelves(self, libros, ancho_estante):
        # Paso#1
        n = len(libros)
        dp = [0] * (n + 1)

        # Paso#2
        dp[0] = 0
        
        # Paso#3
        for i in range(1, n + 1):
            # Paso#4
            altura_actual = libros[i - 1][1]
            ancho_actual = libros[i - 1][0]
            dp[i] = dp[i - 1] + altura_actual

            # Paso#5
            for j in range(i - 1, 0, -1):
                ancho_actual += libros[j - 1][0]

               
                if ancho_actual > ancho_estante:
                    break
                altura_actual = max(altura_actual, libros[j - 1][1])
                dp[i] = min(dp[i], dp[j - 1] + altura_actual)

        # Paso#6
        return dp[n]
```
```JavaScript []
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(libros, anchoEstante) {
       // Paso #1
        const n = libros.length;
        const dp = new Array(n + 1).fill(0);

        // Paso #2
        dp[0] = 0;

        // Paso #3
        for (let i = 1; i <= n; i++) {
            // Paso #4
            let alturaActual = libros[i - 1][1];
            let anchoActual = libros[i - 1][0];
            dp[i] = dp[i - 1] + alturaActual;

            // Paso #5
            for (let j = i - 1; j >= 1; j--) {
                anchoActual += libros[j - 1][0];
                if (anchoActual > anchoEstante) break;
                alturaActual = Math.max(alturaActual, libros[j - 1][1]);
                dp[i] = Math.min(dp[i], dp[j - 1] + alturaActual);
            }
        }

        // Paso #6
        return dp[n];
};
```

```C++ []
class Solution {
public:
    int minHeightShelves(vector<vector<int>>& libros, int anchoEstante) {
        // Paso #1
        int n = libros.size();
        vector<int> dp(n + 1);

        // Paso #2
        dp[0] = 0;

        // Paso #3
        for (int i = 1; i <= n; i++) {
            // Paso #4
            int alturaActual = libros[i - 1][1];
            int anchoActual  = libros[i - 1][0];
            dp[i] = dp[i - 1] + alturaActual; 

            // Paso #5
            for (int j = i - 1; j >= 1; j--) {
                anchoActual += libros[j - 1][0];

                if (anchoActual > anchoEstante) break;
                alturaActual = max(alturaActual, libros[j - 1][1]);
                dp[i] = min(dp[i], dp[j - 1] + alturaActual);
            }
        }

        // Paso #6
        return dp[n];
    }
};
```


![upvote.png](./images/0.png)


