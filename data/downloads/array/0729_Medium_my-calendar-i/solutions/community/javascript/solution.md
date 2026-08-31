# JS, Python, Java, C++ | Easy Sorted Tree & Linked List Solutions w/ Explanation

**Author:** sgallivan
**Votes:** 30
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/1262570/](https://leetcode.com/problems/my-calendar-i/solutions/1262570/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Since the bookings are not allowed to overlap, we'll naturally need to keep the data sorted in some way so that we can find the proper insertion position of each new booking, and to check for the validity of the booking.

The naive solution here would be to use an array and resort it each time, at a **time complexity** of **O(N * log N)**. Alternately, we could use a **binary search** to find the right position, then insert the booking at that position, but that would take **O(log N) time** for the binary search and another **O(N) time** for the insertion.

_(**Important Note**: Apparently, each of the four languages_ except _Javascript has a sorted data structure based on a **red-black tree** structure which allows for insertion in only **O(log N) time**, rather than the **O(N) time** it would take for a standard array insertion. This, combined with the **O(log N) time** for the binary search makes this approach faster than a linked list approach. See the updated section below for the explanation.)_

**Python, Java, & C++:**
Python, Java, and C++ allow for a sorted data structure with only a **O(log N)** insertion. In this approach, we first use a **binary search** function to find the proper insertion position, then compare the **start** and **end** of the new booking to the existing **calendar** entries to check for the validity of the new booking.

To avoid having to compare more than one **calender** entry for validation (as finding another entry might take another **O(log N) time**), we can store the entries in reverse order in **calendar** (**{end, start}**), then find the **upper bound** of the booking using the proper order (**{start, end}**).

Let's consider a booking gap that looks like this:
```js
  |---------|               |---------|
```
If we're comparing **start** vs **start** in our **binary search**, we could end up with the following scenarios:
```js
  S---------|               S---------|
   <----------------------->                 // binary search range
       S---------|                           // possibility #1
               S---------|                   // possibility #2
                       S---------|           // possibility #3
```
This means that we'll have to access _both_ surrounding bookings to check if the new booking clears both the previous booking's **end** and the next booking's **start**. If, instead, we store the bookings with **start** and **end** flipped, the binary search will automatically clear the previous booking's **end**, which means those three scenarios shift to this:
```js
  |---------E               |---------E
             <----------------------->       // binary search range
               S---------|                   // possibility #1
                       S---------|           // possibility #2
                                 S---------| // possibility #3
```
This means that we only have to access the booking returned by the binary search, saving us the **O(log N) time** for the second lookup, as well as only requiring a single conditional check (**new.end <= next.start**), rather than two.

If the booking is invalid, we can **return false**, otherwise we can insert the new booking into **calendar** (in reverse order) and then **return true**. We can also insert a tail booking upon the **calendar** initialization to make the comparisons easier.

**Javascript:**
For Javascript, we can use a **linked list** approach, as searching the linked list will only be **O(N) time** and the insertion will only be **O(1) time**. We should start by defining our empty bookings list (**head**) with a head node and a tail node as bookends for the booking data.

For the **book** function, we will then iterate through the linked list until we find the booking that begins after our attempted booking start (**curr**). We should also remember to keep track of the **last** node, as well, so that we can stitch the new booking into the list.

Once we've located the proper node, we should check to see if the new booking will overlap, and **return false** if it does. Otherwise, we should create our new node, and insert it between **last** and **curr**, then **return true**.

 - _**Time Complexity:**_
   - _single booking w/ sorted tree: **O(log N)** where **N** is the length of the calendar_
   - _single booking w/ linked list: **O(N)**_
   - _complete series w/ sorted tree: **O(N * log N)**_
   - _complete series w/ linked list: **O(N^2)**_
 - _**Space Complexity: O(N)** for the calendar_

---

#### ***Javascript Code:***

***w/ Linked List:***
```javascript
class MyCalendar {
    constructor() {
        this.calendar = {start: -1, end: -1, next: {start: Infinity, end: Infinity}}
    }
    book = function(start, end) {
        let curr = this.calendar, last = curr
        while (start >= curr.end)
            last = curr, curr = curr.next
        if (curr.start < end)
            return false
        last.next = {start: start, end: end, next: curr}
        return true
    };
}
```

---

#### ***Python Code:***

***w/ SortedDict:***
```python
from sortedcontainers import SortedDict
class MyCalendar:
    def __init__(self):
        self.calendar = SortedDict({float('inf'):float('inf')})        
    def book(self, start: int, end: int) -> bool:
        ix = self.calendar.bisect_right(start)
        k,v = self.calendar.peekitem(ix)
        res = end <= v
        if res: self.calendar[end] = start
        return res
```

***w/ Linked List:***
```python
class MyCalendar:
    def __init__(self):
        self.calendar = {'start': -1, 'end': -1, 'next': {'start': float('inf'), 'end': float('inf')}}
    def book(self, start: int, end: int) -> bool:
        curr = self.calendar
        while start >= curr['end']:
            last, curr = curr, curr['next']
        if curr['start'] < end:
            return False
        last['next'] = {'start': start, 'end': end, 'next': curr}
        return True
```

---

#### ***Java Code:***

***w/ TreeMap:***
```java
class MyCalendar {
    TreeMap<Integer,Integer> calendar = new TreeMap<>();
    public MyCalendar() {
        calendar.put(Integer.MAX_VALUE, Integer.MAX_VALUE);
    }
    public boolean book(int start, int end) {
        Map.Entry<Integer,Integer> pair = calendar.higherEntry(start);
        boolean res = end <= pair.getValue();
        if (res) calendar.put(end, start);
        return res;
    }
}
```

***w/ Linked List:***
```java
class ListNode {
    public int start, end;
    public ListNode next;
    public ListNode(int s, int e, ListNode n) {
        start = s;
        end = e;
        next = n;
    }
}

class MyCalendar {
    ListNode calendar;
    public MyCalendar() {
        ListNode tail = new ListNode(Integer.MAX_VALUE, Integer.MAX_VALUE, null);
        calendar = new ListNode(-1, -1, tail);
    }
    
    public boolean book(int start, int end) {
        ListNode curr = calendar, last = curr;
        while (start >= curr.end) {
            last = curr;
            curr = curr.next;
        }
        if (curr.start < end)
            return false;
        last.next = new ListNode(start, end, curr);
        return true;
    }
}
```

---

#### ***C++ Code:***

***w/ Set:***
```c++
class MyCalendar {
public:
    set<pair<int, int>> calendar = {{INT_MAX, INT_MAX}};
    bool book(int start, int end) {
        auto pair = calendar.upper_bound({start, end});
        bool res = end <= pair->second;
        if (res) calendar.insert({end, start});
        return res;
    }
};
```

***w/ Linked List:***
```c++
struct LNode {
public:
    int start, end;
    LNode* next;
    
    LNode(int s, int e, LNode* n) {
        start = s;
        end = e;
        next = n;
    }
};

class MyCalendar {
public:
    MyCalendar() {
        LNode* tail = new LNode(INT_MAX, INT_MAX, nullptr);
        calendar = new LNode(-1, -1, tail);
    }
    
    bool book(int start, int end) {
        LNode* curr = calendar, *last = curr;
        while (start >= curr->end)
            last = curr, curr = curr->next;
        if (curr->start < end)
            return false;
        last->next = new LNode(start, end, curr);
        return true;
    }
private:
    LNode* calendar;
};
```