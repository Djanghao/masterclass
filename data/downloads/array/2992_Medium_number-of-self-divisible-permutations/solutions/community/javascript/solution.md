# JavaScript | 180ms | Backtrack + bitmask

**Author:** costa73
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-self-divisible-permutations/solutions/4512374/](https://leetcode.com/problems/number-of-self-divisible-permutations/solutions/4512374/)

---

# Approach

The solution below iterates over all possible permutations and counts the valid ones.
Time complexity is improved by checking each digit before it is added to the permutation and exiting early (aka. backtracking).

```
function selfDivisiblePermutationCount(n) {
    let result = 0;

    function dp(value, used) {
        if (value.length == n) {
            result++;
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (used.has(i)) continue;
            if (gcd(value.length + 1, i) != 1) continue;

            value.push(i);
            used.add(i);

            dp(value, used);

            value.pop(i);
            used.delete(i);
        }
    }

    dp([], new Set());

    return result;
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}
```

### Improvement

You may have noticed that we don't really need to keep track of the permutation values - the length would suffice. Below I replace `value` with `cnt` and avoid the push/pop operations.

Also, since `1 <= n <= 12`, the `used` map fits into a single JS *integer*. Below I replace the used Set with a `used` bitmask.

```
function selfDivisiblePermutationCount(n) {
    let result = 0;

    // cnt is the number of digits in the current permutation of n
    // used is a binary map of the digits used in the current permutation
    function dp(cnt = 1, used = 0) {
        if (cnt > n) {
            result++;
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (used & 1 << i) continue;
            if (gcd(cnt, i) != 1) continue;
            dp(cnt + 1, used | 1 << i);
        }
    }

    dp();

    return result;
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}
```

# Amalysis

Time complexity (*worst case*): `O(n!)`
Space complexity (worst case): $$n!$$ recursive calls to `dp` are made, taking `O(n!)` space on the stack.

Both of the above benefit from backtracking (the larger `n` - the greater improvement to time and space complexity). Worst case however still stays at `O(n!)` for `1 <= n <= 2`.