# binary search method, twice as fast as all other C# solutions

**Author:** StanleyDodds
**Votes:** 3
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5585410/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5585410/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We want to find the subarray sums that occurs at the left and right indices, and them efficiently sum up all subarray sums less than the left sum and right sum respectively, adjust for subarray sums equal to the left or right sum that need to be counted to get the correct index, and return the difference between these two.

To find the correct sum, we first create an array of prefix sums (which allow for easily computing subarray sums as a difference of 2 prefix sums). We perform a binary search over all possible subarray sums (which range from the minimum element of the array, to the sum of all elements in the array). At each trial sum, we iterate over all possible subarray left indices, and binary search through all possible subarray right indices, to find the largest subarray starting at this left index whose sum is less than the trial sum. We then know that this and all smaller subarrays starting at this left index have sums that come before this trial sum (have smaller sum), including 1 more element may or may not make the subarray sum equal to the trial sum (which we will check to get a count of equal subarray sums), and any larger subarray will come after this trial sum (have larger sum). This gives us an exact count of the number of subarrays that come before this trial sum, and which are equal to this trial sum. Using this, we can determine whether the trial sum is too small, too large, or exactly correct (and proceed with the binary search accordingly).

Once we have found the correct sum, we now want to add up all subarray sums that are less than this sum, and exactly the right number of subarray sums equal to this sum to make it up to the correct index. To do this, we need also the second prefix sums (i.e. the prefix sums of prefix sums) which we construct at the beginning alongside the prefix sums. We again iterate over all possible subarray left indices, and perform the same binary search above to find the maximum right index where the subarray sum is less than the target sum. We now compute the sum of all subarrays with this left index up to this right index by taking the difference of second prefix sums between the right index (plus 1) and the left index, subtracting off the parts of the prefix that are not needed (that being the prefix sum at the left index, multiplied by the number of subarrays being summed over, which is the right index minus the left index). Once we have done this for all possible left indices, we finally add on the correct multiple of the target sum to account for however many are needed to get from the less-than count to the true count required.

Do the above for both the left and right indices, compute the difference, and reduce modulo the large number given in the question.
# Approach
<!-- Describe your approach to solving the problem. -->
Implement the above (check my code below).
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n\\log n\\log kn)$ where $k$ is the maximum entry in the array; $k = 100$ with the given restrictions.

The outer binary search does $O(\\log kn)$ iterations at most, since the maximum sum is $kn$ and the minimum sum is $1$, and this is the range of integers being searched.

For each outer binary search iteration, we iterate through all possible left indices, of which there are $n$, so for each outer iteration there are $O(n)$ of these iterations.

For each left index interation, we perform an inner binary search for the right index. Since there are $O(n)$ such indices, each inner binary search takes $O(\\log n)$ time.

We perform this algorithm twice (a constant), and otherwise we simply compute initial prefix sums and second prefix sums, each of which take only $O(n)$ time, dominated by the main algorithm. So the overall time complexity is the product of the above three parts, giving $O(n\\log n\\log kn)$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
This implementation uses $O(n)$ space. We use auxilliary arrays for the prefix sums and second prefix sums. However, it is possible to eliminate all auxilliary arrays (and use $O(1)$ space instead) by only storing the second prefix sums, and storing them back in the original array. From second prefix sums, we can compute the original prefix sums as the difference of consecutive terms (so this doesn't affect time complexity), and we could compute the original array elements if we wanted to similarly (but we don't actually need them in the main algorithm anyway).
# Code
```
public class Solution {
    public int RangeSum(int[] nums, int n, int left, int right) {
        left--;//turn left through right into a normal 0-indexed range [left, right)
        //why is n given? Surely it is always equal to nums.Length? And if not, what part of nums is used?
        int min = int.MaxValue;
        int sum = 0;
        int[] prefixSums = new int[n + 1];
        for (int i = 0; i < n; i++) {
            int num = nums[i];
            sum += num;
            prefixSums[i + 1] = sum;
            min = Math.Min(min, num);
        }
        int secondSum = 0;
        int[] prefixSecondSums = new int[n + 2];
        for (int i = 0; i <= n; i++) {
            int num = prefixSums[i];
            secondSum += num;
            prefixSecondSums[i + 1] = secondSum;
        }
        int sumLo = min - 1;
        int sumHi = sum + 1;
        long leftResult = 0;
        while (true) {
            int sumMid = (sumLo + sumHi) / 2;
            int ltCount = 0;
            int eqCount = 0;
            for (int i = 0; i < n; i++) {
                int prefixSum = prefixSums[i];
                int lo = i;
                int hi = n + 1;
                while (hi - lo > 1) {
                    int mid = (lo + hi) / 2;
                    int subarraySum = prefixSums[mid] - prefixSum;
                    if (subarraySum < sumMid) lo = mid;
                    else hi = mid;
                }
                ltCount += lo - i;
                if (hi <= n && prefixSums[hi] - prefixSum == sumMid) eqCount++;
            }
            if (left < ltCount) sumHi = sumMid;
            else if (ltCount + eqCount < left) sumLo = sumMid;
            else {
                for (int i = 0; i < n; i++) {
                    int prefixSum = prefixSums[i];
                    int lo = i;
                    int hi = n + 1;
                    while (hi - lo > 1) {
                        int mid = (lo + hi) / 2;
                        int subarraySum = prefixSums[mid] - prefixSum;
                        if (subarraySum < sumMid) lo = mid;
                        else hi = mid;
                    }
                    leftResult += prefixSecondSums[hi] - prefixSecondSums[i] - (lo - i) * prefixSums[i];
                }
                leftResult += sumMid * (left - ltCount);
                break;
            }
        }
        sumLo = min - 1;
        sumHi = sum + 1;
        long rightResult = 0;
        while (true) {
            int sumMid = (sumLo + sumHi) / 2;
            int ltCount = 0;
            int eqCount = 0;
            for (int i = 0; i < n; i++) {
                int prefixSum = prefixSums[i];
                int lo = i;
                int hi = n + 1;
                while (hi - lo > 1) {
                    int mid = (lo + hi) / 2;
                    int subarraySum = prefixSums[mid] - prefixSum;
                    if (subarraySum < sumMid) lo = mid;
                    else hi = mid;
                }
                ltCount += lo - i;
                if (hi <= n && prefixSums[hi] - prefixSum == sumMid) eqCount++;
            }
            if (right < ltCount) sumHi = sumMid;
            else if (ltCount + eqCount < right) sumLo = sumMid;
            else {
                for (int i = 0; i < n; i++) {
                    int prefixSum = prefixSums[i];
                    int lo = i;
                    int hi = n + 1;
                    while (hi - lo > 1) {
                        int mid = (lo + hi) / 2;
                        int subarraySum = prefixSums[mid] - prefixSum;
                        if (subarraySum < sumMid) lo = mid;
                        else hi = mid;
                    }
                    rightResult += prefixSecondSums[hi] - prefixSecondSums[i] - (lo - i) * prefixSums[i];
                }
                rightResult += sumMid * (right - ltCount);
                break;
            }
        }
        return (int)((rightResult - leftResult) % 1_000_000_007);
    }
}
```