# [Python 3] Simple interface, Explained — O(NlogN), O(1)

**Author:** Deimvis
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/3886015/](https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/3886015/)

---

# Intuition
We can forget about gardens that are originally complete, because we can't change their state. Let's assume that we don't have such gardens, then:
* There are actually only $N+1$ candidates for an answer:

  1 \u2014 $0$ complete gardens and $N$ incomplete gardens (with maximized minimum amount of flowers)
  2 \u2014 $1$ complete gardens and $N-1$ incomplete gardens (with maximized minimum amount of flowers)
    ...
  N+1 \u2014 $N$ complete gardens and $0$ incomplete gardens (with maximized minimum amount of flowers)

Now all we need is to find efficient approach to iterate over these candidates.

* We can notice that we can do only 4 actions
    1. Make garden complete
    2. Maximize minimum number of flowers among incomplete gardens
    3. Revert operation (1)
    4. Revert operation (2)

Using this interface we can easily write an algorithm (pseudo-code):
```
m = 0  # number of complete gardens
while can_make_more_gardens_complete:
    make_garden_complete()  # Operation 1
    m += 1
maximize_min_number_of_flowers()  # Operation 2
ans = ...  # update answer
for _ in range(m):
    make_garden_incomplete()  # Operation 3
    maximize_min_number_of_flowers()  # Operation 2
    ans = max(ans, ...)  # update answer
return ans
```

* If we sort `flowers`: Operations (1), (3) can be implemented with $O(1)$ time, operation (2) can be implemented with $\\Omega(1)$ time and we don't actually need operation (4)


# Complexity
- Time complexity: $$O(N\\log N)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution:
    def maximumBeauty(self, flowers: List[int], newFlowers: int, target: int, full: int, partial: int) -> int:
        n = len(flowers)
        flowers.sort() 
        originally_complete = sum(flowers[i] >= target for i in range(n))
        work_end = n - originally_complete
        # [0,        j-1] \u2014 incomplete (with >=`level` flowers each, where `0 <= `level` <= target - 1) 
        # [j, work_end-1] \u2014 complete
        # [work_end, n-1] \u2014 originally complete

        i = -1
        level = 0
        def maximize_min_number_of_flowers() -> None:
            nonlocal i, level, newFlowers
            if j == 0:
                return
            if i == -1:
                i = 0
                level = flowers[0]
            while i < j:
                next_level = flowers[i+1] if i + 1 < j else target - 1
                max_boost = min(next_level - level, newFlowers // (i+1))
                level += max_boost
                newFlowers -= max_boost * (i+1)
                if level != next_level:
                    break
                i += 1
        
        j = work_end
        def add_complete_garden() -> bool:
            nonlocal j, newFlowers
            if j - 1 < 0 or newFlowers < target - flowers[j-1]:
                return False
            newFlowers -= target - flowers[j-1]
            j -= 1
            return True
        def remove_complete_garden() -> None:
            nonlocal j, newFlowers
            assert j < work_end
            newFlowers += target - flowers[j]
            flowers[j] = flowers[j]
            j += 1

        while add_complete_garden():
            pass
        maximize_min_number_of_flowers()
        ans = full * (n - j) + partial * level
        while j < work_end:
            remove_complete_garden()
            maximize_min_number_of_flowers()
            ans = max(ans, full * (n - j) + partial * level)
        return ans
```