# ruby solution

**Author:** JathiRatnam
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4558150/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4558150/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @param {String} t
# @return {Integer}
def hashify(str)
    hash = Hash.new(0)

    str.each_char do |char|
        hash[char] += 1
    end

    hash
end

def min_steps(s, t)
    shash = hashify(s)
    thash = hashify(t)

    res = 0

    shash.each do |k,v|
        res += [v - thash[k], 0].max
    end

    res
end
```