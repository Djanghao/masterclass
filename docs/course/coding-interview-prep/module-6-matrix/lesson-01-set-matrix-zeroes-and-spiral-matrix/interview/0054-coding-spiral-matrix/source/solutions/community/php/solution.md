# 🔥🔥 Explicación y Resolución Del Ejercicio En Español Java | Python | PHP | JavaScript | C++ 🔥🔥

**Author:** hermescoder02
**Votes:** 5
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/5628662/](https://leetcode.com/problems/spiral-matrix/solutions/5628662/)

---

# Lectura
Dada una matriz de m x n, devuelva todos los elementos de la matriz en orden espiral.


**Explicaci\xF3n:**

https://youtu.be/0myV9SMKtsM

Si te gust\xF3 el contenido \xA1te invito a suscribirte!: 
\u2705https://www.youtube.com/@hermescoder?sub_confirmation=1

\u2705 Informaci\xF3n sobre clases particulares de algoritmos y programaci\xF3n:
https://www.instagram.com/p/CxvsUwYOzFx/

# C\xF3digo 

```Java []
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
           int N = matrix.length;
        int M = matrix[0].length;

        int derecha = 0;
        int izquierda = N - 1;
        int arriba = 0;
        int abajo = M - 1;

        int total = N * M;

        List<Integer> response = new ArrayList<>();
        int cont = 0;

        while (cont < total) {
            // Recorrido Hacia la derecha.
            for (int j = arriba; j <= abajo && cont < total; j++) {
                response.add(matrix[derecha][j]);
                cont++;
            }
            derecha++;

            // Recorrido Hacia Abajo.
            for (int i = derecha; i <= izquierda && cont < total; i++) {
                response.add(matrix[i][abajo]);
                cont++;
            }
            abajo--;

            // Hacia la izquierda.
            for (int j = abajo; j >= arriba && cont < total; j--) {
                response.add(matrix[izquierda][j]);
                cont++;
            }
            izquierda--;

            // Recorrido Hacia arriba.
            for (int i = izquierda; i >= derecha && cont < total; i--) {
                response.add(matrix[i][arriba]);
                cont++;
            }
            arriba++;
        }

        return response;
    }
}
```

```PHP []
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Integer[]
     */
    function spiralOrder($matrix) {
        $N = count($matrix);
    $M = count($matrix[0]);

    $derecha = 0;
    $izquierda = $N - 1;
    $arriba = 0;
    $abajo = $M - 1;

    $total = $N * $M;
    $response = [];
    $cont = 0;

    while ($cont < $total) {
        // Recorrido Hacia la derecha.
        for ($j = $arriba; $j <= $abajo && $cont < $total; $j++) {
            $response[$cont] =  $matrix[$derecha][$j];
            $cont++;
        }
        $derecha++;

        // Recorrido Hacia Abajo.
        for ($i = $derecha; $i <= $izquierda && $cont < $total; $i++) {
             $response[$cont] = $matrix[$i][$abajo];
            $cont++;
        }
        $abajo--;

        // Hacia la izquierda.
        for ($j = $abajo; $j >= $arriba && $cont < $total; $j--) {
             $response[$cont] = $matrix[$izquierda][$j];
            $cont++;
        }
        $izquierda--;

        // Recorrido Hacia arriba.
        for ($i = $izquierda; $i >= $derecha && $cont < $total; $i--) {
            $response[$cont] = $matrix[$i][$arriba];
            $cont++;
        }
        $arriba++;
    }

    return $response;
    }
}
```

```Python []
class Solution(object):
    def spiralOrder(self, matriz):
        filas = len(matriz)
        columnas = len(matriz[0])

        derecha = 0
        izquierda = filas - 1
        arriba = 0
        abajo = columnas - 1

        total = filas * columnas
        resultado = []
        cont = 0
        while cont < total:
            # Recorrido hacia la derecha.
            for j in range(arriba, abajo + 1):
                if cont < total:
                    resultado.append(matriz[derecha][j])
                    cont += 1
            derecha += 1

            # Recorrido hacia abajo.
            for i in range(derecha, izquierda + 1):
                if cont < total:
                    resultado.append(matriz[i][abajo])
                    cont += 1
            abajo -= 1

            # Hacia la izquierda.
            for j in range(abajo, arriba - 1, -1):
                if cont < total:
                    resultado.append(matriz[izquierda][j])
                    cont += 1
            izquierda -= 1

            # Recorrido hacia arriba.
            for i in range(izquierda, derecha - 1, -1):
                if cont < total:
                    resultado.append(matriz[i][arriba])
                    cont += 1
            arriba += 1

        return resultado
```
```JavaScript []
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matriz) {
    const N = matriz.length;
    const M = matriz[0].length;

    let derecha = 0;
    let izquierda = N - 1;
    let arriba = 0;
    let abajo = M - 1;

    const total = N * M;
    const respuesta = [];
    let cont = 0;

    while (cont < total) {
        // Recorrido Hacia la derecha.
        for (let j = arriba; j <= abajo && cont < total; j++) {
            respuesta.push(matriz[derecha][j]);
            cont++;
        }
        derecha++;

        // Recorrido Hacia Abajo.
        for (let i = derecha; i <= izquierda && cont < total; i++) {
            respuesta.push(matriz[i][abajo]);
            cont++;
        }
        abajo--;

        // Hacia la izquierda.
        for (let j = abajo; j >= arriba && cont < total; j--) {
            respuesta.push(matriz[izquierda][j]);
            cont++;
        }
        izquierda--;

        // Recorrido Hacia arriba.
        for (let i = izquierda; i >= derecha && cont < total; i--) {
            respuesta.push(matriz[i][arriba]);
            cont++;
        }
        arriba++;
    }

    return respuesta;
};
```

```C++ []
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matriz) {

        int N=matriz.size();
        int M=matriz[0].size();
        

        int derecha = 0;
        int izquierda = N - 1;
        int arriba = 0;
        int abajo = M - 1;

        
        int total=N*M;

        vector<int> response;
        int cont=0;

        while (cont<N*M) {
                //Recorrido Hacia la derecha.	
                for (int j = arriba; j <= abajo && cont<total; j++){
                    response.push_back(matriz[derecha][j]);
                    cont++;
                } 
                derecha++;

                //Recorrido Hacia Abajo.
                for (int i = derecha; i <= izquierda  && cont<total; i++)  {
                    response.push_back(matriz[i][abajo]);
                    cont++;
                }          
                abajo--;
                
                //Hacia la izquierda.
                for (int j = abajo; j >= arriba  && cont<total; j--) {
                    response.push_back(matriz[izquierda][j]);
                    cont++;
                }     
                izquierda--;
                
                //Recorrido Hacia arriba.
                for (int i = izquierda; i >= derecha  && cont<total; i--){
                    response.push_back(matriz[i][arriba]);
                    cont++;
                }            
                arriba++;
        }
        
        return response;
    };
};
```


![upvote.png](./images/0.png)


