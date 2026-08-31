# Detailed explanation - DFS

**Author:** itsluminous
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/5142715/](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/5142715/)

---

# Intuition
- Any node which is below the node `1` or in any adjacent path of node `1` will have missing as `1`. So we don't have to process such nodes
- For other nodes, start by calculating missing for node `1`, then go upwards till root node

# Approach
- Refer comments inline

# Complexity
- Time complexity: O(n) - because every node will be processed only once
- Space complexity: O(n)

# Code
```python []
class Solution:
    def smallestMissingValueSubtree(self, parents: List[int], nums: List[int]) -> List[int]:
        n = len(parents)
        self.tree = [[] for _ in range(n)]
        self.visited = set()

        # build the tree (adj list)
        for i in range(1, n):
            p = parents[i]
            self.tree[p].append(i)

        # by default, assume "1" to be missing number for all
        ans = [1] * n

        # find out the node with value 1.
        # We have to evaluate missing for any node upwards from this node
        # for other nodes, missing value has to be 1
        one_idx = -1
        for i in range(n):
            if nums[i] == 1:
                one_idx = i
                break

        # if there is no node with value 1, then all will have 1 as missing value
        if one_idx == -1: return ans

        missing = 1
        curr, prev = one_idx, -1;   # track prev so that we don't process a subtree if already processed
        while curr != -1:
            # visit this subtree
            for child in self.tree[curr]:
                if child == prev: continue
                self.dfs(child, nums)

            self.visited.add(nums[curr])
            
            # find missing value
            while missing in self.visited: missing += 1
            ans[curr] = missing

            # travel upwards in tree
            prev, curr = curr, parents[curr]

        return ans

    # visit entire subtree starting from 'node' and mark corresponding genetic value as visited
    def dfs(self, node, nums):
        self.visited.add(nums[node])
        for child in self.tree[node]:
            self.dfs(child, nums)
```
```java []
class Solution {
    List<Integer>[] tree;
    HashSet<Integer> visited;

    public int[] smallestMissingValueSubtree(int[] parents, int[] nums) {
        var n = parents.length;
        tree = new ArrayList[n];
        visited = new HashSet<>();

        // build the tree (adjacency list)
        for (var i = 1; i < n; i++) {
            var p = parents[i];
            if (tree[p] == null) tree[p] = new ArrayList<>();
            tree[p].add(i);
        }

        // by default, assume "1" to be missing number for all
        var ans = new int[n];
        Arrays.fill(ans, 1);

        // find out the node with value 1.
        // We have to evaluate missing for any node upwards from this node
        // for other nodes, missing value has to be 1
        var oneIdx = -1;
        for (var i = 0; i < n; i++) {
            if (nums[i] == 1) {
                oneIdx = i;
                break;
            }
        }

        // if there is no node with value 1, then all will have 1 as missing value
        if (oneIdx == -1) return ans;

        var missing = 1;
        int curr = oneIdx, prev = -1;   // track prev so that we don't process a subtree if already processed
        while (curr != -1) {
            // visit this subtree
            var children = tree[curr];
            if (children != null) {
                for (var child : children) {
                    if (child == prev) continue;
                    dfs(child, nums);
                }
            }

            visited.add(nums[curr]);

            // find missing value
            while (visited.contains(missing)) missing++;
            ans[curr] = missing;

            // travel upwards in tree
            prev = curr;
            curr = parents[curr];
        }

        return ans;
    }

    // visit entire subtree starting from 'node' and mark corresponding genetic value as visited
    private void dfs(int node, int[] nums) {
        visited.add(nums[node]);
        if (tree[node] == null) return; // no children
        for (var child : tree[node])
            dfs(child, nums);
    }
}
```
```csharp []
public class Solution {
    List<int>[] tree;
    HashSet<int> visited;

    public int[] SmallestMissingValueSubtree(int[] parents, int[] nums) {
        var n = parents.Length;
        tree = new List<int>[n];
        visited = new HashSet<int>();

        // build the tree (adj list)
        for(var i=1; i<n; i++){
            var p = parents[i];
            if(tree[p] == null) tree[p] = new List<int>();
            tree[p].Add(i);
        }

        // by default, assume "1" to be missing number for all
        var ans = Enumerable.Repeat(1, n).ToArray();

        // find out the node with value 1.
        // We have to evaluate missing for any node upwards from this node
        // for other nodes, missing value has to be 1
        var oneIdx = -1;
        for(var i=0; i<n; i++){
            if(nums[i] == 1){
                oneIdx = i;
                break;
            }
        }

        // if there is no node with value 1, then all will have 1 as missing value
        if(oneIdx == -1) return ans;

        var missing = 1;
        int curr = oneIdx, prev = -1;   // track prev so that we don't process a subtree if already processed
        while(curr != -1){
            // visit this subtree
            var children = tree[curr];
            if(children != null){
                foreach(var child in children){
                    if(child == prev) continue;
                    DFS(child, nums);
                }
            }

            visited.Add(nums[curr]);
            
            // find missing value
            while(visited.Contains(missing)) missing++;
            ans[curr] = missing;

            // travel upwards in tree
            (prev, curr) = (curr, parents[curr]);
        }

        return ans;
    }

    // visit entire subtree starting from 'node' and mark corresponding genetic value as visited
    private void DFS(int node, int[] nums){
        visited.Add(nums[node]);
        if(tree[node] == null) return; // no children
        foreach(var child in tree[node])
            DFS(child, nums);
    }
}
```
