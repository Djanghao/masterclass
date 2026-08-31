# [Python3] row-by-row & col-by-col

**Author:** ye15
**Votes:** 13
**Link:** [https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1486326/](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1486326/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/fa0bb65b4cb428452e2b4192ad53e56393b8fb8d) for solutions of weekly 260. 
```
class Solution:
    def placeWordInCrossword(self, board: List[List[str]], word: str) -> bool:
        for x in board, zip(*board): 
            for row in x: 
                for s in "".join(row).split("#"): 
                    for w in word, word[::-1]: 
                        if len(s) == len(w) and all(ss in (" ", ww) for ss, ww in zip(s, w)): return True 
        return False
```

```
class Solution:
    def placeWordInCrossword(self, board: List[List[str]], word: str) -> bool:
        for x in board, zip(*board): 
            for row in x:
                for k, grp in groupby(row, key=lambda x: x != "#"): 
                    grp = list(grp)
                    if k and len(grp) == len(word): 
                        for w in word, word[::-1]: 
                            if all(gg in (" ", ww) for gg, ww in zip(grp, w)): return True 
        return False
```