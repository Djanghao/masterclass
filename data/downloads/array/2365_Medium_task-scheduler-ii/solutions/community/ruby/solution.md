# Ruby solution

**Author:** profcalculus
**Votes:** 0
**Link:** [https://leetcode.com/problems/task-scheduler-ii/solutions/2493005/](https://leetcode.com/problems/task-scheduler-ii/solutions/2493005/)

---

The idea is, we are dealing with an invisible stack.
The map, contains the last element, the task was inserted at.

When the next eligible position for a task is within the stack, we just increase the stack. if not the stack grows to the new position.

```# @param {Integer[]} tasks
# @param {Integer} space
# @return {Integer}
def task_scheduler_ii(tasks, space)
    map = {}
    length = 0
    tasks.each do |t|
        if map[t]
            i = map[t] + space + 1
            if i < length
                length += 1
            else
                length = i+1
            end
        else
            length += 1
        end
        map[t] = length - 1
    end
    length
end