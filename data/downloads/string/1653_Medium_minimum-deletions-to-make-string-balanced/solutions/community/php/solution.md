# 🔥🔥 Explicación y Resolución Del Ejercicio En Español Java | Python | PHP | JavaScript | C++ 🔥🔥

**Author:** hermescoder02
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5559904/](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5559904/)

---

# Lectura
1653 Minimum Deletions to Make String Balanced

Dada una cadena de caracteres que solo contiene las letras 'a' y 'b'.
El objetivo es encontrar el m\xEDnimo n\xFAmero de caracteres que debes eliminar para 
que no haya ninguna letra 'a' despu\xE9s de una letra 'b'.
En otras palabras, todas las 'a' deben aparecer antes que todas las 'b'.

Ejemplo:
    Entrada: s = "aababbab"
    Salida: 2
    Explicaci\xF3n: Puedes eliminar los caracteres en la posici\xF3n 2 y 6 para obtener 
    la cadena "aaabbb", que cumple con la condici\xF3n.




Si te gust\xF3 el contenido \xA1te invito a suscribirte!: 
\u2705https://www.youtube.com/@hermescoder?sub_confirmation=1

\u2705 Informaci\xF3n sobre clases particulares de algoritmos y programaci\xF3n:
https://www.instagram.com/p/CxvsUwYOzFx/

# Pasos para realizar el algoritmo:

**1.-**  Declaramos las siguientes variables:
**respuesta** : Almacenar\xE1 el n\xFAmero m\xEDnimo de eliminaciones que necesitamos hacer.
**cantidadB** : Contar\xE1 la cantidad de 'b' que hemos encontrado hasta el momento.

**2.-**  Recorremos la cadena y en cada iteraci\xF3n realizamos la siguiente l\xF3gica:

Si el car\xE1cter evaluado es una 'a', asignamos a respuesta el valor m\xEDnimo entre respuesta + 1 y la cantidad de 'b'.

En caso contrario, si el car\xE1cter evaluado es una 'b', simplemente sumamos la cantidad de 'b'.

**Ejemplo.-**      

Iteraciones para el string "**aababbab**":

                Iteraci\xF3n #1 ('a'):
                   La respuesta es igual al valor m\xEDnimo entre respuesta+1 (1) y cantidadB (0).
                   Es decir, respuesta = 0.

               Iteraci\xF3n #2 ('a'):
                   La respuesta es igual al valor m\xEDnimo entre respuesta+1 (1) y cantidadB (0).
                   Es decir, respuesta = 0.
         
               Iteraci\xF3n #3 ('b'):
                   Entonces cantidadB++ y ahora vale 1.
         
               Iteraci\xF3n #4 ('a'):
                    La respuesta es igual al valor m\xEDnimo entre respuesta+1 (1) y cantidadB (1)
                   Es decir, respuesta = 1.
         
         Al final, el c\xF3digo determina que el m\xEDnimo n\xFAmero de eliminaciones es 2.

**3.-** Devolvemos la respuesta.


# C\xF3digo 

```Java []

class Solution {
    public int minimumDeletions(String s) {
        // paso#1:
        int respuesta = 0;
        int cantidadB = 0;

        // paso#2
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'a') respuesta = Math.min(respuesta + 1, cantidadB);
            else  cantidadB++;
        }

    // paso#3:
        return respuesta;


    }
}
```

```PHP []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minimumDeletions($s) {
        // Paso#1:
        $respuesta = 0;
        $cantidadB = 0;

        // Paso#2
        for ($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] === 'a') {
                $respuesta = min($respuesta + 1, $cantidadB);
            } else {
                $cantidadB++;
            }
        }

        // Paso#3:
        return $respuesta;
    }
}

```

```Python []
class Solution(object):
    def minimumDeletions(self, s):
        respuesta = 0
        cantidad_b = 0

        for char in s:
            if char == 'a':
                respuesta = min(respuesta + 1, cantidad_b)
            else:
                cantidad_b += 1

        return respuesta
```
```JavaScript []
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    // paso#1:
  let respuesta = 0;
  let cantidadB = 0;

  // paso#2
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      respuesta = Math.min(respuesta + 1, cantidadB);
    } else {
      cantidadB++;
    }
  }

  // paso#3:
  return respuesta;
};
```

```C++ []
class Solution {
public:
    int minimumDeletions(string s) {
        // paso#1:
        int respuesta = 0;
        int cantidadB = 0;

        // paso#2
        for (char c : s) {
            if (c == 'a') {
                respuesta = std::min(respuesta + 1, cantidadB);
            } else {
                cantidadB++;
            }
        }

        // paso#3:
        return respuesta;
    }
};
```

