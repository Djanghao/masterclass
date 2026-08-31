# Beats 60%, C# solution with Hashmap and DFS

**Author:** gitugiri2k
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/3648104/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/3648104/)

---

# Intuition
Its not very intuitive ($$thanks @thrillobit$$) to solve such problems without TRIE. So intuition is Trie. Tricky part here is the . search. For "." we will have to do a DFS on the entire level of the tree and return the first true.
# Approach
Simple TRIE implementation will take care of the initiatialization and add.
For Search, we will have to do DFS for handling the . cases.
# Complexity
- Time complexity:
O(n*k)
- Space complexity:
O(1)
# Code
```
public class WordDictionary
        {
            public TrieNode root { get; set; }
            public WordDictionary()
            {
                this.root = new TrieNode();
            }

            public void AddWord(string word)
            {
                TrieNode curr = this.root;
                foreach (char c in word)
                {
                    if (!curr.children.ContainsKey(c))
                    {
                        curr.children[c] = new TrieNode();
                    }
                    curr = curr.children[c];
                }
                curr.isEndOfWord = true;
            }

            public bool Search(string word)
            {
                return dfs(word, this.root);
            }
            public bool dfs(string word, TrieNode root)
            {
                TrieNode curr = root;
                char c;
                for(int i=0;i<word.Length;i++)
                {
                    c = word[i];
                    if (c == '.')
                    {
                        foreach (var t in curr.children)
                        {
                            if (dfs(word.Substring(i + 1), t.Value))
                                return true;
                        }
                        return false;
                    }
                    else if (!curr.children.ContainsKey(c))
                        return false;
                    curr = curr.children[c];
                }
                return curr.isEndOfWord;
            }
        }
        public class TrieNode
        {
            public bool isEndOfWord { get; set; }
            public Dictionary<char, TrieNode> children { get; set; }
            public TrieNode()
            {
                this.children = new Dictionary<char, TrieNode>();
                this.isEndOfWord = false;
            }
        }
```