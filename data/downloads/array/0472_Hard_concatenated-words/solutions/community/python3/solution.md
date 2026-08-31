# Clean Codes🔥🔥|| Full Explanation✅|| Trie & DFS✅|| C++|| Java || Python3

**Author:** N7_BLACKHAT
**Votes:** 47
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/3103680/](https://leetcode.com/problems/concatenated-words/solutions/3103680/)

---

# Intuition :
- We can use the data structure trie to store the words. Then for each word in the list of words, we use depth first search to see whether it is a concatenation of two or more words from the list.

- We first build a trie structure that stores the list of words. In every trie node, we use an array of length 26 to store possible next trie node, and a flag to indicate whether the trie node is the last letter of a word in the dictionary.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach :
- Suppose we have a list of words like this, words = [\u201Ccat\u201D, \u201Ccats\u201D, \u201Ccatsdogcats\u201D, \u201Cdog\u201D, \u201Cdogcatsdog\u201D, \u201Chippopotamuses\u201D, \u201Crat\u201D, \u201Cratcatdogcat\u201D]. The trie structure we build looks like the following. If the node is an end of a word, there is a * next to it.
```
    c    d    h    r
    |    |    |    |
    a    o    i    a
    |    |    |    |
    t*   g*   p    t*
    |    |    |    |
    s*   c    p    c
    |    |    |    |
    d    a    o    a
    |    |    |    |
    o    t    p    t
    |    |    |    |
    g    s    o    d
    |    |    |    |
    c    d    t    o
    |    |    |    |
    a    o    a    g
    |    |    |    |
    t    g*   m    c
    |         |    |
    s*        u    a
            |    |
            s    t*
            |
            e
            |
            s*
```
- Next, for each word in the sentence, we search whether the word is a concatenation of two or more other words from the list. We can use depth first search here.

- For each word, we start from the root node of the trie and the first letter of the word. If the letter is not null in the current trie node, we go to the next trie node of that letter. We keep searching until the trie node is an end of a word (with a * in the above graph). 

- We increase the count of words the comprise the current word. Then we start from the root node of the trie again, and keep on searching until we reach the end of the current word. If we cannot find the letter in the trie, we go backtrack to the last run of trie nodes and continue the search.

- If we can find a concatenation of words that reaches the end of the current word, we check how many words are concatenated. If it is greater than 2, we put the current word to the final answer
<!-- Describe your approach to solving the problem. -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
# Codes for above Explained Approach :
```C++ []
class Solution {
struct TrieNode {
    TrieNode* arr[26];
    bool is_end;
    TrieNode() {
        for (int i = 0; i < 26; i ++) arr[i] = NULL;
        is_end = false;
    }  
};

void insert(TrieNode* root, string key) {
    TrieNode* curr = root;
    for (int i = 0; i < key.size(); i ++) {
        int idx = key[i] - 'a';
        if (curr->arr[idx] == NULL)
            curr->arr[idx] = new TrieNode();
        curr = curr->arr[idx];
    }
    curr->is_end = true;
}

bool dfs(TrieNode* root, string key, int index, int count) {
    if (index >= key.size())
        return count > 1;
    TrieNode* curr = root;
    for (int i = index; i < key.size(); i ++) {
        int p = key[i] - 'a';
        if (curr->arr[p] == NULL) {
            return false;
        }
        curr = curr->arr[p];
        if (curr->is_end) {
            if (dfs(root, key, i+1, count+1))
                return true;
        }
    }
    return false;
}
public:
vector<string> findAllConcatenatedWordsInADict(vector<string>& words) {
    TrieNode* root = new TrieNode();
    for (int i = 0; i < words.size(); i ++) {
        insert(root, words[i]);
    }
    vector<string> ans;
    for (int i = 0; i < words.size(); i ++) {
        if (dfs(root, words[i], 0, 0))
            ans.push_back(words[i]);
    }
    return ans;   
}
};
```
```Java []
import java.util.List;
import java.util.ArrayList;

class Solution {
    class TrieNode {
        TrieNode[] arr = new TrieNode[26];
        boolean is_end;
        TrieNode() {
            for (int i = 0; i < 26; i ++) arr[i] = null;
            is_end = false;
        }  
    };

    void insert(TrieNode root, String key) {
        TrieNode curr = root;
        for (int i = 0; i < key.length(); i ++) {
            int idx = key.charAt(i) - 'a';
            if (curr.arr[idx] == null)
                curr.arr[idx] = new TrieNode();
            curr = curr.arr[idx];
        }
        curr.is_end = true;
    }

    boolean dfs(TrieNode root, String key, int index, int count) {
        if (index >= key.length())
            return count > 1;
        TrieNode curr = root;
        for (int i = index; i < key.length(); i ++) {
            int p = key.charAt(i) - 'a';
            if (curr.arr[p] == null) {
                return false;
            }
            curr = curr.arr[p];
            if (curr.is_end) {
                if (dfs(root, key, i+1, count+1))
                    return true;
            }
        }
        return false;
    }
    public List<String> findAllConcatenatedWordsInADict(String[] words) {
        TrieNode root = new TrieNode();
        for (int i = 0; i < words.length; i ++) {
            insert(root, words[i]);
        }
        List<String> ans = new ArrayList<String>();
        for (int i = 0; i < words.length; i ++) {
            if (dfs(root, words[i], 0, 0))
                ans.add(words[i]);
        }
        return ans;   
    }
}
```
```Python3 []
class TrieNode:
    def __init__(self):
        self.children = [None] * 26
        self.is_end = False

class Solution:
    def __init__(self):
        self.root = TrieNode()
        
    def insert(self, root, key):
        curr = root
        for i in range(len(key)):
            idx = ord(key[i]) - ord('a')
            if not curr.children[idx]:
                curr.children[idx] = TrieNode()
            curr = curr.children[idx]
        curr.is_end = True

    def dfs(self, root, key, index, count):
        if index >= len(key):
            return count > 1
        curr = root
        for i in range(index, len(key)):
            p = ord(key[i]) - ord('a')
            if not curr.children[p]:
                return False
            curr = curr.children[p]
            if curr.is_end:
                if self.dfs(root, key, i+1, count+1):
                    return True
        return False

    def findAllConcatenatedWordsInADict(self, words):
        for i in range(len(words)):
            self.insert(self.root, words[i])
        ans = []
        for i in range(len(words)):
            if self.dfs(self.root, words[i], 0, 0):
                ans.append(words[i])
        return ans
```
# For the 42/43 test case passing issue in C++ : Use this code
```
class Solution {
private:
    struct Trie
    {
        vector<Trie*> children{26};
        bool end{false};
    };
    
    Trie* root;
    
    void insert(string& s)
    {
        if (s.empty()) return;
        Trie* cur = root;
        for (char c:s)
        {
            if (cur->children[c-'a'] == nullptr)
                cur->children[c-'a'] = new Trie();
            cur = cur->children[c-'a'];
        }
        cur->end = true;
    }
    
    bool dfs(Trie* root, Trie* node, string& word, int idx, int count)
    {
        if (!node)
            return false;
        
        if (idx >= word.size())
        {
            if (node->end && count >=1 )
                return true;
            else
                return false;
        }
        
        if (node->end && dfs(root, root, word, idx, count+1))
            return true;
        return dfs(root, node->children[word[idx]-'a'], word, idx+1, count);
    }
    
public:
    vector<string> findAllConcatenatedWordsInADict(vector<string>& words) {
        sort(words.begin(), words.end(), [](const string& w1, const string& w2) {
            return w1.size() < w2.size();
        });
        
        vector<string> ret;
        root = new Trie();
        
        for(auto &w: words)
        {
            if (w.empty()) continue;
            if(dfs(root, root, w, 0, 0)) 
                ret.push_back(w);
            else 
                insert(w);
        }
    
        return ret;
    }
};
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)

