# Python 3 | Math | Explanation

**Author:** idontknoooo
**Votes:** 272
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1671908/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1671908/)

---

### Explanation
- I honestly don't know how to categorize this problem. It seems like a `Math` problem to me. Once you understand the logic, the implementation is simple. 
- Basically the "pattern" of each row should be the same, by pattern, I mean following:
	- `001100` and `001100` are the same pattern
	- `001100` and `110011` (the invert of original) are the same pattern
- Only in above situation, one matrix can be converted to all zero
- Intuition? 
	- Believe it or not, I draw a couple examples to test it out and suddenly it becomes obvious
	- I guess it's good habit to get your hands dirty :)
### Implementation
```
class Solution:
    def removeOnes(self, grid: List[List[int]]) -> bool:
        r1, r1_invert = grid[0], [1-val for val in grid[0]]
        for i in range(1, len(grid)):
            if grid[i] != r1 and grid[i] != r1_invert:
                return False
        return True
```

You need an one-liner? Sure, why not. 
```
class Solution:
    def removeOnes(self, grid: List[List[int]]) -> bool:
        return all(grid[i] == grid[0] or grid[i] == [1-val for val in grid[0]] for i in range(len(grid)))
```