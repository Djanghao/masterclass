# [Java/Python 3] BFS using PriorityQueue/heap w/ brief explanation and analysis.

**Author:** rock
**Votes:** 19
**Link:** [https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/1710065/](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/1710065/)

---

**Q & A**

Q1: Why do you have `ans.size() < k` in the `while` condition?
A1: The `PriorityQueue/heap` is sorted according to the rank specified in the problem. Therefore, the `ans` always holds highest ranked items within the given price range, and once it reaches the size of `k`, the loop does NOT need to iterate any more.

**End of Q & A**

----

Use a `PriorityQueue/heap` to store (distance, price, row, col) and a HashSet to prune duplicates.
```java
    private static final int[] d = {0, 1, 0, -1, 0};
    public List<List<Integer>> highestRankedKItems(int[][] grid, int[] pricing, int[] start, int k) {
        int R = grid.length, C = grid[0].length;
        int x = start[0], y = start[1], low = pricing[0], high = pricing[1];
        Set<String> seen = new HashSet<>(); // Set used to prune duplicates.
        seen.add(x + "," + y);
        List<List<Integer>> ans = new ArrayList<>();
        // PriorityQueue sorted by (distance, price, row, col).
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] == b[0] ? a[1] == b[1] ? a[2] == b[2] ? a[3] - b[3] : a[2] - b[2] : a[1] - b[1] : a[0] - b[0]);
        pq.offer(new int[]{0, grid[x][y], x, y}); // BFS starting point.
        while (!pq.isEmpty() && ans.size() < k) {
            int[] cur = pq.poll();
            int distance = cur[0], price = cur[1], r = cur[2], c = cur[3]; // distance, price, row & column.
            if (low <= price && price <= high) { // price in range?
                ans.add(Arrays.asList(r, c));
            }
            for (int m = 0; m < 4; ++m) { // traverse 4 neighbors.
                int i = r + d[m], j = c + d[m + 1];
                // in boundary, not wall, and not visited yet?
                if (0 <= i && i < R && 0 <= j && j < C && grid[i][j] > 0 && seen.add(i + "," + j)) {
                    pq.offer(new int[]{distance + 1, grid[i][j], i, j});
                }
            }
        }
        return ans;
    }
```
```python
    def highestRankedKItems(self, grid: List[List[int]], pricing: List[int], start: List[int], k: int) -> List[List[int]]:
        R, C = map(len, (grid, grid[0]))
        ans, (x, y), (low, high) = [], start, pricing
        heap = [(0, grid[x][y], x, y)]
        seen = {(x, y)}
        while heap and len(ans) < k:
            distance, price, r, c = heapq.heappop(heap)
            if low <= price <= high:
                ans.append([r, c])
            for i, j in (r, c + 1), (r, c - 1), (r + 1, c), (r - 1, c):
                if R > i >= 0 <= j < C and grid[i][j] > 0 and (i, j) not in seen: 
                    seen.add((i, j))
                    heapq.heappush(heap, (distance + 1, grid[i][j], i, j))
        return ans
```

In case you prefer negating the `grid` values to using HashSet, please refer to the following codes.
Of course, the input is modified.

```java
    private static final int[] d = {0, 1, 0, -1, 0};
    public List<List<Integer>> highestRankedKItems(int[][] grid, int[] pricing, int[] start, int k) {
        int R = grid.length, C = grid[0].length;
        int x = start[0], y = start[1], low = pricing[0], high = pricing[1];
        List<List<Integer>> ans = new ArrayList<>();
        // PriorityQueue sorted by (distance, price, row, col).
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] == b[0] ? a[1] == b[1] ? a[2] == b[2] ? a[3] - b[3] : a[2] - b[2] : a[1] - b[1] : a[0] - b[0]);
        pq.offer(new int[]{0, grid[x][y], x, y}); // BFS starting point.
        grid[x][y] *= -1;
        while (!pq.isEmpty() && ans.size() < k) {
            int[] cur = pq.poll();
            int distance = cur[0], price = cur[1], r = cur[2], c = cur[3]; // distance, price, row & column.
            if (low <= price && price <= high) { // price in range?
                ans.add(Arrays.asList(r, c));
            }
            for (int m = 0; m < 4; ++m) { // traverse 4 neighbors.
                int i = r + d[m], j = c + d[m + 1];
                // in boundary, not wall, and not visited yet?
                if (0 <= i && i < R && 0 <= j && j < C && grid[i][j] > 0) {
                    pq.offer(new int[]{distance + 1, grid[i][j], i, j});
                    grid[i][j] *= -1;
                }
            }
        }
        return ans;
    }
```
```python
    def highestRankedKItems(self, grid: List[List[int]], pricing: List[int], start: List[int], k: int) -> List[List[int]]:
        R, C = map(len, (grid, grid[0]))
        ans, (x, y), (low, high) = [], start, pricing
        heap = [(0, grid[x][y], x, y)]
        grid[x][y] *= -1
        while heap and len(ans) < k:
            distance, price, r, c = heapq.heappop(heap)
            if low <= price <= high:
                ans.append([r, c])
            for i, j in (r, c + 1), (r, c - 1), (r + 1, c), (r - 1, c):
                if R > i >= 0 <= j < C and grid[i][j] > 0: 
                    heapq.heappush(heap, (distance + 1, grid[i][j], i, j))
                    grid[i][j] *= -1
        return ans
```
**Analysis:**

Time: `O(R * C * log(R * C))`, space: `O(R * C)`, where `R = grid.length, C = grid[0].length`.