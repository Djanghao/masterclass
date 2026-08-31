# Swap from max value of lists from nums[0]to nums[n-2]

**Author:** TianziGUGU
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278895/](https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278895/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun minOperations(nums1: IntArray, nums2: IntArray): Int {
 
        var partNums1=nums1.copyOf(nums1.size-1)
        var partNums2=nums2.copyOf(nums2.size-1)
        var n=nums1.size
        var max1 = nums1[n-1]
        var max2 = nums2[n-1]
        var op=0
        if(n==1){
            return 0
        }
        if(max1>=partNums1.max() && max2>=partNums2.max()){
            return 0
        }
        if(max1>=partNums2.max() && max2>=partNums1.max()){
            return 1
        }
        var m=n-2
        if(nums1[n-1]>=max(partNums1.max(),partNums2.max()) || 
                nums2[n-1]>=max(partNums1.max(),partNums2.max())){
            var num1 = numOfOperations(partNums1,partNums2,max1,max2,m)
            var num2 = numOfOperations(partNums1,partNums2,max2,max1,m)
            if(num1 ==-1 && num2 ==-1)
                return -1
            else if (num2==-1) 
                return num1
            else if(num1==-1){
                num2 = num2+1
                return num2
             }
            else{
                num2 = num2+1
                return min(num1,num2)
            }
           
        }else
            return -1
    }

    fun numOfOperations(nums1: IntArray, nums2: IntArray,max1:Int,max2:Int,count:Int): Int{
        var op=0
        var m = count
        var partNums1 = nums1.copyOf()
        var partNums2 = nums2.copyOf()

        while(m>=0){
                println("m=" + m)
                var maxvalIndex1 =partNums1.indexOf(partNums1.max())

                if(partNums1.max()>max1 && partNums2[maxvalIndex1] <=max1){
                    // var tmp1=partNums1[maxvalIndex1]
                    // partNums1[maxvalIndex1]=partNums2[maxvalIndex1]
                    // partNums2[maxvalIndex1]=tmp1

                    partNums1[maxvalIndex1] = partNums2[maxvalIndex1].also{
                         partNums2[maxvalIndex1] = partNums1[maxvalIndex1] }
                    op++
                }else {
                    var maxvalIndex2 =partNums2.indexOf(partNums2.max())

                    // println("maxvalIndex2 = ${maxvalIndex2}")
                    // println("maxvalIndex2 = ${maxvalIndex2}")
                    if(partNums2.max()>max2 && partNums1[maxvalIndex2] <=max2){
                        // var tmp2=partNums2[maxvalIndex2]
                        // partNums2[maxvalIndex2]=partNums1[maxvalIndex2]
                        // partNums2[maxvalIndex2]=tmp2
                    partNums1[maxvalIndex2] = partNums2[maxvalIndex2].also { 
                        partNums2[maxvalIndex2] = partNums1[maxvalIndex2] }
                    // println("num of maxvalIndex2= ${partNums1[maxvalIndex2]}")
                    // println(partNums1.contentToString())
                    // println(partNums2.contentToString())
                       op++
                    }
                }
                 m-- 
            }
            if (max1>=partNums1.max() && max2 >= partNums2.max() )
            return op
            else 
            return -1
    }
}
```