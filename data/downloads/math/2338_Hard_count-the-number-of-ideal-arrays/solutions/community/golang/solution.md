# Go  / 12ms / DP + Combinatorics with explanation

**Author:** cyclic
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/2283400/](https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/2283400/)

---

Approach:

The first fact that we need to note is that any ideal arrays are non-decreasing, since if `a > b` then `b` cannot be a multiple of `a`. This means that we want to find increasing sequences of numbers such that each number is a multiple of the previous one, and then we will repeat some numbers in order to fill in the rest of the array. For example, the ideal array `[1, 1, 3, 3, 3, 6]` would correspond to the increasing sequence `{1, 3, 6}` of length 3.

There are two steps here as a result: Firstly, we want to find the number of strictly increasing ideal sequences such that all values are between `1` and `maxValue`, and secondly, we want to find how many ideal arrays of length `n` correspond to each strictly increasing sequence.

Let's actually look at the second part first. Say we have an ideal array of length `n` with some number of distinct values -- for example, `3` distinct values in our `{1, 3, 6}` example. How many different arrays can we make here? There will be a group of 1s, followed by a group of 3s, followed by a group of 6s, each of which has size at least 1. This means that there are two "gaps" in the array between two values where we jump up to the next value -- from 1 to 3, and 3 to 6. These jumps can't occur at the same place, because otherwise we will go from 1 to 6 directly. So if we have `r` jumps, then the binomial coefficient `(n - 1) choose r` gives the number of array configurations, since there are `n - 1` gaps between values in the array to choose from, and we need `r` of them to have jumps. Note that the number of jumps `r` is equal to the number of distinct values in the array minus 1.

So, we now know how to find the number of length-`n` arrays corresponding to a strictly increasing ideal sequence. How can we find the number of increasing ideal sequences for a given length? Note that an increasing sequence of length `l` is an increasing sequence of length `l - 1` with another value appended onto the end, which suggests a DP approach. In particular, we will solve the problem "How many such sequences of length `l` exist that end with value `k`?" for `1 <= k <= maxValue`.

We can do this having the answers for this problem for length `l - 1`. If I want to find it for length `l` and ending value `k`, then I sum the values for length `l - 1` which end in proper divisors of `k`. This is equivalent to iterating through each value for the length `l - 1` array. For each such element, which corresponds to an `l - 1`th value of `v` in the sequence, we add the value to length `l` for `2 * v, 3 * v, ...`.

How many times do we do this? Either until there are 0 sequences in total, in which case there is nothing to add anymore, or until the length of each sequence is `n` (and there are `n - 1` jumps), because we can't handle any more distinct values in an array of length `n`. For each length, we count the total number of sequences, find the number of distinct array configurations for that length, and multiply them. This is because each array configuration and strictly-increasing ideal sequence generates a unique ideal array.

Summing these values up mod `10^9 + 7` gives the final answer.

Optimizations:

To make finding `n! / r!(n - r)!` faster (binomial coefficient), we pre-compute the factorials from `0!` to `10000!` and their inverses mod `10^9 + 7`. Pre-computing the factorials can be done easily using a loop. To pre-compute inverses, we find the inverse of `10000!`. Then given the inverse of `n!`, we can find the inverse of `(n - 1)!`. How? We know `(n!)^-1 * n = ((n - 1)!)^-1 * n^-1 * n = ((n - 1)!)^-1 * 1 = ((n - 1)!)^-1` like we want. So, the only thing left is to find the inverse of `10000!`.

To do that, we use Fermat's Little Theorem, which states that for any prime `p` and any integer `k`, `k^(p - 1) = 1 mod p`. Then `k^(p - 2) * k = 1 mod p`, so `k^(p - 2) = k^-1 mod p`. Since `10^9 + 7` is prime, we can use exponentiation mod `10^9 + 7` to find the inverse of `10000!`. This allows the precomputing to be done efficiently.

Code:
```
func idealArrays(n int, maxValue int) int {
    mod := int64(1000000007)
    
	// binary exponentiation for FLT
    var exp func(int64, int64) int64
    exp = func(b int64, p int64) int64 {
        if(p == 0) {
            return 1
        }
        if(p == 1) {
            return b
        }
        half := exp(b, p / 2)
        half *= half
        half %= mod
        if(p % 2 == 1) {
            half *= b
            half %= mod
        }
        return half
    }
    
	// precompute factorials up to 10000!
    fact := make([]int64, 10001)
    fact[0] = 1
    for i := 1; i < 10001; i++ {
        fact[i] = (fact[i - 1] * int64(i)) % mod
    }
	// precompute modular inverses of factorials mod 10^9 + 7
    inv := make([]int64, 10001)
    inv[10000] = exp(fact[10000], mod - 2)
    for i := 9999; i >= 0; i-- {
        inv[i] = (inv[i + 1] * int64(i + 1)) % mod
    }
    
    res := int64(0)
    
    dp := make([]int64, maxValue + 1)
	// initialize to all 0 except for 1, so that 2 to maxValue initialize to 1 in first round of dp
    dp[1] = 1
    sum := int64(1)
    for jumps := 0; jumps < n && sum != 0; jumps++ {
        sum = int64(0)
		// generate number of sequences with the given number of jumps for each ending value 
        dp2 := make([]int64, maxValue + 1)
        for i := 1; i <= maxValue / 2 + 1; i++ {
			// if we don't end up adding anything, skip
            if(dp[i] == 0) {
                continue
            }
            for j := 2 * i; j <= maxValue; j += i {
                dp2[j] += dp[i]
                sum += dp[i]
            }
        }
		// for the first iteration, we need to make sure that dp2[1] = 1
        if (jumps == 0) {
            sum++
            dp2[1] = 1
        }
		// binomial coefficient using precomputed values
        res += ((sum * fact[n - 1]) % mod) * ((inv[n - 1 - jumps] * inv[jumps]) % mod) % mod
        res %= mod
		// update dp array to be used for next length of sequences
        dp = dp2
    }
    res %= mod
    return int(res)
}
```

If this solution helped you, please upvote!