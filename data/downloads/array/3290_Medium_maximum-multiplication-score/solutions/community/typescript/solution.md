# Easy Typescript Solution with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-multiplication-score/solutions/5800465/](https://leetcode.com/problems/maximum-multiplication-score/solutions/5800465/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n*m)$$ where n is the length of array a and m is the length of array b. This is because we are iterating through the arrays a and b to fill the dp array.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n*m)$$ as well, where n is the length of array a and m is the length of array b. This is because we are using a 2D dp array of size 5 x (length of array b + 1) to store the intermediate results.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function maxScore(a: number[], b: number[]): number {

    // initialize dp array with length 5 and each element contain array of length of b + 1 and fill with -Infinity
    let dp: number[][] = new Array(5).fill(0).map(item => Array(b.length + 1).fill(-Infinity));

    // update dp[0][0] with 0
    dp[0][0] = 0;

    // run for loop from index 1 to 4 (inclusive)
    for (let i = 1; i <= 4; i++) {

        // initializ max as -Infinity
        let max: number = -Infinity;

        // run for loop from index i to b.length (inclusive)
        for (let j = i; j <= b.length; j++) {

            // update max with maximum value between dp[i-1][j-1]
            max = Math.max(max, dp[i - 1][j - 1]);

            // update dp[i][j] with addition of max and multiplication of a[i-1] and b[j-1] 
            dp[i][j] = max + a[i - 1] * b[j - 1];
        }
    }

    // return maximum value from array dp[4]
    return Math.max(...dp[4]);
};
```