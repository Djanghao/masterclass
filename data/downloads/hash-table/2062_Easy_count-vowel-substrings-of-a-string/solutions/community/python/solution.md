# python straightforward solution

**Author:** mqueue
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/1574341/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/1574341/)

---

```
class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        count = 0 
        current = set() 
        for i in range(len(word)):
            if word[i] in 'aeiou':
                current.add(word[i])
                
                for j in range(i+1, len(word)): 
                    if word[j] in 'aeiou':
                        current.add(word[j])
                    else:
                        break
                    
                    if len(current) == 5:
                        count += 1
						
            current = set()
                        
        return count
```