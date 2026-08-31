# Java✔✔ || Set || Easy-understanding

**Author:** ydvaaman
**Votes:** 28
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4110249/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4110249/)

---

```
class Solution {
    public int minOperations(List<Integer> nums, int k) {
        int total_op = 0;
        Set<Integer> set = new HashSet<>();
        for (int i = nums.size() - 1; i >= 0; i--) {
            total_op++;
            if (nums.get(i) <= k) {
                set.add(nums.get(i));
            } 
            if(set.size()==k)break;
        }

        return total_op;
    }
}
```
1. **Class Declaration:**
   - `Solution` is a class containing a method called `minOperations`.

2. **Method Signature:**
   - `public int minOperations(List<Integer> nums, int k)`: 
     - The method takes a list of integers `nums` and an integer `k` as parameters.
     - It returns an integer representing the minimum number of operations.

3. **Initialization:**
   - `int total_op = 0;`: Initializes a variable `total_op` to keep track of the total number of operations.

   - `Set<Integer> set = new HashSet<>();`: Initializes a HashSet named `set` to store unique integers.

4. **Iterating through the List:**
   - `for (int i = nums.size() - 1; i >= 0; i--) {`: Iterates through the `nums` list in reverse order (from the last element to the first).

5. **Operation Counter:**
   - `total_op++;`: Increments the `total_op` counter in each iteration, counting the number of operations.

6. **Checking and Adding to Set:**
   - `if (nums.get(i) <= k) { set.add(nums.get(i)); }`: 
     - Checks if the current element in the list is less than or equal to `k`.
     - If true, adds the element to the `set` to keep track of unique values.

7. **Breaking Condition:**
   - `if (set.size() == k) break;`: 
     - Checks if the size of the set is equal to `k`.
     - If true, breaks out of the loop as the required number of unique elements is reached.

8. **Return Statement:**
   - `return total_op;`: Returns the total number of operations performed.

This code counts the minimum number of operations needed to select `k` unique elements from the end of a list of integers (`nums`). The code iterates through the list in reverse order, counting operations and adding unique elements to a set until the required number of unique elements is reached.

![image](./images/0.jpeg)
