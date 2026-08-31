# Bitmask approach in TypeScript

**Author:** teoyuqi
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/4487207/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/4487207/)

---

# Approach
1. Use bit mask to get all possible subsequences.
2. If subsequence is palindrome, add `[bitmask, length]` pair to array.
3. Iterate through all pairs in array. If two bitmasks are disjoint, `(bitmask1 & bitmask2) === 0`.
4. Return max length product.

# Complexity
In worst case, we have 2^n `[subseq, length]` pairs in `subseqLengthPairs`
- Time complexity
`O((2^n)^2) = O(4^n)`

- Space complexity:
`O(2^n)`

# Code
```TypeScript
const palindromeMemo = {};
function maxProduct(s: string): number {
    // all [ palindromic subseq, length ] pairs
    const subseqLengthPairs: Array<Array<number>> = []
    for (let i = 0; i < 1 << s.length; i++) {
        const subseq = bitmaskToSubseq(s, i);
        if (isPalindrome(subseq)) {
            subseqLengthPairs.push([i, subseq.length]);
        }
    }

    let res = 0
    for (const [bitmask1, length1] of subseqLengthPairs) {
        for (const [bitmask2, length2] of subseqLengthPairs) {
            if ((bitmask1 & bitmask2) === 0) {
                // two subeq are disjoint
                res = Math.max(res, length1 * length2);
            }
        }
    }
    return res;
};

const bitmaskToSubseq = (s: string, bitmask: number): string => {
    let subseq = "";
    for (let i = 0; i < s.length; i++) {
        if (((1 << i) & bitmask) !== 0) {
            subseq += s.charAt(i);
        }
    }
    return subseq;
}

const isPalindrome = (s: string): boolean => {
    if (palindromeMemo?.[s] !== undefined) {
        return palindromeMemo[s];
    }
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s.charAt(l) !== s.charAt(r)) {
            palindromeMemo[s] = false;
            return false;
        }
        l++; r--;
    }
    palindromeMemo[s] = true;
    return true
}
```