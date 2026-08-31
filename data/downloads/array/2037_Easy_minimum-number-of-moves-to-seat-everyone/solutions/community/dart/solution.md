# ✅✅ Easy approach to find minimum number of moves to seats. 💯

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5421798/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5421798/)

---

# Intuition
The problem is to find the minimum number of moves required to seat students in given seats. The optimal way to minimize the moves is to match the closest pairs of students and seats after sorting both arrays.

# Approach
1. **Sort the Lists**:
   - First, sort both the `seats` and `students` lists. This ensures that the closest possible matches between students and seats can be easily identified by pairing them in the same index positions.

2. **Calculate the Total Moves**:
   - Initialize a variable `totalSeatMoves` to store the total number of moves required.
   - Iterate through the sorted lists, and for each pair of student and seat at index `i`, calculate the absolute difference between the seat and student positions and add this to `totalSeatMoves`.

3. **Return the Result**:
   - Return `totalSeatMoves` as the result, which represents the minimum number of moves needed to seat all students.

### Explanation:
- By sorting both the `seats` and `students` lists, we ensure that each student is paired with the closest possible seat. This minimizes the total distance moved.
- The absolute difference between corresponding elements in the sorted lists gives the minimum move required for each student to reach a seat.

## Complexity
- **Time Complexity**: $$O(n \\log n)$$
  - Sorting the `seats` and `students` lists each takes $$O(n \\log n)$$ time.
  - The iteration through the lists takes $$O(n)$$ time.

- **Space Complexity**: $$O(1)$$
  - The algorithm uses a constant amount of extra space beyond the input lists.

# Code
```dart
class Solution {
  int minMovesToSeat(List<int> seats, List<int> students) {
    // Sort both lists
    seats.sort();
    students.sort();
    
    // Initialize the total moves counter
    int totalSeatMoves = 0;
    
    // Iterate through the lists and sum the absolute differences
    for (int i = 0; i < students.length; i++) {
      totalSeatMoves += (students[i] - seats[i]).abs();
    }
    
    // Return the total number of moves required
    return totalSeatMoves;
  }
}
