# Range Minimums And Maximums | Linear Time | Beating 100% in Most Languages

**Author:** sergei99
**Votes:** 87
**Link:** [https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6013326/](https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6013326/)

---

# Intuition
We need to determine whether an array could be sorted by exchanging any two adjacent elements with the same bit population count any number of times. The array size could be as large as $100$, and the element range is $[1; 256]$. From the test cases we can conclude that the order should be ascending.

# Approach
The ability to swap only adjacent elements suggests dealing with ranges of elements with the same bit population counts. By swapping adjacent elements freely we can sort any range, but a cross-range sorting is not possible.

Consider e.g. the following array
```
3 16 8 4 2 7 1 256 12 14
```
Its population counts are as follows:
```
 2 1 1 1 1 3 1 1 3 3
```
Therefore it should be split to ranges like this:
```
3 | 16 8 4 2 | 7 | 1 256 | 12 14
```
In order to make array sorted ascending, we should make every element follow elements with smaller values. Therefore the minimum of any range should be greater than the maximum of the previous range. Equal case doesn't have to be considered because equal elements either fall within the same range or remain in different ranges regardless of swapping.

So range minimums and maximums would look as follows:
```
3..3 | 2..16 | 7..7 | 1..256 | 12..14 |
```
and it's obviously not possible to sort the array.

Hence the algorithm comes down to a single pass calculating range minimums and maximums and comparing the current range's minimum with the previous range's maximum.

C, C++, Java and Python 3 have built-in functions computing the bit population counts. GCC has a `__builtin_popcount` intrinsic, which could be used in C and in C++ before the version 20. C++'20 has introduced a template function `popcount`, which is more portable. Java has a static method `bitCount` of boxed numeric classes, translating into a relevant machine instruction. And Python's `int` has a method  `bit_count` available since the language version 3.10.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Measurements

| Language | Algorithm | Time, ms | Beating | Memory, Mb | Beating | Submission |
|-|-|-|-|-|-|-|
| C++ | Min tracking | 0 | 100% | 31.26 | 63.03% | https://leetcode.com/problems/find-if-array-can-be-sorted/submissions/1444329892 |
| C | Min tracking | 0 | 100% | 8.73 | 28.17% | https://leetcode.com/problems/find-if-array-can-be-sorted/submissions/1444335035 |
| Java | Min tracking | 1 | 100% | 44.39 | 48.43% | https://leetcode.com/problems/find-if-array-can-be-sorted/submissions/1444338898 |
| Java | Curr value | 1 | 100% | 44.49 | 35.63% | https://leetcode.com/problems/find-if-array-can-be-sorted/submissions/1445196949 |
| Python3 | Min tracking | 3 | 95.12% | 16.68 | 42.67% | https://leetcode.com/problems/find-if-array-can-be-sorted/submissions/1444358760 |
| Python3 | Curr value | 2 | 96.29% | 16.64 | 42.67% | https://leetcode.com/problems/find-if-array-can-be-sorted/submissions/1461041222 |

# Code
```cpp []
class Solution {
public:
    static bool canSortArray(const vector<int> &nums) {
        const uint8_t n = nums.size();
        uint16_t pmax = 0, cmin = 0, cmax = 0;
        uint8_t pcnt = 0;
        for (const uint16_t v : nums) {
            if (const uint8_t ccnt = popcount(v); pcnt == ccnt) {
                cmin = min(cmin, v);
                cmax = max(cmax, v);
            } else if (cmin < pmax) {
                return false;
            } else {
                pmax = cmax;
                cmin = cmax = v;
                pcnt = ccnt;
            }
        }
        return cmin >= pmax;
    }
};
```
``` c []
bool canSortArray(const int *const nums, const uint8_t n) {
    uint16_t pmax = 0, cmin = 0, cmax = 0;
    uint8_t pcnt = 0;
    for (uint8_t i = 0; i < n; i++) {
        const uint16_t v = nums[i];
        const uint8_t ccnt = __builtin_popcount(v);
        if (pcnt == ccnt) {
            cmin = cmin > v ? v : cmin;
            cmax = cmax < v ? v : cmax;
        } else if (cmin < pmax) {
            return false;
        } else {
            pmax = cmax;
            cmin = cmax = v;
            pcnt = ccnt;
        }
    }
    return cmin >= pmax;
}
```
``` java []
class Solution {
    public static boolean canSortArray(final int[] nums) {
        short pmax = 0, cmin = 0, cmax = 0;
        byte pcnt = 0;
        for (final int v : nums) {
            final byte ccnt = (byte)Integer.bitCount(v);
            if (pcnt == ccnt) {
                cmin = cmin > v ? (short)v : cmin;
                cmax = cmax < v ? (short)v : cmax;
            } else if (cmin < pmax) {
                return false;
            } else {
                pmax = cmax;
                cmin = cmax = (short)v;
                pcnt = ccnt;
            }
        }
        return cmin >= pmax;
    }
}
```
``` python3 []
class Solution:
    def canSortArray(self, nums: List[int]) -> bool:
        pmax = cmin = cmax = pcnt = 0
        for v in nums:
            ccnt = v.bit_count()
            if pcnt == ccnt:
                cmin = min(cmin, v)
                cmax = max(cmax, v)
            elif cmin < pmax:
                return False
            else:
                pmax = cmax
                cmin = cmax = v
                pcnt = ccnt
        return cmin >= pmax
```

A remark from @JamesBaxter_Horse suggests that we can avoid tracking the current range minimum (`cmin`), comparing the previous maximum directly to the current value. Not only does it save some space, but it also results in fewer iterations to detect failure on average. Programs in some of the languages are adjusted for that:

``` java []
class Solution {
    public static boolean canSortArray(final int[] nums) {
        short pmax = 0, cmax = (short)nums[0];
        byte pcnt = (byte)Integer.bitCount(cmax);
        for (final int v : nums) {
            final byte ccnt = (byte)Integer.bitCount(v);
            if (pcnt == ccnt) {
                cmax = cmax < v ? (short)v : cmax;
            } else {
                pmax = cmax;
                cmax = (short)v;
                pcnt = ccnt;
            }
            if (v < pmax)
                return false;
        }
        return true;
    }
}
```
``` python3 []
class Solution:
    def canSortArray(self, nums: List[int]) -> bool:
        pmax = 0
        cmax = nums[0]
        pcnt = cmax.bit_count()
        for v in nums:
            ccnt = v.bit_count()
            if pcnt == ccnt:
                cmax = max(cmax, v)
            else:
                pmax = cmax
                cmax = v
                pcnt = ccnt
            if v < pmax:
                return False
        return v >= pmax
```
