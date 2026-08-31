# 🥳 Runtime 1ms | Beats 98.7% | Recursion | Memoization

**Author:** akshycodes
**Votes:** 70
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3804265/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3804265/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The recursion works by first generating all possible full binary trees with i nodes, and then all possible full binary trees with n - i - 1 nodes. For each pair of trees, a new tree is created with the first tree as the left subtree and the second tree as the right subtree. This process is repeated until all possible trees with n nodes have been generated.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a hash table to store the generated trees.
2. If n is even, return an empty list.
3. If n is 1, add a new tree to the hash table.
4. For i from 1 to n - 1, do:
- Generate all possible full binary trees with i nodes.
- Generate all possible full binary trees with n - i - 1 nodes.
- For each pair of trees, create a new tree with the first tree as the left subtree and the second tree as the right subtree.
- Add the new tree to the hash table.
5. Return the list of trees in the hash table.

# Complexity
- Time complexity: O(2^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    static Map<Integer, List<TreeNode>> saved = new HashMap<>();
    
    public List<TreeNode> allPossibleFBT(int n) {
        if (n%2==0)
            return new ArrayList<>();

        if (!saved.containsKey(n)) {
            List<TreeNode> list = new ArrayList<>();
            
            if (n==1)
                list.add(new TreeNode(0));
            else {
                for (int i=1; i<=n-1; i+=2) {
                    List<TreeNode> lTrees = allPossibleFBT(i);
                    List<TreeNode> rTrees = allPossibleFBT(n-i-1);

                    for (TreeNode lt: lTrees) {
                        for (TreeNode rt: rTrees) {
                            list.add(new TreeNode(0, lt, rt));
                        }
                    }
                }
            }

            saved.put(n, list);
        }
        return saved.get(n);
    }
}
```
```C++ []
class Solution {
public:
    vector<TreeNode*> allPossibleFBT(int n) {
        if (n % 2 == 0) {
            return {};
        }

        vector<TreeNode*> list;
        if (n == 1) {
            list.push_back(new TreeNode(0));
        } else {
            for (int i = 1; i <= n - 1; i += 2) {
                vector<TreeNode*> lTrees = allPossibleFBT(i);
                vector<TreeNode*> rTrees = allPossibleFBT(n - i - 1);

                for (TreeNode* lt : lTrees) {
                    for (TreeNode* rt : rTrees) {
                        list.push_back(new TreeNode(0, lt, rt));
                    }
                }
            }
        }

        return list;
    }
};
```
```Python3 []
class Solution:
    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        if n % 2 == 0:
            return []

        memo = {}

        def _allPossibleFBT(n):
            if n in memo:
                return memo[n]

            list = []
            if n == 1:
                list.append(TreeNode(0))
            else:
                for i in range(1, n - 1, 2):
                    lTrees = _allPossibleFBT(i)
                    rTrees = _allPossibleFBT(n - i - 1)

                    for lt in lTrees:
                        for rt in rTrees:
                            list.append(TreeNode(0, lt, rt))

            memo[n] = list
            return list

        return _allPossibleFBT(n)
```

> If you find my solution helpful, I would greatly appreciate your one upvote.

