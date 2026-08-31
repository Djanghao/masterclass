# C# - Trie to store the words reversed - O(q*w)

**Author:** marcomu
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-suffix-queries/solutions/5972508/](https://leetcode.com/problems/longest-common-suffix-queries/solutions/5972508/)

---

# Intuition & Approach
Use a trie to store all the words reversed, which also keeps track of the word's index in the input array.

Then, for each query, use the trie to match as many character as possible, then autocomplete every word from the current node.
The autocompletion can stop when we retrieved all the words with the minimum length - we can run a BFS for that.

# Complexity
- Time complexity: $$O(q*w)$$, with `q` = queries and `w` = words.
Worst case scenario: for every query we retrieve all the words from the trie.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(w)$$, to store all the words in the trie.

# Code
```csharp []
public class Solution
{
    private class Trie
    {
        private class Node
        {
            public Dictionary<char, Node> Next = new();
            public int WordId = -1;
        }

        private Node Root = new();

        // Adds the reverse of the string `s` into the trie, along with its id.
        public void AddReversed(string s, int id)
        {
            var p = this.Root;

            for (var i = s.Length - 1; i >= 0; --i)
            {
                var c = s[i];

                if (!p.Next.ContainsKey(c))
                {
                    p.Next.Add(c, new());
                }

                p = p.Next[c];
            }

            if (p.WordId == -1)
            {
                p.WordId = id;
            }
        }

        // Search the node that correspond with the longest specified suffix, and autocompletes all the words from it.
        // Since the words are stored reversed, the suffix must be reversed and searched like a prefix.
        public IEnumerable<int> AutocompletePartial_Reversed(string suffix)
        {
            var p = this.Root;

            for (var i = suffix.Length - 1; i >= 0; --i)
            {
                var c = suffix[i];

                if (!p.Next.ContainsKey(c))
                {
                    break;
                }

                p = p.Next[c];
            }

            return this.Autocomplete(p);
        }

        // Performs a BFS search of the trie to retrieve the first "layer" of words at the same height (the shorter ones),
        // and ignores all the deeper nodes.
        private IEnumerable<int> Autocomplete(Node node)
        {
            var queue = new Queue<(Node, int)>();
            queue.Enqueue((node, 0));

            var maxLen = int.MaxValue;
            int len;

            while (queue.Count > 0)
            {
                (node, len) = queue.Dequeue();

                if (len > maxLen)
                {
                    break;
                }

                if (node.WordId != -1)
                {
                    maxLen = len;
                    yield return node.WordId;
                }

                foreach (var next in node.Next.Values)
                {
                    queue.Enqueue((next, len + 1));
                }
            }
        }
    }

    public int[] StringIndices(string[] wordsContainer, string[] wordsQuery)
    {
        var trie = new Trie();

        for (var i = 0; i < wordsContainer.Length; ++i)
        {
            // the word's id is the word's index in `wordsContainer`
            trie.AddReversed(wordsContainer[i], i);
        }

        var solution = new int[wordsQuery.Length];

        for (var i = 0; i < wordsQuery.Length; ++i)
        {
            // if there are multiple words with the same length, use the one with the smallest index.
            solution[i] = trie.AutocompletePartial_Reversed(wordsQuery[i]).Min();
        }

        return solution;
    }
}
```