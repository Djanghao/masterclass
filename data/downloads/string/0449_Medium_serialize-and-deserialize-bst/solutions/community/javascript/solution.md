# simple javascript solution

**Author:** osdevisnot
**Votes:** 8
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/605664/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/605664/)

---

```
let serialize = (root, result = []) => {
  if (root) {
    result.push(root.val);
    result.push(...serialize(root.left));
    result.push(...serialize(root.right));
  } else {
    result.push(null);
  }
  return result;
};

let deserialize = (data) => {
  let val = data.shift();
  if (val == null) return null;
  let node = new TreeNode(val);
  node.left = deserialize(data);
  node.right = deserialize(data);
  return node;
};
```

See more @ https://github.com/osdevisnot/leetcode