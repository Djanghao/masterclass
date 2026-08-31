# Statistics from a Large Sample vs Find Median from Data Stream

**Author:** ar_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/5050542/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/5050542/)

---


MEDIAN CALCULATION APPROACHES - 

https://leetcode.com/problems/statistics-from-a-large-sample/description/
https://leetcode.com/problems/find-median-from-data-stream/description/

These 2 problems require calculation of median but which to choose lead me to following - 


The choice between using a single array to count occurrences and using two heaps (min-heap and max-heap) to find the median depends on various factors, including the characteristics of the data and the requirements. Here's a comparison -

1. **Space Complexity:**
   - Using a single array to count occurrences (`sampleStats` approach): This approach requires space proportional to the range of the numbers in the data. If the range is small and known in advance, this approach can be more memory-efficient compared to maintaining two heaps.
   - Using two heaps: Maintaining `two heaps` typically requires more space, as you need to store the elements themselves along with the additional data structures for the heaps.

2. **Time Complexity:**
   - Using a single array to count occurrences (`sampleStats` approach): This approach has a time complexity of O(n), where n is the number of unique elements in the data. It involves iterating through the array of counts to calculate statistics such as mean, median, mode, etc.
   - Using two heaps: Maintaining `two heaps` allows for constant-time median retrieval (O(1)) and logarithmic time complexity for adding elements (O(log n)). This approach is efficient for dynamic datasets where elements are continuously added or removed.

3. **Dynamic Data Streams:**
   - If your application involves continuously updating data streams where elements are frequently added or removed, the `two-heap `approach is generally more suitable. It provides efficient median updates without recalculating the entire dataset.
   - The `sampleStats` approach can still be used for dynamic streams, but it requires updating the entire array of counts whenever a new element is added or removed, which may become inefficient for large datasets.

4. **Ease of Implementation and Maintenance:**
   - The `sampleStats` approach is simpler to implement and understand, as it involves basic array operations for counting occurrences and calculating statistics.
   - Using `two heaps` introduces more complexity in implementation due to maintaining the heap properties and balancing operations.

In summary, you might choose the `sampleStats` approach when memory efficiency is critical, the dataset is small or has a limited range of values, and you prefer simplicity in implementation. 
On the other hand, if you need efficient median updates for dynamic data streams or have large datasets, using `two heaps` would be more appropriate despite the higher space complexity and implementation overhead.


https://leetcode.com/problems/statistics-from-a-large-sample/description/

# Code For sampleStats
```
var sampleStats = function(count) {
    let n     = count.length;
    let max   = -Infinity;
    let min   = Infinity;
    let sum   = 0;
    let mean  = 0;
    let mode  = 0;
    let total = 0;

    for (let i = 0; i < n; i++) {
        if (count[i] > 0) {
            // Max and Min
            max = Math.max(max, i);
            min = Math.min(min, i);
            // Sum and Total
            sum += count[i] * i;
            total += count[i];
            // Mode
            if (count[i] > count[mode]) {
                mode = i;
            }
        }
    }

    // Mean
    mean = sum / total;

    // Median
    let ini = 0;
    let med = 0;
    if (total == 1) {
        med = sum;
    } 

    if (total % 2 == 1) {
        for (let i = 0; i < n; i++) {
            if (ini < Math.floor(total / 2) + 1) {
                ini += count[i];
            } else {
                med = i-1;
                break;
            }
        }
    } 
    else {
        // Median when even
        let left = 0;
        let right = 0;
        let medl = 0;
        let medr = 0;
        ini =0;
        for (let i = 0; i < n; i++) {
            if (left < total / 2) {
                left += count[i];
            } else {
                medl = i-1;
                break;
            }
        }
        for (let i = 0; i < n; i++) {
            if (right < total / 2 + 1) {
                right += count[i];
            } else {
                medr = i-1;
                break;
            }
        }
        med = (medl + medr) / 2;
    }

    return [min, max, mean, med, mode];
};

```

https://leetcode.com/problems/find-median-from-data-stream/description/

# Code For 2 Heaps
```

class MedianFinder {
    constructor() {
        this.maxHeap = new MaxPriorityQueue(); //small
        this.minHeap = new MinPriorityQueue(); //big
    }

    addNum(num) {
        this.maxHeap.enqueue(num);
        // Compare the front elements and adjust the heaps if necessary
        if (this.maxHeap.size() > 0 && this.minHeap.size() > 0 &&
            this.maxHeap.front().element > this.minHeap.front().element) {
            let val = this.maxHeap.dequeue().element;
            this.minHeap.enqueue(val);
        }

        // Balance the sizes of the heaps
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            let val = this.maxHeap.dequeue().element;
            this.minHeap.enqueue(val);
        }
        if (this.minHeap.size() > this.maxHeap.size() + 1) {
            let val = this.minHeap.dequeue().element;
            this.maxHeap.enqueue(val);
        }
    }

    findMedian() {
        // Odd number of elements
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front().element;
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            return this.minHeap.front().element;
        } else {
            // Even number of elements
            return (this.minHeap.front().element + this.maxHeap.front().element) / 2;
        }
    }
}

```