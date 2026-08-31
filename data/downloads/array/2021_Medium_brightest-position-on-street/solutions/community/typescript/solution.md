# Typescript | 100% | Line Sweep | With Easy To Understand Comments

**Author:** nicolich
**Votes:** 0
**Link:** [https://leetcode.com/problems/brightest-position-on-street/solutions/1496338/](https://leetcode.com/problems/brightest-position-on-street/solutions/1496338/)

---

```
function brightestPosition(lights: number[][]): number {
    /* Create a map of all the positions of where the brightness changes.
     * Those positions are at the edges of the light cones: */
    const lightChangeMap: Map<number, number> = new Map();
    
    for (const [position, range] of lights) {
        const increasePosition = position - range;
        const decreasePosition = position + range + 1;
        
        if (!lightChangeMap.has(increasePosition)) {
            lightChangeMap.set(increasePosition, 1);
        } else {
            lightChangeMap.set(increasePosition, lightChangeMap.get(increasePosition) + 1);
        }
        
        if (!lightChangeMap.has(decreasePosition)) {
            lightChangeMap.set(decreasePosition, -1);
        } else {
            lightChangeMap.set(decreasePosition, lightChangeMap.get(decreasePosition) - 1);
        }
    }
    
    /* Sort all those positions in order, so that we can sweep from left to right: */
    const lightChanges = [...lightChangeMap.entries()].sort(([lhsPosition, lhsValue], [rhsPosition, rhsValue]) => lhsPosition - rhsPosition);

    /* Basic line sweep algorithm: */
    let maxBrightnessPosition = 0;
    let maxBrightness = 0;
    
    let brightness = 0; // Keeps track of the current brightness as we sweep across the changes
    
    for (const [changePosition, change] of lightChanges) {
        brightness += change;
        /* Check if we hit a brighter position: */
        if (brightness > maxBrightness) {
            maxBrightness = brightness;
            maxBrightnessPosition = changePosition;
        } 
    }
    
    return maxBrightnessPosition;
};
```