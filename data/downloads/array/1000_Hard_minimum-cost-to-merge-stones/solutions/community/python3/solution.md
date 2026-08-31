# Why DP solution splits (K-1) AND a bonus problem (bottom-up)

**Author:** dilit
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/831419/](https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/831419/)

---

This took me weeks of intermittent thinking to arrive to!   Hoping it would help someone.
First, it's a good idea to glean some info from a book and other posts:
- This problem is almost the same as Matrix-Chain Multiplication in [Cormen](https://edutechlearners.com/download/Introduction_to_algorithms-3rd%20Edition.pdf) ch. 15.2.  Except, here K could be any number.  For Matrix-Chain Multiplication, K is 2.
- [Post 1](https://leetcode.com/problems/minimum-cost-to-merge-stones/discuss/247657/JAVA-Bottom-Up-%2B-Top-Down-DP-With-Explaination) - starts explaining well, but the later DP code is unnecessarily complicated with 3D DP array.
- [Post 2](https://leetcode.com/problems/minimum-cost-to-merge-stones/discuss/675912/DP-code-decoded-for-non-experts-like-me) - particularly good explanation

My code and notes:
```
def mergeStones(stones: List[int], K: int):
    N = len(stones)
    if (N-1) % (K-1) != 0:
        return -1
    accum = [0] + list(itertools.accumulate(stones))

    dp = [[0]*N for _ in range(N)]
    for l in range(K, N+1):
        for i in range(N-l+1):
            j = i+l-1
            if l > K:
                dp[i][j] = min([dp[i][t] + dp[t+1][j] for t in range(i,j,K-1)])
            if (l-1)%(K-1) == 0:
                dp[i][j] += accum[j+1] - accum[i]

    return dp[0][N-1]
```
- `dp[i][j]` calculates the min cost of merging stone piles `i..j` to the smallest number of piles possible [1..K) for the subarray [i,j].  We solve subproblems of varying lengths L starting at i's=0..len(stones)-L+1 (for each L)
- When number of stone piles in [i,j] interval L< K, there's no merging and no cost: `dp[i][j] = 0`.   We might as well start the for-loop with L = K.
- When number of stone piles in [i,j] interval L> K, we calculate the [i,j] merge cost by splitting [i,j] at (K-1) intervals.  This works, because we have already solved all possible subprobs. of smaller L.  It does not make sense to split [i,j] anywhere else besides (K-1), because, otherwise, the min merge cost will be calculated redundantly or, worse, incorrectly.  
**E.g.** intermediate subarray `[1,4,3,3,2]`, `K=4`.  Splitting `1,4 - 3,3,2` will produce a min merging cost of 0 or no merging (WRONG).  Instead, we want to be splitting in such a way that  the merges result in the minimum number of piles for the subarray (2 here).   That's what we are minimizing: the cost of possible merges to the smallest subproblem (with least piles).
The only way to produce valid merges are to split one-pile-mergeable subproblems from one of the subarray sides.  It does not matter from which side, as long as we are consistent.  The side does not matter because we are going through all possible very-last-merge combinations: 1,2,..,K-1 piles at arrays end + remaining piles (adding to K total).  Best to verify this by working out all steps for `[1,4,3,3,2]` with K=4 or 3. 
- When numb. of stone piles in `[i,j]` is such that `(j-i+1)%(K-1) == 0`, we add all the stone piles in stones[i, j] to the "base" merge cost, because the base cost is only for merging to K piles (1 on the left and K-1 piles on the right).  We still need to merge K to 1 pile to get the intermediate pile value or the final result.

**Bonus: output the merge sequence**
*Inspired by Matrix-Chain Multiplication problem*
```
def mergeStones(stones: List[int], K: int):
    N = len(stones)
    if (N-1) % (K-1) != 0:
        return -1

    def get_trace(trace_arr,i,j,end=False):
        l = j - i + 1
        if l <= K:
            return str([stones[t] for t in range(i,j+1)])
        t = trace_arr[i][j]
        return ('<' if (l-1)%(K-1) == 0 else '') + get_trace(trace_arr,i,t) + get_trace(trace_arr,t+1,j) + ('>' if (l-1)%(K-1) == 0 else '')

    accum = [0] + list(itertools.accumulate(stones))

    dp = [[0]*N for _ in range(N)]
    trace = [[0]*N for _ in range(N)]
    for l in range(K, N+1):
        for i in range(N-l+1):
            j = i+l-1
            if l > K:
                min_t = min([t for t in range(i,j,K-1)], key=lambda t: dp[i][t] + dp[t+1][j])
                trace[i][j] = min_t
                dp[i][j] = dp[i][min_t] + dp[min_t+1][j]
            if (l-1)%(K-1) == 0:
                dp[i][j] += accum[j+1] - accum[i]

    print(get_trace(trace,0,N-1))
    return dp[0][N-1]
```

Finally, lots of thanks to [@lee215](https://leetcode.com/lee215) for such an interesting problem!