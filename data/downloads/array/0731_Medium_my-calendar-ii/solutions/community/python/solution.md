# [Python] 3 approaches with detailed explanation

**Author:** Hieroglyphs
**Votes:** 26
**Link:** [https://leetcode.com/problems/my-calendar-ii/solutions/961691/](https://leetcode.com/problems/my-calendar-ii/solutions/961691/)

---

# Approach 1
- **Runtime:** O(N^2)

Concept:
- Add the new proposed booking to the global lst of bookings
- Distill the lst of bookings into a list of tuples of timestamps and their corresponding activites (booking added => +1) (bookinf ended => -1) ex: (start, +1), (end, -1)
- sort the timestamp list by `startTime` and break ties based on `endTime`
- Iterate over sorted list -> accumalte overlaps. If overlaps > 2 -> not allowed -> delete the interval/booking that cause the violation

```
def __init__(self):
        self.lst = []
        
    '''
    O(nlogN) sorting
    outer loop * remove => O(N) * O(N) => O(N^2)
    '''
    def book(self, start: int, end: int) -> bool:
        self.lst.append((start, +1)) # one booking added at startingtime = start
        self.lst.append((end, -1)) # booking ends at timestamp = end
        
        self.lst.sort()
        overlaps = 0
        for book in self.lst:
            overlaps += book[1]
            if overlaps > 2:
                self.lst.remove((start, +1)) # remove the booking that is causing problems (triple overlap)
                self.lst.remove((end, -1))
                return False
        return True
```

## Enhanced version:
- **Runtime:** O(NlogN)

```
def __init__(self):
        self.d = {}
        self.id = 0
        
    '''
    O(nlogN) sorting
    outer loop * remove => O(N) * O(N) => O(N^2)
    '''
    
    def checkOverlaps(self, id):
        bookings = list(self.d.values())
        lst = []
        for start, end in bookings:
            lst.append((start, +1)) # one booking added at startingtime = start
            lst.append((end, -1)) # booking ends at timestamp = end
            
        lst.sort()
        overlaps = 0
        for book in lst:
            overlaps += book[1]
            if overlaps > 2:
                del self.d[id] # remove the booking that is causing problems (triple overlap)
                return False
        return True
    
    
    def book(self, start: int, end: int) -> bool:
        self.id += 1
        self.d[self.id] = (start,end)
        return self.checkOverlaps(self.id)
```

# Approach 2 : Heap
- **Runtime:** O(N^2)

Concept:
- Everytime a new booking is attempted (aka the function `book(start, end)` is invoked, we add the proposed new booking to a list
- Every time we do this, we pass our list (which contains all the bookings so far + the new booking) to a helper that checks if the new proposed booking is allowed.
- From the prompt we know bookings are allowed as long as they do not cause a triple booking incident. 
-A triple booking is nothing but an overlap of 3 intervals/bookings. So the main purpose of our helper function `checkOverlaps(bookings)`
is to find how many overlaps do we already have in our calneder and whether the new booking would cause a violation.
- We also know from the prompt that if a booking causes a triple overlap -> we should not add it to our calender.
- To detect overlaps we resort to our good friend the` min heap (or priority queue)`  where the key for the heap is the `endTime` of the interval/booking. This allows me to always have access to the interval/booking with the minumum endTime (aka the one that is ending soonest). Of-course this technique only works when I process "ordered/sorted" intervals.

```
class MyCalendarTwo:
    
    def __init__(self):
        self.bookings = []
     
	# ---*--- Helper ---*---
    def checkOverlaps(self, bookings, newBooking): 
        # this function is the same one we used for problems such as : meeting rooms II, car pooling
        # the purpose is to check if new addition to calneder is permitted or not
        
        bookings.sort(key=lambda x: x[0])
        h = []
        from heapq import heappush, heappop
        overlaps = 1
        for start, end in bookings:
            if not h:
                heappush(h, (end, (start, end)))
            else:
                prevEnd, (prevStart, prevEnd) = h[0]
                if start < prevEnd:
                    # overlap detected
                    if overlaps == 2:
                        # cannot add -> already have a double
                        self.bookings.remove(newBooking) # --- NOTE [1] 
                        return False
                    overlaps += 1
                    heappush(h, (end, (start, end)))
                    
                else:
                    heappop(h) 
                    # to get rid of the earlier intervals - think of this as moving window - 
                    # otherwise earlier intervals will remain at the top pf the heap bcuz they will probably end sooner than later intervals
                    heappush(h, (end, (start, end)))
        return True
         
		# NOTE [1]
        # We know we have to remove the booking that distrubs our calender. Instead of using list.remove(undesribelItem)
		# Instead we can use a dictinary/hashmap so that the removal is O(1) instead of O(N)
		# See Approach 3 below
		
	# ---*--- main ---*---
    def book(self, start: int, end: int) -> bool:
        self.bookings.append((start, end)) # global to keep track of all previous bookings have been inserted to calneder
        return self.checkOverlaps(self.bookings, (start,end)) 
```

# Enhanced version
concept:
- Exaclty the same as approch 2 except for an runtime optimization due to using dictionary instead of a list to store the bookings
- **Runtime:** O(NlogN)

```
class MyCalendarTwo:

	def __init__(self):
        self.d = {}
        self.count = 0
        
    '''
    O(nlogN) sorting
    outer loop * remove => O(N) * O(N) => O(N^2)
    '''
    
    def checkOverlaps(self, newKey):
        bookings = list(self.d.values())
        lst = []
        for start, end in bookings:
            lst.append((start, +1)) # one booking added at startingtime = start
            lst.append((end, -1)) # booking ends at timestamp = end
            
        lst.sort()
        overlaps = 0
        for book in lst:
            overlaps += book[1]
            if overlaps > 2:
                del self.d[newKey] # remove the booking that is causing problems (triple overlap)
                return False
        return True
    
    
    def book(self, start: int, end: int) -> bool:
        self.count += 1
        self.d[self.count] = (start,end)
        return self.checkOverlaps(self.count)
        
```

# Approach 3
- By @awice
- **Runtime:** O(N)

Concept:
- We are interested in detetcting triple booking. We use two lists:
	- calneder: representing all the permissible bookings that we have encountered so fat
	- overlaps: stores intervals that had an overlap with a booking that exists in the calneder

- For each new booking:
	- iteratve over all the exisiting bookings in bookings list 
		- -> if overlap is detected -> new booking is inserted in overlap list
		- -> if no overlap -> new bookingis appended to the bookings list
	- Iterate again but this time over the overlaps list
		- -> if an overlap is detected between new booking and something that already existed in overlaps list (overlap with a double booking) -> then we have a triple booking

**NOTE:**
It's importnat that when appending to the overlap list -> we should only append the intersection of the two overlapping intervals - and not the whole interval. This is important because it ensures that the triple booking actually happened. See example below for calrification:
```	
	[1]:    10 ------------ 20
	[2]:    10 ------------------------------- 40
	[3]:                             25 ---------------------- 55
	
```

As we attempt to insert booking [2] (10,40) we notice that it overlaps with a booking in `calender list`. Next we append only the overlapping part that is common between the two to overlaps list so that when we attempt to insert the next interval (25,55), we compare the latter against (10,20) (aka the intersection) which guarantees that the overlap is indeed between all three intervals. See NOTE [1] in the code below to understand how this is accomplished in code.

	- calneder = [(10,20), (10,40), (25,55)]
	- overlaps = [(10,20)]


```
class MyCalendarTwo:
    
    def __init__(self):
        self.overlaps = []
        self.calendar = []

    def book(self, start, end):
        for i, j in self.overlaps:
            if start < j and end > i:
                return False
        for i, j in self.calendar:
            if start < j and end > i:
                self.overlaps.append((max(start, i), min(end, j)))  # --- NOTE [1]
        self.calendar.append((start, end))
        return True
```