# Don't Use Hashmap.  Use Arrays Instead of Hashmaps for O(1) Space. Achieves 100% Efficiency.

**Author:** muhammadfarhankt
**Votes:** 3
**Link:** [https://leetcode.com/problems/split-the-array/solutions/4931474/](https://leetcode.com/problems/split-the-array/solutions/4931474/)

---

# Intuition
Our approach will be to use an index array to keep track of the frequency of each element in the input array. If any element appears more than twice, it is not possible to split the array as required.

# Approach
We initialize an index array of size 100, as the elements in the input array are within the range [1, 100]. We iterate through the input array and update the corresponding index in the index array. If any element appears more than twice, we return false, indicating that it is not possible to split the array. Otherwise, we return true.

# Complexity
- Time complexity: O(n), where n is the size of the input array. We iterate through the input array once.

- Space complexity:  O(1), as we are using a fixed-size index array of size 100, which is independent of the input size.

# Comparision Hashmap vs Array

- When considering whether to use a hashmap or an index array of size 100 to solve this problem, we need to consider both the time and space complexities of each approach.

## 1. Using Hashmap:

- Time Complexity: O(n)
- Space Complexity: O(n)
## 2. Using Index Array of Size 100:

- Time Complexity: O(n)
- Space Complexity: O(1)
- Given that the maximum size of the input array is 100 and each element in the array is bounded by the range [1, 100], using an index array of size 100 would provide a more space-efficient solution. This approach ensures that we have constant space complexity, as the space required does not depend on the size of the input array.
- On the other hand, using a hashmap would still provide a valid solution with a space complexity of O(n), where n is the size of the input array. While this approach may be slightly more flexible, it is not necessary given the constraints of the problem.
- Therefore, in this particular scenario, the index array approach is preferable due to its constant space complexity and simplicity.


```javascript []
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let idxArr = new Array(100).fill(0);
    for (let i = 0; i < nums.length; i++) {
        idxArr[nums[i] - 1]++;
        if (idxArr[nums[i] - 1] > 2) {
            return false;
        }
    }
    return true;
};
```
```python []
class Solution(object):
    def isPossibleToSplit(self, nums):
        idxArr = [0] * 100
        for num in nums:
            idxArr[num - 1] += 1
            if idxArr[num - 1] > 2:
                return False
        return True

```
```python3 []
class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        idxArr = [0] * 100
        for num in nums:
            idxArr[num - 1] += 1
            if idxArr[num - 1] > 2:
                return False
        return True
```
```Java []
class Solution {
    public boolean isPossibleToSplit(int[] nums) {
        int[] idxArr = new int[100];
        for (int num : nums) {
            idxArr[num - 1]++;
            if (idxArr[num - 1] > 2) {
                return false;
            }
        }
        return true;
    }
}
```
```C++ []
class Solution {
public:
    bool isPossibleToSplit(vector<int>& nums) {
        vector<int> idxArr(100, 0);
        for (int i = 0; i < nums.size(); i++) {
            idxArr[nums[i] - 1]++;
            if (idxArr[nums[i] - 1] > 2) {
                return false;
            }
        }
        return true;
    }
};

```
``` Go []
func isPossibleToSplit(nums []int) bool {
    size := len(nums)
    idxArr := make([]int, 100)
    for i:=0; i<size; i++ {
        idxArr[(nums[i]-1)]++
        if idxArr[nums[i]-1] > 2 {
            return false
        }
    }
    return true
}
```