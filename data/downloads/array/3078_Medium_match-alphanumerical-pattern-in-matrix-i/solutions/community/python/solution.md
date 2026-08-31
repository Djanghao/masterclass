# Brute force N^2 x M^2

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/5137257/](https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/5137257/)

---

```
class Solution:
    def findPattern(self, B: List[List[int]], P: List[str]) -> List[int]:
        for br,bc in product(range(len(B) - len(P) + 1), range(len(B[0]) - len(P[0]) + 1)):
            a_n = dict()
            n_a = dict()
            valid = True
            for pr,pc in product(range(len(P)), range(len(P[0]))):
                if P[pr][pc].isalpha():
                    if B[br + pr][bc + pc] in n_a and n_a[B[br + pr][bc + pc]] != P[pr][pc]:
                        valid = False
                        break
                    if P[pr][pc] not in a_n:
                        a_n[P[pr][pc]] = B[br + pr][bc + pc]
                        n_a[B[br + pr][bc + pc]] = P[pr][pc]
                    if a_n[P[pr][pc]] != B[br + pr][bc + pc]:
                        valid = False
                        break
                elif B[br + pr][bc + pc] != int(P[pr][pc]):
                    valid = False
                    break
            if valid:
                return [br, bc]
        return [-1, -1]
```
