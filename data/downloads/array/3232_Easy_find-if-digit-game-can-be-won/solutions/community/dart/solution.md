# Detailed Explanation of Two Scenarios - 100% beats

**Author:** muhammadfarhankt
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5546359/](https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5546359/)

---

# Summary
1. Calculate the sum of all single-digit numbers in the array.
2. Calculate the sum of all double-digit numbers in the array.
3. Compare the two sums. Alice can win if either of these sums is greater than the other.

# Approach
1. Initialize two variables to store the sums of single-digit and double-digit numbers.
2. Traverse through the array and update the sums accordingly:
    2.1 If a number is less than 10, add it to the single-digit sum.
    2.2 If a number is 10 or greater, add it to the double-digit sum.
**3.  Two Scenarios:**
    **3.1 If singleSum is equal to doubleSum:** In this case, Alice cannot win because the sums are equal, and the condition for winning (strictly greater sum) is not met.
    **3.2 If singleSum is not equal to doubleSum:** Alice can win because the sums are different, and she can always choose the larger sum for herself.

# Complexity
- Time complexity: O(n) where n is the length of the array because we need to process each element once.

- Space complexity:  O(1), as we are using a fixed amount of extra space regardless of the input size.

# Code

```Java []
class Solution {
    public boolean canAliceWin(int[] nums) {
        int singleSum = 0, doubleSum = 0;
        for (int num : nums) {
            if (num < 10) {
                singleSum += num;
            } else {
                doubleSum += num;
            }
        }
        return singleSum != doubleSum;
    }
}
```
```C++ []
class Solution {
public:
    bool canAliceWin(std::vector<int>& nums) {
        int singleSum = 0, doubleSum = 0;
        for (int num : nums) {
            if (num < 10) {
                singleSum += num;
            } else {
                doubleSum += num;
            }
        }
        return singleSum != doubleSum;

    }
};
```
```Python []
class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        singleSum = 0
        doubleSum = 0
        for num in nums:
            if num < 10:
                singleSum += num
            else:
                doubleSum += num
        return singleSum != doubleSum

```
```Javascript []
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singleSum = 0, doubleSum = 0;
    for (let num of nums) {
        if (num < 10) {
            singleSum += num;
        } else {
            doubleSum += num;
        }
    }
    return singleSum != doubleSum;
};
```
```Dart []
class Solution {
  bool canAliceWin(List<int> nums) {
    int singleSum = 0, doubleSum = 0;
    for (int num in nums) {
      if (num < 10) {
        singleSum += num;
      } else {
        doubleSum += num;
      }
    }
    return singleSum != doubleSum;
  }
}
```
```Golang []
func canAliceWin(nums []int) bool {
    singleSum, doubleSum := 0, 0
    for _, num := range nums {
        if num < 10 {
            singleSum += num
        } else {
            doubleSum += num
        }
    }
    return singleSum != doubleSum;
}
```