# ✅Detailed Explanation🔥🔥Extremely Simple and effective🔥O(nlogn) Time and O(n) Space🔥🔥🔥

**Author:** heir-of-god
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5142491/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5142491/)

---

# \uD83C\uDFAFProblem Explanation:
You are given two integer arrays ```wage``` and ```quality```, each os size n and are required to find the minimum cost to form a group from k of this people with some conditions:
1. Each worker in group has the same ```real wage / quality``` ratio
2. This "the same ratio" is the biggest ratio ```minimum wage / quality``` in the group.

# \uD83D\uDCE5Input:
- Integer array ```wage``` which represents **MINIMUM** wage ```wage[i]``` for i-th worker 
- Integer array ```quality``` which represents quality for i-th worker
- Integer ```k``` which represents the number of people in group

# \uD83D\uDCE4Output:
The minimum cost to form group of k people from the input

# \uD83E\uDD14 Intuition
- The first thing to think about is whether ```wage``` gives us anything at all? In fact - no, what we are really interested in is the ratio of wages to quality of each worker, and not his minimum wage, since in the future we will be able to sort the list by this ratio and in this case we will never get a case where a worker receives less, than he requires.
- Okay, I mentioned about sorting, but what do we need to sort and how? As already mentioned, we are not very interested in ```wage```, so all that is important to us is ratios for every worker and his quality
- Since we always want the sum of the quality of our workers to be the lowest (since we are looking for the minimum amount to collect a group), we will constantly have to remove the \u201Cbest\u201D worker from the group every time we exceed the number of people in the group ```k```, so for It will be convenient for us to use a "priority queue" (If you are not very familiar with this concept, you can use a list and constantly sort it, however this is not effective).

# \uD83E\uDDE0 Approach
- Firstly, we sort array, which will contain tuples (ratio of this worker, quality of this worker) on (ratio, quality) - first will come workers with minimum ratio and quality, by this we will ensure that none of the workers in our group will receive less per unit of quality than they should (Either the same amount, or more, since the list is sorted)
- We take each worker from our list and add his quality to the sum, if we have too many workers, then we remove all those who have the largest number and finally, if after removal we have ```k``` workers, then we find the minimum between all previous results and current ones.

> P.S. So we collected and checked every group with every possible ratio, but we did it in a smart way, so this isn't brute force.

# \uD83D\uDCD2 Complexity
- \u23F0 Time complexity: O(n\\*logn), since we use Python ```sorted``` function, loop takes O(n) but this is less than O(n\\*logn) 
- \uD83E\uDDFA Space complexity: O(n) I believe because we use Python ```sorted``` function which creates new list in O(n) and ```heap``` array which also take O(n)

# \uD83E\uDDD1\u200D\uD83D\uDCBB Code
```
import heapq


class Solution:
    def mincostToHireWorkers(self, quality: list[int], wage: list[int], k: int) -> float:
        workers: list[tuple[float, int]] = sorted(
            (float(w) / q, q) for w, q in zip(wage, quality)
        )  # [(ratio, quality), ...]
        res: float = float("inf")
        quality_sum = 0
        heap: list[int] = (
            []
        )  # heap is representing our "queue", when we have more than k workers we delete one with biggest quality so with minimum -quality

        for cur_ratio, q in workers:
            heapq.heappush(heap, -q)
            quality_sum += q
            if len(heap) > k:
                quality_sum += heapq.heappop(heap)
            if len(heap) == k:
                res = min(res, quality_sum * cur_ratio)

        return res
```

## \uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning! \uD83D\uDCDA

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
