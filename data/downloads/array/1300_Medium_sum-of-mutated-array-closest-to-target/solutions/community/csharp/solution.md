# Prefix sum and binary search (with comments)

**Author:** a_m_78
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/3082819/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/3082819/)

---

# Code
```
public class Solution {
    public int FindBestValue(int[] arr, int target) {
        var res = Int32.MaxValue;
        var diff = Int32.MaxValue;

        var n = arr.Length;
        Array.Sort(arr);

        var sums = new int[n];
        sums[0] = arr[0];

        // prefix sum for further calculations
        for (var i = 1; i < n; i++) {
            sums[i] = arr[i] + sums[i - 1];
        }

        var lo = 0;
        var hi = arr[n - 1];

        while (lo <= hi) {
            // this is the value we are trying to guess
            var num = lo + (hi - lo) / 2;

            var left = 0;
            var right = n - 1;

            // with binary seach we search for index from
            // we need to correct sum
            while (left < right) {
                var mid = left + (right - left) / 2;

                if (arr[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            if (arr[left] < num) left++;

            // calc the new sum and the difference with target
            var sum = ((left == 0) ? 0 : sums[left - 1]) + num * (n - left);
            var difference = Math.Abs(sum - target);

            // update result depending on the difference
            if (difference < diff) {
                res = num;
            } else if (difference == diff) {
                res = Math.Min(res, num);
            }

            diff = Math.Min(difference, diff);

            if (sum < target) {
                lo = num + 1;
            } else {
                hi = num - 1;
            }
        }

        return res;
    }
}
```