# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 58
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5507616/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5507616/)

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
    public boolean check(int[] nums) {
        int count=0;
        if (nums[0] < nums[nums.length - 1]) {
            count++;
        }
        for(int i=0;i<nums.length-1;i++){
            if(nums[i]>nums[i+1]){
                count++;
            }
            if(count>1){
                return false;
            }
        }
        return true;
    }
   
}
```

![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/0.jpeg)