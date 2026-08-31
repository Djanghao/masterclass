# [C++] DFS-based Simple Solution Explained - 100% Time, ~80% Space

**Author:** Ajna
**Votes:** 178
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/752625/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/752625/)

---

Alright, pretty good application of a DFS algo here (although a BFS might have worked as well, but since I just finished recently 2 other BFS problems, I got a bit bored with it).

First of all we know it is a directed *acyclic* graph, which means we do NOT need to keep track of previously seen nodes to avoid cycles - a nice relief, not that having to implement that logic would have killed performances (at least in the `2` - `15` size range that it was declared in the description) or required too much code.

First of all we declare a few class variables, also to avoid having to drag them around with each recursive call to `dfs`: `res` is our final result container; `tmp` stores the sub-vector we are building with the current run of `dfs`; `target`, finally, is where we decide to stop.

With that done, we go to our main function and set the value of `target` to `graph.size() - 1` - not great maths or logic needed here, just reading from the description.

Then we call our function, passing down only the `graph` itself: we know the starting point is always going to be `0`, so we can default `currNode` to that in our `dfs` function.

Inside `dfs`, first thing we add the value of `currNode` to `tmp`; then we recursively call `dfs` on each value that is associated with the node we are parsing and finally we do some house cleaning removing the last element of `tmp` (your recursive calls would otherwise keep accumulating information about previous calls, without this simple backtracking move).

When all the calls are done and we exit `dfs` for good, we can just return `res`.

The code:

```cpp
class Solution {
public:
    // setting a few class variables, so that we do not have to pass them down all the time in the recursive dfs calls
    int target;
    vector<vector<int>> res;
    vector<int> tmp;
    void dfs(vector<vector<int>>& graph, int currNode = 0) {
	    // updating tmp
        tmp.push_back(currNode);
		// and either updating res with it if target is met
        if (currNode == target) res.push_back(tmp);
		// or callling dfs again recursively
        else for (int node: graph[currNode]) {
            dfs(graph, node);
        }
        // backtracking with tmp
		tmp.pop_back();
    }
    vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {
        target = graph.size() - 1;
        dfs(graph);
        return res;
    }
};
```