# php solution

**Author:** azizbekeshonaliyev
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4388857/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4388857/)

---

# Complexity
- Time complexity:
2  * O(n)

# Code
```
class Solution {

    /**
     * @param String $word
     * @return Integer
     */
    function removeAlmostEqualCharacters($word) {
        $arr = range('a', 'z');
        
        $arr = array_flip($arr);
        
        $values = [];
        
        $n = 0;
        for($i = 0; $i < strlen($word); $i++)
            $v[] = $arr[$word[$i]];
        
        for($i = 1; $i < count($v); $i++) {
            if($v[$i] - $v[$i - 1] == 1 || $v[$i] - $v[$i - 1] == 0 || $v[$i] - $v[$i - 1] == -1){
                $n++;
                $v[$i] = max($v) + 2;
            }
        }
        
        return $n;
    }
}
```