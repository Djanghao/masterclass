# PHP and Python solution

**Author:** __bakhtiyoroff__
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/3428548/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/3428548/)

---

# Intuition
array[ i ]  = i * 2 - n + 1

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
PHP
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer[]
     */
    function sumZero($n) {
        $array= array();
        for ($i = 0; $i < $n; $i++){
            array_push($array, $i * 2 - $n + 1);
        }
        return $array;
    }
}
```

Python
``` 
class Solution:
    def sumZero(self, n: int) -> List[int]:
       array = [ int(i * 2 - n + 1) for i in range(n)]
       return array
```