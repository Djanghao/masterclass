# [TypeScript] Brief and fast DP solution. Beats 100% (96ms). O( n ) | O( n )

**Author:** badnewz
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/3964397/](https://leetcode.com/problems/jump-game-vi/solutions/3964397/)

---

# Approach
Create $dp$-array.
$dp[i]$ - is maximum score we can get when we jump on index $i$.
Start calculating the dp-array:
$dp[0]$ is simply nums[0].
$dp[i]$ - is maximum of $k$ previous $dp$ plus $nums[i]$:
$dp[i]=max(dp[j],j\\in[i-k,i-1])$
The answer will be $dp[n-1]$, where $n$ is length of $nums$

So, code will look like this:
```
function maxResult(nums: number[], k: number): number {
    const n = nums.length, dp = Array( n );
    for ( let i = 1; i < n; i++ )
        dp[ i ] = nums[ i ] + maxDP( i - 1, k );
    return dp[ n - 1 ];
};
```

Now we need a good function *maxDP*, that will quickly count maximum of *k* previous *dp*-elements.
At this point we run into [**sliding window maximum**](https://leetcode.com/problems/sliding-window-maximum/) problem.
Combining [*this solution*](https://leetcode.com/problems/sliding-window-maximum/solutions/3917899/typescript-short-and-clean-code-beats-100-o-n-o-n/) with our code we get the following result:

# Code
```
function maxResult(nums: number[], k: number): number {
    const n = nums.length, dp = Array( n ), dq: number[] = []; dp[ 0 ] = nums[ 0 ];
    const maxDP = ( idx: number ): number => {
        while ( dq.length > 0 && dp[ dq[ dq.length - 1 ] ] <= dp[ idx ] ) dq.pop();
        dq.push( idx );
        if ( dq[ 0 ] + k <= idx ) dq.shift();
        return dp[ dq[ 0 ] ]
    }
    for ( let i = 1; i < n; i++ )
        dp[ i ] = nums[ i ] + maxDP( i - 1 );
    return dp[ n - 1 ];
};
```

# Complexity
- Time complexity: $\\mathcal{O}(n)$
- Space complexity: $\\mathcal{O}(n)$

Note that complexity doesn't depend on $k$
