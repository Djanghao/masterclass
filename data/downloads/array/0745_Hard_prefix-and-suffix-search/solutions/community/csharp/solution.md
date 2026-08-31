# Trie + DP

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/5922705/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/5922705/)

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
public class WordFilter {
    private Trie preRoot;
    private Trie suffRoot;
    private Dictionary<string, int> visited;
    private class Trie
    {
        public Trie() { }
        public bool isWord { get; set; }
        public Trie[] children = new Trie[26];
        public HashSet<int> wordIdx = new HashSet<int>();
    }
    public WordFilter(string[] words) {
        preRoot = new Trie();
        suffRoot = new Trie();
        visited = new Dictionary<string, int>();
        HashSet<string> containW = new();
        for(int i = words.Length-1; i >= 0; i--)
        {
            var cur = preRoot;
            if(containW.Contains(words[i]))
                continue;

            for(int j = 0; j < words[i].Length; j++)
            {
                int idx = words[i][j] -'a';
                if(cur.children[idx] == null)
                    cur.children[idx] = new Trie();

                cur = cur.children[idx];
                cur.wordIdx.Add(i);
            }

            cur.isWord = true;

            cur = suffRoot;
            for(int j = words[i].Length-1; j >= 0; j--)
            {
                int idx = words[i][j] -'a';
                if(cur.children[idx] == null)
                    cur.children[idx] = new Trie();

                cur = cur.children[idx];
                cur.wordIdx.Add(i);
            }
            cur.isWord = true;
        }
    }
    
    public int F(string pref, string suff) {
        HashSet<int> preIdx = new(), suffIdx = new();
        string newKey = pref + "#" + suff;
        if(visited.ContainsKey(newKey))
            return visited[newKey];
        var cur = preRoot;
        foreach(char c in pref)
        {
            int idx = c-'a';
            if(cur.children[idx] == null)
                return -1;
            cur = cur.children[idx];
        }

        preIdx = cur.wordIdx;
        cur = suffRoot;
        for(int i = suff.Length-1; i >= 0; i--)
        {
            int idx = suff[i]-'a';
            if(cur.children[idx] == null)
                return -1;

            cur = cur.children[idx];
        }

        int minIdx = -1;
        suffIdx = cur.wordIdx;
        foreach(int curIdx in suffIdx)
        {
            if(preIdx.Contains(curIdx))
                minIdx = Math.Max(minIdx, curIdx);
        }

        visited.Add(newKey, minIdx);
        return minIdx;
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * WordFilter obj = new WordFilter(words);
 * int param_1 = obj.F(pref,suff);
 */
```