# Python3 || 12 lines, smallest prime factor  || T/S: 94% / 98%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5948662/](https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5948662/)

---

Here's the intuition:
1. It's an elementary exercise in number theory to show that finding the quotient of a composite integer and its greatest proper divisor is equivalent to finding that integer's least factor, which will be a prime number.
1. From 1) above, it's clear that "any number of times" is a *red herring*. We only need to perform the operation once and only if an integer is greater than its successor in `nums`.

2. Thus, the problem can be reduced to this: We iterate through `nums` right to left. If an integer in `nums` is greater than its successor, replace it with its least prime divisor. If it is still greater than its successor, return -1. Otherwise, count the number of operations and return that count as the answer.

```python3 []
class Solution:
    def minOperations(self, nums: List[int], ans = 0) -> int:

        @lru_cache(2000)
        def least_prime(num: int) -> int:

            if num % 2 == 0: return 2

            for prime in range(3, isqrt(num) + 1, 2):
                if num % prime == 0: return prime

            return num


        for i in range(len(nums) - 2, -1, -1):
            if nums[i] <= nums[i + 1]: continue

            nums[i] = least_prime(nums[i])
            if nums[i] > nums[i + 1]: return -1
                
            ans += 1
        return ans
```
```cpp []
class Solution {
public:

    std::unordered_map<int, int> cache;

    int leastPrime(int num) {
        if (num % 2 == 0) return 2;

        for (int prime = 3; prime <= std::sqrt(num); prime += 2) {
            if (num % prime == 0) return prime;}

        return num;}

    int minOperations(std::vector<int>& nums) {
        int ans = 0;
        int n = nums.size();

        for (int i = n - 2; i >= 0; --i) {
            if (nums[i] <= nums[i + 1]) continue;

            if (cache.find(nums[i]) == cache.end()) {
                cache[nums[i]] = leastPrime(nums[i]);
            }
            nums[i] = cache[nums[i]];

            if (nums[i] > nums[i + 1]) return -1;

            ans++;}

        return ans;}
};
```
```java []
class Solution {
    private Map<Integer, Integer> cache = new HashMap<>();

    public int leastPrime(int num) {
        if (num % 2 == 0) return 2;

        for (int prime = 3; prime * prime <= num; prime += 2) {
            if (num % prime == 0) return prime;}

        return num;}

    public int minOperations(int[] nums) {
        int ans = 0;
        int n = nums.length;

        for (int i = n - 2; i >= 0; --i) {
            if (nums[i] <= nums[i + 1]) continue;

            if (!cache.containsKey(nums[i])) {
                cache.put(nums[i], leastPrime(nums[i]));
            }
            nums[i] = cache.get(nums[i]);

            if (nums[i] > nums[i + 1]) return -1;

            ans++;}

        return ans;}
}
```
[https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/submissions/1431620913/](https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/submissions/1431620913/)



I could be wrong, but I think that time complexity is *O*(*N* sqrt(*M*)) and space complexity is *O*(*K*), in which *N* ~ `len(nums)`,  *M* ~ `max(nums)`, and  *K* ~ the number of distinct integers in `nums`.