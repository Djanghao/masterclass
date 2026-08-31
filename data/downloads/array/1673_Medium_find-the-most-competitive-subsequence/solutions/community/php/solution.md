# Solution Find the Most Competitive Subsequence

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/5252868/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/5252868/)

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
    public function mostCompetitive($nums, $k) {
        $N = count($nums);
        $ans = array();

        for ($i = 0; $i < $N; $i++) {
            while (!empty($ans) && end($ans) > $nums[$i] && $k - count($ans) <= $N - 1 - $i) {
                array_pop($ans);
            }
            if (count($ans) < $k) {
                $ans[] = $nums[$i];
            }
        }

        return $ans;
    }
}

```