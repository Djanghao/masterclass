# Java UnionFind Solution

**Author:** jianhuilin1124
**Votes:** 10
**Link:** [https://leetcode.com/problems/synonymous-sentences/solutions/828731/](https://leetcode.com/problems/synonymous-sentences/solutions/828731/)

---

```
class UnionFind {
    Map<String, String> parent;
    Map<String, Integer> rank;
    
    public UnionFind(){
        parent = new HashMap<>();
        rank = new HashMap<>();
    }
    
    public String find(String u){
        if (!parent.get(u).equals(u)){
            parent.put(u, find(parent.get(u)));
        }
        return parent.get(u);
    }
    
    public void union(String u, String v){
        String pu = find(u);
        String pv = find(v);
        rank.putIfAbsent(pu, 0);
        rank.putIfAbsent(pv, 0);
        if (rank.get(pu) > rank.get(pv)){
            rank.put(pu, rank.get(pu) + 1);
            parent.put(v, pu);
        } else {
            rank.put(pv, rank.get(pv) + 1);
            parent.put(u, pv);
        }
    }
    
    public boolean isConnect(String u, String v){
        parent.putIfAbsent(u, u);
        parent.putIfAbsent(v, v);
        return find(u).equals(find(v));
    }
}

class Solution {
    public List<String> generateSentences(List<List<String>> synonyms, String text) {
        Set<String> set = new HashSet<>();
        String[] texts = text.split(" ");
        List<String> res = new ArrayList<>();
        UnionFind uf = new UnionFind();
        for (List<String> synonym : synonyms){
            String a = synonym.get(0);
            String b = synonym.get(1);
            if (!uf.isConnect(a, b)){
                uf.union(a, b);
            }
            set.add(a);
            set.add(b);
        }
        Map<String, Set<String>> group = new HashMap<>();
        for (String s : texts){
            if (set.contains(s)){
                group.putIfAbsent(s, new HashSet<>());
                for (String str : set){
                    if (uf.isConnect(s, str)){
                        group.get(s).add(str);
                    }
                }
            }
        }
        dfs(texts, 0, group, "", res);
        Collections.sort(res);
        return res;
    }
    
    private void dfs(String[] texts, int index, Map<String, Set<String>> group, String path, List<String> res){
        if (index == texts.length){
            res.add(path);
            return;
        }
        String text = texts[index];
        if (texts.length - index > 1) {
            if (group.containsKey(text)){
                for (String t : group.get(text)){
                    dfs(texts, index + 1, group, path + t + " ", res);
                }
            } else {
                dfs(texts, index + 1, group, path + text + " ", res);
            }
        } else {
            if (group.containsKey(text)){
                for (String t : group.get(text)){
                    dfs(texts, index + 1, group, path + t, res);
                }
            } else {
                dfs(texts, index + 1, group, path + text, res);
            }
        }

    }
}
```