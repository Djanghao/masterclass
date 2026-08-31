# Share my Java solution

**Author:** jeantimex
**Votes:** 13
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/73209/](https://leetcode.com/problems/unique-word-abbreviation/solutions/73209/)

---

The idea is pretty straightforward, we use a map to track a set of words that have the same abbreviation. The word is unique when its abbreviation does not exist in the map or it's the only one in the set.

    public class ValidWordAbbr {
      Map<String, Set<String>> map = new HashMap<>();
      
      public ValidWordAbbr(String[] dictionary) {
        // build the hashmap
        // the key is the abbreviation
        // the value is a hash set of the words that have the same abbreviation
        for (int i = 0; i < dictionary.length; i++) {
          String a = abbr(dictionary[i]);
          Set<String> set = map.containsKey(a) ? map.get(a) : new HashSet<>();
          set.add(dictionary[i]);
          map.put(a, set);
        }
      }
      
      public boolean isUnique(String word) {
        String a = abbr(word);
        // it's unique when the abbreviation does not exist in the map or
        // it's the only word in the set
        return !map.containsKey(a) || (map.get(a).contains(word) && map.get(a).size() == 1);
      }
         
      String abbr(String s) {
        if (s.length() < 3) return s;
        return s.substring(0, 1) + String.valueOf(s.length() - 2) + s.substring(s.length() - 1);
      }
    }