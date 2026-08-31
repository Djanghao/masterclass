# Python 3   ||   14 lines,  w/ comments  ||   T/S: 64% / 90%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/vowel-spellchecker/solutions/2912261/](https://leetcode.com/problems/vowel-spellchecker/solutions/2912261/)

---

```
class Solution:
    def spellchecker(self, wordlist: List[str], queries: List[str]) -> List[str]:

        f = lambda x: ''.join('$' if ch in 'aeiou' else ch for ch in x)
        cap, vow = defaultdict(str), defaultdict(str)
        word_set, ans = set(wordlist), []
        
        for w in wordlist:                      # Build the dicts

            wLow = w.lower()
            if not cap[wLow]: cap[wLow] = w     # <\u2013\u2013 Case 1: capital-check

            wVow = f(wLow)
            if not vow[wVow]: vow[wVow] = w     # <\u2013\u2013 Case 2: vowel-check

        for q in queries:
            qLow, qVow, res = q.lower(), f(q.lower()), ''

            if q in word_set: res = q           # <\u2013\u2013 word is in wordlist
            elif qLow in cap: res = cap[qLow]   # <\u2013\u2013 cap-checked word is in wordlist
            elif qVow in vow: res = vow[qVow]   # <\u2013\u2013 vowel-checked word is in wordlist

            ans.append(res)
```
[https://leetcode.com/problems/vowel-spellchecker/submissions/859821635/](http://)

I could be wrong, but I think that time is *O*(*M* + *N*) and space is *O*(*N*), in which *N* ~ `len(wordlist)` and *M* ~ `len(queries)`.