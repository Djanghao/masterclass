# [C#] Sliding Window - further commentary from @lee215's solution

**Author:** antonybstack
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3056788/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3056788/)

---

@lee215's solution was very short and concise, but I struggled to understand the properties that were being used behind the scenes.

These are my findings after some more analysis, I hope it helps someone who was struggling as long as I was.


```
public class Solution {
    public long CountGood(int[] A, int pairs)
    {
        long res = 0;
        var count = new Dictionary<int, int>();
        for (int i = 0, j = 0; j < A.Length; ++j)
        {
            // before incrementing A[j]
            // substract the number of A[j] occurences that already exist
            // difficult to conceptualize since it seems like it doesnt make sense to substract
            // the count from pairs, instead of substracting the number of pairs of that value
            // It works off the idea that the number of pairs of n numbers is n(n-1)/2
            // Lets say it's the first time we have found the value 4
            // this first iteration, we will substract 0 from pairs
            // since the hashmap doesnt have that value yet
            // the next time, it will correctly subtract 1 from pairs
            // since it will have [4,1] in the hashmap
            // then the third time we find this value, we will be subtracting 2 from pairs
            // but remember, we've already subtracted 1 pair before, so this is consistent
            // As when we have 3 numbers, we can make 3(2-1)/2 = 3 pairs
            // and after subtracting 2 from pairs, we will at this point have subtracted 3
            // pairs accounting for the value 4
            pairs -= count.GetValueOrDefault(A[j]);
            count[A[j]] = count.GetValueOrDefault(A[j]) + 1;

            // once we've reached a valid subarray i.e. we have atleast k pairs
            // the goal is to make the sliding window subarray invalid again
            // by removing elements from the left 
            while (pairs <= 0)
            {
                // first decrement by 1 as we are removing element from window
                count[A[i]] = count[A[i]] - 1;
                // as we want to add back (n-1)(n-1)/2 pairs instead of n(n-1)/2
                pairs += count[A[i]];
                i++;
            }
            // another idea difficult to conceptualize: we add the index value, i, to res
            // at this point the subarray [i, j] is invalid after reducing the left bound
            // as it holds a property to help us count the number of good subarrays
            // and we know before we reduced the left bound, the subarray [i-1, j] was good
            // therefore, all subarrays [0, j], [1, j], ..., [i-1, j] are good as well
            // Example:
            // Let's say the current sliding window subarray that is invalid is:
            // 1, 1, 1,[1, 1] where i=3 and j=4
            // that means we know the following are valid subarrays
            // 1, 1, [1, 1, 1]
            // 1, [1, 1, 1, 1]
            // [1, 1, 1, 1, 1]
            res += i;
        }
        return res;
    }
}
```

###### Inverse of the approach above, may be more intuitive
```
public long CountGood(int[] A, int pairs)
    long ans = 0, currPairs = 0;
    var count = new Dictionary<int, int>();
    for (int slow = 0, fast = 0; fast < A.Length; ++fast)
    {
        count[A[fast]] = count.GetValueOrDefault(A[fast]) + 1;
        currPairs += count.GetValueOrDefault(A[fast]) - 1;
        // only move the slow pointer when window becomes invalid
        while(currPairs>=pairs && slow<=fast)
        {
            // add the number of elements after the current element to the answer
            // as they are all considered good subarrays
            // since [slow,fast] is currently invalid
            // and [slow,fast+1], ..., [slow,n-1] are all valid
            ans += A.Length - fast;
            // decrease the count of the element removing from sliding window
            count[A[slow]] = count.GetValueOrDefault(A[slow]) - 1;
            // remove the element removing from sliding window from the count
            currPairs -= count.GetValueOrDefault(A[slow]);
            slow++;
        }
    }
    return ans;
}

```