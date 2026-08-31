# [Python3] Sorting Hamming Weights + Binary Search With Detailed Explanations

**Author:** xil899
**Votes:** 24
**Link:** [https://leetcode.com/problems/number-of-excellent-pairs/solutions/2324641/](https://leetcode.com/problems/number-of-excellent-pairs/solutions/2324641/)

---

I have to say that the problem description is a little bit confusing, so let's clarify it together.

**Observations & Explanations**
1. The problem asks for the number of **distinct** excellent pairs, therefore duplicated `num` in the `nums` array does not matter and we only need to look at unique `num` appeared in the array.
2. The excellent pair **can** include a `num` paired with itself.
3. For any pair of bits `(b1, b2)`, where `b1` and `b2` can take `0` or `1`, we have `(b1 OR b2) + (b1 AND b2) = b1 + b2`. Specifically,
* 	`(0 OR 0) + (0 AND 0) = 0 + 0 = 0 = 0 + 0`;
* 	`(0 OR 1) + (0 AND 1) = 1 + 0 = 1 = 0 + 1`;
* 	`(1 OR 0) + (1 AND 0) = 1 + 0 = 1 = 1 + 0`;
* 	`(1 OR 1) + (1 AND 1) = 1 + 1 = 2 = 1 + 1`.
4. From above, we have that for any pair `(num1, num2)`, the sum of the number of set bits in `num1 OR num2` and `num1 AND num2` is the same as the number of set bits in `num1` and `num2` themselves. Therefore, we don't actually need to calculate the `OR/AND` operations but just need to store the hamming weight, `hamming`, for each of the unique `num` in the `nums` array.
5. After we have the `hamming` array, the problem essentially becomes a "Two Sum Greater Than K" type of problem, where we can sort the `hamming` array first, and then use a binary search to get the number of "Excellent Pairs" in the original `nums` array.

**Complexity Analysis**
Time: `O(NlogN + NlogM)`, where `M = max(nums)`.
Space: `O(N)`, for storing the hamming weights;

**Solution**
Please upvote if you find this solution helpful. Thanks!
```
class Solution:
    def countExcellentPairs(self, nums: List[int], k: int) -> int:
        hamming = sorted([self.hammingWeight(num) for num in set(nums)])
        ans = 0
        for h in hamming:
            ans += len(hamming) - bisect.bisect_left(hamming, k - h)
        return ans
        
    def hammingWeight(self, n):
        ans = 0
        while n:
            n &= (n - 1)
            ans += 1
        return ans
```

**Remark 1**: Above is a solution (~2000 ms) implemented with binary search after sorting the `hamming` array. One can also use two pointers to get the number of "Excellent Pairs" in the original `nums` array. However, the time complexity would not change since sorting the `hamming` array requires `O(NlogN)` time complexity.

**Remark 2**: Shorter and faster solution (1435 ms) using Python 3.10's [new built-in method](https://docs.python.org/3/library/stdtypes.html#int.bit_count) `int.bit_count()`.
```
class Solution:
    def countExcellentPairs(self, nums: List[int], k: int) -> int:
        hamming = sorted([num.bit_count() for num in set(nums)])
        ans = 0
        for h in hamming:
            ans += len(hamming) - bisect.bisect_left(hamming, k - h)
        return ans
```

**Remark 3**: Another short and fast solution (1129 ms) using `Counter` (hashmap).
```
class Solution:
    def countExcellentPairs(self, nums: List[int], k: int) -> int:
        hamming = Counter([num.bit_count() for num in set(nums)])
        ans = 0
        for h1 in hamming:
            for h2 in hamming:
                if h1 + h2 < k:
                    continue
                ans += hamming[h1] * hamming[h2]
        return ans
```