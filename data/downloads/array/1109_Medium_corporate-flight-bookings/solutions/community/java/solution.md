# Java easy to read solution beats 100% in time

**Author:** jasonhey93
**Votes:** 18
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/491910/](https://leetcode.com/problems/corporate-flight-bookings/solutions/491910/)

---

To avoid using loop from i to j in every booking, we only need to keep track of the begin and the end flight in each booking. 

At the first loop, ans[i] means we add ans[i] to all flights from i to n. For example, [5,0,0,0] with ans[0] = 5 means all flights start from 0 will be added by 5, the result will be [5,5,5,5]. We then subtract 5 from position j, where we want to stop. In the case here, i = 1, j = 3 will be [5,0,0,-5] and the end result will be [5,5,5,0].

Note that we don't calculate the entire array at first. We just mark the begin and end in the first loop and use another loop at the end to calculate the result.

```
class Solution {
    public int[] corpFlightBookings(int[][] bookings, int n) {
        int[] ans = new int[n];
        for (int[] booking : bookings) {
            int i = booking[0]-1;
            int j = booking[1];
            int seats = booking[2];
            ans[i] += seats;
            if (j != n)
                ans[j] -= seats;
        }
        
        int count = 0;
        for (int i = 0; i < ans.length; i++) {
            ans[i] += count;
            count = ans[i];
        }
        return ans;
    }
}
```