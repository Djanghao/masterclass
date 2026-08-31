# Easier Explanation - 100 % beats

**Author:** muhammadfarhankt
**Votes:** 2
**Link:** [https://leetcode.com/problems/ant-on-the-boundary/solutions/4961202/](https://leetcode.com/problems/ant-on-the-boundary/solutions/4961202/)

---



# Approach
- The description could be clearer. The ant starts at position 0, and we only count a 'return' if the ant ends its movement exactly back at position 0. Simply crossing position 0 during a movement doesn't count.

# Code
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let currPos = 0, count = 0;
    for (let val of nums) {
        currPos += val;
        if (currPos === 0) {
            count++;
        }
    }
    return count;
};
```
```python []
class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        currPos, count = 0, 0
        for val in nums:
            currPos += val
            if currPos == 0:
                count += 1
        return count
```
```C++ []
class Solution {
public:
    int returnToBoundaryCount(vector<int>& nums) {
        int currPos = 0, count = 0;
        for (int val : nums) {
            currPos += val;
            if (currPos == 0) {
                count++;
            }
        }
        return count;
    }
};
```
```Java []
class Solution {
    public int returnToBoundaryCount(int[] nums) {
        int currPos = 0, count = 0;
        for (int val : nums) {
            currPos += val;
            if (currPos == 0) {
                count++;
            }
        }
        return count;
    }
}
```
```C []
int returnToBoundaryCount(int* nums, int numsSize) {
    int currPos = 0, count = 0;
    for (int i = 0; i < numsSize; i++) {
        currPos += nums[i];
        if (currPos == 0) {
            count++;
        }
    }
    return count;
}
```
```Dart []
class Solution {
  int returnToBoundaryCount(List<int> nums) {
    int currPos = 0, count = 0;
    for (int val in nums) {
      currPos += val;
      if (currPos == 0) {
        count++;
      }
    }
    return count;
  }
}
```
```Go []
func returnToBoundaryCount(nums []int) int {
    currPos, count := 0, 0
    for _, val := range nums {
        currPos += val
        if currPos == 0 {
            count++
        }
    }
    return count
}
```