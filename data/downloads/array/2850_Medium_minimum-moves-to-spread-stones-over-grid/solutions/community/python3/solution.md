# Python: Hungarian assignment. 10 Lines. O(n^3) beats 100%

**Author:** SalvadorDali
**Votes:** 26
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4024777/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4024777/)

---

# Intuition
The problem is a standard [Hungarian algorithm](https://en.wikipedia.org/wiki/Hungarian_algorithm)

Iterate over all elements in the matrix and check where you have 0 and where you have values > 1.

Values above 1 will be values from which you are moving, values with 0, where are you moving.

Then build a matrix of cost where cost is the distance between two points. You can do this easily with [cdist](https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.cdist.html#scipy.spatial.distance.cdist) module where metric is manhathan distance (called cityblock there)

And just use [linear assignment](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linear_sum_assignment.html)

# Complexity
- Time complexity: $O(n^3)$
- Space complexity: $O(n^2)$

# Code
```
from scipy.optimize import linear_sum_assignment
import numpy as np


class Solution:
  def minimumMoves(self, M: List[List[int]]) -> int:
    data_from, data_to = [], []
    for i in range(3):
      for j in range(3):
        if M[i][j] == 0:
          data_to.append((i, j))
        elif M[i][j] > 1:
          data_from.extend([(i, j)] * (M[i][j] - 1))

    cost = cdist(data_from, data_to, metric='cityblock')
    row_ind, col_ind = linear_sum_assignment(cost)
    return int(cost[row_ind, col_ind].sum())
```