# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/3131764/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/3131764/)

---

```
require 'prime'

# @param {Integer[]} nums
# @return {Integer}
def distinct_prime_factors(nums)
    primes = Prime.entries(1000)
    set = Set.new

    nums.each do |num|
        i = 0
        while num > 1 && i < primes.size
            if num % primes[i] == 0
                num /= primes[i]
                set.add(primes[i])
            else
                i += 1
            end
        end
    end
    
    set.size
end
```