# Typescript | Javascript | Recursion | DFS

**Author:** OsidAbu-Alrub
**Votes:** 0
**Link:** [https://leetcode.com/problems/clone-n-ary-tree/solutions/2548883/](https://leetcode.com/problems/clone-n-ary-tree/solutions/2548883/)

---

```
function cloneTree(root: Node | null): Node | null {
  return dfs(root);
};

function dfs(root: Node | null){
  if(!root) return null;
  const copy = new Node(root.val);
  for(const child of root.children)
    copy.children.push(dfs(child));
  return copy;
}
```