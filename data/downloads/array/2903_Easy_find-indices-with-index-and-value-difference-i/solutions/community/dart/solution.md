# easy dart soltuion

**Author:** Shaham_Ahammed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/5099142/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/5099142/)

---



# Code
```
class Solution {
  List<int> findIndices(List<int> nums, int indexDifference, int valueDifference) {
    for(int i=0;i<nums.length-indexDifference;i++){
        for(int j=indexDifference+i;j<nums.length;j++){
            int number=(nums[i]-nums[j]).abs();
            if(number>=valueDifference){
                return [i,j];
            }
        }
    }
    return [-1,-1];
  }
}
```