# 🚩🚀Beats 99.80%✨ | 📈Easy and detailed explanation with solution | 🔥Efficient Code

**Author:** nikkipriya_78
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-processing-time/solutions/4144452/](https://leetcode.com/problems/minimum-processing-time/solutions/4144452/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves distributing a set of tasks with known processing times to a set of processors with known processing capabilities. The goal is to minimize the total processing time by assigning tasks to processors in an optimal way. This is a scheduling problem where you want to allocate tasks to processors to minimize the overall completion time.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the processorTimes array in ascending order. This step ensures that tasks are assigned to processors with the shortest processing times first.

2. Sort the taskTimes array in descending order. This step sorts the tasks in such a way that the longest tasks are considered first when assigning them to processors.

3. Initialize processorIndex to 0 and answer to 0. processorIndex keeps track of the current processor being assigned tasks, and answer keeps track of the minimum total processing time.

4. Loop through each processor in processorTimes:

a. Initialize currentMax to 0 and taskCount to 0. currentMax will store the maximum processing time among the tasks assigned to the current processor, and taskCount counts the number of tasks assigned to the processor (up to a maximum of 4 tasks).

b. While processorIndex is within the bounds of taskTimes and taskCount is less than 4 (since a processor can handle up to 4 tasks), do the following:

i. Calculate the processing time for the current task assigned to the processor, which is the sum of processingTime (the current processor's time) and taskTimes[processorIndex].

ii. Update currentMax to the maximum of its current value and the calculated processing time.

iii. Increment processorIndex and taskCount.

c. After the loop, update answer to the maximum of its current value and currentMax. This ensures that the minimum total processing time is updated based on the tasks assigned to the current processor.

5. Return the final value of answer, which represents the minimum total processing time.

---

# Complexity
## 1. Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Sorting processorTimes and taskTimes takes O(N * log(N)) time, where N is the number of processors and tasks.

- The main loop iterates through each processor once and processes up to 4 tasks for each processor. Therefore, it has a time complexity of O(N * 4) = O(N).

- Overall, the time complexity is dominated by the sorting step, so the total time complexity is O(N * log(N)).
## 2. Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- The algorithm uses a constant amount of extra space for variables, regardless of the input size. Therefore, the space complexity is O(1), indicating constant space usage.

---


```C++ []
class Solution { 
public: 
    int minProcessingTime(vector<int>& processorTimes, vector<int>& taskTimes) { 
        sort(processorTimes.begin(), processorTimes.end()); 
        sort(taskTimes.begin(), taskTimes.end(), [](const int a, const int b) { return a > b; }); 
        int processorIndex = 0, answer = 0; 
        for (int processingTime : processorTimes) { 
            int currentMax = 0, taskCount = 0; 
            while (processorIndex < taskTimes.size() && taskCount < 4) { 
                currentMax = max(currentMax, processingTime + taskTimes[processorIndex]); 
                processorIndex++; 
                taskCount++; 
            } 
            answer = max(answer, currentMax); 
        } 
        return answer; 
    } 
};
```
```Java []
import java.util.Collections;
import java.util.List;

class Solution {
    public int minProcessingTime(List<Integer> processorTimes, List<Integer> taskTimes) {
        // Sort processorTimes in ascending order
        Collections.sort(processorTimes);
        
        // Sort taskTimes in descending order
        Collections.sort(taskTimes, Collections.reverseOrder());
        
        int processorIndex = 0, answer = 0;
        
        for (int processingTime : processorTimes) {
            int currentMax = 0, taskCount = 0;
            
            while (processorIndex < taskTimes.size() && taskCount < 4) {
                currentMax = Math.max(currentMax, processingTime + taskTimes.get(processorIndex));
                processorIndex++;
                taskCount++;
            }
            
            answer = Math.max(answer, currentMax);
        }
        
        return answer;
    }
}

```
```Python []
class Solution:
    def minProcessingTime(self, processorTimes, taskTimes):
        processorTimes.sort()
        taskTimes.sort(reverse=True)
        processorIndex = 0
        answer = 0

        for processingTime in processorTimes:
            currentMax = 0
            taskCount = 0

            while processorIndex < len(taskTimes) and taskCount < 4:
                currentMax = max(currentMax, processingTime + taskTimes[processorIndex])
                processorIndex += 1
                taskCount += 1

            answer = max(answer, currentMax)

        return answer

```
```Javascript []
/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function(processorTime, tasks) {
    processorTime.sort((a, b) => a - b); // Sort processorTimes in ascending order
    tasks.sort((a, b) => b - a); // Sort taskTimes in descending order

    let processorIndex = 0;
    let answer = 0;

    for (const processingTime of processorTime) {
        let currentMax = 0;
        let taskCount = 0;

        while (processorIndex < tasks.length && taskCount < 4) {
            currentMax = Math.max(currentMax, processingTime + tasks[processorIndex]);
            processorIndex++;
            taskCount++;
        }

        answer = Math.max(answer, currentMax);
    }

    return answer;
};

```
```Ruby []
# @param {Integer[]} processor_time
# @param {Integer[]} tasks
# @return {Integer}
def min_processing_time(processor_time, tasks)
    processor_time.sort!
    tasks.sort! { |a, b| b <=> a }
    processor_index = 0
    answer = 0

    processor_time.each do |processing_time|
        current_max = 0
        task_count = 0

        while processor_index < tasks.length && task_count < 4
            current_max = [current_max, processing_time + tasks[processor_index]].max
            processor_index += 1
            task_count += 1
        end

        answer = [answer, current_max].max
    end

    return answer
end

```









