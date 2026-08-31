# [Time & Memory 100%] find the min. cost of merging k partitioned piles

**Author:** jhw123
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/1666417/](https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/1666417/)

---

#### Determining impossible cases

There must be `(k-1)*n + k` (where n is an integer) stones for a successful merge because we initially need k stones and `k-1` stones afterwards.
For example, if there are four stones and `k` is 2, after we merge two stones initially, one merged stone is yielded and we have another stone to merge together.

#### Dynamic programming

For any valid case, we merge `k` stones at the end. This means we can think of this problem as dividing stones into `k` partitions and calculating the cost of merging them.
We define our `dp[i][j]` as the minimum cost of mering stones from i to j (inclusive). If merging stones from i to j is impossible let the cost be `Infinity`.
If so, the dp table for example 1 and example looks like:

**example 1**
[ 0, 5, 14, 20 ],
[ Infinity, 0, 6, 12 ],
[ Infinity, Infinity, 0, 5 ],
[ Infinity, Infinity, Infinity, 0 ]

**example 3**
[ 0, Infinity, 9, Infinity, 25 ],
[ Infinity, 0, Infinity, 8, Infinity ],
[ Infinity, Infinity, 0, Infinity, 9 ],
[ Infinity, Infinity, Infinity, 0, Infinity ],
[ Infinity, Infinity, Infinity, Infinity, 0 ]

Therefore, we explore all the possible cases that divides stones into `k` and save partial results in `dp` and eventually find `dp[0][stones.length-1]`

#### Complexity
Time: `O(n^2 * n!/k!(n-k)!)` * O(n^2) for nested for-loops and O(n!/k!(n-k)!) for exploring partitions in each loop.
Space: `O(n^2)` * The size of `dp` table.
where `n` is the number of `stones`

```typescript
function mergeStones(stones: number[], k: number): number {
	// return -1 right away if it is an impossible case.
    if ((stones.length - k) % (k-1) !== 0) {
        return -1
    }
	
	// dp[i][j] is the minimum cost of merging stones from i to j (inclusive).
    const dp = [...Array(stones.length)].map(() => Array(stones.length).fill(Infinity))
	
	// dp[n][n] has a single pile of stones; their merge cost is 0.
    for (let i=0; i<stones.length; i+=1) {
        dp[i][i] = 0
    }
    
	// from small to big ranges, explore all the cases of partition.
    for (let range=2; range<=stones.length; range+=1) {
        for (let start=0; start<=stones.length-range; start+=1) {
            const end = start+range-1
			
            // check for the impossible case.
			if ((range - k) % (k-1) !== 0) {
                continue
            }
            dp[start][end] = partition(dp, stones, k, start, end) + sumRange(stones, start, end+1)
        }
    }
    
	// return the minimum cost to merge all stones
    return dp[0][stones.length-1]
};

function partition(dp: number[][], stones: number[], k: number, start: number, end: number, cnt=k) {
    if (cnt === 1) {
        return dp[start][end]
    } else {
        let min = Infinity
        for (let i=start; i<=end-cnt+1; i+=1) {
            min = Math.min(min, dp[start][i] + partition(dp, stones, k, i+1, end, cnt-1))
        }
        return min
    }
}
    
function sumRange(nums: number[], from: number, to: number) {
    let sum = 0 
    for (let i=from; i<to; i+=1) {
        sum+=nums[i]
    }
    return sum
}
```
