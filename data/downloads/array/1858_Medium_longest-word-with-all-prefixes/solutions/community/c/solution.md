# Hashset vs. Trie

**Author:** votrubac
**Votes:** 18
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/1206649/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/1206649/)

---

A trie is a natural data structure for this task, but you can also adapt a standard hash set.

#### Hashset
We sort the string by their sizes, and process them smaller to larger. Our hashset initially contains an empty string. When processing a string, we first check if the prefix is already in the hash set (e.g. "appl" for "apple"). If so, we add the current string to the hash set.

**C++ (84 ms)**
```cpp
string longestWord(vector<string>& words) {
    sort(begin(words), end(words), [](auto &a, auto &b){ return a.size() < b.size(); });
    unordered_set<string> s{""};
    string res;
    for (auto &w : words)
        if (s.count(w.substr(0, w.size() - 1))) {
            s.insert(w);
            if (res.size() < w.size() || w < res)
                res = w;
        }
    return res;
}
```

#### Trie
This is similar to the hashset approach above, but the logic to store and check prefixes is now incorporated into the Trie implementation.

**C++ (64 ms)**
```cpp
struct Trie {
    Trie* ch[26] = {};
    bool insert(string &s, int i = 0) {
        if (i + 1 == s.size()) {
            ch[s[i] - 'a'] = new Trie();
            return true;
        }
        return ch[s[i] - 'a'] == nullptr ? false : ch[s[i] - 'a']->insert(s, i + 1);
    }
};
string longestWord(vector<string>& words) {
    Trie trie;
    sort(begin(words), end(words), [](auto &a, auto &b){ return a.size() < b.size(); });
    string res;
    for (auto &w : words)
        if (trie.insert(w))
            if (res.size() < w.size() || w < res)
                res = w;
    return res;    
}
```