# Time: O(n), Space: O(1)

**Author:** riyakushwaha
**Votes:** 32
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/1609540/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/1609540/)

---

Base: Maximum product of three numbers is possible only when all three numbers are positive or two numbers are negative and one is positive.

Approach1: 
1. Sort the array, so three max numbers are in the end of the array, two negative numbers whose product will be max will be on the start of the array.
2. return max of (nums[n-1]*nums[i-2]*nums[i-3], nums[0]*nums[1]*nums[n-1])

Approach2:
Find max1, max2, max3, min1 and min2 using a for loop
```
    public int maximumProduct(int[] nums) {
        int min1, min2, max1, max2, max3;
        min1 = min2 = Integer.MAX_VALUE;
        max1 = max2 = max3 = Integer.MIN_VALUE;
        for(int i = 0; i < nums.length; i++){
            //Updating maximums
            if(max1 < nums[i]){
                max3 = max2;
                max2 = max1;
                max1 = nums[i];
            }else if(max2 < nums[i]){
                max3 = max2;
                max2 = nums[i];
            }else if(max3 < nums[i]){
                max3 = nums[i];
            }
            
            //Updating minimums
            if(min1 > nums[i]){
                min2 = min1;
                min1 = nums[i];
            }else if(min2 > nums[i]){
                min2 = nums[i];
            }
            
        }
        
        return Math.max(max1 * max2 * max3 , min1 * min2 * max1);
    }

```
This solution beats 99.72 % of java submissions. Kindly **UPVOTE**, if this helps.
