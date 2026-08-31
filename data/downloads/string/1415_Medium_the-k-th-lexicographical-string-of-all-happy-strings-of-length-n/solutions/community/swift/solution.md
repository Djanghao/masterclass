# Swift – Backtracking, exit early, compact

**Author:** DevilDimon
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/5493470/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/5493470/)

---

# Approach

First, count how many possible happy strings there can be given $$n$$ and $$k$$. The number is $$3*2^{n-1}$$ as there are 3 ways to choose the first number and 2 ways to choose all subsequent ones. If $$k$$ is greater than that number, we'll never find that many \u2013 so we exit early.

Afterwards, we launch backtracking three times using different first letter to keep the code inside the backtracking simple (no need to account for the first letter case). Since we choose the next character from left to right in the `alphabet` variable, there is no need to sort the resulting array.

Finally, we retrieve the `k - 1` element as the problem states that `k` is 1-based (not stated directly, but examples give it away). We are guaranteed to have at least `k` elements due to the initial check.

# Complexity
- Time complexity:
$$O(n * 2^n)$$, as the `cur` array is copied for the purposes of backtracking ($$O(n)$$), and there are $$2^n$$ iterations performed for the constant 3 times.

- Space complexity:
$$O(n)$$ for the stack depth and `cur` storage.

# Code
```
class Solution {
    func getHappyString(_ n: Int, _ k: Int) -> String {
        guard Decimal(k) <= 3 * pow(2, n - 1) else { return "" }

        var result = [String]()

        backtrack(["a"], n, &result)
        backtrack(["b"], n, &result)
        backtrack(["c"], n, &result)

        return result[k - 1]
    }

    func backtrack(_ cur: [Character], _ n: Int, _ result: inout [String]) {
        if cur.count == n {
            result.append(String(cur))
            return
        }

        let alphabet: [Character] = ["a", "b", "c"]
        for letter in alphabet where letter != cur.last! {
            backtrack(cur + [letter], n, &result)
        }
    }
}
```