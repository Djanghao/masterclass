# Simple post order solution for easy understanding

**Author:** sinhaarchit17
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/5088873/](https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/5088873/)

---

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

For node to be the answer of the question, ```we need to have the information of all the child and its subtree before processing```. This intuition helped in developing the idea of using dfs in a post order manner i.e. finding required information of all the children and then prosseing the root node



## Approach
1. As a root of a tree, i need 2 information from all child subtree
   - If they have all the nodes of same color
   - If yes, then what is count of nodes in that subtree
2. If all the subtree have same color and is eqaul to the root node color, we will sum up all node from the subtrees, add 1 for the root node and return to the parent node a pair containing {root_node_color, count_of_node_in_current_tree}.
3. If the root node will different color then the subtree nodes, then we return {-1, 0}, -1 stands that we have different colors in subtree and count is zero, so that we dont increment the answer

## Complexity
- Time complexity: O(V + E) => O(N + (N - 1)) => O(N)

- Space complexity: O(Height_of_tree) => O(N), if we have a linear tree
# Code
```
class Solution {
public:

    int ans = 1;
	map<int, vector<int>> tree;

	pair<int, int> getSubtreeInfo(int node, int parent, vector<int>& colors) {
		int cnt = 1;
        bool childWithDifferentColour = false;
		for(auto child: tree[node]) {
			if(child != parent) {
				auto subtreeInfo = getSubtreeInfo(child, node, colors);
                if(colors[child] != colors[node] || subtreeInfo.first == -1) 
                    childWithDifferentColour = true;
                if(subtreeInfo.first != -1) {
                    cnt +=  subtreeInfo.second;
                }
            }
		}
        if(childWithDifferentColour)
            return {-1, 0};
        ans = max(ans, cnt);
		return {colors[node], cnt};
	}

	void addEdge(int u, int v) {
		tree[u].push_back(v);
		tree[v].push_back(u);
	}

    int maximumSubtreeSize(vector<vector<int>>& edges, vector<int>& colors) {
        for(auto edge: edges) {
			addEdge(edge[0], edge[1]);
		}
		getSubtreeInfo(0, -1, colors);
		return ans;
    }
};
```