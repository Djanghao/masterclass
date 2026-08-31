# Python solution - scipy.optimize.linear_sum_assignment

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-break-locks-ii/solutions/6136458/](https://leetcode.com/problems/minimum-time-to-break-locks-ii/solutions/6136458/)

---

It was clear that this was a matching/assignment/optimization problem.  "Energy" starts at 1, and then from there we hack away at a lock, taking $ceiling(\\frac{lock\\_strength}{energy})$ time.  Then energy increases by 1, and we attack another lock, and so on.  I'll admit I tried some things with either sorting or heaps, and those linear-style approaches failed on some case here or there.  The nearest problem (just what came to me) was a daily problem from a couple of months ago, [2463. Minimum Total Distance Traveled](https://leetcode.com/problems/minimum-total-distance-traveled/description/), which led me to the approach used here.  The `scipy` package has plenty of useful functions, and the one we'll use here is `linear_sum_assignment()`.  The function will optimize the assignment but we still need to properly construct the inputs and also properly utilize the outputs, so let's dive into that...

# Approach
For starters, import `optimize` from `scipy`, and also import `numpy`.  The linear cost optimization function comes from `scipy`, and the input to that is a `numpy` matrix as opposed to a standard python matrix (list of lists).

Next, we'll construct a cost matrix.  Recall from the intro, energy starts at one, and then we attack a lock until that lock is broken, using some turns/time.  Then energy increases by one, and we attack another lock, once again using turns/time determined by energy, and so on until all locks are broken.  It should be clear that the order that the locks are attacked is what needs to be optimized (to minimize time).  Here a double-loop process is used to construct the cost matrix, loop through `turn_energy`, which is the array from 1 through the number of locks (`range(1, n + 1)`).  Then loop through each strength value (`s`), and the cost (time needed) to attack that lock on that turn is `math.ceil(s/turn_energy)`.  When both loops complete, the result will be an n x n matrix containing the cost to attack each lock on each turn.

With the cost matrix constructed as a standard python list of lists, convert it into a numpy array/matrix using `numpy.array(costs)`.  Now pass that into the linear sum optimization function, using `optimize.linear_sum_assignment(costs)`.  This will return row and column indices for the optimal assignment, so we need to pull those from the `costs` input to get the actual time values resulting from the optimal assignment.  Sum those and that will be the minimum time to break the locks.

# Code
```python3 []
from scipy import optimize
import numpy

class Solution:
    def findMinimumTime(self, strength: List[int]) -> int:
        n = len(strength)
        costs = []
        for turn_energy in range(1, n + 1):
            turn_cost = []
            for s in strength:
                turn_cost.append(math.ceil(s/turn_energy))
            costs.append(turn_cost)
        costs = numpy.array(costs)
        return int(sum(costs[optimize.linear_sum_assignment(costs)]))

```