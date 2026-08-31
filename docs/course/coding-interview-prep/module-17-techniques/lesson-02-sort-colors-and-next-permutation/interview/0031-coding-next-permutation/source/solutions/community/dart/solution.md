# 100% beats Dart

**Author:** user5429LL
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-permutation/solutions/6022992/](https://leetcode.com/problems/next-permutation/solutions/6022992/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
First Start From The End of the Array Find the the value where 
check last index and last index previous index if nums[i]<nums[i-1]
then Stop the Loop and initialize k value,Then firstValue to Keep in Track of the value at which it is Smaller then prevoius index if we dont get any index k is assigned to -1 so that it tells us that it is in descending order so if k=-1 then reverse it or else Search the Value of the kth Index which is firstValue  here to the first greater value from last if the firstValue < nums[i] then swap these two elements and then after kth Index whichever values are remaining reverse that values like for ex-[9,4,3,9,8,9,6]
the next permutation is [9,4,3,9,9,8,6] here k will be 4 after kth index reverse the values then it will be [9,4,3,9,9,6,8]-This is the Final Output.

# Complexity
- Time complexity:O(N)

- Space complexity:O(N)

# Code
```dart []
class Solution {
  void nextPermutation(List<int> nums) {
   int k = 0;
    int firstValue = 0;
    int findIndexAtHighValue = 0;
    List<int> reverse = nums;
    for (int i = nums.length - 1; i > 0; i--) {
      if (nums[i] > nums[i - 1]) {
        k = i - 1;
        firstValue = nums[i - 1];
        break;
      }
      else{
        k=-1;
      }
    }

    if (k == -1) {
      int startFromK = 0;
      int lastPointer = nums.length - 1;
      while (startFromK < lastPointer) {
        int temp = nums[lastPointer];
        nums[lastPointer] = nums[startFromK];
        nums[startFromK] = temp;
        lastPointer--;
        startFromK++;
      }
    } else {
      for (int i = nums.length - 1; i > 0; i--) {
        if (firstValue < nums[i]) {
          findIndexAtHighValue = i;
          int temp = nums[findIndexAtHighValue];
          nums[findIndexAtHighValue] = nums[k];
          nums[k] = temp;
          break;
        }
      }

      int startFromK = k + 1;
      int lastPointer = nums.length - 1;

      while (startFromK < lastPointer) {
        int temp = nums[lastPointer];
        nums[lastPointer] = nums[startFromK];
        nums[startFromK] = temp;
        lastPointer--;
        startFromK++;
      }
    }


  } 
}
```