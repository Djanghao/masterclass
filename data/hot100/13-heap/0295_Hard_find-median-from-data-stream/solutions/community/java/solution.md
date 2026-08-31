# Java/Python two heap solution, O(log n) add, O(1) find

**Author:** dietpepsi
**Votes:** 1544
**Link:** [https://leetcode.com/problems/find-median-from-data-stream/solutions/74047/](https://leetcode.com/problems/find-median-from-data-stream/solutions/74047/)

---

The invariant of the algorithm is two heaps, small and large, each represent half of the current list. The length of smaller half is kept to be n / 2 at all time and the length of the larger half is either n / 2 or n / 2 + 1 depend on n's parity. 

This way we only need to peek the two heaps' top number to calculate median.

Any time before we add a new number, there are two scenarios, (total n numbers, k = n / 2):

    (1) length of (small, large) == (k, k)
    (2) length of (small, large) == (k, k + 1)

After adding the number, total (n + 1) numbers, they will become:

    (1) length of (small, large) == (k, k + 1)
    (2) length of (small, large) == (k + 1, k + 1)

Here we take the first scenario for example, we know the large will gain one more item and small will remain the same size, but we cannot just push the item into large. What we should do is we push the new number into small and pop the maximum item from small then push it into large (all the pop and push here are heappop and heappush). By doing this kind of operations for the two scenarios we can keep our invariant.

Therefore to add a number, we have 3 O(log n) heap operations. Luckily the heapq provided us a function "heappushpop" which saves some time by combine two into one. The document says:

<blockquote>Push item on the heap, then pop and return the smallest item from the heap. The combined action runs more efficiently than heappush() followed by a separate call to heappop().</blockquote>

Alltogether, the add operation is O(logn), The findMedian operation is O(1). 

Note that the heapq in python is a min heap, thus we need to invert the values in the smaller half to mimic a "max heap".

A further observation is that the two scenarios take turns when adding numbers, thus it is possible to combine the two into one. For this please see [stefan's post][1]


**Java**

    private PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());
    private PriorityQueue<Integer> large = new PriorityQueue<>();
    private boolean even = true;

    public double findMedian() {
        if (even)
            return (small.peek() + large.peek()) / 2.0;
        else
            return small.peek();
    }

    public void addNum(int num) {
        if (even) {
            large.offer(num);
            small.offer(large.poll());
        } else {
            small.offer(num);
            large.offer(small.poll());
        }
        even = !even;
    }


**Python**

    from heapq import *
    
    
    class MedianFinder:
        def __init__(self):
            self.small = []  # the smaller half of the list, max heap (invert min-heap)
            self.large = []  # the larger half of the list, min heap
    
        def addNum(self, num):
            if len(self.small) == len(self.large):
                heappush(self.large, -heappushpop(self.small, -num))
            else:
                heappush(self.small, -heappushpop(self.large, num))
    
        def findMedian(self):
            if len(self.small) == len(self.large):
                return float(self.large[0] - self.small[0]) / 2.0
            else:
                return float(self.large[0])

    # 18 / 18 test cases passed.
    # Status: Accepted
    # Runtime: 388 ms




  [1]: https://leetcode.com/discuss/64910/very-short-o-log-n-o-1