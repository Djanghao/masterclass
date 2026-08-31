# Counting character occurrences

**Author:** user4050do
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/5823682/](https://leetcode.com/problems/palindrome-permutation/solutions/5823682/)

---

# Intuition

We just need to check if the occurreneces of characters is odd or even. If the string size is odd, then we may have one character with odd occurrence. All other characters must have an even occurrence.

# Approach

Using a hash, we count the occurrences of each character to check how many odd occurrences we have. Remember we are allowed to have one even occurrence if, and only if, the string size is odd.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$ - the hash stores only english characters

# Code
```ruby []
# @param {String} s
# @return {Boolean}
def can_permute_palindrome(s)
  hash = Hash.new(0)
  
  s.each_char do |ch|
    hash[ch] += 1
  end

  available_odds = s.size.odd? ? 1 : 0
  hash.each do |k, v|
    next if v.even?

    available_odds -= 1
    return false if available_odds < 0
  end

  true
end
```