# Python 3 solution 100 faster than any other codes

**Author:** cutequokka
**Votes:** 101
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/971323/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/971323/)

---

- We know that sets in python are actually implemented by hash tables, which means you can search a member in set by `O(1)`. Therfore, first we create a set from `allowed` string and check that every letter of each word to be in the allowed string. If its not, we increase the `count`. By the end of the program we know the number of wrong words, so we just need to return the difference of `allowed` length and `count`
- Complexity: `O(nd)`
If we assume we have `n` words, we should iterate on all of them and also iterate on each letter which we assumed the average length of words is `d`. So the time complexity is `O(nd)`.
- Code:
```
class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        allowed = set(allowed)
        count = 0
        
        for word in words:
            for letter in word:
                if letter not in allowed:
                    count += 1
                    break
        
        return len(words) - count
```