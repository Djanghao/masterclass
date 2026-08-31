# Solution House Robber II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/4694795/](https://leetcode.com/problems/house-robber-ii/solutions/4694795/)

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
    function rob($nums) {
        $count = count($nums);
        
        if ($count === 1) {
            return $nums[0];
        }
        
        return max($this->robLinear(array_slice($nums, 0, $count - 1)), $this->robLinear(array_slice($nums, 1)));
    }
    
    function robLinear($nums) {
        $dp = [];
        $dp[0] = 0;
        $dp[1] = $nums[0];
        
        for ($i = 2; $i <= count($nums); $i++) {
            $dp[$i] = max($dp[$i - 1], $dp[$i - 2] + $nums[$i - 1]);
        }
        
        return $dp[count($nums)];
    }
}

```