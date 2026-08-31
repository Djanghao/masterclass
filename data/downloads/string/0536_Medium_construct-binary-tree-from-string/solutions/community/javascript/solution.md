# Short O(N) solution

**Author:** dettier
**Votes:** 9
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/100409/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/100409/)

---

This is a pretty common approach with static index variable.
```
let i = 0;

var construct = function (s) {
    let numStr = [];

    while (s[i] === '-' || s[i] >= '0' && s[i] <= '9')
        numStr.push(s[i++]);

    if (numStr.length === 0)
        return null;

    let node = new TreeNode(Number(numStr.join('')));
    if (s[i] === '(')
        i++, node.left = construct(s), i++;
    if (s[i] === '(')
        i++, node.right = construct(s), i++;
    return node;
}

var str2tree = function(s) {
    i = 0;
    return construct(s);
};
```