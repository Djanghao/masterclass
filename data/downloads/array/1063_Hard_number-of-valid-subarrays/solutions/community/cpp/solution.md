# BEATS 100.00% SOLUTION (BETTER THAN EDITORIAL)

**Author:** angela-tarantula
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/4606862/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/4606862/)

---

# O(n) TIME O(1) SPACE OPTIMAL SOLUTION
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Based on my previous one-pass $$O(n)$$ time & $$O(n)$$ space solution here: https://leetcode.com/problems/number-of-valid-subarrays/solutions/4606214/python-o-n-explained-beats-99-easy/
This time, I realized the stack is entirely unnecessary: we can modify the list in-place and use it like a stack, because the size of the stack is never larger than the index of iteration.

# Approach
<!-- Describe your approach to solving the problem. -->
Like before, keep track of $$ans$$ and which $$num$$ we're up to. This time, though, instead of creating a stack, just use a stack pointer that we'll call, $$stack\\_ptr$$, initialized to zero. Pushing onto the stack means modifying $$nums[stack\\_ptr]$$ and incrementing $$stack\\_ptr$$ by 1. Popping the stack means decrementing $$stack\\_ptr$$ by 1. Peeking the top of the stack means retrieving $$nums[stack\\_ptr-1]$$. Checking the stack  size is just checking the value of $$stack\\_ptr$$ itself. 


# Solution
 - C++ (beats 100.00%)
```
class Solution {
public:
    int validSubarrays(vector<int>& nums) {
        int ans = 0, stack_ptr = 0;
        for (int num : nums) {
            while (stack_ptr > 0 && num < nums[stack_ptr - 1]) {
                stack_ptr--;
            }
            nums[stack_ptr++] = num;
            ans += stack_ptr;
        }
        return ans;
    }
};
```
 - Java (beats 100.00%)
```
class Solution {
    public int validSubarrays(int[] nums) {
        int ans = 0, stack_ptr = 0;
        for (int num : nums){
            while (stack_ptr > 0 && num < nums[stack_ptr-1]){
                stack_ptr--;
            }
            nums[stack_ptr++] = num;
            ans += stack_ptr;
        }
        return ans;
    }
}
```
 - Python (beats 100.00%)
```
class Solution:
    def validSubarrays(self, nums: List[int]) -> int:
        ans = stack_ptr = 0
        for num in nums:
            while stack_ptr and num < nums[stack_ptr-1]:
                stack_ptr -= 1
            nums[stack_ptr] = num
            stack_ptr += 1
            ans += stack_ptr
        return ans
```
# Complexity
- Time complexity: $$O(n)$$

Looping through each $$num$$ in $$nums$$ in one pass takes $$O(n)$$ time. Time spent in each iteration is amortized $$O(1)$$. Pushing each $$num$$ onto the "stack" and incrementing $$ans$$ is obviously $$O(1)$$. The number of "pops" at any iteration is anywhere between $$0$$ and $$n-1$$, but there are only ever $$n-1$$ "pops" at most, so over $$n$$ iterations, each iteration is amortized $$O(\\dfrac{n-1}{n}) = O(1)$$ 

- Space complexity: $$O(1)$$

We don't use any extra space besides $$stack\\_ptr$$ and $$ans$$, which is $$O(1)$$!

# Bonus
Last time I proposed and solved my own follow-up challenge to find length of the longest valid subarray. To optimize that solution to also be $$O(1)$$ extra space, we can again modify the array in-place like a stack. But unlike last time, you can't store the indexes instead of numbers. This is because we're overwriting the original array this time, so even if we stored $$i$$, we can't just look up what $$nums[i]$$ is if $$nums[i]$$ was overwritten. The solution is to just introduce a $$bottom$$ variable that keeps track of what the index of the element at the bottom of the "stack" would be.

```
class Solution:
    def validSubarrays(self, nums: List[int]) -> int:
        ans = stack_ptr = bottom = 0
        for i, num in enumerate(nums):
            while stack_ptr and num < nums[stack_ptr-1]:
                stack_ptr -= 1
            if not stack_ptr:
                bottom = i
            nums[stack_ptr] = num
            stack_ptr += 1
            ans = max(ans,i-bottom+1)
        return ans
```

