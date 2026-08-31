# c++ with map, very simple

**Author:** l355c0d3
**Votes:** 33
**Link:** [https://leetcode.com/problems/my-calendar-ii/solutions/483337/](https://leetcode.com/problems/my-calendar-ii/solutions/483337/)

---

inspired by https://leetcode.com/problems/meeting-rooms-ii/discuss/203658/HashMapTreeMap-resolves-Scheduling-Problem

this is also the same as my solution to [My Calendar I ](https://leetcode.com/problems/my-calendar-i/discuss/483326/c-with-map), just added parameter n in canAdd() function

```
class MyCalendarTwo {
private:
    map<int, int> m;
public:
    
    //Parameter n sets the max number of bookings allowed to overlap
    //if n is set to 1 if will check for double booking
    //if n is set to 2 if will check for triple booking etc
    bool canAdd(int n){
        int count = 0;
        for (auto entry: m){
            count+=entry.second;
            if(count>n) return false;
        }
        return true;
    }
    
    bool book(int start, int end) {
        m[start]++;
        m[end]--;
        if(canAdd(2)) return true;//Check for triple booking (n=2)
        else{//restore the original counts since we are not booking this room
            m[start]--;
            m[end]++;
            return false;
        }
    }
};
