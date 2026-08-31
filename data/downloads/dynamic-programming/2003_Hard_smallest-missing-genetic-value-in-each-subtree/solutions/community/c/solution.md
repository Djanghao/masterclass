# Path-Limited Traversal

**Author:** votrubac
**Votes:** 58
**Link:** [https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1458911/](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1458911/)

---

If you traverse all nodes, you have to track their ranges independently, which is too slow.

> I actually managed to get a full tree traversal AC (but barely - 2,000 ms), by tracking and merging numeric ranges. I posted that solution as a comment below.

However, if you only traverse nodes starting from a node with `1` value (and then upstream to the root), you can just use a single `visited` array. 

Note that the result is always `1` for any node outside the path leading to `1` .

**C++**
```cpp
bool visited[100002] = {};
void dfs(vector<vector<int>> &nodes, vector<int>& nums, int i) {
    if (!visited[nums[i]]) {
        visited[nums[i]] = true;
        for (int j : nodes[i])
            dfs(nodes, nums, j);
    }
}
vector<int> smallestMissingValueSubtree(vector<int>& parents, vector<int>& nums) {
    vector<vector<int>> nodes(nums.size());
    vector<int> res(nums.size(), 1);
    for (int i = 1; i < nums.size(); ++i)
        nodes[parents[i]].push_back(i);
    int pos = find(begin(nums), end(nums), 1) - begin(nums), min = 1;
    for (; pos < nums.size() && pos != -1; pos = parents[pos]) {
        dfs(nodes, nums, pos);
        while (visited[min])
            ++min;
        res[pos] = min;            
    }
    return res;
}
```