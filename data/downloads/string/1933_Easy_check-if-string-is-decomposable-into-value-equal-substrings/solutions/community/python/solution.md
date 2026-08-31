# Python3.8+ | 1 line | 32ms | regex

**Author:** sarvagya
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/1310226/](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/1310226/)

---

**1-Line Solution:**
```
class Solution:
    def isDecomposable(self, s: str) -> bool:
         return (temp:=[el for el in re.split(r'(.)\\1{2}', s)[::2] if el]) and len(temp) == 1 and len(temp[0]) == 2
```

**Explained Solution:**
```
class Solution:
    def isDecomposable(self, s: str) -> bool:
        
        # 1. Create a pattern to match 3 consecutive occurrence of any character.
        pattern = r'(.)\\1{2}'
        # (.)   -> this a capturing group which matches any character 1 time
        # \\1{2} -> \\1 will refer to the exact character matched in our capturing group and {2} will match 2 occurrence of that character
        
        # 2. Split the original string using the pattern.
        split_list = re.split(pattern, s)
        
        # 3. Remove every alternate element from this split list. Since we are using capturing group in our pattern while splitting, python matches the individual character as well.
        split_list = split_list[::2]
        
        # 4. Remove all empty strings from the split list.
        split_list = [spl for spl in split_list if spl]
        
        #5. Check if only element is left in the list and it should be of length 2.
        if len(split_list) == 1 and len(split_list[0]) == 2:
            return True
        
        return False
```

**Helpful Links:**
* Python re.split behaviour when using capturing groups: https://docs.python.org/3/library/re.html#re.split
* Walrus Operator in Python 3.8: https://docs.python.org/3/whatsnew/3.8.html#assignment-expressions

**This might not be the best optimised approach. So any kind of feedback is welcome. :)**