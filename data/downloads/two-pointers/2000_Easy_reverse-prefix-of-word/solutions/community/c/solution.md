# Find and reverse

**Author:** votrubac
**Votes:** 36
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/1458398/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/1458398/)

---

**C++**
```cpp
string reversePrefix(string word, char ch) {
    auto p = word.find(ch);
    if (p != string::npos)
        reverse(begin(word), begin(word) + p + 1);
    return word;
}
```

Since `string::npos` is defined as `-1`, the code above can be compressed:
```cpp
string reversePrefix(string word, char ch) {
    reverse(begin(word), begin(word) + word.find(ch) + 1);
    return word;
}
```