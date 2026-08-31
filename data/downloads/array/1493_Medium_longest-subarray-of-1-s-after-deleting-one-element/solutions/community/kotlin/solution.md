# Greedy linear solution without additional memory

**Author:** drgavrikov
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/5035977/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/5035977/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
If two sequences of ones with lengths $k_1$ and $k_2$ are separated by a single zero, i.e., $\\underbrace{11..1}_{k_1}0\\underbrace{11..1}_{k_2}$, then by deleting $0$ with $1$, we can obtain a sequence of length $k_1 + k_2$.

To account for these cases, we store the lengths of the last two subsequences of ones and reset the length of the previous one if they are separated by more than one zero. This can be implemented in a single iteration through the array without using additional memory.

Special case: we output its length minus $1$ when all elements in the array are ones.

---

\u0415\u0441\u043B\u0438 \u0434\u0432\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0435\u0434\u0438\u043D\u0438\u0446 \u0434\u043B\u0438\u043D\u043E\u0439 $k1$ \u0438 $k2$ \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u044B \u043E\u0434\u043D\u0438\u043C \u043D\u0443\u043B\u0435\u043C, \u0442. e. $\\underbrace{11..1}_{k_1}0\\underbrace{11..1}_{k_2}$, \u0442\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435\u043C $0 -> 1$ \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C $k_1 + k_2$.

\u0414\u043B\u044F \u0443\u0447\u0435\u0442\u0430 \u044D\u0442\u043E\u0433\u043E \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u0445\u0440\u0430\u043D\u0438\u043C \u0434\u043B\u0438\u043D\u044B \u0434\u0432\u0443\u0445 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u043F\u043E\u0434\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0435\u0439 \u0435\u0434\u0438\u043D\u0438\u0446 \u0438 \u043E\u0431\u043D\u0443\u043B\u044F\u0435\u043C \u0434\u043B\u0438\u043D\u0443 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u0447\u0435\u043C \u043E\u0434\u043D\u0438\u043C \u043D\u0443\u043B\u0435\u043C. 
\u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0434\u043D\u0438\u043C \u043F\u0440\u043E\u0445\u043E\u0434\u043E\u043C \u043F\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0443 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438.

\u0427\u0430\u0441\u0442\u043D\u044B\u0439 \u0441\u043B\u0443\u0447\u0430\u0439: \u043A\u043E\u0433\u0434\u0430 \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 \u0435\u0434\u0438\u043D\u0438\u0446\u044B, \u0432\u044B\u0432\u043E\u0434\u0438\u043C \u0435\u0433\u043E \u0434\u043B\u0438\u043D\u0443 \u043C\u0438\u043D\u0443\u0441 $1$.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```C++ []
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int result = 0;
        
        int currentCount = 0;
        int prevCount = 0;
        bool isZeros = false;
        for (auto num: nums) {
            if (num == 0) {
                result = max(result, currentCount + prevCount);
                prevCount = currentCount;
                currentCount = 0;
                isZeros = true;
            } else {
                currentCount++;    
            }
        }
        result = max(result, currentCount + prevCount);
        if (!isZeros) return nums.size() - 1;
        return result;
    }
};
```
```Kotlin []
class Solution {
    fun longestSubarray(nums: IntArray): Int {
        var result = 0

        var count = 0
        var countPrev = 0

        var isZeros = false

        for (index in 0 until nums.size) {
            if (nums[index] == 1) {
                count++
                result = max(countPrev + count, result)
            } else {
                countPrev = count
                count = 0
                isZeros = true
            }
        }
        if (!isZeros) return nums.size - 1
        return result
    }
}
```

Most of my solutions are in\xA0[C++](https://github.com/drgavrikov/leetcode-cpp)\xA0and\xA0[Kotlin](https://github.com/drgavrikov/leetcode-jvm)\xA0on my\xA0Github.
