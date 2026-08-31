# C# Solution for Number of Students Unable to Eat Lunch Problem

**Author:** Aman_Raj_Sinha
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4990608/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4990608/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this approach is to iterate through the students and sandwiches simultaneously, keeping track of the count of remaining sandwiches of each type. We then decrement the count of sandwiches as students take them until either all sandwiches are eaten or no more students can eat.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initialize an array count to keep track of the count of remaining sandwiches of each type.
2.	Iterate through the students array and update the counts of sandwiches for each type.
3.	Iterate through the sandwiches array, decrementing the count of sandwiches of the current type if available.
4.	Stop iterating when either all sandwiches are eaten or no more students can eat.
5.	Return the number of students who couldn\u2019t eat.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n), where n is the length of the sandwiches array. The solution iterates through the sandwiches array once and performs constant time operations within each iteration.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1), as the solution uses a fixed-size array count of size 2 to keep track of the count of remaining sandwiches of each type. The space used does not depend on the size of the input arrays.

# Code
```
public class Solution {
    public int CountStudents(int[] students, int[] sandwiches) {
        int[] count = new int[2]; // count[0] for circular sandwiches, count[1] for square sandwiches
        
        foreach (int student in students) {
            count[student]++;
        }
        
        int i = 0;
        while (i < sandwiches.Length) {
            if (count[sandwiches[i]] == 0) {
                break; // No more students who prefer this type of sandwich
            }
            
            count[sandwiches[i]]--; // Mark one sandwich as eaten by a student
            
            i++;
        }
        
        return students.Length - i;
    }
}
```