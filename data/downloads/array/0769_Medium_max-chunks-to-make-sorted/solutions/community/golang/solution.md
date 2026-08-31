# Beats 100%|| Brute➡️Optimal || Full Explained || [Java/C++/Python3/Rust/JavaScript]

**Author:** Shivansu_7
**Votes:** 3
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/4986893/](https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/4986893/)

---

# Intuition 
1. Utilize a `max[]` array to store the maximum value encountered up to the current position in the array.
   
2. Compare this `max[]` array with a sorted version of the array (sorted by indexes from `0` to `arr.length - 1`).

3. If the value stored in `max[i]` is equal to the element at index `i` in the sorted array, increment a counter variable, `count++`.

4. Update: Since the numbers in the array range from `0` to `arr.length - 1`, there's no need to sort the array itself. Instead, direct comparison of the array index with the elements is sufficient.

```
original: 0, 2, 1, 4, 3, 5, 7, 6
max:      0, 2, 2, 4, 4, 5, 7, 7
sorted:   0, 1, 2, 3, 4, 5, 6, 7
index:    0, 1, 2, 3, 4, 5, 6, 7
```

***The chunks are: 0 | 2, 1 | 4, 3 | 5 | 7, 6***

# Approach Brute Force
1. **Initialization**: 
   - Initialize a variable `chunk` to keep track of the number of chunks.
   - Create an array `max[]` of the same size as the input array `arr[]` to store the maximum value encountered until the current position.

2. **Max Value Calculation**:
   - Start iterating through the input array `arr[]` from the second element (index 1).
   - For each element at index `i`, update `max[i]` to be the maximum of the current element `arr[i]` and the previous maximum `max[i-1]`.

3. **Chunk Counting**:
   - Iterate through the input array `arr[]`.
   - If the maximum value encountered until the current index (`max[i]`) is equal to the index `i`, it implies that all elements from index 0 to `i` are less than or equal to `i`, which means they can form a chunk that doesn't need further rearrangement.
   - Increment the `chunk` count whenever this condition is met.
4. **Return**: 
   - After iterating through the entire array, return the count of chunks calculated.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int maxChunksToSorted(int[] arr) {
        int chunk = 0;
        int[] max = new int[arr.length];
        max[0] = arr[0];

        for(int i=1; i<arr.length; i++) {
            max[i] = Math.max(max[i-1], arr[i]);
        }

        for(int i=0; i<arr.length; i++) {
            if(max[i] == i) {
                chunk++;
            }
        }
        return chunk;
    }
}
```
```JavaScript []
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let chunk = 0;
    let max = new Array(arr.length);
    max[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        max[i] = Math.max(max[i - 1], arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (max[i] === i) {
            chunk++;
        }
    }
    
    return chunk;
};
```
```C++ []
class Solution {
public:
    int maxChunksToSorted(vector<int>& arr) {
        int chunk = 0;
        vector<int> max(arr.size());
        max[0] = arr[0];

        for(int i = 1; i < arr.size(); i++) {
            max[i] = std::max(max[i - 1], arr[i]);
        }

        for(int i = 0; i < arr.size(); i++) {
            if(max[i] == i) {
                chunk++;
            }
        }
        return chunk;
    }
};
```
```Python3 []
class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        chunk = 0
        max_val = [0] * len(arr)
        max_val[0] = arr[0]

        for i in range(1, len(arr)):
            max_val[i] = max(max_val[i - 1], arr[i])

        for i in range(len(arr)):
            if max_val[i] == i:
                chunk += 1
        
        return chunk
```
```Go []
func maxChunksToSorted(arr []int) int {
    chunk := 0
    max := make([]int, len(arr))
    max[0] = arr[0]

    for i := 1; i < len(arr); i++ {
        max[i] = getMax(max[i-1], arr[i])
    }

    for i := 0; i < len(arr); i++ {
        if max[i] == i {
            chunk++
        }
    }
    return chunk
}

func getMax(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```
```Rust []
pub fn max_chunks_to_sorted(arr: Vec<i32>) -> i32 {
    let mut chunk = 0;
    let mut max = vec![0; arr.len()];
    max[0] = arr[0];

    for i in 1..arr.len() {
        max[i] = max[i - 1].max(arr[i]);
    }

    for i in 0..arr.len() {
        if max[i] == i as i32 {
            chunk += 1;
        }
    }
    chunk
}
```
```C# []
public class Solution {
    public int MaxChunksToSorted(int[] arr) {
        int chunk = 0;
        int[] max = new int[arr.Length];
        max[0] = arr[0];

        for(int i = 1; i < arr.Length; i++) {
            max[i] = Math.Max(max[i - 1], arr[i]);
        }

        for(int i = 0; i < arr.Length; i++) {
            if(max[i] == i) {
                chunk++;
            }
        }
        return chunk;
    }
}
```

---
# Approach Optimized
### ***Instead of max[], we can simply use a varibale max, and whenever max is equal to index, we will increment the count of chunk.***

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int maxChunksToSorted(int[] arr) {
        int chunk = 0;
        int max = 0;

        for(int i=0; i<arr.length; i++) {
            max = Math.max(max, arr[i]);
            if(max==i) {
                chunk++;
            }
        }
        return chunk;
    }
}
```
```C++ []
class Solution {
public:
    int maxChunksToSorted(vector<int>& arr) {
        int chunk = 0;
        int max_val = 0;

        for(int i = 0; i < arr.size(); i++) {
            max_val = std::max(max_val, arr[i]);
            if(max_val == i) {
                chunk++;
            }
        }
        return chunk;
    }
};
```
```Go []
func maxChunksToSorted(arr []int) int {
    chunk := 0
    max := 0

    for i := 0; i < len(arr); i++ {
        if arr[i] > max {
            max = arr[i]
        }
        if max == i {
            chunk++
        }
    }
    return chunk
}
```
```C# []
public class Solution {
    public int MaxChunksToSorted(int[] arr) {
        int chunk = 0;
        int max = 0;

        for(int i = 0; i < arr.Length; i++) {
            max = Math.Max(max, arr[i]);
            if(max == i) {
                chunk++;
            }
        }
        return chunk;
    }
}
```
```Python3 []
class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        chunk = 0
        max_val = 0

        for i in range(len(arr)):
            max_val = max(max_val, arr[i])
            if max_val == i:
                chunk += 1
        
        return chunk
```
```Rust []
pub fn max_chunks_to_sorted(arr: Vec<i32>) -> i32 {
    let mut chunk = 0;
    let mut max = 0;

    for (i, &num) in arr.iter().enumerate() {
        max = max.max(num);
        if max == i as i32 {
            chunk += 1;
        }
    }
    chunk
}
```
```JavaScrript []
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let chunk = 0;
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        if (max === i) {
            chunk++;
        }
    }

    return chunk;
};
```

---

### *Feel Free to give feedback and give some other approaches alos in the comments.*
---

