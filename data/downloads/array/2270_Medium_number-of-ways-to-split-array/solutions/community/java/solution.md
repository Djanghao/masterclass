# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solutions/5565253/](https://leetcode.com/problems/number-of-ways-to-split-array/solutions/5565253/)

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
    public int waysToSplitArray(int[] nums) {
        int n=nums.length;
        long maxi=0;
        int ans=0;
        long submaxi=0;
        for(int i=0; i<n; i++){
            maxi+=nums[i];
        }
        for(int i=0; i<n-1; i++){
            submaxi+=nums[i];
            long sum = maxi-submaxi;
            if(submaxi>=sum){
                ans++;
            }
        }
        return ans;
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/0.jpeg)