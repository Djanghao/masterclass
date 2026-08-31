# Dart solution using hash table

**Author:** tinhhuynh
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/4570951/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/4570951/)

---

The approach involves iterating through the list of words, generating a count of each letter's frequency for each word, and checking if the current word's letter frequency count is the same as the previous one. If they are different, the current word is added to the result list.

**Time complexity:** O(m * n), where m is the number of words and n is the average length of a word
**Space complexity:** O(m * n) due to the storage of word counts for each word in the result list.

# Code
```
class Solution {
  List<String> removeAnagrams(List<String> words) {
    final List<String> res = [];
    List<int> prev = [];
    for(int i = 0; i < words.length; i++){
        final count = generateCount(words[i]);
        if(prev.isEmpty || !listEquals(prev, count)){
            res.add(words[i]);
        }
        prev = count;
    }
    return res;
  }
  
  List<int> generateCount(String s){
    final arr = List.filled(26, 0);
    for(int i = 0; i < s.length; i++){
        arr[s[i].codeUnitAt(0) - 'a'.codeUnitAt(0)]++;
    }
    return arr;
  }

  bool listEquals(List<int> a, List<int> b){
      if(a.length != b.length) return false;
      final count = {};
      for(int i = 0; i < a.length; i++){
          if(a[i] != b[i]) return false;
      }
      return true;
  }
}
```