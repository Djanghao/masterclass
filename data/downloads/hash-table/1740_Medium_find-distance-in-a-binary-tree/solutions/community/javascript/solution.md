# Javascript solution using 1. LCA+DFS 2.BFS+DFS+Map

**Author:** Tejas_Bavaskar
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/1325987/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/1325987/)

---

- By using least common ancestor concept
- O(n) => actually O(2n)
```
var findDistance = function (root, p, q) {
  var lca = function (root) { //n
    if (!root) {
      return;
    }

    if (root.val === p || root.val === q) {
      return root;
    }

    let left = lca(root.left);
    let right = lca(root.right);

    if (left && right) {
      return root;
    }

    return left || right;
  };

  let lcaNode = lca(root);
  let count = 0;
  let isPFound = false;
  let isQFound = false;

  var dfs = function (root, sum) {  //n
    if (!root) {
      return;
    }

    if (root.val === p || root.val === q) {
      count += sum;
      if (root.val === p) {
        isPFound = true;
      } else if (root.val === q) {
        isQFound = true;
      }
    }

    if (isPFound && isQFound) {
      return;
    }

    dfs(root.left, sum + 1);
    dfs(root.right, sum + 1);
  };

  dfs(lcaNode, 0);

  return count;
};
```
- By using map, DFS+BFS approach
- map will store each node's connected node including parent
- so now we will treat tree as graph and then use DFS to find p or q which will be our starting point
- from where we will start BFS till we reach to p or q. So the answer will be level+1.
- O(n) => actually O(3n)
```
var findDistance = function (root, p, q) {
  let dict = {};
  var fillDict = function (root) {  //n
    if (!root) {
      return;
    }
    if (!(root.val in dict)) {
      dict[root.val] = [];
    }

    if (root.left) {
      dict[root.val].push(root.left);
      dict[root.left.val] = [];
      dict[root.left.val].push(root);
    }

    if (root.right) {
      dict[root.val].push(root.right);
      dict[root.right.val] = [];
      dict[root.right.val].push(root);
    }

    fillDict(root.left);
    fillDict(root.right);
  };

  fillDict(root);

  var dfs = function (root) { //n
    if (!root) {
      return;
    }

    if (root.val === p || root.val === q) {
      return root;
    }

    return dfs(root.left) || dfs(root.right);
  };

  let node = dfs(root);

  let queue = [];
  queue.push([node, 0]);

  let visited = [];
  while (queue.length) {  //n
    let [temp, level] = queue.shift();
    visited.push(temp.val);
    let arr = dict[temp.val];
    for (let i = 0; i < arr.length; i++) {
      if (!visited.includes(arr[i].val)) {
        queue.push([arr[i], level + 1]);
      } else {
        continue;
      }

      if (arr[i].val === p || arr[i].val === q) {
        return level + 1;
      }
    }
  }

  return 0;
};

```