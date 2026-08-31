# Java || 1000% beats ❤️❤️ || 0(N) || Easy || 🙇‍♂️

**Author:** saurabh_kumar1
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/4030126/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/4030126/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:0(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:0(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int sumOfSquares(int[] nums) {
        int ans = 0;
        for(int i=0; i<nums.length; i++){
            if(nums.length%(i+1)==0) ans+=(nums[i]*nums[i]);
        }
        return ans;
    }
}
```