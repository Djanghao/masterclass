# Beats 100%. Painful problem. Original solution.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/4333506/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/4333506/)

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
# @param {Integer[]} nums
# @return {Integer}
def minimum_operations(nums)
    # Notes:
    # The array nums is called alternating if:
    # 1. nums[i - 2] == nums[i], where 2 <= i <= n - 1.
    # 2. nums[i - 1] != nums[i], where 1 <= i <= n - 1.
    #
    # You can change any numbers in the array, it counts as one operation.
    # Return the minimum number of operations required to make the array alternating.
    
    
    odd_max = 0
    even_max = 0
    odd_hash = {}
    even_hash = {}
    alt_num_even = nil
    alt_num_odd = nil

    # Collect count of even and odd indexes and assign values to vars above.
    nums.each_with_index do |n, i|
        if i.even?
            even_hash[n] ||= 0
            even_hash[n] += 1

            if even_hash[n] > even_max
                even_max = even_hash[n]
                alt_num_even = n
            end
        else
            odd_hash[n] ||= 0
            odd_hash[n] += 1

            if odd_hash[n] > odd_max
                odd_max = odd_hash[n]
                alt_num_odd = n
            end
        end
    end

    # If we have only 1 distinct integer in nums return half of nums size.
    if odd_hash.size == 1 and even_hash.size == 1 and alt_num_even == alt_num_odd
        nums.size/2

    # If we have both even and odd index having the same integer with highest count
    # we calculate the answer twice.... each time for second max number for both even and odd
    # and return the min result.
    elsif alt_num_even == alt_num_odd
        max_odd = 0
        odd_next_choice = 0
        odd_hash.each do |k,v| 
            if k != alt_num_even and v > max_odd
                max_odd = v
                odd_next_choice = k
            end
        end

        max_even = 0
        even_next_choice = 0
        even_hash.each do |k,v| 
            if k != alt_num_even and v > max_even
                max_even = v
                even_next_choice = k
            end
        end

        a = (calculate_operations_required(alt_num_even, odd_next_choice, nums))
        b = (calculate_operations_required(even_next_choice, alt_num_odd, nums))
        [a,b].min
    # Otherwise we calculate the number of operations required.
    else
        calculate_operations_required(alt_num_even, alt_num_odd, nums)
    end
end

def calculate_operations_required alt_num_even, alt_num_odd, nums
    operations = 0
    i = 0
    next_num = alt_num_even
    while i < nums.size
        if nums[i] != next_num
            operations += 1
        end

        if next_num == alt_num_even
            next_num = alt_num_odd
        else
            next_num = alt_num_even
        end
        i += 1
    end

    operations
end
```