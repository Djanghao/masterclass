# O(n) solution in Typescript

**Author:** Ronduwil
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/4317453/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/4317453/)

---

# Intuition
At first glance, this problem looks simple to solve: replace the leftmost digit with 9 to maximize it, and replace the leftmost digit with 1 to minimize it.  These two values will yield the maximum difference.

# Approach
The devil is in the details. While the criteria that we intuitively established still apply, there are several edge cases to consider.  In the case of the number that we want to maximize:

1. If all the digits are nine, then no replacement is necessary to obtain our first value.
2. If the number already starts with nine, then we need to replace the leftmost non-nine value instead.

In the case of the number that we want to minimize:
1. If our second value already starts with one, then we want to replace the leftmost non-zero/non-one value with zero.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
function maxDiff(num: number): number {
    // Replace the leftmost digit with 9 to max it
    // Replace the leftmost digit with 1 to minimize it

    let numString = num.toString();
    // Find the left-most non-9 number
    let replacedCharacter = findLeftMost(numString, (charString: string) => {
        return charString != "9";
    });

    let a:string;
    if (replacedCharacter === null) {
        // If the string is all 9s, then leave it as is
        a = numString;
    } else {
        a = numString.replaceAll(replacedCharacter, "9");
    }

 
    let b: string;
    if (numString.charAt(0) == "1") {
        // Find the left-most non-zero/non-one number 
        // from position 1 if we're starting with 1 so
        // that we can replace it with zeroes
        replacedCharacter = findLeftMost(numString, (charString: string) => {
            return charString != "1" && charString != "0";
        }, 1);
        if (replacedCharacter === null) {
            // If everything is already ones and zeroes, there's 
            // nothing to be done
            b = numString;
        } else {
            b = numString.replaceAll(replacedCharacter, "0");
        }
    } else {
        // Otherwise, we just replace the leftmost character with 1
        replacedCharacter = numString.charAt(0);
        b = numString.replaceAll(replacedCharacter, "1");
    }

    return Number.parseInt(a) - Number.parseInt(b);
};

function findLeftMost(numString: string, criteria: (charString: string) => boolean, position = 0): string {
    let leftMost:string = null;
    let i = position;
    while (i < numString.length && leftMost === null) {
        let candidate = numString.charAt(i);
        if (criteria(candidate)) {
            leftMost = candidate;
        }
        i++;
    }

    return leftMost;
}
```