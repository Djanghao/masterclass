# C++ O(n) time and O(1) extra space solution (with explanation)

**Author:** shreyanshjn
**Votes:** 50
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/862701/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/862701/)

---

```l is the leftmost index where the unsorted array starts.```
```r is the rightmost index where the unsorted array ends.```

#### Note

**All the elements to the left of l will be sorted. Similarly, all the elements to the right of r will be sorted according to our definition of l and r. We will use this property to find our answer.**

### Steps
1. Iterate i from 0 to n and find the first index where ```arr[i] > arr[i + 1]```. The index found will be our l.
2. Iterate i from n - 1 to 0 and find the first index where ```arr[i] < arr[i - 1]```. The index found will be our r.
3.  The l and r which we found using steps 1 and 2, may be not the required index we are looking for.

	eg:- 
	
	For :- **[2, 3, 5, 6, 4, 8, 10, 9, 8, 10, 11, 15]**
	
	```l = 3 , r = 7 ```
	
	For time being suppose l and r is the required answer. This means if we sort the array from l to r we should get all array as sorted.
			[2, 3, 5, **4, 6, 8, 9, 10,**  8, 10, 11, 15]
			But, this is not the case.
			
#### How to find new l and r?
Let, ```maxi``` be the greatest element from l to r and ```mini``` be the minimum element from l to r.

We need to find the proper position of mini in [0, l). We can do a linear or binary search to get this. (or implement upper_bound, lower_bound provided by c++ stl). This will give us the required l. In our example, the position of 4 should be at index 2, which we can calculate using upper_bound from 0 to l.

Similarly, we need to find the proper position of maxi in [r + 1, n). We can implement lower_bound ( and not upper_bound) to find the position.
In our example, the position of 10 should be index 9.

### CPP code

```
class Solution {
public:
    int findUnsortedSubarray(vector<int>& arr) {
        int n = arr.size();
        int l = -1, r = -1;
        for(int i = 0; i < n - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                l = i;
                break;
            }    
        }
        for(int i = n - 1; i >= 1; i--) {
            if(arr[i] < arr[i - 1]) {
                r = i;
                break;
            }
        }
        if(l == -1) return 0; // this means array is already sorted.
        int mini = arr[l], maxi = arr[l];
        for(int i = l; i <=r; i++) {
            mini = min(mini, arr[i]);
            maxi = max(maxi, arr[i]);
        }
        l = upper_bound(arr.begin(), arr.begin() + l, mini) - arr.begin();
        r = lower_bound(arr.begin() + r + 1, arr.end(), maxi) - arr.begin();
        return r - l;
    }
};
```

**Please upvote, if this post helped you.**