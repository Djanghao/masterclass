# 🔥 Dynamic Programming in TypeScript: Solve Strictly Increasing Array with Minimum Operations! 💪😎

**Author:** anaskhafaga
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-array-strictly-increasing/solutions/3647801/](https://leetcode.com/problems/make-array-strictly-increasing/solutions/3647801/)

---


# Intuition
The problem can be solved using a dynamic programming approach. We can use recursion with memoization to compute the minimum number of operations needed to make `arr1` strictly increasing.

# Approach
We start by sorting `arr2` in ascending order. We then define a recursive function `dfs` that takes the current index `i`, the previous element `prev`, `arr1`, `arr2`, and a map `dp` to store the computed results.

In the `dfs` function, we check if we have reached the end of `arr1`. If so, we return 0, indicating that no operations are needed.

Next, we check if we have already computed the result for the current state `(i, prev)`. If so, we return the stored result from the `dp` map.

We initialize the cost as infinity.

If the current element `arr1[i]` is greater than the previous element `prev`, we can continue with the next element in `arr1` without any operation. We recursively call `dfs` with the next index `i+1`, the current element `arr1[i]` as the new previous element, and the same `arr1`, `arr2`, and `dp` values. We update the cost as the result of this recursive call.

We perform a binary search to find the smallest element in `arr2` that is greater than the previous element `prev`. If such an element exists, we can choose it to replace the current element in `arr1`. We recursively call `dfs` with the next index `i+1`, the chosen element as the new previous element, and the same `arr1`, `arr2`, and `dp` values. We add 1 to the cost to account for the operation performed. We update the cost as the minimum of the previous cost and the result of this recursive call.

Finally, we store the computed cost in the `dp` map for the current state `(i, prev)` and return the cost.

After defining the `dfs` function, we sort `arr2` in ascending order and initialize a map `dp` to store the computed results. We call the `dfs` function with the initial state `(0, -1)` and return the resulting cost if it is finite; otherwise, we return -1 to indicate that it is not possible to make `arr1` strictly increasing.

# Complexity
- Time complexity: O(N^2 log(N)), where N is the length of `arr1`. The recursion tree can have at most N^2 states, and for each state, we perform a binary search on `arr2` of size N, resulting in a total time complexity of O(N^2 log(N)).
- Space complexity: O(N^2) for the memoization map `dp`, where N is the length of `arr1`.


# Code
```
function makeArrayIncreasing(arr1: number[], arr2: number[]): number {
    const dp = new Map<string, number>();

    arr2.sort((a, b) => a - b);
    const cost = dfs(0, -1, arr1, arr2, dp);
    return cost === Infinity? -1 : cost; 
    
};

function dfs(i: number, prev: number, arr1: number[], arr2: number[], dp: Map<string, number>): number {

    const key = JSON.stringify({i, prev});
    if(arr1.length === i) {
        return 0;
    }

    if(dp.has(key)) {
        return dp.get(key) as number;
    }

    let cost = Infinity;

    if(arr1[i] > prev) {
        cost = dfs(i+1, arr1[i], arr1, arr2, dp);
    }

    const idx = bs(arr2, prev);

    if(idx < arr2.length) {
        cost = Math.min(cost, 1 + dfs(i+1, arr2[idx], arr1, arr2, dp))
    }

    dp.set(key, cost)

    return cost;
}

function bs(arr: number[], value: number): number {
    let [left, right] = [0, arr.length];
    
    while(left < right) {
        const mid = Math.floor((left + right)/2);
        if(arr[mid] <= value) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
```