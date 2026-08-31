# Maximum Spliced Array | | JavaScript | | Python3 | |

**Author:** kumarritul089
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/4871386/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/4871386/)

---

# Intuition
The problem appears to involve finding the maximum sum of spliced arrays derived from two input arrays. The splicing operation involves selecting contiguous segments from each array such that the sum of the elements in each segment is maximized. 

# Approach
One approach to solving this problem is to iterate through the arrays while keeping track of the running sums for each array separately. At each step, we calculate the difference between the running sums of the two arrays. We update the maximum difference encountered so far, ensuring that it remains positive (since negative differences do not contribute to the maximum sum).

# Complexity
- Time complexity: \\(O(n)\\), where \\(n\\) is the length of the input arrays. The algorithm iterates through the arrays once.
- Space complexity: \\(O(1)\\). The algorithm uses a constant amount of extra space regardless of the input size.

# Code
``` javascript []
var maximumsSplicedArray = function(nums1, nums2) {
	const sumNums1 = nums1.reduce((acc, currentElement) => currentElement + acc);
	const sumNums2 = nums2.reduce((acc, currentElement) => currentElement + acc);
	let maxSum = 0;
	let tempStoreNums1 = 0;
	let tempStoreNums2 = 0;
	for (let index = 0; index < nums1.length; index++) {
		tempStoreNums1 += nums1[index];
		tempStoreNums2 += nums2[index];
		const difference = tempStoreNums2 - tempStoreNums1;
		if (difference < 0) {
			tempStoreNums2 = 0;
			tempStoreNums1 = 0;
		}
		if (maxSum < difference) {
			maxSum = difference;
		}
	}

	const maxSumOne = sumNums1 + maxSum;

	tempStoreNums1 = 0;
	tempStoreNums2 = 0;
	maxSum = 0;
	for (let index = 0; index < nums1.length; index++) {
		tempStoreNums1 += nums1[index];
		tempStoreNums2 += nums2[index];
		const difference = tempStoreNums1 - tempStoreNums2;
		if (difference < 0) {
			tempStoreNums2 = 0;
			tempStoreNums1 = 0;
		}
		if (maxSum < difference) {
			maxSum = difference;
		}
	}
	const maxSumTwo = sumNums2 + maxSum;
	return Math.max(maxSumTwo, maxSumOne);
};
```

```python []
class Solution:
    def maximumsSplicedArray(self, nums1: List[int], nums2: List[int]) -> int:
        # create a difference array between nums1 and nums2
        # idea: find two subarray(elements are contiguous) in the diff
        # one is the subarray that have the minimum negative sum
        # another one is the subarray that have the maximum positive sum
        # so there are four candidates for maximum score:
        # 1. original_sum1 
        # 2. original_sum 
        # 3. original_sum1 - min_negative_sum
        # 4. original_sum2 + max_positive_sum
        
        original_sum1 = sum(nums1)
        original_sum2 = sum(nums2)
        diff = [num1 - num2 for num1, num2 in zip(nums1, nums2)]
        min_negative_sum = float('inf')
        max_positive_sum = - float('inf')
        cur_negative_sum = 0
        cur_positive_sum = 0
        
        for val in diff:
            cur_negative_sum += val

            if cur_negative_sum > 0:
                cur_negative_sum = 0
            
            cur_positive_sum += val
            
            if cur_positive_sum < 0:
                cur_positive_sum = 0
                    
            min_negative_sum = min(min_negative_sum, cur_negative_sum)
            max_positive_sum = max(max_positive_sum, cur_positive_sum)

        return max(original_sum1 - min_negative_sum, original_sum2 + max_positive_sum, original_sum2, original_sum1)
```

