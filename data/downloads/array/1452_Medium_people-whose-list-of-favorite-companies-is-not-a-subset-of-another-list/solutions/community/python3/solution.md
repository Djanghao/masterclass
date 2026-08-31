# Python 3 || 7 lines, sets  || T/S: 96% / 99%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/5545934/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/5545934/)

---

```
class Solution:
    def peopleIndexes(self, favoriteCompanies: List[List[str]]) -> List[int]:

        ans, n = set(), len(favoriteCompanies)

        favs = [(set(x), i) for i, x in enumerate(favoriteCompanies)]
        
        favs.sort(key = lambda x: -len(x[0]))
        
        for i, (p1, _) in enumerate(favs):
            for p2, j in favs[i + 1:]:
                if p2 < p1: ans.add(j)
                    
        return sorted(set(range(n)) - ans)
```

[https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/submissions/753971552/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/submissions/753971552/)

I could be wrong, but I think that time complexity is *O*(*N*^2 * *K*) and space complexity is *O*(*NK*), in which *N* ~ `len(favoriteCompanies)` and *K* ~ average list of strings in `favoriteCompanies`.