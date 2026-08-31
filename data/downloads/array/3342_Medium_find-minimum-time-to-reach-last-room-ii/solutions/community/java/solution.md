# Python3 || 13 lines, heap and toggle  ||

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6003899/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6003899/)

---

Pretty much the same as the preceding problem, with the added feature that the step toggles between 1 and 2, which we achieve by replacing `step` with `3 -  step`.

```python3 []
class Solution:
    def minTimeToReach(self, moveTime: List[List[int]]) -> int:
        
        onGrid = lambda x, y: 0 <= x < n and 0 <= y < m
        n, m, dx, dy = len(moveTime), len(moveTime[0]), 1, 0
        heap = [(0, 0, 0, 1)]
        seen = {(0,0)}

        while heap:
            time, x, y, step = heappop(heap)

            if (x, y) == (n - 1, m - 1): return time

            for _ in range(4):

                X, Y, dx, dy = x + dx, y + dy, -dy, dx

                if onGrid(X, Y) and (X, Y) not in seen:
                    t = max(time, moveTime[X][Y]) + step
                    heappush(heap, [t, X, Y, 3 - step])
                    seen.add((X, Y))
```
```cpp []
class Solution {
public:
    int minTimeToReach(vector<vector<int>>& moveTime) {
        int n = moveTime.size(), m = moveTime[0].size();
        auto onGrid = [&](int x, int y) { return 0 <= x && x < n && 0 <= y && y < m; };
        
        int dx = 1, dy = 0;
        priority_queue<tuple<int, int, int, int>, vector<tuple<int, int, int, int>>, greater<>> heap;
        heap.emplace(0, 0, 0, 1);

        set<pair<int, int>> seen;
        seen.emplace(0, 0);

        while (!heap.empty()) {
            auto [time, x, y, step] = heap.top();
            heap.pop();

            if (x == n - 1 && y == m - 1) return time;

            for (int i = 0; i < 4; ++i) {
                int X = x + dx, Y = y + dy;
                int temp_dx = dx, temp_dy = dy;
                dx = -temp_dy;
                dy = temp_dx;

                if (onGrid(X, Y) && !seen.count({X, Y})) {
                    int t = max(time, moveTime[X][Y]) + step;
                    heap.emplace(t, X, Y, 3 - step);
                    seen.emplace(X, Y);}
            }
        }
        return -1;
    }
};

```
```java []
class Solution {
    public int minTimeToReach(int[][] moveTime) {
        int n = moveTime.length, m = moveTime[0].length;
        int dx = 1, dy = 0;

        PriorityQueue<int[]> heap = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        heap.add(new int[]{0, 0, 0, 1});

        Set<String> seen = new HashSet<>();
        seen.add("0,0");

        while (!heap.isEmpty()) {
            int[] current = heap.poll();
            int time = current[0], x = current[1], y = current[2], step = current[3];

            if (x == n - 1 && y == m - 1) return time;

            for (int i = 0; i < 4; i++) {
                int X = x + dx, Y = y + dy;
                int tempDx = dx, tempDy = dy;
                dx = -tempDy;
                dy = tempDx;

                String pos = X + "," + Y;
                if (onGrid(X, Y, n, m) && !seen.contains(pos)) {
                    int t = Math.max(time, moveTime[X][Y]) + step;
                    heap.add(new int[]{t, X, Y, 3 - step});
                    seen.add(pos);}
            }
        }
        return -1; // Return -1 if unreachable
    }
    private boolean onGrid(int x, int y, int n, int m) {
        return 0 <= x && x < n && 0 <= y && y < m;
    }
}

```
[https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/submissions/1442140920/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/submissions/1442140920/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `m * n` .