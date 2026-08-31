# easy dart solution with 0(n) time complexity

**Author:** Shaham_Ahammed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/5082209/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/5082209/)

---



# Code
```
class Solution {
  int nearestValidPoint(int x, int y, List<List<int>> points) {
    int? min;
    int? pos;
    for(int i=0;i<points.length;i++){
        int first=points[i][0];
        int second = points[i][1];
        if(x==first || y==second){
            int value=(first-x).abs()+(second-y).abs();
            if(min!=null){
                if(min>value){
                    min=value;
                    pos=i;
                }
            }else{
                pos=i;
                min=value;
            }
        }
    }
    if(pos==null){
        return -1;
    }else{
        return pos;
    }
  }
}
```