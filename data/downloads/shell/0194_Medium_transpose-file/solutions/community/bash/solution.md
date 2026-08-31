# 💥 Runtime 5beats 98.28%, Memory beats 51.03%

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/transpose-file/solutions/5745337/](https://leetcode.com/problems/transpose-file/solutions/5745337/)

---

# Intuition
When I first looked at this problem, I thought about it like flipping a table. Imagine if I had a table where each row is like a person\u2019s information. For example, in one row, there\u2019s a name and an age, and in the next row, there\u2019s another name and another age. Now, what if I wanted to turn this table so that the names become the first "column" going down and the ages become the second "column"?

This is what transposing means: turning rows into columns and columns into rows. I knew I had to somehow take each word from a row and line it up as a column with the words from other rows.

# Approach
I used a tool called awk, which is perfect for working with text data in Bash. Here's the plan I followed:

Step 1: Read the file row by row \u2013 As I go through each row, I treat every word (or column) separately.

Step 2: Build the transposed structure \u2013 For each word in the row, I store it in an array that will eventually hold each new "row" of transposed data.
If I\u2019m on the first row, I just save the words in the array.
For later rows, I add each word to the corresponding column by combining it with the previously saved data.

Step 3: Print the result \u2013 After I\u2019ve gone through all the rows, I simply print each transposed line (which is now stored in the array). These lines will now show the columns in their new transposed form.

# Complexity
- Time complexity:
O(n * m), where:

n is the number of rows in the file.
m is the number of columns (or fields) in each row.
Here\u2019s why: for each row, I\u2019m processing every column (or word). Since I touch every word exactly once, the time it takes is proportional to the total number of words (which is n x m).


- Space complexity:
O(n * m) as well. I need to store the transposed data in an array, and the size of the array depends on the total number of words in the file. Since I\u2019m storing every word in a new format, the space I use is proportional to the number of rows and columns.

Even though I\u2019m storing the entire transposed result, the process itself doesn't require loading the whole file into memory at once\u2014just the necessary parts for transposing. This helps keep memory usage efficient.

# Code
```bash []
#!/bin/bash
awk '
{
    for (i = 1; i <= NF; i++) {
        if (NR == 1) {
            a[i] = $i
        } else {
            a[i] = a[i] " " $i
        }
    }
}
END {
    for (i = 1; i <= NF; i++) {
        print a[i]
    }
}' file.txt

```