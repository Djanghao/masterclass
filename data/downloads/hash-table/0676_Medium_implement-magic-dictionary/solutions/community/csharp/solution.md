# C# Solution using Trie

**Author:** mohamedAbdelety
**Votes:** 1
**Link:** [https://leetcode.com/problems/implement-magic-dictionary/solutions/4251557/](https://leetcode.com/problems/implement-magic-dictionary/solutions/4251557/)

---

```
public class Node{
    public bool endWord;
    public Dictionary<char,Node> childs;
    public Node(bool _endWord = false){
        childs = new Dictionary<char,Node>();
        endWord = _endWord;
    }
}

public class MagicDictionary {
    Node head;

    public MagicDictionary() {
        head = new Node();
    }
    
    public void BuildDict(string[] dictionary) {
        foreach(var word in dictionary){
            var cur = head;
            foreach(var c in word){
                if(!cur.childs.ContainsKey(c))
                    cur.childs.Add(c,new Node());
                cur = cur.childs[c];
            }
            cur.endWord = true;
        }
    }
    
    public bool Search(string searchWord) {
        int n = searchWord.Length;
        bool dfs(int idx, Node node,int dismatch){
            if(dismatch > 1) return false;
            if(idx >= n && node.endWord && dismatch == 1)return true;
            if(idx >= n) return false;
            char c = searchWord[idx];
            bool res = false;
            foreach(var kv in node.childs){
                if(kv.Key == c)
                    res |= dfs(idx + 1,kv.Value,dismatch);
                else 
                    res |= dfs(idx + 1,kv.Value,dismatch + 1);
            }
            return res;
        }
        return dfs(0,head,0);
    }
}

```