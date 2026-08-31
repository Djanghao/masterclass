# ✅  Python Simple One Pass Solution

**Author:** constantine786
**Votes:** 107
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/2012318/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/2012318/)

---

Once you have identified that **stack** solves this problem (this took me like 30mins to figure out :)...), the logic is quite straightforward. We just need to track consecutive occurences of a character. If **count** matches **k**, we pop the element from stack.

```
class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:        
        stck = [['$', 0]]     # a placeholder to mark stack is empty. This eliminates the need to do an empty check later
        
        for c in s:
            if stck[-1][0] == c:
                stck[-1][1]+=1 # update occurences count of top element if it matches current character
                if stck[-1][1] == k:
                    stck.pop()
            else:
                stck.append([c, 1])            
        
        return ''.join(c * cnt for c, cnt in stck)
            
```
 
**Time = O(N)** - single iteration of input string
**Space = O(N)** - for stack

I have initialzed the **stack** with `['$', 0]` placeholder. I am using `$` because the input string will only have lower case alphabets. I did this to remove the stack empty check. If you don't need this, you can just do the following:

```
class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:        
        stck = []    
        
        for c in s:                            
            if stck and stck[-1][0] == c: # check if stack is not empty
                stck[-1][1]+=1
                if stck[-1][1] == k:
                    stck.pop()
            else:
                stck.append([c, 1])            
        
        return ''.join(c * cnt for c, cnt in stck)            
```

---
***Please upvote if you find it useful***