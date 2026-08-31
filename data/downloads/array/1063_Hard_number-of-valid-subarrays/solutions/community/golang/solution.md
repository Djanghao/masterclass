# Simpler than editorial. Monotonic stack

**Author:** ssjlee93
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/6089075/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/6089075/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The editorial adds the indices of elements being added so that we can do a `higher index - smaller index` and calculate the subarray just like how we do sliding windows.

but I found this unnecessary. 

1. we will always have a subarray containing the element on its own.
so this leads us minimum `len(nums)` as our ans.
we also do not have edge cases for `len(nums) == 0` or null.
2. since we're interested in subarray as opposed to subsequence, every time the size of our stack changes, `len(nums) - 1` is the number of subarrays within. 

## for example

we have `[1, 4, 2, 5, 3]`
we capture all single element arrays `[1], [4], [2], [5], [3]`
`ans` begins with `5`
when n = 1, stack becomes [1] len(stack)-1 = 0
when n = 4, stack becomes [1, 4] len(stack)-1 = 1, which is [1, 4] add this to our ans. ans = 6
when n = 2 stack becomes [1, 2] len(stack)-1 = 1, which is [1, 4, 2] add this to our ans. ans = 7
when n = 5 stack becomes [1, 2, 5] len(stack)-1 = 2, which is [1, 4, 2, 5], [2, 5]. add to ans. ans = 9
when n = 3 stack becomes [1, 2, 3] len(stack)-1 = 2, which is [1, 4, 2, 5, 3], [2, 5, 3]. add to ans. ans = 11

# Approach
<!-- Describe your approach to solving the problem. -->
1. initialize our empty stack
2. initialize our ans = len(nums)
3. loop through each num in nums
4. while stack is not empty and top of stack is greater than our num,
    pop from our stack
5. after the while loop, push num to our stack
6. and then add len(stack) - 1 to our ans
7. after our outer loop, return ans

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) : we loop each element once
Amortized O(n) where worst case scenario can add all elements to our stack

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) : worst case, we have n elements in our stack

# Code
```golang []
func validSubarrays(nums []int) int {
    stack := make([]int, 0, len(nums))
    ans := len(nums)

    for _, n := range nums {
        
        for len(stack) > 0 && stack[len(stack)-1] > n {
            stack = stack[:len(stack)-1]
        }

        stack = append(stack, n)
        ans += len(stack) - 1
    }

    return ans
    
}
```

```python3 []
class Solution:
    def validSubarrays(self, nums: List[int]) -> int:
        # len nums cannot be 0. no edge case for 0 or null
        # use monotonic increasing stack
        stack = []
        # for all cases, len nums will be added
        # initialzie ans = len nums
        ans = len(nums)

        # for loop each num
        for n in nums:
        # while adding monotonically, len stack - 1 subarray exists within
            while stack and stack[-1] > n:
                stack.pop()
            stack.append(n)
            ans += len(stack) - 1
        # add this num to ans
        # return ans
        return ans
```