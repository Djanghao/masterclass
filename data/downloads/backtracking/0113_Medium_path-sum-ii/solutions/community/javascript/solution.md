# javascript

**Author:** liushuaimaya
**Votes:** 15
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/456959/](https://leetcode.com/problems/path-sum-ii/solutions/456959/)

---

```js
var pathSum = function(root, sum, res = [], path = []){
    if(root){
        path.push(root.val);
        if(!root.left && !root.right && sum - root.val === 0) res.push([...path]);
        pathSum(root.left, sum - root.val, res, path);
        pathSum(root.right, sum - root.val, res, path);
        path.pop();
    }
    return res;
};