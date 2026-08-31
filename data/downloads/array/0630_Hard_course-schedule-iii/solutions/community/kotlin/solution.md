# [Kotlin] Write up + Explanation O(nlogn)

**Author:** brentlikestocode
**Votes:** 1
**Link:** [https://leetcode.com/problems/course-schedule-iii/solutions/4572985/](https://leetcode.com/problems/course-schedule-iii/solutions/4572985/)

---

# Understanding the Problem
Imagine you're a student with a list of online courses you want to take. Each course has a duration and a latest day by which it must be completed. You can only take one course at a time. The challenge is to figure out the maximum number of courses you can complete.

## Core Concepts

**Sorting by End Date**: The first step is to sort the courses by their end dates. This is like arranging your tasks by their deadlines - you prioritize what needs to be done soonest.

**Using a Priority Queue**: Think of a priority queue as a special kind of line where the biggest guy always gets to stand at the front. In our case, the "biggest guy" is the course with the longest duration. This helps quickly identify which course to drop if we need to make room for a shorter one that can be completed in time.

## The Algorithm

**Sort the Courses**: We sort the courses based on their end dates (lastDay). This is similar to arranging tasks by urgency.

**Iterate Through the Courses**: We then go through each course and consider whether we can add it to our schedule:

If adding the current course doesn't make us miss any deadlines, we add it to our priority queue (the line) and update our current time.
If adding the course would make us miss a deadline, we check if we've previously added a longer course (the "biggest guy" at the front of our line). If so, we replace this longer course with our current, shorter one. This is like realizing you can't finish a long book before the due date, but you can finish a shorter one.

**Maintaining the Priority Queue**: Every time we add a course to our schedule (the queue), it's automatically arranged so that the longest course is always at the front. This way, if we need to drop a course, we know we are dropping the one that takes the most time.

## Why This Works

By always replacing longer courses with shorter ones when under a time crunch, we ensure we're making the most of our available time. It's about being flexible - if you can't finish something big in time, switch to something smaller but still valuable.

## How I Knew to Use a Priority Queue

The key insight was realizing that we always want to replace the longest course when necessary. A priority queue is perfect for this because it keeps the longest course easily accessible at all times. It's a common tool in computer science for managing items where the biggest, smallest, or highest-priority item needs to be accessed quickly.

## Time Complexity

Time complexity measures how the execution time of an algorithm changes with the size of the input.

**Sorting the Courses**: The first step in our algorithm is to sort the courses by their end dates. The time complexity for sorting an array is O(n log n), where n is the number of courses. This is because most efficient sorting algorithms, like quicksort or mergesort, have this complexity.

**Iterating Through the Courses**: After sorting, we iterate through each course once. This is a linear operation, so its time complexity is O(n).

**Operations in the Priority Queue**: For each course, we might add it to or remove the longest course from the priority queue. Both adding and removing from a priority queue have a time complexity of O(log n) because, in a heap structure (which a priority queue uses under the hood), these operations require reorganizing the heap to maintain its order.

So, in the worst case, where we add or remove every course, the time complexity for these priority queue operations would be O(n log n), as we perform an O(log n) operation n times.

Combining these complexities, the overall time complexity is O(n log n) + O(n) + O(n log n). Since O(n log n) is the dominant term, the overall time complexity of the algorithm simplifies to **O(n log n)**.

## Space Complexity

Space complexity measures the total amount of memory that an algorithm uses relative to the input size.

**Priority Queue**: The priority queue is the primary data structure we use that grows with the input size. In the worst case, it can contain all courses, so its space complexity is O(n).

**Input and Auxiliary Space**: The sorted array of courses does not require additional space as we're sorting the courses in place. Other than that, we only use a few variables for keeping track of time and course durations, which use a constant amount of space.

Therefore, the dominant term in space complexity is the space used by the priority queue, which leads to an overall space complexity of **O(n)**.

# Code
```
class Solution {
    fun scheduleCourse(courses: Array<IntArray>): Int {
        courses.sortBy { it[1] }
        val queue = PriorityQueue<Int>(compareByDescending { it })
        var time = 0

        for (course in courses) {
            val (duration, lastDay) = course
            if (time + duration <= lastDay) {
                queue.add(duration)
                time += duration
            } else if (queue.isNotEmpty() && queue.peek() > duration) {
                time += duration - queue.poll()
                queue.add(duration)
            }
        }

        return queue.size
    }
}
```