# Alternative approach using Dijkstra in O(rc max(log r, log c)) time

**Author:** lixx2100
**Votes:** 63
**Link:** [https://leetcode.com/problems/trapping-rain-water-ii/solutions/89460/](https://leetcode.com/problems/trapping-rain-water-ii/solutions/89460/)

---

This problem can also be solved in a more general approach way using Dijkstra.

Construct a graph `G = (V, E)` as follows:
V = all cells plus a dummy vertex, `v`, corresponding to the outside region.
If `cell(i, j)` is adjacent to `cell(i', j')`, then add an direct edge from `(i, j)` to `(i', j')` with weight `height(i', j')`.
Add an edge with zero weight from any boundary cell to the dummy vertex `v`.

The weight of a path is defined as the weight of the heaviest edge along it. Then, for any cell `(i, j)`, the height of water it can save is equal to the weight, denoted by `dist(i, j)`, of the shortest path from `(i, j)` to `v`. (If the weight is less than or equal to `height(i, j)`, no water can be accumulated at that particular position.)

We want to compute the `dist(i, j)` for all pairs of `(i, j)`. Here, we have multiple sources and one destination, but this problem essentially can be solved using one pass of Dijkstra algorithm if we **reverse** the directions of all edges. The graph is sparse, i.e., there are O(rc) edges, resulting an `O(rc log(rc)) = O(rc max(log r, log c))` runtime and using `O(rc)` space.


Java Code:
```Java
public class Solution {

    int[] dx = {0, 0, 1, -1};
    int[] dy = {1, -1, 0, 0};

    List<int[]>[] g;
    int start;

    private int[] dijkstra() {
        int[] dist = new int[g.length];
        Arrays.fill(dist, Integer.MAX_VALUE / 2);
        dist[start] = 0;
        TreeSet<int[]> tree = new TreeSet<>((u, v) -> u[1] == v[1] ? u[0] - v[0] : u[1] - v[1]);
        tree.add(new int[]{start, 0});
        while (!tree.isEmpty()) {
            int u = tree.first()[0], d = tree.pollFirst()[1];
            for (int[] e : g[u]) {
                int v = e[0], w = e[1];
                if (Math.max(d, w) < dist[v]) {
                    tree.remove(new int[]{v, dist[v]});
                    dist[v] = Math.max(d, w);
                    tree.add(new int[]{v, dist[v]});
                }
            }
        }
        return dist;
    }

    public int trapRainWater(int[][] a) {
        if (a == null || a.length == 0 || a[0].length == 0) return 0;
        int r = a.length, c = a[0].length;

        start = r * c;
        g = new List[r * c + 1];
        for (int i = 0; i < g.length; i++) g[i] = new ArrayList<>();
        for (int i = 0; i < r; i++)
            for (int j = 0; j < c; j++) {
                if (i == 0 || i == r - 1 || j == 0 || j == c - 1) g[start].add(new int[]{i * c + j, 0});
                for (int k = 0; k < 4; k++) {
                    int x = i + dx[k], y = j + dy[k];
                    if (x >= 0 && x < r && y >= 0 && y < c) g[i * c + j].add(new int[]{x * c + y, a[i][j]});
                }
            }

        int ans = 0;
        int[] dist = dijkstra();
        for (int i = 0; i < r; i++)
            for (int j = 0; j < c; j++) {
                int cb = dist[i * c + j];
                if (cb > a[i][j]) ans += cb - a[i][j];
            }

        return ans;
    }
}
```