# Recursive Ruby solution using chars

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/5888265/](https://leetcode.com/problems/number-of-digit-one/solutions/5888265/)

---

# Intuition
Instead of diving x by 10^n, we can convert the number to an array of chars and go from that. It's the same intuition as the Editorial.

# Code
```ruby []
# @param {Integer} n
# @return {Integer}
def count_digit_one(n)
  count_digit_one_chr(n.to_s.chars)
end

def count_digit_one_chr(chrs, cache = {})
    return cache[chrs] if cache[chrs]
    return 0 if chrs.length == 0

    total = 0
    # e.g if we have 345, we're counting 0-300
    total += (0..chrs[0].to_i - 1).sum do |digit|
        if digit == 1
            10 ** (chrs.length - 1) + count_digit_one_chr(["9"] * (chrs.length - 1), cache)
        else
            count_digit_one_chr(["9"] * (chrs.length - 1), cache)
        end
    end 

    # e.g if we have 345, we're counting 1s in 301-345
    # special case is first digit == 1. For the example 143, we're getting 44 ones before analysing
    # 0-43
    total += if chrs[0] == "1"
                (chrs[1..].join.to_i + 1) + count_digit_one_chr(chrs.drop(1), cache)
             else
                count_digit_one_chr(chrs.drop(1), cache)
             end
    (cache[chrs] ||= total)
end

```