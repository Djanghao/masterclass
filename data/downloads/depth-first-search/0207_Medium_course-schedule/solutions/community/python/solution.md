# Python 20 lines DFS solution sharing with explanation

**Author:** rodolphe
**Votes:** 472
**Link:** [https://leetcode.com/problems/course-schedule/solutions/58586/](https://leetcode.com/problems/course-schedule/solutions/58586/)

---

    def canFinish(self, numCourses, prerequisites):
        graph = [[] for _ in xrange(numCourses)]
        visit = [0 for _ in xrange(numCourses)]
        for x, y in prerequisites:
            graph[x].append(y)
        def dfs(i):
            if visit[i] == -1:
                return False
            if visit[i] == 1:
                return True
            visit[i] = -1
            for j in graph[i]:
                if not dfs(j):
                    return False
            visit[i] = 1
            return True
        for i in xrange(numCourses):
            if not dfs(i):
                return False
        return True

1. if node `v` has not been visited, then mark it as `0`.
2. if node `v` is being visited, then mark it as `-1`. If we find a vertex marked as `-1` in DFS, then their is a ring.
3. if node `v` has been visited, then mark it as `1`. If a vertex was marked as `1`, then no ring contains `v` or its successors.

*References: [daoluan.net][1]* 


  [1]: http://daoluan.net/blog/map-ring/