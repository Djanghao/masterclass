# Dart: Hashtable + DFS

**Author:** Coaspe
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-squares/solutions/2950727/](https://leetcode.com/problems/word-squares/solutions/2950727/)

---

# Code
```
class Solution {
  List<List<String>> result = [];
  List<String> word_squre = [];
  Map<String, Set<String>> hashTable = {};
  int N = 0;
  List<List<String>> wordSquares(List<String> words) {
    N = words[0].length;

    setHashTable(words);

    for (var w in words){
      word_squre = [w];
      backtracking(1);
    }

    return result;
  }

  void backtracking(int step) {
    if (word_squre.length == N){
      result.add(word_squre.toList());
      return;
    }
    String prefix = "";
    for(var w in word_squre){
      prefix += w[step];
    }
    if (hashTable.containsKey(prefix)){
      for (var p in hashTable[prefix]!.toList()){
        word_squre.add(p);
        backtracking(step+1);
        word_squre.removeLast();
      }
    }
  }

  void setHashTable(List<String> words){
    for (var w in words){
      for (var s in [for (var i=1; i<w.length; i++) w.substring(0, i)]){
        if (!hashTable.containsKey(s)){
          hashTable[s] = Set();
        }
        hashTable[s]!.add(w);
      }
    }
  }
}
```