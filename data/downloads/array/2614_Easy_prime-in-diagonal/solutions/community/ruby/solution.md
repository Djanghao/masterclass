# Simple solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/4957808/](https://leetcode.com/problems/prime-in-diagonal/solutions/4957808/)

---


# Code
```
# @param {Integer[][]} nums
# @return {Integer}
def diagonal_prime(nums)
    max_prime = 0
    i = 0
    j = 0
    while i < nums[0].size
        if is_prime? nums[i][j] and nums[i][j] > max_prime
            max_prime = nums[i][j]
        end
        i += 1
        j += 1
    end
    
    i = 0
    j = nums.size - 1
    while i < nums[0].size
        if is_prime? nums[i][j] and nums[i][j] > max_prime
            max_prime = nums[i][j]
        end
        i += 1
        j -= 1
    end

    max_prime
end

def is_prime?(num)
  return false if num < 2
  Math.sqrt(num)
    .to_i
    .downto(2)
    .each {|i| return false if num % i == 0}
  true
end
```