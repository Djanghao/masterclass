# Counting Sort

**Author:** votrubac
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-string-anti-palindrome/solutions/4920440/](https://leetcode.com/problems/make-string-anti-palindrome/solutions/4920440/)

---

We sort the string (here we use counting sort).

The first half of the string is already perfect and provides us a lexicographically smallest result.

The second part may need to be re-arranged:
- We try to use the smallest available character first
- If that character matches its palindromic counterpart, we use the next smallest character. 

**C++**
We use a list to make it easier to find next smallest character.
```cpp
string makeAntiPalindrome(string s) {
    int cnt[26] = {}, n = s.size();
    for (char ch : s)
        ++cnt[ch - 'a'];
    list<pair<char, int>> l;
    for (int i = 0; i < 26; ++i)
        if (cnt[i])
            l.push_back({'a' + i, cnt[i]});
    for (int i = 0; i < s.size(); ++i) {
        auto it = begin(l);
        if (i >= n / 2 && s[n - i - 1] == it->first)
            ++it; // next smallest character.
        if (it == end(l))
            return "-1";
        s[i] = it->first;
        if (--it->second == 0)
            l.erase(it);
    }
    return s;
}
```