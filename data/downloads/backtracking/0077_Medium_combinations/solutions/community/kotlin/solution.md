# Simple backtracking solution in JAVA and KOTLIN

**Author:** anlk
**Votes:** 3
**Link:** [https://leetcode.com/problems/combinations/solutions/6045872/](https://leetcode.com/problems/combinations/solutions/6045872/)

---

\u2618\uFE0F\u2618\uFE0F\u2618\uFE0F If this solution was helpful, please consider upvoting! \u2705

# Intuition

We can use backtracking, which allows us to systematically explore all possible combinations. Each decision involves either including or excluding a number in the current combination.

# Approach
- Use a helper function to backtrack through all possible combinations.
- Maintain a temporary list to store the current combination.
- Start from 1 to n, adding numbers to the current combination until its size reaches k.
- If the size reaches k, add it to the result list.
- Backtrack by removing the last added number and explore the next options.
- Ensure combinations are built in a sorted order to avoid duplicate combinations.

# Code
```Kotlin []
class Solution {
    fun combine(n: Int, k: Int): List<List<Int>> {
        val result = mutableListOf<List<Int>>()
        backtrack(result, mutableListOf(), 1, n, k)
        return result
    }

    fun backtrack(result: MutableList<List<Int>>, temp: MutableList<Int>, start: Int, n: Int, k: Int) {
        if (temp.size == k) {
            result.add(ArrayList(temp))
            return
        }
        for (i in start..n) {
            temp.add(i)
            backtrack(result, temp, i + 1, n, k)
            temp.removeAt(temp.size - 1) 
        }
    }
}
```

```Java []
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), 1, n, k);
        return result;
    } 
    void backtrack(List<List<Integer>> result, List<Integer> temp, int start, int n, int k) {
        if (temp.size() == k) {
            result.add(new ArrayList<>(temp));
            return;
        }
        for (int i = start; i <= n; i++) {
            temp.add(i);
            backtrack(result, temp, i + 1, n, k);
            temp.remove(temp.size() - 1);
        }
    }
}
```