# Решение через функцию abs() и цикл

**Author:** yabortnik
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/5164638/](https://leetcode.com/problems/maximum-gap/solutions/5164638/)

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
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maximumGap($nums) {
        if(count($nums)<2) {
            return 0;
        }
        $diff = 0;
        sort($nums);
        foreach ($nums as $val) {
            if(isset($tmpVal)) {
                $rez = abs($tmpVal - $val);
                if($diff < $rez) {
                    $diff = $rez;
                }
                $tmpVal = $val;
            }
            else {
                $tmpVal = $val;
            }
        }        
        return $diff;       
    }
}
```