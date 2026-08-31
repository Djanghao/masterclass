# [C++/C#/Java/C/JavaScript/TypeScript] O(N) Solutions || Easy to understand

**Author:** nitishhsinghhh
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/2084079/](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/2084079/)

---

# Problem Statement
Maximum Product Difference Between Two Pairs" involves selecting four distinct indices from an integer array such that the difference between the products of two pairs of these indices is maximized. This problem can be approached efficiently by understanding the mathematical properties of multiplication and subtraction.

**Problem Breakdown:**
- Input: An integer array nums.
- Output: The maximum value of the expression (nums[w] * nums[x]) - (nums[y] * nums[z]), where w, x, y, and z are distinct indices.

**Strategy to Solve:**
To maximize the expression (nums[w] * nums[x]) - (nums[y] * nums[z]), you want:

- nums[w] * nums[x] to be as large as possible.
- nums[y] * nums[z] to be as small as possible.
Given the properties of multiplication, the largest product for any two numbers in a list is obtained when both numbers are the largest in the list, and the smallest product is obtained when both numbers are the smallest.

**Constraints:**
- 4 <= nums.length <= 104
- 1 <= nums[i] <= 104

# Solution

The difference product would always be between first two and last two elements of the [**sorted**](https://docs.microsoft.com/en-us/dotnet/api/system.array.sort?view=net-6.0#system-array-sort(system-array)) array. The time complexity would be O(NLogN). 
This problem can be solved with O(N) solutions also. Please see the code samples. 
```C++ []
class Solution {
public:
    int maxProductDifference(vector<int>& nums) {
        int max1 = 0, max2 = 0, min1 = INT_MAX, min2 = INT_MAX;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > max1 || nums[i] > max2) {
                max2 = max(max1, max2);
                max1 = nums[i];
            }
            if (nums[i] < min1 || nums[i] < min2) {
                min2 = min(min1, min2);
                min1 = nums[i];
            }
        }
        return (max1 * max2) - (min1 * min2);
    }
};
```
```csharp []
public class Solution {
	public int MaxProductDifference(int[] nums) {
		int max1 = Int32.MinValue, max2 = max1, min1 = Int32.MaxValue, min2 = min1;
		for (int i = 0; i < nums.Length; i++) {
			if (nums[i] > max1 || nums[i] > max2) {
				max2 = Math.Max(max1, max2);
				max1 = nums[i];
			}
			if (nums[i] < min1 || nums[i] < min2) {
				min2 = Math.Min(min1, min2);
				min1 = nums[i];
			}
		}
		return (max1*max2) - (min1*min2);
	}
}
```
```java []
class Solution {
    public int maxProductDifference(int[] nums) {
        int max1 = 0, max2 = 0, min1 = Integer.MAX_VALUE, min2 = Integer.MAX_VALUE;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > max1 || nums[i] > max2) {
                max2 = Math.max(max1, max2);
                max1 = nums[i];
            }
            if (nums[i] < min1 || nums[i] < min2) {
                min2 = Math.min(min1, min2);
                min1 = nums[i];
            }
        }
        return (max1 * max2) - (min1 * min2);
    }
}
```
```C []
int maxProductDifference(int* nums, int numsSize) {
	int max1 = 0, max2 = 0, min1 = INT_MAX, min2 = INT_MAX;
	for (int i = 0; i < numsSize; i++) {
		if (nums[i] > max1 || nums[i] > max2) {
			max2 = fmax(max1, max2);
			max1 = nums[i];
		}
		if (nums[i] < min1 || nums[i] < min2) {
			min2 = fmin(min1, min2);
			min1 = nums[i];
		}
	}
	return max1 * max2 - min1 * min2;
}
```
```Javascript []
var maxProductDifference = function(nums) {
    let min1 = 1e4, min2 = min1, max1 = 0, max2 = 0;
    for (const num of nums) {
        if (num > max1 || num > max2) {
            max2 = Math.max(max1, max2);
            max1 = num;
        }
        if (num < min1 || num < min2) {
            min2 = Math.min(min1, min2);
            min1 = num;
        }
    }
    return max1 * max2 - min1 * min2;
};
```
```TypeScript []
function maxProductDifference(nums: number[]): number {
    let min1 = 1e4, min2 = min1, max1 = 0, max2 = 0;
    for (const num of nums) {
        if (num > max1 || num > max2) {
            max2 = Math.max(max1, max2);
            max1 = num;
        }
        if (num < min1 || num < min2) {
            min2 = Math.min(min1, min2);
            min1 = num;
        }
    }
    return max1 * max2 - min1 * min2;
}
```

# Frequently encountered in technical interviews
```
std::vector<std::pair<std::string, int>> interview_frequency = {{}};
```