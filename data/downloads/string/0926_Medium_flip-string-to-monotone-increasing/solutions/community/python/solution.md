# Easy Python | Explained | O(n) time, O(1) space

**Author:** Aragorn_
**Votes:** 44
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/748236/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/748236/)

---

**Easy Python | Explained | O(n) time, O(1) space**

The Python code below presents a simple solution for this problem, where we track the cost of generating different sorted arrays with the form "[0] * a + [1] * b". Initially, we compute the cost of having an array of "ones" exclusively. Then, we start allowing the presence of "zeros" up to x=S[i]. Any zero up to that point doesn't generate a cost anymore, so we subtract it from our balance. However, each "one" encountered up to x=S[i] must be changed, so it's a new cost.

The code sweeps through the string S in O(n) time with O(1) space complexity. The variable "best" tracks our lowest cost found for any configuration.

I hope the explanations are helpful.

Cheers,

```
class Solution:
    def minFlipsMonoIncr(self, S):
        #     Explanation: Our array "S" must be generally sorted as [0]*a + [1]*b
        #         - Examples: 000, 001, 011, 111
        #         - We can sweep through each configuration computing their cost
        # To get started, we assume that we have an array of 1's (111), and every zero must be changed
        # Compute this cost:
        cost = 0
        for x in S:
            if x=='0':
                cost += 1
        # This is our baseline guess for the best answer
        best = cost
        #     Now we will start allowing zeros up to x=S[i] (last allowed zero)
        #         Check how many zeros can stay for free, and..
        #         How many 1's must be force to change as we advance
        #
        for x in S: # last 0 allowed
            if x=='0':
                cost -= 1 # this "zero" no longer is a problem (subtract from original cost)
            else:
                cost += 1 # this "one" must be forced to change (higher cost)
            best = min(best,cost)
        return best
```