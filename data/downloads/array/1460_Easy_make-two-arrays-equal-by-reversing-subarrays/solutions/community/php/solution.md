# 🔥🔥 Explicación y Resolución Del Ejercicio En Español Java | Python | PHP | JavaScript | C++ 🔥🔥

**Author:** hermescoder02
**Votes:** 3
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5577109/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5577109/)

---

# Lectura
1460 Make Two Arrays Equal by Reversing Subarray (Igualar dos matrices invirtiendo subarreglos)

El objetivo es conocer si dos arreglos(target y arr) son exactamente iguales cumpliendo la siguiente condici\xF3n: solo puedes invertir el orden de un subarreglo de arr.


Ejemplo:

Entrada:  	target= [1,2,3,4],  array= [2,4,1,3]
Salida: 	verdadero

Explicaci\xF3n: Puede seguir los siguientes pasos para convertir arr en destino:
1- Invertimos el siguiente subarreglo [2,4,1], arr se convierte en [1,4,2,3]
2- Invertimos el siguiente subarreglo [4,2], 	arr se convierte en [1,2,4,3]
3- Invertimos el siguiente subarreglo [4,3],	arr se convierte en [1,2,3,4]



https://youtu.be/2Uw6WwShs9U

Si te gust\xF3 el contenido \xA1te invito a suscribirte!: 
\u2705https://www.youtube.com/@hermescoder?sub_confirmation=1

\u2705 Informaci\xF3n sobre clases particulares de algoritmos y programaci\xF3n:
https://www.instagram.com/p/CxvsUwYOzFx/

# C\xF3digo 

```Java []
class Solution {
    public boolean canBeEqual(int[] target, int[] arr) {
        // Paso 1
        int maxV = 0;
        for (int num : target)  maxV = Math.max(maxV, num);
        for (int num : arr) maxV = Math.max(maxV, num);
    

        // Paso 2
        int[] tt = new int[maxV + 1];
        int[] ta = new int[maxV + 1];

        // Paso 3
        for (int num : target) tt[num]++;
        for (int num : arr) ta[num]++;
        
        // Paso 4
        for (int i = 0; i <= maxV; ++i) {
            if (tt[i] != ta[i]) return false;
        }

        // Paso 5
        return true;
    }
}
```

```PHP []
class Solution {

    /**
     * @param Integer[] $target
     * @param Integer[] $arr
     * @return Boolean
     */
    function canBeEqual($target, $arr) {
         // paso#1
    $maxV = 0;
    foreach ($target as $num) {
        $maxV = max($maxV, $num);
    }
    foreach ($arr as $num) {
        $maxV = max($maxV, $num);
    }

    // paso#2
    $tt = array_fill(0, $maxV + 1, 0);
    $ta = array_fill(0, $maxV + 1, 0);

    // paso#3
    foreach ($target as $num) {
        $tt[$num]++;
    }
    foreach ($arr as $num) {
        $ta[$num]++;
    }

    // paso#4
    for ($i = 0; $i <= $maxV; $i++) {
        if ($tt[$i] !== $ta[$i]) {
            return false;
        }
    }

    // paso#5
    return true;
    }
}
```

```Python []
class Solution(object):
    def canBeEqual(self, target, arr):
        # paso#1
        maxV = 0
        for num in target:
            maxV = max(maxV, num)
        for num in arr:
            maxV = max(maxV, num)

        # paso#2
        tt = [0] * (maxV + 1)
        ta = [0] * (maxV + 1)

        # paso#3
        for num in target:
            tt[num] += 1
        for num in arr:
            ta[num] += 1

        # paso#4
        for i in range(maxV + 1):
            if tt[i] != ta[i]:
                return False

        # paso#5
        return True
```
```JavaScript []
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    // paso#1
        let maxV = 0;
        for (let num of target) {
            maxV = Math.max(maxV, num);
        }
        for (let num of arr) {
            maxV = Math.max(maxV, num);
        }

        // paso#2
        let tt = new Array(maxV + 1).fill(0);
        let ta = new Array(maxV + 1).fill(0);

        // paso#3
        for (let num of target) {
            tt[num]++;
        }
        for (let num of arr) {
            ta[num]++;
        }

        // paso#4
        for (let i = 0; i <= maxV; i++) {
            if (tt[i] !== ta[i]) {
                return false;
            }
        }

        // paso#5
        return true;
};
```

```C++ []
class Solution {
public:
    bool canBeEqual(vector<int>& target, vector<int>& arr) {
        //paso#1
        int maxV= 0;
        for(int num: target)    maxV= max(maxV,num);
        for(int num: arr)       maxV= max(maxV,num);

        //paso#2
        vector<int> tt(maxV+1,0);
        vector<int> ta(maxV+1,0);
        
        //paso#3
        for (int num : target) tt[num]++;
        for (int num : arr)    ta[num]++;

        //paso#4
        for (int i = 0; i <= maxV; ++i) {
            if(tt[i]!=ta[i])return false;
        }

    
        //paso#5
        return true;
        
    }
};
```


![upvote.png](./images/0.png)


