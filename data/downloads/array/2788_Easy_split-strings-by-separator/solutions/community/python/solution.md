# NO BRAINER SOLUTION | EASIEST | BEGINNER FREINDLY | BEATS 97%

**Author:** Pushkar91949
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/5207244/](https://leetcode.com/problems/split-strings-by-separator/solutions/5207244/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The task is to split a list of strings (words) by a given separator and then return a list of non-empty strings. The goal is to ensure that all instances of the separator are removed, and the remaining segments are collected into a single list. The algorithm can be broken down into a series of transformations where each word is split, and the resulting segments are filtered to exclude empty strings.
# Approach
<!-- Describe your approach to solving the problem. -->
1. **Split Each Word:** Iterate through the list of words and split each word using the provided separator. This will transform each word into a list of substrings.
2. **Flatten the List:** After splitting, combine all the resulting lists of substrings into a single list. This can be done using list concatenation.
3. **Filter Empty Strings:** Iterate through the combined list and add only the non-empty strings to the final result list.


# **Here is the step-by-step process in the provided code:**

**Splitting:** The first for loop iterates over each word in the words list and splits it by the separator, modifying the words list in place so that each entry is now a list of substrings.
**Flattening:** The second for loop concatenates all the lists of substrings into a single list ans.
**Filtering:** We return the list ans after excluding empty strings in the statement 
```
return [x for x in ans if x != '']
```

# Complexity
- Time complexity: O(n\u22C5m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def splitWordsBySeparator(self, words: List[str], separator: str) -> List[str]:
        for i in range(len(words)):
            words[i] = words[i].split(separator)
        
        ans = []
        for word in words:
            ans += word
        
        return [x for x in ans if x != '']
```