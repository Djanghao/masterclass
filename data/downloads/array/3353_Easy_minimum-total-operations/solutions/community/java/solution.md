# Java solution with proper naming, easy to understand

**Author:** aadlakha
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-operations/solutions/6130264/](https://leetcode.com/problems/minimum-total-operations/solutions/6130264/)

---

# Intuition
Only equal numbers can become same again after addition or substraction of a common number "k" here. Because there is a restriction of prefix, we can only look for "consecutive" numbers that are same. Try out different cases to see the output, it helps you understand the problem better.

# Approach
Count the consecutive equal numbers because all other numbers will require atleast one operation. 

countOfDuplicates is only counting the duplicates, meaning for 4, 4, 4 it will count as 2 duplicates, because atleast one operation is required to make all of them equal. Only last set of consecutive elemnents/single element in the array are not required to be transformed.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```java []
class Solution {
    public int minOperations(int[] nums) {
       int currentNumber = nums[0];
       int countOfDuplicates = 0;
       for (int i = 1; i < nums.length; i++) {
          if (currentNumber == nums[i]) {
            countOfDuplicates++;
            // System.out.println(countOfDuplicates + "  shit " + nums[i]);
          } 

          currentNumber = nums[i];
          
       }

       return nums.length - countOfDuplicates - 1 ;
    }
}
```