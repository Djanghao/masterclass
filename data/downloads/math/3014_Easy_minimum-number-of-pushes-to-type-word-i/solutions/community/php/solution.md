# ✅ Php easy solution. O(n)

**Author:** azizbekeshonaliyev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4604091/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4604091/)

---

# Code
```
class Solution {

    /**
     * @param String $word
     * @return Integer
     */
    function minimumPushes($word) {
        $l = strlen($word);
        
        $r = 0; $i = 1;
        do{
            $r += $l >= 8 ? $i * 8 : $l * $i;
            $l -=8;
            $i++;
        } while($l > 0);
            
        return $r;
    }
}
```