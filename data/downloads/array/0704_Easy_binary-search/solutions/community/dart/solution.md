# solution with 0(log n) time complexity

**Author:** Shaham_Ahammed
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-search/solutions/4569495/](https://leetcode.com/problems/binary-search/solutions/4569495/)

---



# Complexity
- Time complexity:
0(log n)

- Space complexity:
0(1)

# Code
```
class Solution {
  int search(List<int> nums, int target) {
    int start=0;
    int end = nums.length-1;
    while(start<=end){
        int middle = start+(end-start)~/2;
        if(nums[middle]==target){
            return middle;
        }else if(nums[middle]< target){
            start =middle+1;
        }else if(nums[middle]> target){
            end = end -1;
        }
    }
    return -1;
  }
}
```