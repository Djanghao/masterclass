# Ruby || 2 versions: simple 2-liner OOP approach + very fast using instance method redefinition

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4482991/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4482991/)

---


# Code

## Simple

```ruby
class String
    def poses
        chars.each_with_index.each_with_object(Hash.new {|h, k| h[k] = Array.new }) {|(c, idx), res| res[c] << idx }
    end
end

def max_length_between_equal_characters(s)
    (s.poses.values.filter {|p| p.size > 1 }.collect {|p| p.last - p.first }.max || 0) - 1
end
```

## Sophisticated, very fast (47 ms)

```ruby
class MinMax
    attr_reader :minv, :maxv

    # On the first pass it writes @minv
    # On the second and further passes it (re)writes @maxv
    # First-next passes are distinguished on the per-instance basis
    def <<(v)
        @minv = v
        metaclass = class << self; self; end
        metaclass.define_method('<<'.to_sym) {|v| @maxv = v }
    end
end

class String
    def mmposes = chars.each_with_index.each_with_object(Hash.new {|h, k| h[k] = MinMax.new }) {|(c, i), res| res[c] << i }
end

def max_length_between_equal_characters(s)
    (s.mmposes.values.
        filter {|p| !p.maxv.nil? }.
        collect {|p| p.maxv - p.minv }.max || 0) - 1
end
```
