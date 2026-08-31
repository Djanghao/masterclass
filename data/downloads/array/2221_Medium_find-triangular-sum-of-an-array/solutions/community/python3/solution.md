# Pascal Triangle

**Author:** votrubac
**Votes:** 41
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/1909302/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/1909302/)

---

We can do a simulation for a O(n * n) solution, but it's not interesting. Instead, we will use a bit of math to look at more efficient solutions.

Each number in the array contributes to the final sum a certain number of times.  We can visualize how to figure out factors for each number using [Pascal's triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle):

![image](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

For test case `[1, 2, 3, 4, 5]`, we will get `1 * 1 + 2 * 4 + 3 * 6 + 4 * 4 + 5 * 1` = `1 + 8 + 18 + 16 + 5` = `48`, or `8` after modulo `10`.

The bottom row of Pascal's triangle are [binomial coefficients](https://en.wikipedia.org/wiki/Binomial_coefficient), which can be computed as `nCr(n - 1, i)`. 

## Approach 1: comb
Using the built-in `comb` Python function to compute `nCr`.
**Python 3**
```python
class Solution:
    def triangularSum(self, nums: List[int]) -> int:
        return sum(n * comb(len(nums) - 1, i) for i, n in enumerate(nums)) % 10
```

## Approach 2: Iterative nCr
The `nCr` can be computed iteratively as `nCr(r + 1) =  nCr(r) * (n - r) / (r + 1)`.
**Python 3**
```python
class Solution:
    def triangularSum(self, nums: List[int]) -> int:
        res, nCr, n = 0, 1, len(nums) - 1
        for r, num in enumerate(nums):
            res = (res + num  * nCr) % 10
            nCr = nCr * (n - r) // (r + 1)
        return res
```
## Approach 3: Pascal Triangle
The approach 2 above won't work for C++ as `nCr` can get quite large. 

> We could use modular arithmetic with inverse modulo for the division. However, for modulus `10`, we need to put co-primes `5` and `2` out of brackets before computing the inverse modulo. Check out [this post](https://leetcode.com/problems/find-triangular-sum-of-an-array/discuss/1907380/O(n)-time-O(1)-space-Python-189-ms-C%2B%2B-22-ms-Java-4-ms) by [StefanPochmann](https://leetcode.com/StefanPochmann/) to see how to do it.

Instead, we can build the entire Pascal Triangle once (for array sizes 1..1000) and store it in a static array. From that point, we can compute the result for any array in O(n). The runtime of the code below is 12 ms.

**C++**
Note that here we populate the Pascal Triangle lazilly. 
```cpp
int c[1001][1001] = {}, n = 1;
class Solution {
public:
int triangularSum(vector<int>& nums) {
    for (; n <= nums.size(); ++n) // compute once for all test cases.
        for (int r = 0; r < n; ++r) 
            c[n][r] = r == 0 ? 1 : (c[n - 1][r - 1] + c[n - 1][r]) % 10;
    return inner_product(begin(nums), end(nums), begin(c[nums.size()]), 0) % 10;
}
};
```