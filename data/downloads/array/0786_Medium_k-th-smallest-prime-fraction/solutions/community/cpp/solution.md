# Fastest (100%) || Easy || Clean & Concise || Multiple Approaches

**Author:** gameboey
**Votes:** 293
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5137467/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5137467/)

---




# Approach: Best (Binary Search)
**Finding the Kth Smallest Fraction with Spider-Man**

1. **Introduction**: Hey there, true believers! Your friendly neighborhood Spider-Man here to break down this mind-bending problem for you!

2. **Understanding the Problem**: First things first, we gotta understand the problem itself. We've got an array of prime numbers, and we need to find the kth smallest fraction formed by dividing any two numbers in the array.

3. **Binary Search Trick**: Now, we could go the brute-force way and calculate all the fractions, sort 'em, and pick the kth one. But that's just too easy, and Spider-Man never takes the easy way out!

4. **Binary Search Basics**:

   `a.` We start with a range of possible values, from 0 to 1 in this case.

   `b.` We pick a value in the middle of the range, let's call it "mid."

   `c.` Then, we count how many fractions are less than or equal to "mid."

   `d.` If the count is equal to k, we've found our kth smallest fraction! Woohoo!

   `e.` If the count is less than k, we need to search for a larger fraction, so we update the lower bound of our range to "mid."

   `f.` If the count is greater than k, we need to search for a smaller fraction, so we update the upper bound of our range to "mid."

   `g.` We keep repeating this process until we find the kth smallest fraction.

5. **Counting Fractions**: But wait, how do we count the number of fractions less than or equal to a given value? Well, that's where the real magic happens!

6. **Spider-Man's Strategy**: For each number in the array, we find the smallest index "j" such that the fraction formed by dividing the current number by arr[j] is greater than "mid."

7. **Determining Fraction's Position**: All the fractions formed by dividing the current number by arr[j] or any larger number in the array will be greater than "mid."

8. **Updating Count**: So, we can add the count of all these fractions to our total count!

9. **Tracking Maximum Fraction**: And while we're at it, we might as well keep track of the maximum fraction we've seen so far that's less than or equal to "mid." That way, we can return it if the total count ever equals k!

10. **Conclusion**: Alright, true believers, that's the gist of it! With this approach, we can find the kth smallest fraction in O(n log n) time, which is way better than the brute-force approach.

11. **Final Words**: Just remember, with great power comes great responsibility, so use this knowledge wisely, and don't let any supervillains get their hands on it!

12. **Signing Off**: Your friendly neighborhood Spider-Man, signing off!


## Dry - Run:
Lets dry run the code for the given example, let's go through the steps:

1. We have `arr = [1, 2, 3, 5]` and `k = 3`.
2. The function initializes `n = 4` (size of `arr`), `left = 0`, `right = 1`, and `mid` is not initialized yet.
3. The `while` loop starts with the condition `left <= right` which is true initially.
4. Inside the loop, we calculate `mid = left + (right - left) / 2 = 0 + (1 - 0) / 2 = 0.5`.
5. We initialize `j = 1`, `total = 0`, `num = 0`, `den = 0`, and `maxFrac = 0`.
6. We enter the `for` loop with `i = 0`.
    - Since `arr[0] = 1` and `arr[1] = 2`, we have `arr[0] > arr[1] * mid` which is `1 >= 2 * 0.5` which is true.
    - So, we increment `j` to 2.
    - Since `arr[0] = 1` and `arr[2] = 3`, we have `arr[0] > arr[2] * mid` which is `1 > 3 * 0.5` which is false.
    - So, we update `total += n - j = 4 - 2 = 2`.
    - We also update `maxFrac = arr[i] * 1.0 / arr[j] = 1 * 1.0 / 3 = 0.33333...`.
    - We update `num = 0` and `den = 2`.
7. We move to the next iteration of the `for` loop with `i = 1`.
    - Since `arr[1] = 2` and `arr[2] = 3`, we have `arr[1] > arr[2] * mid` which is `2 >= 3 * 0.5` which is true.
    - So, we increment `j` to 3.
    - Since `arr[1] = 2` and `arr[3] = 5`, we have `arr[1] > arr[3] * mid` which is `2 > 5 * 0.5` which is false.
    - So, we update `total += n - j = 2 + (4 - 3) = 3`.
    - We also update `maxFrac = arr[i] * 1.0 / arr[j] = 2 * 1.0 / 5 = 0.4`.
    - We update `num = 1` and `den = 3`.
8. We move to the next iteration of the `for` loop with `i = 2`.
    - Since `arr[2] = 3` and `arr[3] = 5`, we have `arr[2] > arr[3] * mid` which is `3 >= 5 * 0.5` which is true.
    - So, we increment `j` to 4 (which is out of bounds).
    - We update `total += n - j = 3 + (4 - 4) = 3`.
    - `maxFrac` remains unchanged at 0.4.
    - `num` and `den` remain unchanged at 1 and 3, respectively.
9. We move to the next iteration of the `for` loop with `i = 3`, but since `i` is now equal to `n`, the loop terminates.
10. Since `total == k` (3 == 3), we update `res = {arr[num], arr[den]} = {arr[1], arr[3]} = {2, 5}`.
11. The `while` loop terminates, and the function returns `res = {2, 5}`.

Therefore, the output for the given input `arr = [1, 2, 3, 5]` and `k = 3` is `[2, 5]`, which is the correct output.

12. Another day, another problem solved by your friendly neighborhood Spider-Man!

# Complexity
- Time complexity: O(nlogn)

- Space complexity: O(1)

# Code

```C++ []
class Solution {
public:
    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {
        int n = arr.size();
        double left = 0, right = 1, mid;
        vector<int> res;

        while (left <= right) {
            mid = left + (right - left) / 2;
            int j = 1, total = 0, num = 0, den = 0;
            double maxFrac = 0;
            for (int i = 0; i < n; ++ i) {
                while (j < n && arr[i] >= arr[j] * mid) {
                    ++j;
                }
                
                total += n - j;

                if (j < n && maxFrac < arr[i] * 1.0 / arr[j]) {
                    maxFrac = arr[i] * 1.0 / arr[j];
                    num = i; den = j;
                }
            }

            if (total == k) {
                res = {arr[num], arr[den]};
                break;
            }

            if (total > k) {
                right = mid;
            } else {
                left = mid;
            }
        }

        return res;
    }
};
```
```java []
class Solution {
    public int[] kthSmallestPrimeFraction(int[] arr, int k) {
        int n = arr.length;
        double left = 0, right = 1, mid;
        int[] res = new int[2];

        while (left <= right) {
            mid = left + (right - left) / 2;
            int j = 1, total = 0, num = 0, den = 0;
            double maxFrac = 0;
            for (int i = 0; i < n; ++i) {
                while (j < n && arr[i] >= arr[j] * mid) {
                    ++j;
                }
                
                total += n - j;

                if (j < n && maxFrac < arr[i] * 1.0 / arr[j]) {
                    maxFrac = arr[i] * 1.0 / arr[j];
                    num = i;
                    den = j;
                }
            }

            if (total == k) {
                res[0] = arr[num];
                res[1] = arr[den];
                break;
            }

            if (total > k) {
                right = mid;
            } else {
                left = mid;
            }
        }

        return res;
    }
}

```
```python []
class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
        n = len(arr)
        left, right = 0, 1
        res = []

        while left <= right:
            mid = left + (right - left) / 2
            j, total, num, den = 1, 0, 0, 0
            maxFrac = 0
            for i in range(n):
                while j < n and arr[i] >= arr[j] * mid:
                    j += 1
                
                total += n - j

                if j < n and maxFrac < arr[i] * 1.0 / arr[j]:
                    maxFrac = arr[i] * 1.0 / arr[j]
                    num, den = i, j

            if total == k:
                res = [arr[num], arr[den]]
                break

            if total > k:
                right = mid
            else:
                left = mid

        return res

```
```javascript []
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let left = 0, right = 1;
    let res = [];

    while (left <= right) {
        let mid = left + (right - left) / 2;
        let j = 1, total = 0, num = 0, den = 0;
        let maxFrac = 0;

        for (let i = 0; i < arr.length; ++i) {
            while (j < arr.length && arr[i] >= arr[j] * mid) {
                ++j;
            }
                
            total += arr.length - j;

            if (j < arr.length && maxFrac < arr[i] * 1.0 / arr[j]) {
                maxFrac = arr[i] * 1.0 / arr[j];
                num = i;
                den = j;
            }
        }

        if (total === k) {
            res = [arr[num], arr[den]];
            break;
        }

        if (total > k) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return res;
};
```


# Approach: Brute Force (Min Heap)

Let's dive into Spider-Man's style explanation of this solution:

1. **Hey there, web-slingers! Spider-Man here to unravel the secrets of this heroic algorithm!**

2. **Mission**: We're tasked with finding the kth smallest fraction from an array of prime numbers.

3. **Arsenal**: Armed with a priority queue, we ensure the smallest fractions are always at the top.

4. **Crafting the Queue**: We create a min-heap, where each element is a fraction and its corresponding pair of numbers.

5. **Navigation**: We journey through the array, calculating fractions for each pair of numbers.

6. **Forming Fractions**: Every pair contributes a fraction to our quest, leaving no fraction uncalculated.

7. **Conquering**: With our heap filled, we retrieve the kth smallest fraction by popping from the top k times.

8. **Triumph**: We unveil the victorious pair of numbers, representing the kth smallest fraction.

9. **Returning**: Mission complete, we return, ready to share our heroic tale.


Although, this approach is shorter than the one above but there's huge difference between the performance of these two.

# Complexity
- Time complexity: O(n * n * logk)

- Space complexity: O(k)

# Code

```C++ []
class Solution {
public:
    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {
        priority_queue<pair<double, pair<int, int>>, vector<pair<double, pair<int, int>>>, greater<>> minHeap;
        int N = arr.size();
        for (int i = 0; i < N; ++i) {
            for (int j = i + 1; j < N; ++j) {
                minHeap.push({(double)arr[i] / arr[j], {arr[i], arr[j]}});
            }
        }
        
        pair<int, int> result;
        for (int i = 0; i < k; ++i) {
            result = minHeap.top().second;
            minHeap.pop();
        }
        
        return {result.first, result.second};
    }
};
```
```java []
class Solution {
    public int[] kthSmallestPrimeFraction(int[] arr, int k) {
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(Comparator.comparingDouble(a -> (double) a[0] / a[1]));
        int N = arr.length;
        
        for (int i = 0; i < N; ++i) {
            for (int j = i + 1; j < N; ++j) {
                minHeap.offer(new int[]{arr[i], arr[j]});
            }
        }
        
        int[] result = null;
        for (int i = 0; i < k; ++i) {
            result = minHeap.poll();
        }
        
        return result;
    }
}
```
```python []
class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
        minHeap = []
        N = len(arr)
        
        # Populate min heap with fractions
        for i in range(N):
            for j in range(i + 1, N):
                fraction = (arr[i] / arr[j], (arr[i], arr[j]))
                heappush(minHeap, fraction)
        
        # Pop k-1 smallest fractions
        for _ in range(k - 1):
            heappop(minHeap)
        
        # Return the k-th smallest fraction
        return heappop(minHeap)[1]
```

# Approach: Brute Force (Max Heap)

Let's swing into action and compare the intuition behind the current approach with the previous one, all in Spider-Man's style:

**Previous Approach:**

1. **Mission**: Utilizing a min-heap, we prioritize the smallest fractions in our quest for the kth smallest.

2. **Arsenal**: Armed with the min-heap, we add fractions and pairs, ensuring the smallest stay at the top.

3. **Navigation**: Traversing the array, we calculate fractions, maintaining the k smallest in the heap.

4. **Conquest**: We uncover the kth smallest by peeking at the top fractions, iterating through the heap.

**Current Approach:**

5. **Strategy**: Embracing a max-heap, we focus on the largest fractions for our quest.

6. **Preparation**: Crafting a max-heap, we add fractions and pairs, monitoring size not to exceed k.

7. **Selection**: Traversing the array, we strategically remove the largest fraction if needed, preserving the k smallest.

8. **Revelation**: With the max-heap, we unveil the kth smallest fraction with a simple peek.

**Comparison**:

9. **Strengths**: The previous is straightforward, while the current optimizes slightly for efficiency.

10. **Adaptation**: Both paths lead to victory, offering different strengths based on preference.

**Final Thoughts**:

11. **Destination**: Both paths lead to uncovering the kth smallest fraction, balancing simplicity and optimization.

12. **Heroic Journey**: With strategies honed, we conquer algorithms' challenges, ever striving for efficiency. Until next time, stay heroic!

# Complexity
- Time complexity: O(n * n * logk)

- Space complexity: O(k)

# Code

```C++ []
class Solution {
public:
    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {
        sort(begin(arr), end(arr));
        priority_queue<pair<double, pair<int, int>>> maxHeap;
        int n = arr.size();

        for(int i = 0; i < n - 1; i++) {
            for(int j =i + 1; j < n; j++) {
                maxHeap.push({((double) arr[i] / arr[j]), {arr[i], arr[j]}});

                if(maxHeap.size() > k) {
                    maxHeap.pop();
                }
            }
        }

        auto res = maxHeap.top().second;
        return {res.first, res.second};
    }
};
```
```python []
class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
        arr.sort()
        n = len(arr)
        maxHeap = []      

        for i in range(n) :
            for j in range(i + 1, n) : 
                if len(maxHeap) < k :
                    heappush(maxHeap, (- arr[i] / arr[j], i, j))

                else :
                    heappushpop(maxHeap, (- arr[i] / arr[j], i, j))

        smallest, i, j = maxHeap[0]

        return (arr[i], arr[j])
```

![spider-man-.jpg](./images/0.jpeg)
