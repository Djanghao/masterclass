# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS - Count Frequency & Degree

**Author:** lancertech6
**Votes:** 110
**Link:** [https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5380283/](https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5380283/)

---

![Screenshot 2024-06-28 073439.png](./images/0.png)

# YouTube Video Explanation:

<!-- ### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail. -->

**If you want a video for this question please write in the comments**


<!-- https://youtu.be/rCfTaQDopBY -->


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2400 Subscribers*
*Current Subscribers: 2329*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To maximize the total importance of all roads, the cities with the highest degree (i.e., the cities that are connected to the most other cities) should be assigned the highest values. This ensures that the most frequently used roads contribute the highest possible sums to the total importance.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Calculate Degrees**: First, calculate the degree (number of connections) of each city.
2. **Assign Values**: Sort cities based on their degrees in descending order and assign the highest values to the cities with the highest degrees.
3. **Calculate Importance**: Compute the total importance of the roads based on the assigned values.

# Complexity
- **Time Complexity**:
  - Calculating degrees takes \\(O(m)\\), where \\(m\\) is the number of roads.
  - Sorting the cities based on degrees takes \\(O(n log n)\\), where \\(n\\) is the number of cities.
  - Assigning values and calculating the total importance takes \\(O(m)\\).

  Thus, the overall time complexity is \\(O(n log n + m)\\).

- **Space Complexity**:
  - Storing degrees and the sorted list of cities takes \\(O(n)\\).


# Step by Step Explanation

#### Step 1: Calculate Degrees of Each City
First, calculate the degree (number of connections) of each city.

| City | Degree Calculation                      | Final Degree |
|------|-----------------------------------------|--------------|
| 0    | Connected to 1, 2                       | 2            |
| 1    | Connected to 0, 2, 3                    | 3            |
| 2    | Connected to 1, 3, 0, 4                 | 4            |
| 3    | Connected to 1, 2                       | 2            |
| 4    | Connected to 2                          | 1            |

#### Step 2: Sort Cities by Degree
Next, sort the cities by their degree in descending order. Assign the highest value to the city with the highest degree.

| City | Degree | Sorted by Degree | Value Assignment |
|------|--------|------------------|------------------|
| 2    | 4      | 2                | 5                |
| 1    | 3      | 1                | 4                |
| 0    | 2      | 0                | 3                |
| 3    | 2      | 3                | 2                |
| 4    | 1      | 4                | 1                |

#### Step 3: Assign Values and Calculate Importance
Finally, assign values to each city based on the sorted order and calculate the importance of each road.

| Road  | Cities Involved       | Importance Calculation  | Importance Value |
|-------|------------------------|-------------------------|------------------|
| [0,1] | 3 (City 0) + 4 (City 1)| 3 + 4 = 7               | 7                |
| [1,2] | 4 (City 1) + 5 (City 2)| 4 + 5 = 9               | 9                |
| [2,3] | 5 (City 2) + 2 (City 3)| 5 + 2 = 7               | 7                |
| [0,2] | 3 (City 0) + 5 (City 2)| 3 + 5 = 8               | 8                |
| [1,3] | 4 (City 1) + 2 (City 3)| 4 + 2 = 6               | 6                |
| [2,4] | 5 (City 2) + 1 (City 4)| 5 + 1 = 6               | 6                |

#### Total Importance Calculation
- Sum of all importance values: `7 + 9 + 7 + 8 + 6 + 6 = 43`


### Explanation Table
The following table summarizes the entire process:

| Step                     | Details                                             |
|--------------------------|-----------------------------------------------------|
| Calculate Degrees        | Calculate degree for each city                      |
| Sort Cities by Degree    | Sort cities in descending order of degree           |
| Assign Values            | Assign values from highest to lowest based on degree|
| Calculate Importance     | Calculate road importance and sum them up           |

---

# Code
```java []
import java.util.*;

class Solution {
    public long maximumImportance(int n, int[][] roads) {
        // Array to store the degree of each city
        int[] degree = new int[n];
        
        // Calculate the degree of each city
        for (int[] road : roads) {
            degree[road[0]]++;
            degree[road[1]]++;
        }
        
        // Create a list of cities and sort by degree
        Integer[] cities = new Integer[n];
        for (int i = 0; i < n; i++) {
            cities[i] = i;
        }
        Arrays.sort(cities, new Comparator<Integer>() {
            public int compare(Integer a, Integer b) {
                return Integer.compare(degree[b], degree[a]);
            }
        });
        
        // Assign values to cities starting from the highest degree
        long totalImportance = 0;
        for (int i = 0; i < n; i++) {
            totalImportance += (long) (n - i) * degree[cities[i]];
        }
        
        return totalImportance;
    }
}
```
```C++ []
class Solution {
public:
    long long maximumImportance(int n, vector<vector<int>>& roads) {
        vector<int> degree(n, 0); // Array to store the degree of each city
        
        // Calculate the degree of each city
        for (const auto& road : roads) {
            degree[road[0]]++;
            degree[road[1]]++;
        }
        
        // Create a list of cities and sort by degree
        vector<int> cities(n);
        for (int i = 0; i < n; i++) {
            cities[i] = i;
        }
        sort(cities.begin(), cities.end(), [&](int a, int b) {
            return degree[a] > degree[b];
        });
        
        // Assign values to cities starting from the highest degree
        long long totalImportance = 0;
        for (int i = 0; i < n; i++) {
            totalImportance += (long long)(n - i) * degree[cities[i]];
        }
        
        return totalImportance;
    }
};
```
```Python []
class Solution(object):
    def maximumImportance(self, n, roads):
        degree = [0] * n
        
        # Calculate the degree of each city
        for road in roads:
            degree[road[0]] += 1
            degree[road[1]] += 1
        
        # Create a list of cities and sort by degree
        cities = list(range(n))
        cities.sort(key=lambda x: -degree[x])
        
        # Assign values to cities starting from the highest degree
        total_importance = 0
        for i in range(n):
            total_importance += (n - i) * degree[cities[i]]
        
        return total_importance
        
```
```JavaScript []
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    let degree = new Array(n).fill(0);
    
    // Calculate the degree of each city
    for (const road of roads) {
        degree[road[0]]++;
        degree[road[1]]++;
    }
    
    // Create a list of cities and sort by degree
    let cities = Array.from({length: n}, (_, i) => i);
    cities.sort((a, b) => degree[b] - degree[a]);
    
    // Assign values to cities starting from the highest degree
    let totalImportance = 0;
    for (let i = 0; i < n; i++) {
        totalImportance += (n - i) * degree[cities[i]];
    }
    
    return totalImportance;
};
```
![upvote.png](./images/1.png)
