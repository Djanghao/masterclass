# Tracking Distinct Colors Post Each Iteration

**Author:** fahad_Mubeen
**Votes:** 20
**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5208736/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5208736/)

---

# Intuition
1. Track Ball Colors: Use mp(map) to keep track of the current color of each ball.
2. Count Color Occurrences: Use st(map) to maintain the count of each color.
3. Distinct Colors: The number of **distinct keys** in st gives the number of distinct colors at any point.
4. Update and Query Efficiently: Update color counts and determine the number of distinct colors in constant time for each query.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
To solve this problem, you need to:
---
    1. Track the current color of each ball.
    2. Maintain the count of each color currently applied to the balls.
    3. Determine the number of distinct colors after each query.

Data Structures:
---
1. unordered_map<int, int> mp: This map (mp) keeps track of the current color of each ball. The key is the ball number, and the value is its color.
2. unordered_map<int, int> st: This map (st) keeps track of the count of each color currently applied to any ball. The key is the color, and the value is the number of balls that have this color.
3. vector<int> v: This vector stores the result, i.e., the number of distinct colors after each query.

Detailed Steps
---
1. Initialize Data Structures:
2. Process Each Query:
---
    For each query q[i]:
        1. Extract the ball number ball and the color col from the query.
        2. Check if the ball ball is already colored (mp.find(ball) != mp.end()).
            If the ball is already colored:
                Get the existing color of the ball (exisCol = mp[ball]).
                Decrement the count of the existing color in st. If the count becomes zero, remove the color from st.
                Update the ball's color in mp to the new color col.
                Increment the count of the new color in st. 
            If the ball is not already colored:
                Simply set the ball's color in mp to col.
                Increment the count of the new color in st.
        3. After processing the query, store the size of st (number of distinct colors) in v[i].

*After all queries are processed, return the vector v.*

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(q.length)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(limit)$$

*Since, the question expects to return a vector we do not count it in our asymptotic analysis of space complexity.*
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    vector<int> queryResults(int limit, vector<vector<int>>& q) {
        // q[i][0] -> ball, q[i][1] -> color
        unordered_map<int, int> mp; // Tracks the current color of each ball
        unordered_map<int, int> st; // Tracks the count of each color
        vector<int> v(q.size()); // Result vector to store the number of distinct colors after each query
        
        for(int i = 0; i < q.size(); i++){
            int ball = q[i][0]; // Get ball number
            int col = q[i][1]; // Get color
            if(mp.find(ball) != mp.end()){ // Ball is already colored
                int exisCol = mp[ball]; // Get existing color
                if(st[exisCol] == 1) st.erase(exisCol); // Remove color if its count is 1
                else st[exisCol]--; // Decrement the count of the existing color
                mp[ball] = col; // Update the ball's color
                st[col]++; // Increment the count of the new color
            }
            else{ // Ball is not colored
                mp[ball] = col; // Set the ball's color
                st[col]++; // Increment the count of the new color
            }
            v[i] = st.size(); // Store the number of distinct colors
        }
        
        return v; // Return the result vector
    }
};

```
```Java []
class Solution {
    public int[] queryResults(int limit, int[][] queries) {
        // Map to track the current color of each ball
        HashMap<Integer, Integer> ballColorMap = new HashMap<>();
        // Map to track the count of each color
        HashMap<Integer, Integer> colorCountMap = new HashMap<>();
        // Result array to store the number of distinct colors after each query
        int[] result = new int[queries.length];
        
        for (int i = 0; i < queries.length; i++) {
            int ball = queries[i][0];
            int color = queries[i][1];
            
            if (ballColorMap.containsKey(ball)) { // Ball is already colored
                int existingColor = ballColorMap.get(ball); // Get existing color
                // Update the count of the existing color
                colorCountMap.put(existingColor, colorCountMap.get(existingColor) - 1);
                if (colorCountMap.get(existingColor) == 0) {
                    colorCountMap.remove(existingColor);
                }
                // Update the ball's color
                ballColorMap.put(ball, color);
                // Update the count of the new color
                colorCountMap.put(color, colorCountMap.getOrDefault(color, 0) + 1);
            } else { // Ball is not colored
                // Set the ball's color
                ballColorMap.put(ball, color);
                // Update the count of the new color
                colorCountMap.put(color, colorCountMap.getOrDefault(color, 0) + 1);
            }
            // Store the number of distinct colors
            result[i] = colorCountMap.size();
        }
        
        return result;
    }
}

```