# Simple PHP Solution beats 100%

**Author:** quanvip1999
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4281031/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4281031/)

---

# Complexity
- Time complexity: O(nlog(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function sortVowels($s) {
        $t = '';
        $len = strlen($s);
        $vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        $vowelArr = [];
        for ($i = 0; $i < $len; $i++) {
            if (in_array($s[$i], $vowels)) {
                $vowelArr []= $s[$i];
            }
        }
        sort($vowelArr);
        $k = 0;
        for ($i = 0; $i < $len; $i++) {
            if (in_array($s[$i], $vowels)) {
                $t .=  $vowelArr[$k];
                $k++;
            } else {
                $t .= $s[$i];
            }
        }

        return $t;
    }
}
```