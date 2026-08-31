# ✅ C++ || Beginner [Explained] || Sliding Window || Easy to Understand

**Author:** 99NotOut_half_dead
**Votes:** 20
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/1465610/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/1465610/)

---

# ***Approach***
```
There is nothing special in this problem and is a quite easy to implement problem!!!
Do only what is mentioned , form average of each window , check if its satisfies given condition (>= threshold)
I maintained window sum instead of window average , because its more easy to maintain window sum , and from window sum window average can be easily calculated!!!

Algo steps
step 1 : form first window
step 2 : loop through arr
    form each window
    if window average >= threshold
        count++
    return count

O(N) time  , O(1) space
```
# ***Code***
```
class Solution {
public:
    int numOfSubarrays(vector<int> &arr, int k, int threshold) {
        int window_sum = 0;
        int count = 0;

        // step 1 : forming window sum for first window [starting at index (0) and ending at index (k - 1)]
        for(int i = 0 ; i < k ; ++i)
            window_sum += arr[i];
        
        // step 2 : loop through arr and find each window's average
        for(int i = 0 ; i < arr.size() - k + 1 ; ++i)
        {
            if(i != 0)
            {
                window_sum -= arr[i - 1];    // removing first element from prev window
                window_sum += arr[i + k - 1];// adding last + 1 elemnt in prev window
                // new window is ready
            }
            
            int window_average = window_sum / k;
            
            if(window_average >= threshold)
                count++;
        }
        
        return count;
        
    }
};
```
# ***If you liked the solution , Please Upvote :)***