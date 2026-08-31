# Java Simple Fast

**Author:** sapienhwaker
**Votes:** 10
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/887042/](https://leetcode.com/problems/subdomain-visit-count/solutions/887042/)

---

```
class Solution {
    public List<String> subdomainVisits(String[] cpdomains) {
        HashMap<String, Integer> map = new HashMap<>();
        
        for(String s: cpdomains){
            String[] array = s.split(" ");
            int num = Integer.parseInt(array[0]);
            int len = array[1].length();
            
            if(map.containsKey(array[1])){
                map.put(array[1], map.get(array[1]) + num);
            }else{
                map.put(array[1], num);
            }
            
            for(int i = 0; i < len; i++){
                if(array[1].charAt(i) == '.'){
                    String temp = array[1].substring(i+1, len);
                    if(map.containsKey(temp)){
                            map.put(temp, map.get(temp) + num);
                        }else{
                            map.put(temp, num);
                        }
                }
            }
        }
        
        List<String> ans = new LinkedList<>();
        
        for(Map.Entry<String, Integer> entry: map.entrySet()){
            String num = entry.getValue() + "";
            ans.add(num + " " + entry.getKey());
        }
        
        return ans;
    }
}
```