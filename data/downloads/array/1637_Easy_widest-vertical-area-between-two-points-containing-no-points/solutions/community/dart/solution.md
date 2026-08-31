# Simple DART solution, BEATS 100%.

**Author:** Mohamed_Sadeck
**Votes:** 1
**Link:** [https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4435349/](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4435349/)

---


# Code
```
class Solution {
  int maxWidthOfVerticalArea(List<List<int>> points) {
    if(points.length < 2) return 0;
    List<int> sortedX = points.map((point)=>point.first).toList();
    sortedX.sort();
    return firstLargeDifference(sortedX);
  }
  int firstLargeDifference(List<int> list){
      int maxDiff=0;
      for(int i=1;i<list.length;i++){
          int diff=list[i]-list[i-1];
          if(diff>maxDiff) maxDiff=diff;
      }
      return maxDiff;
  }
}
```