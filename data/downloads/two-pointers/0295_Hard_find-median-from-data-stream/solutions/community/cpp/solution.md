# [ C++ ] Easy, Understandable ,Two heaps Intuitive Solution. O(logn) add, O(1) find

**Author:** abhinav_2011
**Votes:** 90
**Link:** [https://leetcode.com/problems/find-median-from-data-stream/solutions/1048192/](https://leetcode.com/problems/find-median-from-data-stream/solutions/1048192/)

---

As the data stream continuously come in, we have to consider the middle most element everytime for calculating the median.

**TWO HEAP INTUITION :** **We have to consider middle element/s where all other elements are sorted as data stream come. Heaps come into picture with less time complexity to achieve this. So, we keep two heaps, one min heap and one max heap and keep a track of middle elements by balancing each heap.**

The left heap is containing elements in decreasing order (Max to Min) and right heap is in increasing order (Min to Max) but all the elements are greater than the left heap elements. We start pushing the elements in left heap and try to balance it everytime by comparing with the new elements and with heap size and accordingly put it into the right heap.
```
class MedianFinder {
public:
    /** initialize your data structure here. */
    priority_queue<int, vector<int>, greater<int> > minHeap;
	priority_queue<int> maxHeap;
    MedianFinder(){}

    void addNum(int num) {
        if (maxHeap.empty() or maxHeap.top() > num) {
			maxHeap.push(num);
		} else {
			minHeap.push(num);
		}

		if (maxHeap.size() > minHeap.size() + 1) {
			minHeap.push(maxHeap.top());
			maxHeap.pop();
		} else if (minHeap.size() > maxHeap.size() + 1) {
			maxHeap.push(minHeap.top());
			minHeap.pop();
		}
    }
    
    double findMedian() {
        if (maxHeap.size() == minHeap.size()) {
			if (maxHeap.empty()) {
				return 0;
			} else {
				double avg = (maxHeap.top() + minHeap.top()) / 2.0;
				return avg;
			}

		} else {
			return maxHeap.size() > minHeap.size() ? maxHeap.top() : minHeap.top();
		}
    }
};

```

Please upvote if you find the solution helpful :)
