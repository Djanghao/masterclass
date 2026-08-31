# 🧩 Unlock the Power of Subarrays: Mastering Threshold Counts 💡Beginner's Guide

**Author:** LakshayBrejwal_1_0
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4385527/](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4385527/)

---

# \uD83E\uDDE9 Exploring Subarrays: Counting with Threshold \uD83D\uDCCA

---

## \uD83D\uDCBB Solution

### \uD83D\uDCA1 Approach

The algorithm counts the number of subarrays in a given array `elements` such that the count of the maximum element in the subarray is at least `threshold`. It utilizes a sliding window approach to efficiently explore the array.

1. **Initialize Variables:**
   - `arrayLength`: Length of the input array.
   - `maxElement`: Maximum element in the array.
   - `leftIndex` and `rightIndex`: Pointers for the sliding window.
   - `maxElementCount`: Count of occurrences of the maximum element in the current window.
   - `subarrayCount`: Total count of valid subarrays.

2. **Sliding Window:**
   - Move the `rightIndex` to explore the array.
   - Track the count of occurrences of the maximum element (`maxElementCount`).
   - When `maxElementCount` becomes greater than or equal to `threshold`, start shrinking the window from the left side.
   - Update `subarrayCount` by adding the count of subarrays ending at the current `rightIndex`.

3. **Return Result:**
   - The final `subarrayCount` represents the number of subarrays that meet the given threshold.

### \uD83D\uDCDD Detailed Dry Run
# Initial state
- `nums`: [1,3,2,3,3]
- `k`: 2
- `arrayLength`: 5
- `maxElement`: 3
- `leftIndex`: 0
- `rightIndex`: 0
- `maxElementCount`: 0
- `subarrayCount`: 0

## Step 1
- `rightIndex`: 0
  - `elements[rightIndex]`: 1
  - `maxElementCount`: 0
  - No update to `subarrayCount`
  - Increment `rightIndex`

## Step 2
- `rightIndex`: 1
  - `elements[rightIndex]`: 3
  - `maxElementCount`: 1 (3 appears once)
  - No update to `subarrayCount`
  - Increment `rightIndex`

## Step 3
- `rightIndex`: 2
  - `elements[rightIndex]`: 2
  - `maxElementCount`: 1 (3 still appears once)
  - No update to `subarrayCount`
  - Increment `rightIndex`

## Step 4
- `rightIndex`: 3
  - `elements[rightIndex]`: 3
  - `maxElementCount`: 2 (3 appears twice, threshold reached)
  - Enter inner loop:
    - `leftIndex`: 0, `maxElementCount`: 2
    - Increment `subarrayCount` by `(arrayLength - rightIndex)` = `(5 - 3)` = 2
    - `elements[leftIndex]`: 1 (not the maxElement)
    - Increment `leftIndex`

    - `leftIndex`: 1, `maxElementCount`: 1
    - Increment `subarrayCount` by `(arrayLength - rightIndex)` = `(5 - 3)` = 2
    - `elements[leftIndex]`: 3 (maxElement, decrement `maxElementCount`)
    - Increment `leftIndex`

    - `leftIndex`: 2, `maxElementCount`: 0
    - Subarray count is updated by `(arrayLength - rightIndex)` = `(5 - 3)` = 2
    - `elements[leftIndex]`: 2 (not the maxElement)
    - Increment `leftIndex`

    - `leftIndex`: 3 (out of bounds), exit inner loop

  - Increment `rightIndex`

## Step 5
- `rightIndex`: 4
  - `elements[rightIndex]`: 3
  - `maxElementCount`: 1 (3 appears once)
  - No update to `subarrayCount`
  - Increment `rightIndex`

## Step 6
- `rightIndex`: 5 (out of bounds)
  - Exit while loop

# Final state
- `arrayLength`: 5
- `maxElement`: 3
- `leftIndex`: 4
- `rightIndex`: 5
- `maxElementCount`: 0
- `subarrayCount`: 6

## Output: 6


### \uD83D\uDD0D Edge Cases

- Handles arrays of different lengths and varying threshold values.

### \uD83D\uDD78\uFE0F Complexity Analysis

- **Time Complexity:** O(N), where N is the length of the input array.
- **Space Complexity:** O(1), as the algorithm uses a constant amount of space.

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBB Code (C++)

```cpp []
class Solution { 
public: 
    long long countSubarrays(vector<int>& elements, int threshold) {
        long long arrayLength = elements.size(), maxElement = *max_element(elements.begin(), elements.end()), leftIndex = 0, rightIndex = 0, maxElementCount = 0, subarrayCount = 0; 

        while (rightIndex < arrayLength) { 
            if (elements[rightIndex] == maxElement) { 
                maxElementCount++; 
            } 
            if (maxElementCount >= threshold) { 
                while (maxElementCount >= threshold) { 
                    subarrayCount += arrayLength - rightIndex; 
                    if (elements[leftIndex] == maxElement) { 
                        maxElementCount--; 
                    } 
                    leftIndex++; 
                } 
            } 
            rightIndex++; 
        } 
        return subarrayCount; 
    } 
};
```

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBB Code (Java)

```java []
class Solution {
    public long countSubarrays(int[] elements, int threshold) {
        long arrayLength = elements.length;
        long maxElement = Arrays.stream(elements).max().getAsInt();
        long leftIndex = 0, rightIndex = 0, maxElementCount = 0, subarrayCount = 0;

        while (rightIndex < arrayLength) {
            if (elements[(int) rightIndex] == maxElement) {
                maxElementCount++;
            }
            if (maxElementCount >= threshold) {
                while (maxElementCount >= threshold) {
                    subarrayCount += arrayLength - rightIndex;
                    if (elements[(int) leftIndex] == maxElement) {
                        maxElementCount--;
                    }
                    leftIndex++;
                }
            }
            rightIndex++;
        }
        return subarrayCount;
    }
}
```

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBB Code (Python)

```python []
class Solution:
    def countSubarrays(self, elements, threshold):
        arrayLength = len(elements)
        maxElement = max(elements)
        leftIndex = 0
        rightIndex = 0
        maxElementCount = 0
        subarrayCount = 0

        while rightIndex < arrayLength:
            if elements[rightIndex] == maxElement:
                maxElementCount += 1
            if maxElementCount >= threshold:
                while maxElementCount >= threshold:
                    subarrayCount += arrayLength - rightIndex
                    if elements[leftIndex] == maxElement:
                        maxElementCount -= 1
                    leftIndex += 1
            rightIndex += 1



        return subarrayCount
```

### \uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDCBB Code (C#)

```csharp []
public class Solution {
    public long CountSubarrays(int[] elements, int threshold) {
        long arrayLength = elements.Length;
        long maxElement = elements.Max();
        long leftIndex = 0, rightIndex = 0, maxElementCount = 0, subarrayCount = 0;

        while (rightIndex < arrayLength) {
            if (elements[rightIndex] == maxElement) {
                maxElementCount++;
            }
            if (maxElementCount >= threshold) {
                while (maxElementCount >= threshold) {
                    subarrayCount += arrayLength - rightIndex;
                    if (elements[leftIndex] == maxElement) {
                        maxElementCount--;
                    }
                    leftIndex++;
                }
            }
            rightIndex++;
        }
        return subarrayCount;
    }
}
```

### \uD83E\uDDD1\u200D\uD83D\uDCBB Code (JavaScript)

```javascript []
var countSubarrays = function(elements, threshold) {
    const arrayLength = elements.length;
    const maxElement = Math.max(...elements);
    let leftIndex = 0;
    let rightIndex = 0;
    let maxElementCount = 0;
    let subarrayCount = 0;

    while (rightIndex < arrayLength) {
        if (elements[rightIndex] == maxElement) {
            maxElementCount++;
        }
        if (maxElementCount >= threshold) {
            while (maxElementCount >= threshold) {
                subarrayCount += arrayLength - rightIndex;
                if (elements[leftIndex] == maxElement) {
                    maxElementCount--;
                }
                leftIndex++;
            }
        }
        rightIndex++;
    }

    return subarrayCount;

};
```

---

<!-- # \uD83E\uDDE9 Unlock the Power of Subarrays: Mastering Threshold Counts -->
![image.png](./images/0.png)

# \uD83E\uDDD1\u200D\uD83D\uDCBB Happy Coding! \uD83C\uDF1F

 -- *MR.ROBOT SIGNING OFF*