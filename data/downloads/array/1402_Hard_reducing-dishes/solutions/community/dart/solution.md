# Efficient Solution in Dart for Reducing Dishes with Explanation ✅

**Author:** raagulvignesh
**Votes:** 1
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/5402108/](https://leetcode.com/problems/reducing-dishes/solutions/5402108/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We have a list of dish satisfactions where each satisfaction value indicates how much pleasure you get from eating that dish. The challenge is to maximize the total satisfaction you get from eating all dishes, considering that each dish takes a certain amount of cumulative time to prepare and eat.

# Approach
<!-- Describe your approach to solving the problem. -->
1 - Sorting for Optimization : 
```
satisfaction.sort();
```
2 - Calculating Maximum Satisfaction :
```
for (int i = satisfaction.length - 1; i >= 0; i--) {
        cTime += satisfaction[i]; 
        tSum += cTime;
       }
```
3 - Cumulative Time and Total Satisfaction :
```
mSum = tSum > mSum ? tSum : mSum;

```

4 - Returning the Result :
```
return mSum;
```

# Complexity
- Time complexity: O(Nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: O(1) 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int maxSatisfaction(List<int> satisfaction) {
   satisfaction.sort();
   int mSum = 0;
   int tSum = 0;
   int cTime = 0;
      for (int i = satisfaction.length - 1; i >= 0; i--) {
        cTime += satisfaction[i]; 
        tSum += cTime;
        mSum = tSum > mSum ? tSum : mSum;
       }
      return mSum;
    }
}
```