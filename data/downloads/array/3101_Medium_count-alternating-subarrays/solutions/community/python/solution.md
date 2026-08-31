# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/5565234/](https://leetcode.com/problems/count-alternating-subarrays/solutions/5565234/)

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
    public long countAlternatingSubarrays(int[] nums) {
        long ans = 1;
        int sub=0;
        int prev=nums[0];
        for(int i=1; i<nums.length; i++){
            if(nums[i]!=prev){
                ans+=(i-sub);
            } else{
                sub=i;
            }
            ans+=1;
            prev=nums[i];
        }
        return ans;
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/0.jpeg)