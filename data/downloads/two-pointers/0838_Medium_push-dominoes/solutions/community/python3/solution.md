# ✅✔ SIMPLE PYTHON3 SOLUTION ✅✔ 99% faster using stringReplacement explained

**Author:** rajukommula
**Votes:** 19
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/2629708/](https://leetcode.com/problems/push-dominoes/solutions/2629708/)

---

## ***UPVOTE*** if it is helpful
``` 
class Solution:         # States for the dominoes:
                        #   \u2022 Any triplet that reaches the state 'R.L' remains
                        #     that state permanently.
                        #  
                        #   \u2022 These changes occur to pairs that are not part of an 'R.L':
                        #     'R.' --> 'RR', .L' --> 'LL'

                        #  Here's the plan:
                        #    1) To avoid the problem with the 'R.L' state when we  address the 
						#       'R.' --> 'RR' and  '.L' --> 'LL' changes, we replace each 'R.L' 
						#.       with a dummy string (say, 'xxx').
                        #       
                        #    2) We perform the 'R.' --> 'RR', .L' --> 'LL' replacements.

                        #    3) Once the actions described in 1) and 2) are completed, we repeat 
                        #       until no changes occur. We replace the dummy string with 'R.L'. 
    def pushDominoes(self, dominoes: str) -> str:
        temp = ''
        
        while dominoes != temp:
            temp = dominoes
            dominoes = dominoes.replace('R.L', 'xxx')       # <-- 1)
            dominoes = dominoes.replace('R.', 'RR')         # <-- 2)
            dominoes = dominoes.replace('.L', 'LL')         # <-- 2)

        return  dominoes.replace('xxx', 'R.L')              # <-- 3)
```