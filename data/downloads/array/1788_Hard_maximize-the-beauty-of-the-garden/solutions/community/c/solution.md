# C++ Solution using prefix sum

**Author:** gauravk_25
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/1623751/](https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/1623751/)

---

The main modification of the problem was in how we create the prefix sum array. As we need to maximize the sum of elements, we only consider positive values in between the leftmost and rightmost indices of any value.

```
class Solution {
public:
    int maximumBeauty(vector<int>& flowers) {
        // hash table for leftmost index, rightmost index, and count of each value
        unordered_map<int, int> count, left, right;
        
        int n = flowers.size(), res = INT_MIN;
        
        // prefix sum
        vector<int> pre(n+1, 0);
        
        for(int i=0;i<flowers.size();i++) {
            count[flowers[i]]++;
            right[flowers[i]] = i, left[flowers[n-i-1]] = n-i-1;
            pre[i+1] = pre[i] + max(flowers[i], 0); // only create prefix sum for positive values
        }
    
        for(auto [val, left_i] : left) {
            int right_i = right[val];
            if(count[val] < 2) continue; 
            res = max(res, pre[right_i] - pre[left_i+1] + 2 * val); // the "catch" of the problem
        }
        
        return res;
    }
};
```

Time Complexity : O(N)
Space Complexity : O(N)