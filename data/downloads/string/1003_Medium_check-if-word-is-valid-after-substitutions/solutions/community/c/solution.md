# Search, Stack and 2 Pointers

**Author:** votrubac
**Votes:** 56
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/247548/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/247548/)

---

**Intuition:** just do the reverse: search for "abc" and remove it. The string is valid if we get an empty string in the end.

#### Simple Search Solution
Search for substring, remove it, and repeat.

**C++**
```cpp
bool isValid(string S) {
  for (auto i = S.find("abc"); i != string::npos; i = S.find("abc"))
    S.erase(i, 3);
  return S.empty();
}
```
**Complexity Analysis**
- Runtime: *O(n * n)*, where n is the number of characters. ```find``` is O(n + 3) and ```erase``` is O(n), and we repeat it n / 3 times.
- Memory: *O(n)*.

#### Stack
We can use a stack to build the string, removing "abc" as we go. This leads to a linear time complexity.

**C++**
```cpp
bool isValid(string s) {
    vector<char> st;
    for (auto ch : s)
        if (ch == 'c' && st.size() > 1 && st.back() == 'b' && st[st.size() - 2] == 'a')
            st.resize(st.size() - 2);
        else
            st.push_back(ch);
    return st.empty();
}
```

#### 2 Pointers
Similar to the stack solution, but we use a string and a pointer to build the resulting string.

**C++**
```cpp
bool isValid(string s) {
    int j = 0;
    for (int i = 0; i < s.size(); ++i) {
        if (s[i] == 'c' && j > 1 && s[j - 1] == 'b' && s[j - 2] == 'a')
            j -= 2;
        else
            s[j++] = s[i];
    }
    return j == 0;
}
```