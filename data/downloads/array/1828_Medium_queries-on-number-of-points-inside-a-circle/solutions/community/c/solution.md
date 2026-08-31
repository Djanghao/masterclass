# ✅ Short & Easy Solution w/ Explanation | Distance b/w point & Circle Center

**Author:** archit91
**Votes:** 47
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1163070/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1163070/)

---

\u2714\uFE0F ***Solution***

Basic Mathematics will tell you that the distance between two points `(x1, y1)` and `(x2, y2)` is given by - `sqrt((x1 - x2)^2 + (y1 - y2)^2)`. 

We need the distance between the center of the circle and a point less than or equal to radius of the circle for it to be considered as a point inside the circle.

Thus, we need - `(circle_center_x - x1) ^ 2 - (circle_center_y - y1) ^ 2 <= r * r` for a point to be inside the circle.


```
vector<int> countPoints(vector<vector<int>>& points, vector<vector<int>>& queries) {
	vector<int> ans(size(queries));
	for(int i = 0; i < size(queries); i++){
		int x = queries[i][0], y = queries[i][1], r = queries[i][2];
		for(int j = 0; j < size(points); j++){
			if((x - points[j][0]) * (x - points[j][0]) + (y - points[j][1]) * (y - points[j][1]) <= r * r)    
				ans[i]++;
		}            
	}
	return ans;
}
```

***Time Complexity :*** **`O(N*Q)`**, where `N` is the number of points and `Q` is the number of queries.
***Space Complexity :*** **`O(Q)`**. Required to store the `ans` array. Actually, we could just store it in queries itself and return it to acheive a Space Complexity of **`O(1)`**.


---
---