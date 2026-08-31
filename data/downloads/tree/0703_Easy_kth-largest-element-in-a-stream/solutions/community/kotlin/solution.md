# My kotlin solution with time O(NLogk)and space O(k)

**Author:** hj-core
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/3554477/](https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/3554477/)

---

The idea is that since only the adding operation is supported, we can keep track of the k largest numbers and return the smallest one among them each time we add a new value. A priority queue is a good data structure for this use case.

Below is my solution in kotlin,
```
class KthLargest(private val k: Int, nums: IntArray) {

    private val kLargest = PriorityQueue<Int>()

    init {
        for (num in nums) {
            add(num)
        }
    }

    /* Complexity For N calls:
     * Time O(NLogk) and Space O(k);
     */
    fun add(`val`: Int): Int {
        kLargest.offer(`val`)
        if (kLargest.size > k) {
            kLargest.poll()
        }
        return kLargest.peek()
    }
}
```

Update on 2024-08-12 (2): 
* Revert explanation, the original one is correct...
* Revert variable name.

Update on 2024-08-12: 
* Fix incorrect explanation. 
* Refactor the implementation for readability.