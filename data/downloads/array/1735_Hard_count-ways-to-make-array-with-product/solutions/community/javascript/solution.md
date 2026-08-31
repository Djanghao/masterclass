# [JavaScript] Precompute combinations

**Author:** tmohan
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/3542114/](https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/3542114/)

---

# Approach
- https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/1035607/c-python-precompute/

# Complexity
- Time complexity: $$O(nlogn)$$
- Space complexity: $$O(n)$$

# Code
```
const maxProduct = 10 ** 4, maxArraySize = 10 ** 4, mod = 1_000_000_007n;
const primeFactors = Array.from({ length: maxProduct + 1 }, () => new Map());
const maxPrimeFactorCount = Math.floor(Math.log2(maxProduct));
const nCr = Array.from({ length: maxArraySize + maxPrimeFactorCount },
    () => Array(maxPrimeFactorCount + 1).fill(0n));

/** Find prime factors count */
for (let i = 2; i <= maxProduct; i++)
    if (primeFactors[i].size == 0)
        for (let j = i; j <= maxProduct; j += i)
            primeFactors[j].set(i, 1 + (primeFactors[j / i].get(i) ?? 0));

/** Calculate combinations nCr */
for (let n = 0; n < nCr.length; n++)
    for (let r = 0; r <= maxPrimeFactorCount && r <= n; r++)
        nCr[n][r] = r == 0 ? 1n : (nCr[n - 1][r] + nCr[n - 1][r - 1]) % mod;

var waysToFillArray = function (queries) {
    return queries.map(([n, k]) =>
        [...primeFactors[k]].reduce((ways, [_, freq]) =>
            ways * nCr[n + freq - 1][freq] % mod, 1n)
    );
};
```