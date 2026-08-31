# ✅[Python] Simple and Clean, beats 88%✅

**Author:** _Tanmay
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3721668/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3721668/)

---

### Please upvote if you find this helpful. \u270C
<img src="https://assets.leetcode.com/users/images/b8e25620-d320-420a-ae09-94c7453bd033_1678818986.7001078.jpeg" alt="Cute Robot - Stable diffusion" width="200"/>


# Intuition
The problem asks us to find the maximum number of pairs that can be formed from a given list of words, where two words can be paired if one is the reverse of the other. We can use a set to keep track of the reversed versions of the words we have seen so far, and increment our answer whenever we encounter a word that is already in the set.

# Approach
1. Initialize an empty set `strings` to keep track of the reversed versions of the words we have seen so far.
2. Initialize a variable `ans` to 0 to keep track of the number of pairs we have found.
3. Iterate over each word `w` in `words`.
4. If `w` is in `strings`, increment `ans` by 1.
5. Otherwise, add the reversed version of `w` to `strings`.
6. Return `ans`.

# Complexity
- Time complexity: $$O(nk)$$, where $$n$$ is the number of words and $$k$$ is the maximum length of a word.
- Space complexity: $$O(nk)$$, where $$n$$ is the number of words and $$k$$ is the maximum length of a word.


# Code
```
class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        strings = set()
        ans = 0
        for w in words:
            if w in strings:
                ans += 1
            else:
                strings.add(w[::-1])
        return ans
```