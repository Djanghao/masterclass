# simple solution using loops | Typescript/Js and Rust NOOB

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants/solutions/2940614/](https://leetcode.com/problems/watering-plants/solutions/2940614/)

---

# Typescript Code
```
function wateringPlants(plants: number[], capacity: number): number {
    let currPos: number = -1; // start at the river
    let currWater: number = capacity;
    let steps: number = 0;
    for (let plant of plants){
        if (currWater >= plant){
            currWater -= plant;
            currPos += 1;
            steps += 1;
            continue;
        }
        steps += ((currPos+1)*2); // go back to the river (-1)
        currWater = capacity; // refill 
        currWater -= plant;
        currPos += 1;
        steps += 1;
    }
    return steps;
};
```

# Rust Code
```
impl Solution {
    pub fn watering_plants(plants: Vec<i32>, capacity: i32) -> i32 {
        let mut curr_water: i32 = capacity;
        let mut steps: i32 = 0;
        let mut curr_pos: i32 = -1;
        for i in 0..plants.len(){
            if (curr_water >= plants[i]){
                curr_water -= plants[i];
                steps += 1;
                curr_pos += 1;
                continue;
            }
            steps += (curr_pos+1)*2;
            curr_water = capacity;
            curr_water -= plants[i];
            steps += 1;
            curr_pos += 1;
        }
        return steps;
    }
}
```
OWL