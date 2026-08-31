# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 25
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/5501578/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/5501578/)

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
    public int maxOperations(int[] nums, int k) {
        int ops=0;
        int i=0; 
        int j= nums.length-1;
        Arrays.sort(nums);
        while(i<j){
            if(nums[i]+nums[j]==k){
                ops++;
                i++; j--;
            } else if(nums[i]+nums[j]>k){
                j--;
            } else{
                i++;
            }
        }
        return ops;
    }
}
```

![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/0.jpeg)