# Simple Ruby solution

**Author:** dendomenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/3348456/](https://leetcode.com/problems/incremental-memory-leak/solutions/3348456/)

---



# Code
```
# @param {Integer} memory1
# @param {Integer} memory2
# @return {Integer[]}
def mem_leak(memory1, memory2)
  crash_time = 0
  app_memory = 1
  return [1, memory1, memory2] if app_memory > memory1 + memory2
  while true do
    crash_time += 1
    if memory1 >= memory2 && app_memory <= memory1
        memory1 -= app_memory
    elsif memory2 >= app_memory
        memory2 -=app_memory
    else
      break
    end
    app_memory += 1      
  end
  [crash_time, memory1, memory2]
end
```