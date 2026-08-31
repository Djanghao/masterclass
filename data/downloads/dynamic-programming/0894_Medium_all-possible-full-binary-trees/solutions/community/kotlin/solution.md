# 🔥Kotlin beats 100% runtime and memory | Explanation

**Author:** Dark_Type
**Votes:** 2
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3833908/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3833908/)

---


# Approach
1. If the value of n is even, then an empty ArrayList of type TreeNode is returned, indicating that it is not possible to create any FBT with an even number of nodes.
2. Otherwise, if the value of n is odd, the function calls another helper function named solve(n) to generate all possible FBTs with n nodes.
The helper function solve(n) returns a list containing TreeNode objects representing different FBTs.
3. Inside the helper function, if 'n' equals 1, it creates a new TreeNode object with value 0 and adds it to a mutable list called t. Then, it returns this mutable list as there can only be one FBT with just one node.
4. If n is greater than 1, we need to recursively solve for smaller subproblems.
    - We initialize an empty mutable list called 'ans', which will store all possible combinations of left and right subtrees.
    - We start iterating from i = 1 up to n/2 because each subtree must have at least one node.
For each iteration:
        - We recursively call the solve() method for values i and (n-i-1). This gives us lists containing all possible left subtrees (left) and right subtrees (right) respectively.
We iterate through both lists using nested loops:
            - For each combination of left and right subtree, we create a new TreeNode object called 'root' with value 0.
            - We assign the left subtree (l) to the left child of the root node and the right subtree (r) to the right child of the root node.
            - If i is not equal to n-i-1 (i.e., when both subtrees are not identical), we create another TreeNode object called 'rsub'. This time, we assign r as its left child and l as its right child. This handles cases where the FBTs are mirrored horizontally.
            - We add both 'root' and 'rsub' (if applicable) to the 'ans' list.
    - Finally, we increment i by 2 since each iteration accounts for two nodes in total.
5. After completing all iterations, we return the final list 'ans', which contains all possible FBTs with n nodes.

# Complexity
- Time complexity:
 $$O(2^n)$$ 

- Space complexity:
$$O(2^n)$$ 

# Code
```
class Solution {
fun allPossibleFBT(n: Int): List<*>?  =  if (n % 2 == 0) ArrayList<TreeNode>() else solve(n)

fun solve(n: Int): List<TreeNode?>? {
    if (n == 1) {
        val t: MutableList<TreeNode> = ArrayList()
        t.add(TreeNode(0))
        return t
    }
    val ans: MutableList<TreeNode> = ArrayList()
    var i = 1
    while (i <= n / 2) {
        val left: List<TreeNode?>? = solve(i)
        val right: List<TreeNode?>? = solve(n - i - 1)
        for (l in left!!) {
            for (r in right!!) {
                val root: TreeNode = TreeNode(0)
                root.left = l
                root.right = r
                if (i != n - i - 1) {
                    val rsub: TreeNode = TreeNode(0)
                    rsub.left = r
                    rsub.right = l
                    ans.add(rsub)
                }
                ans.add(root)
            }
        }
        i += 2
    }
    return ans
}
}
```