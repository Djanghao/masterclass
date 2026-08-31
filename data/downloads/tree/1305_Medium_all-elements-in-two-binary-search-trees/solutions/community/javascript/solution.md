# [JavaScript] Easy to understand - inorder traversal + merge

**Author:** poppinlp
**Votes:** 21
**Link:** [https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/466812/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/466812/)

---

- To convert a binary search tree to an ordered array, we use inorder traversal.
- To merge 2 sorted queue, we pick the top of both, do the comparison, and refresh the top of the bigger one.

```js
const getAllElements = (root1, root2) => {
  const arr1 = [];
  const arr2 = [];
  traversal(root1, arr1);
  traversal(root2, arr2);
  const ret = [];
  let idx1 = idx2 = 0;
  while (idx1 < arr1.length && idx2 < arr2.length) {
    arr1[idx1] < arr2[idx2] ? ret.push(arr1[idx1++]) : ret.push(arr2[idx2++]);
  }
  while (idx1 < arr1.length) ret.push(arr1[idx1++]);
  while (idx2 < arr2.length) ret.push(arr2[idx2++]);
  return ret;

  function traversal(node, arr) {
    if (!node) return;
    traversal(node.left, arr);
    arr.push(node.val);
    traversal(node.right, arr);
  }
};
```

The code above beats 100% right now.

And here's a more general version which is easier to read I think:

```js
const traversal = (node, arr = []) => {
  if (node) {
    traversal(node.left, arr);
    arr.push(node.val);
    traversal(node.right, arr);
  }
  return arr;
};
const merge = (arr1, arr2) => {
  const ret = [];
  let idx1 = idx2 = 0;
  while (idx1 < arr1.length && idx2 < arr2.length) {
    arr1[idx1] < arr2[idx2] ? ret.push(arr1[idx1++]) : ret.push(arr2[idx2++]);
  }
  while (idx1 < arr1.length) ret.push(arr1[idx1++]);
  while (idx2 < arr2.length) ret.push(arr2[idx2++]);
  return ret;
};
const getAllElements = (root1, root2) => merge(traversal(root1), traversal(root2));
```