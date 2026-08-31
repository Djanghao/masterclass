# BinarySearch Counting Fully Explained Python

**Author:** sarthakBhandari
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/2760350/](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/2760350/)

---

there can be |nums1| * |nums2| products, so finding every product and then couting k smallest is too slow.

If you knew what k was, can you count number of products less than k?
If intgers were all positive heres how u would do it in O(n) time
Maintatin two pointers (i, j), one points to beggining of arr1 and other to the end of arr2.
```
If nums[i]*nums[j] <= k, count += (j + 1),
```
because all elements to the left of j also satisfy the inequality.
```
if nums[i]*nums[j] > k, j -= 1,
```
because all elements to the right of i will also not work with nums[j]

But elements can also be negative and in this case you just need to handle them separately.

Now that you have an efficient way of counting, u still dont know k.
**But you can guess k using binary search.**
```
if countOfProducts(guess) < k, guess is too small
if countOfProducts(guess) > k, guess is too large
```

**Time: O(n * log(maxProduct - minProduct))**
Space: O(n) if you separate negaitve and positive nummbers into different arrays. But you can do it O(1). 

```
def kthSmallestProduct(self, nums1, nums2, k):
    #elements can be negative, so max and min prod need to calculated properly
    L = min(nums1[0]*nums2[0], nums1[0]*nums2[-1], nums2[0]*nums1[-1])
    R = max(nums1[0]*nums2[0], nums1[-1]*nums2[-1], nums1[-1]*nums2[0], nums1[0]*nums2[-1])

    neg1 = [i for i in nums1 if i < 0]; nums1 = nums1[len(neg1): ]
    neg2 = [i for i in nums2 if i < 0]; nums2 = nums2[len(neg2): ]
    def getCount(k):
        #4 combinations to count
        #(neg, neg), (neg, pos), (pos, neg), (pos, pos)
        count = 0
        #(neg, neg)
        i = len(neg1) - 1; j = 0
        while i >= 0 and j < len(neg2):
            if neg1[i]*neg2[j] <= k:
                count += (len(neg2) - j)
                i -= 1
            else:
                j += 1
        
        #(neg, pos)
        i = 0; j = 0
        while i < len(neg1) and j < len(nums2):
            if neg1[i]*nums2[j] <= k:
                count += (len(nums2) - j)
                i += 1
            else:
                j += 1
        
        #(pos, neg)
        i = len(nums1) - 1; j = len(neg2) - 1
        while i >= 0 and j >= 0:
            if nums1[i]*neg2[j] <= k:
                count += (j + 1)
                i -= 1
            else:
                j -= 1
        
        #(pos, pos)
        i = 0; j = len(nums2) - 1
        while i < len(nums1) and j >= 0:
            if nums1[i]*nums2[j] <= k:
                count += (j + 1)
                i += 1
            else:
                j -= 1
        
        return count
    
    while L < R:
        M = (L+R)//2
        if getCount(M) < k:
            L = M+1
        else:
            R = M
    
    return L
```