# JS, Python, Java, C++ | Double Trie Solution w/ Explanation

**Author:** sgallivan
**Votes:** 26
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/1185480/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/1185480/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

***Update 6/18/2022***: _This solution has been updated to account for duplicate words._

---

#### ***Idea:***

Whenever we have to deal with searching for data using a prefix or a suffix, this naturally points to a **trie** solution. A trie is a type of data structure that uses a branching tree format where the nodes represent segments of data (usually characters) to make searching by prefix faster and easier.

The difficulty in this case is that we're searching by both prefix and suffix, so we can create two trie structures, one for prefixes and one for suffixes (**pTrie, sTrie**). Then we can iterate through **words** and **insert()** each word into the two tries.

(_Update: we should iterate backwards through **words** and use a **set** to prevent duplicate word entries, as only the largest index is needed._)

To do so, we'll iterate through the characters of the word, forwards for **pTrie** and backwards for **sTrie**, and move from node to node as the word moves from character to character. At each node, we'll update the **vals** array with the current **index**. The **vals** array represents the indices of all the words that run through the current node. Since we're iterating through **words** in **index** order, each node's **vals** array will be sorted in **index** order, as well.

For our find method, **f()**, we'll be doing the same in reverse. We'll navigate separately through **pTrie** with **pre** and **sTrie** with **suf** to find the **vals** arrays containing the indices of each word that matches those prefixes and suffixes. If at any point a particular trie does not have the next character, we can **return -1**.

Once we've successfully obtained the two **vals** arrays (**pVals, sVals**), we can cross-reference their contents, starting at the end, and look for the largest index that occurs in both. If we find one, we can **return** it, otherwise we can **return -1**.

(_Update: Since we iterated through **words** backwards on insertion, we should start at the beginning of the **vals** arrays, rather than the end, to obtain the largest common index._)

---

#### ***Javascript Code:***

The best result for the code below is **476ms / 68.1MB** (beats 100% / 80%).
```javascript
class WordFilter {
    constructor(words) {
        this.pTrie = new Array(27)
        this.sTrie = new Array(27)
        let wordSet = new Set()
        for (let index = words.length - 1; ~index; index--) {
            let word = words[index], wlen = word.length
            if (wordSet.has(word))
                continue;
            wordSet.add(word)
            this.insert(word, index, this.pTrie, 0, wlen, 1)
            this.insert(word, index, this.sTrie, wlen-1, -1, -1)
        }
    }
    
    insert(word, index, trie, start, end, step) {
        for (let i = start; i != end; i += step) {
            let c = word.charCodeAt(i) - 97
            if (!trie[c]) trie[c] = new Array(27)
            trie = trie[c]
            if (!trie[26]) trie[26] = []
            trie[26].push(index)
        }
    }
    
    retrieve(word, trie, start, end, step) {
        for (let i = start; i != end; i += step) {
            let c = word.charCodeAt(i) - 97
            if (!trie[c]) return []
            trie = trie[c]
        }
        return trie[26]
    }
    
    f(pre, suf) {
        let pVals = this.retrieve(pre, this.pTrie, 0, pre.length, 1),
            sVals = this.retrieve(suf, this.sTrie, suf.length-1, -1, -1),
            svix = 0, pvix = 0
        while (svix < sVals.length && pvix < pVals.length) {
            let sVal = sVals[svix], pVal = pVals[pvix]
            if (sVal === pVal) return sVal
            sVal > pVal ? svix++ : pvix++
        }
        return -1
    }
};
```

---

#### ***Python Code:***

The best result for the code below is **895ms / 25.8MB** (beats 96% / 96%).
```python
class WordFilter:
    def __init__(self, words: List[str]):
        self.pTrie = [None] * 27
        self.sTrie = [None] * 27
        self.wordSet = set()
        for index in range(len(words)-1, -1, -1):
            word = words[index]
            if word not in self.wordSet:
                self.wordSet.add(word)
                self.insert(word, index, self.pTrie)
                self.insert(word[::-1], index, self.sTrie)
            
    def insert(self, word: str, index: int, trie: dict):
        for c in word:
            cval = ord(c) - 97
            if not trie[cval]: trie[cval] = [None] * 27
            trie = trie[cval]
            if not trie[26]: trie[26] = []
            trie[26].append(index)
            
    def retrieve(self, word: str, trie: dict) -> list:
        for c in word:
            cval = ord(c) - 97
            trie = trie[cval]
            if not trie: return []
        return trie[26]

    def f(self, pre: str, suf: str) -> int:
        pVals = self.retrieve(pre, self.pTrie)
        sVals = self.retrieve(suf[::-1], self.sTrie)
        svix, pvix = 0, 0
        while svix < len(sVals) and pvix < len(pVals):
            sVal, pVal = sVals[svix], pVals[pvix]
            if sVal == pVal: return sVal
            if sVal > pVal: svix += 1
            else: pvix += 1
        return -1
```

---

#### ***Java Code:***

The best result for the code below is **182ms / 51.6MB** (beats 99% / 100%).
```java
class TrieNode {
    public TrieNode[] children = new TrieNode[26];
    public List<Integer> vals = new ArrayList<>();
}

class WordFilter {
    private TrieNode pTrie = new TrieNode();
    private TrieNode sTrie = new TrieNode();
    
    public WordFilter(String[] words) {
        Set<String> wordSet = new HashSet<>();
        for (int index = words.length - 1; index > -1; index--) {
            if (wordSet.contains(words[index]))
                continue;
            wordSet.add(words[index]);
            char[] word = words[index].toCharArray();
            int wlen = word.length;
            insert(word, index, pTrie, 0, wlen, 1);
            insert(word, index, sTrie, wlen-1, -1, -1);
        }
    }
            
    private void insert(char[] word, int index, TrieNode trie, int start, int end, int step) {
        for (int i = start; i != end; i += step) {
            int c = word[i] - 'a';
            if (trie.children[c] == null)
                trie.children[c] = new TrieNode();
            trie = trie.children[c];
            trie.vals.add(index);
        }
    }
    
    private List<Integer> retrieve(char[] word, TrieNode trie, int start, int end, int step) {
        for (int i = start; i != end; i += step) {
            trie = trie.children[word[i]-'a'];
            if (trie == null) return new ArrayList<>();
        }
        return trie.vals;
    }
    
    public int f(String pre, String suf) {
        List<Integer> pVals = retrieve(pre.toCharArray(), pTrie, 0, pre.length(), 1);
        List<Integer> sVals = retrieve(suf.toCharArray(), sTrie, suf.length()-1, -1, -1);
        int svix = 0, pvix = 0;
        while (svix < sVals.size() && pvix < pVals.size()) {
            int sVal = sVals.get(svix), pVal = pVals.get(pvix);
            if (sVal == pVal) return sVal;
            if (sVal > pVal) svix++;
            else pvix++;
        }
        return -1;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **366ms / 100.8MB** (beats 97% / 98%).
```c++
class TrieNode {
public:
    unordered_map<char, TrieNode*> children;
    vector<int> vals;
};

class WordFilter {
private:
    TrieNode *pTrie, *sTrie;
    
public:
    WordFilter(vector<string>& words) {
        pTrie = new TrieNode();
        sTrie = new TrieNode();
        unordered_set<string> wordSet;
        int n = words.size();
        for (int index = n - 1; ~index; index--) {
            string word = words[index];
            if (wordSet.find(word) != wordSet.end())
                continue;
            wordSet.insert(word);
            insert(word, index, pTrie);
            reverse(word.begin(), word.end());
            insert(word, index, sTrie);
        }
    }
    
    void insert(string word, int index, TrieNode* trie) {
        for (auto c : word) {
            if (!trie->children[c])
                trie->children[c] = new TrieNode();
            trie = trie->children[c];
            trie->vals.push_back(index);
        }
    }
    
    vector<int>* retrieve(string str, TrieNode* trie) {
        for (auto c : str) {
            trie = trie->children[c];
            if (!trie) return nullptr;
        }
        return &trie->vals;
    }
    
    int f(string pre, string suf) {
        vector<int>* pVals = retrieve(pre, pTrie);
        reverse(suf.begin(), suf.end());
        vector<int>* sVals = retrieve(suf, sTrie);
        if (pVals == nullptr or sVals == nullptr)
            return -1;
        int svix = 0, pvix = 0;
        while (svix < sVals->size() && pvix < pVals->size()) {
            int sVal = (*sVals)[svix], pVal = (*pVals)[pvix];
            if (sVal == pVal) return sVal;
            if (sVal > pVal) svix++;
            else pvix++;
        }
        return -1;
    }
};
```