# Simple TS solution

**Author:** kiwibe
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/5306816/](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/5306816/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->


# Approach
we need to keep track of all the previous possible sum
so 1st init with the value of the 1st line of the mat
then iter over each row of the mat
then each col or the cur row
then each val in the prev set
add all those sum to the current set

find the minimum diff in the last populated ste
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(mnk)$$ k is the length of the sets
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(mn)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minimizeTheDifference(mat: number[][], target: number): number {
    const dp = new Array(mat.length).fill(0).map(() => new Set<number>());
    
    // init
    for (let i = 0; i < mat[0].length; i++) {
        dp[0].add(mat[0][i])
    }

    
    for (let i = 1; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            for (const elem of dp[i-1]) {
                dp[i].add(elem + mat[i][j]);
            }
        }
    }

    let minDiff = Infinity;
    // find the minDiff in the last set
    for (const sum of dp[mat.length-1]) {
        const absV = Math.abs(target- sum);
        if (absV<minDiff) {
            minDiff = absV
        }
    }  
    return minDiff
};

```