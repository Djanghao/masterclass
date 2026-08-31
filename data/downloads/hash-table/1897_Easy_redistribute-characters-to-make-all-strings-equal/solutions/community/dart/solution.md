# Dart Solution using map

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4478143/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4478143/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
If the list has one word we return true;
It takes the list as one word name 'w', if 'w' isn't a multiple of words.length that means the length of the words isn't the same, so we return false without checking their contents.
We create a map that has the value of each letter, if any value isn't a multiple of words.length that means we can chare the same character in all the words, so we return false
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class Solution {
  bool makeEqual(List<String> words) {
      if(words.length <= 1) return true;
      String w = words.join();
      if(w.length % words.length!=0) return false;
      Map<String,int> map = {};
      for(int i=0;i<w.length;i++){
          map[w[i]]=(map[w[i]]??0)+1;
      }
      for(var entry in map.entries){
          if(entry.value % words.length !=0) return false;
      }
      return true;
    
  }
}
```