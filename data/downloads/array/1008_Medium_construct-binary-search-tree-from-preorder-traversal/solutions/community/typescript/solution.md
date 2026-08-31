# 10 lines of code Typescript recursion + pointer without helper functions

**Author:** LenyPython
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/1519410/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/1519410/)

---

First find the right node and childern in array and stroe positon in pointer.
Then create node with .left child and .right child the same way as root.
```
function bstFromPreorder(preorder: number[]): TreeNode | null {
    if(preorder.length === 0) return null
    let point = 1
	//find right child with it's children
    while(preorder[0] > preorder[point]) point++
    const head = new TreeNode(preorder[0],
			//create left node with lower values
            bstFromPreorder(preorder.slice(1, point)),
			//create right node with higher values
            bstFromPreorder(preorder.slice(point))
            )
    return head

};
```