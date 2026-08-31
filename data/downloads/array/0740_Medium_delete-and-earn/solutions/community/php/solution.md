# array_count_values() + array_keys() + sort() + DP

**Author:** yieldtoben
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/5186783/](https://leetcode.com/problems/delete-and-earn/solutions/5186783/)

---

# Approach
Count array values, index and sort keys, DP

# Complexity
- Time complexity:
$$O(n\\ log\\ n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function deleteAndEarn($nums) 
    {
      $nums = array_count_values($nums);
      $N = array_keys($nums);
      sort($N);
      foreach($N as $i => $n)
      {
        $m = $nums[$n] * $n;
        if ($N[$i-1] == $n - 1)
          $nums[$n] = max($m + ($nums[$N[$i - 2]] ?? 0), ($nums[$N[$i - 1]] ?? 0));
        else
          $nums[$n] = $m + ($nums[$N[$i - 1]] ?? 0);
      }
      return $nums[end($N)];
    }
}
```