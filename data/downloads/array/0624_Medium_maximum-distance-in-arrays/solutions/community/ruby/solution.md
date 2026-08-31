# Two Pointer + Greedy Approach | Beats 95% | 6 Languages

**Author:** nagastu02
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5643213/](https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5643213/)

---

# Intuition
The problem involves finding the maximum distance between elements taken from two different sorted arrays. Since the arrays are sorted, the maximum distance will likely be between the smallest element in one array and the largest element in another. By iterating through the arrays, we can track the global minimum and maximum values encountered so far and use them to calculate potential maximum distances.

# Approach
1. Initialize: Start by capturing the minimum and maximum values from the first array.
2. Iterate: For each subsequent array, calculate the possible maximum distances by comparing its minimum and maximum values with the global minimum and maximum.
3. Update: Continuously update the global minimum and maximum values.
4. Result: The highest distance computed during the iteration is the desired result.

# Complexity
- Time complexity: O(n), where n is the number of arrays. Each array is processed in constant time.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) because no additional space proportional to the input size is used.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int maxDistance(List<List<Integer>> arrays) {
        int minVal = arrays.get(0).get(0);
        int maxVal = arrays.get(0).get(arrays.get(0).size() - 1);
        int maxDistance = 0;

        for (int i = 1; i < arrays.size(); i++) {
            List<Integer> currentArray = arrays.get(i);
            int currentMin = currentArray.get(0);
            int currentMax = currentArray.get(currentArray.size() - 1);

            maxDistance = Math.max(maxDistance, Math.abs(currentMax - minVal));
            maxDistance = Math.max(maxDistance, Math.abs(maxVal - currentMin));

            minVal = Math.min(minVal, currentMin);
            maxVal = Math.max(maxVal, currentMax);
        }

        return maxDistance;
    }
}
```
```C++ []
class Solution {
public:
    int maxDistance(vector<vector<int>>& arrays) {
        int minVal = arrays[0][0];
        int maxVal = arrays[0].back();
        int maxDistance = 0;

        for (int i = 1; i < arrays.size(); i++) {
            int currentMin = arrays[i][0];
            int currentMax = arrays[i].back();

            maxDistance = max(maxDistance, abs(currentMax - minVal));
            maxDistance = max(maxDistance, abs(maxVal - currentMin));

            minVal = min(minVal, currentMin);
            maxVal = max(maxVal, currentMax);
        }

        return maxDistance;
    }
};
```
```Python []
class Solution:
    def maxDistance(self, arrays: List[List[int]]) -> int:
        min_val = arrays[0][0]
        max_val = arrays[0][-1]
        max_distance = 0

        for i in range(1, len(arrays)):
            current_min = arrays[i][0]
            current_max = arrays[i][-1]

            max_distance = max(max_distance, abs(current_max - min_val))
            max_distance = max(max_distance, abs(max_val - current_min))

            min_val = min(min_val, current_min)
            max_val = max(max_val, current_max)

        return max_distance
```
```Javascript []
var maxDistance = function(arrays) {
    let minVal = arrays[0][0];
    let maxVal = arrays[0][arrays[0].length - 1];
    let maxDistance = 0;

    for (let i = 1; i < arrays.length; i++) {
        let currentMin = arrays[i][0];
        let currentMax = arrays[i][arrays[i].length - 1];

        maxDistance = Math.max(maxDistance, Math.abs(currentMax - minVal));
        maxDistance = Math.max(maxDistance, Math.abs(maxVal - currentMin));

        minVal = Math.min(minVal, currentMin);
        maxVal = Math.max(maxVal, currentMax);
    }

    return maxDistance;
};
```
```C []
int maxDistance(int** arrays, int arraysSize, int* arraysColSize){
    int minVal = arrays[0][0];
    int maxVal = arrays[0][arraysColSize[0] - 1];
    int maxDistance = 0;

    for (int i = 1; i < arraysSize; i++) {
        int currentMin = arrays[i][0];
        int currentMax = arrays[i][arraysColSize[i] - 1];

        if (abs(currentMax - minVal) > maxDistance)
            maxDistance = abs(currentMax - minVal);
        if (abs(maxVal - currentMin) > maxDistance)
            maxDistance = abs(maxVal - currentMin);

        if (currentMin < minVal)
            minVal = currentMin;
        if (currentMax > maxVal)
            maxVal = currentMax;
    }

    return maxDistance;
}
```
```Ruby []
class Solution
    def max_distance(arrays)
        min_val = arrays[0][0]
        max_val = arrays[0][-1]
        max_distance = 0

        arrays[1..-1].each do |current_array|
            current_min = current_array[0]
            current_max = current_array[-1]

            max_distance = [max_distance, (current_max - min_val).abs].max
            max_distance = [max_distance, (max_val - current_min).abs].max

            min_val = [min_val, current_min].min
            max_val = [max_val, current_max].max
        end

        return max_distance
    end
end
```


# Sugesstion
If you have any question please ask in the chat. 
if you find it helpful please upvote
Enjoy Coding :)
