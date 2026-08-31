# Elixir solution using Binary Search

**Author:** kkhaniffff
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3268636/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3268636/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
First we have to find boundaries for applying binary search. The left boundary will simply be the shortest time it takes any of the buses to make the trip, and the right boundary will be the same value multiplied by `total_trips`. 

Then for each iteration we find `mid` value and:
- if `mid` time is not enough for all the buses to make `total_trips` trips or more, we drop all values up to and **including** `mid` and search the right part.
- else we drop all values **after** `mid` and search left part since smaller amount of time might be enough to make `total_trips` trips.

For calculating number of trips all buses can make at `time` time we just have to loop over all `trip_times` and obtain a sum of `time` divided by each element dropping the fractional part. If the sum is greater than or equal to `total_trips`, `time` is said to be enough.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n*log_m) - where `n` is a number of elements in `trip_times` and `m` is a subtaction of initial `right` and `left` values

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - we are using only constant space, tail-call optimization is applied to all recurcive function calls

# Code
```
defmodule Solution do
    @spec minimum_time(trip_times :: [integer], total_trips :: integer) :: integer
    def minimum_time(trip_times, total_trips) do
        min_time = Enum.min(trip_times)
        binary_search(trip_times, min_time, min_time * total_trips, total_trips)
    end

    defp binary_search(_trip_times, left, left, _total_trips), do: left

    defp binary_search(trip_times, left, right, total_trips) do
        mid = left + div(right - left, 2)

        if enough?(trip_times, mid, 0, total_trips) do
            binary_search(trip_times, left, mid, total_trips)
        else
            binary_search(trip_times, mid + 1, right, total_trips)
        end
    end

    defp enough?(_trip_times, _time, trips, total_trips) when trips >= total_trips, do: true

    defp enough?([], _time, _trips, _total_trips), do: false

    defp enough?([head | tail], time, trips, total_trips) do
        enough?(tail, time, trips + div(time, head), total_trips)
    end
end
```