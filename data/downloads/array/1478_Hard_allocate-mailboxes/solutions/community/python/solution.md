# The explanation you've been waiting for

**Author:** number42
**Votes:** 5
**Link:** [https://leetcode.com/problems/allocate-mailboxes/solutions/1513947/](https://leetcode.com/problems/allocate-mailboxes/solutions/1513947/)

---

Let's first understand the optimal strategy to put a single mailbox.
* If there is only one house, we can put the mailbox at that house, resulting in a distance of zero.
* If there are two houses, the best place to put the mailbox is in the middle, optimally dividing the distance between the houses.
* If there are three houses, the best place to put the mailbox is at the second house.

Generalizing, given an even number of houses, we will put the mailbox in between the middle two houses.
For an odd number of houses, we will put the mailbox at the middle house.

So, now we understand how to put one mailbox, but where do we put it to begin with? Observe that given `n` houses and `k` mailboxes, the last house we can put the first mailbox is at index `n - k`.

For example, `n=6`, `k=3`, we can put the first mailbox anywhere from the 1st house (index 0) till the 4th house (index 3). If we put the first mailbox beyond the 4th house, we won't have enough houses left to put the remaining 2 mailboxes.

Once we have put the first mailbox covering up to the i-th house, we are left with `n - i` houses and `k - 1` mailboxes, which is a subproblem of the original problem.

For each choice of putting the first mailbox, we use the logic described in the beginning to calculate the distance. We then recurse on the smaller subproblem and add the two distances. The answer is the minimum of all such distances.

There are two base cases:
1. If there's only one mailbox to put, we use the logic described in the beginning to calculate the distance.
2. If there are as many mailboxes as there are houses, we put one mailbox at each house resulting in a total distance of zero.

Time complexity:
* Consider the example of `k=1` for any `n`. The time complexity to calculate the distance is `O(n)`.
* Consider the example of `k=2` for any `n`. For each placement of the first mailbox, we take `O(n)` time to calculate the distance from the second mailbox. Since the first mailbox can be placed at any of the `n - 1` positions, the total time complexity is `O(n^2)`.
* Consider the example of `k=3` for any `n`. For each placement of the first mailbox, we take `O(n^2)` time to place the remaining two mailboxes.

Clearly, the total time complexity is `O(n^k)`. However, due to memoization, this is much better in reality.

```
import functools

class Solution:
    def minDistance(self, houses: List[int], k: int) -> int:
        @functools.cache
        def _loop(start: int, end: int, num_mailboxes: int) -> int:
            num_houses = end - start + 1
            if num_houses == num_mailboxes:
                return 0
            if num_mailboxes == 1:
                if num_houses % 2 == 0:
                    mid = start + num_houses // 2
                    pos = houses[mid - 1] + (houses[mid] - houses[mid - 1]) // 2
                else:
                    mid = start + (num_houses - 1) // 2
                    pos = houses[mid]

                return sum(abs(pos - houses[i]) for i in range(start, end + 1))

            min_dist = sys.maxsize
            for i in range(start, len(houses) - num_mailboxes + 1):
                dist = _loop(start, i, 1) + _loop(i + 1, end, num_mailboxes - 1)
                min_dist = min(min_dist, dist)

            return min_dist

        houses.sort()
        return _loop(0, len(houses) - 1, k)
```