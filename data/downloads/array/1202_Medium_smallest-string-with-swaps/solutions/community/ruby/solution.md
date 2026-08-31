# Ruby union find

**Author:** asill
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-string-with-swaps/solutions/658438/](https://leetcode.com/problems/smallest-string-with-swaps/solutions/658438/)

---

```
# @param {String} s
# @param {Integer[][]} pairs
# @return {String}
def smallest_string_with_swaps(s, pairs)

  # initialize @root array
  @root = []

  for i in 0..(s.size - 1) do
    @root[i] = i
  end

  # union by pairs
  pairs.each do |pair|
    a = pair[0]
    b = pair[1]
    union(a, b)
  end

  # based on the unioned/connected nodes
  # construct a hash to store same root chars
  h = {}

  for i in 0..(s.size - 1) do
    parent = find(i)
    if h[parent]
      h[parent] << s[i]
    else
      h[parent] = [s[i]]
    end
  end

  h.each do |k, v|
    h[k] = v.sort { |a, b| b <=> a }
  end

  # finally, pop the chars from hash[key]
  result = ""

  for i in 0..(s.size - 1) do
    parent = @root[i]
    result << h[parent].pop
  end
  
  result
end

def union(a, b)
  a_parent = find(a)
  b_parent = find(b)
  small = [a_parent, b_parent].min
  large = [a_parent, b_parent].max
  # alwalys points to root with smaller index
  @root[large] = small
end

def find(a)
  # walk up the chain until reaching root
  while a != @root[a]
    # path compression while walking up
    @root[a] = @root[@root[a]]
    a = @root[a]
  end
  a
end
```