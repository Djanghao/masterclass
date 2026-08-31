# C# Solution in O(N) time & without space

**Author:** mohamedAbdelety
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/3370403/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/3370403/)

---


# Complexity
- Time complexity:
O(N)
- Space complexity:
O(1)
# Code
```
public class Solution {
    public int MinDeletion(int[] nums) {
        int res = 0, i = 0;
        while(i < nums.Length){
            int j = i + 1;
            while(j < nums.Length && nums[j] == nums[i]){
                res++;
                j++;
            }
            if(j == nums.Length)res++;
            i = j + 1;
        }
        return res;
    }
}
```