# JAVA | Beats 100% | Easy To Understand | Two Pointers

**Author:** justkvl
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/2518418/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/2518418/)

---

This solution works based on the two pointer pattern. We can use two pointers to maintain the subarray which contains elements with strictly increasing order. for such each range, we can find number of possible combination with `n * n-1 / 2`.

```
class Solution {
    public long countSubarrays(int[] nums) {        
        long result =0;
        int start=0, end=1;
        long n = 0;
        while(end < nums.length){
			// if current element is not strictly increasing than previous
            if(nums[end] <= nums[end - 1]){ 
				// range - 1
                n = end - start; 
				// calculating numbers of subarray from the range
                result += (n * (n+1))/2; 
                start = end;
            }
            end ++;
        }
        n = end- start;
        result += (n * (n+1))/2; 
        return result;
    }
}

```
