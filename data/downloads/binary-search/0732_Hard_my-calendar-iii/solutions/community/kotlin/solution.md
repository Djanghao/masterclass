# [Kotlin] Easy Solution Using Tree Map

**Author:** bfdsh
**Votes:** 1
**Link:** [https://leetcode.com/problems/my-calendar-iii/solutions/2671588/](https://leetcode.com/problems/my-calendar-iii/solutions/2671588/)

---

For the person who wants to know Kotlin version of the answer based on
https://leetcode.com/problems/my-calendar-iii/discuss/109556/JavaC%2B%2B-Clean-Code



```
class MyCalendarThree() {

    val map = TreeMap<Int, Int>()
    
    fun book(start: Int, end: Int): Int {
        
        map.put(start, map.getOrDefault(start, 0) + 1)
        map.put(end, map.getOrDefault(end, 0) - 1)
        
        var events = 0
        var answer = 0
        
        map.forEach { entry ->
            events += entry.value
            answer = Math.max(answer, events)
        }
        
        return answer
    }

}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
 ```