# Python 3   ||   Three versions   ||   T/S: 94%  /  90%

**Author:** Spaulding_
**Votes:** 22
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/3802569/](https://leetcode.com/problems/check-if-array-is-good/solutions/3802569/)

---



With `sorted` : TC / OC: *O*(*N*log*N*) / *O*(*N*)
```
class Solution:
    def isGood(self, nums: List[int]) -> bool:
        
        n = len(nums)

        return sorted(nums) == list(range(1,n))+[n-1]
```
With `Counter` :   TC / OC: *O*(*N*) / *O*(*N*)
```
class Solution:
    def isGood(self, nums: List[int]) -> bool:
        
        n = len(nums)

        return Counter(nums) == Counter(range(1,n)) + Counter((n-1,))
```
Counting :   TC / OC: *O*(*N*) / *O*(*N*)
`nums` is a permutation of `base[n]` if and only if their sums, max values, and count of distinct elements are respectively equal. (It's an interesting exercise to show that `sum(base[n]) = (n+3)*n//2`) 
```
class Solution:
    def isGood(self, nums: List[int]) -> bool:

        n, m, sm, mx = len(nums)-1, len(set(nums)), sum(nums), max(nums)

        return sm == (n+3)*n//2 and n == m == mx
```
[https://leetcode.com/problems/check-if-array-is-good/submissions/1292604833/](https://leetcode.com/problems/check-if-array-is-good/submissions/1292604833/)