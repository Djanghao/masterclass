# TS Solution O(n*n)

**Author:** JeanMatrice
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/5456933/](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/5456933/)

---

# Intuition
We will use brute force
We go through the array if we have a different value, we check what would happen if we skip that one.
Then we check before and after to know if we can replace the one we skipped to add tou our MaxValue

At the end we check if the lasts elements are equal and we check if adding one of the element before counting the lasts elements would increase ou Value
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n*n)

- Space complexity:
O(1)

# Code
```
function maxRepOpt1(text: string): number {
    if (text.length <= 1) return text.length;
    let maxValue = 0;
    let maxReturnValue = 0;
    let startingIndex = 0;
    let subIndex = 0;
    let currentLetter = '&';

    for (let i = 0; i < text.length - 1; i++) {
        if (maxValue === 0) startingIndex = i;
        maxValue++;
        if (text[i] !== text[i + 1]) {
            currentLetter = text[i];
            //end of the chain
            //test if jumping that value can help ?
            subIndex = i + 2;
            if (text[i] === text[subIndex]) {
                maxValue++;
                //it is equal we can continue
                while (subIndex < (text.length - 1) && text[subIndex] === text[subIndex + 1]) {
                    maxValue++;
                    subIndex++;
                }
            }
            // need to check before and after if we have a value we can swap to increase by 1
            const textBefore = text.substring(0, startingIndex - 1);
            const textAfter = text.substring(subIndex + 1, text.length);

            if (textBefore.includes(currentLetter) || textAfter.includes(currentLetter)) maxValue++;
            maxReturnValue = Math.max(maxValue, maxReturnValue);
            maxValue = 0;
        }
    }

    if (text[text.length - 2] === text[text.length - 1]) {
        if (startingIndex > 0) {
            const textBefore = text.substring(0, startingIndex - 1);
            if (textBefore.includes(text[text.length - 1])) maxValue++;
        }
        maxValue++;
    };

    return Math.max(maxValue, maxReturnValue);

};
```