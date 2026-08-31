# Short and fast C++ prefix xor solution, beats 100%

**Author:** mzchen
**Votes:** 108
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/372044/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/372044/)

---

We care only about the parity of the character sum in the substring, so there is no need to do the full counting.

```cpp []
vector<bool> canMakePaliQueries(string s, vector<vector<int>>& queries) {
    uint mask = 0;
    vector<uint> ps(1);
    for (char c : s)
        ps.push_back(mask ^= 1 << (c - 'a'));

    vector<bool> r;
    for (auto &q : queries) {
        uint odds = popcount(ps[q[1] + 1] ^ ps[q[0]]);
        r.push_back(q[2] >= odds / 2);
    }
    return r;
}
```