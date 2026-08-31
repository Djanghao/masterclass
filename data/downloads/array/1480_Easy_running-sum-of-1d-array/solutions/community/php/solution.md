# php solution

**Author:** orlovkn
**Votes:** 12
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/1132235/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/1132235/)

---

```
// Runtime: 4 ms, faster than 97.05% of PHP online submissions for Running Sum of 1d Array.
// Memory Usage: 15.8 MB, less than 87.76% of PHP online submissions for Running Sum of 1d Array.
function runningSum($nums) {
    $current[0] = $nums[0];
    for($i = 1; $i < sizeof($nums); $i++) {
        $current[$i] = $nums[$i] + $current[$i-1];
    }

    return $current;
}
```