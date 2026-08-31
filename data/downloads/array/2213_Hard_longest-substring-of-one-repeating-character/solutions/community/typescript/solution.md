# 💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/6029864/](https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/6029864/)

---

# Intuition
Repeatedly update a string by replacing characters and, after each update, find the longest substring that consists of only one repeating character. To efficiently solve this, we can use a segment tree to track and update the longest substrings within each segment of the string.

# Approach
Construct a segment tree where each node stores information about the longest repeating character substring in a segment of the string, and after each update, we modify the corresponding node and propagate the change through the tree to get the new maximum length of repeating substrings.

# Complexity
- Time complexity:
Build: O(n)
Update: O(log n)
Overall: O(k log n), where k is the number of updates.

- Space complexity:
Segment Tree: O(n)

# Code
```typescript []
class Node {
    leftChar: string;
    leftLen: number;
    rightChar: string;
    rightLen: number;
    maxLen: number;
    left: Node | null;
    right: Node | null;
    len: number;
    l: number;
    r: number;

    constructor(
        leftChar: string = '',
        leftLen: number = 0,
        rightChar: string = '',
        rightLen: number = 0,
        maxLen: number = 0,
        left: Node | null = null,
        right: Node | null = null,
        len: number = 0,
        l: number = 0,
        r: number = 0
    ) {
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
}

function build(s: string, l: number, r: number): Node | null {
    if (l > r) return null;
    if (l === r) return new Node(s[l], 1, s[r], 1, 1, null, null, 1, l, r);

    const mid = Math.floor((r + l) / 2);
    const root = new Node();
    const left = build(s, l, mid);
    const right = build(s, mid + 1, r);

    if (left) {
        root.leftChar = left.leftChar;
        if (left.leftLen === left.len && left.leftChar === right?.leftChar) {
            root.leftLen = left.len + (right?.leftLen || 0);
        } else {
            root.leftLen = left.leftLen;
        }
    }
    if (right) {
        root.rightChar = right.rightChar;
        if (right.rightLen === right.len && right.rightChar === left?.rightChar) {
            root.rightLen = right.len + (left?.rightLen || 0);
        } else {
            root.rightLen = right.rightLen;
        }
    }

    let midLen = 0;
    if (left && right && left.rightChar === right.leftChar) midLen = left.rightLen + right.leftLen;
    root.maxLen = Math.max(left ? left.maxLen : 0, right ? right.maxLen : 0, midLen);

    root.left = left;
    root.right = right;
    root.len = r - l + 1;
    root.l = l;
    root.r = r;

    return root;
}

function update(root: Node | null, idx: number, char: string): number {
    if (!root) return 0;
    if (root.len === 1) {
        root.leftChar = root.rightChar = char;
        return 1;
    }
    
    const mid = Math.floor((root.r + root.l) / 2);
    if (idx <= mid) update(root.left, idx, char);
    else update(root.right, idx, char);

    const left = root.left;
    const right = root.right;

    if (left) {
        root.leftChar = left.leftChar;
        if (left.leftLen === left.len && left.leftChar === right?.leftChar) {
            root.leftLen = left.len + (right?.leftLen || 0);
        } else {
            root.leftLen = left.leftLen;
        }
    }
    if (right) {
        root.rightChar = right.rightChar;
        if (right.rightLen === right.len && right.rightChar === left?.rightChar) {
            root.rightLen = right.len + (left?.rightLen || 0);
        } else {
            root.rightLen = right.rightLen;
        }
    }

    let midLen = 0;
    if (left && right && left.rightChar === right.leftChar) midLen = left.rightLen + right.leftLen;
    root.maxLen = Math.max(left ? left.maxLen : 0, right ? right.maxLen : 0, midLen);

    return root.maxLen;
}

function longestRepeating(s: string, queryCharacters: string, queryIndices: number[]): number[] {
    const root = build(s, 0, s.length - 1);
    const ans: number[] = [];
    
    for (let i = 0; i < queryCharacters.length; i++) {
        ans.push(update(root, queryIndices[i], queryCharacters[i]));
    }
    
    return ans;
}

```