# ✅ [Python] Simple 2-Pass O(N) Solution || Detailed Explanation || Beginner Friendly

**Author:** linfq
**Votes:** 31
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/1648142/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/1648142/)

---

**PLEASE UPVOTE if you like** \uD83D\uDE01 **If you have any question, feel free to ask.** 
```
class Solution(object):
    def canBeValid(self, s, locked):
        if len(s) % 2:  # Intuitively, odd-length s cannot be valid.
            return False

        # traverse each parenthesis forward, treat all unlocked Parentheses as'(' and check if there is ')'
        # that cannot be eliminated by previous '(', if it exists, then the input s can't be valid.
        balance = 0
        for i in range(len(s)):
            balance += 1 if s[i] == '(' or locked[i] == '0' else -1
            if balance < 0:
                return False

        # traverse each parenthesis backward, treat all unlocked Parentheses as')' and check if there is '('
        # that cannot be eliminated by previous ')', if it exists, then the input s can't be valid.
        balance = 0
        for i in range(len(s) - 1, -1, -1):
            balance += 1 if s[i] == ')' or locked[i] == '0' else -1
            if balance < 0:
                return False

        return True
```