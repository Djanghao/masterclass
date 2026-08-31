# Video Explanation (Step by step intuition)

**Author:** codingmohan
**Votes:** 46
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/solutions/4219646/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/solutions/4219646/)

---

# Explanation

[Click here for the video](https://youtu.be/GxDHA6RHoNQ)

# Code
```
typedef long long int ll;
const int MOD = 1e9+7;

struct SegmentTree {    
    vector<ll> lzy;
    vector<ll> sum;
    vector<ll> sqr;
    int n;

    SegmentTree (int _n) : n(_n) {
        lzy.resize(4*n, 0);
        sum.resize(4*n, 0);
        sqr.resize(4*n, 0);
    }
    
    void update_lzy(int l, int r, int i) {
        if (l != r) {
            lzy[i*2+1] += lzy[i];
            lzy[i*2+2] += lzy[i];
        }
        ll gap = r-l+1;
        ll new_sum = sum[i] + lzy[i]*gap;
        ll new_sqr = sqr[i] + lzy[i]*sum[i]*2 + lzy[i]*lzy[i]*gap;
        
        sum[i] = new_sum % MOD;
        sqr[i] = new_sqr % MOD;
        lzy[i] = 0;
    }
    
    void AddOne (int x, int y, int l = 0, int r = -1, int i = 0) {
        if (r == -1) r += n;
        update_lzy(l, r, i);
        
        if (r < x || l > y) return;
        if (l >= x && r <= y) {
            lzy[i] = 1;
            return update_lzy(l, r, i);
        }
        
        int m = (l+r) >> 1;
        AddOne (x, y, l, m, i*2+1);
        AddOne (x, y, m+1, r, i*2+2);
        
        sum[i] = (sum[i*2+1] + sum[i*2+2]) % MOD;
        sqr[i] = (sqr[i*2+1] + sqr[i*2+2]) % MOD;
    }    
};

class Solution {
public:
    int sumCounts(vector<int>& nums) {
        int n = nums.size();
        vector<int> last_pos(100001, -1);
        
        SegmentTree tree(n);
        int ans = 0;
        
        for (int j = 0; j < n; j ++) {            
            int st = last_pos[nums[j]] + 1, ed = j;
            tree.AddOne(st, ed);
            
            ans = (ans + tree.sqr[0]) % MOD;
            
            last_pos[nums[j]] = j;
        }
        return ans;
    }
};
```