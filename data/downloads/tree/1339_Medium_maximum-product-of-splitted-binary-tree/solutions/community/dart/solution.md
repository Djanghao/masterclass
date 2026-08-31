# 🔥 3 Approaches 🔥 || Simple Fast and Easy || with Explanation

**Author:** ayoubzulfiqar
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2896249/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2896249/)

---


# Code


```dart
class TreeNode {
  int val;
  TreeNode? left;
  TreeNode? right;
  TreeNode([this.val = 0, this.left, this.right]);
}
```

## Solution - 1

```dart
class Solution {
  int sum = 0;
  int maxProd = 0;
  int maxProduct(TreeNode? root) {
    dfs(root);
    int rootProd = checkMax(root);
    return (maxProd % (pow(10, 9) + 7)).toInt();
  }

  void dfs(TreeNode? root) {
    if (root == null) return null;
    sum += root.val;
    dfs(root.left);
    dfs(root.right);
  }

  int checkMax(TreeNode? root) {
    if (root == null) return 0;
    int l = checkMax(root.left);
    int r = checkMax(root.right);
    maxProd = max(maxProd, (l + r + root.val) * (sum - l - r - root.val));
    return l + r + root.val;
  }
}
```

## Solution - 2

```dart
class Solution {
  HashMap<TreeNode?, List<int>> map = HashMap();
  int mod = 1000000007;
  int res = 0;

  int maxProduct(TreeNode? root) {
    getSum(root);
    helper(root, 0);
    return (res % mod);
  }

  void helper(TreeNode? node, int pre) {
    if (node == null) return;
    int left = map[node]![0];
    int right = map[node]![1];
    res = max(res, left * (pre + node.val + right));
    res = max(res, right * (pre + node.val + left));
    helper(node.left, pre + node.val + right);
    helper(node.right, pre + node.val + left);
  }

  int getSum(TreeNode? node) {
    if (node == null) return 0;
    int left = getSum(node.left);
    int right = getSum(node.right);
    map[node] = [left, right];
    return left + right + node.val;
  }
}
```

## Solution - 3


```dart
class Solution {
  int res = 0;
  int maxProduct(TreeNode? root) {
    int mod = (1e9 + 7).toInt();
    int sum = allSum(root);
    inOrder(root, sum);

    int num1 = res;
    int num2 = sum - res;
    int ans = 0;
    // Calculate the product
    for (int i = 0; i < num1; i++) {
      ans += num2;
      if (ans > mod) {
        ans -= mod;
      }
    }

    return ans;
  }

  int inOrder(TreeNode? root, int sum) {
    int cur = 0;
    if (root == null) {
      return 0;
    }
    cur += inOrder(root.left, sum);
    cur += root.val;
    cur += inOrder(root.right, sum);
    int minClose = (res - sum ~/ 2).abs();
    int curClose = (cur - sum ~/ 2).abs();
    res = curClose < minClose ? cur : res;

    return cur;
  }

  int allSum(TreeNode? root) {
    if (root == null) {
      return 0;
    }
    return root.val + allSum(root.left) + allSum(root.right);
  }
}
```

## Disclaimer:- STACK OVER FLOW only if it run in browser because DART int type is not ```int64``` according to JAVASCRIPT - Ridiculous
