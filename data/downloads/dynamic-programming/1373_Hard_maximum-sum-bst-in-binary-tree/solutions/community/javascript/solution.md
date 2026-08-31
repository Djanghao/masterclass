# 🥰 Javascript solution

**Author:** dsagidskoi0c
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/1043844/](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/1043844/)

---

https://leetcode.com/problems/validate-binary-search-tree/
https://leetcode.com/problems/binary-tree-maximum-path-sum/

There are two sub problems: how to check if subtree valid BST, and how to get the max sum of a subtree.

The base case is when we get to a leaf node, we return a "blank" object up the recursion stack --- we know the sum at a leaf is 0, it must be a valid BST because there are no nodes below it, and it has no upper and lower limit.

Then, when we are at a node we need to check: are the left and right subtrees below it valid BSTs? and does this node have a value that is greater than the maximum value in the left subtree, and a value less then the minimum value in the right subtree? Remembering the rules of BSTs.

If so, we can calculate a new sum at that node and check if this is the best sum we have seen so far. In this case we return the current sum upwards and set our low and high values

```
class Result {
  constructor(sum, isBST, low, high) {
    this.sum = sum
    this.isBST = isBST
    this.low = low
    this.high = high
  }
}

const maxSumBST = function(root) {
  let maxSum = 0

  const search = root => {
    if (!root) {
      return new Result(
        0,
        true,
        Number.MAX_SAFE_INTEGER,
        Number.MIN_SAFE_INTEGER
      )
    }

    const left = search(root.left)
    const right = search(root.right)

    if (left.isBST && right.isBST && root.val > left.high && root.val < right.low) {
      const sum = root.val + left.sum + right.sum
      maxSum = Math.max(maxSum, sum)

      return new Result(
        sum,
        true,
        Math.min(root.val, left.low),
        Math.max(root.val, right.high)
      )
    }

    return new Result(0, false, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
  }

  search(root)

  return maxSum
}
```