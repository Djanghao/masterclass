# Greedy: Push the Shortest Box All the Way to the Rightmost Position

**Author:** FighterNan
**Votes:** 8
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/814033/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/814033/)

---

From right to left, consider any index `i` in the warehouse, boxes can be pushed from the very left to `i` should satisify `height <= min(warehouse[0:i+1])`, otherwise it will get stuck in the middle. If a box get stuck in the middle position `j`, we lose `warehouse[j+1:i+1]`, which is bad.

In order to maximum the utilization of the warehouse, we **push the shortest box first**, and we push it **all the way to the rightmost position** that this shortest box can reach. The algorithm can be implemented efficiently using two pointers after sorting the boxes, since `min(warehouse[0:i+1])` is non-increasing.

`C++`
```
class Solution {
public:
    int maxBoxesInWarehouse(vector<int>& boxes, vector<int>& warehouse) {
        sort(boxes.begin(), boxes.end());
        int m = boxes.size(), n = warehouse.size();
		// smallest[i]: min(warehouse[0:i+1])
        vector<int> smallest(n);
        int min_height = INT_MAX;
        for (int i = 0; i < n; ++i) {
            min_height = min(min_height, warehouse[i]);
            smallest[i] = min_height;
        }
		
		// j: the current shortest box
		// i: the rightmost position
        int j = 0;
        int res = 0;
        for (int i = n - 1; i >= 0 && j < m; --i) {
			// if the current shortest box can be pushed, do so.
            if (boxes[j] <= smallest[i]) {
                res++;
                j++;
            }
        }
        return res;
    }
};
```
Time: `O(max(mlogm, n))`; Space: `O(n)`