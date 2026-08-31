# 🔥🔥 Explicación y Resolución Del Ejercicio En Español Java | Python | PHP | JavaScript | C++ 🔥🔥

**Author:** hermescoder02
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/5144847/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/5144847/)

---

# Lectura
*Tama\xF1o m\xEDnimo de la suma del subarreglo (Java, Python, PHP, C++, Javascript)*

Dado un array de n\xFAmeros y un objetivo, devuelve el tama\xF1o m\xEDnimo del subarreglo cuya suma sea mayor o igual a dicho objetivo. Si este subarreglo no existe, devuelve 0 en su lugar.

El subarreglo [4,8] tiene la longitud m\xEDnima bajo la restricci\xF3n del problema

![1.png](https://hermescoder.com/images/leetcode_espanol/minimum-size-subarray-sum/1.png)
# Video

https://youtu.be/wuzQlUI8aeY

Si te gust\xF3 el contenido \xA1te invito a suscribirte!: 
\u2705https://www.youtube.com/@hermescoder?sub_confirmation=1

# Pasos para realizar el algoritmo:

**1.-** Se inicializan  las siguientes variables:
- **Valor M\xEDnimo**: guardar\xE1 la longitud m\xE1s peque\xF1a del subarreglo encontrado, y se inicializa con el valor entero m\xE1ximo.
- **Suma**: mantendr\xE1 el total actual de los elementos del subarreglo.
- **Izquierda y derecha**: marcar\xE1n el \xEDndice inicial y final del subarreglo actual.

**2.-** Se recorre el arreglo **nums** y se agrega el valor del elemento actual en el \xEDndice **derecha** a la variable **suma**.


**3.-** Se verifica si la **suma** es mayor o igual que el **objetivo**, si es as\xED, se ejecuta el paso #4. En caso contrario, se contin\xFAa el ciclo.


**4.-** Se ejecuta un ciclo mientras la suma es mayor o igual que el objetivo, y en \xE9l se realizan los siguientes pasos:
- Se actualiza **valor M\xEDnimo** con el valor m\xE1s peque\xF1o entre el actual y la longitud del subarreglo (**derecha** - **izquierda** + 1).
- Se resta el valor del elemento en el \xEDndice **izquierda** de la variable **suma**.
- Se incrementa el valor de **izquierda**.

**4.-** Se retorna la variable **valor m\xEDnimo** si se modific\xF3, o en caso contrario se devuelve 0.


# C\xF3digo 

```Java []
public class Solution {

    public int minSubArrayLen(int target, int[] nums) {
        //Paso#1
        int valorMinimo = 9999999;
        int suma = 0;
        int izquierda = 0;
        int derecha = 0;
        
        //Paso#2
        for (derecha = 0; derecha < nums.length; derecha++) {
            suma += nums[derecha];

            //paso#3
            while (suma >= target) {
                //paso#4
                valorMinimo = Math.min(valorMinimo, derecha - izquierda + 1);
                suma -= nums[izquierda];
                izquierda++;
            }
        }

        //paso#5
        return valorMinimo == 9999999 ? 0 : valorMinimo;
    }
}
```

```PHP []
class Solution {

    /**
     * @param Integer $target
     * @param Integer[] $nums
     * @return Integer
     */
    public function minSubArrayLen($target, $nums) {
        //Paso #1
        $valorMinimo = 9999999;
        $suma = 0;
        $izquierda = 0;
        $derecha = 0;

        //Paso #2
        for ($derecha = 0; $derecha < count($nums); $derecha++) {
            $suma += $nums[$derecha];

            //Paso #3
            while ($suma >= $target) {
                //Paso #4
                $valorMinimo = min($valorMinimo, $derecha - $izquierda + 1);
                $suma -= $nums[$izquierda];
                $izquierda++;
            }
        }

        //Paso #5
        return $valorMinimo == 9999999 ? 0 : $valorMinimo;
    }

}
```

```Python []
class Solution(object):
    def minSubArrayLen(self, target, nums):
        """
        :type target: int
        :type nums: List[int]
        :rtype: int
        """
        # Paso 1
        valor_minimo = 9999999
        suma = 0
        izquierda = 0
        derecha = 0

        # Paso 2
        for derecha in range(len(nums)):
            suma += nums[derecha]

            # Paso 3
            while suma >= target:
            # Paso 4
                valor_minimo = min(valor_minimo, derecha - izquierda + 1)
                suma -= nums[izquierda]
                izquierda += 1

        # Paso 5
        return 0 if valor_minimo == 9999999 else valor_minimo

```
```JavaScript []
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // Paso 1
    let valorMinimo = 9999999 ;
    let suma = 0;
    let izquierda = 0;
    let derecha = 0;

    // Paso 2
    for (derecha = 0; derecha < nums.length; derecha++) {
        suma += nums[derecha];

        // Paso 3
        while (suma >= target) {
        // Paso 4
        valorMinimo = Math.min(valorMinimo, derecha - izquierda + 1);
        suma -= nums[izquierda];
        izquierda++;
        }
    }

    // Paso 5
    return valorMinimo === 9999999  ? 0 : valorMinimo;
};
```

```C++ []
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
          // Paso #1
        int valorMinimo = 9999999;
        int suma = 0;
        int izquierda = 0;
        int derecha = 0;

        // Paso #2
        for (derecha = 0; derecha < nums.size(); derecha++) {
            suma += nums[derecha];

            // Paso #3
            while (suma >= target) {
            // Paso #4
                valorMinimo = min(valorMinimo, derecha - izquierda + 1);
                suma -= nums[izquierda];
                izquierda++;
            }
        }

        // Paso #5
        return valorMinimo == 9999999 ? 0 : valorMinimo;

    }
};
```
![upvote.png](./images/0.png)

# Imagenes de la Explicaci\xF3n 
![10.png](https://hermescoder.com/images/leetcode_espanol/minimum-size-subarray-sum/10.png)

![1.png](https://hermescoder.com/images/leetcode_espanol/minimum-size-subarray-sum/1.png)

![2.png](https://hermescoder.com/images/leetcode_espanol/minimum-size-subarray-sum/2.png)

![3.png](https://hermescoder.com/images/leetcode_espanol/minimum-size-subarray-sum/3.png)

![4.png](https://hermescoder.com/images/leetcode_espanol/minimum-size-subarray-sum/4.png)

![5.png](https://hermescoder.com/images/leetcode_espanol/minimum-size-subarray-sum/5.png)

![6.png](https://hermescoder.com/images/leetcode_espanol/minimum-size-subarray-sum/6.png)

![7.png](https://hermescoder.com/images/leetcode_espanol/minimum-size-subarray-sum/7.png)

![8.png](https://hermescoder.com/images/leetcode_espanol/minimum-size-subarray-sum/8.png)

![9.png](https://hermescoder.com/images/leetcode_espanol/minimum-size-subarray-sum/9.png)


# Mas ejercicios de leetcode en espa\xF1ol \uD83D\uDE42

- [Length of Last Word (longitud de la \xFAltima palabra)
](https://leetcode.com/problems/length-of-last-word/solutions/4885539/explicacion-y-resolucion-del-ejercicio-en-espanol-java-python-php-javascript/)

- [Integer To Roman (Entero a romano)
](https://leetcode.com/problems/integer-to-roman/solutions/4872642/explicacion-y-resolucion-del-ejercicio-en-espanol-java-python-php-javascript-c/)

- [Median of two sorted arrays (Mediana de dos arrays ordenadas)
](https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/4843610/explicacion-y-resolucion-del-ejercicio-en-espanol-java-python-php-javascript-c/)


- [Container with most water (Recipiente con m\xE1s agua)
](https://leetcode.com/problems/container-with-most-water/solutions/4797655/explicacion-y-resolucion-del-ejercicio-en-espanol-java-python-php-javascript-c/)

- [Linked list cycle II (Ciclo de una lista enlazada II)
](https://leetcode.com/problems/linked-list-cycle-ii/solutions/4757653/explicacion-y-resolucion-del-ejercicio-en-espanol-java-python-php-javascript-c/)
