# Java ✅ || Easy Solution ✅ || 100% beats ✅ || Fully Explained ✅

**Author:** akobirswe
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/3831953/](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/3831953/)

---

# Approach
The given problem involves finding the total number of laser beams in a bank, where the bank's floor plan is represented by a 0-indexed binary string array. Each row in the array corresponds to a row in the bank, and each character in the row can either be '0' (empty cell) or '1' (security device).

To solve the problem, the provided code implements the following approach:

1. Initialize variables: The code starts by initializing two variables, "count" and "prev," to 0. The "count" variable will keep track of the total number of laser beams found, and "prev" will store the count of security devices in the previous row.

2. Loop through each row: The code iterates through each row (floor) in the bank using a for-each loop.

3. Count ones in the current row: For each row, the "countOnes" function is called to count the number of security devices ('1's) in that row.

4. Calculate the beams: If the number of security devices in the current row is not zero, it means there is at least one potential laser beam between the current row and the previous row. The code then updates the "count" variable by adding the product of the number of security devices in the current row and the number of security devices in the previous row ("ones * prev"). The "prev" variable is then updated to the number of security devices in the current row to be used in the next iteration.

5. Return the total count: After processing all rows, the function returns the final "count," which represents the total number of laser beams in the bank.

Logic behind the approach:
- The approach leverages the fact that to form a laser beam, there must be security devices on two different rows, and no other rows in between them should have any security devices.
- By counting the number of security devices in each row, the code identifies potential beam pairs between consecutive rows. The number of beams between each pair is given by the product of the number of security devices in the current row and the previous row. This is because each security device in the current row can potentially form a beam with each security device in the previous row.
- The "prev" variable is used to keep track of the number of security devices in the previous row, allowing the code to calculate the beams for each consecutive pair of rows.

Overall, this approach efficiently calculates the total number of laser beams in the bank by iterating through the rows only once and counting the security devices in each row. The time complexity of this solution is O(m * n), where "m" is the number of rows and "n" is the number of columns in the bank matrix. The space complexity is O(1) since it uses a constant amount of additional space regardless of the input size.

# Complexity
- Time complexity: $$O(m * n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int numberOfBeams(String[] bank) {
        int count = 0;
        int prev = 0;

        for (String floor : bank) {
            int ones = countOnes(floor);
            if (ones != 0) {
                count += ones * prev;
                prev = ones;
            }
        }

        return count;
    }

    private int countOnes(String floor) {
        int ones = 0;
        for (char c : floor.toCharArray()) {
            if (c == '1') {
                ones++;
            }
        }
        return ones;
    }
}
```