# 🟢🔴🟢 Beats 100.00%👏 Best Approach 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/6029051/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/6029051/)

---

```dart []
class Solution {
  List<List<int>> mergeArrays(List<List<int>> nums1, List<List<int>> nums2) {

    List<List<int>> ans = [];
    for(List<int> num1 in nums1){
        for(List<int> num2 in nums2){
            if(num1.first == num2.first){
                ans.add([num1.first, (num1.last + num2.last)]);
            }
        }
    }

    List<int> ids = ans.map((list)=> list.first).toList();
    
    for(List<int> num1 in nums1){
        if(!ids.contains(num1.first)) ans.add(num1);
    }

    for(List<int> num2 in nums2){
        if(!ids.contains(num2.first)) ans.add(num2);
    }

    ans.sort((a,b)=> a.first.compareTo(b.first));
    return ans;

  }
}
```