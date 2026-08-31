# ✅☑[C++/Java/Python/JavaScript] || Maps || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 18
**Link:** [https://leetcode.com/problems/high-access-employees/solutions/4278627/](https://leetcode.com/problems/high-access-employees/solutions/4278627/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. **Data Structure:**

    - The solution uses a `map` named `when` to store access times for each employee. The key is the employee's name, and the value is a vector of access times.
1. **Processing Input:**

    - The input vector `access_times` is processed, and access times are stored in the map for each employee.
1. **Checking Access Patterns:**

    - The code iterates through each employee in the map.
    - Access times for each employee are sorted.
    - It checks for consecutive accesses within a 100-minute window.
1. **Flagging High-Access Employees:**

    - If an employee has consecutive accesses within a 100-minute window, the flag is set to true, indicating that the employee is a high-access employee.
1. **Result Vector:**

    - Names of high-access employees are stored in the `ret` vector.



# Complexity
- *Time complexity:*
   $$O(klogk)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []

class Solution {
public:
    // Function to find high-access employees based on access times.
    vector<string> findHighAccessEmployees(vector<vector<string>>& access_times) {
        // Create a map to store access times for each employee.
        map<string, vector<int>> when;

        // Populate the map with access times from the input vector.
        for (auto v : access_times) {
            string a = v[0], b = v[1];
            when[a].push_back(stoi(b));
        }

        // Vector to store the names of high-access employees.
        vector<string> ret;

        // Iterate through the map to check access patterns for each employee.
        for (auto &[x, lst] : when) {
            // Sort the access times for each employee.
            sort(begin(lst), end(lst));

            // Get the number of access times for the current employee.
            int k = lst.size();

            // Flag to indicate if the employee is a high-access employee.
            bool flag = false;

            // Check for consecutive accesses within a 100-minute window.
            for (int i = 0; i + 3 <= k; ++i)
                flag |= lst[i + 2] < lst[i] + 100;

            // If the flag is true, the employee is considered high-access, and their name is added to the result.
            if (flag) ret.push_back(x);
        }

        // Return the vector containing the names of high-access employees.
        return ret;
    }
};

```
```C []

struct IntVector {
    int* data;
    size_t size;
    size_t capacity;
};

// Function to initialize an integer vector.
void initIntVector(struct IntVector* vec) {
    vec->data = NULL;
    vec->size = 0;
    vec->capacity = 0;
}

// Function to push an integer to the back of the vector.
void pushBackInt(struct IntVector* vec, int value) {
    if (vec->size == vec->capacity) {
        size_t newCapacity = (vec->capacity == 0) ? 1 : 2 * vec->capacity;
        vec->data = realloc(vec->data, newCapacity * sizeof(int));
        vec->capacity = newCapacity;
    }
    vec->data[vec->size++] = value;
}

// Function to sort an integer vector.
void sortIntVector(struct IntVector* vec) {
    qsort(vec->data, vec->size, sizeof(int), compareInt);
}

// Comparison function for qsort.
int compareInt(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

// Function to find high-access employees based on access times.
struct IntVector findHighAccessEmployees(char*** access_times, int rows, int cols) {
    // Create a map to store access times for each employee.
    struct IntVector when[rows];
    for (int i = 0; i < rows; ++i) {
        initIntVector(&when[i]);
        for (int j = 0; j < cols; ++j) {
            pushBackInt(&when[i], atoi(access_times[i][1]));
        }
    }

    // Vector to store the names of high-access employees.
    struct IntVector ret;
    initIntVector(&ret);

    // Iterate through the map to check access patterns for each employee.
    for (int i = 0; i < rows; ++i) {
        // Sort the access times for each employee.
        sortIntVector(&when[i]);

        // Get the number of access times for the current employee.
        int k = when[i].size;

        // Flag to indicate if the employee is a high-access employee.
        int flag = 0;

        // Check for consecutive accesses within a 100-minute window.
        for (int j = 0; j + 3 <= k; ++j) {
            flag |= when[i].data[j + 2] < when[i].data[j] + 100;
        }

        // If the flag is true, the employee is considered high-access, and their name is added to the result.
        if (flag) {
            pushBackInt(&ret, i);
        }
    }

    // Return the vector containing the indices of high-access employees.
    return ret;
}


```
```Java []
import java.util.*;

public class Solution {
    // Function to find high-access employees based on access times.
    public List<String> findHighAccessEmployees(List<List<String>> access_times) {
        // Create a map to store access times for each employee.
        Map<String, List<Integer>> when = new HashMap<>();

        // Populate the map with access times from the input list.
        for (List<String> v : access_times) {
            String a = v.get(0), b = v.get(1);
            when.computeIfAbsent(a, k -> new ArrayList<>()).add(Integer.parseInt(b));
        }

        // List to store the names of high-access employees.
        List<String> ret = new ArrayList<>();

        // Iterate through the map to check access patterns for each employee.
        for (Map.Entry<String, List<Integer>> entry : when.entrySet()) {
            // Sort the access times for each employee.
            entry.getValue().sort(null);

            // Get the number of access times for the current employee.
            int k = entry.getValue().size();

            // Flag to indicate if the employee is a high-access employee.
            boolean flag = false;

            // Check for consecutive accesses within a 100-minute window.
            for (int i = 0; i + 3 <= k; ++i)
                flag |= entry.getValue().get(i + 2) < entry.getValue().get(i) + 100;

            // If the flag is true, the employee is considered high-access, and their name is added to the result.
            if (flag) ret.add(entry.getKey());
        }

        // Return the list containing the names of high-access employees.
        return ret;
    }
}



```
```python3 []
from typing import List
from collections import defaultdict

class Solution:
    # Function to find high-access employees based on access times.
    def findHighAccessEmployees(self, access_times: List[List[str]]) -> List[str]:
        # Create a dictionary to store access times for each employee.
        when = defaultdict(list)

        # Populate the dictionary with access times from the input list.
        for v in access_times:
            a, b = v
            when[a].append(int(b))

        # List to store the names of high-access employees.
        ret = []

        # Iterate through the dictionary to check access patterns for each employee.
        for x, lst in when.items():
            # Sort the access times for each employee.
            lst.sort()

            # Get the number of access times for the current employee.
            k = len(lst)

            # Flag to indicate if the employee is a high-access employee.
            flag = False

            # Check for consecutive accesses within a 100-minute window.
            for i in range(k - 2):
                flag |= lst[i + 2] < lst[i] + 100

            # If the flag is true, the employee is considered high-access, and their name is added to the result.
            if flag:
                ret.append(x)

        # Return the list containing the names of high-access employees.
        return ret



```
```javascript []
class Solution {
    // Function to find high-access employees based on access times.
    findHighAccessEmployees(access_times) {
        // Create a map to store access times for each employee.
        const when = new Map();

        // Populate the map with access times from the input array.
        for (const v of access_times) {
            const [a, b] = v;
            when.set(a, [...(when.get(a) || []), parseInt(b)]);
        }

        // Array to store the names of high-access employees.
        const ret = [];

        // Iterate through the map to check access patterns for each employee.
        for (const [x, lst] of when) {
            // Sort the access times for each employee.
            lst.sort((a, b) => a - b);

            // Get the number of access times for the current employee.
            const k = lst.length;

            // Flag to indicate if the employee is a high-access employee.
            let flag = false;

            // Check for consecutive accesses within a 100-minute window.
            for (let i = 0; i + 3 <= k; ++i)
                flag |= lst[i + 2] < lst[i] + 100;

            // If the flag is true, the employee is considered high-access, and their name is added to the result.
            if (flag) ret.push(x);
        }

        // Return the array containing the names of high-access employees.
        return ret;
    }
}


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---