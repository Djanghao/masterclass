# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/5255066/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/5255066/)

---


# Code
```
# @param {String} s
# @param {Integer} k
# @return {String}
def get_smallest_string(s, k)
    hash = {}
    # Dump the alphabet into an array.
    alphabet = ("a".."z").to_a

    # Create a hash mapping all 
    # letters of the alphabet to the
    # shortest distance to "a"
    dist = 0
    ("a".."n").each do |char|
        hash[char] = dist
        dist += 1 
    end
    dist = 12
    ("o".."z").each do | char|
        hash[char] = dist
        dist -= 1
    end
    
    # loop until we get k to 0 or
    # we run out of chars to reduce
    # to a lower lexicographical
    # order.
    chars = s.chars
    i = 0
    while k > 0 and i < chars.size
        # Skip as it's minimized.
        if chars[i] == "a"
            i += 1
        # If we have enough k to get our current
        # char down to 0, reduce k and our char to "a"
        elsif hash[chars[i]] <= k
            k -= hash[chars[i]]
            chars[i] = "a"
            i += 1
        # Otherwise reduce char as low as possible.
        else
            chars[i] = alphabet[alphabet.index(chars[i]) - k]
            k = 0
        end

    end

    chars.join
end

```