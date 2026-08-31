# Minimum Distance in One Pass O(n)

**Author:** azeem_rosli
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/5179632/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/5179632/)

---

# Approach
To solve the problem, we track the distances between occurrences of each unique element to determine the maximum spread in the array. The rationale is that the spread of an element indicates how quickly it can propagate to make all array elements equal.

# Data Structures Used
- **Dictionary `distanceMap`:** Maps each unique number in `nums` to a `SetDistance` object which keeps track of various distances concerning the occurrences of the number.
- **Class `SetDistance`:** Maintains properties such as `Value`, `MaxDistance`, `LeftDistance`, `RightDistance`, and `MaxMidDistance`. These distances help in calculating how quickly a number can "spread" throughout the array.

# Steps
**1. Initialization:** Create a dictionary `distanceMap` to track distances for each unique number. Also, keep a `minDistance` object to store the number which can spread the fastest.

**2. Iteration Over Array:**
- For each element in `nums`, check if it is already in `distanceMap`.
    - If not, initialize a new `SetDistance` object with its index and set the maximum possible distance (i.e., array length minus one).
    - If the element is already present, update the distance measurements by calling the `Push` method of the `SetDistance` class.
- Update the `minDistance` if the current element can propagate faster (i.e., has a smaller maximum distance) compared to the previously recorded fastest.

**3. Calculate Result:** The result is derived from `minDistance.MaxDistance`. We determine how many seconds it would take for the element to propagate its value across its maximum distance.

# Efficiency
This approach efficiently computes the minimum seconds needed by focusing on the propagation of each number rather than trying to simulate the process. It leverages mathematical properties of distances between indices to ascertain the quickest spread.

# Edge Cases
If all elements are initially the same, no operation is needed, and the function immediately returns 0.

# Complexity
- Time complexity: $$O(n)$$
Due to the iteration over the entire array `nums` which contains `n` elements.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
Due to the `distanceMap` dictionary that stores a unique entry for each distinct element found in `nums`.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinimumSeconds(IList<int> nums)
    {
        Dictionary<int, SetDistance> distanceMap = [];
        SetDistance minDistance = new(0, 0, 0);
        int count = nums.Count;

        for (int i = 0; i < nums.Count; i++)
        {
            int maxDistance;
            if (!distanceMap.ContainsKey(nums[i]))
            {
                distanceMap[nums[i]] = new SetDistance(nums[i], i, count);
                maxDistance = count - 1;
            }
            else
                maxDistance = distanceMap[nums[i]].Push(i);

            if (minDistance.Value == 0 || (minDistance.Value != nums[i] && maxDistance < minDistance.MaxDistance))
                minDistance = distanceMap[nums[i]];
        }

        return ((int)(minDistance.MaxDistance - minDistance.MaxDistance % 2) / 2) + minDistance.MaxDistance % 2;
    }

    public class SetDistance(int val, int currentIndex, int arrayCount)
    {
        public int Value { get; } = val; //key
        private int PreviousIndex { get; set; } = currentIndex;
        private int LeftDistance { get; set; } = currentIndex; //distance from index 0 to the nearest element
        private int MaxMidDistance { get; set; } = - 1; //indicate non-distance value 
        private int RightDistance { get; set; } = arrayCount - 1 - currentIndex; //distance from index n-1 to the nearest element
        public int MaxDistance { get; internal set; } = arrayCount - 1;

        public int Push(int currentIndex)
        {
            int distance = currentIndex - PreviousIndex - 1; //-1 to exclude currentIndex
            RightDistance -= distance + 1; //+1 to regain minus one from distance
            PreviousIndex = currentIndex;
            MaxMidDistance = Math.Max(MaxMidDistance, distance);
            MaxDistance = Math.Max(MaxMidDistance, LeftDistance + RightDistance);
            return MaxDistance;
        }
    }
}
```