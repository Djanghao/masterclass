# Simulation

**Author:** FLlGHT
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/2459984/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/2459984/)

---

##### Java
```java
public int minNumberOfHours(int initialEnergy, int initialExperience, int[] energy, int[] experience) {
        int hours = 0, currentEnergy = initialEnergy, currentExperience = initialExperience;

        for (int opponent = 0; opponent < energy.length; opponent++) {
            if (energy[opponent] >= currentEnergy) {
                int energyDifference = energy[opponent] - currentEnergy;
                hours += energyDifference + 1;
                currentEnergy += energyDifference + 1;
            }
            
            if (experience[opponent] >= currentExperience) {
                int experienceDifference = experience[opponent] - currentExperience;
                hours += experienceDifference + 1;
                currentExperience += experienceDifference + 1;
            }
            
            currentEnergy -= energy[opponent];
            currentExperience += experience[opponent];
        }

        return hours;
    }
```

##### C++
```c++
public:
    int minNumberOfHours(int initialEnergy, int initialExperience, vector<int>& energy, vector<int>& experience) {
        int hours = 0, currentEnergy = initialEnergy, currentExperience = initialExperience;

        for (int opponent = 0; opponent < energy.size(); opponent++) {
            if (energy[opponent] >= currentEnergy) {
                int energyDifference = energy[opponent] - currentEnergy;
                hours += energyDifference + 1;
                currentEnergy += energyDifference + 1;
            }

            if (experience[opponent] >= currentExperience) {
                int experienceDifference = experience[opponent] - currentExperience;
                hours += experienceDifference + 1;
                currentExperience += experienceDifference + 1;
            }

            currentEnergy -= energy[opponent];
            currentExperience += experience[opponent];
        }

        return hours;
    }
```