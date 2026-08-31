# C# Solution || Fast Solution using Sliding window

**Author:** mohamedAbdelety
**Votes:** 3
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3333482/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3333482/)

---

# Complexity
- Time complexity:
O(N)
- Space complexity:
O(1)
# Code
```
public class Solution {
    public int[] GetAverages(int[] nums, int k) {
        int[] r = new int[nums.Length];
        for(int i = 0; i < r.Length;i++) r[i] = -1;
        int totalCount = 2 * k + 1;
        long sum = 0;
        for(int i = 0; i < nums.Length;i++){
            sum+= nums[i];
            if(i >= 2 * k){
                long val = sum / totalCount;
                r[i - k] = (int)val;
                sum-= nums[i - (2 * k)];
            }
        }
        return r;
    }
}
```