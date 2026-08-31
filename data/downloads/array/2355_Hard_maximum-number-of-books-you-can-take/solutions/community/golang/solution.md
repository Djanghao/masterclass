# Using Stack + Sum of Arithmetic Sequence works!

**Author:** user8272RT
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/4900262/](https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/4900262/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The strictly increasing criteria is a hint for using a monotonic stack.

# Approach
<!-- Describe your approach to solving the problem. -->
The core idea is to determine gaps between the values in the stack and compute the total number of books collected using Arithmetic sequence sum.

`sum = n*(a1+an)/2`

A monotonic stack works, but the tricky part is figuring out how to maintian a "rolling sum" as we iterate through the shelves. This required a lot of debugging on my part.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
func maximumBooks(books []int) int64 {
    ans:=0
    st:=[]int{-1}
    carry:=0
    for i:=range books{
        lastVal:=books[i]
        for st[len(st)-1]!=-1 && books[st[len(st)-1]]>=lastVal{
            gap:=st[len(st)-1]-st[len(st)-2]
            lastVal-=gap
            carry-=seqSum(gap, books[st[len(st)-1]])
            st=st[:len(st)-1]
        }
        gap:=i-st[len(st)-1]
        carry+=seqSum(gap, books[i])
        st=append(st, i)
        ans=max(ans, carry)
    }
    return  int64(ans)
}

func seqSum(n,an int) int{
    n=min(n,an)
    a1:=an-n+1
    return (n*(a1+an))/2
}
```