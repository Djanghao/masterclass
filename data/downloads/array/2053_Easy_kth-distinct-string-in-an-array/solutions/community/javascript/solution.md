# O(n) | 5 Approach | Beats 100% Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 39
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5567370/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5567370/)

---

# Brute Force
# Intuition
When first encountering this problem, the initial thought is to find a way to identify distinct strings in the array and keep track of their order. The key realization is that a distinct string is one that appears only once in the entire array.
The problem asks for the kth distinct string, which implies we need to count distinct strings as we encounter them. This naturally leads to the idea of iterating through the array and checking each string for distinctness.
A straightforward approach is to examine each string and compare it with every other string in the array to determine if it's unique. While this method isn't the most efficient, it's intuitive and easy to implement, making it a good starting point for solving the problem.
The challenge lies in balancing the need to identify distinct strings with the requirement to return the kth one. This suggests a two-step process: first, determine if a string is distinct, and second, keep a count of distinct strings found so far.




### **Approach:**



1. **Main Function (kthDistinct):**
   - Initialize a counter 'distinctCount' to keep track of the number of distinct strings found.
   - Iterate through the input array 'arr' using a for loop.
   - For each string, call the helper function 'isDistinct' to check if it's unique.
   - If a string is distinct:
     - Increment the 'distinctCount'.
     - Check if 'distinctCount' equals the given 'k'.
     - If so, we've found the kth distinct string, so return it immediately.
   - If we complete the loop without finding k distinct strings, return an empty string.

2. **Helper Function (isDistinct):**
   - This function takes the array and the index of the current string as parameters.
   - It compares the string at the given index with every other string in the array.
   - If any other string in the array matches the current string (excluding the comparison with itself), the function returns false.
   - If no matches are found, the function returns true, indicating the string is distinct.

This approach ensures that we process the strings in the order they appear in the array, which is a key requirement of the problem. It also allows us to stop as soon as we find the kth distinct string, potentially saving some computation time.

The use of a separate helper function for checking distinctness makes the code more modular and easier to read. It encapsulates the logic for determining uniqueness, allowing the main function to focus on counting and returning the result.

While this method works correctly, it's important to note that it's not the most efficient solution for large inputs. For each string, we potentially compare it with every other string in the array, leading to a quadratic time complexity.

### Complexity:

**Time Complexity: O(n^2)**
- The main function iterates through the array once, which takes O(n) time.
- For each element, we call the isDistinct function, which itself iterates through the entire array, taking O(n) time.
- This nested iteration results in a worst-case time complexity of O(n^2), where n is the length of the input array.
- In the best case, where we find the kth distinct string early, we might not need to process the entire array, but the worst-case complexity remains O(n^2).

**Space Complexity: O(1)**
- The solution uses a constant amount of extra space regardless of the input size.
- We only use a few variables (distinctCount, loop counters) that don't scale with the input.
- The function doesn't create any data structures that grow with the input size.
- Even though we're dealing with strings, we're not creating new strings or storing them separately, just referencing the input array.



# Code
```Java []

class Solution {
    public String kthDistinct(String[] arr, int k) {
        int distinctCount = 0;
        for (int i = 0; i < arr.length; i++) {
            if (isDistinct(arr, i)) {
                distinctCount++;
                if (distinctCount == k) {
                    return arr[i];
                }
            }
        }
        return "";
    }

    private boolean isDistinct(String[] arr, int index) {
        for (int i = 0; i < arr.length; i++) {
            if (i != index && arr[i].equals(arr[index])) {
                return false;
            }
        }
        return true;
    }
}
```
```Python []
class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        distinct_count = 0
        for i in range(len(arr)):
            if self.isDistinct(arr, i):
                distinct_count += 1
                if distinct_count == k:
                    return arr[i]
        return ""

    def isDistinct(self, arr: List[str], index: int) -> bool:
        return arr.count(arr[index]) == 1
```
```C++ []
class Solution {
public:
    string kthDistinct(vector<string>& arr, int k) {
        int distinctCount = 0;
        for (int i = 0; i < arr.size(); i++) {
            if (isDistinct(arr, i)) {
                distinctCount++;
                if (distinctCount == k) {
                    return arr[i];
                }
            }
        }
        return "";
    }

private:
    bool isDistinct(vector<string>& arr, int index) {
        return count(arr.begin(), arr.end(), arr[index]) == 1;
    }
};

```
```Go []
func kthDistinct(arr []string, k int) string {
    distinctCount := 0
    for i := range arr {
        if isDistinct(arr, i) {
            distinctCount++
            if distinctCount == k {
                return arr[i]
            }
        }
    }
    return ""
}

func isDistinct(arr []string, index int) bool {
    count := 0
    for i := range arr {
        if arr[i] == arr[index] {
            count++
        }
    }
    return count == 1
}

```
```Rust []
impl Solution {
    pub fn kth_distinct(arr: Vec<String>, k: i32) -> String {
        let mut distinct_count = 0;
        for i in 0..arr.len() {
            if Self::is_distinct(&arr, i) {
                distinct_count += 1;
                if distinct_count == k {
                    return arr[i].clone();
                }
            }
        }
        String::new()
    }

    fn is_distinct(arr: &Vec<String>, index: usize) -> bool {
        arr.iter().filter(|&s| s == &arr[index]).count() == 1
    }
}

```
```JavaScript []
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let distinctCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isDistinct(arr, i)) {
            distinctCount++;
            if (distinctCount === k) {
                return arr[i];
            }
        }
    }
    return "";
};

function isDistinct(arr, index) {
    return arr.filter(s => s === arr[index]).length === 1;
}

```

---

# Hash Set
### Intuition:

The previous brute-force method, while straightforward, isn't optimal for larger inputs. This leads to considering data structures that can help reduce the time complexity.

Hash sets come to mind as they offer constant-time operations for adding, removing, and checking elements. By using two sets - one for tracking all seen strings and another for maintaining distinct strings - we can streamline the process of identifying unique elements.

The challenge lies in balancing the need for efficient distinctness checking with preserving the original order of elements. This suggests a two-pass approach: first to identify distinct strings, and then to find the kth distinct string in the original order.

### Approach:

This solution implements a more efficient method using hash sets.

1. **Initialization:**
   - Create two HashSet objects: 'distinct' for storing distinct strings, and 'seen' for tracking all encountered strings.

2. **First Pass** - Identifying Distinct Strings:
   - Iterate through the input array 'arr'.
   - For each string:
     - Try to add it to the 'seen' set.
     - If it's already in 'seen' (add returns false), remove it from 'distinct' if present.
     - If it's not in 'seen' (add returns true), add it to 'distinct'.

   This process ensures that 'distinct' contains only strings that appear once in the array.

3. **Second Pass** - Finding the kth Distinct String:
   - Iterate through 'arr' again to maintain the original order.
   - For each string:
     - Check if it's in the 'distinct' set.
     - If it is, decrement k.
     - If k becomes 0, we've found the kth distinct string, so return it.

4. **Final Check:**
   - If we've gone through the entire array without finding the kth distinct string (k > 0), return an empty string.

This approach effectively separates the task of identifying distinct strings from the task of finding the kth one in order. The use of hash sets allows for O(1) operations when checking for distinctness and presence, significantly improving efficiency over the brute-force method.

The two-pass nature of this algorithm ensures that we maintain the original order of elements while still benefiting from the efficient distinctness checking of hash sets. This is crucial for correctly solving the problem, as the order of distinct strings matters for determining the kth one.

### Complexity:

**Time Complexity: O(n)**
- We perform two passes through the input array, each taking O(n) time.
- All operations on HashSet (add, remove, contains) are O(1) on average.
- Therefore, the overall time complexity is O(n) + O(n) = O(n), where n is the length of the input array.
- This is a significant improvement over the O(n^2) complexity of the brute-force approach.

**Space Complexity: O(n)**
- In the worst case, where all strings are unique, both 'distinct' and 'seen' sets could contain all n strings from the input array.
- Therefore, the space complexity is O(n) + O(n) = O(n).
- While this is higher than the O(1) space complexity of the brute-force method, it's a reasonable trade-off for the improved time complexity.

# Code
```Java []

class Solution {
    public String kthDistinct(String[] arr, int k) {
        Set<String> distinct = new HashSet<>();
        Set<String> seen = new HashSet<>();

        for (String str : arr) {
            if (!seen.add(str)) {
                distinct.remove(str);
            } else {
                distinct.add(str);
            }
        }

        for (String str : arr) {
            if (distinct.contains(str) && --k == 0) {
                return str;
            }
        }

        return "";
    }
}
```
```Python []
class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        distinct = set()
        seen = set()
        for s in arr:
            if s in seen:
                distinct.discard(s)
            else:
                distinct.add(s)
                seen.add(s)
        
        for s in arr:
            if s in distinct:
                k -= 1
                if k == 0:
                    return s
        return ""

```
```C++ []
class Solution {
public:
    string kthDistinct(vector<string>& arr, int k) {
        unordered_set<string> distinct, seen;
        for (const string& str : arr) {
            if (!seen.insert(str).second) {
                distinct.erase(str);
            } else {
                distinct.insert(str);
            }
        }
        for (const string& str : arr) {
            if (distinct.count(str) && --k == 0) {
                return str;
            }
        }
        return "";
    }
};

```
```Go []
func kthDistinct(arr []string, k int) string {
    distinct := make(map[string]bool)
    seen := make(map[string]bool)
    
    for _, str := range arr {
        if seen[str] {
            delete(distinct, str)
        } else {
            distinct[str] = true
            seen[str] = true
        }
    }
    
    for _, str := range arr {
        if distinct[str] {
            k--
            if k == 0 {
                return str
            }
        }
    }
    return ""
}

```
```Rust []
use std::collections::HashSet;

impl Solution {
    pub fn kth_distinct(arr: Vec<String>, mut k: i32) -> String {
        let mut distinct = HashSet::new();
        let mut seen = HashSet::new();

        // First pass: Determine which strings are distinct
        for s in &arr {
            if !seen.insert(s) {
                distinct.remove(s);
            } else {
                distinct.insert(s);
            }
        }

        // Second pass: Find the k-th distinct string
        for s in arr.iter() {
            if distinct.contains(s) {
                k -= 1;
                if k == 0 {
                    return s.clone(); // Clone the string to return it
                }
            }
        }

        String::new() // Return an empty string if the k-th distinct element is not found
    }
}


```
```JavaScript []
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const distinct = new Set();
    const seen = new Set();
    
    for (const str of arr) {
        if (seen.has(str)) {
            distinct.delete(str);
        } else {
            distinct.add(str);
            seen.add(str);
        }
    }
    
    for (const str of arr) {
        if (distinct.has(str) && --k === 0) {
            return str;
        }
    }
    return "";
};

```
---


# Optimized Two-Set Approach

### Intuition:
Building upon our understanding from the previous approaches, we can refine our solution further by using the properties of HashSets in another way, we can use two sets to efficiently categorize strings: one for potentially distinct strings and another for definitely non-distinct strings.

This approach stems from the realization that once a string appears more than once, we can immediately classify it as non-distinct and never need to consider it again. Conversely, strings that we've seen only once remain potential candidates for being distinct.

The challenge lies in balancing the need for efficient distinctness checking with preserving the original order of elements. This suggests a two-pass strategy: first to categorize strings, and then to find the kth distinct string in the original order.

### Approach:
This solution implements an efficient method using two HashSets. Here's a detailed breakdown:

**Initialization:**
- Create two HashSet objects: 'distinct' for storing potentially distinct strings, and 'nonDistinct' for tracking strings that appear more than once.

First Pass - Categorizing Strings:
- Iterate through the input array 'arr'.
- For each string:
  - If it's not in 'nonDistinct':
    - Try to add it to 'distinct'.
    - If it's already in 'distinct' (add returns false), remove it from 'distinct' and add it to 'nonDistinct'.
- This process ensures that 'distinct' contains only strings that have appeared once so far.

**Quick Check:**
- If the size of 'distinct' is less than k, we know there aren't enough distinct strings, so return an empty string.

Second Pass - Finding the kth Distinct String:
- Iterate through 'arr' again to maintain the original order.
- For each string:
  - Check if it's in the 'distinct' set.
  - If it is, decrement k.
  - If k becomes 0, we've found the kth distinct string, so return it.

**Final Check:**
- If we've gone through the entire array without finding the kth distinct string, return an empty string.

This approach effectively separates the task of identifying distinct strings from the task of finding the kth one in order. The use of two complementary sets allows for O(1) operations when checking for distinctness and presence, significantly improving efficiency.

The two-pass nature of this algorithm ensures that we maintain the original order of elements while still benefiting from the efficient distinctness checking of hash sets. This is crucial for correctly solving the problem, as the order of distinct strings matters for determining the kth one.

### Complexity:
**Time Complexity: O(n)**
- We perform two passes through the input array, each taking O(n) time.
- All operations on HashSet (add, remove, contains) are O(1) on average.
- Therefore, the overall time complexity is O(n) + O(n) = O(n), where n is the length of the input array.
- This maintains the linear time complexity achieved in the previous solutions.

**Space Complexity: O(n)**
- In the worst case, where all strings are unique, the 'distinct' set could contain all n strings from the input array.
- The 'nonDistinct' set will always be smaller than or equal to n/2 in size.
- Therefore, the total space complexity is O(n) + O(n/2) = O(n).
- While this uses two sets instead of one map as in some previous solutions, the asymptotic space complexity remains the same.

### Code:

```java []
class Solution {
    public String kthDistinct(String[] arr, int k) {
        Set<String> distinct = new HashSet<>();
        Set<String> nonDistinct = new HashSet<>();
        
        for (String s : arr) {
            if (!nonDistinct.contains(s)) {
                if (!distinct.add(s)) {
                    distinct.remove(s);
                    nonDistinct.add(s);
                }
            }
        }
        
        if (distinct.size() < k) return "";
        
        for (String s : arr) {
            if (distinct.contains(s) && --k == 0) {
                return s;
            }
        }
        
        return "";
    }
}
```
```C++ []
class Solution {
public:
    string kthDistinct(vector<string>& arr, int k) {
        unordered_set<string> distinct, nonDistinct;
        
        for (const auto& s : arr) {
            if (nonDistinct.find(s) == nonDistinct.end()) {
                if (!distinct.insert(s).second) {
                    distinct.erase(s);
                    nonDistinct.insert(s);
                }
            }
        }
        
        if (distinct.size() < k) return "";
        
        for (const auto& s : arr) {
            if (distinct.find(s) != distinct.end() && --k == 0) {
                return s;
            }
        }
        
        return "";
    }
};
```
```Python []
class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        distinct = set()
        nonDistinct = set()
        
        for s in arr:
            if s not in nonDistinct:
                if s in distinct:
                    distinct.remove(s)
                    nonDistinct.add(s)
                else:
                    distinct.add(s)
        
        if len(distinct) < k:
            return ""
        
        for s in arr:
            if s in distinct:
                k -= 1
                if k == 0:
                    return s
        
        return ""
```
```Go []
func kthDistinct(arr []string, k int) string {
    distinct := make(map[string]bool)
    nonDistinct := make(map[string]bool)
    
    for _, s := range arr {
        if !nonDistinct[s] {
            if distinct[s] {
                delete(distinct, s)
                nonDistinct[s] = true
            } else {
                distinct[s] = true
            }
        }
    }
    
    if len(distinct) < k {
        return ""
    }
    
    for _, s := range arr {
        if distinct[s] {
            k--
            if k == 0 {
                return s
            }
        }
    }
    
    return ""
}
```
```Rust []
use std::collections::HashSet;

impl Solution {
    pub fn kth_distinct(arr: Vec<String>, k: i32) -> String {
        let mut distinct = HashSet::new();
        let mut non_distinct = HashSet::new();
        let mut k = k;
        
        for s in &arr {
            if !non_distinct.contains(s) {
                if !distinct.insert(s.clone()) {
                    distinct.remove(s);
                    non_distinct.insert(s.clone());
                }
            }
        }
        
        if distinct.len() < k as usize {
            return String::new();
        }
        
        for s in arr {
            if distinct.contains(&s) {
                k -= 1;
                if k == 0 {
                    return s;
                }
            }
        }
        
        String::new()
    }
}
```
```JavaScript []
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const distinct = new Set();
    const nonDistinct = new Set();
    
    for (const s of arr) {
        if (!nonDistinct.has(s)) {
            if (distinct.has(s)) {
                distinct.delete(s);
                nonDistinct.add(s);
            } else {
                distinct.add(s);
            }
        }
    }
    
    if (distinct.size < k) return "";
    
    for (const s of arr) {
        if (distinct.has(s) && --k === 0) {
            return s;
        }
    }
    
    return "";
};
```







---
# Hash Map
### Intuition:

The previous solutions, while effective, can be further optimized. This leads to considering a frequency-based approach using a hash map.

The key insight here is that a distinct string appears exactly once in the array. By counting the occurrences of each string, we can quickly determine which strings are distinct. This naturally suggests using a hash map to store the frequency of each string.

The main challenge is balancing the need for efficient frequency counting with maintaining the original order of strings. This points towards a two-pass strategy: first to count occurrences, and then to find the kth distinct string in the original order.

Approach:

This solution uses a HashMap for frequency counting. Here's a detailed breakdown:

1. **Initialization:**
   - Create a HashMap called 'frequency' to store the count of each string.

2. **First Pass** - Counting Frequencies:
   - Iterate through the input array 'arr'.
   - For each string, use the merge method of HashMap:
     - If the string is not in the map, add it with a count of 1.
     - If it's already in the map, increment its count.
   - The merge method elegantly handles both cases in a single line of code.

3. **Second Pass** - Finding the kth Distinct String:
   - Iterate through 'arr' again to maintain the original order.
   - For each string:
     - Check its frequency in the map.
     - If the frequency is 1 (indicating a distinct string):
       - Decrement k.
       - If k becomes 0, we've found the kth distinct string, so return it.

4. **Final Check:**
   - If we've gone through the entire array without finding the kth distinct string (k > 0), return an empty string.

This approach separates the task of counting frequencies from the task of finding the kth distinct string in order. The use of a HashMap allows for O(1) operations when updating and checking frequencies, significantly improving efficiency.

The two-pass nature of this algorithm ensures that we maintain the original order of elements while still benefiting from the efficient frequency counting of the hash map. This is crucial for correctly solving the problem, as the order of distinct strings matters for determining the kth one.

### Complexity:

**Time Complexity: O(n)**
- We perform two passes through the input array, each taking O(n) time.
- All operations on HashMap (put, get) are O(1) on average.
- Therefore, the overall time complexity is O(n) + O(n) = O(n), where n is the length of the input array.
- This maintains the linear time complexity achieved in the previous set-based solution.

**Space Complexity: O(m)**
- Where m is the number of unique strings in the input array.
- In the worst case, where all strings are unique, m = n, and the space complexity would be O(n).
- However, if there are many duplicates, m could be significantly smaller than n.



# Code
```Java []
class Solution {
    public String kthDistinct(String[] arr, int k) {
        Map<String, Integer> frequency = new HashMap<>();
        
        for (String str : arr) {
            frequency.merge(str, 1, Integer::sum);
        }
        
        for (String str : arr) {
            if (frequency.get(str) == 1 && --k == 0) {
                return str;
            }
        }
        
        return "";
    }
}

```
```Python []
from collections import Counter

class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        frequency = Counter(arr)
        for s in arr:
            if frequency[s] == 1:
                k -= 1
                if k == 0:
                    return s
        return ""

```
```C++ []
class Solution {
public:
    string kthDistinct(vector<string>& arr, int k) {
        unordered_map<string, int> frequency;
        for (const string& str : arr) {
            frequency[str]++;
        }
        for (const string& str : arr) {
            if (frequency[str] == 1 && --k == 0) {
                return str;
            }
        }
        return "";
    }
};

```
```Go []
func kthDistinct(arr []string, k int) string {
    frequency := make(map[string]int)
    for _, str := range arr {
        frequency[str]++
    }
    
    for _, str := range arr {
        if frequency[str] == 1 {
            k--
            if k == 0 {
                return str
            }
        }
    }
    return ""
}

```
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn kth_distinct(arr: Vec<String>, mut k: i32) -> String {
        let mut frequency = HashMap::new();

        // Count the frequency of each string in the array
        for s in &arr {
            *frequency.entry(s).or_insert(0) += 1;
        }

        // Iterate over the array to find the k-th distinct string
        for s in &arr {
            if frequency[s] == 1 {
                k -= 1;
                if k == 0 {
                    return s.clone(); // Clone the string to return it
                }
            }
        }

        String::new() // Return an empty string if the k-th distinct element is not found
    }
}


```
```JavaScript []
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const frequency = new Map();
    for (const str of arr) {
        frequency.set(str, (frequency.get(str) || 0) + 1);
    }
    
    for (const str of arr) {
        if (frequency.get(str) === 1 && --k === 0) {
            return str;
        }
    }
    return "";
};

```

---

# LinkedHashMap for Order Preservation
### Intuition:
The previous solutions can be further refined to more directly address the order preservation requirement. This leads to considering a LinkedHashMap, which combines the efficiency of a HashMap with the order-preserving properties of a LinkedList.

The key insight here is that a LinkedHashMap maintains the insertion order of its elements. By using this data structure, we can count string frequencies and preserve their original order in a single pass through the input array. This elegantly solves the dual requirements of frequency counting and order preservation.

The main challenge is to leverage the LinkedHashMap's properties to simplify the solution while maintaining efficiency. This points towards a strategy that combines frequency counting and order preservation in a single pass, followed by a search for the kth distinct string.

### Approach:

This solution implements a method using a LinkedHashMap for both frequency counting and order preservation. Here's a detailed breakdown:

1. **Initialization:**
   - Create a LinkedHashMap called 'orderMap' to store the count of each string while preserving their order.

2. **Single Pass** - Counting Frequencies and Preserving Order:
   - Iterate through the input array 'arr'.
   - For each string:
     - If it's not in the map, add it with a count of 1.
     - If it's already in the map, increment its count.
   - The LinkedHashMap automatically preserves the order of insertion.

3. **Finding the kth Distinct String:**
   - Iterate through the entries of 'orderMap'.
   - For each entry:
     - Check if its value (frequency) is 1, indicating a distinct string.
     - If it is distinct, decrement k.
     - If k becomes 0, we've found the kth distinct string, so return its key (the string itself).

4. **Final Check:**
   - If we've gone through all entries without finding the kth distinct string (k > 0), return an empty string.

This approach combines frequency counting and order preservation into a single data structure. The use of a LinkedHashMap allows for O(1) operations when updating frequencies and maintains the original order of elements. This is crucial for correctly solving the problem, as the order of distinct strings matters for determining the kth one.

### Complexity:

**Time Complexity: O(n)**
- We perform a single pass through the input array to build the LinkedHashMap, taking O(n) time.
- The second iteration through the LinkedHashMap entries is also O(n) in the worst case.
- All operations on LinkedHashMap (put, getOrDefault) are O(1) on average.
- Therefore, the overall time complexity remains O(n), where n is the length of the input array.

**Space Complexity: O(n)**
- In the worst case, where all strings are unique, the LinkedHashMap will contain all n strings from the input array.
- Each entry in the LinkedHashMap stores both the string and its frequency, but this doesn't change the overall space complexity.

This solution maintains the linear time complexity of the previous approaches while potentially simplifying the code structure. The use of a LinkedHashMap allows us to combine the frequency counting and order preservation steps, reducing the number of passes through the data.



# Code
```Java []
class Solution {
    public String kthDistinct(String[] arr, int k) {
        Map<String, Integer> orderMap = new LinkedHashMap<>();
        
        for (String str : arr) {
            orderMap.put(str, orderMap.getOrDefault(str, 0) + 1);
        }
        
        for (Map.Entry<String, Integer> entry : orderMap.entrySet()) {
            if (entry.getValue() == 1 && --k == 0) {
                return entry.getKey();
            }
        }
        
        return "";
    }
}

```
```Python []
from collections import OrderedDict

class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        order_map = OrderedDict()
        for s in arr:
            order_map[s] = order_map.get(s, 0) + 1
        
        for s, count in order_map.items():
            if count == 1:
                k -= 1
                if k == 0:
                    return s
        return ""

```
```C++ []

class Solution {
public:
    string kthDistinct(vector<string>& arr, int k) {
        unordered_map<string, int> frequency;
        vector<string> order;
        for (const string& str : arr) {
            if (frequency[str]++ == 0) {
                order.push_back(str);
            }
        }
        for (const string& str : order) {
            if (frequency[str] == 1 && --k == 0) {
                return str;
            }
        }
        return "";
    }
};
```
```Go []
func kthDistinct(arr []string, k int) string {
    orderMap := make(map[string]int)
    order := []string{}
    
    for _, str := range arr {
        if _, exists := orderMap[str]; !exists {
            order = append(order, str)
        }
        orderMap[str]++
    }
    
    for _, str := range order {
        if orderMap[str] == 1 {
            k--
            if k == 0 {
                return str
            }
        }
    }
    return ""
}

```
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn kth_distinct(arr: Vec<String>, mut k: i32) -> String {
        let mut order_map = HashMap::new();
        let mut order = Vec::new();
        
        for s in &arr {
            if !order_map.contains_key(s) {
                order.push(s);
            }
            *order_map.entry(s).or_insert(0) += 1;
        }
        
        for s in order {
            if order_map[s] == 1 {
                k -= 1;
                if k == 0 {
                    return s.clone();
                }
            }
        }
        String::new()
    }
}

```
```JavaScript []
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const orderMap = new Map();
    for (const str of arr) {
        orderMap.set(str, (orderMap.get(str) || 0) + 1);
    }
    
    for (const [str, count] of orderMap) {
        if (count === 1 && --k === 0) {
            return str;
        }
    }
    return "";
};

```