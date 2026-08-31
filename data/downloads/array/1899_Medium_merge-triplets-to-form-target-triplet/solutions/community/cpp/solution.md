# 122.1 (Approach 1 ) | O( n )✅ | Python & C++(Step by step explanation)✅

**Author:** monster0Freason
**Votes:** 7
**Link:** [https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/4875786/](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/4875786/)

---

# Intuition
We want to check if it's possible to obtain the target triplet by merging the given triplets according to the provided operation. To do this, we iterate through each triplet and check if it can potentially contribute to obtaining the target triplet.

# Approach
We iterate through each triplet in the `triplets` array. For each triplet, if any of its elements are greater than the corresponding elements of the `target` triplet, we skip it since it cannot contribute to obtaining the target triplet. Otherwise, we check if any of its elements are equal to the corresponding elements of the `target` triplet. If so, we add the index of the element to a set.

At the end, if the set contains all three indices (0, 1, and 2), it means we have found at least one triplet for each element of the target triplet. In this case, we return true, indicating that it's possible to obtain the target triplet. Otherwise, we return false.

# Complexity
- Time complexity: O(n), where n is the number of triplets in the array. We iterate through each triplet once.
- Space complexity: O(1) - We use a set with a maximum size of 3 to store the indices of matching elements. Therefore, the space complexity is constant.

Sure, here's the explanation of the provided code with comments:

# Code(Python)
```python
class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        ans = set()  # Initialize a set to store indices of matching elements
        
        # Iterate through each triplet
        for t in triplets:
            # If any element of the triplet is greater than the corresponding element of the target triplet, skip
            if t[0] > target[0] or t[1] > target[1] or t[2] > target[2]:
                continue
            
            # Check if any element of the triplet matches the corresponding element of the target triplet
            for i, v in enumerate(t):
                if v == target[i]:
                    ans.add(i)  # Add the index of the matching element to the set
        
        # Check if all three indices are present in the set
        return len(ans) == 3
```

# Code(C++)
```c++
class Solution {
public:
    bool mergeTriplets(vector<vector<int>>& triplets, vector<int>& target) {
        unordered_set<int> s;  // Initialize a set to store indices of matching elements
        
        // Iterate through each triplet
        for (int i = 0; i < triplets.size(); i++) {
            // If any element of the triplet is greater than the corresponding element of the target triplet, skip
            if (triplets[i][0] > target[0] || triplets[i][1] > target[1] || triplets[i][2] > target[2]) {
                continue;
            }
            
            // Check if any element of the triplet matches the corresponding element of the target triplet
            for (int j = 0; j < 3; j++) {
                if (triplets[i][j] == target[j]) {
                    s.insert(j);  // Add the index of the matching element to the set
                }
            }
        }
        
        // Check if all three indices are present in the set
        return s.size() == 3;
    }
};
```


# Please upvote the solution if you understood it.
![1_3vhNKl1AW3wdbkTshO9ryQ.jpg](./images/0.jpeg)
