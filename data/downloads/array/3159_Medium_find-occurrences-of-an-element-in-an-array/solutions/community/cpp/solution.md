# Finding Indexes of Specific Occurrences

**Author:** fahad_Mubeen
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5208055/](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5208055/)

---

# Approach
1. *Count and Map Occurrences of x:*
    - The code iterates through the nums array to count occurrences
    of the integer x.
    - For each occurrence of x, it maps the occurrence count to the corresponding index in nums.
    - This is done using an unordered map (mp), where the key is the occurrence count and the value is the index of that occurrence.

2. *Prepare the Query Results:*

    - The code then processes each element in the queries array.
    - For each query, it checks if the queries[i]th occurrence of x exists in the map.
    - If it exists, the corresponding index is retrieved from the map and placed into the queries array. If not, -1 is placed instead.
    
3. *Finally, the modified queries array, which now contains the answers to all queries, is returned.*

# Complexity
- Time complexity: O(nums.length + queries.length)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(nums.length)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    vector<int> occurrencesOfElement(vector<int>& nums, vector<int>& queries, int x) {
        unordered_map<int, int> mp;  // Map to store occurrence count and corresponding index
        int count = 0;  // Counter for occurrences of x
        int n = nums.size();  // Size of the nums array

        // Traverse the nums array to count occurrences of x
        for(int i = 0; i < n; i++) {
            if(nums[i] == x) {
                count++;  // Increment count when x is found
                mp[count] = i;  // Map the current count to the index i
            }
        }

        // Process each query to find the index of the queries[i]th occurrence of x
        for(int i = 0; i < queries.size(); i++) {
            if(mp.find(queries[i]) != mp.end()) {
                // If the occurrence exists in the map, update queries[i] with the index
                queries[i] = mp[queries[i]];
            } else {
                // If the occurrence does not exist, update queries[i] with -1
                queries[i] = -1;
            }
        }

        // Return the modified queries array containing the results
        return queries;
    }
};

```
```Java []
class Solution {
    public int[] occurrencesOfElement(int[] nums, int[] queries, int x) {
        // Map to store occurrence count and corresponding index
        HashMap<Integer, Integer> mp = new HashMap<>();
        int count = 0;  // Counter for occurrences of x
        int n = nums.length;  // Size of the nums array

        // Traverse the nums array to count occurrences of x
        for (int i = 0; i < n; i++) {
            if (nums[i] == x) {
                count++;  // Increment count when x is found
                mp.put(count, i);  // Map the current count to the index i
            }
        }

        // Process each query to find the index of the queries[i]th occurrence of x
        for (int i = 0; i < queries.length; i++) {
            if (mp.containsKey(queries[i])) {
                // If the occurrence exists in the map, update queries[i] with the index
                queries[i] = mp.get(queries[i]);
            } else {
                // If the occurrence does not exist, update queries[i] with -1
                queries[i] = -1;
            }
        }

        // Return the modified queries array containing the results
        return queries;
    }
}
```
# **Example Walkthrough:**
*Consider an example:*

- nums = [1, 2, 3, 2, 4, 2, 5]
- queries = [1, 2, 3, 4]
- x = 2

1. Count and Map Occurrences:
---


    Initialize an unordered map mp.
    Traverse nums:
    At nums[1] = 2: Count = 1, Map: {1: 1}
    At nums[3] = 2: Count = 2, Map: {1: 1, 2: 3}
    At nums[5] = 2: Count = 3, Map: {1: 1, 2: 3, 3: 5}

2. Prepare the Query Results:

---


    For each query in queries:
    Query 1: Found in map, result is 1
    Query 2: Found in map, result is 3
    Query 3: Found in map, result is 5
    Query 4: Not found in map, result is -1
    Updated queries array: [1, 3, 5, -1]

Return the Results:

---


    The modified queries array [1, 3, 5, -1] is returned as the final answer.
