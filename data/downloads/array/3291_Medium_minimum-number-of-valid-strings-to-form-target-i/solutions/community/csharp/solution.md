# trie + dp

**Author:** 3S_AKB
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5790562/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5790562/)

---


# Code
```csharp []
public class Solution {

    public class Node
    {
        public Dictionary<char,Node> g = new Dictionary<char, Node>();
    }

    public int MinValidStrings(string[] words, string target) {
        Node n = new Node();
        foreach (var w in words)
        {
            Node m = n;
            foreach (var c in w)
            {
                if (!m.g.ContainsKey(c))
                    m.g[c] = new Node();
                m = m.g[c];
            }
        }

        int[] r = Enumerable.Repeat(0, target.Length).Select(x => (int)10e6).ToArray();
        for (int j = target.Length - 1; j >= 0; j--)
        {
            Node m = n;
            for (int i = j; i < target.Length; i++)
            {
                if (!m.g.ContainsKey(target[i]))
                    break;
                m = m.g[target[i]];
                r[j] = Math.Min(r[j], 1 + (i == target.Length - 1 ? 0 : r[i + 1]));
            }
        }

        return r[0] >= 10e6 ? -1 : r[0];
    }
}
```