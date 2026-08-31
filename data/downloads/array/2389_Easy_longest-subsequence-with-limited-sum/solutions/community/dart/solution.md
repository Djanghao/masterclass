# 🟢🔴🟢 Beats 100.00%👏 Binary Search Algorithm 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/5981870/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/5981870/)

---

# Code
```
class Solution {
  List<int> answerQueries(List<int> nums, List<int> queries) {
    nums.sort();
   
    for(int i = 1; i < nums.length; i++){
        nums[i] = nums[i-1] + nums[i];
    }

    List<int> res = [];

    for(int query in queries){
        int low = 0;
        int high = nums.length;
        while(low < high){
            int mid = (low + high) ~/ 2;
            if(nums[mid] <= query){
                low = mid+1;
            }else{
                high = mid;
            }
        }
        res.add(low);
    }
    
    return res;

  }
}
```