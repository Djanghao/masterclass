# An Efficient Approach in TypeScript with a Video

**Author:** RuslanTsykaliak
**Votes:** 0
**Link:** [https://leetcode.com/problems/peaks-in-array/solutions/5342610/](https://leetcode.com/problems/peaks-in-array/solutions/5342610/)

---

# Intuition:
The problem involves processing two types of queries on an array. The first type of query asks for the count of peak elements in a subarray, and the second type of query changes a specific element in the array. The key intuition here is to keep track of the peaks in the array and update them as we process the queries.

# Approach:
1. First, we define a helper function `isPeak` to check if an element at a given index is a peak. A peak is defined as an element that is greater than its previous and next element.
2. We then iterate over the `nums` array and store the indices of the peaks in a separate array `peaks`.
3. We sort the `peaks` array to make it easier to process the queries later.
4. We also define two helper functions `bisectLeft` and `bisectRight` to find the leftmost and rightmost positions of a given value in a sorted array, respectively.
5. Finally, we process the queries. If the query is of the first type, we calculate the number of peaks in the specified subarray. If the query is of the second type, we update the `nums` array and the `peaks` array accordingly.

# Complexity:
- The time complexity of this approach is $$O(n \\log n + q \\log n)$$, where $$n$$ is the length of the `nums` array and $$q$$ is the number of queries. This is because we iterate over the `nums` array once (which takes $$O(n)$$ time), sort the `peaks` array (which takes $$O(n \\log n)$$ time), and process the queries (each of which may involve a binary search in the `peaks` array, taking $$O(\\log n)$$ time).
- The space complexity is $$O(n)$$, as we need to store the `peaks` array and the `res` array, each of which can have at most $$n$$ elements. 


# YouTube Video Explanation
https://youtu.be/jfLKzen2MjE

# Code
```
function countOfPeaks(nums: number[], queries: number[][]): number[] {
    // Helper function to check if an element at index i in nums is a peak. A peak is an element that is greater than its previous and next element.
    const isPeak = (i: number): boolean => i > 0 && i < nums.length - 1 && nums[i] > nums[i - 1] && nums[i] > nums[i + 1];

    // Initialize an empty array to store the indices of the peak elements in nums.
    const peaks: number[] = [];

    // Loop through the nums array from the second element to the second last element. If an element is a peak, its index is added to the peaks array.
    for (let i = 1; i < nums.length - 1; i++) {
        if (isPeak(i)) peaks.push(i);
    }

    // Sort the peaks array in ascending order.
    peaks.sort((a, b) => a - b);

    // Helper function to perform binary search on a sorted array arr to find the leftmost position of a value x.
    const bisectLeft = (arr: number[], x: number): number => {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    // Helper function to perform binary search on a sorted array arr to find the rightmost position of a value x.
    const bisectRight = (arr: number[], x: number): number => {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] <= x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    // Initialize an empty array to store the results of the queries of the first type.
    const res: number[] = [];

    // Process each query in queries. If the query is of the first type, calculate the number of peaks in the specified subarray. If the query is of the second type, update the nums array and the peaks array accordingly.
    for (const q of queries) {
        if (q[0] === 1) {
            const [_, li, ri] = q;
            const j1 = bisectRight(peaks, li);
            const j2 = bisectLeft(peaks, ri) - 1;
            res.push(Math.max(j2 - j1 + 1, 0));
        } else {
            const [_, i, v] = q;
            const wasPeak = [isPeak(i - 1), isPeak(i), isPeak(i + 1)];
            nums[i] = v;
            for (let p = -1; p <= 1; p++) {
                const idx = i + p;
                const nowPeak = isPeak(idx);
                const peakIndex = bisectLeft(peaks, idx);
                if (nowPeak && !wasPeak[p + 1]) peaks.splice(peakIndex, 0, idx);
                else if (!nowPeak && wasPeak[p + 1] && peakIndex < peaks.length && peaks[peakIndex] === idx) peaks.splice(peakIndex, 1);
            }
        }
    }
    // Return the res array which contains the results of the queries of the first type.
    return res;
}
```