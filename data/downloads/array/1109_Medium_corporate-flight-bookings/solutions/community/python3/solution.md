# Python 3   ||   5 lines,  prefix sum   ||   T/S: 96% / 81%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/2940321/](https://leetcode.com/problems/corporate-flight-bookings/solutions/2940321/)

---

```
class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:

        arr = [0]*(n+1)

        for lv, ar, seats in bookings:
            arr[lv-1]+= seats
            arr[ar]-= seats

        return list(accumulate(arr[:-1]))
```
[https://leetcode.com/problems/corporate-flight-bookings/submissions/1274274012/](https://leetcode.com/problems/corporate-flight-bookings/submissions/1274274012/)


I could be wrong, but I think that time is *O*(*M* + *N*) and space is *O*(*M*), in which *M* ~ `len(bookings)` and *N*~ `n`.