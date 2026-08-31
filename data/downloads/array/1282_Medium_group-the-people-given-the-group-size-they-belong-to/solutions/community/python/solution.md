# Easy To Understand | Beginner Friendly | Best Approach | Line By Line Explanation | Java | Python |

**Author:** Pratikk_Rathod
**Votes:** 33
**Link:** [https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/4029972/](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/4029972/)

---

# Intuition
The problem involves grouping people based on their specified group sizes, ensuring that each person appears in exactly one group.

# Approach
- We use a defaultdict called group_mapping to map group sizes to lists of people.
- We iterate through the groupSizes list, adding each person to the corresponding group size.
- When a group is complete (i.e., its size equals the specified group size), we add it to the result and remove it from the mapping.
- The result contains the groups of people, and we return it as the answer.
# Complexity

- Time complexity: $$O(n)$$, where n is the number of people, as we iterate through the groupSizes list once.
- Space complexity: $$O(n)$$, as we use the group_mapping dictionary to store the groups, and in the worst case, it may contain n entries.

# Code
# Please Upvote If U Like!!!

# Python
```
from collections import defaultdict

class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        # Initialize an empty list to store the final result.
        result = []
        
        # Create a defaultdict to map group sizes to lists of people.
        group_mapping = defaultdict(list)

        # Iterate through the groupSizes list.
        for i, size in enumerate(groupSizes):
            # Append the person's index to the corresponding group size in the mapping.
            group_mapping[size].append(i)
            
            # If the size of the group equals the group size, add it to the result and remove it from the mapping.
            if len(group_mapping[size]) == size:
                result.append(group_mapping.pop(size))
        
        # Return the final list of groups.
        return result
#Please Upvote If U Like!!!
```
# Java
```
class Solution {
    public List<List<Integer>> groupThePeople(int[] groupSizes) {
        // Create a HashMap to map group sizes to lists of people.
        HashMap<Integer, List<Integer>> groupMapping = new HashMap<Integer, List<Integer>>();
        
        // Initialize a list to store the final result.
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        
        // Iterate through the groupSizes array.
        for (int i = 0; i < groupSizes.length; i++) {
            // Get the list of people for the current group size from the mapping.
            List<Integer> currentGroup = groupMapping.getOrDefault(groupSizes[i], new ArrayList<Integer>());
            
            // Check if the current group is full (size matches the specified group size).
            if (currentGroup.size() == groupSizes[i]) {
                // If the group is full, add it to the result and create a new empty group.
                result.add(currentGroup);
                currentGroup = new ArrayList<Integer>();
            }
            
            // Add the current person (index 'i') to the current group.
            currentGroup.add(i);
            
            // Update the mapping with the current group.
            groupMapping.put(groupSizes[i], currentGroup);
        }
        
        // After processing all people, add the remaining groups to the result.
        for (int size : groupMapping.keySet()) {
            result.add(groupMapping.get(size));
        }
        
        // Return the final list of groups.
        return result;
    }
}
```
# C++
```
class Solution {
public:
    vector<vector<int>> groupThePeople(vector<int>& groupSizes) {
        // Create an unordered_map to map group sizes to lists of people's indices.
        unordered_map<int, vector<int>> groupMap;

        // Iterate through the groupSizes vector.
        for (int i = 0; i < groupSizes.size(); i++) {
            // Add the current person's index to the corresponding group size in the map.
            groupMap[groupSizes[i]].push_back(i);
        }

        // Initialize a vector to store the final result.
        vector<vector<int>> result;

        // Iterate through the entries in the groupMap.
        for (auto entry : groupMap) {
            int j = 0;

            // While there are remaining people in this group size.
            while (j < entry.second.size()) {
                vector<int> temp;

                // Create a group of size 'entry.first' and add people to it.
                for (int x = 0; x < entry.first; x++) {
                    int index = entry.second[j];
                    temp.push_back(index);
                    j++;
                }

                // Add the group to the final result.
                result.push_back(temp);
            }
        }

        // Return the final list of groups.
        return result;
    }
};
```
