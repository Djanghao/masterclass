# Java code | with explanation ✅

**Author:** deleted_user
**Votes:** 13
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5875719/](https://leetcode.com/problems/remove-methods-from-project/solutions/5875719/)

---

# Approach
1. **Initialization**: Create a set for suspicious methods and add the initial method `k`.
2. **Propagation**: Loop through each invocation pair. If a suspicious method `a` calls method `b`, add `b` to the suspicious set. Repeat until no new additions occur.
3. **Check Remaining Methods**: After identifying suspicious methods, check if any non-suspicious method calls a suspicious one. If so, return all methods from 0 to \\(n-1\\).
4. **Return Safe Methods**: List all methods that are not suspicious and return this list.

# Complexity
- **Time complexity**: $$O(n \\cdot m)$$, where \\(n\\) is the number of methods and \\(m\\) is the number of invocation pairs.
- **Space complexity**: $$O(n)$$ for storing suspicious methods and the resulting list.

# Code
```java
class Solution {
    public List<Integer> remainingMethods(int n, int k, int[][] invocations) {
        Set<Integer> suspiciousMethods = new HashSet<>();
        suspiciousMethods.add(k);
        boolean hasChanged = true;

        while (hasChanged) {
            hasChanged = false;
            for (int[] invocation : invocations) {
                int a = invocation[0];
                int b = invocation[1];
                if (suspiciousMethods.contains(a) && !suspiciousMethods.contains(b)) {
                    suspiciousMethods.add(b);
                    hasChanged = true;
                }
            }
        }

        for (int[] invocation : invocations) {
            int a = invocation[0];
            int b = invocation[1];
            if (!suspiciousMethods.contains(a) && suspiciousMethods.contains(b)) {
                return Arrays.asList(createArray(n));
            }
        }

        List<Integer> remainingMethods = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (!suspiciousMethods.contains(i)) {
                remainingMethods.add(i);
            }
        }
        
        return remainingMethods;
    }

    private static Integer[] createArray(int n) {
        Integer[] result = new Integer[n];
        for (int i = 0; i < n; i++) {
            result[i] = i;
        }
        return result;
    }
}
```
# Upvote if you found this helpful! \uD83D\uDE0A