# JavaScript Solution: Efficient String Shifting with Net Shift Calculation and Modulus Optimization

**Author:** ahmedHmada
**Votes:** 1
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/4341260/](https://leetcode.com/problems/perform-string-shifts/solutions/4341260/)

---

Certainly, let's break down this problem and the provided code snippet into the outlined sections:

### Intuition
When faced with the problem of performing multiple string shifts, my first thought is to simplify the process. Instead of performing each shift sequentially, I would compute a total or "net" shift. This approach simplifies the problem by combining all shifts into a single operation, making it more efficient and easier to understand.

### Approach
1. **Calculate Net Shifts**: Sum up all the shifts, where left shifts (direction 0) are considered negative and right shifts (direction 1) are positive. This step simplifies multiple shifts into a single net shift value.

2. **Normalize the Net Shifts**: Use the modulus operation (`%`) with the string's length to ensure the net shift is within the range of the string. This step addresses the cyclic nature of the shifts.

3. **Handle Negative Shifts**: If the net shift is negative, convert it to an equivalent positive shift. This makes the implementation simpler as it standardizes all shifts to one direction.

4. **Perform the Shift**: Rearrange the string according to the net shift. This is done by slicing the string at the appropriate point and concatenating the two parts in reversed order.

### Complexity
- Time Complexity: **O(n + m)**
  - The for-loop iterates over the `shift` array, leading to an O(n) time complexity, where n is the number of shift operations.
  - The string manipulation (using `substring`) is O(m), where m is the length of the string `s`.
- Space Complexity: **O(m)**
  - Space complexity is mainly due to the creation of new substrings. Since strings are immutable in JavaScript, `substring` operation creates new strings. However, there are no additional data structures that grow with the size of the input.

# Code
```
function stringShift(s, shift) {
    let netShifts = 0;

    // Calculate net shifts
    for (let i = 0; i < shift.length; i++) {
        if (shift[i][0] === 0) {
            netShifts -= shift[i][1];
        } else {
            netShifts += shift[i][1];
        }
    }

    // Normalize the net shifts to the length of the string
    netShifts = netShifts % s.length;

    // If netShifts is negative, convert it to equivalent positive shift
    if (netShifts < 0) {
        netShifts += s.length;
    }

    // Perform the shift
    return s.substring(s.length - netShifts) + s.substring(0, s.length - netShifts);
}
```