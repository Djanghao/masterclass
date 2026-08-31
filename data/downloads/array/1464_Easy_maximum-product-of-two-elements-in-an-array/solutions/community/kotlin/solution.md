# Kotlin Simple | 3 Methods Explained |  Beats 97%

**Author:** Mahoraga_JJK
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4393053/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4393053/)

---

# Efficient Way
Lets use 2 variables to store maximum and 2nd maximum elements and in last return their product

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$Constant$$
# Code
```
class Solution {
    fun maxProduct(nums: IntArray): Int {
        var max1=0
        var max2=0
        for(item in nums){
          if(item>max1)
            max1=item
          if(max1>max2){
              val temp=max2
              max2=max1
              max1=temp
          }
        }
        return (max1-1)*(max2-1)
    }
}

```
# Interview Way
In an interview you could be asked a follow up question as what if I want to calculate 3 such elements products instead of 2 or k such elements. We can't always increase the number of variables and if conditions in such case. So lets use a Priority Queue to keep track of k largest elements 

# Complexity
- Time complexity:
$$O(nlogk)$$

- Space complexity:
$$O(k)$$

# Code
```
class Solution {
    fun maxProduct(nums: IntArray): Int {
        val k = 2
        val pq =  PriorityQueue<Int> { a,b -> a-b}
        for(item in nums){
            if (pq.size<k)
                pq.offer(item)
            else{
                if (item>pq.peek()){
                    pq.poll()
                    pq.offer(item)
                }
            }
        }
        var prod = 1
        while(!pq.isEmpty())
            prod=prod*(pq.poll()-1)
        return prod
    }
}
```
# Sorting 
Sort the array to have maximum two elements in the last of the array
- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$Constant$$

# Code
```
class Solution {
    fun maxProduct(nums: IntArray): Int {
        nums.sort() 
        return (nums[nums.size-1]-1)*(nums[nums.size-2]-1)
    }
}
```


