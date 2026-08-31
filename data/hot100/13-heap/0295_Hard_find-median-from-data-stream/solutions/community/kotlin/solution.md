# Kotlin Solution | 2 Priority Queues | Beats 74% Runtime, 83% Memory

**Author:** chiuannica
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-median-from-data-stream/solutions/3099960/](https://leetcode.com/problems/find-median-from-data-stream/solutions/3099960/)

---

#### Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need a (preferably optimal) way to keep the values sorted and access to the median values. 

**Possible Hints to get to this Approach: **
Hint to get to sorting:
Q: How would we naturally get the median?
A: We need to have all the numbers in order. Meaning we would need the values sorted. 

A viable but less optimal way of solving this problem would be maintaining a list of values, and when getting the median, sorting it, and grabbing/calculating the middle value. The TC for findMedian would be $$O(n*log(n))$$ because that is the TC of sorting. The space would be $$O(n)$$ since we are saving all values.  

We could add boolean flags indicating the list is sorted to avoid unnecessary re-sorting.

But if you think about if we have 1000000 numbers we have to keep getting the median for, then it would be cumbersome to keep sorting the whole list. 

Hint to get to using heaps:
Q: Is there a data structure we could take advantage of (to sort upon insertion)?
A: A heap-- but that only gives us access to the top value, which could be the smallest or biggest value. 

Hint to get to using 2 heaps: 
Q: Is there a way we can take advantage of the constant time access to the top of a heap?

# Approach
<!-- Describe your approach to solving the problem. -->

We have two heaps that divide the values by smaller and larger.
The first heap has smaller values and is sorted from smaller to larger, so that we have access to the largest element from the smaller half of the elements. 
The second heap has larger values and is sorted from larger to smaller, so that we have access to the smallest element from the larger half of the elements.
That means we have access to the 1 or 2 values in the middle, which we would need to get the median.

We would need to maintain that each heap has the same amount of elements, or one is at most 1 bigger than the other.



# Complexity
Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- addNum: $$O(log N)$$. Adding to a heap is $$O(log N)$$
- findMedian: $$O(1)$$. Getting the top of a heap is $$O(1)$$ 

Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- Overall: $$O(N)$$. 2 priority queues. We are storing all the values added.
- addNum: $$O(1)$$
- findMedian: $$O(1)$$

# Code
```
class MedianFinder() {
    val large: PriorityQueue<Int> = PriorityQueue()
    val small: PriorityQueue<Int> = PriorityQueue(Collections.reverseOrder())
    var len: Int = 0

    fun addNum(num: Int) {
        /*
        If the number I am inserting is larger than the 
        largest value in the smaller heap (the top value), 
        then it should go in the larger heap.
         Otherwise it does in the smaller heap
        */
        if (large.size > 0 && num > small.peek()) {
            large.add(num)
        } else {
            small.add(num)
        }

        /*
        Now the values are divided into the 
        larger and smaller heaps appropriately
        but we need to check if one is too big. 

        Each heap has to have the same amount, or 
        the one of them can be consistently can be 1 bigger
        (in this case I chose the smaller heap 
        to be allowed to be 1 bigger). 
        If the larger heap has more values, smallest
        value of the larger heap (the top of the heap) 
        needs to be moved to the smaller heap to 
        maintain the correct size for each.
        */

        if (small.size < large.size) {
            small.add(large.poll())
        } else if (small.size > large.size+1) {
            large.add(small.poll())    
        }
        len += 1
    }

    fun findMedian(): Double {
        if (len % 2 == 0) {
            return (large.peek() + small.peek()).toDouble() / 2
        } else {
            return small.peek().toDouble()
        }
    }

}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```