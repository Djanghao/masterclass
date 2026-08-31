# JavaScript Solution

**Author:** wisemilk
**Votes:** 0
**Link:** [https://leetcode.com/problems/movement-of-robots/solutions/5129295/](https://leetcode.com/problems/movement-of-robots/solutions/5129295/)

---

# Intuition
We can first simulate the movement of the robots according to the given directions. Then, we can calculate the distances between pairs of robots at each time step and sum them up.

# Approach
1. Simulate the movement of the robots according to the given directions.
2. For each time step, calculate the distances between pairs of robots.
3. Sum up the distances between all pairs of robots at each time step.
4. Return the total sum of distances modulo 10^9 + 7 

# Complexity
- Time complexity:
O(n log n) due to sorting, where n is the number of robots.

- Space complexity:
O(n) for storing the modified positions of the robots.

# Code
```
var sumDistance = function(nums, s, d) {
    let sum = 0;
    let n = nums.length;
    nums = nums.map((val, i) => (s[i] === "L" ? val - d : val + d));
    nums.sort((a, b) => a - b);
    
    let prefixSum = Array(n).fill(0);
    prefixSum[0] = nums[0];
    
    for (let i = 1; i < n; i++) {
        prefixSum[i] = (prefixSum[i - 1] + nums[i]) % 1000000007;
    }
    
    for (let i = 1; i < n; i++) {
        sum = (sum + i * nums[i] - prefixSum[i - 1]) % 1000000007;
    }
    
    return sum;
};

```