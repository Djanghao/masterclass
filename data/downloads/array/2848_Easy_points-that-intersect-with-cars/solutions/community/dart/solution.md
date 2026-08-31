# dart solution using set

**Author:** Shaham_Ahammed
**Votes:** 0
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/5086559/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/5086559/)

---



# Code
```
class Solution {
  int numberOfPoints(List<List<int>> nums) {
  Set<int>points={};
  for(int i=0;i<nums.length;i++){
    for(int j=nums[i][0];j<=nums[i][1];j++){
        points.add(j);
    }
  }
  return points.length;
  }
}
```