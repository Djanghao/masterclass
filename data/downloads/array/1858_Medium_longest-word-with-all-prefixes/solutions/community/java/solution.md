# Two Java solutions: Trie and HashSet based with comments.

**Author:** masterdeniro
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/3231355/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/3231355/)

---


# Approach 1. Trie

```
class Solution {
    public String longestWord(String[] words) {
        Arrays.sort(words, (a, b) -> a.length() - b.length());
        var trie = new Trie();
        for (var word: words) {
            trie.insert(word);
        }

        return trie.longest;
    }
}
// Trie implementation
class Trie {
    private Node root;

    public String longest = "";

    public Trie() {
        this.root = new Node('\\0');
    }
    
    public void insert(String word) {

        Node cur = this.root;
        int countPrefixes = 0;
        for(char c: word.toCharArray()) {
            var node = cur.children[c-'a'];
            if (node == null) {
                cur.children[c-'a'] = new Node(c);
            }

            cur = cur.children[c-'a'];

            if (cur.isWord) {
                countPrefixes++;
            }
        }
        cur.isWord = true;
        countPrefixes++;

        // update longest word with prefixes.
        if (word.length() == countPrefixes) {
            if (this.longest.length() < word.length()) {
                this.longest = word;
            }
            else if (this.longest.length() == word.length()) {
                if (this.longest.compareTo(word) > 0) {
                    this.longest = word;
                }
            }
        }
    }

    class Node {
        char val;
        Node[] children = new Node[26];
        boolean isWord = false;

        Node(char c) {
            this.val = c;
        }
    }
}
```
# Approach 2. HashSet

```
    public String longestWord(String[] words) {
        var longest = "";
        var set = new HashSet<String>();

        //we need to add words starting from shortest one.
        Arrays.sort(words, (a, b) -> a.length() - b.length());
        set.add("");

        for (var word: words) {
            var prev = word.length() == 1 ? "" : word.substring(0, word.length() -1);

            //check if previous prefix exists in the hash set.
            if (set.contains(prev)) {

                set.add(word);

                // update result. taking longest word.
                if (longest.length() < word.length()) {
                    longest = word;
                }
                //making sure that less lexografically word has more priority.
                else if (longest.length() == word.length()) {
                    if (longest.compareTo(word) > 0) {
                        longest = word;
                    }
                }
            }
            
        }

        return longest;
    }
```