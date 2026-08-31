# 🔥🔥 Explicación y Resolución Del Ejercicio En Español Java | Python | PHP | JavaScript | C++ 🔥🔥

**Author:** hermescoder02
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-the-people/solutions/5514777/](https://leetcode.com/problems/sort-the-people/solutions/5514777/)

---

# Lectura
2418 Sort the People

Dado un arreglo de nombres y uno de alturas. 
Devuelve los nombres ordenados en orden descendente seg\xFAn la altura de las personas.

Entrada: nombres = ["Mary","John","Emma"], alturas = [180,165,170]
Salida: ["Mary","Emma","John"]

# Video

https://youtu.be/upsztc9nx3g

Si te gust\xF3 el contenido \xA1te invito a suscribirte!: 
\u2705https://www.youtube.com/@hermescoder?sub_confirmation=1

\u2705 Informaci\xF3n sobre clases particulares de algoritmos y programaci\xF3n:
https://www.instagram.com/p/CxvsUwYOzFx/

# Pasos para realizar el algoritmo:

**1.-** Declaramos un hashmap, y a los elementos, le colocamos como \xEDndice la altura y como valor el nombre de la persona.

**2.-** Ordenamos el arreglo de alturas, esto con el fin de conocer quienes son los m\xE1s altos.

**3.-** Creamos un nuevo arreglo, llamado respuesta. Y este arreglo lo rellenaremos con los nombres correspondientes, basados en las posiciones del arreglo de alturas.

# C\xF3digo 

```Java []
class Solution {
    public String[] sortPeople(String[] nombres, int[] alturas) {

        //Paso #1
        HashMap<Integer,String> nuevoMapa = new HashMap<Integer,String>();
        for(int i = 0;i<nombres.length;i++) nuevoMapa.put(alturas[i],nombres[i]);

        //Paso #2

        Arrays.sort(alturas);

        //Paso #3

        String respuesta[] = new String[alturas.length];
        int indice =0;
        for(int i = alturas.length-1;i>=0;i--) respuesta[indice++] = nuevoMapa.get(alturas[i]);


        //Paso #4
        return respuesta;

    }
}
```

```PHP []
class Solution {

    /**
     * @param String[] $names
     * @param Integer[] $heights
     * @return String[]
     */
    function sortPeople($nombres, $alturas) {
        // Paso #1
        $nuevoMapa = [];
        for ($i = 0; $i < count($nombres); $i++) {
            $nuevoMapa[$alturas[$i]] = $nombres[$i];
        }

        // Paso #2
        sort($alturas);

        // Paso #3
        $respuesta = [];
        $indice = 0;
        for ($i = count($alturas) - 1; $i >= 0; $i--) {
            $respuesta[$indice++] = $nuevoMapa[$alturas[$i]];
        }

        // Paso #4
        return $respuesta;
    }
}
```

```Python []
class Solution(object):
    def sortPeople(self, nombres, alturas):
        nuevoMapa  = {}
        for i in range(len(nombres)):
            nuevoMapa [alturas[i]] = nombres[i]

        alturas.sort()

        respuesta = [None] * len(alturas)
        indice = 0
        for altura in reversed(alturas):
            respuesta[indice] = nuevoMapa[altura]
            indice += 1

        return respuesta

```
```JavaScript []

/*El c\xF3digo da error, lo ajustar\xE9 mas adelante*/
var sortPeople = function(nombres, alturas) {
   // Paso 1: Crear un mapa para almacenar pares de nombre-altura
  const nuevoMapa = {};
  for (let i = 0; i < nombres.length; i++) {
    nuevoMapa[alturas[i]] = nombres[i];
  }

  // Paso 2: Ordenar el array de alturas
  alturas.sort();

  // Paso 3: Crear un array para almacenar la respuesta ordenada
  const respuesta = new Array(alturas.length);
  let indice = 0;
  for (let i = alturas.length - 1; i >= 0; i--) {
    respuesta[indice++] = nuevoMapa[alturas[i]];
  }

  // Paso 4: Retornar el array de respuesta
  return respuesta;
}
```

```C++ []
class Solution {
public:
    vector<string> sortPeople(vector<string>& nombres, vector<int>& alturas) {
        map<int, string> nuevoMapa;
        for (int i = 0; i < nombres.size(); i++) {
            nuevoMapa[alturas[i]] = nombres[i];
        }

       
        sort(alturas.begin(), alturas.end());

     
        vector<string> respuesta(alturas.size());
        int indice = 0;
        for (int i = alturas.size() - 1; i >= 0; i--) {
            respuesta[indice++] = nuevoMapa[alturas[i]];
        }

     
        return respuesta;
    }
};
```

