# Counting Unique Character Substrings in TypeScript

**Author:** andygr1n1
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5353773/](https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5353773/)

---

# Intuition
The problem requires counting the number of substrings that contain all unique characters. The key intuition here is to use a sliding window approach to maintain a window of unique characters and count the number of valid substrings within that window.

This implementation efficiently counts the number of substrings containing all unique characters using a sliding window technique and a frequency array to keep track of character occurrences.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Use a sliding window with two pointers (start and end) to traverse the string.
2.	Use an array freq to keep track of the frequency of characters in the current window.
3.	Increment the end pointer to expand the window and include new characters.
4.	If the frequency of any character exceeds 1, increment the start pointer to shrink the window until all characters are unique again.
5.	Count the number of valid substrings by adding (end - start + 1) to the result for each position of end.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 O(n)  where  n  is the length of the string. Each character is processed at most twice, once by the end pointer and once by the start pointer.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
  O(1) . The frequency array freq has a fixed size of 26, representing the 26 lowercase English letters.

# Code
```
function numberOfSpecialSubstrings(s: string): number {
    let substringCount = 0;

    let start = 0;
    const freq: number[] = new Array(26).fill(0);
    for (let end = 0; end < s.length; end++) {
        freq[s.charCodeAt(end) - 'a'.charCodeAt(0)]++;

        while (freq[s.charCodeAt(end) - 'a'.charCodeAt(0)] > 1) {
            freq[s.charCodeAt(start) - 'a'.charCodeAt(0)]--;
            start++;
        }

        substringCount += (end - start + 1);
    }

    return substringCount;
};
```