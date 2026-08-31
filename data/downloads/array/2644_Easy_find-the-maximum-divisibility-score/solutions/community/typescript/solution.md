# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/5945308/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/5945308/)

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
public int maxDivScore(int[] nums, int[] divisors) {
    int maxScore = -1;
    int resultDivisor = Integer.MAX_VALUE;

    // Iterate through each divisor
    for (int divisor : divisors) {
        int score = 0;

        // Calculate the divisibility score for the current divisor
        for (int num : nums) {
            if (num % divisor == 0) {
                score++;
            }
        }

        // Update the result if the current divisor has a higher score,
        // or if the score is the same but the divisor is smaller
        if (score > maxScore || (score == maxScore && divisor < resultDivisor)) {
            maxScore = score;
            resultDivisor = divisor;
        }
    }

    return resultDivisor;
}
```
```javascript []
var maxDivScore = function(nums, divisors) {
    let maxScore = -1;
    let resultDivisor = Infinity;

    // Iterate through each divisor
    for (let divisor of divisors) {
        let score = 0;

        // Calculate the divisibility score for the current divisor
        for (let num of nums) {
            if (num % divisor === 0) {
                score++;
            }
        }

        // Update the result if the current divisor has a higher score,
        // or if the score is the same but the divisor is smaller
        if (score > maxScore || (score === maxScore && divisor < resultDivisor)) {
            maxScore = score;
            resultDivisor = divisor;
        }
    }

    return resultDivisor;
};
```
```typescript []
function maxDivScore(nums: number[], divisors: number[]): number {
    let maxScore = -1;
    let resultDivisor = Infinity;

    // Iterate through each divisor
    for (let divisor of divisors) {
        let score = 0;

        // Calculate the divisibility score for the current divisor
        for (let num of nums) {
            if (num % divisor === 0) {
                score++;
            }
        }

        // Update the result if the current divisor has a higher score,
        // or if the score is the same but the divisor is smaller
        if (score > maxScore || (score === maxScore && divisor < resultDivisor)) {
            maxScore = score;
            resultDivisor = divisor;
        }
    }

    return resultDivisor;
};
```