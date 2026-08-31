# Tough but completed.

**Author:** Rouse-Prog
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-rational-numbers/solutions/5938499/](https://leetcode.com/problems/equal-rational-numbers/solutions/5938499/)

---


# Approach
Parse the Input:

First, we check whether the string contains parentheses (indicating a repeating decimal part).
If there is a repeating part, we split the string into the integer part, the non-repeating decimal part, and the repeating decimal part.
If there's no repeating part, we can directly convert the string into a floating-point number.
Expand the Repeating Decimal:

For strings with a repeating decimal part, we simulate the repeating decimal by appending the repeating part multiple times (e.g., up to 20 digits) to approximate the infinite repetition.
Convert to Floating-Point:

Once we have expanded the repeating decimal, or if the number doesn\u2019t have one, we convert the entire string into a floating-point number using parseFloat.
Compare the Floating-Point Numbers:

Finally, we compare the two floating-point numbers. This will account for cases where infinite decimals, like 0.999..., are equivalent to finite values like 1.

# Complexity
- Time complexity:
The time complexity is O(1), since we are not processing the entire string infinitely but only up to a constant precision.

- Space complexity:
We use extra space for storing the expanded form of the decimal part, which is again bounded by a constant (20 digits in our example).
The space complexity is O(1).

# Code
```javascript []
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isRationalEqual(s, t) {
    function toFloat(num) {
        if (num.includes('(')) {
            let [nonRepeating, repeating] = num.split('(');
            repeating = repeating.slice(0, -1);
            return parseFloat(expandRational(nonRepeating, repeating));
        } else {
            return parseFloat(num);
        }
    }

    function expandRational(nonRepeating, repeating) {
        let [integerPart, decimalPart = ''] = nonRepeating.split('.');
        if (repeating) {
            let expandedRepeating = repeating.repeat(20).slice(0, 20);
            decimalPart += expandedRepeating;
        }
        return integerPart + '.' + decimalPart;
    }

    return toFloat(s) === toFloat(t);
}

```