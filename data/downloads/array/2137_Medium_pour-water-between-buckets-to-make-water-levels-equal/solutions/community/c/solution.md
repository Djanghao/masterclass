# C++ | O(nlogn) Time and O(1) space | Maths | Explanation

**Author:** HimanshuMittal01
**Votes:** 3
**Link:** [https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/1700221/](https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/1700221/)

---

To visualize the problem, think of increasing heights of boxes in a row (like a increasing histogram) and then put a line through the average of those heights. The problem is asking to find the maximum height of that line such that gap below the line and boxes is equal to the extra heights of boxes above the line.

One thing we know for sure is that the line can maximum be placed on average of all water.

Now, visually my algorithm just tries to first check whether it is possible for the line to shift between iself and the immediate box below it, and if it possible then we just find how much to move in O(1) time, else we just snap the line to the box, and check for the next box.

It will always find an answer because we can prove that the line will be greater than or equal to the height of the smallest box.

The idea of this algorithm is to equalize the gained water (i.e. transferred water - lost water) to required water. Here are the steps:
1. Sort the array as described (why? to easily find which box is next closest to the line)
2. Find the sum of array (again for easy calculations). Set your baseline to average of all buckets. (line or 'ans', whatever you wanna call it)
3. Then loop through the array from highest to lowest element and keep track of right sum of buckets (denoted by 'r') till you find the element which is smaller to the line.
4. Now calculate how much is extra water ('er') and required water ('wr'). ew = r - ans*(n-i-1); rw = ans*(i+1) - l; Here, (n-i-1) is number of buckets on right side and (i+1) are buckets on left side. Now, we want to find whether we can find a 'x' such that line lies above my current bucket. So, by equality (er + x * (n-i-1)) * g = rw + x*(i+1). Here, g is 1-l which represents gain. Now, we can solve for x (see code)
5. If x can lie between, then do that i.e. height of line - x. Otherwise, move to next bucket and move my baseline to current bucket because extra water is not enough.

Time complexity: O(nlogn) (Just coz of sorting, otherwise it would be worst case o(n))
Space complexity: O(1) (only storing constant space variables)

Please go through the code for easy understanding:
```
#define dbl long double
#define ll long long

class Solution {
public:
    double equalizeWater(vector<int>& buckets, int loss) {
        int n = buckets.size();
        double g = 1 - (double)loss/100;
        dbl s = accumulate(buckets.begin(), buckets.end(), 0LL);
        double ans = s/n;
        
        sort(buckets.begin(), buckets.end());
        
        dbl r = 0;
        for (int i=n-1; i>=0; i--) {
            if (buckets[i] < ans) {
                dbl l = s-r;
                
                dbl ew = r - ans*(n-i-1);
                dbl rw = ans*(i+1) - l;
                
                dbl x = (rw - ew*g) / (g*(n-i-1) + i+1);
                if (x<=ans-buckets[i]) {
                    return ans-x;
                } else {
                    ans = buckets[i];
                }
            } 
            r += buckets[i];
        }
        return buckets[0];
    }
};
```