# Ruby recursive solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3840532/](https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3840532/)

---

# Intuition
Calculate the number of count stepping numbers up to high and subtract the number less than low.  It's easy to calulate the number for a given number of digits and specific starting value, so use versions of that.

# Approach
Outer function:
1. Create a memo object.
2. Find how many count stepping numbers there are up to high and subtract how many are below low.  Take the modulo and return.

Main function:
This find the number of counting step numbers up to (and including) n.
1. Return 1 if the length is 0 and n if the length is 1 (base cases).
2. Initialize total.
3. Find how many counting step numbers there are with fewer digits than n.  (Note that the nums helper function requires a starting digit, so iterate through the numbers 1-9 for every possible length.)
4. Turn n into an array of integers.
5. Use the same_num_digits helper function to find how many counting step numbers with the same number of digits are less than or equal to n, add to total, and return.

Core helper function (nums):
This find how many n-digit counting step numbers there are that start with k.
1. Return 0 if the starting digit is out of range.
2. Return 1 if there are fewer than two digits.  (All one-digit numbers work and all 0-digit numbers are the result of recursion -- we count them as one because this only gets called if the previous digits worked.)
3. Return a stored value if there is one.
4. Call nums again with one fewer digit incrementing or decrementing the starting digit by 1.  Add these two possibilities together, memoize, and return.

Helper function same_num_digits:
This function find counting steps numbers with the same number of digits as n that don't exceed n.
1. Total the number of counting step numbers with lower starting digits.
2. Add this to the result from same_digits helper function.

Helper function same_digits:
This helper function tells you how many count stepping numbers there are that have the same number of digits and same first digit as n.
1. If n is only one digit, return 1 (n works because all one-digit numbers are count stepping numbers.)
2. If the first digit is much bigger than the second digit, return 0: the only numbers that work are too big.
3. If the first digit is much *smaller* than the second digit, any number starting with the first digit would work, so call and return nums.

At this point, we know that the first two digits differ by at most 1.
4. If the second digit is bigger, we know that any count stepping number that decreases in the first digit is valid.  Find those using nums, then call this function on n without the first digit.  (Any of those possibilities will work with the first digit added back, but we want to shorten the number until we hit our base case.)
5. If the first two digits are equal, the only valid count stepping numbers are those where the second digit decreases.  Find those with num.
6. If the second digit is lower, any possibility that works on the full number would work on the number without the first digit.  Like in four, call the function on n minus the first digit.

# Complexity
- Time complexity:
$$O(log(n))$$, since it's based on the number of digits.

- Space complexity:
$$O(log(n))$$

# Code
```
@mod = 1000000007
    
def count_stepping_numbers(low, high)
    @memo = Array.new(101) { Array.new(10) }
    (nums_up_to(high.to_i) - nums_up_to(low.to_i - 1)) % @mod
end

def nums_up_to(n)
    len = n.to_s.length
    return 1 if len == 0
    return n if len == 1

    total = 0
    (1...len).each do |i|
        (1..9).each { |digit| total += nums(i,digit) }
    end
    
    digits = n.to_s.chars.map { |digit| digit.to_i }
    
    total + same_num_digits(digits)
end

def nums(digits,start_digit)
    return 0 unless (0..9).cover?(start_digit)
    return 1 if digits < 2
    return @memo[digits][start_digit] if @memo[digits][start_digit]

    @memo[digits][start_digit] = nums(digits-1, start_digit + 1) + nums(digits-1, start_digit - 1)
end


def same_num_digits(n)
    len = n.length
    total = 0
    (1...n[0]).each { |k| total += nums(len,k) }

    total + same_digits(n)
end


def same_digits(n)
    len = n.length
    return 1 if len == 1

    if n[0] - n[1] > 1
        return 0
    elsif n[1] - n[0] > 1
        return nums(len,n[0])
    end
    
    if n[1] > n[0]
        nums(len-1,n[0]-1) + same_digits(n[1..-1])
    elsif n[1] == n[0]
        nums(len-1,n[0]-1)
    else
        same_digits(n[1..-1])
    end
end
```