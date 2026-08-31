# Ruby, Greedy

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5132066/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5132066/)

---

# Code
```
def min_moves(target, max_doubles)
  steps = 0

  until target.zero? || max_doubles.zero?
    if (target % 2).zero?
      max_doubles -= 1
      target /= 2
    else
      target -= 1
    end
    steps += 1
  end

  target + steps - 1
end
```