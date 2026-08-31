# Single Pass | Java Solution | O(n) | Easy to Understand

**Author:** darkstar_7
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5650978/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5650978/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
Whenever we encounter a consecutive element, just increment the count.
If count reaches window size 'k' means you have good window.
If prevEL is not consecutive, just reset the counter.


# Code
```
class Solution {
    public int[] resultsArray(int[] nums, int k) {
        int n = nums.length, cnt = 1;
        if(k == 1) return nums;
        int[] res = new int[n-k+1];
        Arrays.fill(res, -1);

        for(int i=1; i<n; i++)
        {
            if(nums[i] != nums[i-1]+1)
            cnt = 1;
            else
            {
                cnt++;
                if(cnt >= k)
                res[i-k+1] = nums[i];
            }
        }
        return res;
    }
}
```