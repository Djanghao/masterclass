# 🟢🔴🟢 Beats 100.00%👏 Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/6126355/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/6126355/)

---

```
class Solution {
  int distributeCandies(int n, int limit) {

    int count = 0;
    for(int i = 0; i <= limit; i++){
        for(int j = 0; j <= limit; j++){
            for(int k = 0; k <= limit; k++){
                if(i + j + k == n) count++;
            }
        }
    }
    return count;

  }
}
```