# O(N) Complexity C#

**Author:** the_dov
**Votes:** 10
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/4299270/](https://leetcode.com/problems/zigzag-conversion/solutions/4299270/)

---

# Intuition
Create `numRows` seperate strings with corresponding characters and return the concatenation of all these strings.

# Approach
Create a solution array, initially with empty strings, where the array is of length `numRows`. Loop through the string `s` and append that character stored in the row with index `i`. Add the direction value to the index.
If `i=0` or `i=(numRows - 1)` change the direction value to the negative of its current value.
Return the concatonation of all values in the array.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution 
{
    public string Convert(string s, int numRows) 
    {
        if(numRows == 1 || s.Length <= 1)
        {
            return s;
        }

        string[] solution = new string[numRows];

        int i = 0, direction = 1;
        foreach(char c in s)
        {
            solution[i] += c;

            i += direction;

            if (i == numRows-1 || i==0) direction *= -1;
        }

        return string.Concat(solution);
    }
}
```