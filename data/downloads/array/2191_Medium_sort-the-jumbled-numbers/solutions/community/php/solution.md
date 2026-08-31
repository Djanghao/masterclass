# 🔥🔥 Explicación y Resolución Del Ejercicio En Español Java | Python | PHP | JavaScript | C++ 🔥🔥

**Author:** hermescoder02
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5526003/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5526003/)

---

# Lectura
2191 Sort the Jumbled Numbers
Input:   mapping = [8,9,4,0,2,1,3,5,7,6]  nums = [991,338,38]
Output:  respuesta = [338,38,991]

**Explicaci\xF3n:**
    Se traduce el n\xFAmero 991 de la siguiente manera:
        mapping[9] = 6, entonces todas las apariciones del d\xEDgito 9 se convertir\xE1n en 6.
        mapping[1] = 9, entonces todas las apariciones del d\xEDgito 1 se convertir\xE1n en 9. 
        Por lo tanto, el valor mapeado de 991 es 669.

**De manera similar:**
338 se mapea a 007, o 7 despu\xE9s de eliminar los ceros iniciales.
        38 se mapea a 07, que tambi\xE9n es 7 despu\xE9s de eliminar los ceros iniciales.
Como 338 y 38 comparten el mismo valor mapeado, deben permanecer en el mismo orden relativo.

 **Por lo tanto, la lista ordenada es [338, 38, 991].**


# Video

https://youtu.be/I8X6Gg7nvac

Si te gust\xF3 el contenido \xA1te invito a suscribirte!: 
\u2705https://www.youtube.com/@hermescoder?sub_confirmation=1

\u2705 Informaci\xF3n sobre clases particulares de algoritmos y programaci\xF3n:
https://www.instagram.com/p/CxvsUwYOzFx/

# Pasos para realizar el algoritmo:

**1.-** Declaramos una variable temporal que representa un arreglo bidimensional de enteros, y nos servir\xE1 para guardar el mapeo de los elementos

**2.-**  Este paso se encarga de mapear cada n\xFAmero en el arreglo nums a su correspondiente representaci\xF3n seg\xFAn el arreglo mapping y almacenar el resultado en un arreglo temporal.

**3.-** Ordenamos el arreglo temporal en base a la segunda columna.

**4.-** Ajustamos el resultado y lo devolvemos

# C\xF3digo 

```Java []

class Solution {
    public int[] sortJumbled(int[] mapping, int[] nums) {
        //paso#1
        int[][] temporal = new int[nums.length][2];

        //paso#2
        for (int i = 0; i < nums.length; i++) {
            String aux = "";
            String numeroEvaluado = String.valueOf(nums[i]);
            for (int j = 0; j < numeroEvaluado.length(); j++) {
                aux += mapping[numeroEvaluado.charAt(j) - '0'];
            }
            temporal[i] = new int[]{nums[i], Integer.parseInt(aux)};
        }

        //paso#3
        Arrays.sort(temporal, (a, b) -> a[1] - b[1]);

        //paso#4
        for (int i = 0; i < nums.length; i++) nums[i] = temporal[i][0];
        return nums;
    }
}
```

```PHP []
class Solution {

    /**
     * @param Integer[] $mapping
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortJumbled($mapping, $nums) {
        // paso #1
    $temporal = array_fill(0, count($nums), array(0, 0));

    // paso #2
    for ($i = 0; $i < count($nums); $i++) {
      $aux = "";
      $numeroEvaluado = strval($nums[$i]);
      for ($j = 0; $j < strlen($numeroEvaluado); $j++) {
        $aux .= $mapping[$numeroEvaluado[$j] - '0'];
      }
      $temporal[$i] = array($nums[$i], intval($aux));
    }

    // paso #3
    usort($temporal, function($a, $b) {
      return $a[1] <=> $b[1];
    });

    // paso #4
    for ($i = 0; $i < count($nums); $i++) {
      $nums[$i] = $temporal[$i][0];
    }
    return $nums;
    }
}

```

```Python []

```
```JavaScript []
/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    // Paso #1
  const temporal = new Array(nums.length).fill(0).map(() => new Array(2));

  // Paso #2
  for (let i = 0; i < nums.length; i++) {
    let aux = "";
    const numeroEvaluado = String(nums[i]);
    for (let j = 0; j < numeroEvaluado.length; j++) {
      aux += mapping[numeroEvaluado.charCodeAt(j) - 48]; // charCodeAt(j) - '0' equivalent
    }
    temporal[i] = [nums[i], parseInt(aux)];
  }

  // Paso #3
  temporal.sort((a, b) => a[1] - b[1]);

  // Paso #4
  for (let i = 0; i < nums.length; i++) {
    nums[i] = temporal[i][0];
  }
  return nums;
};
```

```C++ []
class Solution {
public:
    vector<int> sortJumbled(vector<int>& mapping, vector<int>& nums) {
        // Paso #1: Crear un vector temporal para almacenar informaci\xF3n
    std::vector<std::pair<int, int>> temporal(nums.size());

    // Paso #2: Recorrer los n\xFAmeros y generar su valor mapeado
    for (int i = 0; i < nums.size(); ++i) {
      std::string aux = "";
      std::string numeroEvaluado = std::to_string(nums[i]);
      for (int j = 0; j < numeroEvaluado.length(); ++j) {
        aux += std::to_string(mapping[numeroEvaluado[j] - '0']);
      }
      temporal[i] = {nums[i], std::stoi(aux)};
    }

    // Paso #3: Ordenar el vector temporal basado en el valor mapeado
    std::sort(temporal.begin(), temporal.end(), 
              [](const std::pair<int, int>& a, const std::pair<int, int>& b) {
                return a.second < b.second;
              });

    // Paso #4: Actualizar el vector original con los valores originales
    for (int i = 0; i < nums.size(); ++i) {
      nums[i] = temporal[i].first;
    }

    return nums;
    }
};
```

