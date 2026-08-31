# Java Discuss case by case(beat 100%)

**Author:** ezbuckeye
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1844710/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1844710/)

---

The idea is quite simple and straitforward based on observation:
1)when n==1
2)when n > 1
        1. when k > n
        2. when k == n
        3. when k < n
```
class Solution {
    public int maximumTop(int[] nums, int k) {
        int n = nums.length, max = -1;
		
        if(n==1){
            if(k%2==1)  return -1;
            else    return nums[0];
        }
		
        if(k<n) max = nums[k];
        else if(k>n)    k = n+1;
		
        for (int i = 0; i < k-1; i++) {
            max = Math.max(max, nums[i]);
        }
        return max;
    }
}
```
