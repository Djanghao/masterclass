# C# Solution

**Author:** samsaumya
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/5836913/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/5836913/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
using System;
using System.Collections.Generic;

public class Solution
{
    private static readonly String NO_WORD_FOUND = "";
    private readonly Trie trie = new Trie();

    public string LongestWord(string[] words)
    {
        AddAllWordsToTrie(words);
        return FindLongestWordWhereEachLetterEndsPrefix(words);
    }

    private void AddAllWordsToTrie(string[] words)
    {
        foreach (string word in words)
        {
            trie.AddWord(word);
        }
    }


//create private string prefix
    private string FindLongestWordWhereEachLetterEndsPrefix(string[] words)
    {
        int maxLength = 0;
        String longestWord = NO_WORD_FOUND;

        foreach (string word in words)
        {
            if (trie.EachLetterInWordEndsPrefix(word))
            {
                if (word.Length > maxLength)
                {
                    longestWord = word;
                    maxLength = word.Length;
                }
                else if (word.Length == maxLength && word.CompareTo(longestWord) < 0)
                {
                    longestWord = word;
                }
            }
        }
        return longestWord;
    }
}

class Trie
{
    private readonly Node root = new Node();
// private class
    private sealed class Node
    {
        private static readonly int ALPHABET_SIZE = 26;
        public Node[] branches = new Node[ALPHABET_SIZE];
        public bool endsPrefix;
    }
// adding word string
    public void AddWord(String word)
    {
        Node current = root;
        for (int i = 0; i < word.Length; ++i)
        {
            int index = word[i] - 'a';
            if (current.branches[index] == null)
            {
                current.branches[index] = new Node();
            }
            current = current.branches[index];
        }
        current.endsPrefix = true;
    }
//bool prefix
    public bool EachLetterInWordEndsPrefix(String word)
    {
        Node current = root;
        for (int i = 0; i < word.Length; ++i)
        {
            int index = word[i] - 'a';
            if (!current.branches[index].endsPrefix)
            {
                return false;
            }
            current = current.branches[index];
        }
        return true;
    }
}
```