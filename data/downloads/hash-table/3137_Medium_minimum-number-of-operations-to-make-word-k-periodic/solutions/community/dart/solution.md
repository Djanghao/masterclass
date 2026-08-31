# 🟢🔴🟢 Beats 100.00%👏 Easiest Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/6065593/](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/6065593/)

---

# Code
```dart []
class Solution {
  int minimumOperationsToMakeKPeriodic(String word, int k) {

    Map<String,int> freq = {};
    for(int i = 0; i < word.length; i += k){
        String kString = word.substring(i,i+k);
        freq.update(kString,(value)=> value+1,ifAbsent:()=>1);
    }

    return freq.values.fold(0,(a,b)=> a + b) - freq.values.reduce((a,b)=> a > b ? a : b);

  }
}
```