# [PYTHON3] O(n) using stack with explanation

**Author:** irt
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/1502134/](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/1502134/)

---

First, we need to count how many time `letter` occurs in the whole string.
Next, we enumerate and keep track of how many times `letter` occurred (and how many are remaining) and greedily add the current character with some condition. 

If we need to remove the top element of the stack, we need to have these three conditions satisfied:
1) current stack top is greater than the `current character`
2) if we remove the top of stack and add the `current character`, we can still have k total characters
3) if we remove the top of stack and add the `current character`, we can still have repetition of `letter`  character.

Next, we may add the the `current character` based on these condition:
1) if the current character is `letter`, we check how many times `letter` occcurs later; if it is not enough for the length constraint, we need to add it. Otherwise, we can always add the `letter` later.
2) if the `current character` is not the `letter`, we can try to greedily add this character keeping space for the `letter` repetition number of times. If better alternatives come, we can always pop this. Thus we need to keep track how many time the character `letter` was added in the stack too using variable `occ`.  

```
class Solution:
    def smallestSubsequence(self, s: str, k: int, letter: str, repetition: int) -> str:
        counts,total = 0, 0
        n = len(s)
        for ch in s:
            if ch==letter:
                total +=1
        stack = []
        occ = 0
        for idx,ch in enumerate(s):
            if ch==letter:
                counts +=1
            while stack and stack[-1]>ch and  len(stack)+ (n-1-idx)>=k and (occ+total-counts-(stack[-1]==letter)+(ch==letter)>=repetition ): 
                occ -= stack.pop()==letter
            if ch!=letter  and len(stack)< k-max(0,(repetition-occ)):
                stack.append(ch)
            elif ch==letter and len(stack)+(total-counts)<k:
                stack.append(ch)
                occ +=1
        return ''.join(stack)
```