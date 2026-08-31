# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 7
**Link:** [https://leetcode.com/problems/my-calendar-iii/solutions/2670506/](https://leetcode.com/problems/my-calendar-iii/solutions/2670506/)

---


```java []
class MyCalendarThree {
    TreeMap<Integer, Integer> tm;
    public MyCalendarThree() {
        tm = new TreeMap<>();
    }
    public int book(int start, int end) {
        tm.put(start, tm.getOrDefault(start, 0)+1);
        tm.put(end, tm.getOrDefault(end, 0)-1);
        int max = 0, count = 0;
        for(int val: tm.values()){
            max = Math.max(max, count += val);
        }
        return max;
    }
}
```

```Javascript []
var MyCalendarThree = function() {
    this.tm = {}
};

MyCalendarThree.prototype.book = function(start, end) {
    this.tm[start] = (this.tm[start] || 0) + 1
    this.tm[end] = (this.tm[end] || 0) - 1
    let max = count = 0
    for(let val in this.tm){
        max = Math.max(max, count += this.tm[val])
    }
    return max
};
```

```Python []
class MyCalendarThree(object):
    def __init__(self):
        self.tm = {}
    def book(self, start, end):
        self.tm[start] = self.tm.get(start, 0) + 1
        self.tm[end] = self.tm.get(end, 0) - 1
        count = mx = 0
        for val in sorted(self.tm):
            count += self.tm[val]
            mx = max(mx, count)
        return mx
```