# 【Video】Simple Backtracking Solution

**Author:** niits
**Votes:** 169
**Link:** [https://leetcode.com/problems/combinations/solutions/5418489/](https://leetcode.com/problems/combinations/solutions/5418489/)

---

# Intuition
Using backtracking to create all possible combinations.

---

# Solution Video

https://youtu.be/oDn_6n0ahkM

## Subscribe to my channel from here
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

---

# Approach
This is based on Python. Other might be different a bit.

1. Create an empty list `res` to store the final combinations and an empty list `comb` to store the current combination being formed.

2. Define a recursive function `backtrack(start)`, which will generate all possible combinations of size `k` from the numbers starting from `start` up to `n`.

3. In the `backtrack` function:
   - If the length of `comb` becomes equal to `k`, it means we have formed a valid combination, so we append a copy of the current `comb` list to the `res` list. We use `comb[:]` to create a copy of the list since lists are mutable in Python, and we want to preserve the combination at this point without being modified later.

   - If the length of `comb` is not equal to `k`, we continue the recursion.
   
4. Within the `backtrack` function, use a loop to iterate over the numbers starting from `start` up to `n`.
   - For each number `num` in the range, add it to the current `comb` list to form the combination.
   
   - Make a recursive call to `backtrack` with `start` incremented by 1. This ensures that each number can only be used once in each combination, avoiding duplicate combinations.

   - After the recursive call, remove the last added number from the `comb` list using `comb.pop()`. This allows us to backtrack and try other numbers for the current position in the combination.

5. Start the recursion by calling `backtrack(1)` with `start` initially set to 1, as we want to start forming combinations with the numbers from 1 to `n`.

6. After the recursion is complete, the `res` list will contain all the valid combinations of size `k` formed from the numbers 1 to `n`. Return `res` as the final result.

The code uses a recursive backtracking approach to generate all the combinations efficiently. It explores all possible combinations, avoiding duplicates and forming valid combinations of size `k`. The result `res` will contain all such combinations at the end.

# Complexity
- Time complexity: O(n * k)
n is the number of elements and k is the size of the subset. The backtrack function is called n times, because there are n possible starting points for the subset. For each starting point, the backtrack function iterates through all k elements. This is because the comb list must contain all k elements in order for it to be a valid subset.

- Space complexity: O(k)
The comb list stores at most k elements. This is because the backtrack function only adds elements to the comb list when the subset is not yet complete.

```python []
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        res = []
        comb = []

        def backtrack(start):
            if len(comb) == k:
                res.append(comb[:])
                return
            
            for num in range(start, n + 1):
                comb.append(num)
                backtrack(num + 1)
                comb.pop()

        backtrack(1)
        return res
```
```javascript []
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const comb = [];

    function backtrack(start) {
        if (comb.length === k) {
            res.push([...comb]);
            return;
        }

        for (let num = start; num <= n; num++) {
            comb.push(num);
            backtrack(num + 1);
            comb.pop();
        }
    }

    backtrack(1);
    return res;    
};
```
```java []
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> comb = new ArrayList<>();

        backtrack(1, comb, res, n, k);
        return res;
    }

    private void backtrack(int start, List<Integer> comb, List<List<Integer>> res, int n, int k) {
        if (comb.size() == k) {
            res.add(new ArrayList<>(comb));
            return;
        }

        for (int num = start; num <= n; num++) {
            comb.add(num);
            backtrack(num + 1, comb, res, n, k);
            comb.remove(comb.size() - 1);
        }
    } 
}
```
```C++ []
class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        std::vector<std::vector<int>> res;
        std::vector<int> comb;

        backtrack(1, comb, res, n, k);
        return res;        
    }

private:
    void backtrack(int start, std::vector<int>& comb, std::vector<std::vector<int>>& res, int n, int k) {
        if (comb.size() == k) {
            res.push_back(comb);
            return;
        }

        for (int num = start; num <= n; num++) {
            comb.push_back(num);
            backtrack(num + 1, comb, res, n, k);
            comb.pop_back();
        }
    }    
};
```
