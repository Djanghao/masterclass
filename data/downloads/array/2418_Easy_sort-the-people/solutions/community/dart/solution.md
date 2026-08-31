# SUPER EASY 😂, BEATS 82.86% 👌, EK DUM LOLLIPOP ✨

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-the-people/solutions/5518015/](https://leetcode.com/problems/sort-the-people/solutions/5518015/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Given that each person has a unique height, sorting the people by their heights in descending order will give the desired result. By pairing each name with its corresponding height, we can easily sort these pairs based on height and then extract the sorted names.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a list of pairs where each pair contains a name and its corresponding height.
2. Sort this list of pairs by the heights in descending order.
3. Extract the names from the sorted list and return them.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n \\log n)$$ - Sorting the list of pairs dominates the time complexity.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - The space needed to store the list of pairs.

# Code
```dart
class Solution {
  List<String> sortPeople(List<String> names, List<int> heights) {
    // Create a list of pairs
    List<MapEntry<String, int>> people = [];
    for (int i = 0; i < names.length; i++) {
      people.add(MapEntry(names[i], heights[i]));
    }

    // Sort the list of pairs by height in descending order
    people.sort((a, b) => b.value.compareTo(a.value));

    // Extract the names from the sorted list
    List<String> sortedNames = people.map((entry) => entry.key).toList();

    return sortedNames;
  }
}
```