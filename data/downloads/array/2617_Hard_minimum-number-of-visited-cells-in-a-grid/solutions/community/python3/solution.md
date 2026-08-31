# [C++, Java, Python3] Set/TreeSet/SortedList BFS

**Author:** tojuna
**Votes:** 67
**Link:** [https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/solutions/3395709/](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/solutions/3395709/)

---

# Intuition
Maintain a queue to determine which cell to go to next. Since the grid is too big and `grid[i][j]` can be pretty big too, we will find ourselves iterating over the grid again and again. We can use Set/TreeSet/SortedList to keep track of visited nodes and make sure we don't visit them again or even consider them again in the for loop by removing them once they have been visited.

# Explanation
This code is using the breadth-first search algorithm to find the minimum number of cells that need to be visited to reach from the top-left cell of a given grid to the bottom-right cell. To avoid iterating over the entire grid again and again, it uses a Set/TreeSet/SortedList data structure to keep track of the visited nodes in the horizontal and vertical directions. This enables efficient iteration over the subset of cells that haven't been visited yet.

During the for loop, the irange method of the SortedList object is used to iterate over the subset of cells that haven't been visited yet. Specifically, for the s0 list, it iterates over the columns that haven't been visited yet and are within the range of (j+1, min(j+1+grid[i][j], n) - 1). Similarly, for the s1 list, it iterates over the rows that haven't been visited yet and are within the range of (i+1, min(i+1+grid[i][j], m) - 1). This results in significant speed-ups when the grid is large or the values of grid[i][j] are large.

# Complexity
- Time complexity: `O(mn * log(max(m, n)))`
- Space complexity: `O(mn)`

# Code
**Python3**:
```
from sortedcontainers import SortedList
class Solution:
    def minimumVisitedCells(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        s0 = [SortedList(range(n)) for _ in range(m)]
        s1 = [SortedList(range(m)) for _ in range(n)]
        q = deque([(0, 0, 1)])

        while q:
            i, j, d = q.popleft()
            if (i, j) == (m-1, n-1):
                return d
            for k in list(s0[i].irange(j+1, min(j+1+grid[i][j], n) - 1)):
                q.append((i, k, d+1))
                s0[i].remove(k)
                s1[k].remove(i)
            for k in list(s1[j].irange(i+1, min(i+1+grid[i][j], m) - 1)):
                q.append((k, j, d+1))
                s1[j].remove(k)
                s0[k].remove(j)
        return -1
```

**C++**:
To keep track of which cells have already been visited, the code uses two sets of sets - s0 and s1 - one for each row and column of the grid. These sets represent the indices of cells that have not been visited yet. During each iteration of the BFS loop, the code finds the next set of cells that can be visited and updates the corresponding sets by removing the cells that have been visited. This is done using the lower_bound() function of the set, which returns an iterator pointing to the first element that is not less than a given value.
```
int minimumVisitedCells(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size();
    vector<set<int>> s0(m), s1(n);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            s0[i].insert(j);
            s1[j].insert(i);
        }
    }
    queue<vector<int>> q;
    q.push({0, 0, 1});

    while (!q.empty()) {
        auto cell = q.front(); q.pop();
        int i = cell[0], j = cell[1], d = cell[2];
        if (i == m - 1 && j == n - 1) return d;

        auto it = s0[i].lower_bound(j + 1);
        while (it != s0[i].end() && *it <= j + grid[i][j]) {
            q.push({i, *it, d + 1});
            s1[*it].erase(i);
            s0[i].erase(it++);
        }
        it = s1[j].lower_bound(i + 1);
        while (it != s1[j].end() && *it <= i + grid[i][j]) {
            q.push({*it, j, d + 1});
            s0[*it].erase(j);
            s1[j].erase(it++);
        }
    }
    return -1;
}
```
**Java**:
```
public int minimumVisitedCells(int[][] grid) {
    int m = grid.length, n = grid[0].length;
    TreeSet<Integer>[] s0 = new TreeSet[m], s1 = new TreeSet[n];
    for (int i = 0; i < m; i++) {
        s0[i] = new TreeSet<>();
        for (int j = 0; j < n; j++)
            s0[i].add(j);
    }
    for (int j = 0; j < n; j++) {
        s1[j] = new TreeSet<>();
        for (int i = 0; i < m; i++) 
            s1[j].add(i);
    }
    Queue<int[]> q = new LinkedList<>();
    q.offer(new int[]{0, 0, 1});

    while (!q.isEmpty()) {
        int[] cell = q.poll();
        int i = cell[0], j = cell[1], d = cell[2];
        if (i == m - 1 && j == n - 1) return d;

        Integer k = s0[i].ceiling(j+1);
        while (k != null && k <= j + grid[i][j]) {
            q.offer(new int[]{i, k.intValue(), d + 1});
            s0[i].remove(k);
            s1[k.intValue()].remove(i);
            k = s0[i].ceiling(j + 1);
        }
        k = s1[j].ceiling(i+1);
        while (k != null && k <= i + grid[i][j]) {
            q.offer(new int[]{k.intValue(), j, d + 1});
            s1[j].remove(k);
            s0[k.intValue()].remove(j);
            k = s1[j].ceiling(i + 1);
        }
    }
    return -1;
}
```
