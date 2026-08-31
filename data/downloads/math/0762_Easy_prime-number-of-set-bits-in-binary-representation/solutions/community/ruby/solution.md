# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/5230774/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/5230774/)

---


# Code
```
# @param {Integer} left
# @param {Integer} right
# @return {Integer}
def count_prime_set_bits(left, right)

    answer = 0
    while left < right + 1
        if is_prime?(left.to_s(2).count("1"))
            answer += 1
        end
        left += 1
    end
    
    answer
end

def is_prime? n
    if n <= 1
        false
    elsif n == 2
        true
    else 
        (2..n/2).none? { |i| n % i == 0}
    end
end
```