# Python | DFS

**Author:** Khosiyat
**Votes:** 34
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/5814160/](https://leetcode.com/problems/lexicographical-numbers/solutions/5814160/)

---

[see the Successfully Accepted Submission](https://leetcode.com/problems/lexicographical-numbers/submissions/1397007134/?envType=daily-question&envId=2024-09-21)

# Code
```python3 []
class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        result = []
        curr = 1
        for _ in range(n):
            result.append(curr)
            if curr * 10 <= n:
                curr *= 10  # Move to the next depth (append 0 at the end)
            else:
                while curr % 10 == 9 or curr + 1 > n:
                    curr //= 10  # Backtrack by removing the last digit
                curr += 1  # Increment to the next number in lexicographical order
        return result

```

### How can we approach:

1. Start from the number `1`.
2. Try to expand the current number by multiplying it by 10 (e.g., `1 -> 10`, `2 -> 20`, etc.).
3. If the number exceeds `n`, backtrack by incrementing the last digit (e.g., `19 -> 2`).
4. If the incremented number has a last digit of `9` or exceeds `n`, backtrack further.

### Explanation:

#### Initialization:
- Start with `curr = 1`, which is the first lexicographical number.

#### Loop for `n` iterations:
1. Add `curr` to the result list.
2. If `curr * 10 <= n`, move to the next depth in lexicographical order by multiplying `curr` by `10` (this appends a `0`).
3. If we can't multiply by 10 (because it would exceed `n`), we check the next number by incrementing `curr`. But if `curr` ends in `9` or incrementing it would exceed `n`, we backtrack by dividing `curr` by `10` until it's safe to increment again.

#### Termination:
- The loop runs exactly `n` times, ensuring that we only generate the numbers within the range `[1, n]`.

### Time Complexity:
- The algorithm runs in **O(n)** time because each number from `1` to `n` is visited exactly once.

### Space Complexity:
- The space complexity is **O(1)** extra space since we only store the result list, which is required as part of the output.



![image](./images/0.jpeg)