# 🔥🔥🔥 Clean Javascript Solution - with ideas

**Author:** joenix
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/2059710/](https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/2059710/)

---

> I'm not a native English speaker, so please forgive me if I'm wrong in my expression ~

***Problem***
<img src="https://assets.leetcode.com/users/images/071ff6a1-1588-4cc7-a618-71119953c446_1653124752.5466187.png" width="800" />

***Ideas***
1. For a given size of `stones`, last step must be to merge `K heap` of stones into `1 heap`. So we first need to merge `N` into `K`, need to convert `N` into `K`. It can be simply expressed as:
	- `N` => `K` => `1`
	Let the step required to convert all `N` to `1` be `a` step, then the condition must be met is: `N - a*K+a = 1`
	converting it to:
	- `N - a*K+a = 1` <=> `N - a(K-1) = 1` <=> `N-1 = a(K-1)` => `(N-1) % (K-1) = 0`
	therefore, the conditions that need to be met for conversion is `(N-1) % (K-1) = 0`
2. The cost required to convert `N` to `1` is:
	1. the cost convert `K` to `1` is:
	> because `K` can be merged directly into one heap, that's easy to solve, accumulate the corresponding `stones` directly, the formula is `sum(stones)`
	2. the cost convert `N` to `K` is:
		- when `N<K`, `N` cannot be converted into `K`
		- when `N=K`, the cost of converting `N` to `K` is: `0`
		- when `N>K`, it's hard to find, but we can convert it into a subproblem to solve:

	**Find the cost of merging `N` into `K` when `N>K`**
	we divide the `N` heap by `m` positions into two parts:
	1. `[start, m]` part \u2460
		we subdivide this part into `K-1` heaps
	2. `[m+1, end]` part \u2461
		we divide this part into 1 heap

	then, we can now convert to a subproblem to solve:
	1. When `k>1`
		`calculate(start, end, k) = min(calculate(start, m, k-1) + calculate(m+1, end, 1))`
	2. When `k==1`
		`calculate(start, end, 1) = calculate(start, end, K) + sum(start, end)`

***Code***
```
/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function(stones, K) {
    const N = stones.length, A = [], hash = {};

    if ((N-1) % (K-1)) {
        return -1;
    }

    if (N === 1) {
        return 0;
    }

    for (let i = 0, sum = 0; i < N; i++) {
        sum = A[i] = sum + stones[i];
    }

    return calculate(0, N - 1, 1);

    // Summation
    function sum (start, end) {
        return A[end] - A[start] + stones[start]
    }
    
    // calculate the minimum cost required to convert the stones of [i, j] into `k` heap
    function calculate (start, end, k) {
        let key = `${start}:${end}:${k}`, result = Infinity;

        if (hash[key]) {
            return hash[key];
        }
        
        if (k === 1) {
            return hash[key] = calculate(start, end, K) + sum(start, end);
        }

        // Complex Loops: 
        for (let i = start + k - 2; i < end; i++) {
            let a = (i - start + 1 == k - 1) || start == i ? 0 : calculate(start, i, k - 1);
            let b = (i + 1 === end) ? 0 : calculate(i + 1, end, 1);

            result = Math.min(a + b, result);
        }

        // set result into hash
        return hash[key] = result;
    }
};
```