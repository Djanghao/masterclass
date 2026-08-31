# Golang solution with explanation

**Author:** rtom09
**Votes:** 2
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/96285/](https://leetcode.com/problems/total-hamming-distance/solutions/96285/)

---

If a integer has 1 bit different than another integer, that will contribute to the hamming distance. But if we calculate the hamming distance the hard way brute force, that will lead to TLE

The better way is to think of each bit position as either occupied by 1 or 0. All the 32 bit position for each input number can have the total count of 1s summed up. If you add the number input array total length minus the 1s sum, you will get the 0s count. If we multiply the 1s count and 0s count, that will give us the sum for that bit position. Why do we multiply? Because we have to take into account each and every integer in the input array pairing possibility.

Following is golang code for this:


```
func totalHammingDistance(nums []int) int {
    sum := 0
    for i:= 0; i < 32; i++ {
        var ones uint
        ones = 0
        for _, c := range nums {
            v := uint(c)
            j := uint(i)
            ones += ((v >> j) & 0x01)
        }
        zeros:=(len(nums) - int(ones))
        sum += zeros * int(ones)
    } 
    return sum
}
```