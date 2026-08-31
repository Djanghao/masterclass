# BEATS 100% SIMPLE DART solution, only code

**Author:** Mohamed_Sadeck
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/5075930/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/5075930/)

---

# Code
```
class Solution {
  int maximumBags(List<int> capacity, List<int> rocks, int addRocks) {
    List<int> needs = [];
    int ans=0;
    for(int i=0;i<rocks.length;i++){
        needs.add(capacity[i]-rocks[i]);
    }
    needs.sort();
    for(int i=0;i<needs.length && addRocks>0;i++){
        if(needs[i]>0){
            if(needs[i]>addRocks) return ans;
            addRocks-=needs[i];
        }
        ans++;
    }
    return ans;
  }
}
```