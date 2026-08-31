# ✅ Short & Simple Solution w/ Explanation | Clean Min-Heap & Set Solutions

**Author:** archit91
**Votes:** 19
**Link:** [https://leetcode.com/problems/seat-reservation-manager/solutions/1185841/](https://leetcode.com/problems/seat-reservation-manager/solutions/1185841/)

---

\u2714\uFE0F ***Solution - I (Min-Heap)***

1. At first, we push all the available seats into a min-heap.
2. Every time a seat needs to be **reserved**, we take the top of min-heap and reserve it (pop it off from heap).
3. Every time a *`seatNumber`* is **unreserved**, we just push it back into the heap.

```
class SeatManager {
public:
    priority_queue<int, vector<int>, greater<int> > pq;
    SeatManager(int n) {
        for(int i = 1; i <= n; i++) pq.push(i);
    }
    
    int reserve() {
        int top = pq.top(); pq.pop();
        return top;
    }
    
    void unreserve(int seatNumber) {
        pq.push(seatNumber);
    }
};
```

---

\u2714\uFE0F ***Solution - II (Set)***

The same idea as above, just using set instead of min-heap (`priority_queue`) -

```
class SeatManager {
public:
    set<int> s;
    SeatManager(int n) {
        for(int i = 1; i <= n; i++) s.insert(end(s), i);  // hint to reduce TC to O(1)
    }
	
    int reserve() {
        int top = *begin(s);
        s.erase(begin(s));
        return top;
    }
	
    void unreserve(int seatNumber) {
        s.insert(seatNumber);
    }
};
```

---

***Time Complexity :*** 
1. *`SeatManager`* **:** ***`O(N)`*** (in case of min-heap, it is `O(NlogN)`. Please let me know if it's possible to reduce it to O(N) ).
2. *`reserve`* **:** ***`O(1)`***
3. *`unreserve`* **:** ***`O(logN)`***

***Space Complexity :*** ***`O(N)`***

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---