# 💯🔥6 lines of code || Beats 96.00% 💯🔥

**Author:** AnvarbekZiyodov
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5935309/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5935309/)

---



# Code
```javascript []

var findKthBit = function(n, k) {
    if (n === 1) return '0';
        let length = (1 << n) - 1;
        let mid = Math.floor(length / 2) + 1;
    if (k === mid) return '1';
    if (k < mid) return findKthBit(n - 1, k);
    return findKthBit(n - 1, length - k + 1) === '0' ? '1' : '0';
};
```