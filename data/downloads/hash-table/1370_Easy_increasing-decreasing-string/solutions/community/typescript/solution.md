# Custom Alphabetical Order String Sort

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/5804811/](https://leetcode.com/problems/increasing-decreasing-string/solutions/5804811/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
 I start by converting the input string into an array of characters and sorting it. I then initialize an empty result array to build the final sorted string. In the main loop, I first remove and append the smallest character to the result. Next, as much as possible I continue to append characters greater than the last added character. After handling the smallest characters, I remove and append the largest character from the remaining characters. Then, as much as possible I continue to  append characters smaller than the last appended largest character. once input string is empty, i join all strings in result array and return the value.

First attempted thsi question months ago. Finally solved it today. Would have had an easier solution using findLastIndex() but alas LeetCode typescript compiler is not updated enough. Method is too new: Baseline 2022.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function sortString(s: string): string {
    let res: string[] = [];
    let ss = s.split("").sort();
    
    while (ss.length > 0) {
        // Step 1: Remove the smallest character
        let smallest = ss.shift();
        if (smallest) {
            res.push(smallest);
        }

        // Step 2 & 3: Remove the smallest characters greater than the last appended character
        let lastChar = res[res.length - 1];
        while (true) {
            let nextIndex = ss.findIndex(c => c > lastChar);
            if (nextIndex === -1) break; // No valid character found, exit loop
            let nextChar = ss.splice(nextIndex, 1)[0];
            res.push(nextChar);
            lastChar = nextChar;
        }

        // Step 4: Remove the largest character
        let largest = ss.pop();
        if (largest) {
            res.push(largest);
        }

        // Step 5 & 6: Remove the largest characters smaller than the last appended character
        lastChar = res[res.length - 1];
        while (true) {
            let nextIndex = -1;
            for (let i = ss.length - 1; i >= 0; i--) {
                if (ss[i] < lastChar) {
                    nextIndex = i;
                    break;
                }
            }
            if (nextIndex === -1) break; // No valid character found, exit loop
            let nextChar = ss.splice(nextIndex, 1)[0];
            res.push(nextChar);
            lastChar = nextChar;
        }
    }

    return res.join("");
}

```