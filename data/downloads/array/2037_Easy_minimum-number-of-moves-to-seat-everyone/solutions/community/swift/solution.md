# 2 Easy Interview Approaches✅ || Brute force🔥|| Count Sort✅ || Beat 💯 || All language 🔥

**Author:** naman_malik
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5304798/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/5304798/)

---

![Runtime complexity.png](./images/0.png)


# Approach -1 
<!-- Describe your approach to solving the problem. -->
Brute force - By Sorting

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int minMovesToSeat(vector<int>& seats, vector<int>& students) {
        int ans=0;

        sort(seats.begin(),seats.end());
        sort(students.begin(),students.end()); 

        for(int i=0; i<seats.size(); i++)
        {
            ans+=abs(seats[i]-students[i]);
        }

        return ans;
    }
};
```
```java []
class Solution {

    public int minMovesToSeat(int[] seats, int[] students) {
        Arrays.sort(seats);
        Arrays.sort(students);
        int moves = 0;
        for (int i = 0; i < seats.length; i++) {
            // Add the absolute value of the difference
            // between the position of the seat and the student
            moves += Math.abs(seats[i] - students[i]);
        }
        return moves;
    }
}
```
```python []
class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        students.sort()
        seats.sort()
        moves = 0
        for i in range(0, len(seats)):
            # Add the absolute value of the difference
            # between the position of the seat and the student
            moves += abs(seats[i] - students[i])
        return moves
```


# Approach - 2
<!-- Describe your approach to solving the problem. -->
Better Approach - By Count Sort

# Complexity
- Time complexity: O(n+m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int minMovesToSeat(vector<int>& seats, vector<int>& students) {
        // Find the maximum position in the arrays
        int maxPosition = max(findMax(seats), findMax(students));
    // Stores difference between number of seats and students at each
        // position
        vector<int> differences(maxPosition, 0);
        // Count the available seats at each position
        for (int position : seats) {
            differences[position - 1]++;
        }
        // Remove a seat for each student at that position
        for (int position : students) {
            differences[position - 1]--;
        }
        // Calculate the number of moves needed to seat the students
        int moves = 0;
        int unmatched = 0;
        for (int difference : differences) {
            moves += abs(unmatched);
            unmatched += difference;
        }
        return moves;
    }
private:
    int findMax(const vector<int>& array) {
        int maximum = 0;
        for (int num : array) {
            if (num > maximum) {
                maximum = num;
            }
        }
        return maximum;
    }
};
```
```java []
class Solution {

    public int minMovesToSeat(int[] seats, int[] students) {
        // Find the maximum position in the arrays
        int maxPosition = Math.max(findMax(seats), findMax(students));

        // Stores difference between number of seats and students at each position
        int[] differences = new int[maxPosition];

        // Count the available seats at each position
        for (int position : seats) {
            differences[position - 1]++;
        }

        // Remove a seat for each student at that position
        for (int position : students) {
            differences[position - 1]--;
        }

        // Calculate the number of moves needed to seat the students
        int moves = 0;
        int unmatched = 0;
        for (int difference : differences) {
            moves += Math.abs(unmatched);
            unmatched += difference;
        }

        return moves;
    }

    private int findMax(int[] array) {
        int maximum = 0;
        for (int num : array) {
            if (num > maximum) {
                maximum = num;
            }
        }
        return maximum;
    }
}
```
```python []
class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        # Find the maximum position in the arrays
        max_position = max(max(seats), max(students))

        # Stores difference between number of seats and students at each position
        differences = [0] * (max_position)

        # Count the available seats at each position
        for position in seats:
            differences[position - 1] += 1

        # Remove a seat for each student at that position
        for position in students:
            differences[position - 1] -= 1

        # Caculate the number of moves needed to seat the students
        moves = 0
        unmatched = 0
        for difference in differences:
            moves += abs(unmatched)
            unmatched += difference

        return moves
```
![upvote cat3.png](./images/1.png)


