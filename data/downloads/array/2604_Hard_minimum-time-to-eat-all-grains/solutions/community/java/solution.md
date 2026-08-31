# [Java] | Binary Search + Greedy

**Author:** AyushAgrawal-A2
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3357292/](https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3357292/)

---

# Intuition
For different time values, hens will not be able to eat all grains up untill the minimum time value required (answer). For any time value greater than answer, hens will finish all grains. Hence, do binary search for the answer.

# Approach
Write a method to check whether hens can eat all grains within a given time.
- This method takes sorted hens & grains array and a target time.
- Start iterating from the left / right for both the arrays. I am iterating from left in this solution.
- For each hen find the maximum range [left, right] it should travel in the given time.
- If there is a grain to the left of hen, it should collect it. As this grain will be farther away for any other hen. To collect the grain to the left from its current position, it can directly go to left or first go right and then come back to left. Find the maximum of both scenarios.
- If there is no grain to the left, then no need to go left. This hen should travel only to the right for the given time.
- All grains within this range [left, right] will be consumed by this hen.

Binary Search the answer using the above method.
- Possible answer time range as per constraints is [0, 1.5e9];
- 1.5e9 answer will occur when hen is in the center i.e. 5e8 and one grain is at 0 while other is at 1e9. Hen will have to travel 5e8 + 1e9 = 1.5e9.

# Complexity
- Time complexity:
$$O(n.log(n) + m.log(m) + n + m)$$
where n = number of hens, m = number of grains

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    public int minimumTime(int[] hens, int[] grains) {
        //Sort both the arrays.
        Arrays.sort(hens);
        Arrays.sort(grains);
        //Binary search the answer.
        int start = 0, end = 1_500_000_000;
        while(start <= end) {
            int mid = start + (end - start)/2;
            if(check(hens, grains, mid))
                end = mid - 1;
            else
                start = mid + 1;
        }
        return start;
    }
    public boolean check(int[] hens, int[] grains, int time) {
        int n = hens.length, m = grains.length, h = 0, g = 0;
        // h is pointer for current leftmost hen in hens array.
        // g is pointer for the current leftmost un-eaten grain in grains array.
        while(h < n && g < m) {
            // Current hen at index h will travel from [henLeft, henRight].
            int henLeft, henRight;

            // If there is a grain to the of current hen,
            // it will have to eat this grain.
            if(grains[g] < hens[h]) {

                // Time left after going to left for this grain
                int timeLeft = time - (hens[h] - grains[g]);
                // If the grain is too far, timeLeft will be negative,
                // it is not possible to eat this grain in given time.
                if(timeLeft < 0) return false;

                henLeft = grains[g];

                // Hen can first go left, or go right and come back to left.
                henRight = Math.max(henLeft + timeLeft, hens[h] + timeLeft / 2);
            } 
            // If there is no grain to left, just go right.
            else {
                henLeft = hens[h];
                henRight = hens[h] + time;
            }
            // Consume all grains in the range [henLeft, henRight].
            while(g < m && grains[g] >= henLeft && grains[g] <= henRight) {
                g++;
            }
            h++;
        }
        // Return true if all grains have been consumed.
        return g == m;
    }
}
```