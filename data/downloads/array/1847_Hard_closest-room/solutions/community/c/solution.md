# [c++] Fenwick tree - per query: O(log(roomSize) * log(roomsLength))

**Author:** donaldong
**Votes:** 8
**Link:** [https://leetcode.com/problems/closest-room/solutions/1186644/](https://leetcode.com/problems/closest-room/solutions/1186644/)

---

Build a [fenwick tree](https://cp-algorithms.com/data_structures/fenwick.html),  the index of tree node represents it's min room size, and value is a set of possible room ids.

Since the tree nodes are sparse, we can use a hash map instead of an array for better efficiency.

When answering a query,
- we go through all the parent tree nodes (segments including the rooms with at least minRoomSize)
	- Time: ` O(log(roomSize))`. roomSize <= 1e7
- and find the minimal possible id difference in each set of ids (binary search).
	- Time: `O(log(rooms.length)`). rooms.length <= 1e5

Space: `O(rooms.length*log(rooms.length))`

Note a fenwick tree node aggregates indices from `0 ... i`. So to use a tree node to represent the `minRoomSize `, we can flip the range
from `roomSize  ... MAX_ROOM_SIZE` to `0 ... (MAX_ROOM_SIZE - roomSize  + 1)`

```cpp
class Solution {
    int N;
    unordered_map<int, set<int>> tree;
public:
    void update(int n, int v) {
        n = N - n + 1;
        for (;n <= N; n += n & (-n)) tree[n].insert(v); 
    }
    
    int query(int n, int v) {
        n = N - n + 1;
        int res = -1, min_diff = INT_MAX, diff;
        for (; n > 0; n -= n & (-n)) {
            if (tree[n].size() == 0) continue;
            auto itr = tree[n].lower_bound(v);
            if (itr != tree[n].end()) {
                diff = *itr - v;
                if (diff < min_diff) res = *itr, min_diff = diff;
                else if (diff == min_diff) res = min(res, *itr);
            }
            if (itr != tree[n].begin()) {
                --itr;
                diff = v - *itr;
                if (diff < min_diff) res = *itr, min_diff = diff;
                else if (diff == min_diff) res = min(res, *itr);
            }
        }
        return res;
    }
    
    vector<int> closestRoom(vector<vector<int>>& rooms, vector<vector<int>>& queries) {
        N = 1e7;
        for (auto &&r : rooms) update(r[1], r[0]);
        
        vector<int> res(queries.size());
        for (int i = 0; i < queries.size(); ++i) {
            res[i] = query(queries[i][1], queries[i][0]);
        }
        return res;
    }
};
```