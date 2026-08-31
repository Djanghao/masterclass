# ✅Beats 100% - Explained with [ Video ] - C++/Java/Python/JS - Arrays - Sorting - Interview Solution

**Author:** lancertech6
**Votes:** 124
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5304430/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5304430/)

---

![Screenshot 2024-06-13 065049.png](./images/0.png)


# YouTube Video Explanation:

<!-- **If you want a video for this question please write in the comments** -->

<!-- https://www.youtube.com/watch?v=ujU-jeO1v-k -->

https://youtu.be/2gkefxP-cQw

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 1900 Subscribers*
*Current Subscribers: 1855*

---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to find the minimum number of moves to position each student in a seat such that no two students occupy the same seat. Since the cost of moving a student is the absolute difference between their current position and the target seat position, the optimal way to achieve this is to pair the closest seats with the closest students.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Sorting**:
   - Sort both the `seats` and `students` arrays. By sorting, we ensure that the smallest available seat is paired with the smallest positioned student, the second smallest seat with the second smallest positioned student, and so on. This minimizes the overall distance each student has to move.
   
2. **Calculate Moves**:
   - Iterate through the sorted arrays and compute the sum of absolute differences between the corresponding elements in the `seats` and `students` arrays. This gives the total number of moves required to seat all students.

# Complexity
- **Time Complexity**: `O(n log n)`
  - Sorting the `seats` and `students` arrays takes \\( O(n \\log n) \\) time each.
  - Calculating the total moves takes \\( O(n) \\) time.
  - Hence, the overall time complexity is dominated by the sorting step, i.e., \\( O(n \\log n) \\).

- **Space Complexity**: `O(1)`
  - No extra space is used other than a few variables to store intermediate results.


# Step by Step Explanation

Let's take the example from the problem statement:

**Example**: `seats = [3, 1, 5]`, `students = [2, 7, 4]`

1. **Initial State**:

| Seats | Students |
|-------|----------|
| 3     | 2        |
| 1     | 7        |
| 5     | 4        |

2. **After Sorting**:

| Seats | Students |
|-------|----------|
| 1     | 2        |
| 3     | 4        |
| 5     | 7        |

3. **Calculate Moves**:

| Seat | Student | Moves |
|------|---------|-------|
| 1    | 2       | 1     |
| 3    | 4       | 1     |
| 5    | 7       | 2     |
| **Total Moves** |         | **4**   |

The total number of moves required is 4.




# Code
```java []
class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        Arrays.sort(seats);
        Arrays.sort(students);
        int n=seats.length;
        int sum=0;
        for(int i=0;i<n;i++){
            sum += Math.abs(seats[i]-students[i]);
        }
        return sum;
    }
}
```
```C++ []
class Solution {
public:
    int minMovesToSeat(vector<int>& seats, vector<int>& students) {
       sort(seats.begin(), seats.end());
       sort(students.begin(), students.end());
        int moves = 0;
        for( int i=0; i<seats.size(); i++)
            moves += abs(seats[i] - students[i]);
        
        return moves;
    }
};
```
```Python []
class Solution:
    def minMovesToSeat(self, seats, students):
        seats.sort()
        students.sort()
        return sum(abs(seat - student) for seat, student in zip(seats, students))
```
```JavaScript []
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let moves =0
    seats = seats.sort((a,b)=>b-a)
    students = students.sort((a,b)=>b-a)
    seats.forEach((s,i)=>
    moves = moves+Math.abs(s-students[i]))

    return moves
};
```
![upvote.png](./images/1.png)

# Another Approach (\u2705Beats 100%)

# Intuition:
To minimize the number of moves required to seat each student, we need to pair each student with an available seat such that the distance between the student's position and the seat's position is minimized. We can achieve this by sorting the positions of seats and students and then iterating through both arrays simultaneously to calculate the total moves needed.

# Approach:
1. Sort the `seats` and `students` arrays.
2. Initialize a variable `moves` to track the total number of moves.
3. Iterate through both arrays simultaneously.
   - Calculate the absolute difference between the position of the current student and the current seat.
   - Add this difference to `moves`.
4. Return the total number of moves.

# Complexity:
- Time complexity: O(nlogn) due to sorting the arrays.
- Space complexity: O(n) for storing the sorted arrays.

# Code

```java []
class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        int[] pos = new int[101];
        int n = seats.length;
        for(int i = 0; i < n; i++){
            pos[seats[i]]++;
            pos[students[i]]--;
        }
        int res = 0;
        int current = 0;
        for(int i: pos){
            res += Math.abs(current);
            current += i;
        }
        return res;
    }
}
```
```C++ []
class Solution {
public:
    int minMovesToSeat(vector<int>& seats, vector<int>& students) {
       vector<int> pos(101, 0);
        int n = seats.size();
        for(int i = 0; i < n; i++){
            pos[seats[i]]++;
            pos[students[i]]--;
        }
        int res = 0;
        int current = 0;
        for(int i: pos){
            res += abs(current);
            current += i;
        }
        return res;
    }
};
```
```Python []
class Solution:
    def minMovesToSeat(self, seats, students):
        pos = [0] * 101
        n = len(seats)
        for i in range(n):
            pos[seats[i]] += 1
            pos[students[i]] -= 1
        res = 0
        current = 0
        for i in pos:
            res += abs(current)
            current += i
        return res
```
```JavaScript []
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    const pos = new Array(101).fill(0);
        const n = seats.length;
        for(let i = 0; i < n; i++){
            pos[seats[i]]++;
            pos[students[i]]--;
        }
        let res = 0;
        let current = 0;
        for(const i of pos){
            res += Math.abs(current);
            current += i;
        }
        return res;
};
```