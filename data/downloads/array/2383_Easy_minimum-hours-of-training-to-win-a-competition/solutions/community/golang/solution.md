# Golang solves this pretty easily

**Author:** caracaldev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/5684993/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/5684993/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The requiredTrainingHours should be calculated first, otherwise can't forward the array
# Approach
<!-- Describe your approach to solving the problem. -->
the requiredHoursToTrain is getting bigger with every time we encounter a small initialValue to opponent's countervalue for same...then if the initialValue is bigger as needed that can be done without  comparision 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
   O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
   O(1)
# Code
```golang []
func minNumberOfHours(initialEnergy int, initialExperience int, energy []int, experience []int) int {

    requiredHoursToTrain := 0

    for i:=0; i< len(energy) ; i++{
       if(initialEnergy <= energy[i]){
            requiredHoursToTrain += energy[i] - initialEnergy +1
            initialEnergy = energy[i] + 1
       }

       if(initialExperience <= experience[i]){
            requiredHoursToTrain += experience[i] - initialExperience + 1
            initialExperience = experience[i] + 1
       }

       initialEnergy -= energy[i]
       initialExperience += experience[i]
    }

    return requiredHoursToTrain

    
}
```