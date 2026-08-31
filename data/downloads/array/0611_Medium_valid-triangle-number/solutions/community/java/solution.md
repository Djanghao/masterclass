# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 97%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 8
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/5545753/](https://leetcode.com/problems/valid-triangle-number/solutions/5545753/)

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
//           //////////////////ATISHAY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\           \\\\
//           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\JAIN//////////////////           \\\\
class Solution {
    public int triangleNumber(int[] nums) {
        Arrays.sort(nums);
        int res = 0, n = nums.length, i, j, k;
        for(i = 0; i<n ; i++) {
            for(j = i+1, k = j+1; j<(n - 1) && k<=n;) {
                if(k == n || nums[i]+nums[j] <= nums[k]){
                    if(k > (j+1))
                        res += k - j - 1;
                    j++;
                }else k++;
            }
        }
        return res;
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/0.jpeg)