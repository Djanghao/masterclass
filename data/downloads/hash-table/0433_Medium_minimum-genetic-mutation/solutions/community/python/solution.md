# Python 3   ||    11 lines, w/example      ||   T/S : 93%/87%

**Author:** Spaulding_
**Votes:** 30
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/2769037/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/2769037/)

---

```
class Solution:
    def minMutation(self, start: str, end: str, bank: list[str]) -> int:

        queue, seen = deque([(start, 0)]), {start}      # Ex: start = "AACCGGTT" ;    end = "AAACGGTA"
                                                        #     bank  = ["AACCGATT","AACCGATA","AAACGATA","AAACGGTA"]
        while queue:
            s, n = queue.popleft()                      #   n    queue             seen
                                                        #  \u2013\u2013\u2013  \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013  \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 
            if s == end: return n                       #   0   [('AACCGGTA', 1)]  {'AACCGGTA', 'AACCGGTT'}
                                                        #
            for i in range(8):                          #   1   [('AAACGGTA', 2),  {'AACCGGTA', 'AACCGGTT',
                for ch in 'ACGT':                       #        ('AACCGCTA', 2)]   'AACCGCTA', 'AAACGGTA'}
                                                        #                           
                    m = s[:i]+ch+s[i+1:]                #   2                       'AACCGCTA', 'AAACGGTA'}
                                                        #   |
                    if m in bank and m not in seen:     # answer    
                        seen.add(m)
                        queue.append((m, n+1))
        return -1

```
[https://leetcode.com/problems/minimum-genetic-mutation/submissions/1270694058/](https://leetcode.com/problems/minimum-genetic-mutation/submissions/1270694058/)

I could be wrong, but I think that time complexity is *O*(*N* \xD7 8 \xD7 4) ~ *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(bank)`.