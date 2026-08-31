# Python3 Clear and Short Recursive Solution

**Author:** jinjiren
**Votes:** 117
**Link:** [https://leetcode.com/problems/brace-expansion-ii/solutions/317623/](https://leetcode.com/problems/brace-expansion-ii/solutions/317623/)

---

# The general idea
**Split expressions into groups separated by top level `','`; for each top-level sub expression (substrings with braces), process it and add it to the corresponding group; finally combine the groups and sort.**
## Thought process
- in each call of the function, try to remove one level of braces
- maintain a list of groups separated by top level `','`
	- when meets `','`: create a new empty group as the current group
	- when meets `'{'`: check whether current `level` is 0, if so, record the starting index of the sub expression; 
		- always increase `level` by 1, no matter whether current level is 0
	- when meets `'}'`: decrease `level` by 1; then check whether current `level` is 0, if so, recursively call `braceExpansionII` to get the set of words from `expresion[start: end]`, where `end` is the current index (exclusive).
		- add the expanded word set to the current group
	- when meets a letter: check whether the current `level` is 0, if so, add `[letter]` to the current group
	- **base case: when there is no brace in the expression.**
- finally, after processing all sub expressions and collect all groups (seperated by `','`), we initialize an empty word_set, and then iterate through all groups
	- for each group, find the product of the elements inside this group
	- compute the union of all groups
- sort and return
- note that `itertools.product(*group)` returns an iterator of **tuples** of characters, so we use` ''.join()` to convert them to strings

```py
class Solution:
    def braceExpansionII(self, expression: str) -> List[str]:
        groups = [[]]
        level = 0
        for i, c in enumerate(expression):
            if c == '{':
                if level == 0:
                    start = i+1
                level += 1
            elif c == '}':
                level -= 1
                if level == 0:
                    groups[-1].append(self.braceExpansionII(expression[start:i]))
            elif c == ',' and level == 0:
                groups.append([])
            elif level == 0:
                groups[-1].append([c])
        word_set = set()
        for group in groups:
            word_set |= set(map(''.join, itertools.product(*group)))
        return sorted(word_set)
```