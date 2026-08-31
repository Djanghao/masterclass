# Video Explanation (Brute force to optimised solution step by step)

**Author:** codingmohan
**Votes:** 20
**Link:** [https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4251124/](https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4251124/)

---

# Explanation

[Click here for the video](https://youtu.be/W04cD_iFvfU)

# Code
```
typedef long long int ll;

#define pii pair<ll, ll>
#define F first
#define S second

struct SegTree {
    vector<ll> tree;
    int n;
    
    SegTree (int _n) : n (_n) {
        tree.resize(4*n);
    }
    
    void update (int ind, ll val, int l = 0, int r = -1, int i = 0) {
        if (r == -1) r += n;
        if (l == r) {
            tree[i] = val;
            return;
        }
        
        int m = (l+r) >> 1;
        if (m >= ind) update (ind, val, l, m, i*2+1);
        else update (ind, val, m+1, r, i*2+2);
        
        tree[i] = max(tree[i*2+1], tree[i*2+2]);
    }
    
    ll query (int x, int y, int l = 0, int r = -1, int i = 0) {
        if (r == -1) r += n;
        
        if (r < x || l > y) return 0;
        if (l >= x && r <= y) return tree[i];
        
        int m = (l+r) >> 1;
        return max (
            query (x, y, l, m, i*2+1),
            query (x, y, m+1, r, i*2+2)
        );
    }
};

class Solution {
public:
    long long maxBalancedSubsequenceSum(vector<int>& nums) {
        int n = nums.size();
        SegTree tree(n);
        
        vector<pii> val_and_ind;
        for (int j = 0; j < n; j ++) 
            val_and_ind.push_back({nums[j] - j, j});
        
        sort (val_and_ind.begin(), val_and_ind.end());
        unordered_map<int, int> sorted_ind;
        for (int j = 0; j < n; j ++) 
            sorted_ind[val_and_ind[j].S] = j;
                
        for (int j = n-1; j >= 0; j --) {
            int ind = sorted_ind[j];
            ll max_sum = tree.query(ind, n-1) + nums[j];
            
            tree.update(ind, max_sum);
        }
        
        return tree.query(0, n-1);
    }
};
```