# C | Erlang | Python3 solution

**Author:** erikcghedlund
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/6020347/](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/6020347/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(N)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code

## C

```c []
#define max(x, y) x*(x>y) + y*(x<=y)
int largestCombination(int* candidates, int candidatesSize) {   
    int mx = 1, tmp; 
    for (int i = 0; i < 24; i++) {
        tmp = 0;
        for (int j = 0; j < candidatesSize; j++)
            tmp += (candidates[j]&(1u<<i)) != 0;
        mx = max(mx, tmp);
    }
    return mx;
}
```

## Erlang

```Erlang []
-spec count(Candidates :: [integer()], integer()) -> integer().
count(Candidates, Bit) -> lists:sum([1 || Candidate <- Candidates, 0 /= (Candidate band trunc(math:pow(2, Bit)))]).

-spec largest_combination(Candidates :: [integer()]) -> integer().
largest_combination(Candidates) -> lists:max(lists:map(fun (Bit) -> count(Candidates, Bit) end, lists:seq(0, 24))).
```

## Python

```python3 []
class Solution:
    def largestCombination(self, candidates: List[int]) -> int:
        mx = 1
        for i in range(24):
            tmp = 0
            for candidate in candidates:
                tmp += int(candidate&(1<<i) != 0)
            mx = max(mx, tmp)
        return mx
```