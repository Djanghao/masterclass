# Python3 || 10 lines, filters and a queue  || T/S: 93% / 12%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/5809662/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/5809662/)

---

Here's the plan:

1. We determine the boxes with available keys, and we update `status` to reflect the boxes that have keys available in other boxes.

2. We determine the `initialBoxes` that do not require keys (hereafter, *no-key boxes*), and load them in a queue.
3. We pop a no-key box from the queue, count the candies, and push the no-key boxes in the popped box onto the queue.
4. When the queue is exhausted, we return the candy-count as the answer to the problem.
```python3 []
class Solution:
    def maxCandies(self, status: List[int], candies: List[int], keys: List[List[int]], 
                         containedBoxes: List[List[int]], initialBoxes: List[int]) -> int:

        n, ans = len(keys), 0
        open_box = lambda x: status[x] == 1

        for key in chain(*keys): status[key] = 1            # <-- 1)

        keychain = set(filter(open_box, range(n)))          # <-- 2)
        queue = deque(set(initialBoxes) & keychain)        

        while queue:                                        # <-- 3)
            i = queue.popleft()
            ans+= candies[i]
            queue.extend(filter(open_box, containedBoxes[i]))

        return ans                                          # <-- 4)
```
[https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/submissions/1395742879/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/submissions/1395742879/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(status)`.

