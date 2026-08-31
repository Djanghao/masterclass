# 💡JavaScript Solution w/ Explanation

**Author:** AminiCK
**Votes:** 113
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/416395/](https://leetcode.com/problems/maximum-product-subarray/solutions/416395/)

---

#### The idea
This is something I would never come up by myself, so I'm using this discussion as an oppotunity to both reinforce the knowledge for myself and possibly share some insights with others.

The intuition is that we store the information about our previous maximum product, and as we iterate through the array, we keep using our previous maximum to calculate the new maximum product. 
The tricky part of this problem is that negative numbers exist in the input array. This causes situations where the smallest previous product (a negative number) can become the largest product if the next number in line is also a negative number.
Since the minimum product may have a chance to become the maximum, we need to store the information about the previous minimum as well and take it into account when we are calculating our maximum product.

#### Code Time
``` javascript
var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
        curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

		// updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
    }
    return result;
}
```