# Python, DFS, readable code.

**Author:** hardfault
**Votes:** 118
**Link:** [https://leetcode.com/problems/android-unlock-patterns/solutions/475868/](https://leetcode.com/problems/android-unlock-patterns/solutions/475868/)

---

Many have come up with this solution. __But I had to struggle to understand their logic.__

I have tried my best to explain and name the variables well. Upvote if it helps you ;)

This question is easy to implement if the __nextNum__ from any __num__ was in any of 8 possible directions. However, the tricky part is that the path to reach __nextNum__ might go through existing numbers as well.

For example, __6 - 5 - 4 - 1 - 9 - 2__ is a valid move. If you notice this sequence carefully, we are passing through __5 twice__. once while going from 6 to 5 and once again while going from 1 to 9. This type of movement is a departure from the usual DFS in a matrix. 

Technically, the screen unlocking on android devices have dots and not numbers. That makes it lot easier to understand how we can reach from _1_ to _6_ without going through  _5_. (or _2_ to _9_ without going through _5_ or _6_) __This isn't mentioned in the question hence leads to ambiguity.__

So, summarizing the above points:  From a number in the keypad we can reach any other number, but can't reach the one's that have a number as obstacle in between (without actually going through it.) For example, for (1 to 3), the obstacle is 2 similarly:
```
self.has_obstacle = {(1,3):2, (1,7):4, (1,9):5, (2,8):5, (3,7):5, (3,1):2, (3,9):6, (4,6):5, (6,4):5, (7,1):4, (7,3):5, (7,9):8, (8,2):5, (9,7):8, (9,3):6, (9,1):5}
```
So, if you have to reach through the obstacle, it is possible only if the obstacle was previously visited.

If you just understand this, rest of the problem becomes easy to code.

```
class Solution(object):
    def __init__(self):
        self.has_obstacle = {(1,3):2, (1,7):4, (1,9):5, (2,8):5, (3,7):5, (3,1):2, (3,9):6, (4,6):5, (6,4):5, (7,1):4, (7,3):5, (7,9):8, (8,2):5, (9,7):8, (9,3):6, (9,1):5}
 
    def numberOfPatterns(self, m, n):
        self.validPatterns = 0
        for num in range(1, 10):
            self.visited = set()
            self._getValidWays(num, 1, m, n)
        return self.validPatterns
    
    def _getValidWays(self, num, count, m, n):
		# consider the valid patterns only in length (m to n)
        if m <= count <= n:
            self.validPatterns += 1
		# after reaching path count 'n', we need not go on any further.
        if count == n:
            return
        
        self.visited.add(num)
        for nextNum in range(1, 10):
            if nextNum not in self.visited:
				# if a nextNum has an obstacle while starting from num, and is not visited previously, don't consider this path.
                if (num, nextNum) in self.has_obstacle and self.has_obstacle[(num, nextNum)] not in self.visited:
                    continue
                self._getValidWays(nextNum, count+1, m, n)
        self.visited.remove(num)
```

PS: you can imporve the speed if you consider the symmetrical nature.