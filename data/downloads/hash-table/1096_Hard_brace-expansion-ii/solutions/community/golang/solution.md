# Simple Explained Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/brace-expansion-ii/solutions/3167134/](https://leetcode.com/problems/brace-expansion-ii/solutions/3167134/)

---


```
class Solution {
    int start = 0;
    public List<String> braceExpansionII(String expr) {
        Set<String> ret = braceExpansion(expr);
        List<String> retList = new ArrayList<>(ret);
        Collections.sort(retList);
        return retList;
    }
    
    private Set<String> braceExpansion(String expr){
        Set<String> ret = new HashSet<>();
        if(start >= expr.length()){
            return ret;
        }
        
        Set<String> cur = new HashSet<>();
        cur.add("");
        while(start < expr.length()){
            if(expr.charAt(start) == '{'){
                start += 1;
                cur = mul(cur, braceExpansion(expr));
            }
            else if(expr.charAt(start) == ','){
                ret = add(ret, cur);    // add all items of cur to ret
                cur = new HashSet<>();  // reset cur
                cur.add("");
                start += 1;
            }
            else if(expr.charAt(start) == '}'){
                ret = add(ret, cur);
                start += 1;
                return ret;
            }
            else{
                cur = append(cur, expr.charAt(start));
                start += 1;
            }
        }
        
        // add all items of cur to ret 
        ret = add(ret, cur);
        return ret;
    }
    
    Set<String> add(Set<String> set1, Set<String> set2){
        for(String item : set2){
            set1.add(item);
        }
        return set1;
    }
    
    Set<String> mul(Set<String> set1, Set<String> set2){
        Set<String> set3 = new HashSet<>();
        for(String item1 : set1){
            for(String item2 : set2){
                set3.add(item1 + item2);
            }
        }
        return set3;
    }
    
    Set<String> append(Set<String> bag, char c){
        Set<String> ret = new HashSet<>();
        for(String item : bag){
            ret.add(item + c);
        }
        return ret;
    }
}
```