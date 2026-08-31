# Javascript solution O(n) and O(n^2)

**Author:** Tejas_Bavaskar
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-bst-subtree/solutions/1321563/](https://leetcode.com/problems/largest-bst-subtree/solutions/1321563/)

---

O(n^2) =>
```
var largestBSTSubtree = function (root) {
  let maxCount = 0;
  var dfs = function (root) {
    if (!root) {
      return;
    }

    let [isValid, count] = isValidBST(root);
    if (isValid) {
      maxCount = Math.max(maxCount, count);
    }
    dfs(root.left);
    dfs(root.right);
  };

  var isValidBST = function (root, min = -Infinity, max = Infinity) {
    if (!root) {
      return [true, 0];
    }

    if (root.val <= min || root.val >= max) {
      return [false, 0];
    }

    let [left, lCount] = isValidBST(root.left, min, root.val);
    let [right, rCount] = isValidBST(root.right, root.val, max);

    if (left && right) {
      return [true, 1 + lCount + rCount];
    } else {
      return [false, 0];
    }
  };

  dfs(root);
  return maxCount;
};
```

O(n) =>
```
var largestBSTSubtree = function(root) {
  if(!root) {
      return 0;
  }
  
  let maxCount = 0;
  var findNodes = function(root) {
      if(!root) {
          //return(size, min, max)
          return [0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
      }
      
      let [lCount, lmin, lmax] = findNodes(root.left);
      let [rCount, rmin, rmax] = findNodes(root.right);
      
      if(root.val <= lmax || root.val >= rmin || lCount === -1 || rCount === -1) {
          return [-1, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
      }
      
      let currentSize = lCount + rCount + 1;
      maxCount = Math.max(maxCount, currentSize);
      
      return [currentSize, Math.min(root.val, lmin), Math.max(root.val, rmax)];
  }
  
  findNodes(root);
  return maxCount;
};
```