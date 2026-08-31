# City Skyline Solution

**Author:** user9202Yg
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-skyline-problem/solutions/5228029/](https://leetcode.com/problems/the-skyline-problem/solutions/5228029/)

---

# Intuition
Preform a linear scan of all import points from left to right

# Approach
Keep track of which building the scan is currently on, I wrote this as a building being "up" as we pass over it. Then simply get the max height of all buildings currently up and compare this max height(or 0 if no buildings are up) and check to see if this number is different from the previous height, if it is add that point to the output array.

# Code
```
function getSkyline(buildings: number[][]): number[][] {

    //Start by converting the input data into a simpler to understand data structure
    //Also create maps from X positions to the start and end of buildings
    const buildingMap: Record<string, {left: number, right: number, height: number}> = {}
    const pointToStartBuildingMap: Record<string, string[]> = {}
    const pointToEndBuildingMap: Record<string, string[]> = {}
    //Point of interests
    const unsortedPOI: Set<number> = new Set()
    for(const index in buildings){
        const [left, right, height] = buildings[index]
        buildingMap[index] = {left, right, height}
        unsortedPOI.add(right)
        unsortedPOI.add(left)

        if(!pointToStartBuildingMap[left]){
            pointToStartBuildingMap[left] = []
        }
        pointToStartBuildingMap[left].push(index)

        if(!pointToEndBuildingMap[right]){
            pointToEndBuildingMap[right] = []
        }
        pointToEndBuildingMap[right].push(index)
    }

    //Sorted Point of interests
    const POIs: number[] = [...unsortedPOI].sort((a,b)=>Number(a)-Number(b))

    const upBuildings: Set<string> = new Set()
    let currHeight = 0
    const output = []
    for(const x of POIs){
        //Upkeep on currently over buildings
        if(pointToStartBuildingMap[x])
            for(const building of pointToStartBuildingMap[x]){
                upBuildings.add(building)
            }
        if(pointToEndBuildingMap[x])
            for(const building of pointToEndBuildingMap[x]){
                upBuildings.delete(building)
            }

        //Get current max height
        let newHeight = 0
        for(const building of upBuildings){
            const height = buildingMap[building].height
            if(height > newHeight)
                newHeight = height
        }
        //Add it to the output if it is different
        if(newHeight != currHeight){
            output.push([x, newHeight])
            currHeight = newHeight
        }
    }
    return output
};
```