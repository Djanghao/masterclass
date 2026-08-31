# ✅ C#/Java Prefix Sum || Easy solution || O(n) || Beats 100% ✅

**Author:** Ahmed_Salem
**Votes:** 1
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/5816066/](https://leetcode.com/problems/corporate-flight-bookings/solutions/5816066/)

---

# Intuition

To efficiently solve this problem, we can observe that the bookings affect consecutive flights. By keeping track of the changes in seat bookings for each flight, we can derive the final result using prefix sum.

# Approach

1. We initialize an array ans of size n to store the number of seats booked for each flight. Initially, all elements are set to 0.

2. We iterate through each booking in the given list.

    - For each booking, we extract the starting flight number (first), ending flight number (last), and the number of seats to be booked (seats).

    - We update the ans array by adding the number of seats to the starting flight number (ans[first] += seats).


    - If the ending flight number is less than n - 1, we subtract the same number of seats from the next flight number after the ending flight (ans[last + 1] -= seats).

3. After processing all the bookings, we perform a prefix sum operation on the ans array to accumulate the booked seats for each flight. Starting from index 1, we add the value at each index to the previous index (ans[i] += ans[i - 1]).

4. The resulting ans array contains the total number of seats booked for each flight.

# Complexity

- Time complexity:
O(n)

- Space complexity:
O(n)

![50510b0c-779b-4cac-99da-f40f9ee9f70e_1690526377.4372673.jpeg](./images/0.jpeg)

# Code
```csharp []
public class Solution {
    public int[] CorpFlightBookings(int[][] bookings, int n) {
        
        var res = new int[n];

        foreach (var b in bookings)
        {
            var first = b[0] - 1;
            var last = b[1];
            var seats = b[2];

            res[first] += seats;

            if (last < n)
                res[last] -= seats; 
        }

        for (int i = 1; i < n; ++i)
            res[i] += res[i-1];

        return res;
    }
}
```
```java []
public class Solution {
    public int[] CorpFlightBookings(int[][] bookings, int n) {
        
        var res = new int[n];

        for (int[] b : bookings)
        {
            var first = b[0] - 1;
            var last = b[1];
            var seats = b[2];

            res[first] += seats;

            if (last < n)
                res[last] -= seats; 
        }

        for (int i = 1; i < n; ++i)
            res[i] += res[i-1];

        return res;
    }
}
```