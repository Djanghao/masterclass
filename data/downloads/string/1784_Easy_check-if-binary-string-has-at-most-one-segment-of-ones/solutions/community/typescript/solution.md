# Regular Expression Method

**Author:** uongsuadaubung
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/5361502/](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/5361502/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
a string that contains a single segment of ones should not include the sequence '01'. Alternatively, we could count the number of segments of ones by looking at the pattern of ones in the string and ensure there is only one such segment.
# Approach
<!-- Describe your approach to solving the problem. -->
### Regular Expression Method:

- Use a regular expression to match all contiguous segments of ones (/1+/g).
- Check if the length of the matched segments array is exactly one, which means there is only one segment of ones in the string.
### Subsequence Check Method:

- Simply check if the string does not contain the subsequence '01'.
- If '01' is found, it indicates there are multiple segments of ones separated by at least one zero.
- If '01' is not found, then all ones are in a single contiguous block.
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function checkOnesSegment(s: string): boolean {
    return (s.match(/1+/g)?.length ?? 0) === 1;
};
```
or
```
function checkOnesSegment(s: string): boolean {
    return !s.includes("01");
};
```