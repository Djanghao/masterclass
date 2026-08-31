# ✅☑[C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 31
**Link:** [https://leetcode.com/problems/arithmetic-subarrays/solutions/4318821/](https://leetcode.com/problems/arithmetic-subarrays/solutions/4318821/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

#### ***Approach 1(With Sorting)***
1. **check function:** Sorts the given array and checks if the elements form an arithmetic sequence by verifying if the difference between consecutive elements remains constant.
1. **checkArithmeticSubarrays function:** Loops through the provided ranges `l` and `r` to extract subarrays from `nums`, then checks each subarray using the `check` function to determine if they form arithmetic sequences.
1. **ans vector:** Stores the boolean results indicating whether each subarray is an arithmetic sequence or not.
1. **Return:** Returns the vector containing results for each subarray's arithmetic sequence check.

# Complexity
- *Time complexity:*
   $$O(m\u22C5n\u22C5logn)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []

class Solution {
public:
    // Function to check if the given array forms an arithmetic sequence
    bool check(vector<int>& arr) {
        sort(arr.begin(), arr.end()); // Sort the array
        int diff = arr[1] - arr[0]; // Calculate the difference between the first two elements
        
        // Check if the difference remains the same for consecutive elements
        for (int i = 2; i < arr.size(); i++) {
            if (arr[i] - arr[i - 1] != diff) {
                return false; // If the difference changes, it's not an arithmetic sequence
            }
        }
        
        return true; // If all differences are the same, it's an arithmetic sequence
    }
    
    // Function to check arithmetic subarrays in the given range
    vector<bool> checkArithmeticSubarrays(vector<int>& nums, vector<int>& l, vector<int>& r) {
        vector<bool> ans; // Vector to store results
        
        // Iterate through the ranges and check each subarray
        for (int i = 0; i < l.size(); i++) {
            // Extract the subarray from nums using the given range [l[i], r[i]]
            vector<int> arr(begin(nums) + l[i], begin(nums) + r[i] + 1);
            ans.push_back(check(arr)); // Check if the subarray forms an arithmetic sequence
        }
        
        return ans; // Return the results for each subarray
    }
};


```
```C []
bool check(int arr[], int size) {
    // Sort the array
    // (Implementation of sorting is not provided here)

    int diff = arr[1] - arr[0]; // Calculate the difference between the first two elements
        
    // Check if the difference remains the same for consecutive elements
    for (int i = 2; i < size; i++) {
        if (arr[i] - arr[i - 1] != diff) {
            return false; // If the difference changes, it's not an arithmetic sequence
        }
    }

    return true; // If all differences are the same, it's an arithmetic sequence
}

// Function to check arithmetic subarrays in the given range
void checkArithmeticSubarrays(int nums[], int numsSize, int l[], int r[], int queriesSize) {
    bool ans[queriesSize]; // Array to store results
    
    // Iterate through the ranges and check each subarray
    for (int i = 0; i < queriesSize; i++) {
        int subarraySize = r[i] - l[i] + 1;
        int arr[subarraySize]; // Create a subarray
        
        // Extract the subarray from nums using the given range [l[i], r[i]]
        int index = 0;
        for (int j = l[i]; j <= r[i]; j++) {
            arr[index++] = nums[j];
        }
        
        ans[i] = check(arr, subarraySize); // Check if the subarray forms an arithmetic sequence
    }
    
    // Printing the results
    for (int i = 0; i < queriesSize; i++) {
        if (ans[i]) {
            printf("true ");
        } else {
            printf("false ");
        }
    }
    printf("\
");
}


```

```Java []
class Solution {
    public Boolean check(int[] arr) {
        Arrays.sort(arr);
        int diff = arr[1] - arr[0];
        
        for (int i = 2; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] != diff) {
                return false;
            }
        }
        
        return true;
    }
    
    public List<Boolean> checkArithmeticSubarrays(int[] nums, int[] l, int[] r) {
        List<Boolean> ans = new ArrayList();
        for (int i = 0; i < l.length; i++) {
            int[] arr = new int[r[i] - l[i] + 1];
            for (int j = 0; j < arr.length; j++) {
                arr[j] = nums[l[i] + j];
            }
            
            ans.add(check(arr));
        }

        return ans;
    }
}

```

```python3 []

class Solution:
    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:
        def check(arr):
            arr.sort()
            diff = arr[1] - arr[0]
            
            for i in range(2, len(arr)):
                if arr[i] - arr[i - 1] != diff:
                    return False
                
            return True
        
        ans = []
        for i in range(len(l)):
            arr = nums[l[i] : r[i] + 1]
            ans.append(check(arr))
        
        return ans

```
```javascript []
function check(arr) {
    arr.sort((a, b) => a - b); // Sort the array
    let diff = arr[1] - arr[0]; // Calculate the difference between the first two elements

    // Check if the difference remains the same for consecutive elements
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return false; // If the difference changes, it's not an arithmetic sequence
        }
    }

    return true; // If all differences are the same, it's an arithmetic sequence
}

function checkArithmeticSubarrays(nums, l, r) {
    const ans = [];

    // Iterate through the ranges and check each subarray
    for (let i = 0; i < l.length; i++) {
        const arr = nums.slice(l[i], r[i] + 1); // Extract the subarray from nums using the given range [l[i], r[i]]
        ans.push(check(arr)); // Check if the subarray forms an arithmetic sequence
    }

    return ans; // Return the results for each subarray
}

```

---

#### ***Approach 2(Without Sorting)***
1. **Libraries included:**

    - **<vector>:** To use the `vector` container for arrays.
    - **<unordered_set>:** To utilize an unordered set for efficient element lookup.
    - **<climits>:** For using `INT_MAX` and `INT_MIN` constants for integer limits.
1. **Class Solution:**

    - Contains two methods:
        - **bool check(vector<int>& arr):** Checks if an array forms an arithmetic sequence.
        - **vector<bool> checkArithmeticSubarrays(vector<int>& nums, vector<int>& l, vector<int>& r):** Checks arithmetic subarrays in the given range.
1. **bool check(vector<int>& arr) function:**

    - Calculates minimum and maximum elements in the array and stores them in `minElement` and `maxElement`.
    - Populates an `unordered_set` named `arrSet` with elements from the array `arr`.
    - Determines if the array elements can form an arithmetic sequence:
        - Computes the expected common difference diff if the elements are in an arithmetic sequence.
        - Validates the sequence by checking if the elements satisfy the arithmetic sequence condition:
            - Verifies the evenly spaced property using the modulus operation.
            - Validates if the expected elements are present by checking each one against the set.
1. **vector<bool> checkArithmeticSubarrays(vector<int>& nums, vector<int>& l, vector<int>& r) function:**

    - Iterates through the ranges defined by vectors `l` and `r`.
    - Extracts subarrays from `nums` based on the provided range.
    - Applies the `check` function to each subarray and stores the result in the `ans` vector.
1. **Overall Process:**

    - The code first defines methods to verify if a given array is an arithmetic sequence and then applies this check to multiple subarrays within a range.

# Complexity
- *Time complexity:*
   $$O(m\u22C5n)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []

class Solution {
public:
    // Function to check if the given array forms an arithmetic sequence
    bool check(vector<int>& arr) {
        int minElement = INT_MAX; // Variable to store the minimum element in the array
        int maxElement = INT_MIN; // Variable to store the maximum element in the array
        unordered_set<int> arrSet; // Set to store elements of the array
        
        // Finding minimum and maximum elements and populating the set
        for (int num : arr) {
            minElement = min(minElement, num);
            maxElement = max(maxElement, num);
            arrSet.insert(num);
        }
        
        // Check if the elements can form an arithmetic sequence
        if ((maxElement - minElement) % (arr.size() - 1) != 0) {
            return false; // If not evenly spaced, it's not an arithmetic sequence
        }
        
        int diff = (maxElement - minElement) / (arr.size() - 1); // Calculate the common difference
        int curr = minElement + diff; // Initialize current element
        
        // Check for each expected element in the sequence
        while (curr < maxElement) {
            if (arrSet.find(curr) == arrSet.end()) {
                return false; // If any element is missing, it's not an arithmetic sequence
            }
            curr += diff; // Move to the next expected element
        }
        
        return true; // If all conditions satisfy, it's an arithmetic sequence
    }
    
    // Function to check arithmetic subarrays in the given range
    vector<bool> checkArithmeticSubarrays(vector<int>& nums, vector<int>& l, vector<int>& r) {
        vector<bool> ans; // Vector to store results
        
        // Iterate through the ranges and check each subarray
        for (int i = 0; i < l.size(); i++) {
            // Extract the subarray from nums using the given range [l[i], r[i]]
            vector<int> arr(begin(nums) + l[i], begin(nums) + r[i] + 1);
            ans.push_back(check(arr)); // Check if the subarray forms an arithmetic sequence
        }
        
        return ans; // Return the results for each subarray
    }
};



```
```C []

int check(int arr[], int size) {
    int minElement = INT_MAX; // Variable to store the minimum element in the array
    int maxElement = INT_MIN; // Variable to store the maximum element in the array
    int arrSet[MAX_SIZE] = {0}; // Array to store elements of the array
    
    // Finding minimum and maximum elements and populating the set
    for (int i = 0; i < size; i++) {
        minElement = (arr[i] < minElement) ? arr[i] : minElement;
        maxElement = (arr[i] > maxElement) ? arr[i] : maxElement;
        arrSet[arr[i]] = 1;
    }
    
    // Check if the elements can form an arithmetic sequence
    if ((maxElement - minElement) % (size - 1) != 0) {
        return 0; // If not evenly spaced, it's not an arithmetic sequence
    }
    
    int diff = (maxElement - minElement) / (size - 1); // Calculate the common difference
    int curr = minElement + diff; // Initialize current element
    
    // Check for each expected element in the sequence
    while (curr < maxElement) {
        if (arrSet[curr] == 0) {
            return 0; // If any element is missing, it's not an arithmetic sequence
        }
        curr += diff; // Move to the next expected element
    }
    
    return 1; // If all conditions satisfy, it's an arithmetic sequence
}

// Function to check arithmetic subarrays in the given range
int* checkArithmeticSubarrays(int* nums, int* l, int* r, int size) {
    int* ans = (int*)malloc(size * sizeof(int)); // Array to store results
    
    // Iterate through the ranges and check each subarray
    for (int i = 0; i < size; i++) {
        int subArraySize = r[i] - l[i] + 1;
        int subArray[subArraySize];
        
        // Extract the subarray from nums using the given range [l[i], r[i]]
        for (int j = l[i], k = 0; j <= r[i]; j++, k++) {
            subArray[k] = nums[j];
        }
        
        ans[i] = check(subArray, subArraySize); // Check if the subarray forms an arithmetic sequence
    }
    
    return ans; // Return the results for each subarray
}


```

```Java []
class Solution {
    public Boolean check(int[] arr) {
        int minElement = Integer.MAX_VALUE;
        int maxElement = Integer.MIN_VALUE;
        Set<Integer> arrSet = new HashSet();
        
        for (int num : arr) {
            minElement = Math.min(minElement, num);
            maxElement = Math.max(maxElement, num);
            arrSet.add(num);
        }
        
        if ((maxElement - minElement) % (arr.length - 1) != 0) {
            return false;
        }
        
        int diff = (maxElement - minElement) / (arr.length - 1);
        int curr = minElement + diff;
        
        while (curr < maxElement) {
            if (!arrSet.contains(curr)) {
                return false;
            }
            
            curr += diff;
        }
        
        return true;
    }
    
    public List<Boolean> checkArithmeticSubarrays(int[] nums, int[] l, int[] r) {
        List<Boolean> ans = new ArrayList();
        for (int i = 0; i < l.length; i++) {
            int[] arr = new int[r[i] - l[i] + 1];
            for (int j = 0; j < arr.length; j++) {
                arr[j] = nums[l[i] + j];
            }
            
            ans.add(check(arr));
        }

        return ans;
    }
}

```

```python3 []
class Solution:
    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:
        def check(arr):
            min_element = min(arr)
            max_element = max(arr)

            if (max_element - min_element) % (len(arr) - 1) != 0:
                return False

            diff = (max_element - min_element) / (len(arr) - 1)
            
            arr_set = set(arr)
            curr = min_element + diff
            while curr < max_element:
                if curr not in arr_set:
                    return False
                
                curr += diff
            
            return True

        ans = []
        for i in range(len(l)):
            arr = nums[l[i] : r[i] + 1]
            ans.append(check(arr))
        
        return ans


```
```javascript []
class Solution {
    check(arr) {
        let minElement = Number.MAX_SAFE_INTEGER; // Variable to store the minimum element in the array
        let maxElement = Number.MIN_SAFE_INTEGER; // Variable to store the maximum element in the array
        let arrSet = new Set(); // Set to store elements of the array
        
        // Finding minimum and maximum elements and populating the set
        arr.forEach(num => {
            minElement = Math.min(minElement, num);
            maxElement = Math.max(maxElement, num);
            arrSet.add(num);
        });
        
        // Check if the elements can form an arithmetic sequence
        if ((maxElement - minElement) % (arr.length - 1) !== 0) {
            return false; // If not evenly spaced, it's not an arithmetic sequence
        }
        
        let diff = (maxElement - minElement) / (arr.length - 1); // Calculate the common difference
        let curr = minElement + diff; // Initialize current element
        
        // Check for each expected element in the sequence
        while (curr < maxElement) {
            if (!arrSet.has(curr)) {
                return false; // If any element is missing, it's not an arithmetic sequence
            }
            curr += diff; // Move to the next expected element
        }
        
        return true; // If all conditions satisfy, it's an arithmetic sequence
    }
    
    checkArithmeticSubarrays(nums, l, r) {
        let ans = []; // Array to store results
        
        // Iterate through the ranges and check each subarray
        for (let i = 0; i < l.length; i++) {
            // Extract the subarray from nums using the given range [l[i], r[i]]
            let arr = nums.slice(l[i], r[i] + 1);
            ans.push(this.check(arr)); // Check if the subarray forms an arithmetic sequence
        }
        
        return ans; // Return the results for each subarray
    }
}

```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---