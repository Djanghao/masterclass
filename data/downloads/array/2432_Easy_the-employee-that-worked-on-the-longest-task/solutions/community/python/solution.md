# python 3  ||  5 lines, one-pass w/ explanation  ||  T/S: 94% / 46%

**Author:** Spaulding_
**Votes:** 25
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2682319/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2682319/)

---

Here's the plan:


- We iterate through `logs`, which contains the (`worker_id`, `timestamp`) pairs.

- We calculate the duration of the worker's current work session by subtracting the current timestamp `curr` from the previous timestamp `prev`.

- We update `ans`, if necessary, with `curr`.

- Finally, we return the `ans[1]`, which is the  *id* of the worker with the longest time.

```
class Solution:
    def hardestWorker(self, n: int, logs: List[List[int]]) -> int:
         
        prev, ans = 0, (0,0)
		
        for id, curr in logs:
            ans = min(ans,(prev-curr,id))
            prev = curr

        return ans[1]
```
[https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/submissions/1289249591/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/submissions/1289249591/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(logs)`.

