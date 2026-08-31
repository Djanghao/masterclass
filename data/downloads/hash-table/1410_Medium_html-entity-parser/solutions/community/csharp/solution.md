# Search with Trie

**Author:** xxuhu
**Votes:** 0
**Link:** [https://leetcode.com/problems/html-entity-parser/solutions/4318832/](https://leetcode.com/problems/html-entity-parser/solutions/4318832/)

---

# Intuition
The encoded string starts with & and ends with ;. If the string matches "quot", "apos", "amp","gt", "lt","frasl". It can be replaced to decoded string. 
The first approach is to extract string between & and ; and find the decode string. 

However, it can be improved by Trie.

# Approach

Build the Trie structure for the string after &. Includes the ;. In the last node, set the decoded string. In this case, we only need search the key once without extract and searching in the dictionary.

# Complexity
- Time complexity:
$$O(n*m)$$
where n is the length of the string
m is the average length of "quot;", "apos;", "amp;","gt;", "lt;" and"frasl;".

- Space complexity:
$$O(n)$$ 

# Code
```java []
class Solution {
    private static final String[][] P = {{"quot;","\""}, {"apos;","'"}, {"amp;","&"}, {"gt;",">"}, {"lt;","<"}, {"frasl;","/"}};
    private static Trie root = new Trie();
    static {
        for (String[] p : P) {
            Trie.insert(root, p[0], p[1]);
        }
    }
    public String entityParser(String text) {
        StringBuilder sb = new StringBuilder();
        int i = 0;
        char[] chars = text.toCharArray();
        while (i < chars.length) {
            char ch = chars[i++];
            if (ch != '&') {
                sb.append(ch);
                continue;
            }
            int j = i;
            var node = root;
            while (j < chars.length && node != null && node.target == null) {
                node = node.getNext(chars[j++]);
            }
            if (node == null || node.target == null) {
                sb.append('&');
                continue;
            }
            sb.append(node.target);
            i = j;
        }
        return sb.toString();
    }


    private static class Trie {
        private Trie[] children;
        private String target;
        private int len;

        Trie() {
            children = new Trie[128];
        }

        static void insert(Trie root, String str, String target) {
            var node = root;
            for (int i = 0; i < str.length(); ++i) {
                int id = (int)str.charAt(i);
                if (node.children[id] == null) {
                    node.children[id] = new Trie();
                }
                node = node.children[id];
            }
            node.target = target;
            node.len = str.length();
        }

        Trie getNext(int id) {
            return children[id];
        }
    }
}
```
```csharp []
public class Solution 
{
    private static Trie root = new Trie();
    static Solution() {
        string[] strs = {"quot;","\"", "apos;","'","amp;","&", "gt;",">", "lt;","<", "frasl;","/"};
        for (int i = 0; i < strs.Length; i = i + 2)
        {
            Trie.Insert(root, strs[i], strs[i+1]);
        }
    }
    public string EntityParser(string text) 
    {
        var sb = new StringBuilder();
        int i = 0;
        int j = 0;
        char[] chars = text.ToCharArray();
        while (i < chars.Length)
        {
            char ch = chars[i++];
            if (ch != '&') {
                sb.Append(ch);
                continue;
            }
            var node = root;
            j = i;
            while (j < chars.Length && node != null && node.Target == null)
            {
                node = node.GetNext((int)chars[j++]);
            }

            if (node == null || node.Target == null)
            {
                sb.Append('&');
                continue;
            }
            i = j;
            sb.Append(node.Target);
        }
        return sb.ToString();
    }
}

class Trie {
    public Trie[] Children { private set; get;}
    public string Target { private set; get;}

    public Trie() 
    {
        Children = new Trie[128];
    }

    public static void Insert(Trie root, string source, string target)
    {
        var node = root;
        for (int i = 0; i < source.Length; ++i) {
            int id = (int) source[i];
            if (node.Children[id] == null) 
            {
                node.Children[id] = new Trie();
            }
            node = node.Children[id];
        }
        node.Target = target;
    }

    public Trie GetNext(int id)
    {
        return Children[id];
    }
}
```