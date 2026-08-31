# Why Binary Search?? - Explained with Example | [TS | JS | Python] | Beats 100% ✅🔥

**Author:** TimeTerminal
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/5976020/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/5976020/)

---

# Intuition
You may think to create a matrix of products. So why use the binary search approach?

- We know that a binary search approach is better for scalability and efficiency for really large numbers. So we use it to narrow down the search for the number in a wide range of products between 1 ($$1*1$$) to $$m*n$$.
- Instead of forming a multiplication matrix then iterating through it until the number is found, the idea is to avoid doing multiplications altogther and instead focus on finding how many products are present in the list below certain points in the list.
- Even if you create a priority queue or a heap to store the list of products in a sorted fashion, you're still pushing and popping. Which increases the time complexity to $$O(k * log(m))$$. Because in order to figure out where a product goes in the list, you need to compare it to at least 1 other product. Eg. 3 ($$3*1$$) is less than 6 ($$3*3$$), and so any list would have to be arranged to move 3 before 6: [... 3, ..., 6, ...].
- Binary search also reduces the required storage space.
  - The space complexity of creating a sorted product list = $$O(k * log(m))$$, because you push and pop from the heap k times, where m is the # of rows.
- Using an example where `m=2`, `n=3`, and `k=6`, the time complexity of the 2 approaches would be:
  - Binary search: $$O(m * log(m * n))$$ => $$2 * log(2 * 3)$$ => `~1.55`
  - Creating a sorted product list: $$O(k * log(m))$$ => $$6 * log(3)$$ => `2.86` (worse than binary search)

# Approach
<!-- Describe your approach to solving the problem. -->
Let's use the following example: `m = 2`, `n = 3`, `k = 6`:
The final sorted list of products looks like: $$[1x1, 2x1, 2x1, 3x1, 2x2, 3x2]$$ which equals $$[1,2,2,3,4,6]$$.

The multiplication table can be visualized as:
```
                     n (# of columns)                n
                     ---------------             ----------
                      1  |  2  | 3               1 | 2 | 3
                    ================  =>        ===========
m (# of rows) | 1 || 1\xD71 | 2\xD71 | 3x1      | 1 || 1 | 2 | 3
              | 2 || 2x1 | 2x2 | 3x2      | 2 || 2 | 4 | 6
```

- We use a modified version of the traditional binary search. Our goal is to find a narrow window between left and right. Only when `left === right`, do we stop the while loop and return `left` (or `right` as they're the same).
- All 3 variables: `left`, `right`, and `mid` represent potential values from the product list. Before the first loop, they are set as:
  - `left` = 1 (`1 * 1`)
  - `right` = 6 (`m * n` or `2 * 3` in our example)
  - `mid` = 3 (`left + Math.floor((right - left) / 2)`)
- For each iteration we want to:
  - Check how many products are less than or equal to the current mid point. This is obtained through division:
    - Consider that i represents each row of m and j (unused) represents each column of n. When they are multiplied together, they form the products list: $$[1*1, 2*1, 1*2, 1*3, ...]$$ which is actually $$[i*j, (i+1 * j), (i * j+1), (i * j+2), ...]$$ and that equals to $$[1, 2, 2, 3, ...]$$.
    - This means that for each m (which is i) we want to find the number of products of i x j <= mid.
      - So algebraically rearranging `i * j <= mid` gives us `j <= mid/i`.
  - Eg. of the first `for` loop iteration:
    - If we had a final products list, it would look like $$[1, 2, 2, 3, ...]$$ (for reference purposes)
    - `mid = 3`, `m = 2`, `i = 1` (starting point)
      - Loop 1: `mid/i` => `3/1` = `3`. Therefore the valid products (`i * j`) for this row `i = 1` are: `1 * 1`, `1 * 2`, and `1 * 3`. `count` set to 3.
      - Loop 2: `mid/i` => `3/2` = `1.5`. Flooring it => `1`. Valid products (`i * j`) for row `i = 2` are: `2 * 1`. Count (which was 3 earlier) `+= 1` => `4`.
      - We can see 1, 2, 2 and 3 are indeed `<= 3`. Therefore there are 4 numbers below or equal 3. So `count` = 4.
  - After each round of counting, check whether the current window (left to right) is above or below this count and make the window narrower to the count.
    - In our above example iteration, `count` = 4 and `left` = 1. Therefore `left` would be set to `mid + 1` => `3 + 1` = `4`.
  - The count returned tells us that there could be up to k products in the list. There could be a lower number of products which also have counts equal to or greater than k. Therefore, the algorithm should only stop the while loop when the window of `left` to `right` is narrow enough to find us the smallest possible k-th number from the start of the products list, which only happens when left and right are equal, so `left === right`.
- When the binary search completes, `left` is guaranteed to equal to the k-th smallest number in the list of products.

# Complexity
- Time complexity:
$$O(m * log(m * n))$$

- Space complexity:
$$O(1)$$

# Code
```typescript []
const getCountTillMid = (mid: number, m: number, n: number) => {
  let count = 0;

  for (let i = 1; i <= m; i++) {
    count += Math.min(Math.floor(mid / i), n);
  }

  return count;
};

const findKthNumber = (m: number, n: number, k: number): number => {
  let left = 1;
  let right = m * n;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    const count = getCountTillMid(mid, m, n);

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
```
```javascript []
const getCountTillMid = (mid, m, n) => {
  let count = 0;

  for (let i = 1; i <= m; i++) {
    count += Math.min(Math.floor(mid / i), n);
  }

  return count;
};

const findKthNumber = (m, n, k) => {
  let left = 1;
  let right = m * n;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    const count = getCountTillMid(mid, m, n);

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
```
```python []
class Solution:
    def getCountTillMid(mid: int, m: int, n: int) -> int:
        count = 0

        for i in range(1, m + 1):
            count += min(mid // i, n)

        return count

    def findKthNumber(self, m: int, n: int, k: int) -> int:
        left = 1
        right = m * n

        while left < right:
            mid = (left + right) // 2
            count = self.getCountTillMid(mid, m, n)

            if count < k:
                left = mid + 1
            else:
                right = mid

        return left

```