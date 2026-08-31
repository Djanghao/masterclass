# [Python] Simple solution with detailed explanation

**Author:** 101leetcode
**Votes:** 33
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/780409/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/780409/)

---

```
class Solution:
    def minInsertions(self, s: str) -> int:
        ## RC ##
        ## APPROACH : STACK ##
        ## LOGIC ##
        ## 1. Only 3 conditions, open brace -> push to stack
        ## 2. 2 close braces -> pop from stack, if you donot have enough open braces before increment count(indicates one open required)
        ## 3. Only 1 close brace found --> count + 1, to make it 2 close braces, if stack then just pop, if stack is empty then increment count by 2 (one for close brace, one for open brace)
        ## 4. If stack is still left with open braces, we require close braces = twice of that open braces in stack
        
        ## You can even optimize it, without using stack, just counting the left braces.
        
		## TIME COMPLEXITY : O(N) ##
		## SPACE COMPLEXITY : O(1) ##
        
        s += "$"  # appending dummy character at the end, to make things simpler
        left_braces, count, i = 0, 0, 0
        while( i < len(s)-1 ):
            if s[i] == "(":
                left_braces, i = left_braces + 1, i + 1
            elif s[i] == ")" and s[i+1] == ")":
                if left_braces:
                    left_braces -= 1
                else:
                    count += 1                  # one open brace required
                i += 2
            elif s[i] == ")" and s[i+1] != ")":
                if left_braces:
                    count += 1                  # one close brace required
                    left_braces -= 1
                else:
                    count += 2                  # one open and one close brace required
                i += 1
        return count + (left_braces * 2)        # close braces required at the end for all the remaining left braces
```
Please upvote if you liked my solution.