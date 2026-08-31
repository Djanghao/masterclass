# [Python and C++] Multiple approaches Binary search, Dequeue

**Author:** AnupBS
**Votes:** 21
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/873418/](https://leetcode.com/problems/number-of-recent-calls/solutions/873418/)

---

Python 
```
# USING DEQUE
class RecentCounter:

    def __init__(self):
        self.queue = deque()

    def ping(self, t: int) -> int:
        queue = self.queue
        start = t - 3000
        queue.append(t)
        while(queue and queue[0] < start):
            queue.popleft()
        return len(queue)
```

C++
```
//USING DEQUE
class RecentCounter {
public:
    deque<int> dq;
    RecentCounter() {
        return ;
    }
    
    int ping(int t) {
        dq.push_back(t);
        while(!dq.empty() && dq.front()<t-3000)
            dq.pop_front();
        return dq.size();
    }
};
```


BINARY SEARCH APPROACH IN PYTHON
```
# USING BINARY SEARCH
class RecentCounter:
    def __init__(self):
        self.arr = []

    def ping(self, t: int) -> int:
        self.arr.append(t)
        start = t - 3000
        if(t<=0):
            return len(self.arr)
      # find t which is >= start in arr
        def binSearch(start,arr):
            i = 0
            j = len(arr)
            while(i<=j):
                mid = (i+j)//2
                if(arr[mid] > start):
                    j = mid - 1
                elif(arr[mid] < start):
                    i = mid + 1
                else:
                    return mid
            return i
        
        indx = binSearch(start,self.arr)
        return len(self.arr) - indx
```