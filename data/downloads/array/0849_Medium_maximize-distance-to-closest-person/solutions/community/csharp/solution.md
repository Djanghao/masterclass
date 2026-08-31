# Short 🔥C#🔥 solution

**Author:** asfasdfasdfa
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/5697714/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/5697714/)

---

# Intuition
The problem requires calculating the maximum distance to the closest person for an empty seat in a row of seats. To achieve this, we can iterate through the array and keep track of sequences of consecutive empty seats, then determine the maximum possible distance based on these sequences.

# Approach
1. Initialization:

- Start by assuming the maximum distance max is 1.
- Determine if the first seat is empty to handle the edge case where the row might start with several empty seats.
1. Iteration through the array:

- Use a loop to traverse the array of seats.
- Track the length of consecutive empty seats (count).
- If a seat is occupied (seats[i] == 1):
- - If we were in a sequence of empty seats (count > 0), calculate the potential maximum distance for this sequence:
- - - If this sequence is at the beginning (i.e., the first occupied seat after a sequence of empty seats), the maximum distance is equal to the length of this sequence.
- - - Otherwise, the distance is half the length of the sequence (rounded up) because the person would sit in the middle of the empty sequence.
- -  Reset count to 0 to start counting the next potential sequence of empty seats.
- If a seat is empty and it\u2019s the last seat in the array, update the maximum distance to be the length of the final sequence of empty seats.
3. Return the result:

- After the loop, max will hold the maximum distance to the closest person for an optimal seating position.

# Complexity
- Time complexity: $$O(n)$$
- - The time complexity of this solution is $$\uD835\uDC42(\uD835\uDC5B)$$. This is because the solution involves a single pass through the array.

- Space complexity: $$O(1)$$
- - The space complexity is $$\uD835\uDC42(1) since no additional space proportional to the input size is used; only a few variables are maintained throughout the process.

# Code
```csharp []
public class Solution {
    public int MaxDistToClosest(int[] seats)
{
    int max = 1;
    bool isEmptyBeginning = seats[0] == 0;

    for (int i = 0, count = 0; i < seats.Length; i++)
        if (seats[i] == 1) (isEmptyBeginning, count, max) = (false, 0, isEmptyBeginning ? Math.Max(max, count) : Math.Max(max, (count + 1) / 2));
        else
            if (i == seats.Length - 1) max = Math.Max(max, ++count);
            else count++;

    return max;
}
}
```