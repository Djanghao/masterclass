# Solution Maximum Subarray Sum with One Deletion

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/4895042/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/4895042/)

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
     * @param Integer[] $arr
     * @return Integer
     */
    function maximumSum($arr) {
        $n = count($arr);
        $forward = array_fill(0, $n, 0);
        $currentSum = $arr[0];
        $forward[0] = $currentSum;
        $maxSum = $currentSum;

        for ($i = 1; $i < $n; $i++) {
            $currentSum = max($arr[$i], $currentSum + $arr[$i]);
            $forward[$i] = $currentSum;
            $maxSum = max($maxSum, $currentSum);
        }

        $backward = array_fill(0, $n, 0);
        $currentSum = $arr[$n - 1];
        $backward[$n - 1] = $currentSum;

        for ($i = $n - 2; $i >= 0; $i--) {
            $currentSum = max($arr[$i], $currentSum + $arr[$i]);
            $backward[$i] = $currentSum;
        }

        for ($i = 1; $i < $n - 1; $i++) {
            $maxSum = max($maxSum, $forward[$i - 1] + $backward[$i + 1]);
        }

        return $maxSum;
    }
}

```