# Simple brute force with a bit of math on top

**Author:** pioneer10
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5733569/](https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5733569/)

---

# Intuition
Let's suppose there is some positive integer `num` consisting of `n` digits. It is pretty much easy to find whether its digits can be rearranged to form a palindrome or not. On contrary, it is quite complicated to find whether there is a k-palindrome formed from the same digits (obviously, we'd need to consider all permutation of the digits which are palindromes and check each of them).

Let's try it vice versa. Imagine we have k-palindrome. Obviously, it is pretty easy to count all distinct permutations of its digits. But remember: there might be two different k-palindromes which are permutations of each other (e.g. 2442 and 4224 are both 2-palindromes). 

# Approach
We can find out all possible k-palindromes and for each of them count its permutations. We can do this because there are less than $$10^{floor((n + 1)/2)}$$ palindromes consisting of `n` digits.

So, we just need to iterate numbers from $$10^{floor((n - 1)/2)}$$ through $$10^{floor((n + 1)/2)}$$ and check each of them if it is k-palindrome or not.

Ok, now let's suppose there is set (with duplicates though) of digits which contains $$k_i$$ digits $$i$$ ($$0 <= i <= 9$$), where sum of $$k_i$$ is equal to `n`. Total number of permutations is $$n!/(k_0!k_1!...k_9!)$$ (NB $$0!=1$$), but this includes those starting with `0`. To count only those w/o leading zeroes, we may multiply this number by $$(n - k_0)/n$$.

# Complexity
- Time complexity: $$O(n*10^{n/2})$$
- Space complexity: $$O(n)$$

# Code
```golang []
func countGoodIntegers(n int, k int) int64 {
    // remainders modulo k of powers of 10: pow10_modk[i] = pow(10, i) % k
    pow10_modk := make([]int, n)
    pow10_modk[0] = 1
    for i := 1; i < n; i++ {
        pow10_modk[i] = (pow10_modk[i - 1] * 10) % k
    }
    // floor((n + 1)/2) power of 10
    max := 1
    for i := (n + 1) / 2; i > 0; i-- {
        max *= 10
    }
    // num represents first half of palindrome
    // i.e. we iterate palindromes consisting of n digits, and num is the first half of each palindrome
    res := int64(0)
    h := make(map[int]bool)
    for num := max / 10; num < max; num++ {
        q := 0 // remainder of the palindrome (corresponding to num) modulo k
        for i, p := 0, max / 10; i < n / 2; i++ {
            q = (q + (pow10_modk[i] + pow10_modk[n - 1 - i]) * ((num / p) % 10)) % k
            p /= 10
        }
        if n & 1 == 1 {
            q = (q + pow10_modk[n / 2] * (num % 10)) % k
        }
        if q != 0 {
            continue
        }
        d := make([]int, 10) // count of digits
        d[num % 10] = 2 - n & 1
        for m := num / 10; m > 0; m /= 10 {
            d[m % 10] += 2
        }
        // the following is to check if there was already k-palindrome with the same set of digits
        key := 0
        for i := 9; i >= 0; i-- {
            for j := 0; j < d[i]; j++ {
                key = key * 10 + i
            }
        }
        if h[key] {
            continue
        }
        h[key] = true
        // let's count permutations
        r := 1
        for i := 2; i <= n; i++ {
            r *= i
        }
        for _, c := range d {
            for i := 2; i <= c; i++ {
                r /= i
            }
        }
        r = r * (n - d[0]) / n
        res += int64(r)
    }
    return res
}
```