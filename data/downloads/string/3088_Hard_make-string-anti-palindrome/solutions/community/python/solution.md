# Python 3 || Constructing anti-palindromic string is not hard, O(n)/O(1), 100%

**Author:** zsq007
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-string-anti-palindrome/solutions/4938126/](https://leetcode.com/problems/make-string-anti-palindrome/solutions/4938126/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The anti-palindromic condition can be easily met. The difficult part of this problem is to find the lexicographically smallest one. Greedy strategy fits here.

# Approach
<!-- Describe your approach to solving the problem. -->
We focus more on minimizing the lexical order of the constructed string.

- First, to avoid $O(n \\log n)$ time sorting, we count the frequency of each characters and sort on the alphabet instead.

- If the frequency of any char is larger than a half of the string length, then there will always be at least one matching pair in any constructed string. Thus, return `"-1"`.

- Next, we construct the lexically minimal string like `res = "aabbb...xyyzz"` from the frequecy counter. However, to meet the anti-palindromic condition (and keeping the minimal lexical order as well), we only need to take care of the matching pairs in the middle, hence:

    1. Find the median letter, say `res[:n//2] = "...lmmmm"` and `res[n//2:] = "mmnnoppp..."`.
    2. Suppose the median letter has `l1 = 4` on the left and `l2 = 2` on the right, we move the right part, `m * l2`, `l1` steps to the right, so that `m` on the right won't match with the `m`'s on the left. Then the right string becomes `res[n//2:] = "nnopmmpp..."`. Any other adjustments will lead to a string with larger lexical order.

    In the implementation, `status == True` means the median letter is found and `sup` is the right part of the median letter. `status == False` means the place to move/swap the `sup` is found. For other cases, we greedily attach the current letters to the `res` string.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def makeAntiPalindrome(self, s: str) -> str:
        h, cntr, status, res = len(s)>>1, Counter(s), True, []
        if max(cntr.values()) > h:  return '-1'
        for c in sorted(cntr):
            if h > cntr[c]:
                h -= cntr[c]
                res.append(c*cntr[c])
            elif status:
                status, sup = False, c*(cntr[c]-h)
                res.append(c*h)
            else:
                res.append(c*h)
                res.append(sup)
                res.append(c*(cntr[c]-h))
                h = inf
        return ''.join(res)
```