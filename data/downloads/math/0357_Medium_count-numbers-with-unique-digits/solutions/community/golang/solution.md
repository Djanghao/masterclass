# Комбинаторика

**Author:** rekunch1
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/5042668/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/5042668/)

---

\u041A\u043E\u043C\u0431\u0438\u043D\u0430\u0442\u043E\u0440\u0438\u043A\u0430

# Code
```
func countNumbersWithUniqueDigits(n int) int {
    if n == 0 {
        return 1
    }

    result := 10 // \u0414\u043B\u044F n=1 \u0443 \u043D\u0430\u0441 10 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u043E\u0442 0 \u0434\u043E 9
    uniqueDigits := 9
    availableDigits := 9

    for i := 2; i <= n && availableDigits > 0; i++ {
        uniqueDigits *= availableDigits
        result += uniqueDigits
        availableDigits--
    }

    return result
}
```