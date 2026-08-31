# Scala one-liner | Functional way | Kadane's Algorithm | With Explanation

**Author:** GN-z11
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/1822821/](https://leetcode.com/problems/maximum-subarray/solutions/1822821/)

---

Intuition:

1) In Kadane's algorithm, for each num in nums, we find the maximum of previously computed accumulative sum plus nums(i) and nums(i). That is, acc_sum = max(acc_sum + nums(i), nums(i)) 
2) Observe that we are walking through all the elements one-by-one and are doing some operation between adjacent elements to compute a result, which will be used in the next iteration. This is exactly what reduce or fold operation is in a collection. 
3) The primary difference between reduce and fold is that reduce doesn't take seed value but fold does require one to begin with.
3) But, there is limitation to fold/reduce. They return a single value for a given collection. In this case though, we need the intermediate results of fold/reduce operations stored somewhere.
4) That is exactly was scan operation does. For a collection, it performs the given operation starting with seed value(just like fold) and uses the result of the operation for next comparison. Finally, it returns a collection.
5) We just find the maximum element in the result of scan operation, which is similar to doing max_sum = max(max_sum, acc_sum) in every iteration
Time Complexity: O(n), Space Complexity: O(n)
```
object Solution {
    def maxSubArray(nums: Array[Int]): Int = {
        nums.scan((-1)*math.abs(nums(0)))((a, b) => math.max(a+b, b)).reduce(_ max _)
    }
}
```

To elaborate the above code snippet,
```
object Solution {
    def maxSubArray(nums: Array[Int]): Int = {
        // set seed value for scan operation
        // seed's role here is to nullify any addition or subtraction
        // seed will always be negative so that max(seed, num(0)) will be nums(0)
        val seed = (-1) * math.abs(nums(0)) 

        // find the maximum of acc_sum+nums(i), nums(i) using scan operation
        // scan is similar to fold but it returns a Collection instead of an element
        // https://alvinalexander.com/scala/how-to-walk-scala-collections-reduceleft-foldright-cookbook/
        val maxAtEachNum = nums.scan(seed)((a, b) => {
            math.max(a+b, b)
        })
        
        // return the maximum element from the result
        // similar to max_sum = max(max_sum, acc_sum)
        // can also use maxAtEachNum.max
        maxAtEachNum.reduce(_ max _)
    }
}
```