# ✅Beats 100% || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 107
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/3654693/](https://leetcode.com/problems/find-the-highest-altitude/solutions/3654693/)

---

# Intuition:
To find the highest altitude, we need to calculate the cumulative sum of the altitude gains at each step. Starting from the initial altitude of 0, we keep adding the gain at each step to the current altitude. The highest altitude reached during this process is the answer we are looking for.

# Approach:
1. Initialize two variables: `maxAltitude` and `currentAltitude` to keep track of the maximum altitude encountered so far and the current altitude, respectively. Set both variables to 0.
2. Iterate over the `gain` vector, starting from the first element.
3. At each step, update the `currentAltitude` by adding the gain of the current step.
4. Compare the `currentAltitude` with the `maxAltitude`. If it is greater, update `maxAltitude` to the new value.
5. Repeat steps 3-4 for all elements in the `gain` vector.
6. Once the iteration is complete, `maxAltitude` will hold the highest altitude reached.
7. Return the value of `maxAltitude` as the result.

This approach ensures that we keep track of the maximum altitude encountered during the traversal and avoids unnecessary modifications to the input vector. By iterating over the `gain` vector only once, the solution is efficient and provides the correct result.
# Code

```C++ []
class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int maxAltitude = 0;
        int currentAltitude = 0;
        
        for (int i = 0; i < gain.size(); i++) {
            currentAltitude += gain[i];
            maxAltitude = max(maxAltitude, currentAltitude);
        }
        
        return maxAltitude;
    }
};
```
```Java []
class Solution {
    public int largestAltitude(int[] gain) {
        int maxAltitude = 0;
        int currentAltitude = 0;
        
        for (int i = 0; i < gain.length; i++) {
            currentAltitude += gain[i];
            maxAltitude = Math.max(maxAltitude, currentAltitude);
        }
        
        return maxAltitude;
    }
}
```
```Python3 []
class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        maxAltitude = 0
        currentAltitude = 0
        
        for g in gain:
            currentAltitude += g
            maxAltitude = max(maxAltitude, currentAltitude)
        
        return maxAltitude
```

![CUTE_CAT.png](./images/0.png)


**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**

