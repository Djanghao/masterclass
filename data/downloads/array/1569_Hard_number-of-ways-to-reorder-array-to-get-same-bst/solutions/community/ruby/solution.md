# Ruby: array partitioning and combinatorics

**Author:** lacrosse
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3349368/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3349368/)

---

# Code
```ruby
MOD = 1_000_000_007

def num_of_ways(nums) = bst_permutations(nums) - 1

def bst_permutations(nums)
  if nums.empty?
    1
  else
    root_val = nums.shift
    partitions = nums.partition { _1 < root_val }
    comb(*partitions.map(&:size)) * partitions.map { bst_permutations _1 }.reduce(:*) % MOD
  end
end

def comb(a, b)
  if a > b
    comb(b, a)
  else
    (b + 1..b + a).reduce(1, :*) / (1..a).reduce(1, :*)
  end
end
```

# Time complexity

$$\\mathcal{O}(n^2)$$

# Space complexity

$$\\mathcal{O}(n^2)$$