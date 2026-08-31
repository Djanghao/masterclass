# Hash Table || O(n*k) || Explanation

**Author:** Thiennk
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5389535/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5389535/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- ``(a + b) % k = (c + d) % k`` is equivalent to ``(a % k) + (b % k) = (c % k) + (d % k)``
- (a % k) < k
- (a % k) + (b % k) < 2*k
# Approach
<!-- Describe your approach to solving the problem. -->
- I will find all subsequences such that the sum between two elements is equal, and this sum has a value ``from 0 to 2*k``
- For each element, I look to see if there is any previous element plus ``nums[i] % k`` equals the total. If so, I will increase the length of the subsequence, otherwise this will be the first element of this subsequence.
- index[] to store the most recent occurrence of ``(sum - nums[i] % k)``, of course you have to update it every iteration.
# Complexity
- Time complexity: $$O(n*k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    
    fun solve(nums: IntArray, k: Int, t: Int): Int {
        var a: IntArray = IntArray(nums.size) {0};
        var index: IntArray = IntArray(2*k+1) {-1};
        var m: Int = 0;

        index[nums[0] % k] = 0;
        a[0] = 1;
        var rest = 0;

        for (i in 1 until nums.size) {
            rest = t - (nums[i] % k);
            index[nums[i] % k] = i;

            if (rest >= 0 && index[rest] != -1) {
                a[i] = a[index[rest]]+1;
                m = max(a[i], m);
            }
            else a[i] = 1;
        }
        return m;
    }
    
    fun maximumLength(nums: IntArray, k: Int): Int {
        if (nums.size == 2) return 2;
        var a: IntArray = IntArray(k) {0};
        for (i in 0 until nums.size) {
            a[nums[i] % k]++;
        }
        var m = 0;
        for (i in 0 until k)
            m = max(m, a[i]);
        for (i in 0..(2*k))
            m = max(m, solve(nums, k, i))
        return m;
    }
}
```