# Easy solution with 100% beat

**Author:** anmoldhingra_code
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/5579162/](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/5579162/)

---


# Complexity
- Time complexity:
O[N]
- Space complexity:
O[1]

# Code
```
public class Solution {
    public long BeautifulSubarrays(int[] nums) {
        long count=0;
        int xr=0;
        Dictionary<int, int> hashMap= new Dictionary<int,int>();
        hashMap[xr]=1;
        for (int i = 0; i < nums.Length; i++) {
           xr = xr ^ nums[i];
           if (hashMap.ContainsKey(xr)) {
               count += hashMap[xr];
               hashMap[xr]++;
           } else {
               hashMap[xr] = 1;
           }
       }
        return count;
    }
}
```