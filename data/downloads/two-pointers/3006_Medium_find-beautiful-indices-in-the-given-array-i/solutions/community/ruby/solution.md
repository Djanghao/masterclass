# Ruby Bsearch Solution

**Author:** cvbabbo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5893902/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5893902/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n * log n)$$

- Space complexity:
$$O(n)$$ 

# Code
```ruby []
# @param {String} s
# @param {String} a
# @param {String} b
# @param {Integer} k
# @return {Integer[]}
def beautiful_indices(s, a, b, k)
    if s.length < a.length || s.length < b.length
        return []
    end

    valid_is = find_i_and_j(s,a,b,k)
    valid_is
end

def find_i_and_j(s,a,b,k)
    valid_is = []
    valid_js = []

    max_i = s.length - a.length
    max_j = s.length - b.length

    max_iterator = [max_i, max_j].max
    (0..max_iterator).each do |x|
        if x <= max_i && s[x..(x+a.length-1)] == a
            valid_is << x
        end

         if x <= max_j && s[x..(x+b.length-1)] == b
            valid_js << x
        end
    end 

    final_is = []
    valid_is.each do |i|
        lower_bound = valid_js.bsearch_index { |j| j >= i - k }
        upper_bound = valid_js.bsearch_index { |j| j > i + k }

        if lower_bound && (upper_bound.nil? || lower_bound < upper_bound)
            final_is << i
        end
    end
    final_is
end



```