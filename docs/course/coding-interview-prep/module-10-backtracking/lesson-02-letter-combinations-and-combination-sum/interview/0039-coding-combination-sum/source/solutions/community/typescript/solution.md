# [ javascript / typescript ] DFS solution w/ detailed comments

**Author:** carti
**Votes:** 10
**Link:** [https://leetcode.com/problems/combination-sum/solutions/875295/](https://leetcode.com/problems/combination-sum/solutions/875295/)

---

**javascript:**
```
function combinationSum(candidates, target) {
    // result of all combinations that sum to target
    var res = [];
	
    /**
     * helper dfs method to generate all paths that sum to target
     * @param path current dfs path of numbers
     * @param sum current sum of numbers
     * @param last last index drawn
     */
    function dfs(path, sum, last) {
        // check if we've reached target sum (this is valid combo)
        if (sum === target) {
            // push to res and return to break
            res.push(path);
            return;
        }
        // iterate thru children (candidates in this case)
        // except, we start at last candidate drawn, to avoid duplicates
        for (var i = last; i < candidates.length; i++) {
            // check to see if adding this candidate can contribute to sum
            // don't do anything if it exceeds (it won't be valid)
            if (sum + candidates[i] <= target) {
                // note, it's important we spread path (make a copy of it)
                // so that all calls in recursion tree aren't modifying same array
                dfs([...path, candidates[i]], sum + candidates[i], i);
            }
        }
    }
	
    // sort candidates ascending. the reason why we do this is because, in our dfs,
    // when we're going through candidates, and a number is too big for target (exceeds)
    // we don't want to continue to the next number, it will only be bigger
    candidates.sort(function (a, b) {
        return a - b;
    });
	
    // start dfs (initial empty path, because none visited yet, so sum also 0)
    dfs([], 0, 0);
	
    return res;
}
```

**typescript:**
```
function combinationSum(candidates: number[], target: number): number[][] {
    // result of all combinations that sum to target
    const res: number[][] = [];

    /**
     * helper dfs method to generate all paths that sum to target
     * @param path current dfs path of numbers
     * @param sum current sum of numbers
     * @param last last index drawn
     */
    function dfs(path: number[], sum: number, last: number): void {
        // check if we've reached target sum (this is valid combo)
        if (sum === target) {
            // push to res and return to break
            res.push(path);
            return;
        }

        // iterate thru children (candidates in this case)
        // except, we start at last candidate drawn, to avoid duplicates
        for (let i = last; i < candidates.length; i++) {
            // check to see if adding this candidate can contribute to sum
            // don't do anything if it exceeds (it won't be valid)
            if (sum + candidates[i] <= target) {
                // note, it's important we spread path (make a copy of it)
                // so that all calls in recursion tree aren't modifying same array
                dfs([...path, candidates[i]], sum + candidates[i], i);
            }
        }
    }

    // sort candidates ascending. the reason why we do this is because, in our dfs,
    // when we're going through candidates, and a number is too big for target (exceeds)
    // we don't want to continue to the next number, it will only be bigger
    candidates.sort((a, b) => a - b);

    // start dfs (initial empty path, because none visited yet, so sum also 0)
    dfs([], 0, 0);

    return res;
}
```
