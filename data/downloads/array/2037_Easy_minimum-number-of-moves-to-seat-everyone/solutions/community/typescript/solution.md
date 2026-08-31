# Beats 100% of Users in Typescript

**Author:** El3bady
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5309645/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5309645/)

---


![Screenshot from 2024-06-14 00-14-18.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The first thought is to minimize the total number of moves required to seat students by matching them to the closest available seats. By sorting both the seats and the students, we can pair each student to the nearest seat in a straightforward manner.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Sort the Arrays**: Begin by sorting both the `seats` and `students` arrays in non-decreasing order.
2. **Calculate Moves**: Initialize a counter `moves` to zero. Iterate through the sorted arrays, and for each pair of seat and student, calculate the absolute difference between their positions and add it to `moves`.
3. **Return Result**: Finally, return the total number of moves accumulated.

This approach ensures that each student is matched to the closest available seat, minimizing the total movement.

# Complexity
- Time complexity: 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
  The time complexity is \\(O(n \\log n)\\) because sorting the arrays is the most time-consuming operation.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
  The space complexity is \\(O(1)\\) if we do not count the input and output as extra space, or \\(O(n)\\) if we do.

# Code
```javascript
function minMovesToSeat(seats, students) {
    let moves = 0;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    for (let i = 0; i < seats.length; i++) {
        moves += Math.abs(seats[i] - students[i]);
    }
    return moves;
};
