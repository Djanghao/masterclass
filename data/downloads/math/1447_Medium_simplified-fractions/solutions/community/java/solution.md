# Easy to understand (Using set) [java] [10 Lines]

**Author:** ismCodeNinja
**Votes:** 5
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/635889/](https://leetcode.com/problems/simplified-fractions/solutions/635889/)

---

1. Calculate for every pair of (i, j) where 1 <= j <= n &&  1 <= i < j
2. check if the double quotient is in set
3. add if not present

```
class Solution {
    public List<String> simplifiedFractions(int n) {
        Set<Double> set = new HashSet<>();
        List<String> result = new ArrayList<>();
        for(int i = 2; i <= n ; i++) {
            for(int j = 1; j < i; j++) {
            if(set.add((double)j / i)){
                result.add(Integer.toString(j) + "/" + i);
            }
            }
        }
        return result;
    }
}
```