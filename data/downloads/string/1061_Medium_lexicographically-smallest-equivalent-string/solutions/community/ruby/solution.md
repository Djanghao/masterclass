# Ruby | Sets. 138 ms

**Author:** codingstar1
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3052281/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3052281/)

---

# Approach
We can easily solve this problem with a help of a set of sets of equivalent chars.
If one of chars from a new pair `s1[i], s2[i]` there is in some groups, we should union those groups (along with `Set[s1[i], s2[i]]`).
After all we can sort final groups and create dictionries for chars and complete the final step converting `base_str`.
<!-- Describe your approach to solving the problem. -->

# Code
```ruby
class String
    def ord0 = self.bytes.map{ _1 - 97 }
end

require 'set'
def smallest_equivalent_string(s1, s2, base_str)
    s1 = s1.ord0
    s2 = s2.ord0
    base_str = base_str.ord0
    n = s1.size
    eqs = Set.new # a set of groups of equivalent chars.
    n.times do |i|
        a = s1[i]
        b = s2[i]
        to_union = [Set[a, b]]
        eqs.each do |eq|
            to_union << eq if eq === a || eq === b
        end
        new_eq = to_union.reduce(:|)
        eqs -= to_union
        eqs << new_eq
    end

    dict = Array.new(26)
    eqs.each do |eq|
        eq = eq.to_a.sort
        min = eq.first
        eq.each { |c| dict[c] = min }
    end

    base_str.each_with_index do |c, i|
        base_str[i] = dict[c] || c
    end

    base_str.map { (_1 + 97).chr }.join
end
```
<hr>

# Tests:
```ruby
require 'test/unit'
class Test_smallest_equivalent_string < Test::Unit::TestCase
    def test_
        assert_equal "makkek", smallest_equivalent_string(s1 = "parker", s2 = "morris", baseStr = "parser")
        assert_equal "hdld", smallest_equivalent_string(s1 = "hello", s2 = "world", baseStr = "hold")
        assert_equal "aauaaaaada", smallest_equivalent_string(s1 = "leetcode", s2 = "programs", baseStr = "sourcecode")
    end
end
```