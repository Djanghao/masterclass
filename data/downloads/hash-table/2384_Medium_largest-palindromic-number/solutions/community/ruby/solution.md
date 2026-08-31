# Ruby solution with comments

**Author:** ksodha93
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/4819067/](https://leetcode.com/problems/largest-palindromic-number/solutions/4819067/)

---

# Code
```
# @param {String} num
# @return {String}
def largest_palindromic(num)
    # Idea: Build the first half of the palindrome from the largest numbers first
    # If there are zeros and the first half is not empty then add them
    # The middle will be the largest odd number unless there are no odd numbers then we use zero
    # Join the first half, middle and first half reversed

    # hash = num.each_char.each_with_object(Hash.new(0)) { |char, count| count[char] += 1 }
    # hash = num.chars.tally
    hash = num.chars.inject(Hash.new(0)) { |h,k| h[k] += 1; h }
    pairs = hash.map { |k, v| [k.to_i, v] }.sort_by { |k, v| -k }

    middle = ''
    ans = ''

    # Add the first half of the palindrome in order
    pairs.each do |k, v|
        ans << k.to_s * (v / 2) if k > 0 && v > 1
    end

    # if the ans is not empty and the zero count is > 1 then add them
    ans << '0' * (hash['0'] / 2) if !ans.empty? && hash['0'] && hash['0'] > 1

    # find the middle
    pairs.each do |k, v|
        if v.odd? # v % 2 != 0
            middle = k.to_s
            break
        end
    end

    # if the middle not found and the ans is empty, middle is zero
    middle = '0' if middle.empty? && ans.empty?

    [ans + middle + ans.reverse].join
end
```