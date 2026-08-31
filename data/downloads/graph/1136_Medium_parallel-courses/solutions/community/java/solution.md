# Java easy BFS + topological Sort

**Author:** chiragmantri
**Votes:** 4
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/1133164/](https://leetcode.com/problems/parallel-courses/solutions/1133164/)

---

```
class Solution {
    public int minimumSemesters(int n, int[][] relations) {

        if (n == 1) {
            return 0;
        }

        List < Integer > [] map = new ArrayList[n + 1];
        for (int i = 0; i <= n; i++) {
            map[i] = new ArrayList();
        }

        int[] indegree = new int[n + 1];
        for (int[] rel: relations) {
            int u = rel[0], v = rel[1];

            map[u].add(v);
            indegree[v]++;
        }

        int count = 0;
        Queue < Integer > q = new LinkedList();
        for (int i = 1; i <= n; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }

        int sem = 0;
        while (!q.isEmpty()) {
            int size = q.size();
            while (size-- > 0) {
                int u = q.poll();
                count++;
                for (int v: map[u]) {
                    if (--indegree[v] == 0) {
                        q.add(v);
                    }
                }
            }
            sem++;
        }

        return count == n ? sem : -1;
    }
}