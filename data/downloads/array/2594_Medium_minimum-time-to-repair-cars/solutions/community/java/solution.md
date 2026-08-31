# [C++, Java, Python3] Binary Search + 1 liner

**Author:** tojuna
**Votes:** 69
**Link:** [https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3311975/](https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3311975/)

---


# Intuition
A mechanic can repair `n` cars in `r * n * n` minutes. So in `mid` minutes a mechanic can repair `n` cars where, `n = sqrt(mid / r)` 
Let's assume that the correct answer is `mid` minutes, we can find the number of cars each mechanic can repair in `mid` minutes, then find the find the total number of cars fixed. If total number of cars fixed is greater than or equal to the cars we have to repair, `mid` minutes is a valid answer, else we have to increase `mid`. We can not linearly calculate total cars fixed for each mid in (0 to 10^14), we must use binary search to lower the time complexity.

# Approach
* Total cars repaired by all workers in `mid` minutes must be greater than or equal to total cars that have to be repaired
* Binary search over the range `0 to 10^14` to find what is the minimum time required to repair all cars
* We use high as `10^14` because `max(rank) = 100` and `max(cars) = 10^6` so, `r * n * n = 100 * 10^6 * 10^6 = 10^14`

# Complexity
- Time complexity: `O(nlog(10^14))`

- Space complexity: `O(1)`

# Code
**C++**:
```
long long repairCars(vector<int>& ranks, int cars) {
    long long low = 0, high = 1e14;
    while (low < high) {
        long long mid = low + (high - low) / 2, repaired_cars = 0;
        for (int& r: ranks)
            repaired_cars += sqrt(mid / r);
        if (repaired_cars < cars) low = mid + 1;
        else high = mid;
    }
    return low;
}
```

**Java**:
```
public long repairCars(int[] ranks, int cars) {
    long low = 0, high = (long)1e14;
    while (low < high) {
        long mid = low + (high - low) / 2, repaired_cars = 0;
        for (int r: ranks)
            repaired_cars += Math.sqrt(mid / r);
        if (repaired_cars < cars) low = mid + 1;
        else high = mid;
    }
    return low;
}
```

**Python3**:
```
def repairCars(self, A: List[int], cars: int) -> int:
    return bisect_left(range(10**14), cars, key=lambda x: sum(int(sqrt(x / a)) for a in A))
```

Similar Questions:
[Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/1802415/python3-java-c-binary-search-1-liner/)
[Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/solutions/3262163/c-java-python3-1-line-ologn/)
[Maximum Tastiness of Candy Basket](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/2947983/c-java-python-binary-search-and-sorting/)
[Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/1976804/python3-2-lines-sort-and-binary-search/)