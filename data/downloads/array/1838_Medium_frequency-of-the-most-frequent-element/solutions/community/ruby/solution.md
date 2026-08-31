# Sliding Window

**Author:** Chris1337
**Votes:** 2
**Link:** [https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4302478/](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4302478/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
def max_frequency(nums, k)
    nums.sort!

    max = 1
    l = 0
    r = 1
    used_k = k
    while r < nums.size
        last_r = nums[r - 1]
        diff = nums[r] - last_r
        
        if diff > 0 and diff <= k 
            required_diff = (r - l) * diff
            if required_diff > used_k 
                while used_k < required_diff
                    used_k += last_r - nums[l]
                    l += 1
                    required_diff = (r - l) * diff
                end
            end

            used_k -= required_diff
        elsif diff > k
            l = r
            used_k = k
        end

        length = r - l + 1
        if length > max
            max = length
        end

        r += 1
    end

    max
end

```