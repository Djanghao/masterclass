# Simple O(n) without map

**Author:** StefanPochmann
**Votes:** 536
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/34543/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/34543/)

---

**Javascript solution:**

    var buildTree = function(preorder, inorder) {
        p = i = 0
        build = function(stop) {
            if (inorder[i] != stop) {
                var root = new TreeNode(preorder[p++])
                root.left = build(root.val)
                i++
                root.right = build(stop)
                return root
            }
            return null
        }
        return build()
    };

**Python solution:**

    def buildTree(self, preorder, inorder):
        def build(stop):
            if inorder and inorder[-1] != stop:
                root = TreeNode(preorder.pop())
                root.left = build(root.val)
                inorder.pop()
                root.right = build(stop)
                return root
        preorder.reverse()
        inorder.reverse()
        return build(None)

Note: See [MissMary's answer](https://leetcode.com/discuss/40381/simple-o-n-without-map?show=44432#a44432) for a possible improvement and my thoughts about it.

---

**Explanation/Discussion:**

Consider this input:

    preorder: [1, 2, 4, 5, 3, 6]
    inorder: [4, 2, 5, 1, 6, 3]

The obvious way to build the tree is:

 1. Use the first element of `preorder`, the `1`, as root.
 2. Search it in `inorder`.
 3. Split `inorder` by it, here into `[4, 2, 5]` and `[6, 3]`.
 4. Split the rest of  `preorder` into two parts as large as the `inorder` parts, here into `[2, 4, 5]` and `[3, 6]`.
 5. Use `preorder = [2, 4, 5]` and `inorder = [4, 2, 5]` to add the left subtree.
 6. Use `preorder = `[3, 6]` and `inorder = `[6, 3]` to add the right subtree.

But consider the worst case for this: A tree that's not balanced but is just a straight line to the left. Then inorder is the reverse of preorder, and already the cost of step 2, searching in `inorder`, is O(n^2) overall. Also, depending on how you "split" the arrays, you're looking at O(n^2) runtime and possibly O(n^2) space for that as well.

You can bring the runtime for searching down to O(n) by building a map from value to index before you start the main work, and I've seen several solutions do that. But that is O(n) additional space, and also the splitting problems remain. To fix those, you can use pointers into `preorder` and `inorder` instead of splitting them. And when you're doing that, you don't need the value-to-index map, either.

Consider the example again. Instead of finding the `1` in `inorder`, splitting the arrays into parts and recursing on them, just recurse on the full remaining arrays and **stop** when you come across the `1` in `inorder`. That's what my above solution does. Each recursive call gets told where to stop, and it tells its subcalls where to stop. It gives its own root value as stopper to its left subcall and its parent`s stopper as stopper to its right subcall.

**Language details:**

Small trick in my Javascript solution: The top-most call doesn't explicitly get a stopper value, so its `stop` is `undefined`. Which is good, because that's also what `inorder[i]` is when we have consumed all values, i.e., when `i` is `inorder.length`.

About the Python solution: I'm not sure there's a good way to have those `p` and `i` pointers that I use in my Javascript solution, so instead I opted for popping elements from `preorder` and `inorder`. Since popping from the front with `pop(0)` is expensive O(n), I reverse them before I start so I can use the cheap O(1) popping from the back.