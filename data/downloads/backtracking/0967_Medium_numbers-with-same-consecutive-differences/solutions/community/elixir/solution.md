# Elixir and Python3 simple recusive solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/3879297/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/3879297/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 231ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 64.7MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  # 231ms - 238ms
  @spec nums_same_consec_diff(n :: integer, k :: integer) :: [integer]
  def nums_same_consec_diff(n, k) do
    Enum.reduce(1..9, [], fn i, res ->
      temp = df(i, n - 1, k, i)
      if temp != [], do: res ++ temp, else: res
    end)
  end

  @spec df(i :: integer, n :: integer, k :: integer, val :: integer) :: [integer]
  def df(_, n, _, val) when n == 0 do
    [val]
  end

  def df(i, n, k, val) do
    res1 = if i - k >= 0, do: df(i - k, n - 1, k, val*10 + i - k), else: []
    res2 = if k != 0 and i + k <= 9, do: df(i + k, n - 1, k, val*10 + i + k), else: []
    res1 ++ res2
  end
end

```

```
def numsSameConsecDiff(self, n: int, k: int) -> List[int]:
    # 41ms - 42ms
        ans = []
        def df(i: int, n: int, val: int) -> None: 
            if n == 0:
                ans.append(val)
                return
            if i - k >= 0:
                df(i - k, n - 1, val*10 + i - k)
            if k != 0 and i + k <= 9:
                df(i + k, n - 1, val*10 + i + k)
        for i in range(1, 10):
            df(i, n - 1, i)
        return ans
```
