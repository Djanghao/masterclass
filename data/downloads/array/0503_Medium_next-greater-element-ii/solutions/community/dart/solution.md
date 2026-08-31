# Simple solution in dart

**Author:** salman_kv
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/4760778/](https://leetcode.com/problems/next-greater-element-ii/solutions/4760778/)

---


# Code
```
class Solution {
  List<int> nextGreaterElements(List<int> nums) {
    int storeIndex=0;
    List<int> returnArray=[];
    for(int i=0;i<nums.length;i++){
        storeIndex=i;
        int j=i;
        if(j==nums.length-1){
            j=0;
        }
        else{
            j++;
        }
        bool check=false;
        while(j!=storeIndex){
            if(nums[storeIndex]<nums[j]){
                check=true;
                returnArray.add(nums[j]);
                break;
            }
            else if(j==nums.length-1){
                j=0;
            }
            else{
                j++;
            }
        }
        if(!check){
            returnArray.add(-1);
        }
    }
    return returnArray;
  }
}
```