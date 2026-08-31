# Trie vs. Hamming Distance

**Author:** votrubac
**Votes:** 35
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2756369/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2756369/)

---

If we try to generate all edits and check against the dictionary, you will get TLE even with these somewhat lower constraints.

We can compute the Hamming distance between a query and each dictionary word for O(n ^ 2) solution.

Also, Trie is a good data structure to do dictionary search with skips. The Trie approach would be faster if we have a lot of words in the dictionary.

#### Hamming Distance
**C++**
```cpp
vector<string> twoEditWords(vector<string>& queries, vector<string>& dict) {
    vector<string> res;
    for (auto &q : queries)
        for (auto &d : dict)
            if (inner_product(begin(q), end(q), begin(d), 0, plus<int>(), not_equal_to<char>()) < 3) {
                res.push_back(q);
                break;
            }
    return res;
} 
```
#### Trie
**C++**
```cpp
struct Trie{
    Trie* ch[26] = {};
    void insert(string &s, int i = 0) {
        if (i < s.size()) {
            if (ch[s[i] - 'a'] == nullptr)
                ch[s[i] - 'a'] = new Trie();
            ch[s[i] - 'a']->insert(s, i + 1);
        }
    }
    bool match(string &s, int cnt, int i = 0) {
        if (cnt < 0 || i == s.size())
            return cnt >= 0;
        bool res = false;
        for (int j = 0; j < 26; ++j)
            if (ch[j] != nullptr)
                res |= ch[j]->match(s, cnt - (j != s[i] - 'a'), i + 1);
        return res;
    }
};
vector<string> twoEditWords(vector<string>& queries, vector<string>& dict) {
    vector<string> res;
    Trie t;
    for (auto &d : dict)
        t.insert(d);
    for (auto &q : queries) {
        if (t.match(q, 2))
            res.push_back(q);
    }
    return res;
}
```