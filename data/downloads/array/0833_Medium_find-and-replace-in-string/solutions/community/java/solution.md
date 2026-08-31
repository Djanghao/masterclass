# Simple java solution using hashmap

**Author:** raghu6306766
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/1561430/](https://leetcode.com/problems/find-and-replace-in-string/solutions/1561430/)

---

class Solution {
   
	   public String findReplaceString(String s, int[] indices, String[] sources, String[] targets) {
			Map<Integer , Pair> replacements = new TreeMap<>();
			StringBuilder res = new StringBuilder();

			for(int i = 0 ; i < indices.length ; i++)
				if(s.substring(indices[i]).startsWith(sources[i])) 
					replacements.put(indices[i] , new Pair(targets[i] , sources[i].length()-1));

			for(int i = 0 ; i < s.length() ; i++){
				if(replacements.containsKey(i)){
					Pair p = replacements.get(i);
					res.append(p.getKey());
					i += (int)p.getValue();
				} 
				else
					res.append(s.charAt(i));
			}

			return res.toString();
		}
}