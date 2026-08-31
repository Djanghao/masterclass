# Hash Set (or Array)

**Author:** votrubac
**Votes:** 48
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/1344926/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/1344926/)

---

#### Array
Using a boolean array instead of hash set. See the original hash set solution below.

**C++**
```cpp
int canBeTypedWords(string text, string brokenLetters) {
    bool broken[26] = {};
    for (auto ch : brokenLetters)
        broken[ch - 'a'] = true;
    int res = 0, cnt = 0;
    for (auto ch : text)
        if (ch == ' ') {
            res += cnt == 0;
            cnt = 0;
        }
        else
            cnt += broken[ch - 'a'];
    return res + (cnt == 0);
}
```

#### Hash Set
**C++**
```cpp
int canBeTypedWords(string text, string brokenLetters) {
    unordered_set<int> broken(begin(brokenLetters), end(brokenLetters));
    int res = 0;
    for (int i = 0, cnt = 0; i <= text.size(); ++i)
        if (i == text.size() || text[i] == ' ') {
            res += cnt == 0;
            cnt = 0;
        }
        else if(cnt == 0)
            cnt += broken.count(text[i]);
    return res;
}
```