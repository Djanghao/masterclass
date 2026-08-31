# dart solution

**Author:** lavfreits
**Votes:** 0
**Link:** [https://leetcode.com/problems/my-calendar-ii/solutions/5840128/](https://leetcode.com/problems/my-calendar-ii/solutions/5840128/)

---


# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$ 

# Code
```dart []
class Event{
    final int end;
    final int start;

    Event(this.start, this.end);
}


class MyCalendarTwo {
//faco uma lista dos overlapping
    // faco uma lista dos bookeds
    List<Event> overlappingBookings;
    List<Event> bookings;

  MyCalendarTwo()
      : overlappingBookings = [],
        bookings = [];
    

  bool book(int start, int end) {
    
    for ( Event event in overlappingBookings) {
        if (isOverlap(event, start, end)){
            return false;
        }
    }

    for (Event event in bookings) {
        if (isOverlap(event, start, end)){
            overlappingBookings.add(getOverlapEvent(event, start, end));
        }
    }

    bookings.add(Event(start, end));
    return true;
}

// the event can be booked:
// is there a triple overlapping?
// then no

// is there a overlapping so add the interval to the overlapping list
// interval = the max value between the starts and the min value between the ends


bool isOverlap(Event event, int start, int end){
   // Se o intervalo com o maior valor de in\xEDcio ainda come\xE7ar antes do menor valor de t\xE9rmino, os intervalos est\xE3o se sobrepondo. Caso contr\xE1rio, eles n\xE3o se tocam
       //O evento come\xE7a antes de o outro intervalo terminar e o outro intervalo come\xE7a antes de o evento terminar?

    return (event.start < end) && (start < event.end);

}

Event getOverlapEvent(Event event, int start, int end) {
   return Event(
      event.start > start ? event.start : start,
      event.end < end ? event.end : end,
    );
}
}

```