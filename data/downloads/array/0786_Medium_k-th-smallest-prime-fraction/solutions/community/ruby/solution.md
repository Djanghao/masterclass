# Ruby solution beats 100% both run time and memory.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5141312/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5141312/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} arr
# @param {Integer} k
# @return {Integer[]}
def kth_smallest_prime_fraction(arr, k)
    n = arr.length
    left = 0.0
    right = 1.0
    answer = [0, 0]

    while left < right
        mid = left + (right - left) / 2
        count = 0
        p = 0
        q = 0
        max_fraction = 0.0

        j = 0
        # Count the number of fractions less than or equal to mid
        for i in 0..(n - 2)
            while j < n && arr[i] >= mid * arr[j]
                j += 1
            end
            count += n - j
            if j < n && max_fraction < arr[i].to_f / arr[j]
                max_fraction = arr[i].to_f / arr[j]
                p = arr[i]
                q = arr[j]
            end
        end

        # Adjust the search range based on count and k
        if count == k
            return [p, q]
        elsif count < k
            left = mid
        else
            right = mid
        end
    end

    return answer
end
```