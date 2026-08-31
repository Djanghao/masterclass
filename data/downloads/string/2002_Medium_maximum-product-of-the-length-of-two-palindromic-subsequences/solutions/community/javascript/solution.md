# Javascript with bit mask

**Author:** vwxyz
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/3389735/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/3389735/)

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
var maxProduct = function(s) {
    const len = s.length
    const m = {} // hashmap for palindrome, ex: { 1: 1, 2:1, ... , 128: 1, 130, 2 }

    for (let mask=1;mask<(1<<len);mask++) { // iterate all cases 
        let subseq = "" // temporary palindrome subsequence string
        for (let i=0;i<len;i++) { // iterate the total length of string
            if (mask & (1 << i)) { // if true, found a character index for the mask
                subseq += s[i] // append the character to the subsequence
            }
        }
        if (subseq == [...subseq].reverse().join('')) { // check whether or not subseq is palindrome string
            m[mask] = subseq.length // if it's palindrome, add it to the hashmap
        }
    }
    
    let res = 0
    // iterate nested loop to find the max product
    for (const [m1,] of Object.entries(m)) { 
        for (const [m2,] of Object.entries(m)) {
            if ((+m1 & +m2) == 0) { // found disjoint subseq
               res = Math.max(res, m[m1] * m[m2])
            }
        }
    }
    return res
};
```