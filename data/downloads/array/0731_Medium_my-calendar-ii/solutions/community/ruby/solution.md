# 99% Beats Code | ✅ Working - 27.09.2024 | Python Explained

**Author:** Piotr_Maminski
**Votes:** 4
**Link:** [https://leetcode.com/problems/my-calendar-ii/solutions/5838118/](https://leetcode.com/problems/my-calendar-ii/solutions/5838118/)

---

```python3 []
class MyCalendarTwo:

    def __init__(self):
        self.single_booked = []
        self.double_booked = []
        
    def intersection(self, intervals, s, e):

        l = bisect.bisect_left(intervals, s)
        r = bisect.bisect_right(intervals, e)
        
        intersection = []
        
        if l % 2:
            if intervals[l] != s:
                intersection.append(s)
            else:
                l = l + 1

        intersection += intervals[l:r]

        if r % 2:
            if intervals[r-1] != e:
                intersection.append(e)
            else:
                intersection.pop()

        return intersection
        
    def add(self, intervals, s, e):

        l = bisect.bisect_left(intervals, s)
        r = bisect.bisect_right(intervals, e)
        
        new = []
        if not l % 2:
            new.append(s)
            
        if not r % 2:
            new.append(e)

        intervals[l:r] = new

    def book(self, start: int, end: int) -> bool:

        if self.intersection(self.double_booked, start, end):
            return False
        
        intersection = self.intersection(self.single_booked, start, end)

        if intersection:
            for i in range(len(intersection) // 2):
                i1 = intersection[2*i]
                i2 = intersection[2*i+1]
                self.add(self.double_booked, i1, i2)

        self.add(self.single_booked, start, end)

        return True
```
```cpp []
#include <vector>
#include <algorithm>

class MyCalendarTwo {
public:
    MyCalendarTwo() {}

    bool book(int start, int end) {
        if (!intersection(double_booked, start, end).empty()) {
            return false;
        }

        std::vector<int> inter = intersection(single_booked, start, end);
        if (!inter.empty()) {
            for (size_t i = 0; i < inter.size(); i += 2) {
                add(double_booked, inter[i], inter[i + 1]);
            }
        }

        add(single_booked, start, end);
        return true;
    }

private:
    std::vector<int> single_booked;
    std::vector<int> double_booked;

    std::vector<int> intersection(const std::vector<int>& intervals, int s, int e) {
        auto l = std::lower_bound(intervals.begin(), intervals.end(), s);
        auto r = std::upper_bound(intervals.begin(), intervals.end(), e);

        std::vector<int> intersection;
        if ((l - intervals.begin()) % 2) {
            if (*l != s) {
                intersection.push_back(s);
            } else {
                ++l;
            }
        }

        intersection.insert(intersection.end(), l, r);

        if ((r - intervals.begin()) % 2) {
            if (*(r - 1) != e) {
                intersection.push_back(e);
            } else {
                intersection.pop_back();
            }
        }

        return intersection;
    }

    void add(std::vector<int>& intervals, int s, int e) {
        auto l = std::lower_bound(intervals.begin(), intervals.end(), s);
        auto r = std::upper_bound(intervals.begin(), intervals.end(), e);

        std::vector<int> new_intervals;
        if ((l - intervals.begin()) % 2 == 0) {
            new_intervals.push_back(s);
        }

        if ((r - intervals.begin()) % 2 == 0) {
            new_intervals.push_back(e);
        }

        intervals.erase(l, r);
        intervals.insert(l, new_intervals.begin(), new_intervals.end());
    }
};
```
```csharp []
using System;
using System.Collections.Generic;

public class MyCalendarTwo {
    private List<int> singleBooked;
    private List<int> doubleBooked;

    public MyCalendarTwo() {
        singleBooked = new List<int>();
        doubleBooked = new List<int>();
    }

    public bool Book(int start, int end) {
        if (Intersection(doubleBooked, start, end).Count > 0) {
            return false;
        }

        List<int> inter = Intersection(singleBooked, start, end);
        if (inter.Count > 0) {
            for (int i = 0; i < inter.Count; i += 2) {
                Add(doubleBooked, inter[i], inter[i + 1]);
            }
        }

        Add(singleBooked, start, end);
        return true;
    }

    private List<int> Intersection(List<int> intervals, int s, int e) {
        int l = intervals.BinarySearch(s);
        if (l < 0) l = ~l;
        int r = intervals.BinarySearch(e);
        if (r < 0) r = ~r;

        List<int> intersection = new List<int>();
        if (l % 2 != 0) {
            if (intervals[l] != s) {
                intersection.Add(s);
            } else {
                l++;
            }
        }

        intersection.AddRange(intervals.GetRange(l, r - l));

        if (r % 2 != 0) {
            if (intervals[r - 1] != e) {
                intersection.Add(e);
            } else {
                intersection.RemoveAt(intersection.Count - 1);
            }
        }

        return intersection;
    }

    private void Add(List<int> intervals, int s, int e) {
        int l = intervals.BinarySearch(s);
        if (l < 0) l = ~l;
        int r = intervals.BinarySearch(e);
        if (r < 0) r = ~r;

        List<int> newIntervals = new List<int>();
        if (l % 2 == 0) {
            newIntervals.Add(s);
        }

        if (r % 2 == 0) {
            newIntervals.Add(e);
        }

        intervals.RemoveRange(l, r - l);
        intervals.InsertRange(l, newIntervals);
    }
}

```
```java []
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyCalendarTwo {
    private List<Integer> singleBooked;
    private List<Integer> doubleBooked;

    public MyCalendarTwo() {
        singleBooked = new ArrayList<>();
        doubleBooked = new ArrayList<>();
    }

    private List<Integer> intersection(List<Integer> intervals, int s, int e) {
        int l = Collections.binarySearch(intervals, s);
        if (l < 0) l = ~l;
        int r = Collections.binarySearch(intervals, e);
        if (r < 0) r = ~r;

        List<Integer> intersection = new ArrayList<>();
        if (l % 2 != 0) {
            if (!intervals.get(l).equals(s)) {
                intersection.add(s);
            } else {
                l++;
            }
        }

        intersection.addAll(intervals.subList(l, r));

        if (r % 2 != 0) {
            if (!intervals.get(r - 1).equals(e)) {
                intersection.add(e);
            } else {
                intersection.remove(intersection.size() - 1);
            }
        }

        return intersection;
    }

    private void add(List<Integer> intervals, int s, int e) {
        int l = Collections.binarySearch(intervals, s);
        if (l < 0) l = ~l;
        int r = Collections.binarySearch(intervals, e);
        if (r < 0) r = ~r;

        List<Integer> newIntervals = new ArrayList<>();
        if (l % 2 == 0) {
            newIntervals.add(s);
        }

        if (r % 2 == 0) {
            newIntervals.add(e);
        }

        intervals.subList(l, r).clear();
        intervals.addAll(l, newIntervals);
    }

    public boolean book(int start, int end) {
        if (!intersection(doubleBooked, start, end).isEmpty()) {
            return false;
        }

        List<Integer> inter = intersection(singleBooked, start, end);
        if (!inter.isEmpty()) {
            for (int i = 0; i < inter.size(); i += 2) {
                add(doubleBooked, inter.get(i), inter.get(i + 1));
            }
        }

        add(singleBooked, start, end);
        return true;
    }

    public static void main(String[] args) {
        MyCalendarTwo myCalendarTwo = new MyCalendarTwo();
        System.out.println(myCalendarTwo.book(10, 20)); // returns true
        System.out.println(myCalendarTwo.book(50, 60)); // returns true
        System.out.println(myCalendarTwo.book(10, 40)); // returns true
        System.out.println(myCalendarTwo.book(5, 15));  // returns false
        System.out.println(myCalendarTwo.book(5, 10));  // returns true
        System.out.println(myCalendarTwo.book(25, 55)); // returns true
    }
}
```
```javascript []
var MyCalendarTwo = function() {
    this.calendar = [];
    this.overlaps = [];
};

MyCalendarTwo.prototype.book = function(start, end) {
    for(let date of this.overlaps){
        if(start < date[1] && end > date[0]) 
            return false;
    }
    for(let date of this.calendar){
        if(start < date[1] && end > date[0]){
            this.overlaps.push([Math.max(date[0], start), Math.min(date[1], end)]);
        }
    }
    this.calendar.push([start, end]);
    return true;
};
```
```typescript []
typescript
class MyCalendarTwo {
		arr:number[]
		cnt:number[]
    constructor() {
       this.arr = [0] 
			 this.cnt = [0]
    }

    book(start: number, end: number): boolean {
			const bisect = (target: number): number => {
				let l: number = 0
				let h: number = this.arr.length-1
				while (l<=h) {
					let m = Math.floor((l+h)/2)
					if (this.arr[m] < target) {
						l = m + 1
					} else {
						h = m - 1
					}
				}

				if (l < this.arr.length && this.arr[l] == target)
					return l
				else {
					this.arr.splice(l, 0, target)
					this.cnt.splice(l, 0, this.cnt[l-1])
				}
				return l
			}
			let s = bisect(start)
			let e = bisect(end)
			let i = 0
			for (i = s; i < e; i++) {
				if (this.cnt[i] == 2)
					return false
			}
			if (i == e) {
				for (i = s; i < e; i++) {
					this.cnt[i] += 1
				}
			}
			return true
    }
}
```

```ruby []
class MyCalendarTwo
  def initialize
    @single_booked = []
    @double_booked = []
  end

  def intersection(intervals, s, e)
    l = intervals.bsearch_index { |x| x >= s } || intervals.size
    r = intervals.bsearch_index { |x| x > e } || intervals.size

    intersection = []

    if l.odd?
      if intervals[l] != s
        intersection << s
      else
        l += 1
      end
    end

    intersection.concat(intervals[l...r])

    if r.odd?
      if intervals[r - 1] != e
        intersection << e
      else
        intersection.pop
      end
    end

    intersection
  end

  def add(intervals, s, e)
    l = intervals.bsearch_index { |x| x >= s } || intervals.size
    r = intervals.bsearch_index { |x| x > e } || intervals.size

    new_intervals = []
    new_intervals << s if l.even?
    new_intervals << e if r.even?

    intervals[l...r] = new_intervals
  end

  def book(start, end_)
    return false unless intersection(@double_booked, start, end_).empty?

    intersection = intersection(@single_booked, start, end_)

    unless intersection.empty?
      (0...intersection.size / 2).each do |i|
        i1 = intersection[2 * i]
        i2 = intersection[2 * i + 1]
        add(@double_booked, i1, i2)
      end
    end

    add(@single_booked, start, end_)
    true
  end
end
```
```golang []
type MyCalendarTwo struct {
	root *segmentTreeNode
}

func Constructor() MyCalendarTwo {
	return MyCalendarTwo{
		root: nil,
	}
}

func (this *MyCalendarTwo) Book(start int, end int) bool {
	if !insertable(start, end, this.root) {
		return false
	}
	this.root = insert(start, end, this.root)
	return true
}

func insert(start, end int, current *segmentTreeNode) *segmentTreeNode {
	if start >= end {
		return current
	}
	if current == nil {
		return newSegmentTreeNode(start, end)
	}
	if start >= current.end {
		current.right = insert(start, end, current.right)
	} else if end <= current.start {
		current.left = insert(start, end, current.left)
	} else {
		current.overlap = true
		a, b := min(current.start, start), max(current.start, start)
		c, d := min(current.end, end), max(current.end, end)
		current.left = insert(a, b, current.left)
		current.right = insert(c, d, current.right)
		current.start, current.end = b, c
	}
	return current
}

func insertable(start, end int, current *segmentTreeNode) bool {
	if start >= end {
		return true
	}
	if current == nil {
		return true
	}
	if start >= current.end {
		return insertable(start, end, current.right)
	}
	if end <= current.start {
		return insertable(start, end, current.left)
	}
	if current.overlap {
		return false
	}
	if start >= current.start && end <= current.end {
		return true
	}
	return insertable(start, end, current.left) && insertable(start, end, current.right)
}

type segmentTreeNode struct {
	start   int
	end     int
	overlap bool
	left    *segmentTreeNode
	right   *segmentTreeNode
}

func newSegmentTreeNode(start, end int) *segmentTreeNode {
	return &segmentTreeNode{
		start: start,
		end:   end,
	}
}
```
---

### SIMPLE PYTHON
```python3 []
from sortedcontainers import SortedList
class MyCalendarTwo:

    def __init__(self):
        self.calendar = SortedList()
        self.booked = SortedList()

    def book(self, start: int, end: int) -> bool:
        for booking in self.booked:
            s, e = booking[:]
            if start < e and end > s:
                return False

        for booking in self.calendar:
            s, e = booking[:]
            if start < e and end > s:
                self.booked.add((max(s, start), min(e, end)))
        
        self.calendar.add((start, end))

        return True
```
### Simple Python Explained

```python3 []
from sortedcontainers import SortedList
# SortedList: This is a data structure from the sortedcontainers module that maintains elements in sorted order.
class MyCalendarTwo:
#MyCalendarTwo: This class is designed to manage calendar bookings, ensuring no triple bookings occur.

    def __init__(self):
        self.calendar = SortedList() 
        #self.calendar: A SortedList to store all bookings.
        self.booked = SortedList() 
        #self.booked: A SortedList to store intervals where double bookings occur.

    #book: This method attempts to add a new booking and returns True if successful, False otherwise.
    def book(self, start: int, end: int) -> bool:
        for booking in self.booked:
            s, e = booking[:]
            if start < e and end > s:
                return False
        #Double Booking Check: Iterates through self.calendar to check for overlaps with existing bookings. If an overlap is found, the overlapping interval is added to self.booked.
        for booking in self.calendar:
            s, e = booking[:]
            if start < e and end > s:
                self.booked.add((max(s, start), min(e, end)))
        
        self.calendar.add((start, end)) #Add Booking: Adds the new booking to self.calendar.

        return True #Return: If no triple booking is detected, the method returns True, indicating the booking was successful.

```



![image.png](./images/0.png)
![image.png](./images/1.png)
![image.png](./images/2.png)
