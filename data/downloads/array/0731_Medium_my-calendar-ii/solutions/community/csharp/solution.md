# understand once you will solve on your own, no array used, less code, with added video.

**Author:** vinod_aka_veenu
**Votes:** 47
**Link:** [https://leetcode.com/problems/my-calendar-ii/solutions/5838400/](https://leetcode.com/problems/my-calendar-ii/solutions/5838400/)

---

# youtube solution https://youtu.be/IUkVpz8L0NA
# Intuition & Approach
**what is overlapped event** ?
**event1 => [10, 20],  event2 = [15, 17]** {start and end time tuple}
they are overlapping if 

max(start1, start2) < min(end1, end2) ==> max(10, 15) = > 15

max(10, 15) = > 15, min(20, 17) = 17 ==> 15<17 ==> **so its overlapped**

**ok next?**
in our case an event can be booked if its **having only upto  double overlap**
lets say we have already booked event = [10 20]

so a new event = > [15, 25] can be booked event though they are overlapping.

so our successful bookings = {[10, 20], [15, 25]}

lets say **new event** = [8, 18] comes then what will happen?

here is an overlap ==> with already overlapped event ==> **triple overlap is not allowed** ==> so it would a false.

**then how would you handle this in code?**
not a problem bro, we can have two list one with only overlapped part of event and one with all bookings.

**explain with aboive example please??**
sure, we will keep like this 

overlapBoolings = only overlapped start and end would be kept.

like in above case [10, 20], [15, 25] ==> [15, 20]** (max of start, min of end)**

so our both list would look like this 

overlapBooking = **{[15, 20]}**
bookings = **{[10, 20], [15, 25]}**

now suppose our new even comes **new event** = [8, 18], we will first check is there any over lap with overLapBooking events.

lets check ==> [15, 20] and [8, 18] 

use this **max(start1, start2) < min(end1, end2)**
         => max(15, 8) < min(20, 18) = > 15<18 ==> true condition
         => so we can not book it , return **false** bro
**so what if there was no overlap with any event in this list**

that means we are going good, before adding this event we would check in bookingList also that is there some new overlap making , so that we can add it to **overLapList**

**what , please explain with example**

sure, intially we have 
overlapBooking = **{[15, 20]}**
bookings = **{[10, 20], [15, 25]}**

lets say we got **new event** = [8, 14], we checked in overlapList there was not overlap ==> 

now we will check in bookingList is there some overlap

so there is an overlap with [10, 20] for [8, 14]
==> overlapped portation ==> **max(10, 8), min(14, 20)** => [10, 14]

we will add this [10, 14] to overlapBookings..

next we will add the event [10, 14] to booking list , now they will look like below

overlapBooking = **{[10, 14],[15, 20]}**
bookings = **{[10, 20], [8, 14] [15, 25]}**
return true.

**would add youtube video soon**



# Code
```java []
class Event
{
  int start;
  int end;
  public Event(int start, int end)
  {
    this.start = start;
    this.end = end;
  }  
}

class MyCalendarTwo {
    List<Event> overLapBookings;
    List<Event> bookings;

    public MyCalendarTwo() {
        overLapBookings = new ArrayList<>();
        bookings = new ArrayList<>();
    }
    
    public boolean book(int start, int end) {
        
    for(Event e : overLapBookings)
    {
      if(isOverlap(e, start, end))
      return false;  
    } 

    for(Event e : bookings)
    {
      if(isOverlap(e, start, end))
      {
        overLapBookings.add(getOverlapEvent(e, start, end));
      }    
    }  
       bookings.add(new Event(start, end));

       return true; 
    }

    public boolean isOverlap(Event e, int start, int end)
    {
      return Math.max(e.start, start)<Math.min(e.end, end); 
    }

    public Event getOverlapEvent(Event e, int start, int end)
    {
      return new Event(Math.max(e.start, start), Math.min(e.end, end));  
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * MyCalendarTwo obj = new MyCalendarTwo();
 * boolean param_1 = obj.book(start,end);
 */
```