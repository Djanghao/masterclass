# Easy to understand Python solution

**Author:** kiteman
**Votes:** 91
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/497890/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/497890/)

---

I get that it may be really difficult to understand the official solution; I spent over a couple hours just banging my head around it. 

Turns out, the variables should be named correctly for readability
```
        stack = []
        result = [0] * n
        
        def normalizeProcessTime(processTime):
            return processTime.encode('ascii','ignore').split(':') 
        
        for processTime in logs:
            processId, eventType, time = normalizeProcessTime(processTime)
            
            if eventType == "start":
                stack.append([processId, time])
            
            elif eventType == "end":
                processId, startTime = stack.pop()
                timeSpent = int(time) - int(startTime) + 1 # Add 1 cause 0 is included
                result[int(processId)] += timeSpent
                
                # Decrement time for next process in the stack
                if len(stack) != 0:
                    nextProcessId, timeSpentByNextProcess = stack[-1] #
                    result[int(nextProcessId)] -= timeSpent
                    
        return result

```