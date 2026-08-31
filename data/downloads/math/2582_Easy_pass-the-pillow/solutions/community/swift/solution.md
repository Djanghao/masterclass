# Using for Loop and reverse flag

**Author:** nourallahahmed7001
**Votes:** 4
**Link:** [https://leetcode.com/problems/pass-the-pillow/solutions/5430785/](https://leetcode.com/problems/pass-the-pillow/solutions/5430785/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Check if the n is less than the time, which means that no reverse will happen, so loop on the time and increase the currentPersion flag by one. 

Otherwise will loop on the time and create a flag called reverse which indicates if we will decrease the currentPerson flag or not. 

While the reverse is false here we just increase the currentPerson by one and check if the currentPerson equals the n (The last person in the queue) so assign the reverse flag by true indecates that we will decrement the currentPerson (while Moving backward) 

On the other hand, while the reverse is true we have to decrement the currentPerson by one and then check if currentPerson is 1 (The First person in the queue) then assign the reverse by false which indicates we will increase the currentPerson. (while moving forward) 


# Code
```
class Solution {
    func passThePillow(_ n: Int, _ time: Int) -> Int {
        var currentPerson = 1
        var reverse = false
        if n > time {
            for index in 0..<time{
                currentPerson += 1 
            }        
        }else{
            for index in 0..<time{
                if  reverse == false { //5
                    currentPerson += 1
                    reverse = currentPerson == n ? true : false     
                }else if  reverse == true {
                    currentPerson -= 1
                    reverse = currentPerson == 1 ? false : true
                }
            }
        }
        return currentPerson
        
    }
}
```