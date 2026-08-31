# Detailed Explanation - Python O(N) Two Pointer Solution

**Author:** hirokinakamura
**Votes:** 79
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/358543/](https://leetcode.com/problems/valid-word-abbreviation/solutions/358543/)

---

### Walkthrough
We maintain two pointers, `i` pointing at word and `j`  pointing at abbr. 
There are only two scenarios:  
* `j` points to a letter. We compare the value `i` and `j` points to. If equal, we increment them. Otherwise, return False. 
* `j` points to a digit. We need to find out the complete number that `j` is pointing to, e.g. `123`. Then we would increment `i` by `123`. We know that next we will: 
	* either break out of the while loop if `i` or `j` is too large 
	* or we will return to scenario 1. 

### Code 
```
class Solution(object):
    def validWordAbbreviation(self, word, abbr):
        """
        :type word: str
        :type abbr: str
        :rtype: bool
        """
        
        i = j = 0 
        while j < len(abbr) and i < len(word): 
            if abbr[j].isalpha(): 
                if abbr[j] != word[i]: 
                    return False 
                i += 1 
                j += 1 
            else: 
                if abbr[j] == '0':  # to handle edge cases such as "01", which are invalid
                    return False 
                temp = 0 
                while j < len(abbr) and abbr[j].isdigit(): 
                    temp = temp * 10 + int(abbr[j]) 
                    j += 1 
                i += temp  
        
        return j == len(abbr) and i == len(word)
```

### Time/Space Complexity
* Time: O(N), where N = max(len(word), len(abbr)) 
* Space: O(1)