# very Easy understanding and Simplest Solution with good Complexity Best and Optimal Implementation

**Author:** Have-To-Do-Every-Thing
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/5389924/](https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/5389924/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the problem of updating the sum of even numbers after each query efficiently, we can use the following approach:

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initial Even Sum Calculation:**
   - First, calculate the initial sum of all even numbers in the array. This gives us a starting point for our sum calculations.

2. **Query Processing:**
   - For each query, determine the value to be added and the index of the element to be updated.
   - Check if the current value at the specified index is even. If it is, subtract it from the sum because it will be modified.
   - Update the value at the index by adding the specified value from the query.
   - After updating, check if the new value at the index is even. If it is, add it to the sum.
   - Append the current sum of even numbers to the result list.

By following this approach, we ensure that we only update the sum when necessary, maintaining an efficient $O(1)$ operation per query, and reducing unnecessary calculations.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n + m)$$ -->
The time complexity is $$O(n + m)$$, where $$n$$ is the number of elements in the array and $$m$$ is the number of queries.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is $$O(1)$$, excluding the space required for the input and output.

# Code
``` C++ []
class Solution {
public:
    vector<int> sumEvenAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {
        int sum = 0;

        // Calculate initial sum of even numbers
        for (int num : nums) {
            if (num % 2 == 0) {
                sum += num;
            }
        }

        vector<int> res;
        
        for (const auto& query : queries) {
            int value = query[0];
            int index = query[1];

            // If the original number at index is even, subtract it from the sum
            if (nums[index] % 2 == 0) {
                sum -= nums[index];
            }

            // Update the number at index
            nums[index] += value;

            // If the updated number at index is even, add it to the sum
            if (nums[index] % 2 == 0) {
                sum += nums[index];
            }

            // Append the current sum of even numbers to the result
            res.push_back(sum);
        }

        return res;
    }
};
```
``` java []
class Solution {
    public int[] sumEvenAfterQueries(int[] nums, int[][] queries) {
        int sum = 0;

        // Calculate initial sum of even numbers
        for (int num : nums) {
            if (num % 2 == 0) {
                sum += num;
            }
        }

        int[] result = new int[queries.length];
        
        for (int i = 0; i < queries.length; i++) {
            int value = queries[i][0];
            int index = queries[i][1];

            // If the original number at index is even, subtract it from the sum
            if (nums[index] % 2 == 0) {
                sum -= nums[index];
            }

            // Update the number at index
            nums[index] += value;

            // If the updated number at index is even, add it to the sum
            if (nums[index] % 2 == 0) {
                sum += nums[index];
            }

            // Append the current sum of even numbers to the result
            result[i] = sum;
        }

        return result;
    }
};
```
``` python []
class Solution:
    def sumEvenAfterQueries(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        sum_even = sum(num for num in nums if num % 2 == 0)
        result = []

        for value, index in queries:
            if nums[index] % 2 == 0:
                sum_even -= nums[index]

            nums[index] += value

            if nums[index] % 2 == 0:
                sum_even += nums[index]

            result.append(sum_even)

        return result

```
``` JavaScript []
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let sum_even = nums.reduce((acc, num) => acc + (num % 2 === 0 ? num : 0), 0);
    let result = [];

    for (let [value, index] of queries) {
        if (nums[index] % 2 === 0) {
            sum_even -= nums[index];
        }

        nums[index] += value;

        if (nums[index] % 2 === 0) {
            sum_even += nums[index];
        }

        result.push(sum_even);
    }

    return result;
};

```


