# Intuitive Python O(n) DP, simple & readable code

**Author:** jeffkmeng
**Votes:** 105
**Link:** [https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4143983/](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4143983/)

---

Let's look the two strings as a list of indexes that we need to fix, which we'll store in a list called `diffs`
For example 1, diffs = [0, 3, 5, 8]

Now we can either:

1. move any index left or right for cost 1 (e.g. [0, 3, 5, 8] => [0, 4, 5, 8] for cost 1)
2. delete any two adjacent indexes for cost 1
3. delete any two non-adj indexes for cost x
4. add any two non-existing indexes for cost 1, but we wouldn't ever do this
        
Treat this problem like the classic house robbers DP problem.
Start from the last element in diffs: we can either pair this with the second to last element and remove both of those for cost `diffs[-1] - diffs[-2]` (the distance between them), or we can take out the last element for cost `x / 2`. Now repeat this process until you've removed all the elements in diffs!

Note that if there are an odd number of diffs, then it's impossible to correct them all, since every operation in the problem operates on exactly two bits. That means there must be an even number of diffs for any answer.

Thus, for the zeroth element, if we end up there, we have to pay the x / 2, since there's nothing to pair it with, and this is how we ensure that we always fully make pairs. (we never end up paying only `x / 2` -- we'll always pay the `x / 2` cost an even number of times)

The code may help you understand this. It's written in a readable way.
        

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
from functools import cache
class Solution:
    def minOperations(self, s1: str, s2: str, x: int) -> int:
        N = len(s1)

        # list of indexes where the bits differ
        diffs = [i for i, a, b in zip(range(N), s1, s2) if a != b]
        
        # if there are an odd number of differences, it's impossible
        if len(diffs) % 2 == 1:
            return -1
        
        
        @cache
        def bestCostUpTo(i: int):
            # Returns the lowest cost to correct all diffs 
            #  up to and including diffs[i]

            if i == 0:
                return x / 2
            if i == -1:
                return 0
            return min(
                bestCostUpTo(i - 1) + x / 2,
                bestCostUpTo(i - 2) + diffs[i] - diffs[i - 1]
            )
        
        return int(bestCostUpTo(len(diffs) - 1))
```