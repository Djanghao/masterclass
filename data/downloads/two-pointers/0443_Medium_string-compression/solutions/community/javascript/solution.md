# Very Easy 100% Easiest Logic Ever (Fully Explained Step by Step)(C++, JavaScript, Java)

**Author:** EmraanHash
**Votes:** 50
**Link:** [https://leetcode.com/problems/string-compression/solutions/3246103/](https://leetcode.com/problems/string-compression/solutions/3246103/)

---


# Approach
This solution uses two pointers **i** and **j** to iterate through the input array. The variable count keeps track of the number of consecutive characters that are equal to the current character curr. When a new character is encountered, the current character and its count (if greater than 1) are written to the output array using the **chars** array and the **i** pointer.

Finally, the function returns **i**, which represents the length of the compressed array.

# Complexity
- Time complexity:
The time complexity is O(n), where n is the length of the input array.

This is because the solution uses two pointers **i** and **j** to iterate through the input array. The outer while loop executes n times, where n is the length of the input array. The inner while loop executes a maximum of n times in total across all iterations of the outer while loop.

Therefore, the total number of operations performed by the solution is **O(n + n) = O(2n)**, which is equivalent to **O(n)** in asymptotic notation.

- Space complexity:
O(1)

# Code 
```
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
    let j = 0;
    while (j < chars.length) {
        let count = 0;
        let curr = chars[j];
        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }
        chars[i++] = curr;
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i++] = digit;
            }
        }
    }
    return i;
};
```
# Code 
```
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let index = 0;
  let i = 0;
  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[j] === chars[i]) {
      j++;
    }
    chars[index++] = chars[i];
    if (j - i > 1) {
      let count = j - i;
      for (let digit of count.toString()) {
        chars[index++] = digit;
      }
    }
    i = j;
  }
  return index;
};
```

I am working hard for you guys...
Please upvote if you found any help with this code...