# Ruby solution with count, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3996896/](https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3996896/)

---

# Intuition
Find the count of how many elements satisfy the condition up to a given point, then organize these counts in an hash based on modulo.  Iterate through count and find find the differences that equal k mod modulo at every point.

# Approach
1. Create a count of how many integers up to each point satisfy the condition.
2. Create a hash for the values in count organized by modulo.  (Note: this has to be a hash and not an array because modulo can go up to 10**9, which would exceed memory requirements.)
3. Iterate through the values of count.  At each point:
    - Decrement the corresponding value in your hash.  (You can't go backwards, so this guarantees that the next step will only count valid subarrays.)
    - Add to total based on the value of count at current + k (mod modulo).  This represents the number of interesting subarrays starting at current value and going to a later value with a difference of k.
    - (Note that we must decrement the value from the hash before adding to total, so we don't count an empty subarray if k = 0.)
4. Return total.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def count_interesting_subarrays(nums, modulo, k)    
    count = [0]
    nums.each do |num|
        add = (num % modulo == k ? 1 : 0)
        count << count[-1] + add
    end
        
    mod_hash = Hash.new(0)
    count.each { |num| mod_hash[num % modulo] += 1 }
    total = 0
    
    count.each do |num|
        mod_hash[num % modulo] -= 1
        total += mod_hash[(num + k) % modulo]
    end
    
    total
end
```