# Ruby solution with pseudo-heap, explained (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/parallel-courses-iii/solutions/4180346/](https://leetcode.com/problems/parallel-courses-iii/solutions/4180346/)

---

# Intuition
To solve this problem, we want to have a data structure tracking our courses in progress and giving us a new one whenever it finishes.  A heap is ideally suited to this task, but the heap class in Ruby is too slow and will TLE.  We use a binary insertion sort to mimic the behavior of a heap.

Here's the basic process:
1. Create an array of the prerequisite courses for each courses, and another array of the courses that each course is a prereq for.
2. Start with the courses with no prereqs and put them in a "heap".
3. Go through each courses, taking the next one to finish at each point.  Update current time to the time of the course that's finished, and check whether any of the courses it's a prereq for can be started now.  If so, but them into the "heap", adding the current time to the length of time it takes to complete that course.
4. Return the time at the end.

# Approach
1. Create prevs and nexts arrays, of the courses that must be taken before/after a given course.
2. Add a value to the beginning of times (right now it's one-indexed).
3. Iterate through relations to population the nexts and prevs arrays.
4. Create a set to check the courses that you've finished and initialize time to zero.
5. Create a "heap" for the courses in progress.  (We're going to implement this with binary insertion sort because it's faster than an actual heap with these limits on input size.)  For now, start it off with every course that doesn't have a prerequisite and the time it takes.  (Put time first so it sorts properly.)  Sort the array.
6. Go through one course at a time until you've taken all courses.  For each course:
    - Remove the first course from your "heap" (i.e., the course with the smallest time).  Set that to be the new time and add the course to your taken set.
    - Check each course that val was a prereq for.  If any of those courses have all the prereqs taken, but that course into your heap.  (Use binary search to find the position to insert it efficiently.)  Use the current time plus the length of time it takes to finish that course for the ending time.
7. Once you've taken all courses, return the current time.

# Complexity
- Time complexity:
$$O(n^2)$$.  A solution with a real heap would be $$O(n * log(n))$$, but that solution is too slow to pass here, whereas binary insertion sort works.

- Space complexity:
$$O(n)$$

# Code
```
def minimum_time(n, relations, times)
    prevs = Array.new(n+1) { [] }
    nexts = Array.new(n+1) { [] }

    times.unshift(0)

    relations.each do |a,b|
        prevs[b] << a
        nexts[a] << b
    end 

    taken = Set[]
    time = 0

    min_heap = []
    starts = (1..n).to_a.select { |val| prevs[val].length == 0 }
    starts.each { |start| min_heap << [times[start],start] }
    min_heap.sort!

    until min_heap.empty?
        val, num = min_heap.shift
        time = val
        taken.add(num)

        nexts[num].each do |adj|
            if prevs[adj].all? { |node| taken.include?(node) }
                idx = min_heap.bsearch_index do |subarr|
                    subarr[0] >= time + times[adj]
                end || min_heap.length
                
                min_heap.insert(idx, [times[adj] + time, adj])
            end
        end
    end
    
    time
end
```