# Beats 100.00% Trie + Backtracking .NET Solution

**Author:** John_Kelly
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-squares/solutions/4181450/](https://leetcode.com/problems/word-squares/solutions/4181450/)

---

# Code
```
public class TrieNode
{
    public HashSet<string> Words { get; set; } = new();
    public Dictionary<char, TrieNode> Cildnren { get; set; } = new();
}

public class Solution
{
    public IList<IList<string>> WordSquares(string[] words)
    {
        TrieNode n, next, root = new TrieNode { Words = words.ToHashSet() };
        foreach (var word in words)
        {
            n = root;
            for (int i = 0; i < word.Length; n = next, i++)
            {
                if (!n.Cildnren.TryGetValue(word[i], out next))
                    n.Cildnren[word[i]] = next = new TrieNode();

                next.Words.Add(word);
            }
        }

        var result = new List<IList<string>>();
        Backtrack(root, new List<string>(), 0, words.First().Length,
            words, result);

        return result;
    }

    void Backtrack(TrieNode root, List<string> curr, int i, int l,
        string[] words, List<IList<string>> result)
    {
        if (i == l)
        {
            if (curr.Any()) result.Add(new List<string>(curr));
            return;
        }

        var n = root;
        foreach (var c in curr)
            if (!n.Cildnren.TryGetValue(c[i], out n)) return;

        foreach (var word in n.Words)
        {
            curr.Add(word);
            Backtrack(root, curr, i + 1, l, words, result);
            curr.RemoveAt(curr.Count - 1);
        }
    }
}
```