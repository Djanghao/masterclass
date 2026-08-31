# Video Explanation (Journey from linear search to binary search + A interesting follow up)

**Author:** codingmohan
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4305120/](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4305120/)

---

# Explanation

[Click here for the video](https://youtu.be/zl4Y9GYjBc0)

# Code
```
struct SegmentTree {
    vector<int> v;
    int n;
    
    SegmentTree(int _n, const vector<int>& arr) : n(_n) {
        v.resize(4*n, 0);
        Initialize(arr);
    } 
    
    void Initialize (const vector<int>& arr, int l = 0, int r = -1, int i = 0) {
        if (r == -1) r += n;
        
        if (l == r) {
            v[i] = arr[l];
            return;
        }
        int m = (l+r) >> 1;
        Initialize(arr, l, m, i*2+1);
        Initialize(arr, m+1, r, i*2+2);
        
        v[i] = max (v[i*2+1], v[i*2+2]);
    }
    
    int Query (int x, int y, int l = 0, int r = -1, int i = 0) {
        if (r == -1) r += n;
        if (r < x || l > y) return 0;
        if (l >= x && r <= y) return v[i];
        
        int m = (l+r) >> 1;
        return max (
            Query (x, y, l, m, i*2+1),
            Query (x, y, m+1, r, i*2+2)
        );
    }
};

class Solution {
public:
    vector<int> leftmostBuildingQueries(vector<int>& heights, vector<vector<int>>& queries) {
        int n = heights.size();
        SegmentTree tree (n, heights);
        
        vector<int> result;
        for (auto q: queries) {
            int a = q[0], b = q[1];
            if (a > b) swap(a, b);
            
            if (a == b || heights[a] < heights[b]) {
                result.push_back(b);
                continue;
            }
                
            int min_target = max (heights[a], heights[b]) + 1;
            
            int l = b, r = n-1;
            while (l < r) {
                int m = (l+r) >> 1;
                if (tree.Query(b, m) >= min_target) r = m;
                else l = m+1;
            }
            
            result.push_back((heights[l] < min_target)? -1 : l);
        }
        return result;
    }
};
```