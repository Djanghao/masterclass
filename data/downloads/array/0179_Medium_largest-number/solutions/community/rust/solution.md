# Rust Solution | With Explanation

**Author:** vibhushit
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-number/solutions/5803365/](https://leetcode.com/problems/largest-number/solutions/5803365/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is about arranging a list of non-negative integers such that they form the largest possible number when concatenated together. This can be thought of as a custom sorting problem.

- Key Insight: When concatenating two numbers x and y, we must determine if the concatenation xy (where x is placed before y) results in a larger number than yx (where y is placed before x).

 - For example, to decide whether 9 should come before 34, we compare 934 and 349. Since 934 > 349, we place 9 before 34.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Convert to Strings: Since concatenation and comparison work directly on strings, the first step is to convert the list of integers into strings.

2. Custom Sorting: Sort the list of string representations based on a custom comparator:

3. Compare the two concatenated versions of any two strings, xy and yx. Place the one that forms the larger number first.
Edge Case: If after sorting, the largest element is "0", the entire number would be "0", so return "0". This handles cases where all elements are zero.

4. Concatenate Result: After sorting, concatenate the strings to form the final result.

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```rust []
impl Solution {
    pub fn largest_number(nums: Vec<i32>) -> String {
        // Convert all numbers to strings
        let mut num_strs: Vec<String> = nums.into_iter().map(|num| num.to_string()).collect();

        // Custom comparator to sort the strings
        num_strs.sort_by(|a, b| {
            let order1 = format!("{}{}", a, b);
            let order2 = format!("{}{}", b, a);
            order2.cmp(&order1) // Sort in descending order
        });

        // Join all sorted numbers into a single string
        let result = num_strs.join("");

        // Handle case where all numbers are "0"
        if result.starts_with('0') {
            "0".to_string()
        } else {
            result
        }
    }
}
```