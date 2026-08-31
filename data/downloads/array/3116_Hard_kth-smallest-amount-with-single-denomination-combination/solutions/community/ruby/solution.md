# [Ruby/Python] Inclusion-exclusion + Binary search, 7 Lines

**Author:** tangj1905
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5020196/](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5020196/)

---

# Intuition
Using the inclusion-exclusion principle, we can calculate the number of multiples less than a given $n$.

# Approach
You can look up the inclusion-exclusion principle for a mathematical justification. In our code, we just need to do the following:

1) Generate all $2^N$ distinct subsets of `coins`. For each subset $\\{c_1, c_2, ..., c_n\\}$, calculate $\	ext{LCM}(c_1, c_2, ..., c_n)$.
2) By the inclusion-exclusion principle, we'll be subtracting if the number of elements in the subset is even, and adding otherwise.
3) Conduct a binary search on the solution space.

# Complexity
- **Time complexity:**
$\\log(k)\	imes2^N$ - where $N$ is the size of `coins`

- **Space complexity:**
$2^N$

# Code
```rb
# [Ruby] We have to be a bit careful with negative integer division
def find_kth_smallest(coins, k)
  lcms = (0...coins.size).flat_map do |n|
    coins.combination(n + 1)
      .map { |comb| comb.reduce { |a, b| a.lcm b } * ((-1) ** n) }
  end

  (1..coins.min * k).bsearch do |n|
    lcms.sum { |l| n / l.abs * (l <=> 0) } >= k
  end
end
```

```py
# [Python] Same deal here
def findKthSmallest(self, coins: List[int], k: int) -> int:
    lcms = [math.lcm(*comb) * ((-1) ** n)
                for n in range(len(coins))
                for comb in combinations(coins, n + 1)]
        
    def count(n: int) -> int:
        return sum(int(n / l) for l in lcms)
        
    return bisect_left(range(1 + min(coins) * k), k, key=count)
```