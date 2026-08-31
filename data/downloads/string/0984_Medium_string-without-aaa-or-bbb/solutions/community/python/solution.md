# Python 99% - Greedy Approach with comments

**Author:** daryllman
**Votes:** 2
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/1294459/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/1294459/)

---

```
# M1 - longer
class Solution:
    def strWithout3a3b(self, a: int, b: int) -> str:
        
        # INIT empty string
        res = ""
        available = {'a': a, 'b': b}
        
        # While there are still letters to add
        while a > 0 or b > 0:
            
            currLetter = ""
            
            # Loop through the letters
            for letter, count in available.items():
                
                # CHECK if addition of letter is valid
                if len(res) >= 2 and res[-2:] != letter*2 and available[letter]>0 or len(res)<2 and available[letter]>0:
                    # If letter not assigned, add this
                    if not currLetter:
                        print("if not currLetter", letter)
                        currLetter = letter
                    
                    # ELSE if letter is assigned already, check if current letter is better (larger count) => reassign
                    else: 
                        if available[letter] > available[currLetter]:
                            print("reassinged currLetter", letter)
                            currLetter = letter
                            
                
            # END if we cant find any valid letters
            if not currLetter: 
                break
            
            res += currLetter
            available[currLetter] -= 1
            
        # RETURN res
        return res

# M2 - shorter
class Solution(object):
    def strWithout3a3b(self, A: int, B: int) -> str:
        ans = []

        while A or B:
            # If there is consecutive 2 => need to check if is A or B, so we can avoid
            if len(ans) >= 2 and ans[-1] == ans[-2]:
                writeA = ans[-1] == 'b' # If is B, we can only add A next
                
            else: # No restriction, add the one with largest count
                writeA = A >= B 
            
            # Note: We dont need to check if letter count is 0 
            # because all count will be used in the string (as indicated in question)
            
            if writeA:
                A -= 1
                ans.append('a')
            else:
                B -= 1
                ans.append('b')

        return "".join(ans)
```