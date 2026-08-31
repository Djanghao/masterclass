# Fastest code with Step-by-Step Breakdown 💯🔥

**Author:** UK07
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5929110/](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5929110/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem revolves around finding how many subsets of a given array have a bitwise OR that equals the maximum OR possible for the entire array. The key insight is that we need to determine the maximum OR value of all elements combined and then count the subsets whose OR matches this value. Given the small size of subsets (as it\u2019s bounded by `2^n`), iterating through all subsets and computing the OR for each seemed like a feasible approach.

# Approach
<!-- Describe your approach to solving the problem. -->
1. First, calculate the maximum OR value (`mx_or`) by performing a bitwise OR on all the elements in the array `nums`. This represents the highest OR value we can get by OR-ing all elements.
2. Then, iterate over all possible subsets of the array. We can represent each subset using a bitmask, where each bit in the mask represents whether a particular element is included in the subset.
3. For each subset, compute the OR of the elements present in that subset.
4. Count how many subsets have a bitwise OR equal to `mx_or`.
5. Return this count.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is $$O(n \\cdot 2^n)$$, where:
  - There are `2^n` subsets to iterate through.
  - For each subset, we compute the OR of at most `n` elements.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is $$O(1)$$, excluding the input array `nums` and considering only the space used for a few integer variables. If we consider the input array, the space complexity is $$O(n)$$.

# Code Breakdown
<!-- Describe your code to solving the problem. -->
- **Step 1:** Calculate the maximum OR value `mx_or` of all elements in `nums`. This serves as the target OR value that we want to match with different subsets.
- **Step 2:** Compute the total number of non-empty subsets, which is `2^n - 1`.
- **Step 3:** Loop through all possible subsets represented by binary masks (from `1` to `2^n - 1`), where each bit in the mask indicates if a number is included in the subset.
- **Step 4:** For each subset, compute the OR value of the numbers in that subset.
- **Step 5:** If the OR value of a subset matches `mx_or`, increment the count.
- **Step 6:** Return the count of subsets that meet the condition.

# Code
```cpp []
class Solution {
public:
    int countMaxOrSubsets(vector<int>& nums) {
        int mx_or = 0, n = nums.size();
        for(int x: nums) mx_or |= x;
        
        int total_subsets = pow(2, n)-1;
        
        int cnt = 1;
        for(int i=1;i<total_subsets; i++) {
            int or_sub = 0;
            for(int j=0;j<n;j++) {
                int x = 1<<j;
                if(x&i) or_sub |= nums[j];
            }
            if(or_sub==mx_or) ++cnt;
        }

        return cnt;
    }
};
```
```java []
class Solution {
    public int countMaxOrSubsets(int[] nums) {
        int mx_or = 0;
        int n = nums.length;
        
        for (int x : nums) mx_or |= x;
        
        int total_subsets = (1 << n) - 1;
        
        int cnt = 1;
        for (int i = 1; i <= total_subsets; i++) {
            int or_sub = 0;
            for (int j = 0; j < n; j++) {
                if ((i & (1 << j)) != 0) {
                    or_sub |= nums[j];
                }
            }
            if (or_sub == mx_or) cnt++;
        }
        
        return cnt;
    }
}
```
```python []
class Solution:
    def countMaxOrSubsets(self, nums: List[int]) -> int:
        mx_or = 0
        n = len(nums)
        
        for x in nums:
            mx_or |= x
        
        total_subsets = (1 << n) - 1
        
        cnt = 1
        for i in range(1, total_subsets + 1):
            or_sub = 0
            for j in range(n):
                if i & (1 << j):
                    or_sub |= nums[j]
            if or_sub == mx_or:
                cnt += 1
        
        return cnt

```
```golang []
func countMaxOrSubsets(nums []int) int {
    mx_or := 0
    n := len(nums)
    
    for _, x := range nums {
        mx_or |= x
    }
    
    total_subsets := (1 << n) - 1
    cnt := 1
    
    for i := 1; i <= total_subsets; i++ {
        or_sub := 0
        for j := 0; j < n; j++ {
            if i & (1 << j) != 0 {
                or_sub |= nums[j]
            }
        }
        if or_sub == mx_or {
            cnt++
        }
    }
    
    return cnt
}
```
```Rust []
impl Solution {
    pub fn count_max_or_subsets(nums: Vec<i32>) -> i32 {
        let mut mx_or = 0;
        let n = nums.len();
        
        for &x in &nums {
            mx_or |= x;
        }
        
        let total_subsets = (1 << n) - 1;
        let mut cnt = 1;
        
        for i in 1..=total_subsets {
            let mut or_sub = 0;
            for j in 0..n {
                if i & (1 << j) != 0 {
                    or_sub |= nums[j];
                }
            }
            if or_sub == mx_or {
                cnt += 1;
            }
        }
        
        cnt
    }
}
```