# Solution Maximum Distance in Arrays

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5650426/](https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5650426/)

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
    public function maxDistance($arrays) {
        $n = count($arrays);
        $min_num = $arrays[0][0];
        $max_num = $arrays[0][count($arrays[0]) - 1];
        $max_dis = PHP_INT_MIN;

        for ($i = 1; $i < $n; $i++) {
            $max_dis = max($max_dis, abs($arrays[$i][count($arrays[$i]) - 1] - $min_num), abs($arrays[$i][0] - $max_num));
            
            $min_num = min($min_num, $arrays[$i][0]);
            $max_num = max($max_num, $arrays[$i][count($arrays[$i]) - 1]);
        }

        return $max_dis;
    }
}

```