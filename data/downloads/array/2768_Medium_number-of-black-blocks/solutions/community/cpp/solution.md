# [C++/Java?Python] || Clean Code || Using Map

**Author:** Aditya00
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-black-blocks/solutions/3737148/](https://leetcode.com/problems/number-of-black-blocks/solutions/3737148/)

---


# Code
```
class Solution {
public:
    vector<long long> countBlackBlocks(int m, int n, vector<vector<int>>& coordinates) {
        unordered_map<long long, int> countMap; // Map to store the count of black blocks
        vector<long long> res(5); // Result vector to store the final counts
        
        for (vector<int>& coor : coordinates) {
            int x = coor[0], y = coor[1];
            for (int dx = 0; dx <= 1; dx++) {
                for (int dy = 0; dy <= 1; dy++) {
                    if (x - dx >= 0 && y - dy >= 0 && x - dx < m - 1 && y - dy < n - 1) {
                        // Calculate the key for the map using the coordinates
                        long long key = static_cast<long long>(x - dx) * n + y - dy;
                        countMap[key] = countMap[key] + 1; // Increment the count of black blocks for the key
                    }
                }
            }
        }

        // Iterate over the countMap and update the result vector
        for (auto count : countMap) {
            res[count.second]++; // Increment the count in the result vector at the corresponding index
        }
        
        int sum = accumulate(res.begin(), res.end(), 0LL); // Calculate the sum of all counts
        res[0] = 1LL * (m - 1) * (n - 1) - sum; // Calculate the count of white blocks and store it at index 0

        return res; // Return the final result vector
    }
};

```
# Java
```
import java.util.*;

class Solution {
    public long[] countBlackBlocks(int m, int n, int[][] coordinates) {
        Map<Long, Integer> countMap = new HashMap<>(); // Map to store the count of black blocks
        List<Long> res = new ArrayList<>(5); // Result list to store the final counts

        for (int[] coor : coordinates) {
            int x = coor[0];
            int y = coor[1];

            for (int dx = 0; dx <= 1; dx++) {
                for (int dy = 0; dy <= 1; dy++) {
                    if (x - dx >= 0 && y - dy >= 0 && x - dx < m - 1 && y - dy < n - 1) {
                        // Calculate the key for the map using the coordinates
                        long key = (long) (x - dx) * n + y - dy;
                        countMap.put(key, countMap.getOrDefault(key, 0) + 1); // Increment the count of black blocks for the key
                    }
                }
            }
        }

        // Initialize the result array
        for (int i = 0; i < 5; i++) {
            res.add(0L);
        }

        // Iterate over the countMap and update the result list
        for (Map.Entry<Long, Integer> entry : countMap.entrySet()) {
            int count = entry.getValue();
            res.set(count, res.get(count) + 1); // Increment the count in the result list at the corresponding index
        }

        long sum = 0;
        for (long count : res) {
            sum += count;
        }

        res.set(0, 1L * (m - 1) * (n - 1) - sum); // Calculate the count of white blocks and store it at index 0

        // Convert the result list to an array
        long[] resultArray = new long[res.size()];
        for (int i = 0; i < res.size(); i++) {
            resultArray[i] = res.get(i);
        }

        return resultArray; // Return the final result array
    }
}


```
# Python
```
```