# 🟢🔴🟢 Beats 100.00% 👏 Best Way of Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/5844145/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/5844145/)

---

# Intuition
The problem asks us to minimize the cost of buying items where every third item is free when sorted in descending order of price. The intuition is to sort the items by price in descending order and skip every third item since it's free.

# Approach
1. **Sort the list in descending order**: The most expensive items are at the beginning, allowing us to maximize the savings by skipping every third item.
2. **Accumulate the cost**: Iterate through the sorted list, adding every item to the total cost except the ones that are the third item in the group of three.
3. **Return the total cost**.

### Example Walkthrough
**Example Input**:  
`cost = [6, 5, 7, 9, 2, 2]`

1. Sort the array in descending order:  
   `cost = [9, 7, 6, 5, 2, 2]`
2. Add the first two items to the total cost:
   - 9 + 7 = 16
3. Skip the third item (6).
4. Add the next two items (5 and 2):  
   - 16 + 5 + 2 = 23
5. Skip the last item (2).
   
**Output**:  
`23`

# Complexity
- **Time complexity**:  
  Sorting the array takes \\(O(n \\log n)\\), and the subsequent iteration over the array is \\(O(n)\\), so the total time complexity is:
  $$O(n \\log n)$$

- **Space complexity**:  
  The space complexity is \\(O(n)\\), which comes from storing the sorted list.

# Code
```dart
class Solution {
  int minimumCost(List<int> cost) {
    cost.sort((a, b) => b.compareTo(a));  // Sort in descending order
    int price = 0;

    // Add the cost of all items except every third one
    for (int i = 0; i < cost.length; i++) {
      if ((i + 1) % 3 != 0) price += cost[i];
    }

    return price;
  }
}
