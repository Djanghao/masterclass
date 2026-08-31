# easy 🚀 beats 100% 🔷🔷| Images🧑‍💻 | Fully Explained👍 | Dry Run🔁 | Optimum Solution✅✅

**Author:** AnvarbekZiyodov
**Votes:** 7
**Link:** [https://leetcode.com/problems/my-calendar-ii/solutions/5838176/](https://leetcode.com/problems/my-calendar-ii/solutions/5838176/)

---

# Intuition
The goal is to manage a calendar where double bookings (two events overlap) are allowed but triple bookings (three events overlap) are not. This requires checking both the existing bookings and potential overlaps when booking new events.
# Approach
First, check if the new event overlaps with any interval in the overlaps list (indicating a triple booking). If it does, return false and reject the booking.
If no triple booking is detected, check for overlaps with events in the calendar list. For each overlapping event, record the overlap in the overlaps list.
Finally, add the new event to the calendar list and return true.
# Complexity
- Time complexity:

    O(n)
- Space complexity:

    O(n)
# Code
```javascript []
var MyCalendarTwo = function() {
    this.calendar = [];
    this.overlaps = [];
};

MyCalendarTwo.prototype.book = function(start, end) {
    for(let date of this.overlaps){
        if(start < date[1] && end > date[0]) 
            return false;
    }
    for(let date of this.calendar){
        if(start < date[1] && end > date[0]){
            this.overlaps.push([Math.max(date[0], start), Math.min(date[1], end)]);
        }
    }
    this.calendar.push([start, end]);
    return true;
};
```


![4385dfa6-267a-465f-b8c3-e561dfb2dcf4_1723795018.7931647.png](./images/0.png)
