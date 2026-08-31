# Python 3   ||   2 lines,  sets   ||   T/S: 97% / 97%

**Author:** Spaulding_
**Votes:** 24
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3286709/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3286709/)

---

```
class Solution:
    def vowelStrings(self, words: List[str], left: int, right: int) -> int:

        vowels = set('aeiou')
        
        return sum({w[0],w[-1]}.issubset(vowels) for w in words[left:right+1])
```
[https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/submissions/1291831411/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/submissions/1291831411/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(nums`.
