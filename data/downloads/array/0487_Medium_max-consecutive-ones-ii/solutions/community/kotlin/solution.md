# Follow up linear solution without additional.

**Author:** drgavrikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/5008489/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/5008489/)

---

# Intuition
We keep track of the lengths of the two previous sequences of ones, and update the answer when reading a new element of the sequence.

---

\u0425\u0440\u0430\u043D\u0438\u043C \u0434\u043B\u0438\u043D\u0443 \u0434\u0432\u0443\u0445 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0445 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0435\u0439 \u0435\u0434\u0438\u043D\u0438\u0446, \u043F\u0440\u0438 \u0441\u0447\u0438\u0442\u044B\u0432\u0430\u043D\u0438\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C \u043E\u0442\u0432\u0435\u0442.

# Approach
Notice that if two sequences of ones of length $k_1$ and $k_2$ are separated by a single zero, i.e., $\\underbrace{11..1}_{k_1}0\\underbrace{11..1}_{k_2}$, then replacing this $0$ with $1$ yields a sequence of ones of length $k_1 + k_2$. If a sequence of ones of length $k$ has a neighboring zero character, then a sequence of length $k + 1$ can be obtained. Therefore, to compute the answer, it is necessary to know the lengths of the two previous sequences of ones if they are separated by a single zero character, or just one otherwise. The answer can be updated iteratively without using additional memory.

---

\u0417\u0430\u043C\u0435\u0442\u0438\u043C, \u0435\u0441\u043B\u0438 \u0434\u0432\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0435\u0434\u0438\u043D\u0438\u0446 \u0434\u043B\u0438\u043D\u044B $k_1$ \u0438 $k_2$ \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u044B \u043E\u0434\u043D\u0438\u043C \u043D\u0443\u043B\u0435\u043C, \u0442. \u0435. $\\underbrace{11..1}_{k_1}0\\underbrace{11..1}_{k_2}$, \u0442\u043E \u0437\u0430\u043C\u0435\u043D\u0438\u0432 \u0434\u0430\u043D\u043D\u044B\u0439 $0$ \u043D\u0430 $1$ \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0435\u0434\u0438\u043D\u0438\u0446 \u0434\u043B\u0438\u043D\u044B $k_1 + k_2$. \u0415\u0441\u043B\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0435\u0434\u0438\u043D\u0438\u0446 \u0434\u043B\u0438\u043D\u044B $k$ \u0438\u043C\u0435\u0435\u0442 \u0441\u043E\u0441\u0435\u0434\u043D\u0438\u0439 $0$-\u0441\u0438\u043C\u0432\u043E\u043B, \u0442\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u0438\u043D\u044B $k + 1$. \u0421\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E, \u0434\u043B\u044F \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u043E\u0442\u0432\u0435\u0442\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u043D\u0430\u0442\u044C \u0434\u043B\u0438\u043D\u0443 \u0434\u0432\u0443\u0445 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0445 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0435\u0439 \u0435\u0434\u0438\u043D\u0438\u0446 \u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u044B \u043E\u0434\u043D\u0438\u043C $0$ \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u043C \u0438\u043B\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u043D\u043E\u0439 \u0432 \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435. \u041E\u0442\u0432\u0435\u0442 \u043C\u043E\u0436\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0442\u044C \u0438\u0442\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0431\u0435\u0437 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$ additional memory

```\u0421++ []
class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int result = 0;
        int current = 0;
        int prev = -1;
        for (int num: nums) {
            if (num == 1) {
                current++;
                result = max(result, current + prev + 1);
            } else {
                prev = current;
                result = max(result, current + 1);
                current = 0;
            }
        }
        return result;
    }
};
```
```Kotlin []
class Solution {
    fun findMaxConsecutiveOnes(nums: IntArray): Int {
        var result = 0
        var current = 0
        var prev = -1
        nums.forEach { num ->
            if (num == 1) {
                current++
                result = max(result, current + prev + 1)
            } else {
                prev = current
                result = max(result, prev + 1)
                current = 0
            }
        }
        return result
    }
}
```

