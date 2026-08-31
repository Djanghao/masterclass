# Linear solution without additional memory. Решение за линейное время без дополнительной памяти.

**Author:** drgavrikov
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-valid-parentheses/solutions/5024031/](https://leetcode.com/problems/longest-valid-parentheses/solutions/5024031/)

---

# Intuition
We use counters for opening and closing parentheses while iterating the string.

---

\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0441\u0447\u0435\u0442\u0447\u0438\u043A\u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445 \u0438 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445 \u0441\u043A\u043E\u0431\u043E\u043A \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0445\u043E\u0434\u0430 \u043F\u043E \u0441\u0442\u0440\u043E\u043A\u0435.

# Approach
We iterate through the string from left to right, counting the number of opening parentheses $openedCount$ and closing parentheses $closedCount$. If at any point the number of opening parentheses becomes equal to the number of closing parentheses, it indicates a valid parenthesis substring, and we update the length of the maximum found. If the number of closing parentheses exceeds the number of opening parentheses (e.g., $()())$), we reset the counters because the current closing parenthesis does not complete the sequence.

This approach does not account for cases where the string contains leading opening parentheses without corresponding closing ones, such as $(((())$. To calculate this, we implement the same logic but while iterating the string from right to left, reversing the direction.

---

\u041F\u0440\u043E\u0445\u043E\u0434\u0438\u043C \u043F\u043E \u0441\u0442\u0440\u043E\u043A\u0435 \u0441\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E \u0438 \u0441\u0447\u0438\u0442\u0430\u0435\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445\u0441\u044F $openedCount$ \u0438 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445\u0441\u044F $closedCount$ \u0441\u043A\u043E\u0431\u043E\u043A. \u0415\u0441\u043B\u0438 \u0432 \u043A\u0430\u043A\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0447\u0438\u0441\u043B\u043E \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u0441\u0442\u0430\u043B\u043E \u0440\u0430\u0432\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u0443 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445\u0441\u044F, \u0442\u043E \u044D\u0442\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0431\u043E\u0447\u043D\u0430\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C \u0434\u043B\u0438\u043D\u044B \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u043E\u0439. \u0415\u0441\u043B\u0438 \u0447\u0438\u0441\u043B\u043E \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445 \u0441\u043A\u043E\u0431\u043E\u043A \u0441\u0442\u0430\u043B\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445\u0441\u044F (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 $()())$), \u0442\u043E \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u043C \u0441\u0447\u0435\u0442\u0447\u0438\u043A\u0438, \u0442\u0430\u043A \u043A\u0430\u043A \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0430\u044F \u0441\u043A\u043E\u0431\u043A\u0430 \u043D\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C.
\u0414\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0445\u043E\u0434 \u043D\u0435 \u0443\u0447\u0442\u0435\u0442 \u0441\u043B\u0443\u0447\u0430\u0435, \u043A\u043E\u0433\u0434\u0430 \u0441\u0442\u0440\u043E\u043A\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043B\u0438\u0434\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u0441\u043A\u043E\u0431\u043A\u0438 \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0435\u0442\u0443 \u043F\u0430\u0440\u043D\u044B\u0445 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0445, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 $(((())$. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u043C \u0442\u0430\u043A\u0443\u044E \u0436\u0435 \u043B\u043E\u0433\u0438\u043A\u0443, \u043D\u043E \u043F\u0440\u0438 \u043F\u0440\u043E\u0445\u043E\u0434\u0435 \u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0441\u043F\u0440\u0430\u0432\u0430 \u043D\u0430\u043B\u0435\u0432\u043E.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$ additional memory
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int longestValidParentheses(string s) {
        int result = 0;

        int openedCount = 0;
        int closedCount = 0;
        int reversedOpenedCount = 0;
        int reversedClosedCount = 0;
        for (int index = 0; index < s.length(); ++index) {
            if (s[index] == '(') openedCount++;
            else closedCount++;
            if (openedCount == closedCount) 
                result = max(result, 2 * openedCount);
            if (closedCount > openedCount) {
                openedCount = 0;
                closedCount = 0;
            }
            
            if (s[s.length() - index - 1] == '(') reversedOpenedCount++;
            else reversedClosedCount++;
            if (reversedOpenedCount == reversedClosedCount) 
                result = max(result, 2 * reversedOpenedCount);
            if (reversedOpenedCount > reversedClosedCount) {
                reversedOpenedCount = 0;
                reversedClosedCount = 0;
            }
        }
        return result;
    }
};
```
```Kotlin []
class Solution {
    fun longestValidParentheses(s: String): Int {
        var result = 0

        var openedCount = 0
        var closedCount = 0

        var reversedOpenedCount = 0
        var reversedClosedCount = 0

        s.indices.forEach { index ->
            if (s[index] == '(') openedCount++
            else closedCount++
            if (openedCount == closedCount) result = max(result, openedCount * 2)
            if (closedCount > openedCount) {
                openedCount = 0
                closedCount = 0
            }

            if (s[s.length - index - 1] == '(') reversedOpenedCount++
            else reversedClosedCount++
            if (reversedOpenedCount == reversedClosedCount) result = max(result, reversedClosedCount * 2)
            if (reversedOpenedCount > reversedClosedCount) {
                reversedOpenedCount = 0
                reversedClosedCount = 0
            }
        }
        return result
    }
}
```
