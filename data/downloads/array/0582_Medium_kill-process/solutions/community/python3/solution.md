# Python 3 -> 99.85% faster using dictionary

**Author:** mybuddy29
**Votes:** 28
**Link:** [https://leetcode.com/problems/kill-process/solutions/914266/](https://leetcode.com/problems/kill-process/solutions/914266/)

---

**Suggestions to make it better are always welcomed.**

Think of it as a tree and now create a dictionary of ppid. Key is ppid and values are the list of its immediate children.
Now search through the dictionary in BFS fashion to get all the processes that will be killed.

```
class Solution:
    def killProcess(self, pid: List[int], ppid: List[int], kill: int) -> List[int]:
        mapping = collections.defaultdict(list)
        for i in range(len(ppid)):
            mapping[ppid[i]].append(pid[i])

        queue = collections.deque()
        queue.append(kill)
        result = []
        while queue:
            killed = queue.popleft()
            result.append(killed)
            if killed in mapping:
                queue.extend(mapping[killed])

        return result
```

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**