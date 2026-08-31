# 🔥3 Approaches ->🔥Brute Force,🔥Two Pointers &🔥Stack | Detail Explanation | Java | C++ | Py | Js |

**Author:** Akhilesh21
**Votes:** 85
**Link:** [https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4241460/](https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4241460/)

---

# 1st Method :- Brute force\uD83D\uDD25

## Intuition \uD83D\uDE80
The problem is to build an array `target` using stack operations. To do this, we can start with an empty stack and iterate through the `target` array. For each element in the `target` array, we need to determine whether we should push or pop to match the element in `target`. The intuition is that if the current element in `target` does not match the current element we want to push (denoted by the `current` variable), we can push and pop until they match, and then push the current element. We repeat this process for all elements in the `target` array.

## Approach \uD83D\uDE80
1. Initialize an empty list `result` to store the stack operations.
2. Initialize a variable `current` to 1. This variable represents the current number that we want to push onto the stack.
3. Iterate through the `target` array.
4. For each element in the `target` array, compare it with the `current` variable:
   - If the current element in `target` is greater than the `current` variable, it means we need to push and pop until they match:
     - While the `current` is less than the current element in `target`, push the current number onto the stack and generate a "Push" operation, then immediately pop to match the current element. Increment the `current` variable.
   - If the current element in `target` matches the `current` variable, simply push the current element onto the stack and increment the `current` variable.
5. Continue this process for all elements in the `target` array.
6. Return the `result` list, which contains the stack operations needed to build the `target` array.

The approach essentially simulates the stack operations required to match the elements in the `target` array and builds the `result` list accordingly. The "Push" and "Pop" operations are generated based on the comparison between the current element in `target` and the `current` variable. This approach is simple and straightforward, but it may not be the most efficient, as it involves multiple "Push" and "Pop" operations in some cases.

## \u2712\uFE0FCode

``` Java []
class Solution {
    public static List<String> buildArray(int[] target, int n) {
        List<String> result = new ArrayList<>();
        int current = 1; // The current number to be pushed.

        for (int i = 0; i < target.length; i++) {
            while (current < target[i]) {
                // While the current number is less than the target number,
                // push the current number and generate the "Push" operation.
                result.add("Push");
                result.add("Pop"); // After pushing, immediately pop.
                current++;
            }

            // The current number matches the target number, so push it.
            result.add("Push");

            current++; // Move to the next number to be pushed.
        }

        return result;
    }
}

```
``` C++ []
class Solution {
public:
    vector<string> buildArray(vector<int>& target, int n) {
        vector<string> result;
        int current = 1; // The current number to be pushed.

        for (int i = 0; i < target.size(); i++) {
            while (current < target[i]) {
                // While the current number is less than the target number,
                // push the current number and generate the "Push" operation.
                result.push_back("Push");
                result.push_back("Pop"); // After pushing, immediately pop.
                current++;
            }

            // The current number matches the target number, so push it.
            result.push_back("Push");

            current++; // Move to the next number to be pushed.
        }
        return result;
    }
};

```
``` Python []
class Solution(object):
    def buildArray(self, target, n):
        result = []
        current = 1  # The current number to be pushed.

        for num in target:
            while current < num:
                # While the current number is less than the target number,
                # push the current number and generate the "Push" operation.
                result.extend(["Push", "Pop"])  # Extend the list with "Push" and "Pop".
                current += 1

            # The current number matches the target number, so push it.
            result.append("Push")

            current += 1  # Move to the next number to be pushed.

        return result

```
``` JavaScript []
var buildArray = function(target, n) {
    const result = [];
    let current = 1; // The current number to be pushed

    for (let i = 0; i < target.length; i++) {
        while (current < target[i]) {
            // While the current number is less than the target number,
            // push the current number and generate the "Push" operation.
            result.push("Push");
            result.push("Pop"); // After pushing, immediately pop
            current++;
        }

        // The current number matches the target number, so push it.
        result.push("Push");

        current++; // Move to the next number to be pushed
    }

    return result;
}
```
``` C# []
class Solution {
    public IList<string> BuildArray(int[] target, int n) 
    {
        List<string> result = new List<string>();
        int current = 1; // The current number to be pushed

        for (int i = 0; i < target.Length; i++)
        {
            while (current < target[i])
            {
                // While the current number is less than the target number,
                // push the current number and generate the "Push" operation.
                result.Add("Push");
                result.Add("Pop"); // After pushing, immediately pop
                current++;
            }

            // The current number matches the target number, so push it.
            result.Add("Push");

            current++; // Move to the next number to be pushed
        }
        return result;
    }
}
```
## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(n)
The time complexity of the code is O(n), where 'n' is the value of the parameter n. This is because the code iterates through the numbers from 1 to n once, and for each number, it performs constant-time operations to push and pop elements or add elements to the result list. The key loop is based on the length of the target array, which can be at most 'n' in size. Therefore, the overall time complexity is linear in terms of 'n'.

### \uD83C\uDFF9Space complexity: O(n)
The space complexity of the code is O(n), where 'n' is the size of the `target` array. The space complexity is determined by the size of the `result` list, which stores the operations. In the worst case, the `result` list may contain one operation per element in the `target` array.

![vote.jpg](./images/0.jpeg)

---

# 2nd Method :- Optimized Approach Using Two Pointers\uD83D\uDD25

## Intuition \uD83D\uDE80
The problem asks us to build an array with a given target sequence using a set of allowed operations. The operations include "Push" (add an element to the stack) and "Pop" (remove the element from the stack). To achieve this, we want to simulate the process of building the target sequence.

## Approach \uD83D\uDE80

1. Initialize two pointers: `targetIndex` and `currentNumber`. `targetIndex` keeps track of the current position in the `target` array, and `currentNumber` represents the numbers from 1 to `n`, where `n` is the input parameter.

2. While `targetIndex` is less than the length of the `target` array (i.e., there are more elements to process in the target array), we continue iterating.

3. Inside the loop, we check if the current element in the `target` array (at index `targetIndex`) matches the `currentNumber`. If they match, it means we want to add the current number to the stack, so we add "Push" to the `operations` list and increment both `targetIndex` and `currentNumber`.

4. If the elements don't match, we still want to add the current number to the stack (hence, "Push"), but we also need to remove it immediately (hence, "Pop"). So, we add "Push" followed by "Pop" to the `operations` list to simulate this sequence of operations. We increment only the `currentNumber` pointer in this case.

5. We continue this process until we've processed all elements in the `target` array.

6. Finally, we return the `operations` list, which contains the sequence of operations needed to build the target sequence.

The key idea here is to compare the current element in the `target` array with the `currentNumber`. If they match, we add "Push" and move both pointers. If they don't match, we add "Push" and "Pop" to simulate adding the number and immediately removing it from the stack. This approach ensures that we construct the target sequence efficiently.

## \u2712\uFE0FCode
``` Java []
class Solution {
    public List<String> buildArray(int[] target, int n) {
        List<String> operations = new ArrayList<>();
        int targetIndex = 0; // Pointer for target array
        int currentNumber = 1; // Pointer for numbers 1 to n

        while (targetIndex < target.length) {
            if (target[targetIndex] == currentNumber) {
                // If the current number in the target array matches the current number 1 to n
                // Push "Push" operation and move both pointers
                operations.add("Push");
                targetIndex++;
            } else {
                // If the numbers don't match, push "Push" followed by "Pop" operation
                // and only move the current number pointer
                operations.add("Push");
                operations.add("Pop");
            }
            currentNumber++;
        }

        return operations;
    }
}

```
``` C++ []
class Solution {
public:
    vector<string> buildArray(vector<int>& target, int n) {
        vector<string> operations;
        int targetIndex = 0; // Pointer for target array
        int currentNumber = 1; // Pointer for numbers 1 to n

        while (targetIndex < target.size()) {
            if (target[targetIndex] == currentNumber) {
                // If the current number in the target array matches the current number 1 to n
                // Push "Push" operation and move both pointers
                operations.push_back("Push");
                targetIndex++;
            } else {
                // If the numbers don't match, push "Push" followed by "Pop" operation
                // and only move the current number pointer
                operations.push_back("Push");
                operations.push_back("Pop");
            }
            currentNumber++;
        }

        return operations;
    }
};
```
``` Python []
class Solution:
    def buildArray(self, target, n):
        operations = []
        targetIndex = 0  # Pointer for target array
        currentNumber = 1  # Pointer for numbers 1 to n

        while targetIndex < len(target):
            if target[targetIndex] == currentNumber:
                # If the current number in the target array matches the current number 1 to n
                # Append "Push" operation and move both pointers
                operations.append("Push")
                targetIndex += 1
            else:
                # If the numbers don't match, append "Push" followed by "Pop" operation
                # and only move the current number pointer
                operations.append("Push")
                operations.append("Pop")
            currentNumber += 1

        return operations

```
``` JavaScript []
var buildArray = function(target, n) {
    const operations = [];
    let targetIndex = 0; // Pointer for target array
    let currentNumber = 1; // Pointer for numbers 1 to n

    while (targetIndex < target.length) {
        if (target[targetIndex] === currentNumber) {
            // If the current number in the target array matches the current number 1 to n
            // Push "Push" operation and move both pointers
            operations.push("Push");
            targetIndex++;
        } else {
            // If the numbers don't match, push "Push" followed by "Pop" operation
            // and only move the current number pointer
            operations.push("Push");
            operations.push("Pop");
        }
        currentNumber++;
    }

    return operations;
};

```
``` C# []
public class Solution {
    public IList<string> BuildArray(int[] target, int n) {
        var operations = new List<string>();
        int targetIndex = 0; // Pointer for target array
        int currentNumber = 1; // Pointer for numbers 1 to n

        while (targetIndex < target.Length) {
            if (target[targetIndex] == currentNumber) {
                // If the current number in the target array matches the current number 1 to n
                // Add "Push" operation and move both pointers
                operations.Add("Push");
                targetIndex++;
            } else {
                // If the numbers don't match, add "Push" followed by "Pop" operation
                // and only move the current number pointer
                operations.Add("Push");
                operations.Add("Pop");
            }
            currentNumber++;
        }

        return operations;
    }
}

```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(n)
- The code iterates through the `target` array, which has a length of `n`, exactly once.
- For each element in the `target` array, it performs a constant number of operations (push and/or pop).
- Therefore, the time complexity of this code is O(n), where n is the length of the `target` array.

### \uD83C\uDFF9Space complexity: O(n)
- The space complexity of this code is determined by the space used for the `operations` list.
- The size of the `operations` list can be at most 2n, where n is the length of the `target` array. This is because, in the worst case, for each element in the `target` array, you might have to push and pop, resulting in two operations.
- Therefore, the space complexity is O(n), where n is the length of the `target` array.


![vote.jpg](./images/1.jpeg)

---

# 3rd Method :- Efficient Method=> Stack\uD83D\uDD25

## Intuition \uD83D\uDE80
The problem requires us to construct the `target` array by simulating a series of operations. We have two sequences: `target` and a unique permutation `arr` of `target`. We need to determine the operations required to transform an empty stack into the `target` array using the following operations: "Push" (to insert a new element at the top of the stack) and "Pop" (to remove the element on the top of the stack).

## Approach \uD83D\uDE80
1. Create an empty stack to simulate the operations and initialize an index, `currentIndex`, to track the progress in the `target` array.

2. Iterate through the numbers from 1 to `n` (where `n` is the maximum number given in the problem). During this iteration, we'll determine whether to perform a "Push" operation or a "Push" followed by a "Pop" operation based on the matching between the current number and the `target` array.

3. Inside the loop, check if `currentIndex` is greater than or equal to the length of the `target` array. If this is the case, it means we've processed all elements in the `target` array, and we can exit the loop.

4. If the current number being considered matches the element at `target[currentIndex]`, we add a "Push" operation to the `operations` list, indicating that we are adding this number to the stack. Then, we increment `currentIndex` to move to the next element in the `target` array.

5. If the current number does not match the element at `target[currentIndex]`, we add a "Push" operation to indicate that we are adding this number to the stack, and then we add a "Pop" operation to remove it. This simulates the situation where we add an element to the stack but then remove it because it doesn't match the `target` array.

6. Continue this process until we have processed all elements in the `target` array.

7. Return the `operations` list, which now contains the sequence of "Push" and "Pop" operations required to build the `target` array.

The approach leverages a stack to efficiently determine when to add elements to the stack and when to remove them based on the matching between the current number and the `target` array. This results in a list of operations that, when executed, will build the `target` array.


## \u2712\uFE0FCode
``` Java []
class Solution {
    public List<String> buildArray(int[] target, int n) {
        List<String> operations = new ArrayList<>();
        int currentIndex = 0;

        for (int i = 1; i <= n; i++) {
            if (currentIndex >= target.length) {
                // We've processed all elements in the target array
                break;
            }

            if (target[currentIndex] == i) {
                // Current element matches the target
                operations.add("Push");
                currentIndex++;
            } else {
                // Current element does not match the target
                operations.add("Push");
                operations.add("Pop");
            }
        }

        return operations;
    }
}

```
``` C++ []
class Solution {
public:
    vector<string> buildArray(vector<int>& target, int n) {
        vector<string> operations;
        
        int targetIndex = 0;
        
        for (int i = 1; i <= n; i++) {
            if (targetIndex == target.size()) {
                break;  // No more elements to match in the target array
            }
            
            if (target[targetIndex] == i) {
                operations.push_back("Push");
                targetIndex++;
            } else {
                operations.push_back("Push");
                operations.push_back("Pop");
            }
        }
        
        return operations;
    }

};

```
``` Python []
class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        operations = []
        targetIndex = 0
        
        for i in range(1, n+1):
            if targetIndex == len(target):
                break  # No more elements to match in the target array
            
            if target[targetIndex] == i:
                operations.append("Push")
                targetIndex += 1
            else:
                operations.append("Push")
                operations.append("Pop")
        
        return operations

```
``` JavaScript []
var buildArray = function(target, n) {
    const operations = [];
    let targetIndex = 0;
  
    for (let num = 1; num <= n; num++) {
        if (target[targetIndex] === num) {
            operations.push("Push");
            targetIndex++;
        } else {
            operations.push("Push");
            operations.push("Pop");
        }
        
        if (targetIndex === target.length) {
            break;
        }
    }
  
  return operations;
}

```
``` C# []
class Solution {
    public IList<string> BuildArray(int[] target, int n) {
        List<string> operations = new List<string>();
        int targetIndex = 0;
        
        for (int num = 1; num <= n; num++) {
            if (targetIndex < target.Length && target[targetIndex] == num) {
                operations.Add("Push");
                targetIndex++;
            } else {
                operations.Add("Push");
                operations.Add("Pop");
            }
            
            if (targetIndex == target.Length) {
                break;
            }
        }
        
        return operations;
    }

}

```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(n)
The code uses a single loop that iterates from 1 to `n`. For each iteration of the loop, it performs some constant-time operations (e.g., comparisons and list additions). Therefore, the time complexity of the code is O(n), where 'n' is the value of the parameter `n`.

### \uD83C\uDFF9Space complexity: O(n)
The space complexity of the code primarily depends on the space used for the `operations` list. In the worst case, when every element from 1 to `n` needs to be pushed onto the stack and then popped, the `operations` list will contain 2 * `n` elements. As a result, the space complexity is O(n) because it grows linearly with the input size `n`.


![upvote.png](./images/2.png)
# Up Vote Guys
