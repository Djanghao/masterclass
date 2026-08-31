# [GoLang] Time O(nlogn), GCD, medians

**Author:** dkochetov
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3367794/](https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3367794/)

---

# Approach
Find Greatest common divisor of the array length and k.
For example length=16, k=12, then GCD=4.

```
______k=12_elements____
2,3,4,9,8,7,6,5,4,1,2,3,6,4,3,8
\u203EGCD=4\u203E
```

We split the list into chunks of length GCD=4.
Now we need to consider only the 0th elements from each chunk and make them equal, with the minimum number of increment/decrement operations. 

```
v       v       v       v
2,3,4,9,8,7,6,2,4,1,7,3,6,5,9,1
\u203E\u203E\u203E\u203E\u203E\u203E\u203E|\u203E\u203E\u203E\u203E\u203E\u203E\u203E|\u203E\u203E\u203E\u203E\u203E\u203E\u203E|\u203E\u203E\u203E\u203E\u203E\u203E\u203E

[2,8,4,6]
```
They must be equal to the median element from the list. The sum of absolute differences between the median and each element is the required minimum of operations to make all elements equal (to median).
```
median([2,8,4,6]) = median([2,4,6,8]) = 6  (or 4, doesn't matter)
num_of_operations = abs(2-6)+abs(4-6)+abs(6-6)+abs(8-6) = 8
```
Calculate `num_of_operations` for the remaining collections of elements with step GCD
```
  v       v       v       v
6,3,4,9,6,7,6,2,6,1,7,3,6,5,9,1
\u203E\u203E\u203E\u203E\u203E\u203E\u203E|\u203E\u203E\u203E\u203E\u203E\u203E\u203E|\u203E\u203E\u203E\u203E\u203E\u203E\u203E|\u203E\u203E\u203E\u203E\u203E\u203E\u203E

every 1st [3,7,1,5]
every 2nd [4,6,7,9]
every 3rd [9,2,3,1]
```
The total sum of `num_of_operations` is the answer

---

After applying all the operations (we don't need to actually update the list, it's only for the explanation) the list will look like:
```
______k=12_elements____
6,5,7,3,6,5,7,3,6,5,7,3,6,5,7,3
\u203E\u203E\u203E\u203E\u203E         \u203E\u203Ek=12_elements\u203E\u203E
```
Each sublist with k=12 elements will contain exactly the same set of elements: 3 chunks with [6,5,7,3] elements

# Complexity
- Time complexity: $$O(nlogn)$$
Sorting lists in order to find median elements.
I also tried QuickSelect for finding the medians with avg~O(n), but the runtime was much longer (180ms vs 600ms).

- Space complexity: $$O(n/gcd(n,k))$$

# Code
```
func makeSubKSumEqual(arr []int, k int) int64 {
    n := len(arr)
    steppedListNum := gcd(n, k)
    steppedListLen := n / steppedListNum
    steppedList := make([]int, steppedListLen)
    result := 0

    for shift:=0; shift<steppedListNum; shift++ {
        for i:=0; i<steppedListLen; i++ {
            steppedList[i] = arr[i*steppedListNum + shift]
        }
        sort.Ints(steppedList)
        median := steppedList[steppedListLen/2]
        for _, el := range steppedList {
            result += abs(median-el)
        }
    }
    return int64(result)
}

func gcd(a, b int) int {
    for b != 0 {
        a, b = b, a%b
    }
    return a
}

func abs(a int) int {
    if a >= 0 { return a }
    return -a
}
```