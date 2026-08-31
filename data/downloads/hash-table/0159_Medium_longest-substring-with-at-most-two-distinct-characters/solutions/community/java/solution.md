# Accepted Java O(n) solution with explanation

**Author:** jeantimex
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/49777/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/49777/)

---

      public int lengthOfLongestSubstringTwoDistinct(String s) {
        if (s == null) return 0;
            
        int i = 0; // slow pointer
        int j = 0; // fast pointer
        int max = 0;
        
        // use a map to track the char and its count
        Map<Character, Integer> map = new HashMap<Character, Integer>();
        
        while (j < s.length()) {
          char ch = s.charAt(j);
          
          if (map.size() < 2 || map.containsKey(ch)) {
            // less than 2 distinct chars or the char is in the map already
            // put it to the map and update the count
            map.put(ch, map.containsKey(ch) ? map.get(ch) + 1: 1);
            
            // update the max
            max = Math.max(max, ++j - i);
          } else {
            // we keep removing the old chars from the map
            // till we only have one distinct char
            while (map.size() == 2) {
              ch = s.charAt(i++);
              
              if (map.get(ch) > 1)
                map.put(ch, map.get(ch) - 1);
              else
                map.remove(ch);
            }
          }
        }
        
        return max;
      }