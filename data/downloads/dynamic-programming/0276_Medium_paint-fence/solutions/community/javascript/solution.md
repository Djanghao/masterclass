# DP approach w/ Explanation, JS, O(n) time, O(1) space

**Author:** gvenezia
**Votes:** 5
**Link:** [https://leetcode.com/problems/paint-fence/solutions/452467/](https://leetcode.com/problems/paint-fence/solutions/452467/)

---

The goal is to find all the possible arrangements, sequences, or paths that a series of colors can take. Thinking about fence posts as possible paths helped me to relate the problem to other DP problems and approaches. 

Consider a fence with 3 posts (n = 3) and 3 possible colors (k = 3). Solving for the initial two fence posts also sets up the subproblems for our DP approach. For possible fences/paths with  the first two posts the same, that can only be k = 3. Example:

1,1
2,2
3,3

For possible fences/paths with the first two posts *different* it's a little trickier, but uses a standard way to find all possible permutations, k * (k-1), 3 * 2 = 6. Example:

1,2 (no 1, bc that goes in the paths above with the same posts in the first two positions)
1,3
2,1
2,3
3,1
3,2

Now, anytime the last two colors on the fence/path are the same color, then we know that the next possible # of colors is k-1 (total colors - the color we can't repeat for a third time). So now, the paths that had the last two the same will turn into paths with the last two numbers different. (ex. 1,1 -> 1,1,2 or 1,1 -> 1,1,3).

Anytime the last two colors on the fence/path are different colors, then we know that the next possible number of colors is a combination of paths/fences that repeat a color at the next post (k) and paths/fences that *don't* repeat (k * (k-1)). So some of paths with different last two numbers will turn into paths with the same last two, and some will turn into paths with different last two numbers.

All we need to do is keep track of the # of paths, not the paths themselves, so as soon as we iterate as many times as there are fence posts, we can return the sum of paths that have ended with the last two posts the same and the last two different.

```
var numWays = function(n, k) {
    if (n === 0 || k === 0) return 0;
    if (n === 1 && k) return k;
    
    // Solve the initial, small problems
    // What is the # of possible paths/sequence/arrangement of the two last posts being different colors and same colors?
    let pathsWithLast2Diff = k * (k-1);
    let pathsWithLast2Same = k;
    
    // For the rest of the posts (n-2) dynamically increment 
    for (let i = 0; i < n-2; i++){
        let newPathsWithLast2Same = pathsWithLast2Diff;
        pathsWithLast2Diff = (pathsWithLast2Diff + pathsWithLast2Same) * (k-1);
        pathsWithLast2Same = newPathsWithLast2Same;
    }
	
	// Return the sum of possible paths that ended with last two the same and last two different colors
    return pathsWithLast2Diff + pathsWithLast2Same;
}
```