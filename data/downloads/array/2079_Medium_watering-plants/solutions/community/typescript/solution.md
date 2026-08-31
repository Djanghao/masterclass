# Java || Python || TS || Simple Array solution

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/watering-plants/solutions/4771912/](https://leetcode.com/problems/watering-plants/solutions/4771912/)

---

# Complexity
- Time complexity: **O(N)**

- Space complexity: **O(1)**
# Code
```java []
class Solution {
    public int wateringPlants(int[] plants, int capacity) {
        int ans = 0;
        int vol = capacity;

        for (int i = 0; i < plants.length; i++) {
            int cur = plants[i];
            boolean isEnoughWater = cur <= vol;
            ans += (isEnoughWater ? 0 : 2) * i + 1;
            vol = (isEnoughWater ? vol : capacity) - cur;
        }

        return ans;
    }
}
```
```python []
class Solution:
    def wateringPlants(self, plants: List[int], capacity: int) -> int:
        ans = 0
        vol = capacity

        for i, cur in enumerate(plants):
            isEnoughWater = cur <= vol
            ans += (0 if isEnoughWater else 2) * i + 1
            vol = (vol if isEnoughWater else capacity) - cur

        return ans
```
```typescript []
function wateringPlants(plants: number[], capacity: number): number {
    let ans = 0
    let vol = capacity

    for (let i = 0; i < plants.length; i++) {
        const cur = plants[i]
        const isEnoughWater = cur <= vol
        ans += (isEnoughWater ? 0 : 2) * i + 1
        vol = (isEnoughWater ? vol : capacity) - cur
    }

    return ans
};
```