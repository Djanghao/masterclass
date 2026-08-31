# [Rust] notes on % operator.

**Author:** tmtappr
**Votes:** 3
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5282950/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5282950/)

---

# Intuition
Intuitively this isn't a difficult problem. The idea is to keep a prefix sum as `nums` is iterated over while taking the modulus `k` to find repeated moduli. Between any two repeated modulus values will be a subarray with a sum divisible by `k`. 

Rust's "modulus" operator is actually a *remainder* operator. When the dividend and divisor are both positive, the distinction isn't important. However, there can be subtle differences in how the `%` operator behaves in different languages when the dividend is negative. For instance, with Python we get back positive values that wrap around, which is what we want. To get similar behavior with Rust, we can use the `i32::rem_euclid(k)` method. Alternatively we can use simple math to get the modulus from the remainder:
``` console
num = -16; k = 5
----------------
 -16           % 5  = -1   // Remainder (Not useful for problem).
(-16 % 5 + 5)  % 5  =  4   // Modulus.
(-16).rem_euclid(5) =  4   // Modulus.
```
The choice of whether to use `.rem_euclid()` or `(n % m + m) % m` is probably one of cosmetics. They're likely to have similar performance.

The two approaches will give positive modulus values if the denominators are positive or negative; however if `k` were allowed to be negative, then the above two approaches would give different results. The Euclidian method returns positive moduli regardless of the signs of divisor or dividend, while the other formula will give negative values.

# Approach
`nums` is iterated over while keeping track of the prefix sum moduli. Instead of a `HashMap`, a vector is used to track moduli that have been previously seen, and their counts.

When a previously seen modulus is encountered, it indicates a region between both occurrences that has a sum divsible by `k`. If `n` occurences are encountered, the number of ways they can be divided can be calculated by summing the series of `1` to `n - 1`: `sum(1, 2, 3, .., n - 1)`. Or, the series can be summed concurrently while iterating through `nums` as below.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(k)$

# Code
``` rust []
// Rust's % operator is implemented using the "Truncated" method of
// calculation; but we have `.rem_euclid()` which is Euclidian.

impl Solution {
    pub fn subarrays_div_by_k(nums: Vec<i32>, k: i32) -> i32 {
        let mut mods  = vec![0; k as usize];
        let mut m     = 0;
        let mut count = 0;

        mods[0] = 1; // Implicitly we start with one 0 occurrence.

        for num in nums {
            m = (m + num).rem_euclid(k); // Prefix sum moduli.
            count += mods[m as usize];
            mods[m as usize] += 1;
        }
        count
    }
}
```
``` python []
# Python's % uses "Floored" method of calculation. We can use it 
# directly here.

class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        mods  = [0] * k
        m     = 0
        count = 0
        mods[0] = 1

        for num in nums:
            m = (m + num) % k # Python's % works alright for -num.
            count += mods[m]
            mods[m] += 1

        return count
```
``` java []
// Java's % uses "Truncated" method of calculation, but provides
// `Math.floorMod()` for "Floored" calculations.

class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        var mods  = new int[k];
        int m     = 0;
        int count = 0;

        mods[0] = 1;

        for (int num: nums) {
            m = Math.floorMod(m + num, k);
            count += mods[m];
            mods[m] += 1;
        }
        return count;
    }
}
```
``` Kotlin []
// Kotlin's % uses "Truncated" method of calculation, but numeric
// types provide a `.mod()` method that uses the "Floored" method.

class Solution {
    fun subarraysDivByK(nums: IntArray, k: Int): Int {
        var mods  = IntArray(k)
        var m     = 0
        var count = 0

        mods[0] = 1

        for (num in nums) {
            m = (m + num).mod(k)
            count += mods[m]
            mods[m] += 1
        }
        return count
    }
}
```
``` C []
// C's % uses "Truncated" method of calculation. But we can use the
// formula to get the right value.

int subarraysDivByK(int* nums, int numsSize, int k) {
    int* mods  = calloc(k, sizeof(int));
    int  m     = 0;
    int  count = 0;

    memset(mods, 0, sizeof(mods));

    mods[0] = 1;

    for (int i = 0; i < numsSize; i++) {
        m = ((m + nums[i]) % k + k) % k;
        count += mods[m];
        mods[m] += 1;
    }
    free(mods);
    return count;
}
```
``` C++ []
// C++'s % uses "Truncated" method of calculation. But we can use the
// formula to get the right value.

class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        auto mods = vector<int>(k, 0);
        int  m    = 0;
        int count = 0;

        mods[0] = 1;

        for (int num: nums) {
            m = ((m + num) % k + k) % k;
            count += mods[m];
            mods[m] += 1;
        }
        return count;
    }
};
```
``` JavaScript []
// JavaScript's % uses "Truncated" method of calculation. But we can
// use the formula to get the right value.

function subarraysDivByK(nums, k) {
    let mods  = Array(k).fill(0);
    let m     = 0;
    let count = 0;

    mods[0] = 1;

    for (let num of nums) {
        m = ((m + num) % k + k) % k;
        count += mods[m];
        mods[m] += 1;
    }
    return count;
}
```
# Additional notes on the % operator

**[This WikiPedia article on Modulo](https://en.wikipedia.org/wiki/Modulo#In_programming_languages)** has a table listing how each programming language implements their `%` operator. Above the table is a description on how each of the different methods of calculation behave with diagrams. **To read the diagrams, the green squiggly line is the remainder; if it's above the horizontal line, it's positive and negative otherwise. The red line shows the sign of the dividend and quotient. On the left is with a positive divisor, right is negative divisor.**

**Truncated calculation of % result (most languages)**
<img width="260" height="135" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Divmod_truncated.svg/390px-Divmod_truncated.svg.png">

**Floored calculation of % result (used by Python)**
<img width="260" height="135" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Divmod_floored.svg/390px-Divmod_floored.svg.png">

**Euclidian calculation of % result (provided by functions)**
<img width="260" height="135" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Divmod_Euclidean.svg/390px-Divmod_Euclidean.svg.png">

*If the above diagrams don't render well on this page, you can go to the linked WikiPedia article to view them.*