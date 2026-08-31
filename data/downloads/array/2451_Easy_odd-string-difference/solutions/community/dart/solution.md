# 🟢🔴🟢 Beats 100.00%👏 Dart Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/5985204/](https://leetcode.com/problems/odd-string-difference/solutions/5985204/)

---

```dart []
class Solution {
  String oddString(List<String> words) {

    Map<String,String> wordMap = {};
    Map<String,int> diffMap = {};

    for(int i = 0; i < words.length; i++){
        List<int> positions = words[i].codeUnits;
        String diff = "";
        for(int j = 0; j < positions.length-1; j++){
            diff += (positions[j+1] - positions[j]).toString();            
        }
        wordMap.addEntries({words[i]:diff}.entries);
        diffMap.update(diff,(value)=> value + 1, ifAbsent:()=> 1);
    }
    
    if(diffMap.length == 1) return words.last; 
    String uniqueKey = diffMap.entries.where((e)=> e.value == 1).first.key;
    String res = wordMap.entries.where((e)=> e.value == uniqueKey).first.key;
    return res;
  }
}
```