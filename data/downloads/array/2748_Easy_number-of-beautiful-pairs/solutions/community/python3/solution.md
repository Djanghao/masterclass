# Python 3   ||   6 lines,  w/ explanation   ||   T/S: 75%  /  99%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3681920/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3681920/)

---

Here's how the code works:

- `frst`and`last` contain the first digit and last digit of each element of `nums`respectively.

- We iterate over each pair of numbers in`frst`and`last`to check whether that pair is a *beautiful pair*. The outer loop iterates over the indices and values of `frst`, while the inner loop iterates over the values of `last` starting from the next index.

- For each pair of numbers (`n1` and `2`), the code checks whether they are coprime by using the`gcd`function.

- After the loops, the code returns the final value of `ans`, which represents the total number of beautiful pairs.
```
class Solution:
    def countBeautifulPairs(self, nums: List[int]) -> int:

        ans = 0

        frst = list(map(lambda x: int(str(x)[0]), nums))
        last = list(map(lambda x: x %10, nums))

        for i,n1 in enumerate(frst):
            for n2 in last[i+1:]: ans+= gcd(n1, n2) == 1

        return ans
```
[https://leetcode.com/problems/number-of-beautiful-pairs/submissions/985074173/](https://leetcode.com/problems/number-of-beautiful-pairs/submissions/985074173/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*^2)in which *N* ~`len(nums)`.