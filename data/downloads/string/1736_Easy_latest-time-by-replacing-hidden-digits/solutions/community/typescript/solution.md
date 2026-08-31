# TypeScript solution beats 100% O(1)

**Author:** blastoffgo
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/5603343/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/5603343/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// hh:mm
function maximumTime(time: string): string {
    // 00:00 - 23:59
    // Return the latest valid time

    // Let's understand clock rules
    // first place ? - 2 is latest if second is less than 4, else 1
    // second place ? - 3 is latest if first is 2 else 9 is latest
    // third place ? - 5 is latest
    // fourth place - 9 is latest

    let valid = '';

    for (let i = 0; i < time.length; i++) {
        // Let's skip this iteration if there is no question mark
        if (time[i] !== "?") {
            valid += time[i];
            continue;
        };

        // Below here we know the char is a '?'

        if (i === 0) {
            // Check second num
            // the || accounts for two ?? in a row
            if (parseInt(time[i + 1]) < 4 || time[i + 1] === "?") {
                valid += "2";
            } else {
                valid += "1";
            }
            continue;
        }

        if (i === 1) {
            // If first char is a 2, we can make it a 3 at the most
            // the || accounts for two || in a row
            if (time[i - 1] === "2" || time[i - 1] === "?") {
                valid += "3";
            } else {
                valid += "9";
            }
            continue;
        }

        if (i === 3) {
            valid += "5";
            continue;
        }

        if (i === 4) {
            valid += "9";
            continue;
        }
    }

    return valid;
};
```