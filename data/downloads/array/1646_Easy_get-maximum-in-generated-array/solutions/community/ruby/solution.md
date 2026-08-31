# Beats 100% DP

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/4300701/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/4300701/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer} n
# @return {Integer}
def get_maximum_generated(n)
    
    
    if n == 0
        return 0
    end

    array_size = n + 1
    nums = Array.new()
    nums[0] = 0
    nums[1] = 1
    max = 1
    
    if n > 1
        nums[2] = 1
    end


    i = 1
    while i < array_size

        even_num = 2 * i
        if even_num % 2 == 0 and even_num < n
            nums[even_num] = nums[i]
            if nums[i] > max
                max = nums[i]
            end
        end

        next_num = even_num + 1
        if (next_num) <= n and nums[i+1]
            nums[next_num] = nums[i] + nums[i+1]

            if nums[next_num] > max
                max = nums[next_num]
            end
        end

        i += 1
    end


    max
end
```