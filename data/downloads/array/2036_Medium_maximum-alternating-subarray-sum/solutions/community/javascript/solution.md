# Javascript (Kadanes)

**Author:** Smoghimi
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/2786828/](https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/2786828/)

---

Big thanks to [@vortrubac](https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/1520407/kadane-s/) for helping me out with his solution when I was struggling. 

# Intuition
We're going to use Kadane's Algorithm to solve this problem. However we need to address the issue of applying Kadane's to an **alternating** sum. What if we turned the array into two arrays? One starting at 0 where every odd index is negative, and another starting at 1 where every even index is negative. Then we could apply kadane's to both and take the max of these two results. 

# Approach
As stated above we'll following this algorithm:
- "Split" the array into two arrays, one starting at 0, and one starting at 1.
- Call our kadane's function on each.
    - In our function, we'll initialize two variables. One to keep track of the `maxSoFar` and one to keep track of the `maxEndingHere`.
    - We'll iterate through the array:
        - if the index from our START position is odd, then we'll set out `maxEndingHere -= nums[i]`.
        - if the index from our START position is even, then we'll set our `maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i])`
        - Finally, our `maxSoFar = Math.max(maxSoFar, maxEndingHere)`

# Complexity
- Time complexity:
The complexity for this would be O(2n) -> O(n). We're iterating through the array twice. You could do this in one pass, however the code for that is much less clean and more confusing. But do note that this solution is **not** optimal.

# Code
```
const kadane = (nums, start) => {
    let maxSoFar = Number.NEGATIVE_INFINITY;
    let maxEndingHere = 0;
    for (let i = p; i < nums.length; i++) {
        if ((i+start) % 2) maxEndingHere-= nums[i];
        else maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

var maximumAlternatingSubarraySum = function(nums) {
    return Math.max(kadane(nums, 0), kadane(nums, 1));
};
```