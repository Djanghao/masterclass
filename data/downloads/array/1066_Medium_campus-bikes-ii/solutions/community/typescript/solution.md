# Backtracking + memo

**Author:** smada
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes-ii/solutions/4489730/](https://leetcode.com/problems/campus-bikes-ii/solutions/4489730/)

---

[Based on this solution](https://leetcode.com/problems/campus-bikes-ii/solutions/4487439/python-simple-backtracking-dp)

# Intuition
The problem is a variant of the assignment problem, where we need to find the minimum total Manhattan distance by assigning each worker to a unique bike. The key idea is to use backtracking to explore all possible assignments of bikes to workers and choose the one with the minimum total distance.

# Approach
- Manhattan Distance Function: Create a helper function to calculate the Manhattan distance between a worker and a bike.
- Backtracking Function: Implement a recursive function to explore all possible assignments. It iterates over each bike and tries to assign it to the current worker. After assigning a bike to a worker, it recursively moves to the next worker.
- Memoization: Use a memoization technique to store the results of subproblems and avoid redundant calculations. This is done using a dictionary (or map) where the key represents the state of visited bikes and the current worker index.
- Main Function: The main function initializes the memoization structure and calls the backtracking function starting from the first worker.

# Complexity
- The time complexity is O(n * 2^m), where n is the number of workers and m is the number of bikes. This is because for each worker, the function iterates through all bikes and each bike can either be taken or not, leading to a total of 2^m states. The memoization significantly reduces the number of redundant calculations.

- The space complexity is O(2^m) for the memoization structure, where m is the number of bikes. In the worst case, it needs to store the state for each combination of bike assignments.

# Code
```
function assignBikes(workers: number[][], bikes: number[][]): number {
    const n: number = workers.length;
    const m: number = bikes.length;
    const dp: { [key: string]: number } = {};

    function mdist(a: number[], b: number[]): number {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    }

    function backtrack(i: number, visited: boolean[]): number {
        if (i === n) {
            return 0;
        }

        const visitedKey: string = visited.toString();
        if (dp[visitedKey] !== undefined) {
            return dp[visitedKey];
        }

        let minVal: number = Infinity;

        for (let j = 0; j < m; j++) {
            if (visited[j]) continue;
            visited[j] = true;
            minVal = Math.min(minVal, mdist(workers[i], bikes[j]) + backtrack(i + 1, visited));
            visited[j] = false;
        }

        dp[visitedKey] = minVal;
        return minVal;
    }

    const visited: boolean[] = new Array(m).fill(false);
    return backtrack(0, visited);
}

```