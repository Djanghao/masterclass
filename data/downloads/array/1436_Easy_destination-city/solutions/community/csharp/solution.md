# ✅ Navigating Urban Labyrinths: Elegant Solution to Find the Destination City 🔥

**Author:** ilxamovic
**Votes:** 11
**Link:** [https://leetcode.com/problems/destination-city/solutions/4406615/](https://leetcode.com/problems/destination-city/solutions/4406615/)

---

# Description

## Intuition
The problem requires finding the destination city, which is the city without any outgoing path to another city. The graph is guaranteed to form a line without any loops.

## Approach
The solution uses a dictionary (`check`) to keep track of whether a city is an "out" city (has an outgoing path) or an "in" city (has an incoming path). It iterates through the given paths, updating the status of each city accordingly. Finally, it looks for the city with an incoming path, which is the destination city.

## Complexity
- **Time complexity:** O(n), where n is the number of paths. The algorithm iterates through the given paths once.
- **Space complexity:** O(n), where n is the number of paths. The space is used to store the status of each city in the dictionary.

## Code
```csharp []
public class Solution {
    public string DestCity(IList<IList<string>> paths)
    {
        Dictionary<string, string> check = new Dictionary<string, string>();

        foreach(var path in paths)
        {
            check[path[0]] = "out";
            if (!check.ContainsKey(path[1]))
            {
                check[path[1]] = "in";
            }
        }

        foreach (var item in check.Keys)
        {
            if (check[item] == "in") return item;
        }

        return "";
    }
}
```
```java []
public class Solution {
    public String destCity(List<List<String>> paths) {
        HashMap<String, String> check = new HashMap<>();

        for (List<String> path : paths) {
            check.put(path.get(0), "out");
            if (!check.containsKey(path.get(1))) {
                check.put(path.get(1), "in");
            }
        }

        for (String item : check.keySet()) {
            if ("in".equals(check.get(item))) {
                return item;
            }
        }

        return "";
    }
}
```
```python []
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        check = {}

        for path in paths:
            check[path[0]] = "out"
            if path[1] not in check:
                check[path[1]] = "in"

        for item in check:
            if check[item] == "in":
                return item

        return ""
```

![image name](https://i.imgur.com/JdL5kBI.gif)

- Please upvote me !!!