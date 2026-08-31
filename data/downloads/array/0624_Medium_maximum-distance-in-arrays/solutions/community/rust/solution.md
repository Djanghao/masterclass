# O(n) | Beats 100% | Greedy | Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 65
**Link:** [https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5643516/](https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5643516/)

---



## Intuition




This Problem is asking us to explore how we can efficiently compare values between multiple sorted lists to find the greatest possible difference. We are given a collection of arrays, each sorted in ascending order. Our task is to select two numbers, one from each of two different arrays, and determine the largest absolute difference we can achieve. This setup immediately raises some  questions:

>1. How can we use the fact that the arrays are already sorted?
>2. Do we need to compare every single pair of numbers, or is there a more efficient approach?
>3. What role do the minimum and maximum values in each array play?

If you read the problem carefully, it's crucial to consider the constraints. We're dealing with potentially up to 100,000 arrays, each containing up to 500 integers. This scale immediately rules out any brute-force solutions that compare every possible pair of numbers \u2013 such an approach would be far too slow.


The simplest solution that might come to your mind is to compare every number in every array with every number in every other array. This would involve nested loops iterating through all the arrays and their elements, keeping track of the maximum difference found. While this approach would certainly work for small inputs, it quickly becomes impractical as the number and size of arrays grow. Now Why is this approach problematic? I'll try to break it down:

>1. Time Complexity: If we have 'm' arrays with an average of 'n' elements each, we'd be looking at roughly O(m^2 * n^2) comparisons. With our given constraints, this could mean up to (10^5)^2 * 500^2 operations \u2013 astronomically high!

>2. Redundant Comparisons: We're wasting a lot of time comparing numbers within the same array, which we know can't contribute to our solution.

>3. Ignoring Sorted Property: This method doesn't take advantage of the fact that our arrays are already sorted, which is a key piece of information we're given.

But we can improve our Brute Force by Considering Array Extremes Our next realization might be that since we're looking for the maximum distance, and our arrays are sorted, we only need to consider the minimum and maximum values from each array. This cuts down our comparisons significantly:

>1. For each pair of arrays, we only need to compare:
	   - The minimum of the first array with the maximum of the second
	   - The maximum of the first array with the minimum of the second

>2. We take the larger of these two differences for each pair of arrays.

This approach is a significant improvement, reducing our time complexity to O(m^2), where 'm' is the number of arrays. We've eliminated the need to look at every element, focusing only on the extremes. However, while this solution works much better for smaller inputs, it still struggles with the upper limit of our constraints. With 100,000 arrays, we'd still be making billions of comparisons.

Now Let's ask ourselves "Do we really need to compare every array with every other array explicitly?" The answer, it turns out, is no. We can find the maximum distance in a single pass through all the arrays. Here's How:

>The maximum distance will always involve either:
	1. The global minimum value we've seen so far and the maximum value in the current array, or
	2. The global maximum value we've seen so far and the minimum value in the current array.

Why is this true? Let's think about it Imagine we've processed several arrays already. We know the overall minimum and maximum values we've encountered. When we look at a new array, the largest possible distance involving this array must use either:
- Its maximum value (paired with the overall minimum we've seen)
- Its minimum value (paired with the overall maximum we've seen)

This insight allows us to process each array just once, updating our global min/max values and the maximum distance as we go.

Try to visualize this process First Start with the first array then Initialize global min and max from this array after Set initial max distance to 0 Now For each subsequent array Calculate two potential distances the Current array's max - global min and Global max - current array's min then Update max distance if either of these is larger and then Update global min and max if necessary Finally  After processing all arrays, we have our answer!

This approach is better because We only need to look at each array once, giving us O(m) time complexity where 'm' is the number of arrays plus we only need to keep track of a few variables (global min, global max, max distance) regardless of input size and We make full use of the fact that arrays are sorted by only considering their extremes and our method also handles scenarios like having only two arrays or arrays with single elements.





## Approach

Let's break down the approach step-by-step 

**Step 1: Initial Setup and Edge Case Handling**

1. First, we need to check if the input is valid:
   - If the input is null or if we have fewer than two arrays, we can't find a distance between two arrays, so we should return 0 or handle this case appropriately.

2. Initialize variables:
   - `globalMin`: Set this to the first element of the first array. This will keep track of the smallest element we've seen across all arrays.
   - `globalMax`: Set this to the last element of the first array. This will keep track of the largest element we've seen across all arrays.
   - `maxDistance`: Initialize this to 0. This will store the maximum distance we've found so far.

**Step 2: Processing the Arrays**

3. Start a loop that will iterate through all arrays, beginning from the second array (index 1):

   For each array:
   
   a) Find the local minimum (first element of the current array)
   b) Find the local maximum (last element of the current array)
   
   c) Calculate two potential distances:
      - Distance 1 = local maximum - global minimum
      - Distance 2 = global maximum - local minimum
   
   d) Update `maxDistance` if either of these new distances is greater:
      `maxDistance = max(maxDistance, max(Distance1, Distance2))`
   
   e) Update global extremes:
      - If local minimum < global minimum, update global minimum
      - If local maximum > global maximum, update global maximum

4. After processing all arrays, `maxDistance` will contain the maximum distance found.

**Step 3: Return the Result**

5. Return `result` as the final answer.

## Implementation

**Step 1: Initial Setup and Edge Case Handling**

**1. Checking for valid input:**
   This step is crucial for robust code. We need to ensure that we have at least two arrays to work with. If not, it's impossible to find a distance between elements from different arrays.

   this might look something like:
   ```
   if (arrays == null || arrays.length < 2) {
       return 0;
   }
   ```

   This check prevents potential null pointer exceptions and logical errors in our algorithm.

**2. Initializing variables:**
   We start by looking at the first array. This array serves as our initial reference point.

   - `globalMin = arrays[0][0]`: We set the global minimum to the first element of the first array.
   - `globalMax = arrays[0][last]`: We set the global maximum to the last element of the first array.
   - `maxDistance = 0`: We initialize our result to 0.

   Why do we use the first array as a reference? It gives us a starting point. We know that any maximum distance must involve either this array or a more extreme value from another array.

**Step 2: Processing the Arrays**

3. The main loop:

   We start our loop from the second array (index 1) because we've already used the first array to initialize our global min and max.

   For each array, we do the following:

   a) Find the local minimum:
      This is always the first element of the current array, thanks to the ascending order.
      `localMin = currentArray[0]`

   b) Find the local maximum:
      This is always the last element of the current array.
      `localMax = currentArray[last]`

   c) Calculate potential distances:
      - Distance 1 = localMax - globalMin
        This represents the distance if we choose the largest element from the current array and the smallest element we've seen so far from any previous array.
      - Distance 2 = globalMax - localMin
        This represents the distance if we choose the smallest element from the current array and the largest element we've seen so far from any previous array.

      We calculate both because we don't know which will be larger. The current array could contain a new maximum, a new minimum, both, or neither.

   d) Updating maxDistance:
      We compare our current maxDistance with the two new potential distances we just calculated:
      `maxDistance = max(maxDistance, max(Distance1, Distance2))`

      This ensures that maxDistance always holds the largest distance we've found so far.

   e) Updating global extremes:
      - If localMin < globalMin, we update globalMin = localMin
      - If localMax > globalMax, we update globalMax = localMax

      This step is crucial. It ensures that for the next iteration, we're comparing against the most extreme values we've seen so far. This is how we maintain the condition of choosing elements from different arrays - we're not directly using these global values to calculate distances, only to compare with new arrays.

### Step 3: Return the Result

5. After we've processed all arrays, maxDistance will contain the largest distance we found between any two elements from different arrays. We simply return this value.



 By only considering the minimum and maximum of each array, we drastically reduce the number of comparisons we need to make. Instead of comparing every element with every other element (which would be extremely inefficient), we only make a constant number of comparisons per array.

 We know this approach is correct because:
   - We always consider the most extreme values (min and max) from each array.
   - We continuously update our global min and max, ensuring we're always comparing against the most extreme values we've seen so far.
   - By calculating both (localMax - globalMin) and (globalMax - localMin), we cover all possible maximum distances involving the current array.

Handling of the "different arrays" constraint: By updating our global min and max after processing each array, we ensure that these values are always from arrays we've already fully processed. This guarantees that when we calculate distances with the current array, we're always comparing with elements from different arrays.


### Complexity


**Time Complexity: O(m)**, where m is the number of arrays

- We iterate through each array exactly once.
- For each array, we perform a constant number of operations (getting the first and last elements, doing some comparisons and math).
- Given the constraint that the total number of elements across all arrays is at most 10^5, m is effectively bounded by this value.
- Therefore, our time complexity is linear with respect to the number of arrays.

**Space Complexity: O(1)**

- We only use a fixed number of variables (globalMin, globalMax, result) regardless of the input size.
- We don't create any additional data structures that grow with the input.
- All our operations are done in-place on the input data.

This constant space complexity is ideal because it means our solution uses the same amount of extra memory regardless of the input size



---
### Code

```Java []
class Solution {
    public int maxDistance(List<List<Integer>> arrays) {
        
        int globalMin = arrays.get(0).get(0);
        int globalMax = arrays.get(0).get(arrays.get(0).size() - 1);
        int result = 0;

        for (int i = 1; i < arrays.size(); i++) {
            List<Integer> curr = arrays.get(i);
            int localMin = curr.get(0);
            int localMax = curr.get(curr.size() - 1);

            result = Math.max(result, Math.max(localMax - globalMin, globalMax - localMin));

            globalMin = Math.min(globalMin, localMin);
            globalMax = Math.max(globalMax, localMax);
        }

        return result;
    }
}
```

```C++ []
class Solution {
public:
    int maxDistance(vector<vector<int>>& arrays) {
        
        int globalMin = arrays[0][0];
        int globalMax = arrays[0].back();
        int result = 0;

        for (int i = 1; i < arrays.size(); ++i) {
 
            int localMin = arrays[i][0];
            int localMax = arrays[i].back();

          
            result = max(result, max(localMax - globalMin, globalMax - localMin));

            globalMin = min(globalMin, localMin);
            globalMax = max(globalMax, localMax);
        }

        return result;
    }
};

static const int speedup = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return 0;
}();



//https://leetcode.com/problems/maximum-distance-in-arrays/submissions/1358066964/
```

```Python []
#170-ms
class Solution:
    def maxDistance(self, arrays: List[List[int]]) -> int:
        
        
        global_min, global_max = arrays[0][0], arrays[0][-1]
        result = 0

        for arr in arrays[1:]:
            local_min, local_max = arr[0], arr[-1]
            result = max(result, max(local_max - global_min, global_max - local_min))
            global_min = min(global_min, local_min)
            global_max = max(global_max, local_max)

        return result

def main():
    input = sys.stdin.read().strip()
    

    test_cases = input.splitlines()
    
    results = []
    for case in test_cases:
       
        arrays = json.loads(case)
        results.append(Solution().maxDistance(arrays))
    

    with open('user.out', 'w') as f:
        for result in results:
            f.write(f"{result}\
")

if __name__ == "__main__":
    main()
    exit(0)


#https://leetcode.com/problems/maximum-distance-in-arrays/submissions/1357734414/
```

```Go []
func maxDistance(arrays [][]int) int {
    

    globalMin, globalMax := arrays[0][0], arrays[0][len(arrays[0])-1]
    result := 0

    for _, arr := range arrays[1:] {
        localMin, localMax := arr[0], arr[len(arr)-1]
        result = max(result, localMax-globalMin, globalMax-localMin) //Thanks to plustwo for the update, The max and min functions are now builtins They are not limited to two args - so there's no need for the nested call.
        globalMin = min(globalMin, localMin)
        globalMax = max(globalMax, localMax)
    }

    return result
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}



//https://leetcode.com/problems/maximum-distance-in-arrays/submissions/1358121679/
```

```Rust []
impl Solution {
    pub fn max_distance(arrays: Vec<Vec<i32>>) -> i32 {
        

        let mut global_min = arrays[0][0];
        let mut global_max = *arrays[0].last().unwrap();
        let mut result = 0;

        for arr in arrays.iter().skip(1) {
            let local_min = arr[0];
            let local_max = *arr.last().unwrap();

            result = result.max((local_max - global_min).abs().max((global_max - local_min).abs()));

            global_min = global_min.min(local_min);
            global_max = global_max.max(local_max);
        }

        result
    }
}
```
```JavaScript []
/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    
    let globalMin = arrays[0][0];
    let globalMax = arrays[0][arrays[0].length - 1];
    let result = 0;

    for (let i = 1; i < arrays.length; i++) {
        const localMin = arrays[i][0];
        const localMax = arrays[i][arrays[i].length - 1];

        result = Math.max(result, Math.max(localMax - globalMin, globalMax - localMin));

        globalMin = Math.min(globalMin, localMin);
        globalMax = Math.max(globalMax, localMax);
    }

    return result;
};
```

---
## Dry Run

### Example 1

**Input:** `arrays = [[1,2,3],[4,5],[1,2,3]]`

**Output:** `4`

#### Dry Run Table

| **Array Index** | **Current Array** | **Local Min** | **Local Max** | **Global Min** | **Global Max** | **Result** | **Calculation Details**                                 |
|-----------------|--------------------|---------------|---------------|----------------|----------------|------------|--------------------------------------------------------|
| 0               | `[1,2,3]`          | 1             | 3             | 1              | 3              | 0          | Initial global values. No distance to compute yet.    |
| 1               | `[4,5]`            | 4             | 5             | 1              | 3              | 4          | Distance 1: `5 - 1 = 4`<br> Distance 2: `3 - 4 = -1`<br> Result = max(0, 4) = 4 |
| 2               | `[1,2,3]`          | 1             | 3             | 1              | 5              | 4          | Distance 1: `3 - 1 = 2`<br> Distance 2: `5 - 1 = 4`<br> Result = max(4, 4) = 4 |

**Explanation:**
- **Initial Values:** Start with `globalMin = 1` and `globalMax = 3` from the first array.
- **First Array:** No calculations are needed; this is the initial setup.
- **Second Array:** Update `result` using the differences between the current array's values and global extremes. The maximum distance found is 4.
- **Third Array:** Again, compute distances with updated global min/max. The result remains 4 as the maximum distance hasn't changed.

### Example 2

**Input:** `arrays = [[1],[1]]`

**Output:** `0`

#### Dry Run Table

| **Array Index** | **Current Array** | **Local Min** | **Local Max** | **Global Min** | **Global Max** | **Result** | **Calculation Details**                       |
|-----------------|--------------------|---------------|---------------|----------------|----------------|------------|------------------------------------------------|
| 0               | `[1]`              | 1             | 1             | 1              | 1              | 0          | Initial global values. No distance to compute yet. |
| 1               | `[1]`              | 1             | 1             | 1              | 1              | 0          | Local min and max are same as global values.<br> Distance 1: `1 - 1 = 0`<br> Distance 2: `1 - 1 = 0`<br> Result = max(0, 0) = 0 |

**Explanation:**
- **Initial Values:** Start with `globalMin = 1` and `globalMax = 1` from the first array.
- **First Array:** Only one array; thus, no distance computation is needed.
- **Second Array:** Both local min and max are the same as the global min and max. The distance between elements in different arrays is zero since all elements are the same.



