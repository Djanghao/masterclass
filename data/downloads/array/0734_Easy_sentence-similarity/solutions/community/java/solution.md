# [java] two way binded hashmap + linear scan

**Author:** consious_coder
**Votes:** 2
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/1399760/](https://leetcode.com/problems/sentence-similarity/solutions/1399760/)

---

```
class Solution {
    public boolean areSentencesSimilar(String[] a, String[] b, List<List<String>> similarPairs) {
        if(a.length != b.length)  return false;
        
        Map<String,List<String>> map = new HashMap<>();
        
        
        for(List<String> pair: similarPairs){
            String s1 = pair.get(0);
            String s2 = pair.get(1);
            
            
            if(map.containsKey(s1) == false){
                map.put(s1, new ArrayList<String>());
            }
            if(map.containsKey(s2) == false){
                map.put(s2, new ArrayList<String>());
            }
            map.get(s1).add(s2);
            map.get(s2).add(s1);
            
        }
        
        for(int i=0;i<a.length;i++){
            
            if(a[i].equals(b[i])) continue;
               
            if(map.containsKey(a[i])){
                if(map.get(a[i]).contains(b[i]) == false) return false;
            }else{
                return false;
            }
          
            
        }
        return true;
        
    }
}
```