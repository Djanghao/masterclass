# [Python] simple math

**Author:** pbelskiy
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-anagrams/solutions/2946476/](https://leetcode.com/problems/count-anagrams/solutions/2946476/)

---

Just use formula from school to get permutation number of each part.
https://en.wikipedia.org/wiki/Permutation#k-permutations_of_n

```python
class Solution:
    def countAnagrams(self, s: str) -> int:

        def get(word):
            n = math.factorial(len(word))

            for v in Counter(word).values():
                n //= math.factorial(v)

            return int(n) % (10**9 + 7)

        total = 1  
        for word in s.split():
            total *= get(word)

        return total % (10**9 + 7)
```


**Please vote up if you like my solution** \uD83D\uDE4F