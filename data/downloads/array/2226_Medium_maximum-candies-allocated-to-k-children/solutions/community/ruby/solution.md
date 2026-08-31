# 1-liner Python / Ruby

**Author:** StefanPochmann
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/1911684/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/1911684/)

---

Binary-search the smallest allocation `a` that's too large, the answer is 1 lower. Ruby still excels at this, though Python improved now that it supports a `key`.

Ruby:
```
def maximum_candies(candies, k)
  (1..10**8).bsearch { |a| candies.sum { |c| c / a } < k } - 1
end
```
Python:

    def maximumCandies(self, candies: List[int], k: int) -> int:
        return bisect_left(range(1, 10**8), True, key=lambda a: sum(c // a for c in candies) < k)
