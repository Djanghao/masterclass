# [Python3] Prefix Sum + Binary Search (O(log(target)*log(N)*N), Accepted)

**Author:** xy-li
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/1931867/](https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/1931867/)

---

First, sort the `flowers` list in ascending order. If we want to make some gardens full, we should choose those with more planted flowers to "fulfill".

Assume that we want to get scores by making the largest `k` gardens full, while the rest `n-k` gardens have a max-min value of `flowers`. We need to sum up all missing values of the largest `k` flowers `sum[(max(0,target-flower) for flower in flowers[:-k]]`, which can be optimized by a "reversed" prefix sum array (for *prefix sum*, see [LC 303](https://leetcode.com/problems/range-sum-query-immutable/)) in a O(n) time. Here, I use `lack[k]` to accumulate the total flowers required to make the largest `k` `flower` full. (**Note**: In some corner cases, all gardens are already full before planting new flowers, as we can't remove any planted flowers. Thus, we should start `k` with the min one that lets `lack[i]`>0 to avoid handling some full gardens as *incomplete* ones.)

After fulfilling `k` gardens, the rest `n-k` gardens can be planted with **at most** `newFlowers-lack[k]` flowers. We're just curious about what is the max min value when adding `newFlowers-lack[k]` to `flowers[:n-k]`. This question satisfies the property of *binary-search* with a lower bound as `flowers[0]` (the origin min value) and an upper bound as `target` (**Note**: *In fact, after adding all  `newFlowers-lack[k]`, the min value of  `flowers[:n-k]` may >= `target`. However, we don't want to account for this case here because it will be considered later when we increase `k` to `n`, so the upper bound is limited to `target-1` inclusively*), so the score from the remaining `n-k` incomplete gardens can be obtained in `O(log(target)*cost(condition))`, in which `cost(condition)` denotes the time cost to check if the current min-value `flower` can be achieved by adding  `newFlowers-lack[k]` flowers.
 
Traditionally, finding the max-min value of an array after adding some numbers is a typical **load balancer problem**, which is similar to Q3 this week and the first challenge problem hosted by Amazon Last Mile Delivery last week. But the traditional linear way to calculate the max-min value is of time complexity in `O(n)` even with the auxiliary of the pre-sum array, which leads to a TLE in the contest. To reduce the runtime, we just need to check if a min `flower` can be achieved after adding `f` new flowers to the first `k` gardens *optimally*, here I use `fill(flower, f, k)` as a conditional checker to determine if it is feasible to all first `k` gardens are of >= `flower` flowers. Given the `fill` function, we can quickly apply the [binary search template](https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems) to finish the skeleton of getting the actual max-min of `flower[:k]`.

Now, let's look into `fill(flower, f, k)`: we check how many elements < `flower` there by binary-search as well,  we call it `m`. Then, we try to make up the total diff values between those elements and our required `flower`, so we just need to check if the sum of the first `m` elements >= `m*flower` after adding `m` to the left-hand of the inequity, which can be easily solved when we have already known the sum of first `m` elements by pre-sum array, so  `fill(flower, f, k)` is called in `O(log(n))`, which is the complexity of `cost(condition)` .

Finally, we traverse the `flowers` linearly to consider `k` garden full and `n-k` gardens incomplete, the total score is `k*full + flower*partial`, in which `flower` is the max-min value of the `n-k` incomplete gardens, which is calculated by the binary search method above in `O(log(target)*log(n))`, along with a space complexity `O(n)`. (`n` = `len(flowers)`)


```py
import bisect
class Solution:
    def maximumBeauty(self, flowers: List[int], newFlowers: int, target: int, full: int, partial: int) -> int:
        n = len(flowers)
        flowers.sort()
        pre,lack = [0],[0]
        
        # corner case in which no incomplete garden can be created. 
        if flowers[0] >= target:
            return n*full
        
        # pre-sum in an ascending order
        for i in flowers:
            pre.append(pre[-1]+i)
        
        # pre-sum in a descending order, meanwhile, count how many gardens are already full
        cnt = 0
        for i in flowers[::-1]:
            if i >= target:
                cnt+=1
            lack.append(lack[-1]+max(target-i,0))
        
        # conditional checker: whether all first k elements can >= flower after adding f to them
        def fill(flower,f,k):
            i = bisect.bisect_left(flowers,flower,lo=0,hi=k)
            return pre[i] + f >= i*flower
            
        res = 0
        # start from the min number of full gardens
        for k in range(cnt,n):
            if lack[k] < newFlowers:
                left, right = flowers[0], target+1
                while left < right:
                    mid = (left+right)//2
                    if not fill(mid,newFlowers-lack[k],n-k):
                        right = mid
                    else:
                        left = mid + 1
                left -= 1
                
                if left >= target:
                    # the n-k gardens must be incomplete, which can have a max value as target-1
                    
                    res = max(res,(target-1)*partial+k*full)
                else:
                    res = max(res,k*full+left*partial)
        
        # A corner case: All n gardens can be full, no incomplete gardens
        if lack[-1] <= newFlowers:
            res = max(res,n*full)
        return res
        
            
```
I know it looks ugly, but anyway, it is accepted.

**Update**: credit to [@ithachien](https://leetcode.com/ithachien/) (see the comment below), I realize that in the last corner case (all gardens can be fulfilled) we don't have to do binary search to find out the max-min value of the first `n-k` gardens. It must be able to reach the largest min value as `target-1` because the remaining flowers are always sufficient, so I added the "short-circuitting" case before the loop as:

```py
res = 0
if lack[-1] <= newFlowers:
    res = max(res,n*full)
    for k in range(cnt,n):
        res = max(res,(target-1)*partial+k*full)
    return res
```

Besides, the lower bound of the max-min value for the first `n-k` garden after planting the remaining flowers can be further increased to `(newFlowers-lack[k])//(n-k) + flowers[0]` as all flowers are evenly assigned to all `n-k` garden, which narrows down the search range.

Based on the minor optimization above, my code turned out to be of a runtime in 2432 ms, and beats 100% Python3 submissions so far.