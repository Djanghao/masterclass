# Kind of clumsy Trie solution, but it works

**Author:** anikit
**Votes:** 6
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/2781431/](https://leetcode.com/problems/word-search-ii/solutions/2781431/)

---

```csharp
public class Solution
{
    public IList<string> FindWords(char[][] board, string[] words)
    {
        int m = board.Length;
        int n = board[0].Length;
        List<string> res = new();

        //build trie
        Node root = new();
        foreach (string word in words)
        {
            Node node = root;
            foreach (char c in word)
            {
                if (node.Next[c] is null) node.Next[c] = new Node();
                node = node.Next[c];
            }
            node.Word = word;
        }

        //do dfs
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                Dfs(i, j, root);
            }
        }

        return res;

        void Dfs(int i, int j, Node node)
        {
            if (i < 0 || j < 0 || i == m || j == n) return;
            char c = board[i][j];
            if (c == '/' || node.Next[c] is null) return;
            node = node.Next[c];

            if (node.Word is not null)
            {
                res.Add(node.Word);
                node.Word = null;
            }

            board[i][j] = '/';
            Dfs(i - 1, j, node);
            Dfs(i, j - 1, node);
            Dfs(i + 1, j, node);
            Dfs(i, j + 1, node);
            board[i][j] = c;
        }
    }
}

public class Node
{
    public Node[] Next { get; } = new Node['z' + 1];
    public string Word { get; set; }
}
```