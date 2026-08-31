# [C#] Trie Implementation with Dictionary - Full Explanation

**Author:** user2400po
**Votes:** 5
**Link:** [https://leetcode.com/problems/implement-trie-prefix-tree/solutions/3308844/](https://leetcode.com/problems/implement-trie-prefix-tree/solutions/3308844/)

---

# Intuition
The problem requires us to implement a Trie, which is a tree-like data structure used for storing and retrieving a collection of strings efficiently. We can think of it as a dictionary where keys are strings and values are boolean values to indicate whether the key exists in the dictionary or not. The tree structure allows for quick searching and insertion of strings.

# Approach
We will implement a Trie using a dictionary in C#. The Trie will be represented by a dictionary where each key is a character and each value is another Trie object. When we insert a word, we traverse the Trie starting from the root and create new Trie objects if necessary. We mark the end of the word by adding a special character, such as '~'. When we search for a word, we traverse the Trie again and check if the word exists by checking if the Trie object at the end contains the special character. When we search for a prefix, we simply traverse the Trie and return true if we reach the end of the prefix.

# Complexity
- Time complexity:
Insertion: $$O(n)$$, where n is the length of the word being inserted. We need to traverse the Trie and create new nodes if necessary.
Search: $$O(m)$$, where m is the length of the word being searched. We need to traverse the Trie to check if the word exists.
StartsWith: $$O(p)$$, where p is the length of the prefix being searched. We need to traverse the Trie to check if the prefix exists.
 - Space complexity: $$O(n*m)$$, where n is the number of words inserted and m is the average length of the words. We need to store each character in a Trie node.

# Code
```
using System.Collections.Generic;

public class Trie
{
    private Dictionary<char, Trie> trie;

    public Trie()
    {
        trie = new Dictionary<char, Trie>();
    }

    public void Insert(string word)
    {
        var t = trie;
        foreach (var c in word)
        {
            if (!t.ContainsKey(c))
            {
                t[c] = new Trie();
            }
            t = t[c].trie;
        }
        t['~'] = new Trie();
    }

    public bool Search(string word)
    {
        var t = trie;
        foreach (var c in word)
        {
            if (!t.ContainsKey(c))
            {
                return false;
            }
            t = t[c].trie;
        }
        return t.ContainsKey('~');
    }

    public bool StartsWith(string prefix)
    {
        var t = trie;
        foreach (var c in prefix)
        {
            if (!t.ContainsKey(c))
            {
                return false;
            }
            t = t[c].trie;
        }
        return true;
    }
}
```