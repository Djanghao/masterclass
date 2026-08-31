# PHP 2 cycles 6 lines solution

**Author:** doctorilla
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/2771443/](https://leetcode.com/problems/odd-string-difference/solutions/2771443/)

---

```
class Solution {

    function oddString($words) {

        $res = $arr = [];

        foreach ($words as $key => $value){

          $tmp = str_split($value);

          for ($i = 1; $i < count($tmp); $i++) $arr[$i-1] = ord($tmp[$i]) - ord($tmp[$i-1]);

          $res[$key] = serialize($arr);
          
        }

        return $words[array_search(array_search(1, array_count_values($res)), $res)];
    }
}
```