# Fastest PHP Solution (13 ms, 18.76 mb)

**Author:** jampire
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-elements/solutions/3816625/](https://leetcode.com/problems/counting-elements/solutions/3816625/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function countElements($arr) {
        $result = 0;
        $map = array_flip($arr);
        foreach ($arr as $num) {
            if (isset($map[$num + 1])) {
                $result++;
            }
        }
        
        return $result;
    }
}
```