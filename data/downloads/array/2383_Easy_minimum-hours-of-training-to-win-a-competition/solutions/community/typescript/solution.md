# Simple TypeScript solution

**Author:** MM3y3r
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/5574486/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/5574486/)

---

# Code
```
function minNumberOfHours(
    initialEnergy: number,
    initialExperience: number,
    energy: number[],
    experience: number[]
): number {
    let ourExperience: number = initialExperience;
    let ourEnergy: number = initialEnergy;
    let hourTracker: number = 0;

    for (let i = 0; i < energy.length; i++) {
        if (energy[i] >= ourEnergy) {
            //train!
            while (energy[i] >= ourEnergy) {
                hourTracker++;
                ourEnergy++;
            }
        }
        if (experience[i] >= ourExperience) {
            //train!
            while (experience[i] >= ourExperience) {
                hourTracker++;
                ourExperience++;
            }
        }
        ourExperience += experience[i];
        ourEnergy -= energy[i];
    }

    return hourTracker;
};
```