# [C++|Java|Python3|Javascript|Typescript] trie

**Author:** ye15
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-common-suffix-queries/solutions/4916777/](https://leetcode.com/problems/longest-common-suffix-queries/solutions/4916777/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/cdc5e101ce1f1fae525345dec774217fbbdba2c4) for my solutions of [weekly 390](https://leetcode.com/contest/weekly-contest-390/). 

**C++**
```
class TrieNode {
public: 
    TrieNode* next[26] = {nullptr}; 
    int idx = -1; 
    int val = -1; 
};


class Solution {
public:
    vector<int> stringIndices(vector<string>& wordsContainer, vector<string>& wordsQuery) {
        TrieNode* trie = new TrieNode(); 
        for (int i = 0; i < wordsContainer.size(); ++i) {
            string word = wordsContainer[i]; 
            reverse(word.begin(), word.end()); 
            TrieNode* node = trie; 
            if (node->val == -1 || word.size() < node->val) {
                node->idx = i; 
                node->val = word.size(); 
            }
            for (auto& ch : word) {
                if (!node->next[ch-'a']) 
                    node->next[ch-'a'] = new TrieNode(); 
                node = node->next[ch-'a']; 
                if (node->val == -1 || word.size() < node->val) {
                    node->idx = i; 
                    node->val = word.size(); 
                }
            }
        }
        vector<int> ans; 
        for (int i = 0; i < wordsQuery.size(); ++i) {
            string word = wordsQuery[i]; 
            reverse(word.begin(), word.end()); 
            TrieNode* node = trie; 
            for (auto& ch : word) {
                if (!node->next[ch-'a']) break; 
                node = node->next[ch-'a']; 
            }
            ans.push_back(node->idx); 
        }
        return ans; 
    }
}; 
```
**Java**
```
class TrieNode {
    public TrieNode[] next = new TrieNode[26]; 
    public int idx = -1; 
    public int val = -1; 
}

class Solution {
    public int[] stringIndices(String[] wordsContainer, String[] wordsQuery) {
        TrieNode trie = new TrieNode(); 
        for (int i = 0; i < wordsContainer.length; ++i) {
            String word = new StringBuilder(wordsContainer[i]).reverse().toString(); 
            TrieNode node = trie; 
            if (node.val == -1 || word.length() < node.val) {
                node.idx = i; 
                node.val = word.length();
            }
            for (var ch : word.toCharArray()) {
                if (node.next[ch-'a'] == null)
                    node.next[ch-'a'] = new TrieNode(); 
                node = node.next[ch-'a']; 
                if (node.val == -1 || word.length() < node.val) {
                    node.idx = i; 
                    node.val = word.length(); 
                }
            }
        }
        int n = wordsQuery.length; 
        int[] ans = new int[n]; 
        for (int i = 0; i < n; ++i) {
            String word = new StringBuilder(wordsQuery[i]).reverse().toString(); 
            TrieNode node = trie; 
            for (var ch : word.toCharArray()) {
                if (node.next[ch-'a'] == null) break; 
                node = node.next[ch-'a']; 
            }
            ans[i] = node.idx; 
        }
        return ans; 
    }
}; 
```
**Python3**
```
class Solution:
    def stringIndices(self, wordsContainer: List[str], wordsQuery: List[str]) -> List[int]:
        trie = {}
        for i, w in enumerate(wordsContainer): 
            node = trie
            if '$' not in node or len(w) < node['$'][1]: 
                node['$'] = (i, len(w))
            for ch in reversed(w): 
                node = node.setdefault(ch, {})
                if '$' not in node or len(w) < node['$'][1]: 
                    node['$'] = (i, len(w))
        ans = []
        for w in wordsQuery: 
            node = trie 
            for ch in reversed(w):
                if ch not in node: break 
                node = node[ch]
            ans.append(node['$'][0])
        return ans 
```
**Javascript**
```
var stringIndices = function(wordsContainer, wordsQuery) {
    const trie = {}; 
    for (let [i, w] of wordsContainer.entries()) {
        let node = trie; 
        w = w.split('').reverse().join(''); 
        if (!("val" in node) || w.length < node["val"][1]) 
            node["val"] = [i, w.length]; 
        for (const ch of w) {
            node = node[ch] ??= {}; 
            if (!("val" in node) || w.length < node["val"][1]) 
                node["val"] = [i, w.length]; 
        }
    }
    const ans = []; 
    for (let [i, w] of wordsQuery.entries()) {
        let node = trie; 
        w = w.split('').reverse().join(''); 
        for (const ch of w) {
            if (!(ch in node)) break; 
            node = node[ch]; 
        }
        ans.push(node['val'][0]); 
    }
    return ans; 
};
```
**Typescript**
```
function stringIndices(wordsContainer: string[], wordsQuery: string[]): number[] {
    const trie = {}; 
    for (let [i, w] of wordsContainer.entries()) {
        let node = trie; 
        w = w.split('').reverse().join(''); 
        if (!("val" in node) || w.length < node["val"][1]) 
            node["val"] = [i, w.length]; 
        for (const ch of w) {
            node = node[ch] ??= {}; 
            if (!("val" in node) || w.length < node["val"][1]) 
                node["val"] = [i, w.length]; 
        }
    }
    const ans = []; 
    for (let [i, w] of wordsQuery.entries()) {
        let node = trie; 
        w = w.split('').reverse().join(''); 
        for (const ch of w) {
            if (!(ch in node)) break; 
            node = node[ch]; 
        }
        ans.push(node['val'][0]); 
    }
    return ans; 
};
```