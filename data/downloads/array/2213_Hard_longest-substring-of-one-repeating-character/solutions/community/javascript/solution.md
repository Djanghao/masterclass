# Javascript segment tree solution beats 100%

**Author:** zmj97
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/1887921/](https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/1887921/)

---

Not that clean and have some duplicate code in two functions, just show js idea here :)

```js
var Node = function (leftChar, leftLen, rightChar, rightLen, maxLen, left, right, len, l, r) {
    this.leftChar = leftChar;
    this.leftLen = leftLen;
    this.rightChar = rightChar;
    this.rightLen = rightLen;
    this.maxLen = maxLen;
    this.left = left;
    this.right = right;
    this.len = len;
    this.l = l;
    this.r = r;
}

var build = function (s, l, r) {
    if (l > r) return null;
    if (l === r) return new Node(s[l], 1, s[r], 1, 1, null, null, 1, l, r);
    var mid = Math.floor((r + l) / 2);
    var root = new Node();
    var left = build(s, l, mid, root);
    var right = build(s, mid + 1, r, root);

    if (left) {
        root.leftChar = left.leftChar;
        if (left.leftLen === left.len && left.leftChar === right.leftChar) {
            root.leftLen = left.len + right.leftLen;
        } else {
            root.leftLen = left.leftLen;
        }
    }
    if (right) {
        root.rightChar = right.rightChar;
        if (right.rightLen === right.len && right.rightChar === left.rightChar) {
            root.rightLen = right.len + left.rightLen;
        } else {
            root.rightLen = right.rightLen;
        }
    }
    var midLen = 0;
    if (left && right && left.rightChar === right.leftChar) midLen = left.rightLen + right.leftLen;
    root.maxLen = Math.max(left ? left.maxLen : 0, right ? right.maxLen : 0, midLen);

    root.left = left;
    root.right = right;
    root.len = r - l + 1;
    root.l = l;
    root.r = r;

    return root;
}

var update = function (root, idx, char) {
    if (!root) return 0;
    if (root.len === 1) {
        root.leftChar = root.rightChar = char;
        return 1;
    }
    var mid = Math.floor((root.r + root.l) / 2);
    if (idx <= mid) update(root.left, idx, char);
    else update(root.right, idx, char);

    var left = root.left;
    var right = root.right;

	// copied from the build function, actually do the same thing as build
    if (left) {
        root.leftChar = left.leftChar;
        if (left.leftLen === left.len && left.leftChar === right.leftChar) {
            root.leftLen = left.len + right.leftLen;
        } else {
            root.leftLen = left.leftLen;
        }
    }
    if (right) {
        root.rightChar = right.rightChar;
        if (right.rightLen === right.len && right.rightChar === left.rightChar) {
            root.rightLen = right.len + left.rightLen;
        } else {
            root.rightLen = right.rightLen;
        }
    }
    var midLen = 0;
    if (left && right && left.rightChar === right.leftChar) midLen = left.rightLen + right.leftLen;
    root.maxLen = Math.max(left ? left.maxLen : 0, right ? right.maxLen : 0, midLen);

    return root.maxLen;
}

/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function (s, queryCharacters, queryIndices) {
    var root = build(s, 0, s.length - 1);
    var ans = [];
    for (var i = 0; i < queryCharacters.length; i++) {
        ans.push(update(root, queryIndices[i], queryCharacters[i]));
    }
    return ans;
};
```