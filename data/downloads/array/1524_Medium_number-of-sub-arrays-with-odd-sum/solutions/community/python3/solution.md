# Python | O(n) time & O(1) space | prefix sum(detailed explanation)

**Author:** xuanyuchen0
**Votes:** 21
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/755495/](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/755495/)

---

Keys:
1) odd number - even numer = odd number(e.g., 9 - 4 = 5)
2) even number - odd number = odd number(e.g., 8 - 3 = 5)
3) prefix sum: to obtain the sum of subarray `arr[i + 1, j]`, we can use prefix sum by `sum[0, j] - sum[0, i]`.

Idea:
1) Keep two counters, `odd_sum` and `even_sum` for the number of odd sums and even sums;
2) Iterate through the array and during each iteration, keep the the sum of elements we've seen so far in `curr_sum`;
3) Say the current index is `j`,  if `curr_sum` is odd, we can decrease `curr_sum` by any previously seen even sum(say index `i`) to get a subarray `arr[i + 1, j]` with an odd sum; similarly, if `curr_sum` is even, we can decrease `curr_sum` by any previously seen odd sum to get a subarray with an odd sum. 

`even_sum` initialize to be 1 since before we start and `curr_sum = 0`, 0 is even.

Time: O(n) - one pass
Space: O(1)

Here's the code:
```
class Solution:
    def numOfSubarrays(self, arr: List[int]) -> int:
        mod, n = 10 ** 9 + 7, len(arr)
        odd_sum, even_sum, curr_sum, ans = 0, 1, 0, 0
        for i in arr:
            curr_sum += i
            if curr_sum % 2 == 1:
                odd_sum += 1
                ans += even_sum % mod
            else:
                even_sum += 1
                ans += odd_sum % mod
        ans %= mod
        return ans
```

I know a lot of others also share this idea, but I was having a hard time solving this problem during the contest(got 1 TLE and 1 error before my solution got accepted), and that's why I wanna explain it in details.
If you find this post helpful, please upvote. Thank you.