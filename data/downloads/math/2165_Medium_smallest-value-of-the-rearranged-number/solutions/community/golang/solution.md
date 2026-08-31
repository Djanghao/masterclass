# Convert to byte array and sort

**Author:** SamuelMuloki
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/4357157/](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/4357157/)

---

# Approach
Convert the num into a byte array then sort in ascending order. Find the first index that is non zero and swap it with first index that is zero.

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(logn)

# Code
```
func smallestNumber(num int64) int64 {
    arr := []byte(strconv.Itoa(abs(num)))
    sort.Slice(arr, func(i, j int) bool {
        if num < 0 {
            return arr[i] > arr[j]
        }

        return arr[i] < arr[j]
    })

    idx := sort.Search(len(arr), func(i int) bool { return arr[i] != '0' })
    if idx != len(arr) {
        arr[0], arr[idx] = arr[idx], arr[0]
    }

    ans, _ := strconv.Atoi(string(arr))
    if num < 0 {
        return int64(-ans)
    }

    return int64(ans)
}

func abs(x int64) int {
    if x < 0 {
        return int(-x)
    }

    return int(x)
}

```