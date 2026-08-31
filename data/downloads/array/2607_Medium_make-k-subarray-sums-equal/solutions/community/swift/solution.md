# Swift Solution Not So Well Optimized but Worked.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3376663/](https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3376663/)

---

# Approach
1. First, we find the GCD of the array length and k. If the GCD is equal to the length of the array, then it's the same as the case where k=1. If the GCD is 1, then it's the same as the case where k=length of the array. So in both cases, we just return the answer for the cases where k=1 and k=length of the array.
2. Otherwise, we divide the array into k groups, each with length of the length of the array divided by the GCD. For each group, we find the median of the group, and then we add the sum of the absolute differences between the median and each number in the group to the answer.
3. Then, we return the minimum of the answer above and the answer for the case where k=1.

# Complexity
- Time complexity: O(nlog(n))
- Space complexity: O(n)

# Code
```
class Solution {
    func makeSubKSumEqual(_ arr: [Int], _ k: Int) -> Int {
        var k = k
        k = gcd(arr.count, k)
        if k == arr.count { return 0 }
        if k == 1 { return getVal(arr) }

        var ptd = 0
        var arr2 = [Int](repeating: 0, count: arr.count/k)
        for i in 0..<k {
            for j in stride(from: i, to: arr.count, by: k) {
                arr2[j/k] = arr[j]
            }
            ptd += getVal(arr2)
        }
        return min(ptd, getVal(arr))
    }
    private func getVal(_ arrx: [Int]) -> Int {
        var arrx = arrx
        arrx.sort()
        let s = arrx[arrx.count/2]
        var r = 0
        for t in arrx { r += abs(s-t) }
        return r
    }

    private func gcd(_ a: Int, _ b: Int) -> Int {
        if a < b { return gcd(b, a) }
        if a % b == 0 { return b }
        return gcd(b, a%b)
    }
}
```