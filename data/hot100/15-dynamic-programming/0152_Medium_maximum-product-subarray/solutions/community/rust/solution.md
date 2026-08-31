# ✅ 0ms Beats 100% [Rust/Python/C++/Java] Simple DP Solution

**Author:** silver_wolf
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/4402412/](https://leetcode.com/problems/maximum-product-subarray/solutions/4402412/)

---

# Intuition
This problem is really similar to [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) except instead of a sum it's a product, so naturally, a DP solution also comes to mind.

<hr>

## \u274C Solution #1: Brute Force [TLE]

It's not a bad idea to start with a naive brute force solution and then optimize from there. Similar to Maximum Subarray, you can try iterating over all subarrays and then calculating the product

```python
for i in range(n):
    prod = 1
    for j in range(i, n):
        prod *= nums[j]
        ans = max(ans, prod)
```

- Time complexity: $\\mathcal{O}(n^2)$ since we check every subarray
- Space complexity: $\\mathcal{O}(1)$ since we only operate on the given nums array

## \u2714\uFE0F Solution #2: Dynamic Programming

Instead of trying to brute force all subarrays, we can think of building each solution by improving on a smaller subproblem. More concretely, a better maximum product subarray can either be one of two things
1. Previous subarrays were better (in which case, we leave the solution as is)
2. Including the current value by adding the current value into an ongoing subarray and increase the running product

Case 1 is easy \u2013\xA0we just keep a running max. However, case 2 is a bit finnicky because unlike maximum subarray, we need to consider negative numbers.

**Problems**

Consider the case of
```
nums = [2, -2, 2, -2]
```

If our subarray includes an even number of negative numbers (e.g. 2 or 4 negative numbers), the product will still end up positive. This means we can't only add positive numbers to our subarray, as the optimal solution above would be $2 \	imes -2 \	imes 2 \	imes -2 = 16$

Another problem is when you hit a zero. Any time your subarray hits a zero, the running product gets cancelled out to a zero.

With that said, let's revisit the DP solution to Maximum Subarray: Kandane's Algorithm. In Kandane's, we keep track of two variables, the maximum subarray sum and the current subarray sum. We update the current subarray sum, and if it ever becomes 0 or less, we start another subarray. Every time we update the subarray, we also update the max subarray sum.

**Approach**

In this question, we need to keep track of two subarrays: the subarray with the maximum product so far and the subarray with the minimum product so far. Why do we need to keep track of the minimum product? To handle the negative case. Let's revisit that negative subarray again:

```
nums = [2, -2, 2, -2]
```

When we are 3 indices in `[2, -2, 2]`, the running product of all 3 elements is negative. The maximum product so far is 2 (just a singular element in the subarray), but the minimum subarray is `[2 -2 2]` with a product of -8. Now, when we calculate the solution for all 4 indices, we consider both the max product and the min product to get 16.

There are 3 DP cases to consider
1. Restart new subarray
    - Set the running product to be just the current element
    - This handles the case with 0s
2. Add current element to the current subarray with the minimum product
    - Set running product to be minimum_product * value
3. Add current element to the current subarray with the maximum product
    - Set running product to be maximum_product * value

Thus, both our min and max subarrays we keep track of need to consider all three of these cases. Our DP equations can be formulated as follows

```
min_prod = min(value, value * old_min_prod, value * old_max_prod)
max_prod = max(value, value * old_min_prod, value * old_max_prod)
answer = max(max_prod, answer)
```

<hr>

# Complexity
- Time complexity: $\\mathcal{O}(n)$ where n is the size of the list. We only iterate once over the list with bottom-up DP and update our two products as we go. 

- Space complexity: $\\mathcal{O}(1)$ since we work off of the given nums list.

<hr>

## Solutions

```rust []
impl Solution {
    pub fn max_product(nums: Vec<i32>) -> i32 {
        if nums.is_empty() {
            return 0;
        }
        
        let mut min_prod: i32 = nums[0];
        let mut max_prod: i32 = nums[0];
        let mut ans: i32 = nums[0];

        for (index, value) in nums.iter().enumerate().skip(1) {
            let test_max_prod: i32 = max_prod * *value;
            let test_min_prod: i32 = min_prod * *value;

            max_prod = test_min_prod.max(test_max_prod).max(*value);
            min_prod = test_max_prod.min(test_min_prod).min(*value);

            ans = ans.max(max_prod);
        }

        ans
    }
}
```
```python []
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        min_prod = max_prod = ans = nums[0]

        for value in nums[1:]:
            max_temp = max_prod * value
            min_temp = min_prod * value

            min_prod = min(max_temp, min_temp, value)
            max_prod = max(max_temp, min_temp, value)
            
            ans = max(ans, max_prod)

        return ans
```
```java []
class Solution {
    public int maxProduct(int[] nums) {
        int minProd = nums[0], maxProd = nums[0];
        int ans = nums[0];

        int testMaxProd, testMinProd;
        for (int i = 1; i < nums.length; i++) {
            testMaxProd = maxProd * nums[i];
            testMinProd = minProd * nums[i];

            maxProd = Math.max(Math.max(testMaxProd, testMinProd), nums[i]);
            minProd = Math.min(Math.min(testMaxProd, testMinProd), nums[i]);

            ans = Math.max(ans, maxProd);
        }

        return ans;
    }
}
```
```cpp []
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int minProd = nums[0], maxProd = nums[0], ans = nums[0];

        for (auto i = 1; i < nums.size(); i++) {
            int value = nums[i];

            int testMaxProd = maxProd * value;
            int testMinProd = minProd * value;

            maxProd = max({testMaxProd, testMinProd, value});
            minProd = min({testMaxProd, testMinProd, value});

            ans = max(ans, maxProd);
        }

        return ans;
    }
};
```
