# 0ms O(N) solution, using Prefix XOR Array

**Author:** snwsnwsnw
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/5975240/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/5975240/)

---

# Approach
By using the techniques of bit operations and prefix sum, an efficient query on the possibility of palindrome rearrangement of multiple substrings is realized.
By converting the parity of the number of occurrences of each character into bit settings, and using XOR operations to quickly obtain the status of the substring, query efficiency is greatly improved.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```golang []
func canMakePaliQueries(s string, queries [][]int) []bool {
    // \u524D\u7DB4\u548C\u9663\u5217\uFF0C\u6BCF\u500B\u5143\u7D20\u662F\u4E00\u500B\u6574\u6578\uFF0C\u4EE3\u8868\u524D\u7DB4\u5B50\u4E32\u4E2D\u5B57\u7B26\u7684\u5947\u5076\u72C0\u614B
    prefix := make([]int, len(s)+1)
    for i := 0; i < len(s); i++ {
        // \u5C07\u7576\u524D\u5B57\u7B26\u7684\u4F4D\u5143\u9032\u884C\u7570\u6216\u904B\u7B97\uFF0C\u5BE6\u73FE\u5947\u5076\u5207\u63DB
        // a = 0b1, b = 0b10, c = 0b100, c = 0b1000, d = 0b10000 ...
        prefix[i+1] = prefix[i] ^ (1 << (s[i] - 'a'))
    }

    res := make([]bool, len(queries))
    for i, q := range queries {
        left, right, changeCount := q[0], q[1], q[2]
        // \u8A08\u7B97\u5B50\u4E32\u7684\u5B57\u7B26\u5947\u5076\u72C0\u614B
        xor := prefix[right+1] ^ prefix[left]
        // \u8A08\u7B97\u6709\u591A\u5C11\u500B\u5B57\u7B26\u51FA\u73FE\u4E86\u5947\u6578\u6B21
        oddCount := bits.OnesCount(uint(xor))
        // \u5224\u65B7\u9700\u8981\u66F4\u6539\u7684\u5B57\u7B26\u5C0D\u6578
        res[i] = (oddCount / 2) <= changeCount
    }
    return res
}
```