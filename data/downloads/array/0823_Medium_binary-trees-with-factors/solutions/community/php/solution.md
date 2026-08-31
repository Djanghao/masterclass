# 🔥Efficient Method🔥| Explained Intuition & Approach | Java | C++ | Python | JavaScript | C# | PHP

**Author:** Akhilesh21
**Votes:** 34
**Link:** [https://leetcode.com/problems/binary-trees-with-factors/solutions/4209092/](https://leetcode.com/problems/binary-trees-with-factors/solutions/4209092/)

---

# Intuition \uD83D\uDE80
<!-- Describe your first thoughts on how to solve this problem. -->
The key idea here is to use dynamic programming to count the number of valid binary trees efficiently. The intuition is as follows:

1. Sort the input array: Start by sorting the array in ascending order because you need to consider factors from small to large values for dynamic programming.

2. Initialize a dynamic programming map: Create a map to store the number of binary trees that can be formed with each element as the root node. Initialize the values in the map with 1 because each element can be a valid tree on its own.

3. Dynamic Programming: Iterate through the sorted array, and for each element, iterate through all previous elements as potential factors. If a factor exists, update the number of binary trees ending with the current element by considering the factor's contribution. The dynamic programming formula used in this code is based on the principle that if you have two factors (j and i/j), you can form `dp[j] * dp[i/j]` new binary trees that end with the current element.

4. Calculate the final result: Sum up all the values in the dynamic programming map to get the total number of valid binary trees.


# Approach \uD83D\uDE80
<!-- Describe your approach to solving the problem. -->
1. Sort the array in ascending order to consider factors from small to large values.

2. Create a set to store unique numbers in the array. This set helps in faster containment checks.

3. Initialize a dynamic programming map (`dp`) where the keys are array elements, and the values are the number of binary trees ending with that element. Initialize all values to 1, indicating that each element can form a single tree by itself.

4. Iterate through the array elements:
   - For each element `i`, iterate through the elements that precede it (`j`).
   - If `j` is larger than the square root of `i`, break the loop because further `j` values won't be factors.
   - Check if `j` is a factor of `i` and if `i/j` is in the set of unique numbers.
   - Update the number of binary trees ending with `i` based on the factors `j` and `i/j` using the dynamic programming formula. This accounts for the new trees that can be formed using the factors.

5. Calculate the final result by summing up all the values in the dynamic programming map and return the result modulo 1000000007 (as specified in the problem).

The below code is an efficient implementation of this approach, using dynamic programming to count the valid binary trees while considering all possible factors and combinations.


# Complexity \uD83D\uDE81
## \uD83C\uDFF9Time complexity: $$O(n * sqrt(max(arr)))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1. **Sorting:** The initial step involves sorting the input array. The time complexity for this is $$O(n * log(n))$$, where 'n' is the number of elements in the array.

2. **Dynamic Programming:** The main loop involves nested loops, where you iterate through all elements of the input array. In the worst case, for each element 'i', you iterate through all previous elements 'j' up to the square root of 'i'. So, the time complexity of this part is $$O(n * sqrt(max(arr)))$$ where 'n' is the number of elements in the array, and 'max(arr)' is the maximum element in the array.

3. **Final Summation:** After completing the dynamic programming, you iterate through all values in the `dp` map to calculate the final result. This requires iterating through 'n' elements in the map. This step contributes $$O(n)$$ to the time complexity.

Combining these steps, the overall time complexity is $$O(n * log(n)) + O(n * sqrt(max(arr))) + O(n)$$, which can be simplified to $$O(n * sqrt(max(arr))).$$


## \uD83C\uDFF9Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

1. **Sorting:** Sorting the input array in-place doesn't require any additional space, so this step has a space complexity of $$O(1).$$

2. **Set for Unique Numbers:** You create a set `uniqueNumbers` to store unique elements from the input array. In the worst case, if all elements are unique, this set would have 'n' elements. Therefore, the space complexity of this set is $$O(n).$$

3. **Dynamic Programming Map:** You create a map `dp` to store values for each element in the input array. In the worst case, there can be 'n' key-value pairs in the map. So, the space complexity for the map is $$O(n).$$
4. 
Combining these factors, the overall space complexity of the code is $$O(n)$$ due to the sets and maps created.

# Code \u2712\uFE0F
``` Java []
public class Solution {
    private static final int MOD = 1000000007;

    public int numFactoredBinaryTrees(int[] arr) {
        // Step 1: Sort the input array in ascending order.
        Arrays.sort(arr);
        
        // Create a set to make the containment check faster.
        Set<Integer> uniqueNumbers = new HashSet<>();
        for (int num : arr) {
            uniqueNumbers.add(num);
        }

        // Step 2: Initialize a map to store the number of binary trees that end with each element in the array.
        Map<Integer, Integer> dp = new HashMap<>();
        for (int num : arr) {
            dp.put(num, 1);
        }

        // Step 3: Dynamic Programming
        for (int i : arr) {
            for (int j : arr) {
                // If j is larger than the square root of i, break the loop because further j values won't be factors.
                if (j > Math.sqrt(i)) break;
                
                // Check if j is a factor of i and i/j is in the set of unique numbers.
                if (i % j == 0 && uniqueNumbers.contains(i / j)) {
                    long product = (long) dp.get(j) * dp.get(i / j);
                    
                    // Update the number of binary trees ending with i based on the factors j and i/j.
                    dp.put(i, (int) ((dp.get(i) + (i / j == j ? product : product * 2)) % MOD));
                }
            }
        }

        // Step 4: Calculate the final result.
        int result = 0;
        for (int value : dp.values()) {
            result = (result + value) % MOD;
        }
        return result;
    }
}

``` 
``` C++ []

class Solution {
const int MOD = 1e9 + 7;
public:
    int numFactoredBinaryTrees(std::vector<int>& arr) {
        // Step 1: Sort the input array.
        std::sort(arr.begin(), arr.end());
        
        // Step 2: Create a set to store unique numbers in the array.
        std::unordered_set<int> uniqueNumbers(arr.begin(), arr.end());
        
        // Step 3: Initialize a dynamic programming map.
        std::unordered_map<int, int> dp;
        for (int num : arr) {
            dp[num] = 1;
        }
        
        // Step 4: Dynamic Programming
        for (int i : arr) {
            for (int j : arr) {
                // If j is larger than the square root of i, break the loop because further j values won't be factors.
                if (j > std::sqrt(i)) break;
                
                // Check if j is a factor of i and if i/j is in the set of unique numbers.
                if (i % j == 0 && uniqueNumbers.find(i / j) != uniqueNumbers.end()) {
                    long long temp = static_cast<long long>(dp[j]) * dp[i / j];
                    
                    // Update the number of binary trees ending with i based on the factors j and i/j.
                    if (i / j == j) {
                        dp[i] = (dp[i] + temp) % MOD;
                    } else {
                        dp[i] = (dp[i] + temp * 2) % MOD;
                    }
                }
            }
        }
        
        // Step 5: Calculate the final result.
        int result = 0;
        for (auto& [_, val] : dp) {
            result = (result + val) % MOD;
        }
        return result;
    }
};
```
``` Python []

MOD = 10**9 + 7
class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        # Step 1: Sort the input array.
        arr.sort()
        
        # Step 2: Create a set to store unique numbers in the array.
        unique_numbers = set(arr)
        
        # Step 3: Initialize a dynamic programming dictionary.
        dp = {x: 1 for x in arr}
        
        # Step 4: Dynamic Programming
        for i in arr:
            for j in arr:
                # If j is larger than the square root of i, break the loop because further j values won't be factors.
                if j > i**0.5:
                    break
                
                # Check if j is a factor of i and if i/j is in the set of unique numbers.
                if i % j == 0 and i // j in unique_numbers:
                    if i // j == j:
                        # If j and i/j are the same, update dp[i] accordingly.
                        dp[i] += dp[j] * dp[j]
                    else:
                        # If j and i/j are different, update dp[i] accordingly.
                        dp[i] += dp[j] * dp[i // j] * 2
                    dp[i] %= MOD
        
        # Step 5: Calculate the final result.
        result = sum(dp.values()) % MOD
        return result

```
``` JavaScript []
const MOD = 10**9 + 7;
var numFactoredBinaryTrees = function(arr) {

    // Step 1: Sort the input array.
    arr.sort((a, b) => a - b);
    
    // Step 2: Create a set to store unique numbers in the array.
    const uniqueNumbers = new Set(arr);
    
    // Step 3: Initialize a dynamic programming object.
    const dp = {};
    for (let x of arr) {
        dp[x] = 1;
    }
    
    // Step 4: Dynamic Programming
    for (let i of arr) {
        for (let j of arr) {
            // If j is larger than the square root of i, break the loop because further j values won't be factors.
            if (j > Math.sqrt(i)) break;
            
            // Check if j is a factor of i and if i/j is in the set of unique numbers.
            if (i % j === 0 && uniqueNumbers.has(i / j)) {
                // Update the number of binary trees ending with i based on the factors j and i/j.
                dp[i] += (i / j === j ? dp[j] * dp[j] : dp[j] * dp[i / j] * 2);
                dp[i] %= MOD;
            }
        }
    }
    
    // Step 5: Calculate the final result.
    const result = Object.values(dp).reduce((acc, val) => (acc + val) % MOD, 0);
    return result;
}

```
``` C# []
public class Solution {
    private const int MOD = 1000000007;

    public int NumFactoredBinaryTrees(int[] arr) {
        // Step 1: Sort the input array.
        Array.Sort(arr);
        
        // Step 2: Create a HashSet to store unique numbers in the array.
        HashSet<int> uniqueNumbers = new HashSet<int>(arr);
        
        // Step 3: Initialize a Dictionary for dynamic programming.
        Dictionary<int, long> dp = new Dictionary<int, long>();
        foreach (int num in arr) {
            dp[num] = 1;
        }
        
        // Step 4: Dynamic Programming
        foreach (int i in arr) {
            foreach (int j in arr) {
                // If j is larger than the square root of i, break the loop because further j values won't be factors.
                if (j > Math.Sqrt(i)) break;
                
                // Check if j is a factor of i and if i/j is in the set of unique numbers.
                if (i % j == 0 && uniqueNumbers.Contains(i / j)) {
                    long temp = dp[j] * dp[i / j];
                    
                    // Update the number of binary trees ending with i based on the factors j and i/j.
                    dp[i] = (dp[i] + (i / j == j ? temp : temp * 2)) % MOD;
                }
            }
        }
        
        // Step 5: Calculate the final result.
        long result = 0;
        foreach (long value in dp.Values) {
            result = (result + value) % MOD;
        }
        return (int)result;
    }
}

```
``` PHP []
class Solution {
    function numFactoredBinaryTrees($arr) {
        // Step 1: Sort the input array in ascending order.
        sort($arr);
        
        // Step 2: Create a hash map for faster containment checks.
        $uniqueNumbers = array_flip($arr);
        
        // Step 3: Initialize a hash map for dynamic programming.
        $dp = [];
        foreach ($arr as $x) {
            $dp[$x] = 1;
        }

        // Step 4: Dynamic Programming
        foreach ($arr as $i) {
            foreach ($arr as $j) {
                // If $j is larger than the square root of $i, break the loop.
                if ($j > sqrt($i)) break;

                // Check if $j is a factor of $i and if $i/$j is in the unique numbers hash map.
                if ($i % $j == 0 && isset($uniqueNumbers[$i / $j])) {
                    // Calculate the temporary result.
                    $temp = (int)((($dp[$j] * $dp[$i / $j]) % 1000000007) * ($i / $j == $j ? 1 : 2));
                    
                    // Update the number of binary trees ending with $i based on the factors $j and $i/$j.
                    $dp[$i] = ($dp[$i] + $temp) % 1000000007;
                }
            }
        }

        // Step 5: Calculate the final result.
        $result = 0;
        foreach ($dp as $val) {
            $result = ($result + $val) % 1000000007;
        }
        
        return $result;
    }
}

```
![vote.jpg](./images/0.jpeg)

