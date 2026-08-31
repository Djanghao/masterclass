# Python | Backtracking | 664ms | 100% time and space | Explanation

**Author:** detective_dp
**Votes:** 30
**Link:** [https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1433054/](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1433054/)

---

* I think the test cases are little weak, because I just did backtracking and a little pruning and seems to be 4x faster than bitmask solutions.
* The question boils down to finding minimum number of subsets such that each subset sum <= sessionTime. I maintain a list called subsets, where I track each subset sum. For each tasks[i] try to fit it into one of the existing subsets or create a new subset with this tasks[i] and recurse further. Once I reach the end of the list, I compare the length of the subsets list with current best and record minimum.
* For pruning, I do the following - Once the length of subsets is larger than current best length, I backtrack. This doesn't decrease complexity in mathematical terms but I think in implementation, it helps a lot.

```
class Solution:
    def minSessions(self, tasks: List[int], sessionTime: int) -> int:
        subsets = []
        self.ans = len(tasks)
        
        def func(idx):
            if len(subsets) >= self.ans:
                return
            
            if idx == len(tasks):
                self.ans = min(self.ans, len(subsets))
                return
            
            for i in range(len(subsets)):
                if subsets[i] + tasks[idx] <= sessionTime:
                    subsets[i] += tasks[idx]
                    func(idx + 1)
                    subsets[i] -= tasks[idx]
            
            subsets.append(tasks[idx])
            func(idx + 1)
            subsets.pop()
        
        func(0)
        return self.ans