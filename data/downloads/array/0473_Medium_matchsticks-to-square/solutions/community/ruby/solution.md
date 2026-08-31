# Ruby O(2**n) - 100% 100% - backtrack with memoization

**Author:** hoangphanbk10
**Votes:** 3
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/2271990/](https://leetcode.com/problems/matchsticks-to-square/solutions/2271990/)

---

The worst case of this is  2 ** n. But in practice, it can perform multiple times faster because it fails very fast in the process.

I also used a binary hash key so the we can have more efficient memo.

- First, calculate the expected side length, check for all the edge cases
- [Optional] Sort the sticks from longest, this increases our change to reach the solution fast if exists
- Run backtrack with 3 parameters, the hash indicating which stick has already been used, how many sides left to be filled, and how much longer the first side left
- Iterating the hash by shifting bit to the left, bit == 1 means the stick at i has been used.
- If no remaining stick fits the first side remaining length, return false and memoize it, this is fail fast condition.

Please upvote if it's helpful, thanks

```
# @param {Integer[]} matchsticks
# @return {Boolean}
def makesquare(matchsticks)
  @n = matchsticks.size
  return false if @n < 4

  sum_length = matchsticks.sum
  return false if sum_length % 4 != 0
  @side = sum_length / 4
  @sticks = matchsticks.sort.reverse
  @memo = {}
  hash = (1 << @n) - 1

  pick(hash, @side, 3)
end

def pick(hash, first_side, sides_left)
  return false if @memo[hash]

  m = hash
  i = 0
  while m > 0
    bit = m & 1
    if bit == 1
      remaining = first_side - @sticks[i]
      if remaining < 0
        i += 1
        m = m >> 1
        next
      end
      if remaining == 0
        new_left = sides_left - 1
        return true if new_left == 0
        remaining = @side
      else
        new_left = sides_left
      end

      return true if pick(hash - (1 << i), remaining, new_left)
    end

    m = m >> 1
    i += 1
  end

  @memo[hash] = true
  false
end
