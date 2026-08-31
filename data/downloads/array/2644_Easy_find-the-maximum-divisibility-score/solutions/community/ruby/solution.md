# Ruby too slow for brute force, optimization required. Comments included. O(n^2), O(1) space.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/4332270/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/4332270/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums
# @param {Integer[]} divisors
# @return {Integer}
def max_div_score(nums, divisors)
    # Sort in acsending order.
    divisors.sort!
    
    # Sort in descending order.
    nums.sort_by!{|a| -a}
    
    i = 0
    max = 0
    max_index = 0
    prev_divisor = 0
    divisor_score = 0
    while i < divisors.size
        divisor = divisors[i]
        # Skip if current divisor is the previous divisor as their score would be the same.
        if prev_divisor == divisor
            i += 1
            next
        else
            prev_divisor = divisor
            divisor_score = 0
            j = 0
            while j < nums.size
                n = nums[j]
                if divisor > n
                    break
                end
                
                # Increment score when divisible.
                if n%divisor == 0
                    # Account for dup nums.
                    # Alternatively can use hash with count and nums.uniq! 
                    # but this saves more space and doesn't impact time complexity much.
                    while nums[j] == n
                        j+= 1
                        divisor_score += 1
                    end
                else
                     j+= 1
                end
            end
        end

        if divisor_score > max
            max = divisor_score
            max_index = i
        end
        
        i += 1
    end


    return divisors[max_index]
end
```