# JS

**Author:** shaheenparveen
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/2942803/](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/2942803/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} s
 * @return {number}
 */

let factorial = [1n], invFactorial = [1n], mod = BigInt(1e9 + 7);

var findModularMultiplicativeInverse = (a) => {
    let product = 1n, m = mod - 2n;
    
    while (m) {
        if (m & 1n)
            product = product * a % mod;
        m >>= 1n;
        a = a * a % mod;
    }
    return product;
};

for (let i = 1; i <= 3000; i++) {
    factorial[i] = BigInt(i) * factorial[i - 1] % mod;
    invFactorial[i] = findModularMultiplicativeInverse(factorial[i]);
}

var makeStringSorted = function(s) {
    let freq = Array(26).fill(0), ans = 0n;

    for (let i = s.length - 1; i >= 0; i--) {
        freq[s.charCodeAt(i) - 97]++;
        
        let comb = freq.reduce((acc, cur) => acc * invFactorial[cur] % mod, factorial[s.length - i - 1]),
            acc = 0;

        for (let j = 0; j < s.charCodeAt(i) - 97; j++)
            acc += freq[j];

        ans = (ans + comb * BigInt(acc) % mod) % mod;
    }
    
    return ans;
};
```