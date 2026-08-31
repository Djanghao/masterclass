# 590. N-ary Tree Postorder Traversal

**Author:** nat27
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/950471/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/950471/)

---

simple 3 lines code in scala 
```
def postorder(root: NodeEX): List[Int] = {

    if(root == null){
      return List()
    }

    root.children.flatMap(postorder(_)):+root.value

  }
```