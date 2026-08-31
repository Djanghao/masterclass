# Simple and Easy to understand | Beats 95% | Python | CPP | Java

**Author:** 4ty7
**Votes:** 42
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5858069/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5858069/)

---

# Approach
The approach first eliminates duplicates from the array by converting it to a set and sorts the unique elements. Sorting helps to assign ranks starting from 1 for the smallest element. A dictionary is used to map each unique element to its rank. Then, the original array is updated by replacing each element with its corresponding rank from the dictionary. This ensures that the original order is preserved, and the ranks are assigned correctly. The intuition is that sorting the array allows us to assign ranks in increasing order, while the dictionary enables quick lookups to replace elements efficiently.

# Complexity
- Time complexity:
$$O(NLogN)$$

- Space complexity:
$$O(N)$$

# Code
```python3 []
class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        value_to_rank = {}  # Dictionary to store value-to-rank mapping
        sorted_unique_numbers = sorted(list(set(arr)))  # Remove duplicates and sort unique elements
        
        # Assign ranks to sorted unique elements
        for index in range(len(sorted_unique_numbers)): 
            value_to_rank[sorted_unique_numbers[index]] = index + 1
          
        # Replace each element in the original array with its rank
        for index in range(len(arr)): 
            arr[index] = value_to_rank[arr[index]]
        
        return arr  # Return the updated array
```
```cpp []
class Solution {
public:
    std::vector<int> arrayRankTransform(std::vector<int>& arr) {
        std::unordered_map<int, int> valueToRank;  // Map to store value-to-rank mapping
        std::vector<int> sortedUniqueNumbers = arr; 
        
        // Remove duplicates and sort
        std::sort(sortedUniqueNumbers.begin(), sortedUniqueNumbers.end());
        sortedUniqueNumbers.erase(std::unique(sortedUniqueNumbers.begin(), sortedUniqueNumbers.end()), sortedUniqueNumbers.end());
        
        // Assign ranks to sorted unique elements
        for (int i = 0; i < sortedUniqueNumbers.size(); i++) {
            valueToRank[sortedUniqueNumbers[i]] = i + 1;
        }

        // Replace each element in the original array with its rank
        for (int i = 0; i < arr.size(); i++) {
            arr[i] = valueToRank[arr[i]];
        }

        return arr;  // Return the updated array
    }
};

```
```java []
import java.util.*;

class Solution {
    public int[] arrayRankTransform(int[] arr) {
        Map<Integer, Integer> valueToRank = new HashMap<>();  // Map to store value-to-rank mapping
        int[] sortedUniqueNumbers = Arrays.stream(arr).distinct().sorted().toArray();  // Remove duplicates and sort
        
        // Assign ranks to sorted unique elements
        for (int i = 0; i < sortedUniqueNumbers.length; i++) {
            valueToRank.put(sortedUniqueNumbers[i], i + 1);
        }

        // Replace each element in the original array with its rank
        for (int i = 0; i < arr.length; i++) {
            arr[i] = valueToRank.get(arr[i]);
        }

        return arr;  // Return the updated array
    }
}


```