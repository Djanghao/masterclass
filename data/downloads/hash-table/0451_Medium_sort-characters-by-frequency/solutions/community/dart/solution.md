# Simple Dart Solution

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/3562432/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/3562432/)

---


# Approach
Place all characters from the string into a hashmap with their associated occurences as the value. Then from there take out all of the integers from the map and place them into a list. Sort the list to find how many times each freqency of a value occurs. Then iterate through the map again this time searching for the most common character that has not been taken out of the hashmap. Once found place it in the new string multiplying it by the number of occurences it had in the original string.
# Complexity
- Time complexity:
O(n^2) - This is only if all characters occur a different number of times thus forcing iteration of the entire map every time.

# Code
```
class Solution {
  String frequencySort(String s) {
      Map<String, int> vals = {};
      List<int> usages_list = [];
      for(int i = 0 ; i < s.length ; ++i){
          vals[s[i]] = (vals[s[i]] ?? 0 ) + 1;
      }
      for(var entry in vals.entries){
        usages_list.add(entry.value);
      }
      usages_list.sort();
      usages_list = usages_list.reversed.toList();
      int current_itr = 0;
      String ret_str = "";
      while(current_itr < usages_list.length){
        for(var entry in vals.entries){
          if(entry.value == usages_list[current_itr]){
            ret_str += entry.key * usages_list[current_itr];
            current_itr += 1;
            if(current_itr >= usages_list.length){
              break;
            }
          }
        }
      }

      return ret_str;
  }
}
```