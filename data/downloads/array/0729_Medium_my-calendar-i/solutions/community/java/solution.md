# C++, Java | Fast HashMap Solutions with commnent

**Author:** nitin23rathod
**Votes:** 73
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/2371717/](https://leetcode.com/problems/my-calendar-i/solutions/2371717/)

---

```
If you like my approach please upvote
```
**C++ :**

```
class MyCalendar {
    map<int, int> mp;   // <endTime, statIme>
public:  
    bool book(int start, int end) {
        /*lookfor first endTIme that is larger than start time request. First condition checkes if the incoming request should be added to the list of booked slots.*/
        auto itr = mp.upper_bound(start);
        if(itr == mp.end() || end<= itr->second) {
            mp[end]=start;
            return true;
        } 
        else  return false;
    }
};
```

**Java :-**

**Approach:**
* TreeMap is used because it sorts its keys in natural order (in Integer that order would be ascending)
* TreeMap is also used because of the higherEntry method. HigherEntry returns the next bigger key (compared to the value given, in this case, "start") from the map.
* HigherEntry() example: TreeMap: {1=One, 2=Two, 3=Three, 4=Four, 5=Five} --> The higherEntry value for 3 is 4=Four
* Important note, the map key is the end time and the value is the start time.

```
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

**If you like my approach please upvote**