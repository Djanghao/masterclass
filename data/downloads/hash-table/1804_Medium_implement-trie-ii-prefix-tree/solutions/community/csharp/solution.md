# C# Solution Time Complexity: O(N) Space Complexity: O(M.N)

**Author:** rahulsharma347
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/6036313/](https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/6036313/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Let N be the maximum length of a word or a prefix.
Time complexity: O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Let N be the maximum length of a word or a prefix.
Let M be the number of calls.
Space complexity: O(M.N)

# Code
```csharp []
public class Trie {
  public Trie[] Children;
  public int cnt_word;
  public int cnt_prefix;
  public bool EndOfWord;

    public Trie() {
        Children = new Trie[26];
        cnt_word = 0;
        cnt_prefix = 0;
    }
    
    public void Insert(string word) {
        var current = this;
        foreach(var ch in word) 
        {
            if (current.Children[ch - 'a'] == null) {
                current.Children[ch - 'a'] = new Trie();
            }
            current = current.Children[ch - 'a'];
            current.cnt_prefix++;
        }
        current.cnt_word++;
    }
    
    public int CountWordsEqualTo(string word) {
        var current = this;
        foreach(var ch in word) {   
        current = current.Children[ch - 'a'];
        if (current == null)
            return 0;
        }
        return current.cnt_word;
    }
    
    public int CountWordsStartingWith(string prefix) {
        var current = this;
        foreach(var ch in prefix) {   
        current = current.Children[ch - 'a'];

        if (current == null)
            return 0;
        }
        return current.cnt_prefix;
    }
    
    public void Erase(string word) 
    {
        var current = this;
        foreach(var ch in word) 
        {   
            if (current.Children[ch - 'a'] == null)
            return;

            current = current.Children[ch - 'a'];
            current.cnt_prefix--;
        }
        current.cnt_word--;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.Insert(word);
 * int param_2 = obj.CountWordsEqualTo(word);
 * int param_3 = obj.CountWordsStartingWith(prefix);
 * obj.Erase(word);
 */
```