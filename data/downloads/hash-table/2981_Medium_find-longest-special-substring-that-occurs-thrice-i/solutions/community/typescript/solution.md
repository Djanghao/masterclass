# 👨‍💻 TypeScript | ✅ Beats 100%, straightforward approach, readable code

**Author:** kfir_e
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6131794/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6131794/)

---

![image.png](./images/0.png)


# Approach
- Write a utility function that checks whether a substring appears at least thrice within a string using `indexOf`
- Iterate through the string once to look for the longest special substring that appears at least 3 times

# Complexity
- Time complexity:
$$O(n^2)$$ because `doesAppearThrice` itself has $$O(n)$$ complexity

- Space complexity:
$$O(n)$$

# Code
```typescript []
function maximumLength(s: string): number {
    let longestSubstring = '';
    let currentSubstring = '';

    for (let i = 0; i < s.length; i++) {
        // Reset the currentSubstring when it is no longer special
        if (i > 0 && s[i] !== s[i - 1]) {
            if (currentSubstring.length >= longestSubstring.length &&
                doesAppearThrice(s, currentSubstring)) {
                longestSubstring = currentSubstring;
            }
            currentSubstring = '';
        }

        currentSubstring += s[i];

        // Check if currentSubstring is a fit candidate
        if (currentSubstring.length >= longestSubstring.length &&
            doesAppearThrice(s, currentSubstring)) {
            longestSubstring = currentSubstring;
        }
    }

    return longestSubstring.length === 0 ? -1 : longestSubstring.length;
};

function doesAppearThrice(fullString: string, substring: string) {
    const firstAppearance = fullString.indexOf(substring);
    const secondAppearance = fullString.indexOf(substring, firstAppearance + 1);
    const thirdAppearance = fullString.indexOf(substring, secondAppearance + 1);

    return firstAppearance >= 0 && secondAppearance >= 0 && thirdAppearance >= 0;
}
```