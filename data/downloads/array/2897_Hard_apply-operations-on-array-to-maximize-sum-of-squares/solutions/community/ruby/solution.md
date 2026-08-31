# Greedy Ruby solution with bit tally, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4146117/](https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4146117/)

---

# Intuition
The operations we can do let us rearrange the bits so that we can get every distinct bit in a single number.  We want the greedy approach, taking the largest number possible at each step.  We can make this more efficient by tallying how often each bit appears and then taking one of each that's present k times.

# Approach
1. Create a tally of bits.
2. Decompose each number into bits and add them to the bit_tally.
3. Initialize total as 0.
4. Create a number using one of each bit in the bit tally.  (Decrement the count and delete keys as appropriate.)  Square that number and add it to total.
5. Do this k times.
6. Take the modulo and return total.

# Complexity
- Time complexity:
$$O(n * log(m))$$, where *n* is the length of nums and *m* is the largest number in nums.

- Space complexity:
$$O(log(m))$$

# Code
```
def max_sum(nums, k)
    bit_tally = Hash.new(0)
    
    nums.each do |num|
        i = 0
        while num > 0
            if num % 2 == 1
                bit_tally[2**i] += 1
            end
            num /= 2
            i += 1
        end
    end
    
    total = 0
    k.times do
        curr_num = 0
        
        bit_tally.keys.each do |key|
            curr_num += key
            bit_tally[key] -= 1
            bit_tally.delete(key) if bit_tally[key] == 0
        end
        
        total += curr_num**2
    end
    
    total % 1000000007
end
```