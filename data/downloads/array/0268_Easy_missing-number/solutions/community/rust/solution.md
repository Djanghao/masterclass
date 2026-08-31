# Beats100% 🚀➡️Easy Explained➡️[Java/C++/C/Python3/JavaScript/Rust]

**Author:** Shivansu_7
**Votes:** 6
**Link:** [https://leetcode.com/problems/missing-number/solutions/4756696/](https://leetcode.com/problems/missing-number/solutions/4756696/)

---

# Intuition
1. Use the formula of sum of `n` natural number to calculate the sum.
2. Calculate the actual sum of array, and find the difference.

# Approach
1. **Calculate the expected sum:** The expected sum of the first n natural numbers is `n*(n+1)/2`. This is based on the arithmetic series summation formula.
2. **Iterate through the array:** Traverse through the given array `nums`.
3. **Subtract each element from the sum:** For each element `val` in the array `nums`, subtract val from the `sum` calculated in step 1.
4. **Return the remaining sum:** After subtracting all elements in the array from the expected `sum`, what remains is the missing number.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int sum = n*(n+1)/2;

        for(int val : nums) {
            sum -= val;
        }
        return sum;
    }
}
```
```C++ []
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        int sum = n * (n + 1) / 2;

        for (int val : nums) {
            sum -= val;
        }
        return sum;
    }
};
```
```C# []
public class Solution {
    public int MissingNumber(int[] nums) {
        int n = nums.Length;
        int sum = n * (n + 1) / 2;

        foreach (int val in nums) {
            sum -= val;
        }
        return sum;
    }
}
```
```C []
int missingNumber(int *nums, int numsSize) {
    int n = size;
    int sum = n * (n + 1) / 2;

    for (int i = 0; i < size; ++i) {
        sum -= nums[i];
    }
    return sum;
}
```
```Python3 []
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        total_sum = n * (n + 1) // 2

        for val in nums:
            total_sum -= val

        return total_sum
```
```Rust []
impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let n = nums.len() as i32;
        let mut sum = n * (n + 1) / 2;

        for val in nums {
            sum -= val;
        }
        sum
    }
}
```
```Ruby []
class Solution
  def missing_number(nums)
    n = nums.length
    sum = n * (n + 1) / 2

    nums.each { |val| sum -= val }
    sum
  end
end
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sum = (n * (n + 1)) / 2;

    for (let val of nums) {
        sum -= val;
    }
    return sum;
};
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)



