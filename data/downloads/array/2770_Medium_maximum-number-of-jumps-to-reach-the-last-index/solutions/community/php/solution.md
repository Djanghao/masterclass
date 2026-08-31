# ✅Leetcode 45. Jump Game II  || Java || C++ || PHP

**Author:** priyanshu3237
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3739108/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3739108/)

---

# Do upvote if it helps
<!-- Describe your first thoughts on how to solve this problem. -->

# Slight Variation of Jump Game II
<!-- Describe your approach to solving the problem. -->

# Complexity
- O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- o(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Java
```
    public int maximumJumps(int[] nums, int target) {
        int []dp = new int[nums.length];

        dp[0] = 0;//0 jump required to reach the dirst element
        for (int i = 1;i<nums.length;++i)
            dp[i] = Integer.MIN_VALUE;
        for (int i = 1;i<nums.length;++i) {
            //check if we can reach till i 
            for (int j = 0;j<i;++j) {
                //condition given in question
                if (Math.abs(nums[j]-nums[i])<=target)
                {
                    //update dp if preiously reached index is not MIN Value
                    if (dp[j] != Integer.MIN_VALUE)
                        dp[i] = Math.max(dp[i], dp[j]+1);
                }
            }
        }
        return dp[nums.length-1] == Integer.MIN_VALUE ? -1 : dp[nums.length-1];
    }
```
# C++
```
class Solution {
public:
    int maximumJumps(vector<int>& nums, int target) {
       int n = nums.size();
       vector<int> dp(n, INT_MIN);
       dp[0] = 0;

       for (int i = 1; i < n; ++i) {
          for (int j = 0; j < i; ++j) {
              if (nums[j] - nums[i] <= target && nums[j] - nums[i] >= -target)
                 if (dp[j] != INT_MIN)
                    dp[i] = max(dp[i], dp[j] + 1);
          }
       }

       return dp[n - 1] == INT_MIN ? -1 : dp[n-1];
    }
};
```
# PHP

```
  function maximumJumps($nums, $target) {
        $n = count($nums);
        
        $dp = array();
        for ($i = 1;$i<$n;$i++)
            $dp[$i] = PHP_INT_MIN;
        for ($i = 1;$i<$n; $i++)
        {
            for ($j = 0;$j<$i; $j++) {
                if (abs($nums[$j]-$nums[$i])<=$target)
                if ($dp[$j] != PHP_INT_MIN)
                    $dp[$i] = max($dp[$i], $dp[$j]+1);
            }
        }
        
        return $dp[$n-1] == PHP_INT_MIN ? -1 : $dp[$n-1];
    }
```