# Short BFS

**Author:** madno
**Votes:** 3
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/992808/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/992808/)

---

```
class Solution {
    public boolean pyramidTransition(String bottom, List<String> l) {
        if (bottom.length() <= 1) return true;
        var idx = new HashMap<String,List<String>>();
        for(var s : l){
            idx.computeIfAbsent(s.substring(0,2),i->new ArrayList<>()).add(s);
        }
        var row = new ArrayList<Set<String>>();
        for(int i = 2; i <= bottom.length(); ++i){
            var top = new HashSet<>(idx.getOrDefault(bottom.substring(i-2,i),List.of()));
            if (top.size() == 0) return false;
            row.add(top);
        }
        while(row.size()>1){
            var preRow = new ArrayList<Set<String>>();
            for(int j = 1; j < row.size();++j){
                var last = new HashSet<String>();
                preRow.add(last);
                for(var left : row.get(j-1)){
                    for(var right : row.get(j)){
                        last.addAll(idx.getOrDefault(""+left.charAt(2)+right.charAt(2), List.of()));
                    }
                }
                if (last.size() == 0) return false;
            }            
            row = preRow;
        }
        return row.size() > 0;
    }
}
```