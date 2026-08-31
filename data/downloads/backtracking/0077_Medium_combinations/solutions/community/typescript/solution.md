# beats 100% users without using any predefined methods...............

**Author:** rudramanikanta02
**Votes:** 2
**Link:** [https://leetcode.com/problems/combinations/solutions/5640242/](https://leetcode.com/problems/combinations/solutions/5640242/)

---

# Intuition
traverse to each value till n and add to list again traverse after reaching certain condition add the list to result and remove the element to add other element values
# Code
```

class Solution {
    List<List<Integer>> result = new ArrayList<>();

    public List<List<Integer>> combine(int n, int k) {
        backtrack(1, n, k, new ArrayList<>());
        return result;
    }

    public void backtrack(int start, int n, int k, List<Integer> list) {
        if (list.size() == k) {
            result.add(new ArrayList<>(list));
            return;
        }

        for (int i = start; i <= n; i++) {
            list.add(i);
            backtrack(i + 1, n, k, list);
            list.remove(list.size() - 1); // Backtrack
        }
    }
}

```