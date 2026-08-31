# JS. Short easy solution (Two pointers)

**Author:** AndriiShmerchuk
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/4627269/](https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/4627269/)

---

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarrayLength = function(nums) {
    n = nums
    max = 0
    for (let i = 0; i < n.length; i++) {
        right = n.length - 1
        if(n[i] <= n[right]){
            while(n[i] <= n[right]){
                right--
            }
        }
        max = Math.max(max, right - i + 1)
    }
    return max
};
```
![6869340e-9701-4d57-a400-b4cb401b6b43_1696803348.8049564.jpeg](./images/0.jpeg)
