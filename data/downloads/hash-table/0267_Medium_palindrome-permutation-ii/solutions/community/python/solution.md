# Python backtracking: build string from the middle

**Author:** mxmb
**Votes:** 15
**Link:** [https://leetcode.com/problems/palindrome-permutation-ii/solutions/1403853/](https://leetcode.com/problems/palindrome-permutation-ii/solutions/1403853/)

---

If you have some familiarity with palindromes, you should know that a palindrome can only be constructed from a set of letters if and only if **at most** one character has an odd count. If so, this odd-count character will be in the middle of the string.

We can construct palindromes by considering two scenarios, either there is one character that has an odd count, or all characters have even counts. 

If all characters have even counts, the process of backtracking is simple. For each remaining character, we simply add it to each side of the current solution. One branch of the backtracking solution would grow like this:

___

initial counter: {'a' : 2, 'b' : 2, 'c' : 2}

cur: '', remaining: {'a' : 2, 'b' : 2, 'c' : 2}
cur: 'aa', remaining: {'b' : 2, 'c' : 2}
cur: 'baab', remaining: {'c' : 2}
cur: 'cbaabc', remaining: {} # no more characters, add cur to result and backtrack

___

If one character has an odd count, we start with the odd-count character as cur and repeat the same process. It would look something like this:

____

initial counter: {'a' : 2, 'b' : 2, 'c' : 2, 'i' : 1}

cur: 'i', remaining: {'a' : 2, 'b' : 2, 'c' : 2}
cur: 'aia', remaining: {'b' : 2, 'c' : 2}
cur: 'baiab', remaining: {'c' : 2}
cur: 'cbaiabc', remaining: {} # no more characters, add cur to result and backtrack

____

Once you've made this observation this should be a standard backtracking problem.

```python
def generatePalindromes(self, s: str) -> List[str]:
        counter = Counter(s)
        res = []
        
        def backtrack(cur=""):
            if not counter:
                res.append(cur)
                return
            for c in list(counter.keys()):
				counter[c] -= 2
                if not counter[c]:
					del counter[c]
                backtrack(c+cur+c)
                counter[c] += 2

        oddCounts = [c for c in counter if counter[c]%2] # The characters in counter with odd count
        
        if not len(oddCounts): # if no odd chars, we can simply backtrack
            backtrack()
            
        if len(oddCounts) == 1: # if exactly one odd char, backtrack with oddChar in the middle of string
            oddChar = oddCounts[0]
            counter[oddChar] -= 1
            if not counter[oddChar]:
                del counter[oddChar]
            backtrack(oddChar)
            
        return res
```