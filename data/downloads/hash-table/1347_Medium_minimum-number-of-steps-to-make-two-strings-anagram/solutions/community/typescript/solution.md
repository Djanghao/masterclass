# ✅ simple approach | JavaScript, Python, TypeScript | explanation 👍🔥

**Author:** raviTejaY
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4556192/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4556192/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The funddamental idea to solve this problem is to use a frequency count method to compare the occurences of each character in both strings.

# Approach
<!-- Describe your approach to solving the problem. -->
**Initialize a Count Array:**
- A count array of length_26 is initialized to store the frequency of each character (assuming the strings contain only lower case letters). Each index of array represents a letter ('a' corresponds to 0, 'b' to 1, . . .)
    `let count = new Array(26).fill(0);`

**Count Frequency of Each Character:**
- Iterate through each character of both string `s` and `t`.
- Increase the count for each character in `s` and decrease the count for each character in `t`.
- If `s` and `t` are anagrams of each other, *the count array would be filled with all zeros*. However, any non-zero value indicates a discrepancy in the frequency of that character between the two strings.

**Calculate the Sum of Positive Counts:**
- Iterate through the `count` array.
- Sum up all the positive values. This sum represents the number of characters that are in `s` but not in `t` in the necessary frequency. these are the "extra" characters that need to be removed or replaced to make `t` an anagram of `s`

# Complexity
- Time complexity: $$O(N)$$
    - first `for` loop iterates through each character of the strings once.
    - second `for` loop iterates through the 26 elements of the count array, which is a constant-time operation.

- Space complexity: $$O(1)$$
    - The space used by the count array is constant, as it always contains 26 elements.

# Code

```Javascript []
// JavaScript
var minSteps = function(s, t) {
    let count = new Array(26).fill(0);
    for(let i=0; i<s.length; i++){
        count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        count[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    let sum = 0
    for(let n of count){
        if(n > 0){
            sum += n;
        }
    }
    return sum;
};
```
```Python []
# Python
class Solution(object):
    def minSteps(self, s, t):
        count = [0] * 26
        for i in range(len(s)):
            count[ord(s[i]) - ord('a')] += 1
            count[ord(t[i]) - ord('a')] -= 1

        # `ord(char)` is used to get the ASCII value of a character
        sum = 0
        for n in count:
            if n > 0:
                sum += n

        return sum

```
```Typescript []
/* Typescript */
function minSteps(s: string, t: string): number {
    let sum : number = 0;
    let count : Array<number> = new Array(26).fill(0);

    for(let i=0; i<s.length; i++){
        count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        count[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    for(let n of count){
        if(n > 0){
            sum += n;
        }
    }
    return sum
};
```

#### please upvote !
![intro-import.jpg](./images/0.jpeg)
