# Solution Advantage Shuffle

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/advantage-shuffle/solutions/4807561/](https://leetcode.com/problems/advantage-shuffle/solutions/4807561/)

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

    function advantageCount($nums1, $nums2) {
        $v = [];
        foreach ($nums2 as $index => $value) {
            $v[] = [$value, $index];
        }
        sort($nums1);
        usort($v, function($a, $b) {
            return $a[0] - $b[0];
        });
        $n = count($v);
        $res = array_fill(0, $n, -1);
        $j = 0;
        for ($i = 0; $i < $n; $i++) {
            if ($v[$j][0] < $nums1[$i]) {
                $res[$v[$j][1]] = $nums1[$i];
                $nums1[$i] = -1;
                $j++;
            }
        }
        $j = 0;
        for ($i = 0; $i < $n; $i++) {
            if ($nums1[$i] != -1) {
                while ($res[$j] != -1) {
                    $j++;
                }
                $res[$j] = $nums1[$i];
            }
        }
        return $res;
    }
}

```