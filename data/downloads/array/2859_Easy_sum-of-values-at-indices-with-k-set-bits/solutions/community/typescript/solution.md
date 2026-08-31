# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/6083147/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/6083147/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
public int sumIndicesWithKSetBits(List<Integer> nums, int k) {
    int sum = 0;

    for (int i = 0; i < nums.size(); i++) {
        if (countSetBits(i) == k) {
            sum += nums.get(i);
        }
    }

    return sum;
}

// Helper method to count the number of set bits (1s) in the binary representation of a number
private int countSetBits(int n) {
    int count = 0;
    while (n > 0) {
        count += (n & 1); // Increment if the last bit is 1
        n >>= 1;         // Right shift to process the next bit
    }
    return count;
}
```
```javascript []
var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;

    // Iterate through each index of the array
    for (let i = 0; i < nums.length; i++) {
        if (countSetBits(i) === k) {
            sum += nums[i];
        }
    }

    return sum;
};

// Helper function to count the number of set bits (1s) in the binary representation of a number
function countSetBits(n) {
    let count = 0;
    while (n > 0) {
        count += (n & 1); // Increment if the last bit is 1
        n >>= 1;          // Right shift to process the next bit
    }
    return count;
}
```
```typescript []
function sumIndicesWithKSetBits(nums: number[], k: number): number {
    let sum = 0;

    // Iterate through each index of the array
    for (let i = 0; i < nums.length; i++) {
        if (countSetBits(i) === k) {
            sum += nums[i];
        }
    }

    return sum;
};

// Helper function to count the number of set bits (1s) in the binary representation of a number
function countSetBits(n: number): number {
    let count = 0;
    while (n > 0) {
        count += (n & 1); // Increment if the last bit is 1
        n >>= 1;          // Right shift to process the next bit
    }
    return count;
}
```