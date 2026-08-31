# O(N), O(NlogN), O(n^2) 3 + α different solutions in Go

**Author:** usk83
**Votes:** 13
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/526266/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/526266/)

---

## 1. Count the number of occurrences

- Time Complexity: O(N) (N + 100 + N)
- Space Complexity: O(1) (101 + answer)

> Runtime: 4 ms (faster than 100.00%)
> Memory Usage: 3.1 MB (less than 100.00%)

```
func smallerNumbersThanCurrent(nums []int) []int {
  occurrences := [101]int{}
  for _, num := range nums {
    occurrences[num]++
  }
  prevOccurrences := occurrences[0]
  occurrences[0] = 0
  for i := range occurrences[1:] {
    occurrences[i+1], prevOccurrences = prevOccurrences, prevOccurrences+occurrences[i+1]
  }
  counts := make([]int, len(nums))
  for i, num := range nums {
    counts[i] = occurrences[num]
  }
  return counts
}
```

## 2-1. Sort and binary search

- Time Complexity: O(NlogN) (N + NlogN + NlogN)
- Space Complexity: O(N) (N + logN + answer)

> Runtime: 4 ms (faster than 100.00%)
> Memory Usage: 3.2 MB (less than 100.00%)

```
func smallerNumbersThanCurrent(nums []int) []int {
 sortedNums := make([]int, len(nums))
 copy(sortedNums, nums)
 sort.Ints(sortedNums)
 counts := make([]int, len(nums))
 for i, num := range nums {
   counts[i] = sort.Search(len(sortedNums), func(j int) bool {
     return num <= sortedNums[j]
   })
 }
 return counts
}
```

## 2-2. Sort and binary search with cache

- Time Complexity: O(NlogN) (N + NlogN + NlogN)
- Space Complexity: O(N) (N + logN + N + answer)

> Runtime: 4 ms (faster than 100.00%)
> Memory Usage: 3.5 MB (less than 100.00%)

```
func smallerNumbersThanCurrent(nums []int) []int {
 sortedNums := make([]int, len(nums))
 copy(sortedNums, nums)
 sort.Ints(sortedNums)
 counts := make([]int, len(nums))
 cache := map[int]int{}
 for i, num := range nums {
   if count, ok := cache[num]; ok {
     counts[i] = count
     continue
   }
   counts[i] = sort.Search(len(sortedNums), func(j int) bool {
     return num <= sortedNums[j]
   })
   cache[num] = counts[i]
 }
 return counts
}
```

## 2-3. Sort and pre-calculate the index of each number as map

ref: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/discuss/525004/JavaScript-Clean-solution-using-array-sort

- Time Complexity: O(NlogN) (N + NlogN + N + N)
- Space Complexity: O(N) (N + logN + N + answer)

> Runtime: 4 ms (faster than 95.08%)
> Memory Usage: 3.5 MB (less than 100.00%)

```
func smallerNumbersThanCurrent(nums []int) []int {
  sortedNums := make([]int, len(nums))
  copy(sortedNums, nums)
  sort.Ints(sortedNums)
  countMap := map[int]int{}
  for i, num := range sortedNums {
    if _, ok := countMap[num]; !ok {
      countMap[num] = i
    }
  }
  counts := make([]int, len(nums))
  for i, num := range nums {
    counts[i] = countMap[num]
  }
  return counts
}
```

## 3-1. Brute force

- Time Complexity: O(N^2)
- Space Complexity: O(1)

> Runtime: 12 ms (faster than 100.00%)
> Memory Usage: 3.1 MB (less than 100.00%)

```
func smallerNumbersThanCurrent(nums []int) []int {
 counts := make([]int, len(nums))
 for i, current := range nums {
   for _, target := range nums {
     if current > target {
       counts[i]++
     }
   }
 }
 return counts
}
```

## 3-2. Brute force with cache

- Time Complexity: O(N^2)
- Space Complexity: O(N) (N + answer)

> Runtime: 4 ms (faster than 100.00%)
> Memory Usage: 3.4 MB (less than 100.00%)

```
func smallerNumbersThanCurrent(nums []int) []int {
 counts := make([]int, len(nums))
 cache := map[int]int{}
 for i, current := range nums {
   if count, ok := cache[current]; ok {
     counts[i] = count
     continue
   }
   for _, target := range nums {
     if current > target {
       counts[i]++
     }
   }
   cache[current] = counts[i]
 }
 return counts
}
```
