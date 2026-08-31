# Ruby solution with counting sort, explained (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/campus-bikes/solutions/4178601/](https://leetcode.com/problems/campus-bikes/solutions/4178601/)

---

# Intuition
Find every distance and sort them by distance, worker index, and bike index.  (Use counting sort -- it's the fastest option here, and the built-in sort gets TLE.)  Choose distances from least to greatest until every worker has a bike, skipping over workers/bikes that have already been handled.

# Approach
1. Create an array all distances between workers and bikes.  Note that this is not organized by distance but *is* organized by worker index and bike index.
2. Sort by distance using counting sort:
    - Create a 2D arrray covering all possible distance.
    - Put each element into the subarray at index of that distance.
    - Create a new array and populate it with the subarrays in order of distance.
3. Create a res array, initializing all values are nil.  Create sets to checks with workers/bikes have already been assigned.
4. Iterate through the array until each worker has an assigned bike.  At each point, assign the bike to the worker if it hasn't been used yet.  If you do this, update res, used_workers, and used_bikes.
5. Return res.

# Complexity
- Time complexity:
$$O(m * n)$$

- Space complexity:
$$O(m * n)$$

# Code
```
def assign_bikes(workers, bikes)
    arr = []
    workers.each_with_index do |worker,i|
        bikes.each_with_index do |bike,j|
            a,b = worker
            c,d = bike
            arr << [(a-c).abs + (b-d).abs, i, j]
        end
    end

    sorting_arr = Array.new(2000) { [] }
    arr.each do |dist,i,j|
        sorting_arr[dist] << [dist,i,j]
    end
    arr = []
    sorting_arr.each do |vals|
        vals.each { |val| arr << val }
    end

    res = Array.new(workers.length,0)
    used_workers = Set[]
    used_bikes = Set[]

    until used_workers.size == workers.size
        dist, i, j = arr.shift
        unless used_workers.include?(i) || used_bikes.include?(j)
            res[i] = j
            used_workers.add(i)
            used_bikes.add(j)
        end
    end

    res
end
```