# Ruby || extract, sort, insert || fastest ATM

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4282251/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4282251/)

---


# Code
```ruby
require 'set'

VOWELS = Set[*"AEIOUaeiou".chars]

class String
    def vowel? = VOWELS.include?(self)
end

def sort_vowels(s)
    vowels, vidxs = s.chars.each_with_index.each_with_object([[], []]) {|(c, idx), (v, vidx)|
        (v << c; vidx << idx) if c.vowel?
    }
    vowels.sort.zip(vidxs).each {|(v, vidx)| s[vidx] = v }
    s
end
```