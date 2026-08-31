# Count Distinct Numbers on Board

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/6137979/](https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/6137979/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function distinctIntegers($n) {
        $count++;
        for($i=$n;$i>0;$i--){
            if($n%$i===1){
                return $this->distinctIntegers($i)+1;
            }
        }
        return $count;
    }
}
```