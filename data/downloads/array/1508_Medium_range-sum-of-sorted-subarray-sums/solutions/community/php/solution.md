# 🔥🔥 Explicación y Resolución Del Ejercicio En Español Java | Python | PHP | JavaScript | C++ 🔥🔥

**Author:** hermescoder02
**Votes:** 4
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5605222/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5605222/)

---

# Lectura
Dado un listado nums de enteros, calcule la suma de todos sus subarreglos en un nuevo arreglo, y ordena los resultados en forma creciente. Tambi\xE9n dan dos \xEDndices, izquierda y derecha. Devuelva la suma de los n\xFAmeros que est\xE1n entre ambos \xEDndices del nuevo array. Si el n\xFAmero es enorme, devu\xE9lvase el m\xF3dulo 109 + 7.



Entrada: nums= [1,2,3,4], n = 4, izquierda = 1, derecha = 5
Respuesta: 13 
Explicaci\xF3n: Las sumas de los subarreglos son 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. Despu\xE9s de ordenarlas en orden creciente, tenemos el nuevo arreglo:
[1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. 
La suma de los n\xFAmeros del \xEDndice izquierda= 1 al derecha= 5 
es 1 + 2 + 3 + 3 + 4 = 13.

**Explicaci\xF3n:**

https://youtu.be/eCyYlEw9VsI

Si te gust\xF3 el contenido \xA1te invito a suscribirte!: 
\u2705https://www.youtube.com/@hermescoder?sub_confirmation=1

\u2705 Informaci\xF3n sobre clases particulares de algoritmos y programaci\xF3n:
https://www.instagram.com/p/CxvsUwYOzFx/

# C\xF3digo 

```Java []
class Solution {
    public int rangeSum(int[] nums, int n, int izquierda, int derecha) {
        int max_size = n * (n + 1) / 2;
        int[] numeros = new int[max_size];

        int index = 0;
        for (int i = 0; i < n; i++) {
            int max = nums[i];
            numeros[index++] = max;
            for (int j = i + 1; j < n; j++) {
                max += nums[j];
                numeros[index++] = max;
            }
        }

        // Ordenar el array
        Arrays.sort(numeros);

        int response = 0;
        int mod = 1_000_000_007;
        for (int i = izquierda - 1; i < derecha; i++) {
            response = (response + numeros[i]) % mod;
        }

        return response;
    }
}
```

```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $n
     * @param Integer $left
     * @param Integer $right
     * @return Integer
     */
    function rangeSum($nums, $n, $izquierda, $derecha) {
          $max_size = $n * ($n + 1) / 2;
            $numeros = array(); 

            $index = 0;
            for ($i = 0; $i < $n; $i++) {
                $max = $nums[$i];
                $numeros[$index++] = $max;
                for ($j = $i + 1; $j < $n; $j++) {
                    $max += $nums[$j];
                    $numeros[$index++] = $max;
                }
            }

            sort($numeros);

            $response = 0;
            $mod = 1e9 + 7;
            for ($i = $izquierda - 1; $i < $derecha; $i++) {
                $response = ($response + $numeros[$i]) % $mod;
            }

            return $response;
    }
}
```

```Python []
class Solution(object):
    def rangeSum(self, nums, n, izquierda, derecha):
        max_size = n * (n + 1) // 2
        numeros = [0] * max_size

        index = 0
        for i in range(n):
            maximo = nums[i]
            numeros[index] = maximo
            index += 1
            for j in range(i + 1, n):
                maximo += nums[j]
                numeros[index] = maximo
                index += 1

        numeros.sort()

        response = 0
        mod = 10**9 + 7
        for i in range(izquierda - 1, derecha):
            response = (response + numeros[i]) % mod

        return response
```
```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, izquierda, derecha) {
        const max_size = n * (n + 1) / 2;
        const numeros = new Array(max_size);

        let index = 0;
        for (let i = 0; i < n; i++) {
            let max = nums[i];
            numeros[index++] = max;
            for (let j = i + 1; j < n; j++) {
                max += nums[j];
                numeros[index++] = max;
            }
        }

        numeros.sort((a, b) => a - b);

        let response = 0;
        const mod = 1e9 + 7;
        for (let i = izquierda - 1; i < derecha; i++) {
            response = (response + numeros[i]) % mod;
        }

        return response;
};
```

```C++ []
class Solution {
public:
    int rangeSum(vector<int>& nums, int n, int izquierda, int derecha) {
        int max_size = n * (n + 1) / 2;
        int numeros[max_size];
        
        int index = 0;
        for (int i = 0; i < n; i++) {
            int max = nums[i];
            numeros[index++] = max;
            for (int j = i + 1; j < n; j++) {
                max += nums[j];
                numeros[index++] = max;
            }
        }

        // Ordenar el array
        sort(numeros, numeros + max_size);

        int response = 0;
        int mod = 1e9 + 7;
        for (int i = izquierda - 1; i < derecha; i++) {
            response = (response + numeros[i]) % mod;
        }

        return response;

        }
};
```


![upvote.png](./images/0.png)


