# JAVA solution

**Author:** Fate7
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/1387776/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/1387776/)

---

```
class Solution {
	
    public static int findLUSlength(String[] strs) {
    	
    	TreeMap<String, Integer> map = new TreeMap<>(
    			new Comparator<String>() {

    				@Override
    		        public int compare(String s1, String s2) {
    		            if (s1.length() > s2.length()) {
    		                return -1;
    		            } else if (s1.length() < s2.length()) {
    		                return 1;
    		            } else {
    		                return s1.compareTo(s2);
    		            }
    		        }
    	    		
    			}
    			);
    	
    	fillMap(map, strs);
    	
    	
    	Set<String> keys = map.keySet();
    	String firstKey = keys.stream().findFirst().get();
    	if(map.get(firstKey) == 1)
    		return firstKey.length();
    	
    	for(String key1 : keys) {
    		if(map.get(key1)>1)
    			continue;
    		boolean breaked = false;
    		for(String key2 : keys) {
    			if(key1 == key2) {
    				break;
    			}
    			if(isSubsequence(key1, key2)) {
    				breaked = true;
    				break;
    			}
    		}
    		if(!breaked)
    			return key1.length();

    		
    	}    	
    	return -1;        
    }
    
    public static void fillMap(TreeMap<String, Integer> map, String[] strs) {
    	
    	for(String str : strs)
    		if(map.containsKey(str))
    			map.put(str, map.get(str)+1);
    		else
    			map.put(str, 1);   	
    	
    }
    
    public static boolean isSubsequence(String s1, String s2) {
    	int i=0;
    	int j=0;
    	StringBuilder sb = new StringBuilder("");
    	while(j<s2.length() && i<s1.length()) {
    		if(s1.charAt(i) == s2.charAt(j)) {
    			sb.append(s1.charAt(i));
    			if(sb.toString().equals(s1))
    				return true;    
    			i++;
    			
    		}
    		
    		
			j++;
    	}
    	
    	return false;
    	
    }
}
```