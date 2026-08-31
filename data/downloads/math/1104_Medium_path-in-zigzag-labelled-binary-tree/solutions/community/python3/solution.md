# [Python] O(log n) level-wise parent calculation

**Author:** jelouta
**Votes:** 5
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/608949/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/608949/)

---

# Intuition
A starting point to solve this problem is to think of the much simpler case. when the labelling is always done from left-to-right. 
In that case, you may get the solution by simply dividing the current label by 2 until you reach the top (`1`). 
However, we must make sure we divide the correct number by finding its symmetry in the level, hence, avoiding the fact that the labelling direction keeps switiching up.

### Procedure
- We first determine the level of the label.
- We init the solutions list as a `deque` to prepend elements in `O(1)`
- We iterate starting from the label's level up to the first level (`0`).
- We append the current label to the `deque`.
- We get the label of the previous level in one operation, it uses:
	- `last_element`: the last element in the current level: `2**l - 1`
	- `first_element`: the first element in the current level: `2**(l-1)`
	- The update operation is: `(last_element + first_element - label) // 2`
- Time: `O(log n)`, Space: `O(1)`

```Python
from math import log
from collections import deque

class Solution:
    def pathInZigZagTree(self, label):
        level = int(log(label, 2))
        solution = deque()
        for l in range(level, -1, -1):
            solution.appendleft(label)
            label = (3*(2**l) - 1 - label) // 2
        return solution
```