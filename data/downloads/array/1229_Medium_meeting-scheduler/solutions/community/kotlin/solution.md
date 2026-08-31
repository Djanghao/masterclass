# Detailed Explanation || Easy logic || Multiple Approaches || Beats 100%

**Author:** sushanth_grandhi
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/5773372/](https://leetcode.com/problems/meeting-scheduler/solutions/5773372/)

---

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

Given, Array of time slots of 2 persons.

Each time slot consists of starting and ending time.

 

We need to find out the slot that works for both the people which is of length atleast duration.

 

So my initial thoughts for sloving this problem is that for every time slot in slots1 Array, check if there is any time slot in slots2 that overlaps. And check if the overlapping time is atleast length of duration. While checking we need to also maintain the variable of minimum overlapping start time that works for both for returning at the end.

 

But in this approach for every time slot in slots1, we check every time slot in slots2 => Takes `O(nm)` time -> TLE.

 

Then my next intuition was to sort the slots1 and slots2 inorder to optimize the algorithm.

 

Which led to my first approach.

 

Constraints given in problem:

- Time slots of same person will not be overlappping.

- For each slot: start time < end time.

 

# Approach 1

<!-- Describe your approach to solving the problem. -->

1. Sort the arrays based on start time. So the slots will be in increasing order.

2. Now, we initialize 2 pointers to iterate over the slots1 and slots2.

3. Every iteration we check if there is overlapping between time slot from slot1 and time slot from slot2, then check if the overlapping is atleast of length duration; and return or continue with iterating accordingly.

4. At every iteration after checking, based on end times of slots1 and slots2 either increment pointer of slots1 or pointer of slots2.

5. We iterate until overlapping time slot of atleast length duration is found or one of pointers reaches end of array.

 

# Complexity

- Time complexity:

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

1. length of slots1 => m; length of slots2 => n

2. Sorting takes => O(nlogn + mlogm)

3. In worst case we iterate over each and every time slot of slots1 and slots2 at max once => O(n+m).

4. Since every iteration we visit 1 new time slot and there are n+m time slots in total.

4. Total time: `O(nlogn + mlogm)`

 

- Space complexity:

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

1. Sorting is done in-place.

2. We donot use any extra space => O(1)

 

# Code

```kotlin []

class Solution {

    fun minAvailableDuration(
        slots1: Array<IntArray>,
        slots2: Array<IntArray>,
        duration: Int
    ): List<Int> {

        // Sorting the Arrays based on start time of each slot
        slots1.sortWith(compareBy { it[0] })
        slots2.sortWith(compareBy { it[0] })

        // initializing 2 pointers to traverse slots1 and slots2
        var i = 0
        var j = 0

        // Traverse until one of the pointers reaches the end
        while (i < slots1.size && j < slots2.size) {
            // Checking the overlapping between the current slots
            /*
                There are mainly 2 scenarios here:
                1. slots1[i] and slots2[j] have no overlapping
                2. slots1[i] and slots2[j] have some overlapping
            */

            val start = max(slots1[i][0], slots2[j][0])
            val end = min(slots1[i][1], slots2[j][1])

            /*
                => When you subtract minimum of end times
                                    from maximum of start times.
                1. When there is no overlap => difference is negative
                2. When there is some overlap => difference is positive
            */

            // Check if difference is greater than duration and return
            if (end-start >= duration) {
                return listOf(start, start+duration)
            }

            // Else increment pointer of slots which has earlier end time
            if (slots1[i][1] > slots2[j][1]) {
                j++
            } else {
                i++
            }
        }

        return emptyList()

    }

}

```
 

---


# Approach 2

<!-- Describe your approach to solving the problem. -->

This next approach is based on heap (priority queue).

It is based of the intuition that there is no overlapping between the slots of same person.

So, if we insert all the slots into a min-heap and compare them; then if there is some overlap - it should definitely be between the slots of different persons.

 

The approach goes as below:

1. Initialize a heap and insert all the slots whose length is atleast duration into the heap.

2. Now, at every iteration pop an item from heap and compare it with the top element of heap. (The same logic from previous approach can be used for comparision).

3. Based on the result of comparision you can return or continue.

4. We continue traversal as long as there are atleast 2 slots in heap (since, we need 2 slots for comparision).

[https://leetcode.com/problems/meeting-scheduler/submissions/1386873968](Submission-link)
 

 

# Complexity

- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1. We insert 'm+n' slots in heap.
2. Each insertion takes 'log(n+m)' for heapify.
3. Total 'm+n' insertions take => O((m+n) log(m+n)).
4. Every iteration we pop 1 slot from heap => Takes 'log(m+n)'
5. Worst case we iterate over the heap until its empty => (m+n) slots => O((m+n) log(m+n))
6. Total time: `O((m+n) log(m+n))`


- Space complexity:

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

 1. We use extra space to store (m+n) slots in heap => `O(m+n)`

# Code

```kotlin []

class Solution {
    fun minAvailableDuration(
        slots1: Array<IntArray>,
        slots2: Array<IntArray>,
        duration: Int
    ): List<Int> {

        /* Initializing heap using PriorityQueue data structure and 
            using the start time of each slot as comparator for min heap.
        */
        val timeSlotsHeap = PriorityQueue<IntArray>(compareBy {it[0]}) 

        // inserting time slots into min heap one by one
        // based on condition that length >= duration
        for (timeSlot in slots1) {
            if (timeSlot[1]-timeSlot[0] >= duration) {
                timeSlotsHeap.add(timeSlot)
            }
        }
        for (timeSlot in slots2) {
            if (timeSlot[1]-timeSlot[0] >= duration) {
                timeSlotsHeap.add(timeSlot)
            }
        }

        // traversing over heap until it has atleast 2 elements
        while (timeSlotsHeap.size > 1) {
            // pop the element
            val slot1 = timeSlotsHeap.poll()
            // Retrieving top element after popping
            val slot2 = timeSlotsHeap.peek()

            // Checking the overlapping between the current slots
            /*
                There are mainly 2 scenarios here:
                1. slots1[i] and slots2[j] have no overlapping
                2. slots1[i] and slots2[j] have some overlapping
            */
            val start = max(slot1[0], slot2[0])
            val end = min(slot1[1], slot2[1])
 
            /*
                => When you subtract minimum of end times
                                    from maximum of start times.
                1. When there is no overlap => difference is negative
                2. When there is some overlap => difference is positive
            */
            // Check if difference is greater than duration and return
            if (end-start >= duration) {
                return listOf(start, start+duration)
            }
        }

        return emptyList()
    }
}

```

Thanks for reading :)

Please upvote if you like my solution.
Leave any suggestions in comments.