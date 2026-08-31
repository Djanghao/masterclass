# Python 3   ||   7 lines,  w/ explanation and example  ||   T/S: 96% / 98%

**Author:** Spaulding_
**Votes:** 97
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3061225/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3061225/)

---

Here's the plan:
- We iterate through`s`, but for all`0`before the initial `1`, we count nothing. It only becomes interesting once we hit a`1`. We could rephrase the problem to: "Discard all the initial`0`, then determine which requires fewer flips: changing the remaining string to all`1`, or flip the`1` and start over with the remaining string. 

- For each `1` we hit, we increment`ones`.
- For each`0`we hit after the initial`1`, we decrement`ones` and increment `ans`, but only if `ones`is positive. Here's the reason why\u2013in order to achieve a monotonic string, we need to flip either this`0`or the most recent`1`. We won't know which flip would actually happen until the end, but either way it would cause a flip.
- Once we iterate through the string, we return`ans`.
```
class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:

        ones, ans = 0, 0                    # Example: s = "010110"
                                            #
        for digit in s:                     #  num    ones   ans  
                                            #  \u2013\u2013\u2013\u2013   \u2013\u2013\u2013\u2013   \u2013\u2013\u2013\u2013  
            if digit =='1': ones += 1       #    0      0     0
                                            #    1      1     0
            elif ones:                      #    0      0     1
                ones -= 1                   #    1      1     1
                ans += 1                    #    1      2     1
                                            #    0      1     2
        return ans
```
[https://leetcode.com/problems/flip-string-to-monotone-increasing/submissions/1273508367/](https://leetcode.com/problems/flip-string-to-monotone-increasing/submissions/1273508367/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(s)`.