# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/5923664/](https://leetcode.com/problems/prime-in-diagonal/solutions/5923664/)

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
public int diagonalPrime(int[][] nums) {
    int maxPrime = 0;
    int n = nums.length;

    for (int i = 0; i < n; i++) {
        // Check the first diagonal (nums[i][i])
        if (isPrime(nums[i][i])) {
            maxPrime = Math.max(maxPrime, nums[i][i]);
        }
        
        // Check the second diagonal (nums[i][n - i - 1])
        if (isPrime(nums[i][n - i - 1])) {
            maxPrime = Math.max(maxPrime, nums[i][n - i - 1]);
        }
    }

    return maxPrime; 
}

// Helper function to check if a number is prime
private boolean isPrime(int num) {
    if (num <= 1) return false;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}
```
```javascript []
var diagonalPrime = function(nums) {
    // Helper function to check if a number is prime
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    let maxPrime = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        // Check the first diagonal (nums[i][i])
        if (isPrime(nums[i][i])) {
            maxPrime = Math.max(maxPrime, nums[i][i]);
        }
        
        // Check the second diagonal (nums[i][n - i - 1])
        if (isPrime(nums[i][n - i - 1])) {
            maxPrime = Math.max(maxPrime, nums[i][n - i - 1]);
        }
    }

    return maxPrime;
};
```
```typescript []
function diagonalPrime(nums: number[][]): number {
    // Helper function to check if a number is prime
    const isPrime = (num: number): boolean => {
        if (num <= 1) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    let maxPrime: number = 0;
    const n: number = nums.length;

    for (let i = 0; i < n; i++) {
        // Check the first diagonal (nums[i][i])
        if (isPrime(nums[i][i])) {
            maxPrime = Math.max(maxPrime, nums[i][i]);
        }
        
        // Check the second diagonal (nums[i][n - i - 1])
        if (isPrime(nums[i][n - i - 1])) {
            maxPrime = Math.max(maxPrime, nums[i][n - i - 1]);
        }
    }

    return maxPrime;
};
```