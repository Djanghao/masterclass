# 🔥 🔥 🔥 Fastest(100%) || Video Explanation || Easy to understand 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 39
**Link:** [https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5181870/](https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5181870/)

---

# [Clear Approach Video Explanation Here](https://www.youtube.com/watch?v=Gjq1FpJafxw)

![Screenshot 2024-05-19 at 6.31.49\u202FPM.png](./images/0.png)

# Intuition
- The code calculates the sum of XOR totals for all subsets by accumulating the bitwise OR of all elements and then scaling it by 2 ^ (n\u22121) to account for each bit's contribution to the subsets. This leverages the property that each bit appears in half of all possible subsets.

# Approach
**Initialization:**

- Initialize sumTotal to 0. This variable will be used to accumulate the bitwise OR of all elements in the list.

**Accumulation of Bitwise OR:**

- Iterate over each number in the list nums.
- Use the bitwise OR operator (|=) to combine each number with sumTotal. This step ensures that sumTotal will contain all the bits set that are set in any of the numbers in the list.
- Once the iteration is complete, left shift sumTotal by (len(nums) - 1) positions. This operation multiplies sumTotal by 2 ^ (len(nums)\u22121).
- The final value of sumTotal after the left shift is returned as the result.


# **Example**
Consider nums = [1, 2, 3].

Initialization: sumTotal = 0.

**Accumulation:**

For num = 1: sumTotal |= 1 results in sumTotal = 1 (binary 0001).
For num = 2: sumTotal |= 2 results in sumTotal = 3 (binary 0011).
For num = 3: sumTotal |= 3 results in sumTotal = 3 (binary 0011, unchanged).
Left Shift: sumTotal << 2 (since len(nums) - 1 = 2) results in 3 << 2 which is 12 (binary 1100).
Return: The result is 12.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```Python []
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        sumTotal = 0

        for num in nums:
            sumTotal |= num
        return sumTotal << (len(nums) - 1)

```
```C++ []
class Solution {
public:
    int subsetXORSum(vector<int>& nums) {
        int sumTotal = 0;

        for (int num : nums) {
            sumTotal |= num;
        }
        return sumTotal << (nums.size() - 1);
    }
};
```
```Java []
class Solution {
    public int subsetXORSum(int[] nums) {
        int sumTotal = 0;

        for (int num : nums) {
            sumTotal |= num;
        }
        return sumTotal << (nums.length - 1);
    }
}
```
```Javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let sumTotal = 0;

    for (let num of nums) {
        sumTotal |= num;
    }
    return sumTotal << (nums.length - 1);
};
```
```Go []
func subsetXORSum(nums []int) int {
	sumTotal := 0

	for _, num := range nums {
		sumTotal |= num
	}
	return sumTotal << (len(nums) - 1)
}
```
```Kotlin []
class Solution {
    fun subsetXORSum(nums: IntArray): Int {
        var sumTotal = 0

        for (num in nums) {
            sumTotal = sumTotal or num
        }
        return sumTotal shl (nums.size - 1)
    }
}
```

# Please Upvote
