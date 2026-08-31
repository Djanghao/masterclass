# Fastest execution || Beats 100% users with java & C++ || Python3 || Typescript

**Author:** SanketSawant18
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5182325/](https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5182325/)

---

# Approach
Efficient Calculation of XOR Sum for All Subsets

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Explanation
1. **Class and Method Declaration:**

- The class Solution contains the method subsetXORSum which performs the main logic.
- The subsetXORSum method takes an array of integers nums as an argument and returns an integer.
2. **Variable Initialization:**

- int res = 0;: Initialize a variable res to store the cumulative bitwise OR of all elements in the array.
3. **Bitwise OR Operation:**

- for (int num : nums) { res |= num; }: Iterate over each element in the array nums using an enhanced for loop.
- res |= num;: Update res with the bitwise OR of res and the current element num. This accumulates the bitwise OR of all elements in nums.
4. **Calculate Total Sum of XOR for All Subsets:**

- return res * (1 << (nums.length - 1));:
    - 1 << (nums.length - 1): Left shift 1 by (nums.length - 1) positions, which is equivalent to 2(length of nums\u22121). This calculates the number of subsets containing each element.
    - Multiply the cumulative OR (res) by this number to get the total sum of XOR values for all subsets.

---

```java []
class Solution {
    public int subsetXORSum(int[] nums) {
        int res = 0;
        for (int num : nums) {
            res |= num;
        }
        return res * (1 << (nums.length - 1));
    }
}
```
```C++ []
#include <vector>
#include <iostream>

class Solution {
public:
    int subsetXORSum(std::vector<int>& nums) {
        int res = 0;
        for (int num : nums) {
            res |= num;
        }
        return res * (1 << (nums.size() - 1));
    }
};
```
```python3 []
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        res = 0
        for num in nums:
            res |= num
        return res * (1 << (len(nums) - 1))
```
```Typescript []
function subsetXORSum(nums: number[]): number {
    let res = 0;
    for (let num of nums) {
        res |= num;
    }
    return res * (1 << (nums.length - 1));
}
```

---

