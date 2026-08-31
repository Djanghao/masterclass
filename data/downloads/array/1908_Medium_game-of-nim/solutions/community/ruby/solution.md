# Ruby solution

**Author:** ryp0313
**Votes:** 0
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/2002542/](https://leetcode.com/problems/game-of-nim/solutions/2002542/)

---

```
# @param {Integer[]} piles
# @return {Boolean}
def nim_game(piles)
    result = 0
    piles.each do |num|
        result ^= num 
    end
    return result != 0
end