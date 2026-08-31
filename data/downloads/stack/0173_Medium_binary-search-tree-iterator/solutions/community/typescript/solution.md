# Typescript Average O(1) Time O(h) Space

**Author:** Sameer177
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator/solutions/1867196/](https://leetcode.com/problems/binary-search-tree-iterator/solutions/1867196/)

---

```
class BSTIterator {
    stack: TreeNode[]
    constructor(root: TreeNode | null) {
        this.stack = [];
        let cur = root;
        while(cur) {
            this.stack.push(cur);
            cur = cur.left
        }
    }

    next(): number {
        let res = this.stack.pop();
        if(res.right) {
            let cur = res.right;
            while(cur) {
                this.stack.push(cur);
                cur = cur.left
            }
        }        
        return res.val;
    }

    hasNext(): boolean {
        return this.stack.length !== 0;
    }
}
