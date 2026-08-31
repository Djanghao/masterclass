# 🟢🔴🟢 Beats 100.00%👏 Best Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/6079116/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/6079116/)

---

```
class Solution {
  int minimumBoxes(List<int> apple, List<int> capacity) {

    capacity.sort((a,b)=> b.compareTo(a));
    int count = 0;
    int sum = apple.fold(0,(a,b)=> a + b);
    for(int i = 0; i < capacity.length; i++){
        if(sum <= 0) break;
        sum -= capacity[i];
        count++; 
    }
    return count;
    
  }
}
```