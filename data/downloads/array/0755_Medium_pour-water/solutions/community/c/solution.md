# [C++] O(v*logn) Time, O(n) space

**Author:** afrozalm
**Votes:** 2
**Link:** [https://leetcode.com/problems/pour-water/solutions/1022844/](https://leetcode.com/problems/pour-water/solutions/1022844/)

---

The idea is to find the ideal block in the following order:
* to your left
* to your right
* same index

Before the start of accumulating each drop, you update the list of valid indexes by adding indexes that are non-increasing to the neighbours.


```
typedef pair<int,int> pi;

class Solution {
public:
    vector<int> pourWater(vector<int>& heights, int V, int K) {
        int n = heights.size(), idx, h, l = K-1, r = K+1;
        priority_queue<pi, vector<pi>, greater<pi>> left, right; // min-heaps
                
        while (V) {
            V--;
            
            while (l >= 0 && heights[l] <= heights[l+1]) {
                left.push({heights[l], -l});
                l--;
            }
            while (r < n && heights[r] <= heights[r-1]) {
                right.push({heights[r], r});
                r++;
            }
            
            if (!left.empty() && left.top().first < heights[K]) {
                pi p = left.top(); left.pop();
                h = p.first + 1; idx = -p.second;
                
                heights[idx] = h;
                left.push({h, -idx});
            }
            else if (!right.empty() && right.top().first < heights[K]) {
                pi p = right.top(); right.pop();
                h = p.first + 1; idx = p.second;
                
                heights[idx] = h;
                right.push({h, idx});
            }
            else {
                heights[K]++;
            }
        }
        
        return heights;
    }
};
```