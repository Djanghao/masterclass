# ✅Beats 100% - Explained with [ Video ] - HashSet - C++/Java/Python/JS  - Visualized

**Author:** lancertech6
**Votes:** 113
**Link:** [https://leetcode.com/problems/destination-city/solutions/4406251/](https://leetcode.com/problems/destination-city/solutions/4406251/)

---

![Screenshot 2023-12-15 074825.png](./images/0.png)


# YouTube Video Explanation:

[https://youtu.be/vaXdR0lDW6A](https://youtu.be/vaXdR0lDW6A)
<!-- **If you want a video for this question please write in the comments** -->

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 900 Subscribers*
*Current Subscribers: 799*

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves finding the destination city, which is the city without any outgoing path. We can approach this problem by first identifying all cities with outgoing paths. Then, among the destination cities, we find the one that has no outgoing path.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a HashSet `cities` to store all cities with outgoing paths.
2. Iterate through the paths and add the starting city of each path to the `cities` set.
3. Iterate through the paths again and check the destination city of each path. If the destination city is not in the `cities` set, it means there is no outgoing path from that city, so return it as the destination city.

# Complexity
- Time complexity: The time complexity is `O(n)` because we iterate through the paths twice.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space complexity is `O(n)` for storing the set of cities.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public String destCity(List<List<String>> paths) {
        Set<String> cities = new HashSet<>(); 
        for (List<String> path : paths) {
            cities.add(path.get(0)); 
        }
        
        for (List<String> path : paths) {
            String dest = path.get(1); 
            if (!cities.contains(dest)) {
                return dest; 
            }
        }
        return "";
    }
}
```
```C++ []
class Solution {
public:
    string destCity(vector<vector<string>>& paths) {
        unordered_set<string> cities;

        // Collect outgoing cities
        for (const auto& path : paths) {
            cities.insert(path[0]);
        }

        // Find destination city with no outgoing path
        for (const auto& path : paths) {
            const std::string& dest = path[1];
            if (cities.find(dest) == cities.end()) {
                return dest;
            }
        }

        return "";
    }
};
```
```Python []
class Solution(object):
    def destCity(self, paths):
        cities = set()

        # Collect outgoing cities
        for path in paths:
            cities.add(path[0])

        # Find destination city with no outgoing path
        for path in paths:
            dest = path[1]
            if dest not in cities:
                return dest

        return ""
        
```
```JavaScript []
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const cities = new Set();

        // Collect outgoing cities
        for (const path of paths) {
            cities.add(path[0]);
        }

        // Find destination city with no outgoing path
        for (const path of paths) {
            const dest = path[1];
            if (!cities.has(dest)) {
                return dest;
            }
        }

        return "";
};
```
![upvote.png](./images/1.png)
