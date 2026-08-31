# C++ Simple and with algorithm Solution O(n) time and space both.

**Author:** aman_2_0_2_3
**Votes:** 19
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/1778095/](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/1778095/)

---

```
let's take an example: 
                                                  ||          ||                   ||
arr[]           =         30       10       20    ||    40    ||    60       50    ||    75       70
left_max        =         30       30       30    ||    40    ||    60       60    ||    75       75
right _min      =         10       10       20    ||    40    ||    50       50    ||    70       70
                                                  ||          ||                   ||
here we need a variable that will count the number of chunks.
so take int count = 0;

when we encounter (left_max[i] <= right_min) update count = count + 1.
but in the actual code i'm taking only right_min vector not left_max,
since we can generate left_min value simultaneously within the loop.

so that's it

```
**PLEASE UPVOTE if you like \uD83D\uDE01 If you have any question, feel free to ask.**
```
int maxChunksToSorted(vector<int>& arr) {
       
        int n = arr.size();
        vector<int> rightmin(n+1,INT_MAX);
        for(int i=n-1;i>=0;i--)
        {
            rightmin[i] = min(arr[i],rightmin[i+1]);
        }
        int count = 0;
        int leftmax = INT_MIN;
        for(int i=0;i<n;i++)
        {
            leftmax = max(leftmax,arr[i]);
            if(leftmax <= rightmin[i+1])
            {
                count++;
            }
        }
        return count++;
        
    }
```
**PLEASE UPVOTE if you like \uD83D\uDE01 If you have any question, feel free to ask.**
