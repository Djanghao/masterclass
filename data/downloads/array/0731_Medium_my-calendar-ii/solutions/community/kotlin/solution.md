# Kotlin | 1 TreeMap Solution

**Author:** Rayson
**Votes:** 3
**Link:** [https://leetcode.com/problems/my-calendar-ii/solutions/1897557/](https://leetcode.com/problems/my-calendar-ii/solutions/1897557/)

---

Idea:

1. Create a sorted map (TreeMap) with timestamp as key, step as value.
2. Loop the map and keep the count with current situation

Map Example 1:
```
book(start = 5, end = 10)
-------------------------
map = {
    5 ->  1
   10 -> -1
}
```
Map Example 2:
```
book(start = 5, end = 10)
book(start = 5, end = 15)
-------------------------
map = {
    5 ->  2   // This is 2 since we have 2 bookmark started at T(5)
   10 -> -1
   15 -> -1
}
```

Dry run:
```
Input:
["MyCalendarTwo","book","book","book","book","book","book"]
[[],[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]
```
```
1st Loop
book(10, 20)
map = {
}

1. put(start, getOrDefault(start, 0) + 1) 
-> put(10, getOrDefault(10, 0) + 1)
-> put(10, 0 + 1)
-> put(10, 1)
map = {
   10 -> 1
}
2. put(end, getOrDefault(end, 0) - 1)
-> put(20, getOrDefault(20, 0) + 1)
-> put(20, 0 - 1)
-> put(20, -1)
map = {
   10 ->  1,
   20 -> -1
}
3. loop the map with init count = 0
   loop (10, 1)
-> count += value
-> count = 1
   loop (20, -1)
-> count += value
-> count = 0

end, return true
```

```
2nd Loop
book(50, 60)
map = {
   10 ->  1,
   20 -> -1
}
1. put(start, getOrDefault(start, 0) + 1) 
// detail skipped
map = {
   10 ->  1,
   20 -> -1,
   50 ->  1
}
2. put(end, getOrDefault(end, 0) - 1)
// detail skipped
map = {
   10 ->  1,
   20 -> -1,
   50 ->  1,
   60 -> -1
}
3. loop the map with init count = 0
   loop (10,  1), count = 1
   loop (20, -1), count = 0
   loop (50,  1), count = 1
   loop (60, -1), count = 0

end, return true
```

```
3rd Loop
book(10, 40)
map = {
   10 ->  1,
   20 -> -1,
   50 ->  1,
   60 -> -1
}
1. put(start, getOrDefault(start, 0) + 1) 
// detail skipped
map = {
   10 ->  2,
   20 -> -1,
   50 ->  1,
   60 -> -1
}
2. put(end, getOrDefault(end, 0) - 1)
// detail skipped
map = {
   10 ->  2,
   20 -> -1,
   40 -> -1,
   50 ->  1,
   60 -> -1
}
3. loop the map with init count = 0
   loop (10,  1), count = 2
   loop (20, -1), count = 1
   loop (40, -1), count = 0
   loop (50,  1), count = 1
   loop (60, -1), count = 0

end, return true
```

```
4th Loop
book(5, 15)
map = {
   10 ->  2,
   20 -> -1,
   40 -> -1,
   50 ->  1,
   60 -> -1
}
1. put(start, getOrDefault(start, 0) + 1) 
// detail skipped
map = {
    5 ->  1,
   10 ->  2,
   20 -> -1,
   40 -> -1,
   50 ->  1,
   60 -> -1
}
2. put(end, getOrDefault(end, 0) - 1)
// detail skipped
map = {
    5 ->  1
   10 ->  2,
   20 -> -1,
   40 -> -1,
   50 ->  1,
   60 -> -1
}
3. loop the map with init count = 0
   loop ( 5,  1), count = 1
   loop (10,  1), count = 3 //  count > 2, rollback the map, return false

map = {
   10 ->  2,
   20 -> -1,
   40 -> -1,
   50 ->  1,
   60 -> -1
}
```
```
And so on
```

Source code:
```
  Time complexity: O(n lg n) // TreeMap has sorting internally
Memory complexity: O(n)

class MyCalendarTwo() {
    
    // key: time stamp
    // value: booking, +ve: increase count by N, -ve: decrease count by N
    private val booking = TreeMap<Int, Int>()
    
    fun book(start: Int, end: Int): Boolean {
        booking[start] = booking.getOrDefault(start, 0) + 1
        booking[end] = booking.getOrDefault(end, 0) - 1
        var count = 0
        booking.forEach {(key, value) ->
            count += value
            if (count == 3) {
                booking[start] = booking.getOrDefault(start, 0) - 1
                booking[end] = booking.getOrDefault(end, 0) + 1
                return false
            }
        }
        return true
    }
}
```

