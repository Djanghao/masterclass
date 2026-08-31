# Python | Greedy

**Author:** Khosiyat
**Votes:** 33
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/5834359/](https://leetcode.com/problems/my-calendar-i/solutions/5834359/)

---

[see the Successfully Accepted Submission](https://leetcode.com/problems/my-calendar-i/submissions/1402453953/?envType=daily-question&envId=2024-09-26)

# Code
```python3 []
class MyCalendar:

    def __init__(self):
        # Initialize an empty list to store the events
        self.events = []
        
    def book(self, start: int, end: int) -> bool:
        # Check for overlap with existing events
        for s, e in self.events:
            # If the new event overlaps with any existing event
            if not (end <= s or start >= e):  # No overlap condition: (new_end <= old_start) or (new_start >= old_end)
                return False
        # If no overlap, add the event
        self.events.append((start, end))
        return True

# Your MyCalendar object will be instantiated and called as such:
# obj = MyCalendar()
# param_1 = obj.book(start,end)

```

## Approach:
We will use a list to store all the booked events. Each event is a pair of integers representing the start and end time of that event. When we attempt to book a new event, we will iterate through the existing events and check if there is any overlap.

## Checking for overlap:
Two events (A: `[start1, end1)` and B: `[start2, end2)`) overlap if:

- The start of one event is before the end of the other.
- The end of one event is after the start of the other.

### In terms of conditions:
There is an overlap if: `start1 < end2` and `start2 < end1`.

If none of the existing events overlap with the new event, we can safely book it.

## Steps:
1. Initialize the calendar with an empty list to store events.
2. When booking a new event, check if it overlaps with any of the existing ones.
3. If no overlap, add the event and return `True`. Otherwise, return `False`.

## Explanation of the code:

- The `__init__` method initializes an empty list `self.events` to keep track of the booked intervals.
- The `book` method:
  - Loops over all the previously booked events to check if the new event overlaps with any of them.
  - If it finds an overlap (i.e., `end > s` and `start < e`), it returns `False`.
  - If no overlap is found, the event is added to the `self.events` list and the method returns `True`.

## Example:

The operations will happen as follows:

1. `myCalendar.book(10, 20)`:
   - There are no previous events, so the event is booked successfully and `True` is returned.
   
2. `myCalendar.book(15, 25)`:
   - The new event `[15, 25)` overlaps with the existing event `[10, 20)`, so booking is not allowed, and `False` is returned.

3. `myCalendar.book(20, 30)`:
   - The new event `[20, 30)` does not overlap with any existing events, so it is booked successfully and `True` is returned.

## Time Complexity:
- In the worst case, each call to `book` requires checking all previously booked events. If there are `n` events, each `book` call will take O(n) time.
- Since there can be at most 1000 events (based on the constraints), the complexity for each booking is O(n), where `n` is the number of already booked events.



![image](./images/0.jpeg)