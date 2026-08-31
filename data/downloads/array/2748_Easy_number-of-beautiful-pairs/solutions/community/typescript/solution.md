# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/6009253/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/6009253/)

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
public int countBeautifulPairs(int[] nums) {
    int count = 0;

    // Iterate through all pairs (i, j) where i < j
    for (int i = 0; i < nums.length; i++) {
        int firstDigit = getFirstDigit(nums[i]);

        for (int j = i + 1; j < nums.length; j++) {
            int lastDigit = getLastDigit(nums[j]);

            // Check if the first digit of nums[i] and the last digit of nums[j] are coprime
            if (gcd(firstDigit, lastDigit) == 1) {
                count++;
            }
        }
    }

    return count;
}

// Helper function to get the first digit of a number
private int getFirstDigit(int num) {
    while (num >= 10) {
        num /= 10;
    }
    return num;
}

// Helper function to get the last digit of a number
private int getLastDigit(int num) {
    return num % 10;
}

// Helper function to find gcd of two numbers
private int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```
```javascript []
var countBeautifulPairs = function(nums) {
    let count = 0;

    // Iterate through all pairs (i, j) where i < j
    for (let i = 0; i < nums.length; i++) {
        const firstDigit = getFirstDigit(nums[i]);

        for (let j = i + 1; j < nums.length; j++) {
            const lastDigit = getLastDigit(nums[j]);

            // Check if the first digit of nums[i] and the last digit of nums[j] are coprime
            if (gcd(firstDigit, lastDigit) === 1) {
                count++;
            }
        }
    }

    return count;
};

// Helper function to get the first digit of a number
function getFirstDigit(num) {
    while (num >= 10) {
        num = Math.floor(num / 10);
    }
    return num;
}

// Helper function to get the last digit of a number
function getLastDigit(num) {
    return num % 10;
}

// Helper function to find gcd of two numbers
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```
```typescript []
function countBeautifulPairs(nums: number[]): number {
    let count = 0;

    // Iterate through all pairs (i, j) where i < j
    for (let i = 0; i < nums.length; i++) {
        const firstDigit = getFirstDigit(nums[i]);

        for (let j = i + 1; j < nums.length; j++) {
            const lastDigit = getLastDigit(nums[j]);

            // Check if the first digit of nums[i] and the last digit of nums[j] are coprime
            if (gcd(firstDigit, lastDigit) === 1) {
                count++;
            }
        }
    }

    return count;
};

// Helper function to get the first digit of a number
function getFirstDigit(num: number): number {
    while (num >= 10) {
        num = Math.floor(num / 10);
    }
    return num;
}

// Helper function to get the last digit of a number
function getLastDigit(num: number): number {
    return num % 10;
}

// Helper function to find gcd of two numbers
function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```