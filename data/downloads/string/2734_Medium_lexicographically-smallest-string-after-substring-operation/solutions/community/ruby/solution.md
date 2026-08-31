# Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3624404/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3624404/)

---

# Intuition
Changing any character except 'a' makes it lexographically smaller.  We want to change the longest earliest sequence possible.

# Approach
1. Split s into an array.
2. If every character is 'a', change the last one, then join and return the string.  (This is the only case where our string becomes lexographically bigger.)
3. Find the first non-'a' character.
4. Find the end of this first non-'a' sequence.
5. Create a conversion hash mapping each letter to the letter before it.
6. Convert the letters in the non-'a' sequence.
7. Construct the new string and return.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def smallest_string(s)
    s = s.split('')
    
    if s.all? { |char| char == 'a' }
        s[-1] = 'z'
        return s.join('')
    end

    i = 0
    while s[i] == 'a'
        i += 1
    end

    j = i
    until j == s.length || s[j] == 'a'
        j += 1
    end

    conversion = Hash.new
    alpha = 'zabcdefghijklmnopqrstuvwxyz'
    (1..26).each { |i| conversion[alpha[i]] = alpha[i-1] }

    mid = s[i...j].map! { |char| conversion[char] }

    (s[0...i] + mid + s[j..-1]).join('')
end
```