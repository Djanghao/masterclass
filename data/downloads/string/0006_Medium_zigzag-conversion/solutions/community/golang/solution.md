# Golang ✅ | Faster🧭 than 100%🔥 | Easy Understanding

**Author:** UnitedIngvar
**Votes:** 8
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/4298058/](https://leetcode.com/problems/zigzag-conversion/solutions/4298058/)

---

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(1)$$ (if we don't count the result as the additional memory)

# Approach
Our first step is to find the formula that we can apply for finding the next position in the string that we should add to the result. Look at the zigzag:
```
P     I    N
A   L S  I G
Y A   H R
P     I
```
If you count letters from 'P' to 'I' (both in the first row) and then do the same thing from 'I' to 'N', you'll notice that the distance between each of them is 6.
Now let's do the same thing for the second row of the zigzag. Counting from 'A' to 'L' we get 4, and from then 'L' to 'S' we get 2. Cool, it means there is some patterny-looking-like thing going on here, but we still need more data to find the pattern.
If we count the steps for each row with different numbers of rows for the zigzag, we get the following table:
| numRows (input) | First step | Second step |
|----------|----------|----------|
| First Row   |    |    |
| 2    | 2    | -   |
| 3    | 4   | -   |
| 4    | 6   | -   |
| 5    | 8  | -   |
| Second Row  |   |    |
| 2    | 2   | -  |
| 3    | 2   | 2  |
| 4    | 4   | 2  |
| 5    | 6   | 2  |
| Third Row  |   |    |
| 3    | 4   | -   |
| 4    | 2   | 4  |
| 5    | 4   | 4   |

Now it's pretty easy to find some formulas for the program. First, we might need to find the ```step``` formula. ```Step``` represents the size of a single part of a zigzag. In our example above, that would be the part lasting from 'P' to 'I'. According to the data we got, the 'step' formula goes like follows:
```
step := numRows * 2 - 2
```

Now, for each row between the first and the last, we need two different steps that will consistently follow each other. It's clear that they all sum up to the ```step```. And the ```firstStep``` is always ```step - (currentZigZagRow * 2)```. After we found it, it's easy to find the second step: ```secondStep = step - firstStep```, because ```firstStep + secondStep = step```, according to the data. Actually, this formula is applicable to all the consecutive steps.
But we still have some exceptions, namely the first and last rows of the zigzag. Here, the first step and the second step will always be ```step```, so our previous formulas won't work in a loop.
I'm sure there is some mathematical solution for this, but I decided to use a simple if statement for that case. Please let me know in the comments if you've found a better solution.

The algorithm is as follows:
1. Find the ```step``` by using the above formula.
2. Initialize the string builder and grow it to the length of the original string.
3. In the main loop, go from 0 to numRows: we're going to get the result row by row.
4. Get the first step using the formulas above.
5. In the second loop, start the ```position``` from ```row``` and go to ```len(s)```, incrementing the ```position``` by the ```nextStep``` variable.
6. Use the ```position``` to get the character from the string and append it to the result.
7. Apply the above formulas to find the ```nextStep```.


# Code
```golang
import "strings"

func convert(s string, numRows int) string {
    if numRows == 1 {
        return s
    }

    var b strings.Builder
    b.Grow(len(s))
    step := numRows * 2 - 2

    for row := 0; row < numRows; row++ {
        nextStep := 0
        if row == 0 || row == numRows - 1 {
            nextStep = step
        } else {
            nextStep = row * 2
        }
        for pos := row; pos < len(s); pos += nextStep {
            b.WriteByte(s[pos])
            if row == 0 || row == numRows - 1 {
                nextStep = step
            } else {    
                nextStep = step - nextStep
            }
        }
    }

    return b.String()
}

```