# Solution for noobs like me

**Author:** bhushanlaware
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/4638038/](https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/4638038/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
var minimumFlips = function (root, result, dp = new Map()) {
  if (!root) {
    return 0;
  }

  if (root.val === 1) {
    if (!result) {
      return 1;
    }
    return 0;
  }

  if (root.val === 0) {
    if (result) {
      return 1;
    }
    return 0;
  }

  if (dp.has(root) && dp.get(root).has(result)) {
    return dp.get(root).get(result);
  }

  let res;
  switch (root.val) {
    case 2: // OR
      if (result) {
        // res can be false if any one of them is false or both of them are false
        res = Math.min(
          minimumFlips(root.left, true, dp) +
          minimumFlips(root.right, false, dp),
          minimumFlips(root.left, false, dp) +
          minimumFlips(root.right, true, dp),
          minimumFlips(root.left, true, dp) +
          minimumFlips(root.right, true, dp)
        )
        break;
      }
      res = minimumFlips(root.left, false, dp) +
        minimumFlips(root.right, false, dp);
      break;
    case 3: // AND
      if (!result) {
        res = Math.min(
          minimumFlips(root.left, true, dp) +
          minimumFlips(root.right, false, dp),
          minimumFlips(root.left, false, dp) +
          minimumFlips(root.right, true, dp),
          minimumFlips(root.right, false, dp) +
          minimumFlips(root.right, false, dp)
        )
        break;
      }
      res = minimumFlips(root.left, true, dp) +
        minimumFlips(root.right, true, dp);
      break;
    case 4: // XOR
      if (result) {
        res = Math.min(
          minimumFlips(root.left, true, dp) +
          minimumFlips(root.right, false, dp),
          minimumFlips(root.left, false, dp) +
          minimumFlips(root.right, true, dp),
        )
        break;
      }
      res = Math.min(
        minimumFlips(root.left, false, dp) +
        minimumFlips(root.right, false, dp),
        minimumFlips(root.left, true, dp) +
        minimumFlips(root.right, true, dp),
      )
      break;
    case 5: // NOT
      res = root.left ?
        minimumFlips(root.left, !result, dp) :
        minimumFlips(root.right, !result, dp)
  };

  if (!dp.has(root)) {
    dp.set(root, new Map())
  }
  dp.get(root).set(result, res);
  return res;
}
```