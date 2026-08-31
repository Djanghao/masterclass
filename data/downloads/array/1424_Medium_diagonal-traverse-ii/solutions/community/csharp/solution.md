# C# Solution for Diagonal Traverse II Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315480/](https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315480/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1.	Grouping by Diagonal Sum: The solution aims to group elements from the input 2D list based on the sum of their row and column indices, simulating diagonal traversal.
2.	Retrieving Elements in Order: After creating these groups, it retrieves and concatenates the elements in the correct diagonal order to form the final output.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	HashMap for Grouping: It initializes a dictionary (groups) to map the diagonal sums to the respective elements in the 2D list.
2.	Populating Groups: Iterating through the 2D list in reverse row order, it calculates the diagonal sum for each element and adds it to the corresponding group in the dictionary.
3.	Retrieving Diagonal Elements: It sequentially retrieves elements from the groups in ascending order of diagonal sums, adding them to the output list (ans).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Group Creation: The nested loop to populate the groups dictionary runs in O(m . n)  time, where  is the number of rows and  is the average number of elements in each row.
\u2022	Retrieving Elements: The traversal through the groups takes O(m . n) time in the worst case, where each element is visited once.

Therefore, the overall time complexity is O(m . n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	HashMap Space: The groups dictionary requires additional space to store elements based on their diagonal sums, taking up O(m . n) space.
\u2022	Output List: The ans list also stores the final result and can take up to O(m . n) space in the worst case.

Hence, the overall space complexity is O(m . n).

# Code
```
public class Solution {
    public int[] FindDiagonalOrder(IList<IList<int>> nums) {
        Dictionary<int, List<int>> groups = new Dictionary<int, List<int>>();

        // Step 1: Populate groups based on diagonal sum
        for (int row = nums.Count - 1; row >= 0; row--) {
            for (int col = 0; col < nums[row].Count; col++) {
                int diagonal = row + col;
                if (!groups.ContainsKey(diagonal)) {
                    groups[diagonal] = new List<int>();
                }
                groups[diagonal].Add(nums[row][col]);
            }
        }

        List<int> ans = new List<int>();
        int curr = 0;

        // Step 4: Traverse through groups in order
        while (groups.ContainsKey(curr)) {
            ans.AddRange(groups[curr]);
            curr++;
        }

        return ans.ToArray();
    }
}
```