# Maze compression results in O(n^2) where n is the number of blocked squares

**Author:** sladkey
**Votes:** 20
**Link:** [https://leetcode.com/problems/escape-a-large-maze/solutions/282978/](https://leetcode.com/problems/escape-a-large-maze/solutions/282978/)

---

The large size of the search spaces precludes either an in-memory representation of the maze or a brute-force search through a virtual maze. But we can dramatically reduce the search space by compressing multiple adjacent blank rows into a single blank row and likewise for columns. This produces a maze that is topologically the same as the original maze but with size O(n) x O(n) instead of 1000000 x 1000000, where n is the number of blocked squares.

To compress the rows, we take all the rows referenced in any of the blocked squares and add the first row, the last row, and the source and target rows. Then we make a sorted distinct list and make sure that no two consecutive values differ by more than two. This produces a map that translates from uncompressed row index to compressed row index and determines the number of comrpessed rows. Then we follow the same procedure for the columns.

Now that we have compressed the maze down to a workable size, we can represent it with an in-memory grid and attack the problem using a variety of approaches such as Union-Find or depth first search.

The end result is an algorithm that uses space and time of O(p q), where p is the number of distinct rows, and q is the number of distinct columns, or O(n^2) in the worst case where n is the number of blocked squares

```csharp
public class Solution {

	private int rows, cols;
	private Dictionary<int, int> rowMap, colMap;

	public bool IsEscapePossible(int[][] blocked, int[] source, int[] target) {

		// Compress consecutive blank rows and columns.
		(rows, rowMap) = GetMap(blocked, source, target, 0);
		(cols, colMap) = GetMap(blocked, source, target, 1);

		// Create a grid from the compressed data.
		var grid = new bool[rows, cols];
		foreach (var pair in blocked) grid[rowMap[pair[0]], colMap[pair[1]]] = true;

		// Connect unblocked squares to each other.
		var uf = new UnionFind(rows * cols);
		var deltas = new[] { (0, 1), (1, 0), (0, -1), (-1, 0) };
		for (var row = 0; row < rows; row++) for (var col = 0; col < cols; col++) {
			var id = GetId(row, col);
			if (!grid[row, col]) foreach (var (dr, dc) in deltas)
			{
				var (r, c) = (row + dr, col + dc);
				if (r >= 0 && r < rows && c >= 0 && c < cols && !grid[r, c])
					uf.Union(id, GetId(r, c));
			}
		}

		// Check whether the source is connected to the target.
		return uf.Find(GetMappedId(source), GetMappedId(target));
	}

	private (int, Dictionary<int, int>) GetMap(int[][] blocked, int[] source, int[] target, int index) {
		var size = 0;
		var map = new Dictionary<int, int>();
		var ids = blocked.Select(pair => pair[index])
			.Concat(new [] { 0, source[index], target[index], 999999 })
			.OrderBy(id => id).Distinct().ToArray();
		var next = 0;
		for (var i = 0; i < ids.Length; i++) {
			if (i != 0) next += Math.Min(2, ids[i] - ids[i - 1]);
			map.Add(ids[i], next);
			size = Math.Max(size, next + 1);
		}
		return (size, map);
	}
	private int GetId(int row, int col) {
		return row * cols + col;
	}
	private int GetMappedId(int[] pair) {
		return GetId(rowMap[pair[0]], colMap[pair[1]]);
	}

	// Union-Find algorithm
	public class UnionFind {
		private int[] id;
		private int[] sz;
		public UnionFind(int n) {
			id = new int[n];
			sz = new int[n];
			for (var i = 0; i < n; i++) id[i] = i;
		}
		private int Root(int i) {
			while (i != id[i]) {
				id[i] = id[id[i]];
				i = id[i];
			}
			return i;
		}
		public bool Find(int p, int q) {
			return Root(p) == Root(q);
		}
		public void Union(int p, int q) {
			int i = Root(p);
			int j = Root(q);
			if (i == j) return;
			if (sz[i] < sz[j]) { id[i] = j; sz[j] += sz[i]; }
			else { id[j] = i; sz[i] += sz[j]; }
		}
	}
}
```
