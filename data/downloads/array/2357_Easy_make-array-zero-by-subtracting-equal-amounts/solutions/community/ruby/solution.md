# A counter with a reducible search space

**Author:** sleight42
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/5291800/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/5291800/)

---

# Intuition
Saw it as a counting problem where we count each iteration of subtraction. Choosing the `x` to subtract seemed likely to be the expensive part. I thought I may have to search the `0 > x >= smallest_value in nums` space. 

# Approach
First version, I chose the lowest value `x` from `nums`, subtracted `x` from each element of `nums`, incremented the counter, then repeated. It worked passably. My runtime was in the 15% range and memory maybe 50%. I knew I could do better.

Then I started by rejecting duplicates and 0. That improved runtime considerably and measured memory use somewhat.

Then I removed zero'd elements from nums as they occurred. This put my memory usage in the 91st percentile. It feels like cheating as it's the **final** memory usage and not total. Sure, I could've modified `nums` in place for the ***best*** memory usage (100th percentile) but changing inputs is generally evil.
 
# Complexity
- Time complexity:
Tricky.
$$O(n)$$ for the `reject`
$$O(n!)$$ for the outer `while` loop b/c each `nums[i]` could be an increment of 1 causing the inner while loop to iteratively result in runtimes of `n`, `n-1`, `n-2`, ...

- Space complexity:
Actually, $$O(n)$$ by way of `Array#dup` but finally $$O(1)$$ by emptying the duplicated `Array`.

# Code
```
def minimum_operations(nums)
    count = 0

    # We could modify the input but that's generally evil
    ns = nums.dup

    # duplicates only slow us down and 0s are dead space so get rid of them
    ns.uniq!
    ns.reject! { |v| v == 0 }

    # while greater than zero is non-zero
    while ns.length > 0
        # shrink search space
        m = ns.min
        i = 0
        while i < ns.length
            ns[i] -= m
            if ns[i] == 0 
                # remove elements that don't matter to use any more.
                ns.delete_at(i)
            else
                i += 1  
            end
        end
        count += 1
    end
    count
end
```