# Typescript Approach [O(1) space/ O(n) runtime]

**Author:** kyratzakos
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5506869/](https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5506869/)

---

# Intuition
To solve the problem, we need to perform the following steps:

# Approach
1. Count Frequency of Each Letter: Use a frequency counter to determine how many times each letter appears in the string.
2. Adjust Frequencies: For letters that appear more than 3 times, reduce their count by removing 2 for each excess occurrence.
3. Calculate New Length: Compute the new length of the string based on the adjusted frequencies.


# Complexity
- Time complexity:
$O(n)$ where $n$ the length of the string

- Space complexity:
$O(1)$ because we are storing the letters of the alphabet (max 26)

# Code
```
function minimumLength(s: string): number {
    const frequency = new Map<string, number>()

    const arr = s.split('')
    for (const char of arr) {
        frequency.set(char, (frequency.get(char) ?? 0) + 1)
    }

    let newLength = 0

    for (let count of frequency.values()) {
        if (count >= 3) {
            while (count >= 3) {
                count -= 2
            }
            newLength += count
        } else {
            newLength += count
        }
    }

    return newLength

}
```