# C# Implementation.

**Author:** Noul
**Votes:** 0
**Link:** [https://leetcode.com/problems/burst-balloons/solutions/5472192/](https://leetcode.com/problems/burst-balloons/solutions/5472192/)

---

# Code
```
public class Solution {
    public int MaxCoins(int[] nums) {
        
        if(nums.Length == 0) {
            return 0;
        }

        int [] newNums = new int[nums.Length + 2];
        newNums[0] = 1; 
        Array.Copy(nums, 0, newNums, 1, nums.Length);
        newNums[newNums.Length - 1] = 1;
        int[,] cache = new int[newNums.Length, newNums.Length];
        for(int left = newNums.Length - 2; left >= 1; --left) {
            for(int right = left; right <= newNums.Length - 2; ++right) {
                
                for(int i = left; i <= right; ++i) {
                    int gain = newNums[left - 1] * newNums[i] * newNums[right + 1];
                    int remaining = cache[left, i - 1] + cache[i + 1, right];
                    cache[left, right] = Math.Max(remaining + gain, cache[left, right]);
                }
            }
        }
        return cache[1, newNums.Length - 2];
    }
}
```