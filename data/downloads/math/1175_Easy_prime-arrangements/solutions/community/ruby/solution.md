# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/5257397/](https://leetcode.com/problems/prime-arrangements/solutions/5257397/)

---


# Code
```
# @param {Integer} n
# @return {Integer}
def num_prime_arrangements(n)
    answer = 0
    prime_nums = []
    other_nums = []
    (1..n).each do |num|
        if prime?num
            prime_nums << num
        else
            other_nums << num
        end
    end

    (prime_nums.permutation.size * other_nums.permutation.size)  % (10**9 + 7)
end

def prime? (n)
    if n <= 1
        false
    elsif n == 2
        true
    else 
        (2..n/2).none? { |i| n % i == 0}
    end
end
```