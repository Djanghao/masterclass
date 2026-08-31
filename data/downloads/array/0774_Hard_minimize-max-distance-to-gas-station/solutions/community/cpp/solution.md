# Well explained easy to follow code

**Author:** anup2kin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/5681683/](https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/5681683/)

---

# Intuition
Let's take a brute-force approach. 

We will start with some value of minimum distance value. We will calculate how many gas stations are needed with this minimum distance value. If we need more than k stations, we must increase the minimum distance value. 

After increasing the value of minimum distance, if we find that we still need more than k stations, we will increase the value of the minimum distance. 
Since the threshold value given is 10^-6, this increment value will be 10^-6 each time.
Now, notice that we don't need to evaluate each minimum distance value. We can double the distance and then calculate the number of gas stations required. If, at any point, we find that with the minimum distance value, the number of new gas stations required is less than k, we need to move the minimum distance value back by half.

There are 2 key points here:
1. The value of the minimum distance is in a monotonic increasing range.
2. We don't need to evaluate the number of gas stations required for each possible value of minimum distance.

This hints towards a **Binary search**. Now, notice that the minimum distance is not an integral value; hence, it can take double values as well. This hints towards **bisection-search.**


# Complexity
- Time complexity:
$$O(n)$$ to find distance between each station.
$$O(n)$$ to find the number of gas stations required for a value of minimum distance.
$$O(log D)$$ for binary search where D is the maximum value of the range of minimum distance.
Hence the time complexity will be $$O(n log D)$$

- Space complexity:
$$O(1)$$

# Code
```cpp []
class Solution {
    const double THRESHOLD = 0.000001;

    int get_number_of_station(const vector<int> &stations, double distance)
    {
        int number_of_station = 0;
        for(int i = 0; i < size(stations) - 1; i++)
        {
            int distance_between_pair = stations[i + 1] - stations[i];
            int number_stations_required_for_this_pair = (1.0 * distance_between_pair) / distance;
            number_of_station += number_stations_required_for_this_pair;
        }

        return number_of_station;
    }

public:
    double minmaxGasDist(vector<int>& stations, int k) {
        // Let's take a brute-force approach. We will start with some value of minimum distance value. 
        // We will calculate how many gas stations are needed with this minimum distance value. 
        // If we need more than k stations, we must increase the minimum distance value. 
        // After increasing, if we find that we still need more than k stations, we will increase the 
        // value of the minimum distance. 
        // Since the threshold value given is 10^-6, this increment value will be 10^-6 each time.
        // Now, notice that we don't need to evaluate each minimum distance value to the best possible distance. 
        // We can double the value of minimum distance and then calculate the number of gas stations required. 
        // If, at any point, we find that with the minimum distance value, the number of new gas stations 
        // required is less than k, we need to move the minimum distance value back by half.
        // There are 2 key points here:
        // The value of the minimum distance is in a monotonic increasing range.
        // We don't need to evaluate the number of gas stations required for each possible value of minimum distance.
        // This hints towards a Binary search. 
        // Now, notice that the minimum distance is not an integral value; hence, it can take double values as well. 
        // This hints towards bisection-search.

        // The lowest value of minimum distance can be 0
        double start_distance = 0;
        // The highest value of minimum distance can be the max distance between a pair of stations in the given array
        double end_distance = 0;
        // Lets find the maximun distance in between a pair of stations in the stations array
        for(int i = 0; i < size(stations); i++)
            end_distance = max(static_cast<int>(end_distance), stations[i + 1] - stations[i]);

        // In case of bisection search, start can never cross end. It will go as close as possible to end.
        // This is the reason, we need to honor a threshold value (as per the constraints given in the question)
        while(start_distance <= end_distance - THRESHOLD)
        {
            double mid_distance = start_distance + (end_distance - start_distance) / 2.0;

            // Find the number of gas stations needed for the distance of value mid_distance
            if(get_number_of_station(stations, mid_distance) > k) start_distance = mid_distance;
            else end_distance = mid_distance;
        }

        return start_distance;
    }
};
```