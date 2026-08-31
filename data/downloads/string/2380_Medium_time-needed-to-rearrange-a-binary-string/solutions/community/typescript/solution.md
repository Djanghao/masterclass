# Solve the problem in TypeScript, (It's very inefficient from the looks of it)

**Author:** CainTheMeister
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/3490329/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/3490329/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this algorithm is to use a recursive function to iterate over the string and replace all occurrences of "01" with "10". The recursive function starts by checking if the current character is less than the next character. If it is, then the recursive function replaces the current character and the next character with "10". The recursive function then recursively calls itself with the new string. The algorithm continues to recursively call itself until the string no longer contains any occurrences of "01".

The intuition behind this algorithm is that it is more efficient to replace all occurrences of "01" in one step than to do it one at a time. By using a recursive function, we can avoid having to do the same work over and over again.

# Approach
<!-- Describe your approach to solving the problem. -->

The approach of this algorithm is to recursively iterate over the string and replace all occurrences of "01" with "10". The algorithm starts by calling the count() function with the original string. The count() function iterates over the string, and for each character, it checks if the next character is less than it. If the next character is less than it, then the count() function replaces the current character and the next character with "10". The count() function then recursively calls itself with the new string. The algorithm continues to recursively call itself until the string no longer contains any occurrences of "01". The number of steps taken by the algorithm is the number of times the count() function is called.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

The time complexity of the algorithm is $$O(n)$$ where n is the length of the string, because it takes linear time to iterate over the string and replace all occurrences of "01" with "10".


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of this algorithm is $$O(1)$$  because it only uses constant space to store the current string and the number of steps taken

# Code
```
function secondsToRemoveOccurrences(s: string): number {
  let cnt = -1;

  function count(s: string): number {
    cnt++;
    let str = s;
    let isValid = true;
    for (let i = 0; i < s.length; i++) {
      if (i < s.length - 1 && s[i] < s[i + 1]) {
        isValid = false;
        str = str.slice(0, i) + "10" + str.slice(i + 2);
      }
    }
    return isValid ? cnt : count(str);
  }

  return count(s);
};
```