# Dart accepted solution

**Author:** dharani_kanchanapalli
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-features-by-popularity/solutions/4257415/](https://leetcode.com/problems/sort-features-by-popularity/solutions/4257415/)

---

# Approach
Create frequency and index map.
Use a custom comparator to make the sorting time acceptable.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:collection';

class Solution {
  List<String> sortFeatures(List<String> features, List<String> responses) {
      Map<String,int> featureMap = {};
      Map<String,int> indexMap = {};
      Set setFeatures = features.toSet();
      for(int i=0;i<features.length;i++){
          featureMap.putIfAbsent(features[i],()=>0);
          indexMap.putIfAbsent(features[i],()=>i);
      }
      List<String> mentions = [];
      for(String response in responses){
            final res = response.split(' ').toSet();
            final inter = res.intersection(setFeatures);
            mentions.addAll(inter.toList());
      }
      for(String mention in mentions){
          featureMap[mention]=featureMap[mention]!+1;
      }
      final output = featureMap.entries.toList()..sort((a,b){
          int freq1 = featureMap[a.key]!;
          int freq2 = featureMap[b.key]!;
          if(freq1==freq2){
              int index1 = indexMap[a.key]!;
              int index2 = indexMap[b.key]!;
              return index1-index2;
          }else{
              return freq2-freq1;
          }
      });
      List<String> outputArr = [];
      for(var entry in output){
          outputArr.add(entry.key);
      }
      return outputArr;
  }
}
```