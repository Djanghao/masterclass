# Java answer

**Author:** JSTM2022
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/1683806/](https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/1683806/)

---

Slight variation of answer key:
```
class Solution {
    public Node findRoot(List<Node> tree) {
        HashSet<Node> hs = new HashSet();
        for(Node n : tree){
            for(Node child : n.children){hs.add(child); }
        }
        for(Node n : tree){
            if(!hs.contains(n)){return n;}
        }
        return null;
    }
}
```