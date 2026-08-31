# Java backtracking

**Author:** mpettina
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/3019595/](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/3019595/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Finding the longest path in a tree is a common problem, however this problem requires you to compute it for all subtrees. From the definition a subtree is essentially a subset of paths in the tree, with the restriction that all paths needs to be connected. For this reason the number of subtrees is likely exponential. 

You can easily prove that solving for the rooted tree is the same as solving the original problem (all paths {A, ..., ROOT, ..., B} can be written as {ROOT, ..., A} + {ROOT, ..., B} as the order doesn't matter).

To generate all subtrees we can just write a backtracking algorithm where in the decision tree we try to append an edge or not to the current path. Then, the key idea is to recurse on the edges rather than the nodes as you normally would, because the edges is where the decision tree forks.
# Approach
<!-- Describe your approach to solving the problem. -->
We need to make a recursive call to all edges. For this reason we cannot implement a DFS like algorithm because if we skip the current edge we still need to recurse on the remaining connected edges. The solution is then to design a BFS algorithm where the fronteer expands or reduces according to backtracking.

To explore only connected edges we can just create adjacency lists.

Once all edges have been processed the easiest way to find the longest path is to explicitely build the subtree during recursion and once it is done find the longest path on that new tree

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The size of the decision tree. Due to edge connectivity the decision tree is not complete, but we can use the complete decision tree as upper bound.

All operations in the recursive call take constant time. There is an outer recursion that guesses the root of the subTree, thus recursing n times at most. For each subtree root all possible subtrees are built. Finding the subtree longest path is linear in n.
$$O(n * 2^(n - 1) * n)$$ = $$O(n^2 * 2^(n - 1))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The height of the decision tree. There is one level per edge. Due to edge connectivity the decision tree is not complete, but we can use the complete decision tree as upper bound. Finding the subtree longest path is linear in n.
$$O(n - 1 + n)$$ = $$O(n)$$

# Code
```
class Solution {

    List<Integer>[] tree, subTree;
    int subTreeRoot, maxPath;
    boolean[] inStack; // do not allow to travel upwards in the rooted tree
    int[] ans;

    public int[] countSubgraphsForEachDiameter(int n, int[][] edges) {
        buildTree(n, edges);
        ans = new int[n - 1];
        solve(0);
        return ans;
    }

    private void buildTree(int n, int[][] edges) {
        tree = new List[n];
        subTree = new List[n];
        inStack = new boolean[n];
        for (int i = 0; i < n; ++i) {
            tree[i] = new ArrayList<>();
            subTree[i] = new ArrayList<>();
        }
        for (int[] e : edges) {
            tree[e[0] - 1].add(e[1] - 1);
            tree[e[1] - 1].add(e[0] - 1);
        }
    }

    private void solve(int i) {
        subTreeRoot = i;
        inStack[i] = true;
        buildSubTree(0, 0, Collections.singletonList(i), new ArrayList<>());
        for (int e : tree[i]) {
            if (inStack[e]) {
                continue;
            } 
            solve(e);
        }
    }

    private void buildSubTree(int i, int j, List<Integer> fronteer, List<Integer> next) {
        if (i >= fronteer.size()) {
            buildNextLevel(next);
            return;
        }
        int curr = fronteer.get(i);
        if (j >= tree[curr].size()) {
            buildSubTree(i + 1, 0, fronteer, next);
        } else {
            int succ = tree[curr].get(j);
            if (inStack[succ]) {
                buildSubTree(i, j + 1, fronteer, next);
                return;
            }
            inStack[succ] = true;
            next.add(succ);
            subTree[curr].add(succ);
            buildSubTree(i, j + 1, fronteer, next);
            next.remove(next.size() - 1);
            subTree[curr].remove(subTree[curr].size() - 1);
            buildSubTree(i, j + 1, fronteer, next);
            inStack[succ] = false;
        }
    }

    private void buildNextLevel(List<Integer> next) {
        if (next.isEmpty()) { // subTree is done, add it to the answer
            maxPath = 0;
            computeMaxPath(subTreeRoot);
            if (maxPath > 1) {
                ++ans[maxPath - 2];
            }
        } else {
            buildSubTree(0, 0, next, new ArrayList<>());
        }
    }

    private int computeMaxPath(int i) {
        int max = 0, prevMax = 0;
        for (int child : subTree[i]) {
            int h = computeMaxPath(child);
            if (h >= max) {
                prevMax = max;
                max = h;
            } else {
                prevMax = Integer.max(prevMax, h);
            }
        }
        maxPath = Integer.max(maxPath, prevMax + max + 1);
        return max + 1;
    }
}
```