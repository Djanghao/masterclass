# TS Solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5957181/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5957181/)

---

Steps:
Initialize Variables:

condition is set to true to keep the loop running until the entire string is processed.

arr is an array of tuples, where each tuple represents a line in the format [lineString, lineWidth]. The lineString holds the characters that fit in a line, and lineWidth holds the total width of that line.

previousIndex keeps track of where to start in the string for each new line.

Loop to Process Each Line:

The loop continues while condition is true.
sumChar is initialized to an empty string to accumulate characters for the current line.
sumCharWidth is initialized to 0 to accumulate the width of characters for the current line.
Inner for Loop to Process Characters:

Loop through the characters of s starting from previousIndex.
Calculate indexLetter: This converts the current character s[i] into an index by subtracting the ASCII value of 'a'. For example, 'a' corresponds to index 0, 'b' corresponds to index 1, and so on.

Check if Adding the Character Exceeds the Line Width:
If adding the current character\u2019s width (widths[indexLetter]) causes the total width to exceed 100 units:
Push the accumulated line (sumChar and sumCharWidth) into arr.
Update previousIndex to mark the starting point of the next line as i.
Break the inner loop to start a new line.
Handle the Last Line:

If the loop reaches the last character (i == s.length - 1):
Set condition to false to exit the while loop after processing the last character.
Add the last character to sumChar and update sumCharWidth.
Push the final line into arr.
Return the Result:

Return an array with:
The total number of lines (arr.length).
The width of the last line (arr[arr.length - 1][1]).

# Complexity
- Time complexity: 70ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 53.82MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function numberOfLines(widths: number[], s: string): number[] {
  let condition = true
  let arr: [string, number][] = []
  let previousIndex = 0
  
  while (condition) {
    let sumChar = ""
    let sumCharWidth = 0

    for (let i = previousIndex; i < s.length; i++) {
      let indexLetter =  s[i].charCodeAt(0) - "a".charCodeAt(0)
 

      if (sumCharWidth + widths[indexLetter] > 100) {
        
        arr.push([sumChar, sumCharWidth])
        previousIndex = i
        break
      }
      
       if (i == s.length - 1) {
        condition = false
        sumChar += s[i]
        sumCharWidth += widths[indexLetter]
        arr.push([sumChar, sumCharWidth])
        break
      }

      sumChar += s[i]
      sumCharWidth += widths[indexLetter]
    }
  }
  return [arr.length, arr[arr.length - 1][1]];
};
```

Improved Version 

```
function numberOfLines(widths: number[], s: string): number[] {

    let lines = 1
    let currentWidth = 0

    for (let i = 0; i < s.length; i++) {
      let indexLetter =  s[i].charCodeAt(0) - "a".charCodeAt(0)
      let charWidth = widths[indexLetter]

      if (currentWidth + charWidth > 100) {
        lines++
        currentWidth = charWidth
      } else {
        currentWidth += charWidth
      }
    }
  return [lines, currentWidth];
};

```