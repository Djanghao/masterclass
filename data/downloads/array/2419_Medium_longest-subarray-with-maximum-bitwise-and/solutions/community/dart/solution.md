# Simplest way to solve Longest Subarray of 1's After Deleting One Element

**Author:** patel_jaimin
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5784253/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5784253/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves finding the length of the longest subarray containing only 1's after deleting at most one element. We can use a sliding window approach to efficiently find the maximum length of such a subarray.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize variables:
    - Set `left` to 0, `right` to 0, `maxLen` to 0, and `zeroCount` to 0.
2. Slide the window:
    - While `right` is less than the length of the array:
        - If the current element `nums[right]` is 0, increment `zeroCount`.
        - While `zeroCount` is greater than 1, move the left pointer to the right until the number of zeros becomes 1 again.
        - Update the maximum length `maxLen` if the current window size is greater.
        - Move the right pointer to the next element.
3. Return the maximum length: Return `maxLen`.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Dart []
class Solution {
  int longestSubarray(List<int> nums) {
    int max = 0;
    for (int i = 0; i < nums.length; i++) {
      max = nums[i]>max?nums[i]:max;
    }
    int ans = 0;
    int temp = 0;
    for (int i = 0; i < nums.length; i++) {
      if (nums[i] == max) {
        temp++;
      } else {
        temp = 0;
      }

      ans = ans> temp?ans:temp;
    }
    return ans;
  }

  int max(int a, int b) {
    return a > b ? a : b;
  }
}
```
```python3 []
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        max_val = max(nums)
        ans = 0
        temp = 0
        for num in nums:
            if num == max_val:
                temp += 1
            else:
                temp = 0
            ans = max(ans, temp)
        return ans
```
```Go []
func longestSubarray(nums []int) int {
	maxVal := 0
	for _, num := range nums {
		maxVal = max(maxVal, num)
	}
	ans, temp := 0, 0
	for _, num := range nums {
		if num == maxVal {
			temp++
		} else {
			temp = 0
		}
		ans = max(ans, temp)
	}
	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```
```c []
int longestSubarray(int* nums, int numsSize) {
    int max =0;
    for(int i=0;i<numsSize;i++){
        max = nums[i]>max?nums[i]:max;
    }
    int ans=0;
    int temp=0;
    for(int i=0;i<numsSize;i++){
        if(nums[i]==max){
            temp++;
        }else{
            temp=0;
        }

        if(ans<temp){
            ans=temp;
        }
    }
    return ans;
}
```
```c++ []
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int numsSize = nums.size();
        int max = 0;
        for (int i = 0; i < numsSize; i++) {
            max = nums[i] > max ? nums[i] : max;
        }
        int ans = 0;
        int temp = 0;
        for (int i = 0; i < numsSize; i++) {
            if (nums[i] == max) {
                temp++;
            } else {
                temp = 0;
            }

            if (ans < temp) {
                ans = temp;
            }
        }
        return ans;
    }
};
```
```csharp []
public class Solution {
    public int LongestSubarray(int[] nums) {
        int max = 0;
        foreach (int num in nums) {
            max = Math.Max(max, num);
        }
        int ans = 0;
        int temp = 0;
        foreach (int num in nums) {
            if (num == max) {
                temp++;
            } else {
                temp = 0;
            }

            ans = Math.Max(ans, temp);
        }
        return ans;
    }
}
```
```java []
class Solution {
    public int longestSubarray(int[] nums) {
        int max = 0;
        for (int i = 0; i < nums.length; i++) {
            max = Math.max(max, nums[i]);
        }
        int ans = 0;
        int temp = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == max) {
                temp++;
            } else {
                temp = 0;
            }

            ans = Math.max(ans, temp);
        }
        return ans;
    }
}
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }
    let ans = 0;
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) {
            temp++;
        } else {
            temp = 0;
        }

        ans = Math.max(ans, temp);
    }
    return ans;
};
```
```typescript []
function longestSubarray(nums: number[]): number {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }
    let ans = 0;
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) {
            temp++;
        } else {
            temp = 0;
        }

        ans = Math.max(ans, temp);
    }
    return ans;
};
```
![usecase_page-0001.jpg](./images/0.jpeg)
