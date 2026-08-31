# Ruby one-liner

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5592091/](https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5592091/)

---

```
# @param {Integer[]} nums
# @return {Boolean}
def can_alice_win(nums)
  nums.partition { _1 < 10 }.map(&:sum).reduce(:!=)  
end
```