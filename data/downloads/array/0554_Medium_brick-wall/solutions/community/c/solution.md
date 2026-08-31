# ✅ Short & Simple Solution w/ Explanation & Comments | Beats 100%

**Author:** archit91
**Votes:** 41
**Link:** [https://leetcode.com/problems/brick-wall/solutions/1170869/](https://leetcode.com/problems/brick-wall/solutions/1170869/)

---

We are given a brick wall with different width of bricks inside it. We are required to draw a line from top to bottom which intersects the least number of bricks. Passing the line thorugh the edges of brick don't count as intersections.

---

\u2714\uFE0F ***Solution (Using HashMap)***

In each row of *Brick Wall*, there maybe a brick-edge (where one brick ends and next one starts) at any index from **`[0, W]`** (where `W` is the width of Brick Wall). 

Now, to get the least number of intersections, we must draw a line starting at top from some wall index `idx` such that the **number of brick edges at that index is maximum**. This will ensure that we have least number of brick intersections.

For this, we can use a **hashmap to store each index** and **map it with frequency of brick edges at that index**. This can be done by iterating each row of wall. For each brick-edge on that row, increment frequncy for the corresponding index `idx`. The next index can be successively found by adding the current brick width to `idx`

Lastly, we draw a line starting from the brick index where maximum number of brick edges frequency was found.

```
int leastBricks(vector<vector<int>>& wall) {
	int rows = size(wall), maxBrickEdges = 0, idx;
	unordered_map<int, int> edgesFrequency; // will map index to count of brick edges at that index
	for(auto& row : wall) {
		// idx: denotes index of wall. We add each brick-width of row to find the next index having brick edge
		idx = 0; 
		for(int i = 0; i < size(row) - 1; i++) // ignore last brick, since we don't want to count wall edge index
		    idx += row[i], edgesFrequency[idx]++;
    }
	// Lastly find the maximum number of brickEdges found at any index
	for(auto& pair : edgesFrequency) maxBrickEdges = max(maxBrickEdges, pair.second);
	// Rest of the bricks(excluding maxBrickEdges) would be intersected which is the minimum answer
	return rows - maxBrickEdges;
}
```

***Time Complexity :*** **`O(R*W)`**, where *`R`* is the number of rows in Brick Wall and *`W`* is the width of each row.
***Space Complexity :*** **`O(W)`**, required to maintain hashmap.

---


\u2714\uFE0F ***Solution - II (HashMap in One-Pass)***

This solution is exactly the same as above except that we are doing it in a single pass -

**C++**
```
int leastBricks(vector<vector<int>>& wall) {
	int rows = size(wall), maxEdges = 0;
	unordered_map<int, int> edgeFreq;
	for(auto& row : wall)
		for(int i = 0, idx = 0; i < size(row) - 1; i++)
		    idx += row[i], edgeFreq[idx]++, maxEdges = max(maxEdges, edgeFreq[idx]);
	return rows - maxEdges;
}
```

---

**Python**
```
def leastBricks(self, wall: List[List[int]]) -> int:
	edges, maxEdges = defaultdict(int), 0
	for row in wall:
		for idx in accumulate(row[:-1]):
			edges[idx] += 1
			maxEdges = max(maxEdges, edges[idx])
	return len(wall) - maxEdges
```


***Time Complexity :*** **`O(R*W)`**
***Space Complexity :*** **`O(W)`**

---

*Best Runtime -*

<table><tr><td><img src=https://assets.leetcode.com/users/images/41d56264-83af-4b62-862c-9cf46df0cd42_1619079060.8913374.png /></td></tr></table>


---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---