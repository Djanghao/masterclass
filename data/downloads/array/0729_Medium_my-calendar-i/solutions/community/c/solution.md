# ✅ Easy Solutions w/ Explanation & Diagram | Brute Force & Binary Search Approach

**Author:** archit91
**Votes:** 156
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/1262664/](https://leetcode.com/problems/my-calendar-i/solutions/1262664/)

---

\u2714\uFE0F ***Solution - I (Brute-Force)***

The image below will help in visualizing the different possibilities, given two ranges:

<p align=center><img src=https://i.imgur.com/4INcpaw.jpg width=1200 /></p>



There are many possible combinations in which a **range `[s1,e1]` can intersect with `[s2, e2]`**. Instead of thinking about all those ways, let's just think about the cases where the **ranges won't intersect**. There are only two possible cases -

```
[s1, e1] : Range of new slot to be booked
[s2, e2] : Range of previously booked slots

1. s2 >= e1
   
           s1           e1                              OR                  s1          e1
           |------------|                                                   |------------|
                        |------------|                                                         |------------|
			            s2           e2                                                       s2           e2
    
	
	
2. s1 >= e2	   

                       s1           e1                  OR                                     s1          e1
                        |------------|                                                        |------------|
           |------------|                                                   |------------|
          s2           e2                                                  s2           e2

Note: I have considered the first depiction in case-1 and case-2 as intersections because we are given right-open interval range.
So we consider two ranges as non-intersecting even if one has the same start as end of the other.

No intersection will occur if either of the above cases is satisfied	  
```

So, we will just check the above conditions against all the previous bookings and if any of them don't satisfy either of these condition, then an intersection exists and we return false. Otherwise, just insert the new booking slot and return true

**C++**
```
class MyCalendar {
    unordered_map<int, int>bookings;
public:    
    bool book(int s1, int e1) {
        for(auto& [s2, e2] : bookings) 
            if( !(s1 >= e2 || s2 >= e1) )   // if neither of above condition is satisfied, there exists an intersection
			    return false; 
        bookings[s1] = e1;                 // no intersection found, so insert the new slot and return true
        return true;
    }
};
```

***Time Complexity :*** **`O(N)`**, where *`N`* are the number of already booked slots. Each call to `book()` will iterate through all the booked slots in the worst case and then insert the new slot bookings. 
***Space Complexity :*** **`O(N)`**, for maintaining all the booked slots.

----

\u2714\uFE0F ***Solution - II (Maintain sorted bookings)***

Instead of iterating through all the booked slots, we can just maintain all the booked slots in sorted order of their start. Then, we just need to check two cases:

>Again, just for reference **`[s1, e1]`** is range of new slot to be booked and, **`[s2, e2]`** is the range of previously booked slots
1. ***`s2 >= e1`*** (Find already booked slot having start time just greater than or equal to new slot's start time)  :
	
	&emsp;&emsp;In this case, **to ensure that these two slots don't intersect, we just need to verify that `s2 >= e1`**. This means the nearest booked slot is starting only after the end of the new slot.
	
2. 	***`e2 <= s1`*** (Find already booked slot having start time just smaller than new slot's start time) :

     &emsp;&emsp;In this case, **to ensure that these two slots don't intersect, we just need to verify that `e2 <= s1`**. This means the nearest booked slot that starts before that new slot, also ends before the start of the new slot.
	
These two cases combined ensure that there's no intersection between the new slot to be added and any of the previously booked slots.	

**C++**
```
class MyCalendar {
    set<pair<int, int>>bookings;
public:    
    bool book(int s1, int e1) {
        auto slot = bookings.lower_bound({s1, e1});
        if( slot != end(bookings)   && !(slot -> first >= e1) ||      // a booked slot with nearest starting after s1 should also have its end after e1  => similar to case-1 
            slot != begin(bookings) && !(prev(slot) -> second <= s1)) // a booked slot with nearest starting before s1 should also end before s1  => similar to case-2
			    return false;         // if neither of above conditions satisfy, there exists a intersection
        bookings.insert({s1, e1});
        return true;
    }
};
```

***Time Complexity :*** **`O(logN)`**, `O(log(N))` time complexity is required for *`insert`* and *`lowerbound`* operation of the set.
***Space Complexity :*** **`O(N)`**, for maintaining all the booked slots.


---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---
