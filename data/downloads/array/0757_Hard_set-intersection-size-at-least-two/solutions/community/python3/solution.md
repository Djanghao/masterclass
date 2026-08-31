# Python [Explained] | O(nlogn)

**Author:** diwakar_4
**Votes:** 15
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/2700915/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/2700915/)

---

# Intuition :
- This problem is similar to [Meeting rooms II](https://leetcode.com/problems/meeting-rooms-ii/) in which we have to find the minimum number of rooms required to organize all the conferences.
- Similarly in this problem we have to find the minimum size of set that contain atleast two integers from each interval.
- -----------------

# Approach :
- Suppose we have two intervals `[start1, end1]` and `[start2, end2]`.
- Now let's consider three cases here :
- 1. when these two intervals do not overlap :
    - `end1 < start2`, means `start2-end1 > 0` --> we will select two integers from both sets.
- 2. when these two intervals overlap edge to edge :
    - `end1 == start2`, means `start2-end1 == 0`--> we will select one common element from the sets and one distinct element from previous interval.
- 3. when these two intervals overlap(not edge to edge) :
    - `end1 > start2`, means `start2-end1 < 0` --> we will select two elements that will be common from both the sets.
--------------------

- To make this approach working first we have to sort all the intervals on the basis of ending time of the intervals.
- If intervals overlap we will select only one element from the previous interval because in the next iteration second(common) element will be picked up from the current interval.
- If intervals do not overlap then we will select two elements from previous interval only, because elements form the current interval will be selected automatically in the next iteration.
-------------------

# Complexity
- Time complexity: O(nlogn)

- Space complexity: O(1)
- -------------------

# Code
```
class Solution:
    def intersectionSizeTwo(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x:x[1])
        size = 0
        prev_start = -1
        prev_end = -1

        for curr_start, curr_end in intervals:
            if prev_start == -1 or prev_end < curr_start: #if intervals do not overlap
                size += 2
                prev_start = curr_end-1
                prev_end = curr_end

            elif prev_start < curr_start: #if intervals overlap
                if prev_end != curr_end:
                    prev_start = prev_end
                    prev_end = curr_end
                    
                else:
                    prev_start = curr_end-1
                    prev_end = curr_end

                size += 1

        return size

        
```
---------------------
**Upvote the post if you find it helpful.
Happy coding.**