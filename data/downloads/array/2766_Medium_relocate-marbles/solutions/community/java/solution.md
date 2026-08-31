# [C++/Java?Python] || Clean Code || Using Map

**Author:** Aditya00
**Votes:** 14
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/3737295/](https://leetcode.com/problems/relocate-marbles/solutions/3737295/)

---



# Code
```
class Solution {
public:
    // Function to relocate marbles based on moveFrom and moveTo vectors
    vector<int> relocateMarbles(vector<int>& nums, vector<int>& moveFrom, vector<int>& moveTo) {
        unordered_map<int, int> map; // Map to store the count of marbles

        // Count the marbles and store their count in the map
        for (int num : nums) {
            map[num] = map[num] + 1;
        }

        // Relocate marbles from moveFrom to moveTo
        for (int i = 0; i < moveFrom.size(); i++) {
            int numMarbles = map[moveFrom[i]]; // Get the count of marbles to be moved
            map.erase(moveFrom[i]); // Remove the marble from the original location
            map[moveTo[i]] = map[moveTo[i]] + numMarbles; // Add the marbles to the new location
        }

        vector<int> result; // Result vector to store the relocated marbles
        for (const auto& pair : map) {
            result.push_back(pair.first); // Add the marble number to the result vector
        }
        sort(result.begin(), result.end()); // Sort the result vector in ascending order

        return result; // Return the final result vector
    }
};

```
# Java
```
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public List<Integer> relocateMarbles(int[] nums, int[] moveFrom, int[] moveTo) {
        Map<Integer, Integer> map = new HashMap<>(); // Map to store the count of marbles

        // Count the marbles and store their count in the map
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        // Relocate marbles from moveFrom to moveTo
        for (int i = 0; i < moveFrom.length; i++) {
            int numMarbles = map.get(moveFrom[i]); // Get the count of marbles to be moved
            map.remove(moveFrom[i]); // Remove the marble from the original location
            map.put(moveTo[i], map.getOrDefault(moveTo[i], 0) + numMarbles); // Add the marbles to the new location
        }

        List<Integer> result = new ArrayList<>(); // Result list to store the relocated marbles
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            result.add(entry.getKey()); // Add the marble number to the result list
        }
        result.sort(null); // Sort the result list in ascending order

        return result; // Return the final result list
    }
}
```
# Python3
```
class Solution:
    def relocateMarbles(self, nums: List[int], moveFrom: List[int], moveTo: List[int]) -> List[int]:
        marbles = defaultdict(int)  # Dictionary to store the count of marbles

        # Count the marbles and store their count in the dictionary
        for num in nums:
            marbles[num] += 1

        # Relocate marbles from moveFrom to moveTo
        for i in range(len(moveFrom)):
            numMarbles = marbles[moveFrom[i]]  # Get the count of marbles to be moved
            del marbles[moveFrom[i]]  # Remove the marble from the original location
            marbles[moveTo[i]] += numMarbles  # Add the marbles to the new location

        result = sorted(marbles.keys())  # Get the sorted list of marble numbers

        return result  # Return the final result list
```