# Java || 👍Explained in Detail👍|| Binary Search || Two Pointers || Priority Queue

**Author:** cheehwatang
**Votes:** 143
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/2636647/](https://leetcode.com/problems/find-k-closest-elements/solutions/2636647/)

---

I do my best everyday to give a clear explanation, so to help everyone improve their skills.

If you find this **helpful**, please \uD83D\uDC4D **upvote** this post and watch my [Github Repository](https://github.com/cheehwatang/leetcode-java).

Thank you for reading! \uD83D\uDE04 Comment if you have any questions or feedback.

---

**Java - Two Pointers (Clean Code)**
```java
class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {

        int start = 0;
        int end = arr.length - 1;
        while (end - start >= k) {
            if (Math.abs(arr[start] - x) > Math.abs(arr[end] - x)) {
                start++;
            } else {
                end--;
            }
        }

        List<Integer> result = new ArrayList<>(k);
        for (int i = start; i <= end; i++) {
            result.add(arr[i]);
        }
        return result;
    }
}
```

**Java - Two Pointers (With Explanation)**
```
class Solution {
    
    // Approach:
    // Using two pointers, we are going the 'start' and 'end' pointers towards each other,
    // until only k elements between 'start' and 'end'.
    
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        
        int start = 0;
        int end = arr.length - 1;
        // Between the 'start' and 'end' pointers, inclusive, contains all the k integers that is closest to x.
        while (end - start >= k) {
            // Move 'start' to the right if 'end' is closer to x, or move 'end' to the left if 'start' is closer to x.
            if (Math.abs(arr[start] - x) > Math.abs(arr[end] - x)) {
                start++;
            } else {
                end--;
            }
        }

        // Input all the k closest integers into the result.
        List<Integer> result = new ArrayList<>(k);
        for (int i = start; i <= end; i++) {
            result.add(arr[i]);
        }
        return result;
    }
}
```

---

**Java - Binary Search (Clean Code)**
```
class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {

        int left = 0, right = arr.length - k;
        while (left < right) {
            int midpoint = left + (right - left) / 2; // same as (left + right) / 2
            if (x - arr[midpoint] > arr[midpoint + k] - x) {
                left = midpoint + 1;
            }
            else {
                right = midpoint;
            }
        }

        List<Integer> result = new ArrayList<>(k);
        for (int i = left; i < left + k; i++) {
            result.add(arr[i]);
        }
        return result;
    }
}
```

**Java - Binary Search (With Explanation)**
```
class Solution {

    // Approach:
    // Using binary search and a sliding window, find the midpoint where,
    // the integers between midpoint and midpoint + k is the k closest integers to x.

    public List<Integer> findClosestElements(int[] arr, int k, int x) {

        // The sliding window is between 'mid' and 'mid' + k.
        int left = 0, right = arr.length - k;
        while (left < right) {
            int midpoint = left + (right - left) / 2; // same as (left + right) / 2

            // With midpoint on the left, we use x - arr[midpoint], while arr[midpoint + k] - x because it is on the right.
            // This is important!
            // Rather than using Math.abs(), we need the direction keep the x within the sliding window.
            // If the window is too far left, we shift the window to the right.
            if (x - arr[midpoint] > arr[midpoint + k] - x) {
                left = midpoint + 1;
            }
            // If the window is too far right, we shift the window to the left.
            else {
                right = midpoint;
            }
        }

        // Input all the k closest integers into the result.
        List<Integer> result = new ArrayList<>(k);
        for (int i = left; i < left + k; i++) {
            result.add(arr[i]);
        }
        return result;
    }
}
```

---

**Java - Priority Queue (Clean Code)**
```
class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int integer : arr) {
            if (k > 0) {
                minHeap.offer(integer);
                k--;
            } else if (Math.abs(minHeap.peek() - x) > Math.abs(integer - x)) {
                minHeap.poll();
                minHeap.offer(integer);
            }
        }
        List<Integer> result = new ArrayList<>();
        while (!minHeap.isEmpty()) {
            result.add(minHeap.poll());
        }
        return result;
    }
}
```

**Java - Priority Queue (With Explanation)**
```
class Solution {

    // Approach:
    // Using a min heap priority queue, add all the smallest integers up to k integers.
    // Then, traverse the 'arr' array will replacing the priority queue with integer closer to x.

    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        // Traverse the array with,
        // First, add all the smallest integers up to k number.
        // Second, if found a closer integer to x, remove the smallest integer from the priority queue, and add the new integer.
        // This is because the smallest integer is always the further to x, if a larger number is closer to x.
        for (int integer : arr) {
            if (k > 0) {
                minHeap.offer(integer);
                k--;
            } else if (Math.abs(minHeap.peek() - x) > Math.abs(integer - x)) {
                minHeap.poll();
                minHeap.offer(integer);
            }
        }
        
        // Add the integers from the priority queue to the result.
        // This will automatically add in ascending order, from smallest to largest k integers closest to x.
        List<Integer> result = new ArrayList<>();
        while (!minHeap.isEmpty()) {
            result.add(minHeap.poll());
        }
        return result;
    }
}
```