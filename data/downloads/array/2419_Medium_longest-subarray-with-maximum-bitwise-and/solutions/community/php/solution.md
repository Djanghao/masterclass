# 1ms, 100% beats runtime

**Author:** salisbury-espinosa
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5787576/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5787576/)

---

![2024-10-23_13-44.png](./images/0.png)


# Code
```typescript []
function longestSubarray(nums: number[]): number {
    let max = 0;
    let result = 0;
    let currentResult = 0;
    let isContiguous = false;
    for (const num of nums) {
        if (num > max) {
            max = num;
            result = currentResult = 1;
            isContiguous = true;
        }
        else if (num < max) {
            if (isContiguous) {
                result = currentResult > result ? currentResult : result;
                isContiguous = false;
            }
        }
        else if (isContiguous) {
            currentResult += 1;
        }
        else {
            currentResult = 1;
            isContiguous = true;
        }
    }
    return currentResult > result ? currentResult : result;
};
```
```Java []
class Solution {
    public int longestSubarray(int[] nums) {
        int max = 0;
        int result = 0;
        int currentResult = 0;
        boolean isContiguous = false;
        
        for (int num : nums) {
            if (num > max) {
                max = num;
                result = currentResult = 1;
                isContiguous = true;
            } else if (num < max) {
                if (isContiguous) {
                    result = Math.max(currentResult, result);
                    isContiguous = false;
                }
            } else if (isContiguous) {
                currentResult += 1;
            } else {
                currentResult = 1;
                isContiguous = true;
            }
        }
        return Math.max(currentResult, result);
    }
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function longestSubarray($nums) {
        $max = 0;
        $result = 0;
        $currentResult = 0;
        $isContiguous = false;

        foreach ($nums as $num) {
            if ($num > $max) {
                $max = $num;
                $result = $currentResult = 1;
                $isContiguous = true;
            } elseif ($num < $max) {
                if ($isContiguous) {
                    $result = max($currentResult, $result);
                    $isContiguous = false;
                }
            } elseif ($isContiguous) {
                $currentResult += 1;
            } else {
                $currentResult = 1;
                $isContiguous = true;
            }
        }
        return max($currentResult, $result);
    }
}
```
```C++ []
class Solution {
public:
    int longestSubarray(std::vector<int>& nums) {
        int max = 0;
        int result = 0;
        int currentResult = 0;
        bool isContiguous = false;
        
        for (int num : nums) {
            if (num > max) {
                max = num;
                result = currentResult = 1;
                isContiguous = true;
            } else if (num < max) {
                if (isContiguous) {
                    result = std::max(currentResult, result);
                    isContiguous = false;
                }
            } else if (isContiguous) {
                currentResult += 1;
            } else {
                currentResult = 1;
                isContiguous = true;
            }
        }
        return std::max(currentResult, result);
    }
};
```
```Python []
class Solution(object):
    def longestSubarray(self, nums):
        max_num = 0
        result = 0
        current_result = 0
        is_contiguous = False
        
        for num in nums:
            if num > max_num:
                max_num = num
                result = current_result = 1
                is_contiguous = True
            elif num < max_num:
                if is_contiguous:
                    result = max(current_result, result)
                    is_contiguous = False
            elif is_contiguous:
                current_result += 1
            else:
                current_result = 1
                is_contiguous = True
        
        return max(current_result, result)
```
