# Swift | Max Subsequence + Merge solution

**Author:** VladimirTheLeet
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-maximum-number/solutions/5051106/](https://leetcode.com/problems/create-maximum-number/solutions/5051106/)

---

# Approach
1. Iterate $i$ from $0$ to $k$
2. For every $i$ find maximal subsequence from `nums1` of length $i$, and from `nums2` of length $k-i$ by using monotonic stack
(this is basically a solution of [1673. Find the Most Competitive Subsequence](https://leetcode.com/problems/find-the-most-competitive-subsequence/))
3. Find the maximal merge of this two sequences with greedy two-pointer technique.
4. Compare the obtained array to current max result and take the greater one (we write a nifty extension to make arrays `Comparable`).

# Complexity
$m$ is `nums1` length, $n$ is `nums2` length
- Time complexity: $O((m+n) \\cdot k + k^3)$
TC of `maxSubsequence()` is $O(m)$ for `nums1` and $O(n)$ for `nums2`. It is called in a loop at most $k$ times which gives $O((m+n) \\cdot k))$
TC of `merge()` function is $k^2$ in the worst case when both sequences consist of the same repeating number. It is called in a loop at most $k$ times which gives $O(k^3)$ time.
Arrays comparison takes $O(k)$ time at worst. Multiplied by at  most $k$ loop iterations it gives $O(k^2)$ complexity.

- Space complexity: $O(k)$
`maxNumber()` uses $O(k)$ space, `maxSubsequence()` uses $O(k)$ space, `merge()` uses $O(k)$ space, arrays comparison takes $O(1)$ space

# Code
```
class Solution {
    func maxNumber(_ nums1: [Int], _ nums2: [Int], _ k: Int) -> [Int]
    {
        let m = nums1.count, n = nums2.count
        var res: [Int] = []
        for i in 0...k where i <= m && k-i <= n
        {
            let subseq1 = maxSubsequence(of: nums1, length: i)
            let subseq2 = maxSubsequence(of: nums2, length: k-i)
            res = max(res, merge(subseq1, subseq2))
        }
        return res
    }

    func maxSubsequence(of nums: [Int], length k: Int) -> [Int]
    {
        let n = nums.count
        var stack: [Int] = []
        for (i, num) in nums.enumerated()
        {
            let numsLeft = n - i
            while !stack.isEmpty, stack.last! < num, stack.count + numsLeft > k {
                stack.removeLast()
            }
            if stack.count < k {
                stack.append(num)
            }
        }
        return stack
    }

    func merge(_ seq1: [Int], _ seq2: [Int]) -> [Int]
    {
        var m = seq1.count, n = seq2.count
        var res: [Int] = []
        var i = 0, j = 0

        func takeSeq1() { res.append(seq1[i]); i += 1 }
        func takeSeq2() { res.append(seq2[j]); j += 1 }

        while i < m, j < n
        {
            if seq1[i] > seq2[j] { takeSeq1() }
            else if seq1[i] < seq2[j] { takeSeq2() }
            else //look ahead
            {
                var indI = i, indJ = j
                while indI < m, indJ < n, seq1[indI] == seq2[indJ] {
                    indI += 1; indJ += 1
                }
                if indI == m { takeSeq2() }
                else if indJ == n { takeSeq1() }
                else
                {
                    if seq1[indI] > seq2[indJ] { takeSeq1() }
                    else { takeSeq2() }
                }
            }
        }
        res.append(contentsOf: seq1[i..<m])
        res.append(contentsOf: seq2[j..<n])
        return res
    }
}

extension Array: Comparable where Element: Comparable
{
    public static func < (lhs: Self, rhs: Self) -> Bool
    {
        let minCount = [lhs.count, rhs.count].min()!
        for i in 0..<minCount
        {
            if lhs[i] < rhs[i] { return true }
            if lhs[i] > rhs[i] { return false }
        }
        return lhs.count < rhs.count
    }
}
```