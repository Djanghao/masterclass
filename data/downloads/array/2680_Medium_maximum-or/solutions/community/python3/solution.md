# [C++, Java, Python] Intuition with Explanation | Proof of Why? | Time: O(n)

**Author:** shivamaggarwal513
**Votes:** 34
**Link:** [https://leetcode.com/problems/maximum-or/solutions/3521223/](https://leetcode.com/problems/maximum-or/solutions/3521223/)

---

# Intuition
Multiply by $2$ means left shift by $1$. We can left shift some numbers but at most $k$ times in total. To maximize the result we should generate set bits in the most significant part of numbers.

Take this array
```
 5 - 000000000101
 6 - 000000000110
 9 - 000000001001
20 - 000000010100
23 - 000000010111
```
To maximize the result, we should pick the numbers having their Left Most Set Bit (LMSB) farthest among all elements. $20$ and $23$ have their LMSB maximum among all elements. We should try to shift $20$ or $23$, $k$ times combined. Like shift $20$ $x$ times and shift $23$ $k-x$ times.

---

But still why is shifting only one number $k$ times is more optimal?
- Suppose $k=5$ and we shifted $20$, $5$ times and LMSB went further $5$ steps on the left.
The modified array becomes:
```
  5 - 000000000101
  6 - 000000000110
  9 - 000000001001
640 - 001010000000
 23 - 000000010111
```
The LMSB of $640$ is $2^9=512$ so Bitwise-OR of array will be atleast $2^9$. It can be more depending upon other less significant bits.
`ans >= 001000000000 (512)`
- Now let's say we don't give all $k$ moves to a single number. Since, we are not giving all $k$ moves to single number, we will never be able to generate $2^9$ set bit in any number. And even if somehow we generate all lower set bits $2^8, 2^7, 2^6, ...$ by distributing $k$ moves to different numbers, answer will still be less than $2^9$.
$2^8 + 2^7 + 2^6 + ... + 2^0 = 2^9 - 1 < 2^9$

Therefore, giving all $k$ moves to single element (that too having largest LMSB) is the most optimal.

# Approach
- Shift each number $k$ times and calculate Bitwise-OR.
- To make this fast, pre-compute Bitwise-OR of elements before it (prefix) and after it (suffix).
- Take maximum of them.

# Code
```C++ []
class Solution {
public:
    long long maximumOr(vector<int>& nums, int k) {
        int n = nums.size();
        long long result = 0;
        vector<int> prefix(n + 1), suffix(n + 1);
        for (int i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] | nums[i - 1];
            suffix[n - i - 1] = suffix[n - i] | nums[n - i];
        }
        for (int i = 0; i < n; i++) {
            result = max(result, prefix[i] | ((long long)nums[i] << k) | suffix[i]);
        }
        return result;
    }
};
```
```Java []
class Solution {
    public long maximumOr(int[] nums, int k) {
        int n = nums.length;
        long result = 0;
        int[] prefix = new int[n + 1];
        int[] suffix = new int[n + 1];
        for (int i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] | nums[i - 1];
            suffix[n - i - 1] = suffix[n - i] | nums[n - i];
        }
        for (int i = 0; i < n; i++) {
            result = Math.max(result, prefix[i] | ((long)nums[i] << k) | suffix[i]);
        }
        return result;
    }
}
```
```Python []
class Solution:
    def maximumOr(self, nums: List[int], k: int) -> int:
        n, result = len(nums), 0
        prefix, suffix = [0] * (n + 1), [0] * (n + 1)
        for i in range(1, n):
            prefix[i] = prefix[i - 1] | nums[i - 1]
            suffix[n - i - 1] = suffix[n - i] | nums[n - i]
        for i in range(n):
            result = max(result, prefix[i] | (nums[i] << k) | suffix[i])
        return result
```

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$