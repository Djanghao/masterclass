# BackTrack || 99% Faster Solution || Detail / Well Explanation

**Author:** pmistry_
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/2616059/](https://leetcode.com/problems/path-sum-ii/solutions/2616059/)

---

I just found this Blog and Github repository with solutions to Leetcode problems.
https://leet-codes.blogspot.com
It is very useful, and I just wanted to share it with you.
Note: You can bookmark it as a resource, and for another approaches
<br>

```
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (root === null) return [];
  const res = [];
  backtrack(root, sum, res, []);
  return res;
};

function backtrack(root, sum, res, tempList) {
  if (root === null) return;
  if (root.left === null && root.right === null && sum === root.val)
    return res.push([...tempList, root.val]);

  tempList.push(root.val);
  backtrack(root.left, sum - root.val, res, tempList);

  backtrack(root.right, sum - root.val, res, tempList);
  tempList.pop();
}
```

For explanation and recursion approach please refer below link
https://leet-codes.blogspot.com/2022/09/113-path-sum-ii.html