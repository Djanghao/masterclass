# Python 3   ||   4 lines,  w/ explanation and example   ||   T/S: 84% / 27%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/3153203/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/3153203/)

---

Here's the plan:
- We construct a`lambda`boolean function`vowels`to assess whether the word qualifies.
- We map`words`using this function.
- We construct`pref`, a prefix sum list.
- We use`pref`to answer the queries.
```
class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
                                                                # Example:
                                                                #    words = ['aba','bcb','ece','aa','e'] 
                                                                #  queries = [[0,2], [1,4], [1,1]]

        vowels = lambda w: w[0] in 'aeiou' and w[-1] in 'aeiou' #  <-- boolean function  

        words = map(vowels, words)                              #    words = [True, False, True, True, True]
        
        pref = list(accumulate(words, initial = 0))             #     pref = [0, 1, 1, 2, 3, 4]
        
        return [pref[r+1] - pref[l] for l,r in queries]         #   return [2-0, 4-1, 1-1] = [2,3,0]
```
[https://leetcode.com/problems/count-vowel-strings-in-ranges/submissions/892925367/](https://leetcode.com/problems/count-vowel-strings-in-ranges/submissions/892925367/)


I could be wrong, but I think that time complexity is *O*(*N* + *Q*) and space complexity is *O*(*N*), in which *N* ~ `len(words)` and *Q* ~ `len(queries)`.