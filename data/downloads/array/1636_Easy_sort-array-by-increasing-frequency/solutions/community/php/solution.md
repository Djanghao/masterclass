# 🔥🔥 Explicación y Resolución Del Ejercicio En Español Java | Python | PHP | JavaScript | C++ 🔥🔥

**Author:** hermescoder02
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5520197/](https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5520197/)

---

# Lectura
1636 Sort Array by Increasing Frequency

Dado un arreglo de enteros, hay que ordenarlo en orden creciente seg\xFAn la frecuencia de los valores. 
Si dichos valores tienen la misma frecuencia, ord\xE9nelos en orden decreciente.

Entrada: nums = [2,3,1,3,2]
Salida: [1,3,3,2,2]

Explicaci\xF3n: '2' y '3' tienen una frecuencia de 2, por lo que est\xE1n ordenados en orden decreciente.


# Video

https://youtu.be/uC1VJbMwXGY

Si te gust\xF3 el contenido \xA1te invito a suscribirte!: 
\u2705https://www.youtube.com/@hermescoder?sub_confirmation=1

\u2705 Informaci\xF3n sobre clases particulares de algoritmos y programaci\xF3n:
https://www.instagram.com/p/CxvsUwYOzFx/

# Pasos para realizar el algoritmo:

**1.-** Creamos un HashMap para almacenar las frecuencias. Recorremos el arreglo nums y agregamos un nuevo elemento, que tiene como clave el n\xFAmero evaluado y al valor se le va sumando uno.

**2.-**  Recorremos el hashmap de frecuencias y creamos una lista llamada response para almacenar tuplas que contienen el valor y su frecuencia correspondiente.

**3.-** Ordenamos la lista de tuplas por frecuencia y luego por elemento, en este caso, utilizamos el Collections.sort

**4.-** Creamos un nuevo arreglo para almacenar el resultado ordenado. Recorremos response, y por cada elemento, lo agregamos a result

**5.-** Retornamos el resultado

# C\xF3digo 

```Java []
/*

1636. Sort Array by Increasing Frequency

Dado un arreglo de enteros, hay que ordenarlo en orden creciente seg\xFAn la frecuencia de los valores. 
Si dichos valores tienen la misma frecuencia, ord\xE9nelos en orden decreciente.

Entrada: nums = [2,3,1,3,2]
Salida: [1,3,3,2,2]

Explicaci\xF3n: '2' y '3' tienen una frecuencia de 2, por lo que est\xE1n ordenados en orden decreciente.
 */


class Solution {
    public int[] frequencySort(int[] nums) {
        // paso#1: 
        //Creamos un HashMap para almacenar las frecuencias
        //Recorremos el arreglo nums y agregamos un nuevo elemento, que tiene como clave el n\xFAmero evaluado y al valor se le va sumando uno.
        HashMap<Integer, Integer> frecuencias = new HashMap<>();
        for (int num : nums) frecuencias.put(num, frecuencias.getOrDefault(num, 0) + 1);
        //frecuencias = {1=1, 2=2, 3=2}

        // paso#2
        // Recorremos el hashmap de frecuencias y creamos una lista llamada response para almacenar tuplas que contienen el valor y su frecuencia correspondiente.
        List<Integer[]> response = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : frecuencias.entrySet())  response.add(new Integer[]{entry.getKey(), entry.getValue()});
        /*response =[
            val   freq
             1      1
             2      2
             3      2
        ]*/

        // paso#3
        // Ordenamos la lista de tuplas por frecuencia y luego por elemento, en este caso, utilizamos el Collections.sort
        Collections.sort(response, (a, b) -> {
            if (a[1] == b[1]) return b[0] - a[0]; // Ordenar elementos con la misma frecuencia en orden descendente
            else return a[1] - b[1]; // Ordenar por frecuencia en orden ascendente
        });
        /*response =[
            val   freq
             1      1
             3      2
             2      2    
        ]*/

        //Paso#4
        //Creamos un nuevo arreglo para almacenar el resultado ordenado. Recorremos response, y por cada elemento, lo agregamos a result.
        int[] result = new int[nums.length];
        int index = 0;
        for (Integer[] tupla : response) {
            int val = tupla[0];
            int freq = tupla[1];
            for (int i = 0; i < freq; i++) result[index++] = val;
        }

        //result = [1,3,3,2,2]



        //paso#5
        //Retornamos el resultado
        return result;


    }
}
```

```PHP []
class Solution {
    function frequencySort($nums) {

      //  asort($nums);
        $response = array();

        foreach ($nums as $key => $value)  $response[$value]++;
        
        asort($response);

        $new_response=array();
        foreach ($response as $key => $value){

            $freq = $value;

            if(!isset($new_response[$freq]))$new_response[$freq]=array();
            
            for ($i = 0; $i < $freq; $i++)  array_push($new_response[$freq], $key);

            rsort($new_response[$freq]);
            
        }
        
        $new_response2= array();
          foreach ($new_response as $key => $value){

             foreach ($value as $key2 => $value2){
                array_push($new_response2,$value2);
             }

        }

        return $new_response2;
    
        
    }
}

```

```Python []
class Solution(object):
    def frequencySort(self, nums):
        frecuencias = {}
        for num in nums:
            frecuencias[num] = frecuencias.get(num, 0) + 1

        # Paso 2: Crear una lista de tuplas con valor y frecuencia
        respuesta = []
        for clave, valor in frecuencias.items():
            respuesta.append((valor, clave))

        # Paso 3: Ordenar la lista de tuplas por frecuencia y valor
        respuesta.sort(key=lambda x: (x[0], -x[1]))

        # Paso 4: Crear un nuevo array para almacenar el resultado ordenado
        resultado = [None] * len(nums)
        indice = 0
        for valor, clave in respuesta:
            for i in range(valor):
                resultado[indice] = clave
                indice += 1

        # Paso 5: Retornar el resultado
        return resultado

```
```JavaScript []

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    // Paso 1: Crear un objeto HashMap para almacenar las frecuencias
  const frecuencias = {};
  for (const num of nums) {
    frecuencias[num] = frecuencias[num] ? frecuencias[num] + 1 : 1;
  }
  // frecuencias = {1: 1, 2: 2, 3: 2}

  // Paso 2: Crear una lista para almacenar tuplas (valor, frecuencia)
  const response = [];
  for (const [key, value] of Object.entries(frecuencias)) {
    response.push([key, value]);
  }
  /* response = [
      [1, 1],
      [2, 2],
      [3, 2]
  ] */

  // Paso 3: Ordenar la lista por frecuencia y luego por valor
  response.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0]; // Ordenar elementos con la misma frecuencia en orden descendente
    else return a[1] - b[1]; // Ordenar por frecuencia en orden ascendente
  });
  /* response = [
      [1, 1],
      [3, 2],
      [2, 2]
  ] */

  // Paso 4: Crear un nuevo arreglo para almacenar el resultado ordenado
  const result = new Array(nums.length);
  let index = 0;
  for (const [value, freq] of response) {
    for (let i = 0; i < freq; i++) {
      result[index++] = value;
    }
  }

  // Paso 5: Retornar el resultado
  return result;
};
```

```C++ []
class Solution {
public:
    vector<int> frequencySort(vector<int>& nums) {
        // paso 1: Crear un mapa para almacenar las frecuencias
    map<int, int> frecuencias;
    for (int num : nums) {
        frecuencias[num]++;
    }

    // paso 2: Crear una lista de tuplas para almacenar el valor y su frecuencia
    vector<vector<int>> response;
    for (auto par : frecuencias) {
        response.push_back({par.first, par.second});
    }

    // paso 3: Ordenar la lista de tuplas por frecuencia y luego por valor
    sort(response.begin(), response.end(), [](const vector<int>& a, const vector<int>& b) {
        if (a[1] == b[1]) {
            return a[0] > b[0]; // Ordenar elementos con la misma frecuencia en orden descendente
        } else {
            return a[1] < b[1]; // Ordenar por frecuencia en orden ascendente
        }
    });

    // paso 4: Crear un nuevo vector para almacenar el resultado ordenado
    vector<int> result(nums.size());
    int index = 0;
    for (const vector<int>& tupla : response) {
        int valor = tupla[0];
        int frecuencia = tupla[1];
        for (int i = 0; i < frecuencia; i++) {
            result[index++] = valor;
        }
    }

    // paso 5: Retornar el resultado
    return result;
    }
};
```

