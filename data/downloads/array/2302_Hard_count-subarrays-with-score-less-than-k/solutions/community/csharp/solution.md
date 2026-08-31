# O(n) TC O(1) SC. Easy 2 Pointer approach

**Author:** vg2503
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/5636063/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/5636063/)

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
public class Solution {
    public long CountSubarrays(int[] nums, long k) {
        int n = nums.Length;
        long sum = 0;
        int i = 0; int j = 0;
        long count = 0;
        while(j < n){
            sum += nums[j];
            long score = sum * (j - i + 1);
            if(score >= k){
                while(score >= k && i < n){
                    sum -= nums[i];
                    i++;
                    score = sum * (j - i + 1);
                }
            }
            if(score < k){
                count += j - i + 1;
            }
            j++;
        }
        return count;
    }
}
```