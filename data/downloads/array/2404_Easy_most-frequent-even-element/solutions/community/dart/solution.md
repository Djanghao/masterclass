# 🟢🔴🟢 Beats 100.00%👏 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/5985999/](https://leetcode.com/problems/most-frequent-even-element/solutions/5985999/)

---

```dart []
class Solution {
  int mostFrequentEven(List<int> nums) {
    
    Map<int,int> frequents = {};
    for(int num in nums) {
        if(num.isEven){
            frequents.update(num, (value)=> value+1, ifAbsent: ()=> 1);
        }
    }

    if(frequents.isEmpty) return -1;
    int maxFreq = frequents.values.reduce((a,b)=> a > b ? a : b);
    int minimumElement = double.maxFinite.toInt();
    frequents.forEach((key,value){
        if(value == maxFreq){
            minimumElement = min(key,minimumElement);
        }
    });
    return minimumElement;

  }
}
```