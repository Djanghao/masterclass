# Ruby solution with reverse indexing, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/4086697/](https://leetcode.com/problems/monotone-increasing-digits/solutions/4086697/)

---

# Intuition
Check if the number is monotone increasing.  If not, find the first digit that's not increasing from the previous digit.  Decrement the digit and replace all the digits after it with 9.

# Approach
1. Create an array of the digits as integers.
2. Check if the number is already monotone increasing.  If so, return it.
3. Iterate through the digits of the number backwards, checking if each digit is less than or equal to the following digit.  If so, decrement the digit and set it to be first_index.  (This represents the first index where the digit will change.)
4. Set all the digits after first_index to 9.
5. Join the digits together as a single number and return.

(Note: numbers like 100 are edge cases, because the first digit becomes a 0.  This doesn't cause a problem, because [0,9,9] => "099" => 99.)

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def monotone_increasing_digits(n)
    digits = n.to_s.split('').map { |digit| digit.to_i }
    return n if (1...digits.length).all? { |i| digits[i] >= digits[i-1] }
    first_idx = -1
    i = -2

    while digits[i]
        if digits[i] > digits[i+1]
            digits[i] -= 1
            first_idx = i
        end
        i -= 1
    end

    (first_idx+1..-1).each { |i| digits[i] = 9 }
    
    digits.map{ |digit| digit.to_s }.join('').to_i
end
```