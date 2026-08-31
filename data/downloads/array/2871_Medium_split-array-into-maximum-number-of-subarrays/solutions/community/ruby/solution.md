# Ruby O(n) solution, explained

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4129055/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4129055/)

---

# Intuition
The key to this problem is understanding that expanding the subarray cannot increase its bitwise AND value.  (Also, it's only possible to have muliple subarrays and keep the minimum sum if bitwise AND of the whole array is 0.)  So we can just go through and find subarrays with a bitwise AND value of 0.

# Approach
1. Find the bitwise & of the whole array.  Return 1 if this is greater than 0: this means we can't have multiple subarrays.  (If we split it into multiple subarrays, each will have a value of at least min, and so their sum will be higher.)
2. Initialize curr, i, and total_subarrs as 0.
3. Iterate though the array.  For each element, find & with that and curr.
    - If curr gets to 0, increment total_subarrs and reset curr.
4. Return total subarrs

(Note that curr will finish at a value other than 0: either nil, if you used the last element of the array in a subarray, or something else.  If it's not nil, you can just add the remaining elements from the end of the array to the last subarray that got to 0 -- it will still be 0.)

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def max_subarrays(nums)
    min = nums[0]
    (1...nums.length).each { |i| min &= nums[i] }
    return 1 if min > 0
    
    i = 0
    curr = nums[0]
    total_subarrs = 0
    
    while i < nums.length
        curr &= nums[i]
        i += 1
        if curr == 0
            total_subarrs += 1
            curr = nums[i]
        end
    end
    
    total_subarrs
end
```