# Python Simple Solution :)

**Author:** dinar
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subsequences/solutions/4530677/](https://leetcode.com/problems/count-the-number-of-good-subsequences/solutions/4530677/)

---

**Solution without optimization**
```Python
class Solution:
    def countGoodSubsequences(self, s: str) -> int:
        ans = 0
        
        nums = list(Counter(s).values())
        nums.sort()
        
        prev = 0
        for i, n in enumerate(nums):
            while prev < n:
                prev += 1
                cur = 1
                for j in range(i, len(nums)):
                    cur *= (math.comb(nums[j], prev) % 1_000_000_007 + 1)
                    cur %= 1_000_000_007
                cur -= 1
                cur %= 1_000_000_007
                ans += cur
                ans %= 1_000_000_007
        return ans
```

**Solution with optimization**
```Python
class Solution:
    def countGoodSubsequences(self, s: str) -> int:
        ans = 0
        
        nums = list(Counter(s).values())
        nums.sort()
        dp = dict()
        prev = 0
        for i, n in enumerate(nums):
            while prev < n:
                prev += 1
                cur = 1
                for j in range(i, len(nums)):
                    if (nums[j], prev) in dp:
                        mul = dp[(nums[j], prev)]
                    elif (nums[j], nums[j] - prev) in dp:
                        mul = dp[(nums[j], nums[j] - prev)]
                    else:
                        mul = math.comb(nums[j], prev) % 1_000_000_007
                        dp[(nums[j], prev)] = mul
                    cur *= (mul + 1)
                    cur %= 1_000_000_007
                cur -= 1
                cur %= 1_000_000_007
                ans += cur
                ans %= 1_000_000_007
        return ans
```


**Explanation**

1. **Count the frequencies of characters:**
   - The code starts by counting the frequencies of each character in the input string `s`. This is done using the `Counter` class from the `collections` module, and the result is stored in the `nums` list.

2. **Sort the frequency list:**
   - The frequency list (`nums`) is then sorted, ensuring that we process frequencies in ascending order. This is a crucial step for the subsequent dynamic programming approach.

3. **Iterate through frequency list:**
   - The code iterates through the sorted frequency list, keeping track of the current frequency (`n`). It also maintains a variable `prev` to represent the previous frequency that has been processed.

4. **Calculate and update the answer:**
   - Inside the loop, there is a nested loop that iterates through the remaining frequencies. For each frequency, it calculates the number of good subsequences that can be formed by selecting a certain number of characters from that frequency.
   - The calculations involve considering both the current frequency and the difference between the current frequency and the previously processed frequency (`prev`).
   - The results are multiplied and updated using modulo 10^9 + 7 to prevent overflow.

5. **Update counters and return the result:**
   - The final result is updated by adding the calculated number of good subsequences to the overall count. The answer is also updated modulo 10^9 + 7 to ensure it remains within the specified constraints.

**Why it works?**

Let's delve into the key aspects of the solution to understand why it works, focusing on the use of `math.comb` and multiplication within the loop:

1. **Use of `math.comb`:**
   - The `math.comb(n, k)` function calculates the number of combinations of choosing k items from a set of n distinct items. In the context of this problem, it is used to calculate the number of ways to choose `prev` characters from a frequency `nums[j]`.
   - This is crucial because, in a good subsequence, each character must be chosen the same number of times. The combination calculation accounts for the different ways we can choose characters while maintaining the required frequencies.

2. **Multiplication and Update of the Count:**
   - Inside the dynamic programming loop, there is a multiplication step: `cur *= (mul + 1)`. This step is essential for updating the count of good subsequences.
   - The multiplication involves `(mul + 1)` because, in combinatorics, when counting combinations, the formula involves adding 1 to the count. This is due to the fact that an empty set (choosing 0 items) is also considered a valid combination.

3. **Modulo Operation:**
   - After each multiplication and addition operation, the result is updated modulo `1_000_000_007`. This is done to prevent integer overflow and ensure that the final answer remains within the specified constraints.
   - Modular arithmetic is particularly useful in situations where the result can become very large, as it allows us to work with the remainder of the division by a certain modulus.

In summary, the combination calculation using `math.comb` is employed to determine the number of ways to choose characters while maintaining the required frequencies. The multiplication step is necessary to update the count of good subsequences, and the modulo operation ensures that the result remains within the specified range. Together, these elements contribute to an efficient and accurate calculation of the number of good subsequences in the given string.


**Additional 50 cents**

The solution is not optimal. We can calculate combinations in advance by calculating factorials of numbers from 1 to maximym character frequency. And use of combination formula: `comb(n, k) = n! / ( (n-k)! * (k)!)`