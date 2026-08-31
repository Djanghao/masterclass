# Explained fast and easy C++ solution

**Author:** zeyadhabib
**Votes:** 5
**Link:** [https://leetcode.com/problems/tree-of-coprimes/solutions/3754398/](https://leetcode.com/problems/tree-of-coprimes/solutions/3754398/)

---

# Intuition
When you look at this problem, initially a straight forward solution comes to mind, in which you iterate on all the nodes and for each node climb up the tree untill you hit a co-prime, seems like straight forward O(n * h), but then It wouldn't be a hard question would it. When you take a closer look there is no guarantee that the tree is balanced in any way so this solution is now O(n ^ 2) which will cause a TLE.

# Approach
My solution is based on the facts:
1. All the values lie in the range 1 => 50.
2. depth(node) < depth(ancestor) measured from root.
3. The higher thr depth(ancestor) the "closer" the ancestor is to the node.

Given These facts the problem becomes simpler, If we do a single DFS, while keeping track of the ancestors in a hash map, we can ,very efficiently, lookup all possible coprime values in the 1 to 50 range, for all the coprime values the one with the largest depth from the root is the ancestor we are looking for.

Notes: 
1. Since we are using a hashmap you'll probably get clashing values, you'll need to temporarily store the clashed value and re insert it in the hashmap later after this subtree was processed.
2. As a subtle optimization, I memoize the gcd calls for future use, seems like a good idea given the small value range. 

# Complexity
- Time complexity:
O(50*n)

- Space complexity:
O(n)

# Code
```
class Solution {
public:
    int n;
    vector<int> ans, nums, ans_depth;
    vector<bool> v;
    unordered_map<int, pair<int, int>> ancestors;
    vector<vector<int>> mem, g;

    int gcd (int v1, int v2) {
        if (mem[v1][v2] != -1) return mem[v1][v2];
        return mem[v1][v2] = __gcd(v1, v2);
    }

    void slv (int i=0, int depth=0) {
        if (v[i]) return;
        v[i] = true;
        for (int j = 1; j <= 50; ++j) {
            if (gcd(j, nums[i]) == 1 and
                ancestors.find(j) != ancestors.end() and
                ancestors[j].first > ans_depth[i]) {

                ans[i] = ancestors[j].second;
                ans_depth[i] = ancestors[j].first;
            }
        }
        pair<int, int> tmp = (ancestors.find(nums[i]) != ancestors.end()) ? ancestors[nums[i]] : pair<int, int>({-1, -1});
        ancestors[nums[i]] = {depth, i};
        for (auto neigh : g[i]) {
            slv(neigh, depth + 1);
        }
        ancestors.erase(nums[i]);
        if (tmp != pair<int, int>({-1, -1})) ancestors[nums[i]] = tmp;
        
    }

    vector<int> getCoprimes(vector<int>& nums, vector<vector<int>>& edges) {
        this->nums = nums, n = nums.size(), ans = vector<int>(n, -1);
        v = vector<bool>(n, false), ans_depth = vector<int>(n, -1);
        g = vector<vector<int>>(nums.size()), mem = vector<vector<int>>(51, vector<int>(51, -1));
        for (auto& e : edges) g[e[0]].push_back(e[1]), g[e[1]].push_back(e[0]);
        slv();
        return ans;
    }
};
```