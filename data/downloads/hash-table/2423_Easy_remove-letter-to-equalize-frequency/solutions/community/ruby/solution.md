# Clean Brute Force

**Author:** losev2710
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/3224521/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/3224521/)

---

# Code
```
# @param {String} word
# @return {Boolean}
def equal_frequency(word)
  chars = word.chars
  chars.each_with_index do |_, i|
    return true if valid? chars.reject.with_index { |_, ci| ci == i}
  end
  false
end

def valid?(arr)
  arr.tally.values.uniq.size == 1
end
```