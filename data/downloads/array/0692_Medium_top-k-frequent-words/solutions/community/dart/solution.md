# Simple Dart Solution

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/3569383/](https://leetcode.com/problems/top-k-frequent-words/solutions/3569383/)

---


# Approach
Given a list of words return the k most frequently used words in the list. If there are multiple words used the same number of times return them in lexographical order. To do this I first created a map that stored how many times a given word was used. Then from there I created a sorted list that stored the number of times each word was used and sorted it. I then created a list for each number of occurences meaning if a word occurs twice then there should be two lists one for words that happen one time and one for words that happen twice. Then I iterated through these lists to find the most common elements.



# Code
```
class Solution {
  List<String> topKFrequent(List<String> words, int k) {
      Map<String,int> vals = {};
      for(int i = 0 ; i < words.length ; ++i){
          vals[words[i]] = (vals[words[i]] ?? 0) + 1;
      }
      List<int> usages = [];
      for(var entry in vals.entries){
        usages.add(entry.value);
      }
      usages.sort();
      List<String> return_list = [];
      int distinct = usages[usages.length - 1] - usages[0];
      int offset = usages[0];
      List<List<String>> lists = [];
      for(int i = 0 ; i <= distinct ; ++i){
        lists.add([]);
      }
      for(var entry in vals.entries){
        lists[entry.value - offset].add(entry.key);
      }
      for(int i = lists.length - 1; i >= 0 && return_list.length < k; --i){
        lists[i].sort(); 
        for(int x = 0 ; x < lists[i].length && return_list.length < k ; ++x){
          return_list.add(lists[i][x]);
        }
      }
      return return_list;
  }
}
```