# Dart Solution

**Author:** SachinBhankhar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3666522/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3666522/)

---


# Code
```
class Solution {

  int calCost(List<int> nums, List<int> cost,int mid){
    int total =0;
    ///Calculating the cost
    for( var i=0; i< nums.length; i++){
      total += (nums[i] - mid).abs() * cost[i];
    }
    return total;
  }

  int minCost(List<int> nums, List<int> cost) {
     int totalMinCost = 0;
     final temp = [...nums];
     temp.sort();
     int low = temp.first;
     int high = temp.last;
     while(low<high){
        int mid = (low + high) ~/ 2;
        int costx = calCost(nums, cost, mid);
        int costy = calCost(nums, cost, mid + 1);
        if(costx < costy){
          high = mid;
          totalMinCost = costx;
        }else{
          low = mid + 1;
          totalMinCost = costy;
          
        }
     }
     return totalMinCost;
  }
}
```