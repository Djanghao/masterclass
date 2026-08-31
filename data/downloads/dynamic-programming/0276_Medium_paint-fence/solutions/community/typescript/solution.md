# Only one previous value stored

**Author:** iofjuupasli
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-fence/solutions/6127216/](https://leetcode.com/problems/paint-fence/solutions/6127216/)

---

# Intuition
1.	For each post, there are a certain number of valid ways to paint it based on the color of the previous post(s).
2.	The problem can be broken into smaller subproblems (e.g., ways to paint the first i posts), which depend on previously calculated results.

# Approach
The code simplifies the recurrence relation by iteratively updating a variable (prev) that represents the effective number of ways to paint the previous posts, factoring in the constraints.
1.	Start with initial values:
    -	For 1 post: k ways.
    -	For 2 posts: k * k ways.
2.	Iteratively compute the result for larger values of n by updating the number of valid ways (prev) using a scaling factor (k-1) that accounts for the adjacency rule.
3.	Accumulate the result in sum by multiplying the contributions from each step.

# Complexity
- Time complexity:
$$O(n)$$
Each iteration processes one post, making the complexity linear with respect to n.

- Space complexity:
$$O(1)$$
Only a few variables (prev, sum) are used, so the space usage is constant.

# Code
```typescript []
function numWays(n: number, k: number): number {
    if (n === 1) {
        return k;
    }
    if (k === 1) {
        return n < 3 ? 1 : 0;
    }
    let prev = k;
    let sum = k * k;
    for (let i = 2; i < n; i++) {
        prev = (k - 1) * (prev + 1) / prev;
        sum *= prev;
    }
    return Math.round(sum);
};

```