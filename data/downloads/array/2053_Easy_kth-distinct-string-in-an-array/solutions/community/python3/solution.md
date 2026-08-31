# 💯✅🔥Detailed Easy Java ,Python3 ,C++ Solution|| 5 ms ||≧◠‿◠≦✌

**Author:** suyalneeraj09
**Votes:** 61
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5588281/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5588281/)

---

# Intuition

The goal of the function is to find the k-th distinct string in a given array of strings. A string is considered distinct if it appears exactly once in the array. To achieve this, we need a way to track the occurrence of each string and then identify which of those strings are distinct.

---

# Approach

1. **Count Occurrences**:
   - Use a hash map (or dictionary) to count how many times each string appears in the array.
   - If a string appears more than once, mark it as not distinct.

2. **Identify Distinct Strings**:
   - Iterate through the array again and use the hash map to check if a string is distinct.
   - Maintain a counter to track how many distinct strings have been encountered.
   - When the counter reaches `k`, return the current string as the k-th distinct string.

3. **Return Result**:
   - If the k-th distinct string is found, return it. If not, return an empty string.

---

# Time Complexity

- **Counting Occurrences**: The first loop that populates the hash map runs in $$O(n)$$, where $$n$$ is the length of the array. Each insertion and lookup in the hash map is $$O(1)$$ on average.
- **Identifying Distinct Strings**: The second loop that checks for distinct strings also runs in $$O(n)$$.
- **Overall Complexity**: Since both loops are sequential, the overall time complexity is:
  $$
  O(n)
  $$

---

# Space Complexity

- The space complexity is determined by the hash map used to store the occurrences of strings.
- In the worst case, where all strings are distinct, the hash map will store $$n$$ entries.
- Thus, the space complexity is:
  $$
  O(n)
  $$

---

# Step By Step Explantion

Let's walk through the provided example step by step, using the array `arr = ["d", "b", "c", "b", "c", "a"]` and `k = 2`. We want to find the 2nd distinct string in this array.

### Step 1: Initialize Data Structures

- Create an empty hash map (dictionary) to track occurrences of each string.
- Initialize a counter `count` to 0 to keep track of how many distinct strings we have encountered.

### Step 2: Count Occurrences

We will iterate through the array to populate the hash map with the occurrence status of each string.

1. **First Iteration (`item = "d"`)**:
   - `"d"` is not in the map. Add it with a value of `True` (indicating it's distinct).
   - Map now: `{"d": True}`

2. **Second Iteration (`item = "b"`)**:
   - `"b"` is not in the map. Add it with a value of `True`.
   - Map now: `{"d": True, "b": True}`

3. **Third Iteration (`item = "c"`)**:
   - `"c"` is not in the map. Add it with a value of `True`.
   - Map now: `{"d": True, "b": True, "c": True}`

4. **Fourth Iteration (`item = "b"`)**:
   - `"b"` is already in the map. Set its value to `False` (indicating it's not distinct anymore).
   - Map now: `{"d": True, "b": False, "c": True}`

5. **Fifth Iteration (`item = "c"`)**:
   - `"c"` is already in the map. Set its value to `False`.
   - Map now: `{"d": True, "b": False, "c": False}`

6. **Sixth Iteration (`item = "a"`)**:
   - `"a"` is not in the map. Add it with a value of `True`.
   - Map now: `{"d": True, "b": False, "c": False, "a": True}`

### Step 3: Identify Distinct Strings

Now we will iterate through the array again to find the k-th distinct string.

1. **First Iteration (`item = "d"`)**:
   - Check the map: `map["d"]` is `True`.
   - Increment `count` to 1 (first distinct string found).
   - `count` is not equal to `k`, so continue.

2. **Second Iteration (`item = "b"`)**:
   - Check the map: `map["b"]` is `False`.
   - This string is not distinct, so skip it.

3. **Third Iteration (`item = "c"`)**:
   - Check the map: `map["c"]` is `False`.
   - This string is not distinct, so skip it.

4. **Fourth Iteration (`item = "b"`)**:
   - Check the map: `map["b"]` is `False`.
   - This string is not distinct, so skip it.

5. **Fifth Iteration (`item = "c"`)**:
   - Check the map: `map["c"]` is `False`.
   - This string is not distinct, so skip it.

6. **Sixth Iteration (`item = "a"`)**:
   - Check the map: `map["a"]` is `True`.
   - Increment `count` to 2 (second distinct string found).
   - Now, `count` is equal to `k`.

### Step 4: Return Result

Since we have found the 2nd distinct string, which is `"a"`, we return it.

### Final Output

The output for the input `arr = ["d", "b", "c", "b", "c", "a"]` and `k = 2` is:

```
"a"
```

This step-by-step explanation illustrates how the algorithm efficiently identifies the k-th distinct string by first counting occurrences and then filtering for distinct entries. 

---

```java []
class Solution {
    public String kthDistinct(String[] arr, int k) {

        HashMap<String, Boolean> map = new HashMap<>();
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (map.containsKey(arr[i])) {
                map.put(arr[i], false);

            } else {
                map.put(arr[i], true);
            }
        }

        for (String item : arr) {
            if (map.get(item) == true) {
                count++;
                if (count == k) {
                    return item;
                }
            }
        }
        return "";
    }
}
```
```python3 []
class Solution:
    def kthDistinct(self, arr: list[str], k: int) -> str:
        count = 0
        map = {}

        # Count occurrences of each string
        for item in arr:
            if item in map:
                map[item] = False  # Mark as not distinct
            else:
                map[item] = True  # Mark as distinct

        # Find the k-th distinct string
        for item in arr:
            if map[item]:  # Check if it's distinct
                count += 1
                if count == k:
                    return item

        return ""
```
```C++ []
class Solution {
public:
    string kthDistinct(vector<string>& arr, int k) {
        unordered_map<string, bool> map;
        int count = 0;

        // Count occurrences of each string
        for (const string& item : arr) {
            if (map.find(item) != map.end()) {
                map[item] = false;  // Mark as not distinct
            } else {
                map[item] = true;   // Mark as distinct
            }
        }

        // Find the k-th distinct string
        for (const string& item : arr) {
            if (map[item]) {  // Check if it's distinct
                count++;
                if (count == k) {
                    return item;
                }
            }
        }

        return "";  // Return empty string if not found
    }
};
```

``` C++(With_unordered_set<string>) []
class Solution {
public:
    string kthDistinct(vector<string>& arr, int k) {
        unordered_set<string> seen;      // To track all seen strings
        unordered_set<string> duplicates; // To track duplicate strings

        // First pass: Identify duplicates
        for (const string& item : arr) {
            if (seen.count(item)) {
                duplicates.insert(item); // Mark as duplicate
            } else {
                seen.insert(item); // Mark as seen
            }
        }

        // Second pass: Find the k-th distinct string
        int count = 0;
        for (const string& item : arr) {
            if (seen.count(item) && !duplicates.count(item)) { // Check if it's distinct
                count++;
                if (count == k) {
                    return item; // Return the k-th distinct string
                }
            }
        }

        return ""; // Return empty string if not found
    }
};

```

---
![upvote.png](./images/0.png)

---
# Summary

- **Intuition**: Track occurrences of strings to identify distinct ones.
- **Approach**: Use a hash map to count occurrences, then find the k-th distinct string through a second pass.
- **Time Complexity**: $$O(n)$$
- **Space Complexity**: $$O(n)$$

---