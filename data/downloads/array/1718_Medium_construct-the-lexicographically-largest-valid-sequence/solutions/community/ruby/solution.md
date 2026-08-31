# Ruby Backtracking Fun!

**Author:** Jared_S
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/4189771/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/4189771/)

---

# Approach
Start with an Array of zero values. There will be two of each number value except 1. So the size will be `n*2-1`. The "curr" Array will look like [0,0,0,0,0] for n = 3. Then start backtracking.

Work from largest number value down to smallest (`@n.downto(1)`). That way, the first matching answer we find will always be the lexicographically largest. Once found, we no longer continue searching (`return unless @ans.empty?`).

When num > 1, we set both the first and next zero values in the array. If the next value is: 
- already taken (doesn't equal zero), 
- or is at an index larger than the array (nil value)

the distance requirements cannot be met. No need to backtrack this option. Move on to the next. (`next if curr[next_idx].nil? || !curr[next_idx].zero?`).


# Code
```
def construct_distanced_sequence(n)
  @n = n
  max_size = n*2-1
  curr = Array.new(max_size, 0)
  @ans = []
  backtrack(curr)
  @ans
end

def backtrack(curr)
  return unless @ans.empty?

  idx = curr.index(0)
  return @ans = curr.dup unless idx

  (@n.downto(1).to_a - curr).each do |num|
    if num == 1
      curr[idx] = num
      backtrack(curr)
    else
      next_idx = idx + num
      next if curr[next_idx].nil? || !curr[next_idx].zero?

      curr[idx] = num
      curr[next_idx] = num
      backtrack(curr)
      curr[next_idx] = 0 # reset
    end

    curr[idx] = 0 # reset
  end
end

```