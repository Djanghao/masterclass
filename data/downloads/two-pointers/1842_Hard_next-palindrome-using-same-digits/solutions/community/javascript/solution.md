# Simple JS/TS solution

**Author:** sjbhalli
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/3064739/](https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/3064739/)

---

# Complexity
Time complexity: O(n)
Space complexity: O(n)

# Code
```
function helper(num: string): string[] {
    let i = num.length - 2
    for (; i >= 0 && num[i] >= num[i + 1]; i--);
    if (i == -1) return [];

    let j = num.length - 1;
    for (; j > i && num[j] <= num[i]; j--);

    const numSplit = num.split("");
    [numSplit[i], numSplit[j]] = [numSplit[j], numSplit[i]]

    return numSplit.slice(0, i + 1).concat(numSplit.slice(i + 1).reverse());
}

function nextPalindrome(num: string): string {
    let pal = helper(num.substring(0, Math.floor(num.length / 2)));
    if (!pal.length) return "";

    pal = pal.concat(num.length % 2 == 0 ? "" : num[Math.floor(num.length / 2)]);
    for (let r = num.length % 2 ? pal.length - 2 : pal.length - 1; r >= 0; r--) {
        pal.push(pal[r]);
    }

    return pal.join("");
};
```