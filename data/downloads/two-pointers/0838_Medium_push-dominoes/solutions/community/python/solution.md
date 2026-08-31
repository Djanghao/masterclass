# Python3   ||     7 lines, string methods, with explanation   ||     T/S: 97% / 98%

**Author:** Spaulding_
**Votes:** 105
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/2628891/](https://leetcode.com/problems/push-dominoes/solutions/2628891/)

---

States for the dominoes:
- Any triplet that reaches the state `R.L` remains that state permanently.

- These changes occur to pairs that are not part of an `R.L`:  `R.` --> `RR`, `.L` --> `LL`.

Here's the plan:
1. To avoid the problem with the `R.L` state when we  address the  `R.` --> `RR` and  `.L` --> `LL` changes, we replace each `R.L` with a dummy string (say, `xxx`).

1. We perform the `R.` --> `RR`, `.L` --> `LL` replacements.
1. Once the actions described in 1) and 2) are completed, we repeat until no changes occur. We replace the dummy string with `R.L`. 
```
class Solution: 
    def pushDominoes(self, dominoes: str) -> str:

        prev = ''
        
        while dominoes != prev:
            prev = dominoes

            dominoes = (dominoes.replace('R.L', 'xxx')      # <-- 1)

                                .replace('R.' , 'RR' )      # <-- 2)         
                                .replace('.L' , 'LL' ))         


        return  dominoes.replace('xxx', 'R.L')              # <-- 3)
```
[https://leetcode.com/problems/push-dominoes/submissions/1265087038/](https://leetcode.com/problems/push-dominoes/submissions/1265087038/)


I could be wrong, but I think that time complexity is *O*(*N*^2) and space complexity is *O*(*N*), in which *N* ~ `len(dominoes)`.