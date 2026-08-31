# Easy to understand BFS from Brute Force (TLE) to beat 90%

**Author:** evan0322
**Votes:** 4
**Link:** [https://leetcode.com/problems/race-car/solutions/2329115/](https://leetcode.com/problems/race-car/solutions/2329115/)

---

### BFS Brute Force (TLE)
The intuition for this problem is to use BFS until the target is reached. For ever step, we have two choices:
1. A
2. R

So for each of the scenario (node) in BFS, we add two extra node, one use A as next step, and another one use R as the next step.

For example
A -> A R -> AA AR RA RR.....

So now we have the brute force solution
```
class Solution {
    func racecar(_ target: Int) -> Int {
        guard target >= 1 else {
            return 0
        }
        
        var count = 0
        
        //forward, backward
        typealias Status = (speed:Int, pos:Int)
        var queue = [Status(speed:1, pos:0)]
        
        while queue.count > 0 {
            var newQueue = [Status]()
            count += 1
            for element in queue {
                let newStatus1 = Status(speed:element.speed * 2, pos: element.pos + element.speed)
                if newStatus1.pos == target {
                    return count
                }
                newQueue.append(newStatus1)
                
                let newStatus2 = Status(speed:element.speed > 0 ? -1 : 1, pos:element.pos)
                if newStatus2.pos == target {
                    return count
                } 
				
				//Only append the new scenario is the position is positive since we cannot keep going backwards to reach the target
                if newStatus2.pos > 0 {
                    newQueue.append(newStatus2)
                }
            }
            
            queue = newQueue
        }
        
        return 0
        
    }
}
```

The time complexity is 2^n since for each of the choice we need to search two directions.


### BFS with memoization (Accpeted)
This solution will TLE as expected. Now let's see how to optimize it. We will note that the status of of the car movement can be definted by two variables: current Speed and current Position. If we visited any scenario with speed i and postion j, then there is no need to explore this node if we visit this node again later. So we can use memoization to record these scenarios so we do not do duplicate work.

```
class Solution {
    func racecar(_ target: Int) -> Int {
        guard target >= 1 else {
            return 0
        }
        
        var count = 0
        
        //forward, backward
        typealias Status = (speed:Int, pos:Int)
        var queue = [Status(speed:1, pos:0)]
        var memo = Set<String>()
        
        while queue.count > 0 {
            var newQueue = [Status]()
            count += 1
            for element in queue {
                let newStatus1 = Status(speed:element.speed * 2, pos: element.pos + element.speed)
                if newStatus1.pos == target {
                    return count
                }
                let key = "\\(newStatus1.speed):\\(newStatus1.pos)"
                if !memo.contains(key) {
                    newQueue.append(newStatus1)
                    memo.insert(key)
                }
                
                
                let newStatus2 = Status(speed:element.speed > 0 ? -1 : 1, pos:element.pos)
                if newStatus2.pos == target {
                    return count
                } 
                if newStatus2.pos > 0 {
                    let key = "\\(newStatus2.speed):\\(newStatus2.pos)"
                    if !memo.contains(key) {
                        newQueue.append(newStatus2)
                        memo.insert(key)
                    }
                }
            }
            
            queue = newQueue
        }
        
        return 0
        
    }
}
```

This time the answer is accepted. But it is still not good enough, we can do some extra work to prune the search tree a bit further. 


### BFS with condition
The principle here is **we only consider R if the next step is moving away from target**
* If next step  exceeds target and speed is positive, we should add R to see if moving backwards can reach target
* If next step  is less than the target and the speed is negative, we should add R to ensure it is moving towards the target again.

```
class Solution {
    func racecar(_ target: Int) -> Int {
        guard target >= 1 else {
            return 0
        }
        
        var count = 0
        
        //forward, backward
        typealias Status = (speed:Int, pos:Int)
        var queue = [Status(speed:1, pos:0)]
        var memo = Set<String>()
        
        while queue.count > 0 {
            var newQueue = [Status]()
            count += 1
            for element in queue {
                let newStatus1 = Status(speed:element.speed * 2, pos: element.pos + element.speed)
                if newStatus1.pos == target {
                    return count
                }
                let key1 = "\\(newStatus1.speed):\\(newStatus1.pos)"
                if !memo.contains(key1) {
                    newQueue.append(newStatus1)
                    memo.insert(key1)
                }
                
                
                if element.pos + element.speed > target && element.speed > 0 {
                    let newStatus2 = Status(speed:-1, pos:element.pos)
                    let key2 = "\\(newStatus2.speed):\\(newStatus2.pos)"
                    if !memo.contains(key2) {
                        newQueue.append(newStatus2)
                        memo.insert(key2)
                    }
                }
                
                if element.pos + element.speed < target && element.speed < 0 {
                    let newStatus2 = Status(speed:1, pos:element.pos)
                    let key2 = "\\(newStatus2.speed):\\(newStatus2.pos)"
                    if !memo.contains(key2) {
                        newQueue.append(newStatus2)
                        memo.insert(key2)
                    }
                }

            }
            
            queue = newQueue
        }
        
        return 0
        
    }
}
```

Now the complexity is close to `O(N)` since we only expand the branch limited times instead of expand it every time.

### Thoughts on this question during interview
The dp solution is elegant & smart. However, to be honest it is very difficult to figure it out during the 45 mins interview. A more realistic (and more preferred way IMO) to show your problem solving skill is to start with brute force and communicate with the interviewer how to optimize it. Even if you cannot solve the problem with the most optimized solution in the end, the interviewer will still have a cense of how you are able to approach of problem and optimize the solution, which give you a better chance of passing the interview. 
