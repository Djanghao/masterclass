# ✅ Simple 🔥 Backtracking 🔥 Kotlin || JAVA

**Author:** sachin-worldnet
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3707268/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3707268/)

---

**Approach: Backtracking with Building Counts**

**Intuition:**
   - The problem requires finding the maximum number of achievable requests, ensuring that the net change in employee transfers for each building is zero.
   - We can use a backtracking approach to explore all possible combinations of requests and track the count of included requests to find the maximum achievable count.

**Algorithm:**
   - Initialize a variable `maxAchievableRequests` to store the maximum achievable count of requests.
   - Call the `backtrack` function with the given `requests`, starting index `0`, initial count `0`, and an array `buildings` to track the net change in employee transfers for each building.
   - In the `backtrack` function:
     - **Base Case:** If the `index` reaches the size of `requests`, check if the net change in employee transfers for each building is zero using the `isNetChangeZero` function. If true, update `maxAchievableRequests` with the maximum value between `maxAchievableRequests` and the current `count`. Return.
     - Exclude the current request:
       - Recursively call the `backtrack` function with the next index, the same `count`, and the unchanged `buildings`.
     - Include the current request:
       - Decrement the count of employees in the "fromBuilding" and increment the count in the "toBuilding" in the `buildings` array.
       - Recursively call the `backtrack` function with the next index, `count + 1`, and the updated `buildings`.
       - Restore the `buildings` array by incrementing the count of employees in the "fromBuilding" and decrementing the count in the "toBuilding".
   - Return the `maxAchievableRequests` as the result.

3. **Helper Function:**
   - `isNetChangeZero(buildings: IntArray): Boolean`:
     - Iterate through the `buildings` array and check if the count of employees for each building is zero.
     - Return `true` if all counts are zero; otherwise, return `false`.

4. **Complexity Analysis:**
   - **Time Complexity:** The backtracking algorithm explores all possible combinations of requests. In the worst case, each request can be included or excluded, resulting in a total of $$2^m$$ combinations, where m is the number of requests. For each combination, we check the net change in employee transfers, which takes $$O(n)$$ time. Therefore, the overall time complexity is $$O(n * 2^m)$$.
   - **Space Complexity:** The space complexity is $$O(m+n)$$ as $$O(n)$$ to store the `buildings` array and $$O(m)$$ for the recursive stack space, where `n` is the number of buildings and `m` is the number of requests.

**Code Implementation:** Below is the Kotlin & Java implementation of the approach:

```kotlin []
class Solution {
    private var maxAchievableRequests = 0
    
    fun maximumRequests(n: Int, requests: Array<IntArray>): Int {
        backtrack(requests, 0, 0, IntArray(n))
        return maxAchievableRequests
    }
    
    private fun backtrack(requests: Array<IntArray>, index: Int, count: Int, buildings: IntArray) {
        if (index == requests.size) {
            if (isNetChangeZero(buildings)) {
                maxAchievableRequests = maxOf(maxAchievableRequests, count)
            }
            return
        }
        
        // Exclude the current request
        backtrack(requests, index + 1, count, buildings)
        
        val fromBuilding = requests[index][0]
        val toBuilding = requests[index][1]
        
        // Include the current request
        buildings[fromBuilding]--
        buildings[toBuilding]++
        backtrack(requests, index + 1, count + 1, buildings)
        buildings[fromBuilding]++
        buildings[toBuilding]--
    }
    
    private fun isNetChangeZero(buildings: IntArray): Boolean {
        for (count in buildings) {
            if (count != 0) {
                return false
            }
        }
        return true
    }
}
```
```java []
class Solution {
    private int maxAchievableRequests = 0;
    
    public int maximumRequests(int n, int[][] requests) {
        backtrack(requests, 0, 0, new int[n]);
        return maxAchievableRequests;
    }
    
    private void backtrack(int[][] requests, int index, int count, int[] buildings) {
        if (index == requests.length) {
            if (isNetChangeZero(buildings)) {
                maxAchievableRequests = Math.max(maxAchievableRequests, count);
            }
            return;
        }
        
        // Exclude the current request
        backtrack(requests, index + 1, count, buildings);
        
        int fromBuilding = requests[index][0];
        int toBuilding = requests[index][1];
        
        // Include the current request
        buildings[fromBuilding]--;
        buildings[toBuilding]++;
        backtrack(requests, index + 1, count + 1, buildings);
        buildings[fromBuilding]++;
        buildings[toBuilding]--;
    }
    
    private boolean isNetChangeZero(int[] buildings) {
        for (int count : buildings) {
            if (count != 0) {
                return false;
            }
        }
        return true;
    }
}
```

**Conclusion:**
   - The backtracking approach explores all possible combinations of requests to find the maximum number of achievable requests.
   - By maintaining counts of employee transfers for each building and checking the net change, we can determine the valid combinations.
   - The provided solution has a time complexity of $$O(n * 2^m)$$ and a space complexity of $$O(n + m)$$, where n is the number of buildings and m is the number of requests.


### If you found the provided information useful, an upvote would be appreciated. \uD83D\uDE0A\uD83D\uDC4D