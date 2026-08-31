# Easiest JAVA with Trie, no need to count the number of changes

**Author:** FionaFang
**Votes:** 36
**Link:** [https://leetcode.com/problems/implement-magic-dictionary/solutions/107453/](https://leetcode.com/problems/implement-magic-dictionary/solutions/107453/)

---

Below is my accepted java code.
First build a trie tree, and in search(String word) function, we just edit every character from 'a' to 'z' and search the new string. 
 (This process is like "word ladder")

````
class MagicDictionary {
    class TrieNode {
        TrieNode[] children = new TrieNode[26];
        boolean isWord;
        public TrieNode() {}
    }
    TrieNode root;
    /** Initialize your data structure here. */
    public MagicDictionary() {
        root = new TrieNode();
    }
    
    /** Build a dictionary through a list of words */
    public void buildDict(String[] dict) {
        for (String s : dict) {
            TrieNode node = root;
            for (char c : s.toCharArray()) {
                if (node.children[c - 'a'] == null) {
                    node.children[c - 'a'] = new TrieNode();
                }
                node = node.children[c - 'a'];
            }
            node.isWord = true;
        }
    }
    
    /** Returns if there is any word in the trie that equals to the given word after modifying exactly one character */
    public boolean search(String word) {
        char[] arr = word.toCharArray();
        for (int i = 0; i < word.length(); i++) {
            for (char c = 'a'; c <= 'z'; c++) {
                if (arr[i] == c) {
                    continue;
                }
                char org = arr[i];
                arr[i] = c;
                if (helper(new String(arr), root)) {
                    return true;
                }
                arr[i] = org;
            }
        }
        return false;
    }
    public boolean helper(String s, TrieNode root) {
        TrieNode node = root;
        for (char c : s.toCharArray()) {
            if (node.children[c - 'a'] == null) {
                return false;
            }
            node = node.children[c - 'a'];
        }
        return node.isWord;
    }
}
````