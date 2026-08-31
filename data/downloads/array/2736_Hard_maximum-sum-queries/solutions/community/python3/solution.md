# Segment tree C++ and python

**Author:** cpcs
**Votes:** 23
**Link:** [https://leetcode.com/problems/maximum-sum-queries/solutions/3623791/](https://leetcode.com/problems/maximum-sum-queries/solutions/3623791/)

---

# Intuition
Use segment tree. Sort all the points by x value, also for each query sort them by x value. For each query, update the new values for all the feasible key ys with new values (x + y) in a segment tree.

# Approach
Just segment tree.
Note when using values as the keys we need to change them into a smaller range (say [0, n -1] or [1, n] etc.) and still keep the order/

# Complexity
- Time complexity:
O(qlogq + (n + q) * logn)

- Space complexity:
O(n)

# Code
C++
```
class Solution {
     int query(const vector<int> &tree, int ind, int left, int right, int x, int y) {
        if (left >= x && right <= y) {
            return tree[ind];
        }
        const int mid = (left + right) >> 1;
        int r = -1;
        if (x <= mid) {
            r = query(tree, ind << 1, left, mid, x, y);
        }
        if (y > mid) {
            r = max(r, query(tree, (ind << 1) | 1, mid + 1, right, x, y));
        } 
        return r;
    }

    void update(vector<int> &tree, int ind, int left, int right, int x, int y) {
        tree[ind] = max(tree[ind], y);
        if (left >= x && right <= x) {
            return;
        }
        const int mid = (left + right) >> 1;
        if (x <= mid) {
            update(tree, ind << 1, left, mid, x, y);
        } else {
            update(tree, (ind << 1) | 1, mid + 1, right, x, y);
        } 
    }
public:
    vector<int> maximumSumQueries(vector<int>& nums1, vector<int>& nums2, vector<vector<int>>& queries) {
        const int n = nums1.size();
        map<int, int> all;
        vector<pair<int, int>> v(n);
        for (int i = 0; i < n; ++i) {
            ++all[nums2[i]];
            v[i] = {nums1[i], nums2[i]};
        }
        sort(v.begin(), v.end());
        const int m = queries.size();
        vector<int> ind(m);
        for (int i = 0; i < m; ++i) {
            ind[i] = i;
            ++all[queries[i][1]];
        }
        sort(ind.begin(), ind.end(), [&](const int x, const int y) {
            return queries[x][0] > queries[y][0];
        });
        int mv = 0;
        for (auto& p : all) {
            p.second = ++mv;
        }
        vector<int> tree(mv << 2, -1);
        vector<int> r(m);
        for (int i = 0, j = n - 1; i < m; ++i) {
            for (; j >= 0 && v[j].first >= queries[ind[i]][0]; update(tree, 1, 1, mv, all[v[j].second], v[j].first + v[j].second), --j)
            ;
            r[ind[i]] = query(tree, 1, 1, mv, all[queries[ind[i]][1]], mv);
        }
        return r;
    }
};

```

Python3
```
class Solution:
    def query(self, tree: List[int], ind: int, left: int, right: int, x: int, y: int) -> int:
        if left >= x and right <= y:
            return tree[ind]
        mid = (left + right) >> 1
        r = -1
        if x <= mid:
            r = self.query(tree, ind << 1, left, mid, x, y)
        if y > mid:
            r = max(r, self.query(tree, (ind << 1) | 1, mid + 1, right, x, y))
        return r

    def update(self, tree: List[int], ind: int, left: int, right: int, x: int, y: int) -> None:
        tree[ind] = max(tree[ind], y)
        if left >= x and right <= x:
            return
        mid = (left + right) >> 1
        if x <= mid:
            self.update(tree, ind << 1, left, mid, x, y)
        else:
            self.update(tree, (ind << 1) | 1, mid + 1, right, x, y)

    def maximumSumQueries(self, nums1: List[int], nums2: List[int], queries: List[List[int]]) -> List[int]:
        n = len(nums1)
        all_nums = defaultdict(int)
        v = [(nums1[i], nums2[i]) for i in range(n)]
        for num in nums2:
            all_nums[num] += 1
        v.sort()
        m = len(queries)
        ind = [i for i in range(m)]
        for query in queries:
            all_nums[query[1]] += 1
        ind.sort(key=lambda x: queries[x][0], reverse=True)
        mv = 0
        for key in sorted(all_nums.keys()):
            mv += 1
            all_nums[key] = mv
        tree = [-1] * (mv << 2)
        r = [0] * m
        j = n - 1
        for i in ind:
            while j >= 0 and v[j][0] >= queries[i][0]:
                self.update(tree, 1, 1, mv, all_nums[v[j][1]], v[j][0] + v[j][1])
                j -= 1
            r[i] = self.query(tree, 1, 1, mv, all_nums[queries[i][1]], mv)
        return r


```