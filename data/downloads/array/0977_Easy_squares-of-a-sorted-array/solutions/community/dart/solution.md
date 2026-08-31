# Two pointers O(n) with explanation

**Author:** Lainaaa
**Votes:** 4
**Link:** [https://leetcode.com/problems/squares-of-a-sorted-array/solutions/3355848/](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/3355848/)

---

# Approach
There are two solutions here, squaring each number if we don't have negative numbers and two pointers.
Firstly check if you have negative numbers, if not just square each number. 

After that create two points from every side(left and right). Start to iterate from both sides at one moment and check what value is bigger, add bigger value to an result array. Because you were adding values to dicrease order - reverse it.

# Complexity
- Time complexity:
O(n)

# Code
```
class Solution {
  List<int> sortedSquares(List<int> nums) {
//check for negative numbers
    if (nums[0] >= 0){
        //just square each number
      for (var i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
      }
      return nums;
    }else{
        //After that create two points from every side(left and right)
        var left = 0;
        var right = nums.length - 1;
        List<int> array = [];
        /Start to iterate from both sides at one moment
        while(left <= right){
          var leftValue = nums[left] * nums[left];
          var rightValue = nums[right] * nums[right];
            //check what value is bigger
          if(leftValue >= rightValue){
            //add bigger value to an result array.
            array.add(leftValue);
            left++;
          }else{
            //add bigger value to an result array.
            array.add(rightValue);
            right--;
          }
        }
      return array.reversed.toList();
  }
      return [0];
}
}
```