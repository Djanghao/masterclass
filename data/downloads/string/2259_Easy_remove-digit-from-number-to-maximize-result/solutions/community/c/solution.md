# Check Next Digit

**Author:** votrubac
**Votes:** 169
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/1996265/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/1996265/)

---

We can generate all strings, and compare them to find the largest. That, however, would be quite wasteful. 

Instead, we can just remove the leftmost `digit` if it's followed by a larger number. If we cannot find such case, we remove the last occurence of `digit`.  

**C++**
```cpp
string removeDigit(string n, char digit) {
    for (int i = 0; i < n.size() - 1; ++i)
        if (n[i] == digit && n[i + 1] > digit)
            return n.substr(0, i) + n.substr(i + 1);
    int last_d = n.rfind(digit);
    return n.substr(0, last_d) + n.substr(last_d + 1);
}
```