# 🔥🔥 Explicación y Resolución Del Ejercicio En Español Java | Python | PHP | JavaScript | C++ 🔥🔥

**Author:** hermescoder02
**Votes:** 4
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5537125/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5537125/)

---

# Lectura
2119 A Number After a Double Reversal

El ejercicio te da un n\xFAmero entero y te pide que realices dos inversiones.
Luego, debes determinar si el n\xFAmero resultante depu\xE9s de estas dos inversiones
es el mismo n\xFAmero que te dieron al inicio.

Ejemplo:

Si te dan el n\xFAmero 526, al invertirlo una vez obtienes 625.
Al volver a invertir 625, obtienes nuevamente 526.
Como el n\xFAmero final es igual al inicial, la respuesta es true.

En cambio

1200 al invertirlo es 21 y si lo vuelves a invertir da 12.
Es decir, que el n\xFAmero final no es igual al inicial.


# Video

https://youtu.be/So2d-b0xGt0

Si te gust\xF3 el contenido \xA1te invito a suscribirte!: 
\u2705https://www.youtube.com/@hermescoder?sub_confirmation=1

\u2705 Informaci\xF3n sobre clases particulares de algoritmos y programaci\xF3n:
https://www.instagram.com/p/CxvsUwYOzFx/


# C\xF3digo 

```Java []
class Solution {
    public boolean isSameAfterReversals(int num) {
        int numeroReverso            = reverseInteger(num);
        int doublenumeroReverso      = reverseInteger(numeroReverso);

        return num == doublenumeroReverso;
    }

    private int reverseInteger(int num){

        int numeroReverso = 0;
        int aux = num;

        while (aux > 0) {
            int nro = aux % 10;
            numeroReverso = numeroReverso * 10 + nro;
            aux /= 10;
        }

        return numeroReverso;
    }
}
```

```PHP []
class Solution {

    /**
     * @param Integer $num
     * @return Boolean
     */
    function isSameAfterReversals($num) {
                $numeroReverso = $this->reverseInteger($num);
            $doublenumeroReverso = $this->reverseInteger($numeroReverso);

            return $num == $doublenumeroReverso;
        }

        private function reverseInteger($num){
            $numeroReverso = 0;
            $aux = $num;

            while ($aux > 0) {
                $nro = $aux % 10;
                $numeroReverso = $numeroReverso * 10 + $nro;
                $aux = intdiv($aux, 10);
            }

            return $numeroReverso;
        }

}

```

```Python []
class Solution(object):
    def isSameAfterReversals(self, num):
        numeroReverso = self.reverseInteger(num)
        doublenumeroReverso = self.reverseInteger(numeroReverso)

        return num == doublenumeroReverso

    def reverseInteger(self, num):
        numeroReverso = 0
        aux = num

        while aux > 0:
            nro = aux % 10
            numeroReverso = numeroReverso * 10 + nro
            aux //= 10

        return numeroReverso
```
```JavaScript []
/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let numeroReverso = 0;
  let aux = num;
  while (aux > 0) {
    let nro = aux % 10;
    numeroReverso = numeroReverso * 10 + nro;
    // console.log(numeroReverso); // Optional for debugging
    aux = Math.floor(aux / 10); // Use Math.floor for integer division
  }
  let doublenumeroReverso = 0;
  aux = numeroReverso;
  while (aux > 0) {
    let nro = aux % 10;
    doublenumeroReverso = doublenumeroReverso * 10 + nro;
    aux = Math.floor(aux / 10);
  }
  return num === doublenumeroReverso;
};
```

```C++ []
class Solution {
public:
    bool isSameAfterReversals(int num) {
        int numeroReverso = reverseInteger(num);
        int doublenumeroReverso = reverseInteger(numeroReverso);

        return num == doublenumeroReverso;
    }

private:
    int reverseInteger(int num) {
        int numeroReverso = 0;
        int aux = num;

        while (aux > 0) {
            int nro = aux % 10;
            numeroReverso = numeroReverso * 10 + nro;
            aux /= 10;
        }

        return numeroReverso;
    }
};
```

