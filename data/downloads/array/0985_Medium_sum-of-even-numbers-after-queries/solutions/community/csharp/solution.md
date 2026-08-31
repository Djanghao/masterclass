# 🟢🔴🟢  Beats 100.00% 👏 || Most Easiest Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/5833590/](https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/5833590/)

---

# Intuition
The problem requires us to perform a series of updates on an array based on a list of queries. After each update, we need to calculate the sum of all even numbers in the array. Since we're updating the array multiple times and recalculating the sum of even numbers after each update, we can take advantage of certain optimizations.

# Approach
1. **Process Each Query**: For each query, update the value of `nums` at the specified index by adding the given value.
2. **Update the Even Sum**: After modifying the array, calculate the sum of all even numbers in the array. To do this, we can use the `fold` function, which iterates through the array and adds even numbers to the total sum.
3. **Store the Results**: After each query, append the result (the updated sum of even numbers) to the output list.

# Example Walkthrough

### Example 1:
**Input**:  
`nums = [1, 2, 3, 4]`,  
`queries = [[1, 0], [-3, 1], [-4, 0], [2, 3]]`

1. **First Query**:  
   Query: `[1, 0]`  
   Update `nums[0]`:  
   `nums = [2, 2, 3, 4]`  
   Sum of even numbers: \\( 2 + 2 + 4 = 8 \\)  
   Output after first query: `[8]`

2. **Second Query**:  
   Query: `[-3, 1]`  
   Update `nums[1]`:  
   `nums = [2, -1, 3, 4]`  
   Sum of even numbers: \\( 2 + 4 = 6 \\)  
   Output after second query: `[8, 6]`

3. **Third Query**:  
   Query: `[-4, 0]`  
   Update `nums[0]`:  
   `nums = [-2, -1, 3, 4]`  
   Sum of even numbers: \\( -2 + 4 = 2 \\)  
   Output after third query: `[8, 6, 2]`

4. **Fourth Query**:  
   Query: `[2, 3]`  
   Update `nums[3]`:  
   `nums = [-2, -1, 3, 6]`  
   Sum of even numbers: \\( -2 + 6 = 4 \\)  
   Output after fourth query: `[8, 6, 2, 4]`

**Output**:  
`[8, 6, 2, 4]`

# Complexity
- **Time Complexity**:  
  Each query results in a full iteration through the `nums` array to calculate the sum of even numbers. For `q` queries and `n` elements in the array, the time complexity is \\( O(q \	imes n) \\).

- **Space Complexity**:  
  The space complexity is \\( O(1) \\) for modifying the array in place and \\( O(q) \\) for storing the results of each query.

# Code
```dart
class Solution {
  List<int> sumEvenAfterQueries(List<int> nums, List<List<int>> queries) {
    List<int> output = [];
    for(int i = 0; i < queries.length; i++){
        int value = queries[i].first;
        int index = queries[i].last;
        nums[index] = nums[index] + value;
        int sum = nums.fold(0,(a,b)=> b.isEven ? a+b : a);
        output.add(sum);
    }
    return output;
  }
}
