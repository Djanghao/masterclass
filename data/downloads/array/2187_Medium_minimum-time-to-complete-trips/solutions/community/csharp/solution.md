# C# solution beats 100% in performance - Binary Search with some extra optimization

**Author:** TamasTako
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3270051/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3270051/)

---

# Intuition
At a given time, the number of trips are the sum of the trips that the buses have done. The $$i$$th bus have done $$givenTime / time[i]$$ integer division trips at a given time, we don't care about the remainder (modulus) as only the full trips count. We need to find the smallest time where this sum is greater than the given totalTrips value.

# Approach
If we have a look at the sums, we can find that it is an *equal or increasing* sequence, as with the extra next day the sum can't be less than the previous one (it can be equal on some days for relatively larger time[i] values). This would indicate that if we find a value range that we can identify for the sums, we can do a more optimal binary search algorithm.

As totalTrips cannot be 0, the minimum value for the days count could be 1. In the worst case, to get totalTrips we should do maximum $$min * totalTrips$$ days where min is the minimum value of the time array: if we would have only that bus and it would go for $$min * totalTrips$$ with a $$min$$ total cost of a roundtrip, that would mean it alone did the preferred $$totalTrip$$ count of trips. So these values would be the lower and upper boundaries of the binary search.

So first we will need to find minimum value with a simple min search. Next we will have to do a binary search with the range of 1 to min * totalTrip to check which is the first sum that is actualy greater then totalTrips. Here comes another trick: we don't have to calculate the actual sum values in all cases, we just
have to say if a give day is less than the totalTrips value or not. That means that while iterating through the time collection and calculating the sum value from the integer divisions, if we find that the current sum is already greater than totalTrips, we can short circuit the result and don't have to iterate through the rest of the times for that given day.


# Complexity
- Time complexity:
$$O(n * log(totalTrips * min)$$ where n is the number of buses, and min is the minimum amount of the times array
    -   minimum search with $$O(n)$$
    -   the binary search for finding the smallest number that is greater or equal to the totalnumber in range of [1.. totalTrips * min] is log(totalTrips * min)
    - and for each item we need to sum all the n times as a worst case (for sums greater than totalTrips we don't have to iterate on all, but for smaller ones we do have to)

- Space complexity:
$$O(1)$$ constant time as only a couple of longs and ints are used for storing min value, left and right pointers, and temp counts

# Code
```
public class Solution {
    public long MinimumTime(int[] time, int totalTrips) {
        int min = time[0];
        for(int i = 1; i < time.Length; i++)
        {
            if (min > time[i])
            {
                min = time[i];
            }
        }

        long left = 1;
        long right = (long)totalTrips * min;
        while (left < right)
        {
            long mid = left + (right - left) / 2;
            if (IsLess(time, mid, totalTrips))
            {
                left = mid + 1;
            }
            else
            {
                right = mid;
            }
        }
        return left;
    }

    private bool IsLess(int[] time, long current, int totalTrips)
    {
        long total = 0;
        for(int j = 0; j < time.Length; j++)
        {
            total += current / time[j];
            if (total >= totalTrips)
            {
                return false;
            } 
        }
        return true;
    }
}
```