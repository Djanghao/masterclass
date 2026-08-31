# 【Video】Give me 5 minutes - 2 solutions - How we think about a solution

**Author:** niits
**Votes:** 82
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4388310/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4388310/)

---

# Intuition
Calculate quarter length of input array.

---

# Solution Video

https://youtu.be/bTm-6y7Ob0A

\u25A0 Timeline of the video

`0:07` Explain algorithm of Solution 1
`2:46` Coding of solution 1
`3:49` Time Complexity and Space Complexity of solution 1
`4:02` Step by step algorithm of solution 1
`4:09` Explain key points of Solution 2
`4:47` Explain the first key point
`6:06` Explain the second key point
`7:40` Explain the third key point
`9:33` Coding of Solution 2
`14:20` Time Complexity and Space Complexity of Solution 2
`14:48` Step by step algorithm with my stack solution code

When I added the second solution, it exceeded five minutes. lol

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,409
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

---

# Approach

## How we think about a solution

### Solution 1

The description say "more than 25%", that means length of target number should be at least `quarter` of length of input array.

```
Input: arr = [1,2,2,6,6,6,6,7,10]
```
```[]
9 // 4 = 2
```

---

\u2B50\uFE0F Points

If the number two steps ahead is the same as the current number, it can be considered as 25%.

Be careful, we need to include the current number because 2 / 9 = 0.22222...not more than 25%. If we include the current number, 3 / 9 = 0.33333...

One more point is that we don't have to iterate all numbers in input array, because we compare the current number and the number in current index + quarter, so number of max iteration should be `total length of input array - quarter`.

---

Let's see one by one

```
Input: arr = [1,2,2,6,6,6,6,7,10]
quarter = 2
```
```
At index = 0

if arr[i] == arr[i + quarter]:
if 1 == 2 \u2192 false

i + quarter = 2
```
```
At index = 1

if arr[i] == arr[i + quarter]:
if 2 == 6 \u2192 false

i + quarter = 3
```
```
At index = 2

if arr[i] == arr[i + quarter]:
if 2 == 6 \u2192 false

i + quarter = 4
```
```
At index = 3

if arr[i] == arr[i + quarter]:
if 6 == 6 \u2192 true

i + quarter = 5
```
```
Output: 6
```

Easy!\uD83D\uDE06
Let's see a real algorithm!

---

# Complexity
- Time complexity: $$O(n - quarter)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        n = len(arr)
        quarter = n // 4

        for i in range(n - quarter):
            if arr[i] == arr[i + quarter]:
                return arr[i]
```
```javascript []
var findSpecialInteger = function(arr) {
    const n = arr.length;
    const quarter = Math.floor(n / 4);

    for (let i = 0; i < n - quarter; i++) {
        if (arr[i] === arr[i + quarter]) {
            return arr[i];
        }
    }
};
```
```java []
class Solution {
    public int findSpecialInteger(int[] arr) {
        int n = arr.length;
        int quarter = n / 4;

        for (int i = 0; i < n - quarter; i++) {
            if (arr[i] == arr[i + quarter]) {
                return arr[i];
            }
        }

        return -1;
    }
}
```
```C++ []
class Solution {
public:
    int findSpecialInteger(vector<int>& arr) {
        int n = arr.size();
        int quarter = n / 4;

        for (int i = 0; i < n - quarter; i++) {
            if (arr[i] == arr[i + quarter]) {
                return arr[i];
            }
        }

        return -1;       
    }
};
```

# Step by step Algorithm

1. **Initialization:**
   ```python
   n = len(arr)
   quarter = n // 4
   ```
   - `n` is assigned the length of the input array `arr`.
   - `quarter` is calculated as one-fourth of the length of the array `arr` using integer division (`//`), ensuring it's an integer.

2. **Loop through the array:**
   ```python
   for i in range(n - quarter):
   ```
   - The loop iterates through the array indices from 0 to `(n - quarter - 1)`. This ensures that there are at least `quarter` elements remaining in the array for each iteration.

3. **Check if the next element is the same:**
   ```python
   if arr[i] == arr[i + quarter]:
   ```
   - For each iteration, it checks whether the element at the current index (`i`) is equal to the element two steps ahead (`i + quarter`).
   - If the condition is true, it means the current element is repeated in the next `quarter` elements, which corresponds to 25% of the array.

4. **Return the special integer:**
   ```python
   return arr[i]
   ```
   - If the condition in the `if` statement is satisfied, the function returns the special integer (`arr[i]`).

In summary, the algorithm iterates through the array, comparing each element with the one current index + quarter steps ahead. If a match is found, it returns the special integer. This logic assumes that such a special integer always exists based on the problem statement.


---

# Solution 2 - Binary Search

My second solution is to use binary search to find leftmost current number and rightmost current number. The title says "Sorted Array", so we can easliy imagine we have binary search solution. lol

I think we have 3 points.

---

\u2B50\uFE0F Points

1. We can start from index that is equal to quarter
2. Number of iteration should be number of possible candidate element
3. Even If we find the target number by binary search, we should continue it

---

### 1. We can start from index that is equal to quarter

```
Input: arr = [1,2,2,6,6,6,6,7,10]
quarter = 2
```
In this case, we can start from index 2. If the number at index 0 is answer, index 2 is the same number as index 0. In other words, if leftmost index is not 0 when we execute binary search to find the number at index 2, index 0 is not answer. We don't have to start from index 0. We can start from index which is equal to quarter.


### 2. Number of iteration should be number of possible candidate element

If current number is answer number we should return, there is the same number in current index + quarter. **In other words, if not, we don't have to care about numbers between current index and current index + quarter - 1.** They are not answer definitely, so we can move forward by number of quarter.

The number in current index + quarter should be the next target number. There is possibility that the number is answer number we should return. That's why I say "current index + quarter - 1".

For example
```
Input: arr = [1,2,2,6,6,6,6,7,10]
quarter = 2
```
Let's say we are at index 2.
```
current number is 2 (= index 2)
the number in current index + quarter is 4 (= index 4)
```
They are different numbers, so from index 2 to index 3, there is not answer number. We can jump into index 4(the next candicate) in this case.(Index 3 is 6, but in the end, we know that 6 is answer. We can find it in the next interation, because next candidate is 6).

- How we can know current index + quarter is different number?

We can calcuate like this

```
rightmost index - leftmost index + 1 > quarter
```
If we meet this condition, that is answer, if not, Go to the next candidate. `+1` is to get real length because we use index numbers for the calculation. If rightmost and leftmost is the same index(Let's say 0), length should 1, because there is a number at index 0.

### 3. Even If we find the target number by binary search, we should continue it

Usually, when we execute binary search, we stop when we find the target number, but in this question, we need to find leftmost index and rightmost index, so even if we find the target number, the number is not always leftmost or righmost index. That's why we continue if we meet this condition.

```
while left <= right:
```

If we find target number when we find leftmost index, move left, because leftmost is on the left side.

```
right = mid - 1
```

If we find target number when we find rightmost index, move right, because rightmost is on the right side.

```
left = mid + 1
```

Easy\uD83D\uDE06
Let's see a real algorithm!

If you are not familar with typical binary search, I have a video for you.

https://youtu.be/gVLvNe_SNc0


---

# Complexity
- Time complexity: $$O(c log n)$$
`n` is length of input array
`c` is number of candidates
```
c = (n - qurater) / qurater
```

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->



```python []
class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        def binary_search(target, is_first):
            left, right = 0, len(arr) - 1
            result = -1

            while left <= right:
                mid = (left + right) // 2

                if arr[mid] == target:
                    result = mid
                    if is_first:
                        right = mid - 1
                    else:
                        left = mid + 1
                elif arr[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1

            return result
        
        n = len(arr)
        quarter = n // 4

        # Handle the case where quarter is zero
        if quarter == 0:
            return arr[0] if n > 0 else None

        # Check every possible candidate element
        for i in range(quarter, n, quarter):
            # Use binary search to find the first and last occurrence of the candidate element
            left_occurrence = binary_search(arr[i], True)
            right_occurrence = binary_search(arr[i], False)

            # Check if the frequency is greater than 25%
            if right_occurrence - left_occurrence + 1 > quarter:
                return arr[i]
```
```javascript []
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    function binarySearch(target, isFirst) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (arr[mid] === target) {
                result = mid;
                if (isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    const n = arr.length;
    const quarter = Math.floor(n / 4);

    // Handle the case where quarter is zero
    if (quarter === 0) {
        return n > 0 ? arr[0] : null;
    }

    // Check every possible candidate element
    for (let i = quarter; i < n; i += quarter) {
        // Use binary search to find the first and last occurrence of the candidate element
        const leftOccurrence = binarySearch(arr[i], true);
        const rightOccurrence = binarySearch(arr[i], false);

        // Check if the frequency is greater than 25%
        if (rightOccurrence - leftOccurrence + 1 > quarter) {
            return arr[i];
        }
    }
};
```
```java []
class Solution {
    public int findSpecialInteger(int[] arr) {
        int n = arr.length;
        int quarter = n / 4;

        // Handle the case where quarter is zero
        if (quarter == 0) {
            return n > 0 ? arr[0] : -1;
        }

        // Check every possible candidate element
        for (int i = quarter; i < n; i += quarter) {
            // Use binary search to find the first and last occurrence of the candidate element
            int leftOccurrence = binarySearch(arr, arr[i], true);
            int rightOccurrence = binarySearch(arr, arr[i], false);

            // Check if the frequency is greater than 25%
            if (rightOccurrence - leftOccurrence + 1 > quarter) {
                return arr[i];
            }
        }

        return -1;
    }

    private int binarySearch(int[] arr, int target, boolean isFirst) {
        int left = 0;
        int right = arr.length - 1;
        int result = -1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (arr[mid] == target) {
                result = mid;
                if (isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }    
}
```
```C++ []
class Solution {
public:
    int findSpecialInteger(vector<int>& arr) {
        int n = arr.size();
        int quarter = n / 4;

        // Handle the case where quarter is zero
        if (quarter == 0) {
            return n > 0 ? arr[0] : -1;
        }

        // Check every possible candidate element
        for (int i = quarter; i < n; i += quarter) {
            // Use binary search to find the first and last occurrence of the candidate element
            int leftOccurrence = binarySearch(arr, arr[i], true);
            int rightOccurrence = binarySearch(arr, arr[i], false);

            // Check if the frequency is greater than 25%
            if (rightOccurrence - leftOccurrence + 1 > quarter) {
                return arr[i];
            }
        }

        return -1;       
    }

private:
    int binarySearch(const vector<int>& arr, int target, bool isFirst) {
        int left = 0;
        int right = arr.size() - 1;
        int result = -1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (arr[mid] == target) {
                result = mid;
                if (isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }    
};
```
# Step by step algorithm

1. **Binary Search Function:**
   ```python
   def binary_search(target, is_first):
       left, right = 0, len(arr) - 1
       result = -1

       while left <= right:
           mid = (left + right) // 2

           if arr[mid] == target:
               result = mid
               if is_first:
                   right = mid - 1
               else:
                   left = mid + 1
           elif arr[mid] < target:
               left = mid + 1
           else:
               right = mid - 1

       return result
   ```
   - This is a binary search function that finds either the first or the last occurrence of the `target` in the `arr` array based on the `is_first` parameter.

2. **Initialization:**
   ```python
   n = len(arr)
   quarter = n // 4
   ```
   - `n` is assigned the length of the input array `arr`.
   - `quarter` is calculated as one-fourth of the length of the array `arr` using integer division (`//`), ensuring it's an integer.

3. **Handling the Case Where Quarter is Zero:**
   ```python
   if quarter == 0:
       return arr[0] if n > 0 else None
   ```
   - If `quarter` is zero, it means the array has fewer than 4 elements. The function returns the first element if the array is not empty; otherwise, it returns `None`.

4. **Checking Every Possible Candidate Element:**
   ```python
   for i in range(quarter, n, quarter):
   ```
   - The loop iterates through the array indices from `quarter` to `n - 1` with a step of `quarter`.

5. **Using Binary Search to Find Occurrences:**
   ```python
   left_occurrence = binary_search(arr[i], True)
   right_occurrence = binary_search(arr[i], False)
   ```
   - For each candidate element, it uses the binary search function to find the first and last occurrences.

6. **Checking Frequency and Returning Result:**
   ```python
   if right_occurrence - left_occurrence + 1 > quarter:
       return arr[i]
   ```
   - It checks if the frequency of the candidate element is greater than 25%. If true, it returns the candidate element as the result.



---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4392747/video-give-me-5-minutes-2-solutions-how-we-think-about-a-solution/

video
https://youtu.be/JV5Kuinx-m0

\u25A0 Timeline of the video

`0:05` Explain algorithm of Solution 1
`3:18` Coding of solution 1
`4:18` Time Complexity and Space Complexity of solution 1
`4:29` Step by step algorithm of solution 1
`4:36` Explain key points of Solution 2
`5:25` Coding of Solution 2
`6:50` Time Complexity and Space Complexity of Solution 2
`7:03` Step by step algorithm with my stack solution code

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/transpose-matrix/solutions/4384180/video-give-me-5-minutes-2-solutions-how-we-think-about-a-solution/

video
https://youtu.be/lsAZepsNRPo

\u25A0 Timeline of the video

`0:04` Explain algorithm of Solution 1
`1:12` Coding of solution 1
`2:30` Time Complexity and Space Complexity of solution 1
`2:54` Explain algorithm of Solution 2
`3:49` Coding of Solution 2
`4:53` Time Complexity and Space Complexity of Solution 2
`5:12` Step by step algorithm with my stack solution code


