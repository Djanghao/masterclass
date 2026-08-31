# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 3
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/1989317/](https://leetcode.com/problems/recover-binary-search-tree/solutions/1989317/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
class Solution {
    TreeNode prev = null, first = null, second = null;

    public void recoverTree(TreeNode root) {
        evalSwappedNodes(root);
        int temp = first.val;
        first.val = second.val;
        second.val = temp;
    }

    private void evalSwappedNodes(TreeNode curr) {
        if (curr == null)
            return;
        evalSwappedNodes(curr.left);
        if (prev != null && prev.val > curr.val) {
            if (first == null)
                first = prev;
            second = curr;
        }
        prev = curr;
        evalSwappedNodes(curr.right);
    }
}
```

***C++***
```
class Solution {
public:
	TreeNode* firstMistake, *secondMistake, *pre;
	void recoverTree(TreeNode* root) {
		pre = new TreeNode(INT_MIN);
		inorder(root);
		swap(firstMistake->val, secondMistake->val);
	}

	void inorder(TreeNode* root) {
		if(root == nullptr) 
			return;

		inorder(root->left);

		if(firstMistake == nullptr && root->val < pre->val)
			firstMistake = pre;
		if(firstMistake != nullptr && root->val < pre->val)
			secondMistake = root;
		pre = root;

		inorder(root->right);
	}
};
```

***Python***
```
def recoverTree(self, root: Optional[TreeNode]) -> None:
        in_order = []
        def inOrder(node):
            if node is None:
                return
            inOrder(node.left)
            in_order.append(node)
            inOrder(node.right)
        
        inOrder(root)

        sorted_order = sorted(in_order, key=lambda x:x.val)
        for i in range(len(in_order)):
            if in_order[i] != sorted_order[i]:
                in_order[i].val, sorted_order[i].val = sorted_order[i].val, in_order[i].val
                return
```

***JavaScript***
```
var recoverTree = function(root) {
    let pre = null, n1 = null, n2 = null
    
    const dfs = (root) => {
        if (!root) return
        dfs(root.left)
        if (pre && pre.val > root.val) {
            n2 = root
            if (!n1) n1 = pre
        }
        pre = root
        dfs(root.right)
    }
    
    dfs(root)
    swap(n1, n2)
};

const swap = (n1, n2) => [n1.val, n2.val] = [n2.val, n1.val]
```

***Kotlin***
```
  class Solution {

  fun recoverTree(root: TreeNode?): Unit {
    var first: TreeNode? = null
    var second: TreeNode? = null
    var pre: TreeNode = TreeNode(Int.MIN_VALUE)

    fun traverse(node: TreeNode?){
        if (node == null) return
        traverse(node.left)

        if (first == null && pre.`val` > node.`val`){
            first = pre
        }
        if (first != null && pre.`val` > node.`val`){
            second = node
        }
        pre = node

        traverse(node.right)
    }
    traverse(root)
    val temp = first!!.`val`
    first!!.`val` = second!!.`val`
    second!!.`val` = temp
	}
	}
```

***Swift***
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of nodes in the binary tree.
    //   - space: O(h), where h is the height of the binary tree.

    private var first: TreeNode?
    private var second: TreeNode?
    private var prev = TreeNode(Int.min)

    
    func recoverTree(_ root: TreeNode?) {
        traverse(root)

        guard let first = first, let second = second else { return }

        let tmp = first.val
        first.val = second.val
        second.val = tmp
    }


    private func traverse(_ root: TreeNode?) {
        guard let root = root else { return }
        traverse(root.left)

        if first == nil, prev.val >= root.val { first = prev }
        if first != nil, prev.val >= root.val { second = root }
        prev = root

        traverse(root.right)
    }

}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***
***"Open your eyes."***