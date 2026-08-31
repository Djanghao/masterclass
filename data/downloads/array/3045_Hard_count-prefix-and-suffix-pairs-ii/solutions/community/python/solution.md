# [Java/C++/Python] Trie

**Author:** lee215
**Votes:** 106
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4744547/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4744547/)

---

# **Intuition**
Build a trie, the key is <char in prefix, char in suffix>.
<br>

# **Explanation**
For each word `w` in input `words`,
insert word `w` in the trie node by node,
and check the presence of any previous word.
If we meet any trie node with count positive,
it means there was a word that is the prefix and suffix of `w`,
then we update result `res` with this count.

Finally return result `res`
<br>

# **Complexity**
Time `O(total length)`
Space `O(total length)`
<br>

**Java**
```java
    class TrieNode {
        HashMap<Integer, TrieNode> children = new HashMap<>();
        int count = 0;
    }

    public int countPrefixSuffixPairs(String[] words) {
        TrieNode root = new TrieNode();
        int res = 0;
        for (String word : words) {
            TrieNode x = root;
            for (int i = 0, n = word.length(); i < n; ++i) {
                int key = word.charAt(i) * 128 + word.charAt(word.length() - i - 1);
                x = x.children.computeIfAbsent(key, _ -> new TrieNode());
                res += x.count;
            }
            x.count++;
        }
        return res;
    }
```

**C++**
```cpp
    struct TrieNode {
        unordered_map<int, TrieNode*> next;
        int count = 0;
    };

    long long countPrefixSuffixPairs(vector<string>& words) {
        TrieNode* root = new TrieNode();
        long long res = 0;
        for (const string& w : words) {
            TrieNode* x = root;
            for (int i = 0, n = w.size(); i < n; ++i) {
                x = x->next.insert({w[i] * 128 + w[n - 1 - i], new TrieNode()}).first->second;
                res += x->count;
            }
            x->count++;
        }
        return res;
    }
```

**Python**
```py
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        root = (T := lambda: defaultdict(T))()
        res = 0
        for w in words:
            x = root
            for k in zip(w, reversed(w)):
                res += (x := x[k]).get(0, 0)
            x[0] = x.get(0, 0) + 1
        return res
```
