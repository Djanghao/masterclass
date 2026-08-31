# C++ solution :

**Author:** kartikeysingh907
**Votes:** 17
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5583254/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5583254/)

---


# Approach
 **Initialization of Distance Array (distances):**

- We create a vector distances of size n, initialized to zero.
We populate this vector such that distances[i] represents the initial distance from city 0 to city i. Since the initial roads are from city i to city i+1, the distance is just the index value (i.e., distances[i] = i).
**Set of Valid Cities (validCities):**

- We use a set validCities to keep track of which cities are valid endpoints for the shortest path.
Initially, all cities are valid, so we insert all city indices into the set.

**Processing Each Query:**

- We iterate over each query in queries.
For each query, we extract startCity (l) and endCity (rt).
We find the lower bound in the validCities set for startCity + 1 and the upper bound for endCity.
We erase all cities in the range from lowerBound to upperBound (not inclusive) from the validCities set. This represents adding a new road and thus invalidating the existing direct paths.
The size of the validCities set minus one gives the length of the shortest path from city 0 to city n-1 after this query.


**Store Results:**

- For each query, we store the resulting shortest path length in the result vector.
Finally, we return the result vector containing the shortest path lengths after each query.


![image.png](./images/0.png)

# Code
```
class Solution {
public:
    vector<int> shortestDistanceAfterQueries(int n, vector<vector<int>>& queries) {
         // Distance array to keep track of the initial distances from city 0 to city i
    vector<int> distances(n, 0);
    vector<int> result;
    set<int> validCities;
    
    // Set to keep track of valid positions (cities) to be checked after queries
    
    for (int i = 0; i < n; ++i) {
        validCities.insert(i);
    }
    
    
    for (const auto& query : queries) {
        int startCity = query[0];
        int endCity = query[1];
        
        // Find the lower bound (first element not less than startCity + 1)
        auto lowerBound = validCities.lower_bound(startCity + 1);
        // Find the upper bound (first element not less than endCity)
        auto upperBound = validCities.lower_bound(endCity);
        
        // Remove the range of cities from lowerBound to upperBound (not inclusive)
        validCities.erase(lowerBound, upperBound);
        
        // The size of validCities set minus one gives the length of the shortest path
        result.push_back(validCities.size() - 1);
    }
    
    return result;
    }
};
```