# Solution in linear time.

**Author:** drgavrikov
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-binary-string-after-change/solutions/5003023/](https://leetcode.com/problems/maximum-binary-string-after-change/solutions/5003023/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Any string of length $n$ that starts with $'0...'$ and contains $k$ zeros can be transformed into a string $\\underbrace{11..1}_{k - 1}011..1$. To do this:

- shift all ones to the end using the pattern $10$ -> $01$, resulting in the string $00..0\\underbrace{11..1}_{n - k}$
- replace the leading zeros $\\underbrace{00..0}_{k}$ with $\\underbrace{11..1}_{k - 1}0$ using the pattern $00$ -> $10$

This replacement will be maximal, as it will contain the maximum number of leading ones.
Thus, in the original string, find the first $0$. If it does not exist, return the original string; if it does, make the replacement described above.


---


\u041B\u044E\u0431\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443 \u0434\u043B\u0438\u043D\u044B $n$, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 $'0...'$ \u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 $k$ \u043D\u0443\u043B\u0435\u0439, \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u0441\u0442\u0440\u043E\u043A\u0443 $\\underbrace{11..1}_{k - 1}011..1$. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E:
- \u0441\u0434\u0432\u0438\u043D\u0438\u043C \u0432\u0441\u0435 \u0435\u0434\u0438\u043D\u0438\u0446\u044B \u0432 \u043A\u043E\u043D\u0435\u0446 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u043F\u0430\u0442\u0442\u0435\u0440\u043D $10$ -> $01$, \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0441\u0442\u0440\u043E\u043A\u0443 $00..0\\underbrace{11..1}_{n - k}$
- \u0437\u0430\u043C\u0435\u043D\u0438\u043C \u043B\u0438\u0434\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u043D\u0443\u043B\u0438 $\\underbrace{00..0}_{k}$ \u043D\u0430 $\\underbrace{11..1}_{k - 1}0$ \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u043F\u0430\u0442\u0442\u0435\u0440\u0430 $00$ -> $10$
\u042D\u0442\u043E \u0437\u0430\u043C\u0435\u043D\u0443 \u0431\u0443\u0434\u0435\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439, \u0442\u0430\u043A \u043A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043B\u0438\u0434\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u0435\u0434\u0438\u043D\u0438\u0446.

\u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0432 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0435 \u043D\u0430\u0439\u0434\u0435\u043C \u043F\u0435\u0440\u0432\u044B\u0439 $0$. \u0415\u0441\u043B\u0438 \u0435\u0433\u043E \u043D\u0435\u0442, \u0442\u043E \u0432\u0435\u0440\u043D\u0435\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443, \u0435\u0441\u043B\u0438 \u043E\u043D \u0435\u0441\u0442\u044C, \u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0432\u044B\u0448\u0435\u043E\u043F\u0438\u0441\u0430\u043D\u043D\u0443\u044E \u0437\u0430\u043C\u0435\u043D\u0443.
# Complexity
- Time complexity: $$O(n)$$
 
- Space complexity: $$O(n)$$

# Code
```C++ []
class Solution {
public:
    string maximumBinaryString(string binary) {
        int length = binary.length();

        int firstZeroIndex = 0;
        while (firstZeroIndex < length && binary[firstZeroIndex] == '1') firstZeroIndex++;
        if (firstZeroIndex == length) return binary;

        int countOnes = 0;
        for (int index = firstZeroIndex; index < length; ++index) {
            if (binary[index] == '1')
                countOnes++;
        }

        for (int index = firstZeroIndex; index < length - countOnes - 1; ++index) binary[index] = '1';
        binary[length - countOnes - 1] = '0';
        for (int index = length - countOnes; index < length; ++index) binary[index] = '1';

        return binary;
    }
};
```
```Kotlin []
class Solution {

    fun maximumBinaryString(binary: String): String {
        val firstZero = binary.indexOfFirst { it == '0' }
        if (firstZero == -1) return binary

        val countZeros = binary.drop(firstZero).count { it == '0' }
        val countOnes = binary.length - firstZero - countZeros

        val result =
            (0 until firstZero).map { '1' } +
            (0 until (countZeros - 1)).map { '1' } +
            '0' +
            (0 until (countOnes)).map { '1' }
        return result.joinToString("")
    }
}
```
