# Easy solution using Dart- Beats 100%

**Author:** athulkichu02
**Votes:** 0
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/5566717/](https://leetcode.com/problems/corporate-flight-bookings/solutions/5566717/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> corpFlightBookings(List<List<int>> bookings, int n) {
    List<int> results = List.generate(n, (index) => 0);
    for(int i=0;i< bookings.length;i++){
        for(int j=bookings[i][0]-1;j<bookings[i][1];j++){
            results[j]=results[j]+bookings[i][2];

        }
    }
    print(results);
    return results;

  }
}
```