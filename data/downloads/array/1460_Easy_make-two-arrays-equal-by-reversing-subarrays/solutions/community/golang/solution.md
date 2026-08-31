# O(n) || Counting Sort | HashMap | Beats 100% Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 46
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5564948/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5564948/)

---


# Approach 1 Counting Sort

# Intuition

The key to solving it lies in understanding the fundamental properties of array reversals. The ability to reverse any subarray essentially means we can rearrange the elements in any order we want, as long as we have the correct elements to begin with.

This led me to understand that: the problem isn't about finding the exact sequence of reversals, but rather about determining if both arrays contain the same elements, regardless of their order. If they do, we can always find a series of reversals to make them identical.

# Approach

This focuses on comparing the element composition of both arrays rather than their ordering. Here's a breakdown of the logic:

1. **Element Counting:**
   Instead of trying to match the exact order of elements, we can count the occurrences of each element in both arrays. If these counts match for all elements, we know we can make the arrays equal through reversals.

2. **Efficient Counting Method:**
   To count elements efficiently, I use an array where the index represents the element value, and the value at that index represents its count. This works because we're told that all elements are between 1 and 1000.

3. **Simultaneous Processing:**
   Rather than counting elements in each array separately and then comparing, we can process both arrays simultaneously. We increment the count for elements in the target array and decrement for elements in the current array.

4. **Unique Element Tracking:**
   To optimize further, I keep track of the number of unique elements we've encountered. This allows us to determine equality without a final pass through the counting array.

5. **Final Check:**
   If after processing both arrays, our unique element count is zero, it means every element that was added (from the target array) was also subtracted (from the current array), proving the arrays have identical composition.

Let's delve deeper into each aspect of this approach:

**Element Counting Mechanism:**
The heart of this solution is the element counting mechanism. By using an array (elementCounts) where the index corresponds to the element value, we create a direct mapping between elements and their counts. This is incredibly efficient for our purpose.

When we encounter an element from the target array, we increment its count. When we see an element from the current array, we decrement its count. If both arrays have the same composition, these operations should balance out for each element.

**Unique Element Tracking:**
The uniqueCount variable is a clever optimization. It keeps track of how many different elements we've seen that still have a non-zero count. When we increment a count from 0 to 1, we've found a new unique element, so we increment uniqueCount. When we decrement a count from 1 to 0, we've balanced out a previously unique element, so we decrement uniqueCount.

This approach allows us to know immediately when we've balanced all elements, without needing to check the entire elementCounts array at the end.

**Simultaneous Processing:**
Processing both arrays in a single loop is not just an optimization for speed; it's an elegant way to compare the arrays. Each iteration compares corresponding elements from both arrays, updating our counts and uniqueCount accordingly.

This method is particularly effective because it doesn't matter in what order we process the elements. The final state of our counting mechanism will be the same regardless of the order in which we encounter the elements.

**Final Equality Check:**
The beauty of this approach is in its simplicity at the end. If uniqueCount is 0, it means every element we added from the target array was also subtracted by an element from the current array. This can only happen if both arrays have exactly the same elements.

**Edge Cases and Constraints:**
This solution elegantly handles several edge cases:

1. Arrays of different lengths: *The problem statement guarantees that both arrays have the same length,* but if they didn't, our approach would still work correctly. The uniqueCount would not reach 0 if the arrays had different numbers of elements.

2. Large array sizes: The solution efficiently handles arrays up to the maximum size of 1000 elements.

3. Repeated elements: The counting mechanism naturally accounts for elements that appear multiple times in either array.

4. Single-element arrays: These are handled just as effectively as larger arrays, making our solution robust across all possible inputs within the given constraints.

**Why This Works:**
The key insight that makes this solution work is the realization that the order of elements doesn't matter if we can reverse subarrays. Any permutation of the same set of elements can be achieved through a series of reversals.

By reducing the problem to element counting, we've transformed a potentially complex problem of finding reversal sequences into a straightforward comparison of array compositions.


# Complexity

- **Time complexity: O(n)**, where n is the length of the input arrays. We make a single pass through both arrays simultaneously, performing constant-time operations for each element.

- **Space complexity: O(1)**. We use a fixed-size array of 1001 elements for counting, regardless of the input size. This is considered constant space in big O notation.

# Code
```Java []
class Solution {
    public boolean canBeEqual(int[] targetArray, int[] currentArray) {
       
        int[] elementCounts = new int[1001];
        int uniqueCount = 0;
        
        for (int i = 0; i < targetArray.length; i++) {
            if (elementCounts[targetArray[i]]++ == 0) uniqueCount++;
            if (elementCounts[currentArray[i]]-- == 1) uniqueCount--;
        }
        
        return uniqueCount == 0;
    }
}
```





```cpp []
class Solution {
public:
    bool canBeEqual(vector<int>& targetArray, vector<int>& currentArray) {
        vector<int> elementCounts(1001, 0);
        int uniqueCount = 0;
        
        for (int i = 0; i < targetArray.size(); i++) {
            if (elementCounts[targetArray[i]]++ == 0) uniqueCount++;
            if (elementCounts[currentArray[i]]-- == 1) uniqueCount--;
        }
        
        return uniqueCount == 0;
    }
};
```


```python []
class Solution:
    def canBeEqual(self, targetArray: List[int], currentArray: List[int]) -> bool:
        elementCounts = [0] * 1001
        uniqueCount = 0
        
        for t, c in zip(targetArray, currentArray):
            if elementCounts[t] == 0:
                uniqueCount += 1
            elementCounts[t] += 1
            
            if elementCounts[c] == 1:
                uniqueCount -= 1
            elementCounts[c] -= 1
        
        return uniqueCount == 0
```


```go []
func canBeEqual(targetArray []int, currentArray []int) bool {
    elementCounts := make([]int, 1001)
    uniqueCount := 0
    
    for i := 0; i < len(targetArray); i++ {
        if elementCounts[targetArray[i]] == 0 {
            uniqueCount++
        }
        elementCounts[targetArray[i]]++
        
        if elementCounts[currentArray[i]] == 1 {
            uniqueCount--
        }
        elementCounts[currentArray[i]]--
    }
    
    return uniqueCount == 0
}
```
```Rust []
impl Solution {
    pub fn can_be_equal(target_array: Vec<i32>, current_array: Vec<i32>) -> bool {
        let mut element_counts = vec![0; 1001];
        let mut unique_count = 0;
        
        for (&t, &c) in target_array.iter().zip(current_array.iter()) {
            if element_counts[t as usize] == 0 {
                unique_count += 1;
            }
            element_counts[t as usize] += 1;
            
            if element_counts[c as usize] == 1 {
                unique_count -= 1;
            }
            element_counts[c as usize] -= 1;
        }
        
        unique_count == 0
    }
}
```


```JavaScript []
/**
 * @param {number[]} targetArray
 * @param {number[]} currentArray
 * @return {boolean}
 */
var canBeEqual = function(targetArray, currentArray) {
    const elementCounts = new Array(1001).fill(0);
    let uniqueCount = 0;
    
    for (let i = 0; i < targetArray.length; i++) {
        if (elementCounts[targetArray[i]]++ === 0) uniqueCount++;
        if (elementCounts[currentArray[i]]-- === 1) uniqueCount--;
    }
    
    return uniqueCount === 0;
};
```
---

# Approach 2. Prime Factor Signature
# Intuition

When approaching this problem, we need to think about how to efficiently compare two arrays regardless of their element order to find a way to create a unique "signature" for each array that remains constant even when the elements are rearranged.

This approach uses a fundamental principle in number theory: the unique factorization theorem. This theorem states that every positive integer has a unique prime factorization. By assigning a unique prime number to each possible value in our arrays (1 to 1000), we can create a product that serves as a distinctive signature for the array's content, regardless of the order of its elements.

Consider this: if we multiply prime numbers together, the result is always unique. No matter how you arrange the factors, the product remains the same. This property aligns perfectly with our problem, where we need to determine if two arrays have the same elements, disregarding their order.

By using prime numbers as our "encoding" for each array element, we ensure that:
1. Each number in the array is represented uniquely.
2. The order of multiplication doesn't matter (commutative property).
3. We can compare arrays by simply comparing their final products.


# Approach

Let's break down the Prime Factor Signature approach step by step:

1. **Prime Number Generation:**
   - We start by generating an array of prime numbers. Each index in this array corresponds to a possible value in our input arrays (1 to 1000).
   - The generatePrimes method uses a straightforward approach to find prime numbers up to our maximum value (1000).
   - We use the isPrime helper method to check for primality. It uses the fact that prime numbers greater than 2 are odd and checks for divisibility up to the square root of the number.

2. **Array Signature Calculation:**
   - We initialize two long variables, signatureTarget and signatureArr, both set to 1. These will store our array signatures.
   - We iterate through both input arrays simultaneously.
   - For each element in the target array, we multiply signatureTarget by the prime number at the index corresponding to that element's value.
   - Similarly, for each element in the arr array, we multiply signatureArr by the corresponding prime number.

3. **Signature Comparison:**
   - After processing all elements, we simply compare signatureTarget and signatureArr.
   - If they are equal, it means both arrays contain the same elements (possibly in different orders).
   - If they are different, the arrays must have different elements.






**Implementation Details:**

1. **Prime Generation:**
   - The generatePrimes method uses a simple but effective approach to generate prime numbers.
   - We start with 2 as our first prime and then check odd numbers until we have enough primes.
   - The isPrime method optimizes primality checking by:
     a) Quickly returning results for numbers less than 2 and for 2 itself.
     b) Checking only odd divisors up to the square root of the number.

2. **Array Processing:**
   - We use a single loop to process both arrays simultaneously, which is more efficient than separate loops.

3. **Signature Comparison:**
   - The final comparison is a simple equality check between the two long values.


# Complexity

### Time complexity: O(n)

The time complexity of this solution can be broken down into two parts:

1. Prime Number Generation: O(m * sqrt(m))
   - Where m is MAX_VALUE (1000 in this case).
   - This is done once and can be considered a constant time operation relative to the input size.
   - The isPrime method takes O(sqrt(m)) time for each number checked.
   - We generate primes up to m, but we only need to check odd numbers.

2. Array Processing: O(n)
   - Where n is the length of the input arrays.
   - We iterate through both arrays once, performing constant time operations for each element.

*Since the prime generation is done once and its complexity doesn't depend on the input array size, for multiple calls to canBeEqual, we can consider it as O(1).Therefore, the dominant factor is the array processing, giving us an overall time complexity of O(n).*

### Space complexity: O(m)

The space complexity is determined by the following factors:

1. Prime Number Array: O(m)
   - We store an array of prime numbers up to MAX_VALUE (1000).
   - This is a constant space relative to the input size but grows with MAX_VALUE.

2. Additional Variables: O(1)
   - We use a constant number of additional variables (signatureTarget, signatureArr) regardless of input size.

The space used for the prime number array dominates, giving us an overall space complexity of O(m), where m is MAX_VALUE.

*It's worth noting that while this space complexity is technically O(m) and not O(1), m is a fixed constant in the context of this problem (1000). Therefore, for all practical purposes, we could argue that the space complexity is O(1) relative to the input size n.*

### Code

```Java []
class Solution {
    private static final int MAX_VALUE = 1000;
    private static final int[] PRIMES = generatePrimes(MAX_VALUE);

    public boolean canBeEqual(int[] target, int[] arr) {

        long signatureTarget = 1;
        long signatureArr = 1;

        for (int i = 0; i < target.length; i++) {
            signatureTarget *= PRIMES[target[i]];
            signatureArr *= PRIMES[arr[i]];
        }

        return signatureTarget == signatureArr;
    }

    private static int[] generatePrimes(int n) {
        int[] primes = new int[n + 1];
        primes[1] = 2; // Start with 2 as the first prime

        int count = 1;
        for (int num = 3; count < n; num += 2) {
            if (isPrime(num)) {
                primes[++count] = num;
            }
        }
        return primes;
    }

    private static boolean isPrime(int n) {
        if (n < 2) return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;
        for (int i = 3; i * i <= n; i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }
}
```
```C++ []
class Solution {
private:
    static const int MAX_VALUE = 1000;
    static vector<int> PRIMES;

    static bool isPrime(int n) {
        if (n < 2) return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;
        for (int i = 3; i * i <= n; i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }

    static vector<int> generatePrimes(int n) {
        vector<int> primes(n + 1, 0);
        primes[1] = 2;
        int count = 1;
        for (int num = 3; count < n; num += 2) {
            if (isPrime(num)) {
                primes[++count] = num;
            }
        }
        return primes;
    }

public:
    bool canBeEqual(vector<int>& target, vector<int>& arr) {
        

        if (PRIMES.empty()) {
            PRIMES = generatePrimes(MAX_VALUE);
        }

        vector<int> countTarget(MAX_VALUE + 1, 0), countArr(MAX_VALUE + 1, 0);

        for (size_t i = 0; i < target.size(); i++) {
            countTarget[target[i]]++;
            countArr[arr[i]]++;
        }

        return countTarget == countArr;
    }
};

vector<int> Solution::PRIMES;
```
```Python []
class Solution:
    MAX_VALUE = 1000
    PRIMES = []

    @classmethod
    def generate_primes(cls, n):
        primes = [0] * (n + 1)
        primes[1] = 2  # Start with 2 as the first prime
        count = 1
        num = 3
        while count < n:
            if cls.is_prime(num):
                count += 1
                primes[count] = num
            num += 2
        return primes

    @staticmethod
    def is_prime(n):
        if n < 2:
            return False
        if n == 2:
            return True
        if n % 2 == 0:
            return False
        for i in range(3, int(n**0.5) + 1, 2):
            if n % i == 0:
                return False
        return True

    def canBeEqual(self, target, arr):
        signature_target = 1
        signature_arr = 1
        for i in range(len(target)):
            signature_target *= self.PRIMES[target[i]]
            signature_arr *= self.PRIMES[arr[i]]
        return signature_target == signature_arr

# Initialize PRIMES
Solution.PRIMES = Solution.generate_primes(Solution.MAX_VALUE)
```
```Go []
package main

const MAX_VALUE = 1000

var PRIMES []int

func init() {
    PRIMES = generatePrimes(MAX_VALUE)
}

func generatePrimes(n int) []int {
    primes := make([]int, n+1)
    primes[1] = 2
    count := 1
    for num := 3; count < n; num += 2 {
        if isPrime(num) {
            count++
            primes[count] = num
        }
    }
    return primes
}

func isPrime(n int) bool {
    if n < 2 {
        return false
    }
    if n == 2 {
        return true
    }
    if n%2 == 0 {
        return false
    }
    for i := 3; i*i <= n; i += 2 {
        if n%i == 0 {
            return false
        }
    }
    return true
}

func canBeEqual(target []int, arr []int) bool {
    

    countTarget := make(map[int]int)
    countArr := make(map[int]int)

    for i := 0; i < len(target); i++ {
        countTarget[target[i]]++
        countArr[arr[i]]++
    }

    for k, v := range countTarget {
        if countArr[k] != v {
            return false
        }
    }

    return true
}
```
```Rust []
use std::collections::HashMap;



impl Solution {
    const MAX_VALUE: usize = 1000;

    fn generate_primes(n: usize) -> Vec<u32> {
        let mut primes = vec![0; n + 1];
        primes[1] = 2;
        let mut count = 1;
        let mut num = 3;
        while count < n {
            if Self::is_prime(num) {
                count += 1;
                primes[count] = num as u32;
            }
            num += 2;
        }
        primes
    }

    fn is_prime(n: usize) -> bool {
        if n < 2 {
            return false;
        }
        if n == 2 {
            return true;
        }
        if n % 2 == 0 {
            return false;
        }
        let sqrt_n = (n as f64).sqrt() as usize;
        for i in (3..=sqrt_n).step_by(2) {
            if n % i == 0 {
                return false;
            }
        }
        true
    }

    pub fn can_be_equal(target: Vec<i32>, arr: Vec<i32>) -> bool {
        

        let mut count_target = HashMap::new();
        let mut count_arr = HashMap::new();

        for (&t, &a) in target.iter().zip(arr.iter()) {
            *count_target.entry(t).or_insert(0) += 1;
            *count_arr.entry(a).or_insert(0) += 1;
        }

        count_target == count_arr
    }
}
```
```JavaScript []
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const count = new Map();

    for (let i = 0; i < target.length; i++) {
        count.set(target[i], (count.get(target[i]) || 0) + 1);
        count.set(arr[i], (count.get(arr[i]) || 0) - 1);
    }

    for (let value of count.values()) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
};
```


---

# Approach 3 HashMap-based Frequency Counting
## Intuition

As I have said previously that the first key insight is to recognize that the order of elements in the arrays doesn't matter. The problem statement allows us to reverse any subarray any number of times, which effectively means we can rearrange the elements in any order we want.

Consider the following:
1. If we can reverse any subarray, we can bring any element to any position.
2. By repeatedly applying this operation, we can achieve any permutation of the original array.

Therefore, the problem essentially boils down to checking if the two arrays contain the same elements with the same frequencies, regardless of their order.

This realization leads us to think about counting and comparing the frequencies of elements in both arrays. If the frequencies match for all elements, then it's possible to make the arrays equal through a series of reverse operations.


## Approach

After considering the intuition, we've decided to use a HashMap-based approach. This method allows us to count and compare frequencies in a single pass through both arrays First, we already know that the lengths of the two arrays are equal. This is mentioned in the constraints: target.length == arr.length. Therefore, Here's a step-by-step breakdown of the approach:



1. **Frequency Mapping**:
   - We use a single HashMap to keep track of the frequency differences between the two arrays.
   - As we iterate through both arrays simultaneously, we increment the count for elements in the target array and decrement for elements in the arr array.
   - This approach allows us to cancel out matching elements and easily identify any discrepancies.

2. **Efficient HashMap Operations**:
   - We use the `merge` method of HashMap (in Java) for efficient updates. This method combines the insertion and updating steps into a single operation.
   - For each element in target, we increment its count by 1.
   - For each element in arr, we decrement its count by 1.
   - If an element appears in both arrays with the same frequency, its final count in the map will be 0.

3. **Final Verification**:
   - After processing all elements, we check if all values in the HashMap are zero.
   - If they are, it means every element in target had a corresponding element in arr, and vice versa, with matching frequencies.
   - We use Java streams for a concise and efficient check of all values in the map.

4. **Result**:
   - If all counts in the HashMap are zero, we return true, indicating that the arrays can be made equal.
   - Otherwise, we return false, as there's at least one element with different frequencies in the two arrays.

## Algorithm Steps


1. Create a HashMap<Integer, Integer> called frequencyMap.
2. Iterate through the indices of target (and arr) from 0 to length-1:
   a. For the current element in target, use frequencyMap.merge(target[i], 1, Integer::sum) to increment its count.
   b. For the current element in arr, use frequencyMap.merge(arr[i], -1, Integer::sum) to decrement its count.
3. After the iteration, use frequencyMap.values().stream().allMatch(count -> count == 0) to check if all counts are zero.
4. Return the result of the allMatch operation.

## Complexity Analysis

### Time Complexity: O(n)

- The initial length check is O(1).
- We perform a single pass through both arrays simultaneously, which is O(n), where n is the length of the arrays.
- Each HashMap operation (merge) is amortized O(1).
- The final check using streams is also O(n) in the worst case, as it potentially needs to check all entries in the map.
- Therefore, the overall time complexity is O(n).

### Space Complexity: O(k), where k is the number of unique elements

- In the worst case, where all elements are unique, the space complexity would be O(n).
- However, given the constraint that the values are between 1 and 1000, the maximum space used by the HashMap is limited to O(1000), which is effectively O(1) with respect to the input size.
- Therefore, we can say that the space complexity is O(min(n, 1000)), which simplifies to O(1) for large n.

## Code 

```java []
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean canBeEqual(int[] target, int[] arr) {
        // Create a HashMap to store frequency differences
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        // Iterate through both arrays simultaneously
        for (int i = 0; i < target.length; i++) {
            // Increment count for elements in target
            frequencyMap.merge(target[i], 1, Integer::sum);
            // Decrement count for elements in arr
            frequencyMap.merge(arr[i], -1, Integer::sum);
        }

        // Check if all frequency differences are zero
        return frequencyMap.values().stream().allMatch(count -> count == 0);
    }
}
```



```cpp []
#include <unordered_map>
#include <vector>
#include <algorithm>

class Solution {
public:
    bool canBeEqual(std::vector<int>& target, std::vector<int>& arr) {
        // Create an unordered_map to store frequency differences
        std::unordered_map<int, int> frequencyMap;

        // Iterate through both arrays simultaneously
        for (size_t i = 0; i < target.size(); ++i) {
            // Increment count for elements in target
            ++frequencyMap[target[i]];
            // Decrement count for elements in arr
            --frequencyMap[arr[i]];
        }

        // Check if all frequency differences are zero
        return std::all_of(frequencyMap.begin(), frequencyMap.end(),
                           [](const auto& pair) { return pair.second == 0; });
    }
};
```



```python []
from collections import Counter

class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:

        # Use Counter to efficiently count frequency differences
        return Counter(target) == Counter(arr)
```



```go []
func canBeEqual(target []int, arr []int) bool {
    // Create a map to store frequency differences
    frequencyMap := make(map[int]int)

    // Iterate through both arrays simultaneously
    for i := 0; i < len(target); i++ {
        frequencyMap[target[i]]++
        frequencyMap[arr[i]]--
    }

    // Check if all frequency differences are zero
    for _, count := range frequencyMap {
        if count != 0 {
            return false
        }
    }

    return true
}
```



```rust []
use std::collections::HashMap;

impl Solution {
    pub fn can_be_equal(target: Vec<i32>, arr: Vec<i32>) -> bool {

        let mut frequency_map: HashMap<i32, i32> = HashMap::new();

        for (&t, &a) in target.iter().zip(arr.iter()) {
            *frequency_map.entry(t).or_insert(0) += 1;
            *frequency_map.entry(a).or_insert(0) -= 1;
        }

        frequency_map.values().all(|&count| count == 0)
    }
}

```

```JavaScript []
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {

    const frequencyMap = new Map();

    for (let i = 0; i < target.length; i++) {
        frequencyMap.set(target[i], (frequencyMap.get(target[i]) || 0) + 1);
        frequencyMap.set(arr[i], (frequencyMap.get(arr[i]) || 0) - 1);
    }

    for (let count of frequencyMap.values()) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
};

```

---
# 4. XOR-based Approach

# Intuition

Reminding you people again that think about the nature of array reversals and how they affect the elements. The key realization was that reversing subarrays doesn't change the overall composition of the array - it just rearranges the elements. This led me to think that what really matters is whether both arrays have the same elements, regardless of their order.

I also considered the constraints. With array lengths up to 1000 and values up to 1000, we're dealing with a relatively small problem space. This means we can afford some operations that might not scale well for much larger inputs.

The fact that we can make any number of reversals is crucial. It means that if the arrays have the same elements, we can always find a sequence of reversals to make them identical. The challenge, then, is to efficiently determine if they have the same elements.

# Approach

My approach to solving this problem involves a few key steps:



1. I thought about using a hash map to count the occurrences of each element in both arrays. But then I had an idea that could potentially be more efficient: using the XOR operation.

2. The XOR operation has a property: a ^ a = 0 for any number a. This means that if we XOR all elements from both arrays together, we'll end up with 0 if and only if both arrays have the same elements (possibly in different orders).

3. However, the XOR check alone isn't sufficient. Consider the arrays [1,1,2,2] and [1,2,1,2]. They would pass the XOR check, but they can't be made equal because the number of 1's and 2's differ.

4. To address this, we need to count the occurrences of each number in both arrays and ensure they match. We could use a hash map for this, but since we're already iterating through the arrays for the XOR check, we can do a second pass to count occurrences.

5. In the second pass, we only need to check the numbers in one of the arrays (let's say 'target'), and for each number, count its occurrences in both arrays. If at any point the counts don't match, we can return false.

6. If we make it through all these checks, we can conclude that the arrays can be made equal, and we return true.

Here's a more detailed breakdown of the steps:



1. **XOR check:**
   - Initialize xor = 0
   - For each index i from 0 to target.length - 1:
     - xor ^= target[i] ^ arr[i]
   - If xor != 0, return false

2. **Count check:**
   - For each number num in target:
     - If count(target, num) != count(arr, num), return false

3. **If we've made it this far, return true**

The count function is a simple linear search through the array, counting occurrences of the target number.

This approach is efficient in terms of time complexity, as we're making a constant number of passes through the arrays. It's also memory-efficient, as we're not using any additional data structures that grow with the input size.

The XOR check is a clever optimization that allows us to quickly rule out many cases where the arrays can't be made equal. It's much faster than sorting both arrays or using a hash map to count all elements upfront.

The count check is necessary to handle cases where the XOR check passes but the arrays still can't be made equal due to different numbers of occurrences of each element.


# Complexity

- **Time complexity: O(n^2)**

The time complexity of this solution is quadratic, O(n^2), where n is the length of the input arrays. Here's why:

1. The initial length check and the XOR operation are both O(n), as they involve a single pass through both arrays.

2. The count check, however, is where we get our quadratic complexity. For each unique number in the target array (worst case, this could be all n numbers), we call the count function twice (once for target and once for arr). The count function itself is O(n) as it scans through the entire array.

So in the worst case, we're doing n * 2 * n operations, which simplifies to O(n^2).

It's worth noting that this worst case occurs when all elements in the array are unique. In practice, especially given the constraint that all elements are between 1 and 1000, we're likely to see better average-case performance.

- **Space complexity: O(1)**

The space complexity of this solution is constant, O(1). We're not using any additional data structures that grow with the input size. We only use a few integer variables (xor and count) regardless of the size of the input arrays.




### CODE
```Java []
class Solution {
    public boolean canBeEqual(int[] target, int[] arr) {
        

        int xor = 0;
        for (int i = 0; i < target.length; i++) {
            xor ^= target[i] ^ arr[i];
        }

        if (xor != 0) {
            return false;
        }

        for (int num : target) {
            if (count(target, num) != count(arr, num)) {
                return false;
            }
        }

        return true;
    }

    private int count(int[] array, int target) {
        int count = 0;
        for (int num : array) {
            if (num == target) {
                count++;
            }
        }
        return count;
    }
}
```
```Python []
class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        

        xor = 0
        for t, a in zip(target, arr):
            xor ^= t ^ a

        if xor != 0:
            return False

        return all(target.count(num) == arr.count(num) for num in set(target))
```
```C++ []
class Solution {
public:
    bool canBeEqual(vector<int>& target, vector<int>& arr) {
       
        int xor_sum = 0;
        for (int i = 0; i < target.size(); i++) {
            xor_sum ^= target[i] ^ arr[i];
        }

        if (xor_sum != 0) {
            return false;
        }

        unordered_map<int, int> count;
        for (int num : target) {
            count[num]++;
        }
        for (int num : arr) {
            count[num]--;
            if (count[num] == 0) {
                count.erase(num);
            }
        }

        return count.empty();
    }
};
```
```Go []
func canBeEqual(target []int, arr []int) bool {
    

    xor := 0
    for i := 0; i < len(target); i++ {
        xor ^= target[i] ^ arr[i]
    }

    if xor != 0 {
        return false
    }

    count := make(map[int]int)
    for _, num := range target {
        count[num]++
    }
    for _, num := range arr {
        count[num]--
        if count[num] == 0 {
            delete(count, num)
        }
    }

    return len(count) == 0
}
```
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn can_be_equal(target: Vec<i32>, arr: Vec<i32>) -> bool {
        

        let xor: i32 = target.iter().zip(arr.iter()).map(|(t, a)| t ^ a).fold(0, |acc, x| acc ^ x);

        if xor != 0 {
            return false;
        }

        let mut count: HashMap<i32, i32> = HashMap::new();
        for &num in target.iter() {
            *count.entry(num).or_insert(0) += 1;
        }
        for &num in arr.iter() {
            *count.entry(num).or_insert(0) -= 1;
            if count[&num] == 0 {
                count.remove(&num);
            }
        }

        count.is_empty()
    }
}
```
```JavaScript []
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    
    let xor = 0;
    for (let i = 0; i < target.length; i++) {
        xor ^= target[i] ^ arr[i];
    }

    if (xor !== 0) {
        return false;
    }

    const count = new Map();
    for (const num of target) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    for (const num of arr) {
        count.set(num, (count.get(num) || 0) - 1);
        if (count.get(num) === 0) {
            count.delete(num);
        }
    }

    return count.size === 0;
};
```
---

*I was planning to add three more approaches, but unfortunately, LeetCode won't allow it. Apparently, the content size has become too large. I might consider writing a separate post altogether to include these additional approaches.*
---
