# Maximum OR

**Author:** bluandesign
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-or/solutions/4103043/](https://leetcode.com/problems/maximum-or/solutions/4103043/)

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
     * @param Integer $k
     * @return Integer
     */
    function maximumOr($nums, $k) {
        $n = count($nums);
        $prev = [0];
        $post = [0];
        
        for ($i = 0; $i < $n; $i++) {
            $prev[] = $prev[count($prev) - 1] | $nums[$i];
        }
        
        for ($i = $n - 1; $i >= 0; $i--) {
            $post[] = $post[count($post) - 1] | $nums[$i];
        }
        
        $res = 0;
        for ($i = 0; $i < $n; $i++) {
            $cur = $nums[$i];
            $v = $cur * (2 ** $k) | $prev[$i] | $post[$n - $i - 1];
            if ($v > $res) {
                $res = $v;
            }
        }
        
        return $res;
    }
}
```