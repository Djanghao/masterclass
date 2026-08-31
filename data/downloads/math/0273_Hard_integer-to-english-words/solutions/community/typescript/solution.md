# Very short and readable

**Author:** superjellyfish
**Votes:** 2
**Link:** [https://leetcode.com/problems/integer-to-english-words/solutions/4468165/](https://leetcode.com/problems/integer-to-english-words/solutions/4468165/)

---

Perhaps not the quickest since it has to iterate over the whole hashmap for each word, but the approach makes the code very straight forward without any edge cases.

# Code
```
const NUMBERS = new Map([
    [1e9, "Billion"],
    [1e6, "Million"],
    [1e3, "Thousand"],
    [1e2, "Hundred"],
    [90, "Ninety"],
    [80, "Eighty"],
    [70, "Seventy"],
    [60, "Sixty"],
    [50, "Fifty"],
    [40, "Forty"],
    [30, "Thirty"],
    [20, "Twenty"],
    [19, "Nineteen"],
    [18, "Eighteen"],
    [17, "Seventeen"],
    [16, "Sixteen"],
    [15, "Fifteen"],
    [14, "Fourteen"],
    [13, "Thirteen"],
    [12, "Twelve"],
    [11, "Eleven"],
    [10, "Ten"],
    [9, "Nine"],
    [8, "Eight"],
    [7, "Seven"],
    [6, "Six"],
    [5, "Five"],
    [4, "Four"],
    [3, "Three"],
    [2, "Two"],
    [1, "One"],
    [0, "Zero"],
]);

function numberToWords(num: number): string {
    for (const [intValue, textValue] of NUMBERS) {
        if (num >= intValue) {
            const prefix = num >= 100 ? numberToWords(Math.trunc(num / intValue)) : ""
            const suffix = num % intValue > 0 ? numberToWords(num % intValue) : ""
            return `${prefix} ${textValue} ${suffix}`.trim()
        }
    }
    return ""
}
```