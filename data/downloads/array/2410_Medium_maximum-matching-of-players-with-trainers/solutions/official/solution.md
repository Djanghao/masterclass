# Official Solution

**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solution/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solution/)

---

### Approach: Sorting + Two Pointers + Greedy

#### Intuition

To match the maximum number of athletes, we can follow a greedy strategy: sort both athletes and trainers in increasing order of ability, and for each athlete, assign the trainer with the smallest possible ability who can still match that athlete. This ensures that stronger trainers are preserved for athletes who need them.

Let’s understand why this works.

Suppose there are $m$ athletes, with their abilities stored in the array `players[0]` to `players[m - 1]`, and $n$ trainers, with abilities in `trainers[0]` to `trainers[n - 1]`. We assume both arrays are sorted in non-decreasing order.

Now consider matching trainers to athletes one by one. Suppose we’ve already matched trainers to the first $i - 1$ athletes. For the $i$-th athlete, we want to match the trainer with the smallest ability who can still satisfy this athlete, i.e., the first trainer `trainers[j]` such that `trainers[j] ≥ players[i]`.

We argue that this is optimal:

* **Case 1**: If `players[i + 1] ≤ trainers[j]`, then we could match `trainers[j]` to `players[i + 1]` and `trainers[j + 1]` to `players[i]`, but this would still result in the same number of total matches.

* **Case 2**: If `trainers[j + 1]` is used for `players[i]` instead of `trainers[j]`, and if `players[i + 1] > trainers[j]`, then `trainers[j]` will not be able to match any athlete, reducing the total number of matches.

Hence, it's better to use the smallest suitable trainer for each athlete in order.

Based on the above analysis, we can apply a greedy method to match the maximum number of athletes. First, sort both the `players` and `trainers` arrays in increasing order. Then, use two pointers: one for iterating through the `players` array and the other for the `trainers` array. For each player, we try to find the first available trainer whose ability is greater than or equal to that of the player.

Because both arrays are sorted, we can find matches using a single linear pass. If a trainer can match a player, we count it and move both pointers forward. If the current trainer is not strong enough, we move to the next trainer. This continues until we reach the end of either array. At that point, the number of successful matches recorded is the maximum number of athletes that can be matched with the available trainers.

#### Implementation

<iframe src="https://leetcode.com/playground/bxD4hvHZ/shared" frameBorder="0" width="100%" height="497" name="bxD4hvHZ"></iframe>

#### Complexity analysis

Let $m$ be the length of the `players` array, and $n$ be the length of the `trainers` array.

- Time complexity: $O(m \log m + n \log n)$. 
  
  We sort both arrays, which takes $O(m \log m)$ and $O(n \log n)$ time respectively. After sorting, we traverse both arrays once using two pointers, which takes $O(m + n)$ time. So the overall time complexity is: $O(m \log m + n \log n)$.

- Space complexity: $O(\log m + \log n)$
  
  The space complexity mainly refers to the additional space required for sorting.