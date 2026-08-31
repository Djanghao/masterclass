# short rust and c++

**Author:** celabi
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4702431/](https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4702431/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
```
impl Solution {
    pub fn dfs(g : &Vec<Vec<i32>>, idx : i32, fa : i32, cost : &Vec<i32>, ans : &mut Vec<i64>) -> Vec<i32>{
        let mut a : Vec<i32> = vec![cost[idx as usize]];
        for &child in &g[idx as usize]{
            if(fa == child){continue};
            let subtree = Solution::dfs(&g, child, idx,  &cost, ans);
            a.extend(subtree);
        }
        a.sort();
        let n = a.len();
        if n >= 3{
            let x = a[n - 1] as i64 * a[n - 2] as i64 * a[n - 3]as i64;
            let y = a[n - 1] as i64 * a[0]as i64* a[1] as i64;
            let tmp : i64 = *[x, y, 0].iter().max().unwrap();
            ans[idx as usize] = tmp;
        }
        if n > 5{
            let tmp : Vec<i32> = vec![a[0], a[1], a[n - 1], a[n - 2], a[n - 3]];
            return tmp;
        }
        return a;
        
    }
    pub fn placed_coins(edges: Vec<Vec<i32>>, cost: Vec<i32>) -> Vec<i64> {
        let mut g : Vec<Vec<i32>> = vec![vec![]; 20020];
        for item in &edges{
            if let &[u, v] = item.as_slice(){
                g[u as usize].push(v);
                g[v as usize].push(u);  
            };
        }
        let mut ans : Vec<i64>= vec![1; cost.len()];
        Solution::dfs(&g, 0, -1, &cost, &mut ans);
        return ans
    }
}
```
# Code
```
class Solution {
public:  
    using ll = long long;
    vector<ll> placedCoins(vector<vector<int>>& edges, vector<int>& cost) {
        map<ll, vector<ll>> m;
        //build graph
        for(auto v : edges){
            m[v[0]].push_back(v[1]);
            m[v[1]].push_back(v[0]);
        }
        vector<ll> ret(cost.size(), 1);
        function<vector<ll>(ll, ll)> dfs;
        dfs = [&](ll node, ll fa)->vector<ll>{
            vector<ll> childVal{cost[node]};
            for(auto child: m[node]){
                if(child == fa)continue;
                auto res = dfs(child, node);
                childVal.insert(childVal.end(), res.begin(), res.end());
            }
            sort(childVal.begin(), childVal.end());
            ll tmp = 0;
            const ll _n = childVal.size();
            if(_n >= 3){
                tmp = max(childVal[0] * childVal[1] * childVal.back()*1LL, tmp);
                tmp = max(childVal.back() * childVal[_n - 2] * childVal[_n - 3] * 1LL, tmp);
                ret[node] = tmp;
            }
            if(_n > 5){
                return vector<ll> {childVal[0], childVal[1], childVal[_n - 3], childVal[_n - 2]*1LL ,childVal.back()};
            }
            return childVal;
        };
        dfs(0, -1);
        return ret;
    }
};
```

