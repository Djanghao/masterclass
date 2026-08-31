# Finding Minimum Subsequence in Non-Increasing Order using Dart GOAT 🐐 language.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/5842523/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/5842523/)

---

# Intuition
- **From the title it is saying minimum so I decided to sort the given list and find necessary amount of numbers to fit the requierments. Thr reason for sorting is this way it will be easy to find the greatest values and with that greatest values we can achieve minimum subsequece.**

# Approach
1. First thing that I did were creating a new list to store necessary amount of numbers that satisfy the requirements and sorted the given argument list.
2. After that I used for() loop to iterate through the given list backwards and in each iteration I added iterated value to the list that I created in the first step and removed that value from argument list. Next, I checked if sum of argument list is less than the sum of values in list that I created in the first step. I continued the process until the sum of values of the list that I created greater than the sum of values of given argument list.
3. At last I sorted the list that I created in the first step and the reason to did was, we needed non-increasing order. After all, I returned that list.


# Code
```dart []
class Solution {
  List<int> minSubsequence(List<int> nums) {

  List<int> list = [];
  nums.sort((a, b) => a.compareTo(b));

  for(int i = nums.length-1; i >= 0; i--){
    list.add(nums[i]);
    nums.removeAt(i);

    int sum = 0;
    int sum2 = 0;
    for(int elem in nums){
      sum+=elem;
    }
    for(int elem in list){
      sum2+=elem;
    }
    if(sum < sum2){
      break;
    }
  }

  list.sort((a, b) => b.compareTo(a));
  return list;
}
}
```