# 💯easy peasy🎯✅ | 99.56%🔥| 4 Easy Steps : 🎯| Simple (5 line) to understand💯Explained

**Author:** Prathamesh18X
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5305364/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5305364/)

---

# Intuition
The problem requires minimizing the number of moves to seat all students such that no two students sit in the same seat. The best approach to minimize the distance each student has to move is to sort both arrays and then pair each student with the corresponding seat.

# Approach
1. Sort the `seats` array and the `students` array.
2. Initialize a variable `moves` to keep track of the total moves needed.
3. Iterate through the sorted arrays and calculate the absolute difference between the seat and the student for each position. Add this difference to `moves`.
4. Return the total `moves`.

# Complexity
- Time complexity:
The time complexity is \\(O(n \\log n)\\) due to the sorting of the arrays.

- Space complexity:
The space complexity is \\(O(1)\\) as we are using a constant amount of extra space.


```javascript []
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */

var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let moves = 0;
    for (let i = 0; i < seats.length; i++) {
        moves += Math.abs(seats[i] - students[i]);
    }
    return moves;
};
```

```python []
def minMovesToSeat(seats, students):
    seats.sort()
    students.sort()
    moves = 0
    for i in range(len(seats)):
        moves += abs(seats[i] - students[i])
    return moves
```

```java []
import java.util.Arrays;

class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        Arrays.sort(seats);
        Arrays.sort(students);
        int moves = 0;
        for (int i = 0; i < seats.length; i++) {
            moves += Math.abs(seats[i] - students[i]);
        }
        return moves;
    }
}
```

```cpp []
#include <vector>
#include <algorithm>
#include <cmath>

class Solution {
public:
    int minMovesToSeat(std::vector<int>& seats, std::vector<int>& students) {
        std::sort(seats.begin(), seats.end());
        std::sort(students.begin(), students.end());
        int moves = 0;
        for (int i = 0; i < seats.size(); i++) {
            moves += std::abs(seats[i] - students[i]);
        }
        return moves;
    }
};
```

```kotlin []
class Solution {
    fun minMovesToSeat(seats: IntArray, students: IntArray): Int {
        seats.sort()
        students.sort()
        var moves = 0
        for (i in seats.indices) {
            moves += kotlin.math.abs(seats[i] - students[i])
        }
        return moves
    }
}
```

```ruby []
def minMovesToSeat(seats, students)
  seats.sort!
  students.sort!
  moves = 0
  seats.each_with_index do |seat, i|
    moves += (seat - students[i]).abs
  end
  moves
end
```

