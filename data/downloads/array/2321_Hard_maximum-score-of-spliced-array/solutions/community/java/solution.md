# 100% faster| Most Detailed solution for complete dummies| O(n) Kadane's single loop

**Author:** sarthak17jain
**Votes:** 49
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2199139/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2199139/)

---

1st thing we have to do is to obviously find the sum of both the arrays.
Let them be sum1, sum2.
Now either of them will be greater than the other.
To write a cleaner code and avoid confusion. We will make sum1 > sum2 if it isn't by swapping (sum1,sum2) and (nums1[], nums2[])

Now we have sum1>=sum2

##### Observation:
```
sum(nums1')  = sum(nums1) + { sum(nums2[l...r]) - sum(nums1[l...r]) }
sum(nums2')  = sum(nums2) - { sum(nums2[l...r]) - sum(nums1[l...r]) }
```

So basically:
1. to make sum1 larger we maximize ```{ sum(nums2[l...r]) - sum(nums1[l...r]) }```
2. to make sum2 larger we minimize ```{ sum(nums2[l...r]) - sum(nums1[l...r]) }```<br>(NOTE: a very important point to consider since there may exist a negative sum array sum which upon subtraction from sum2 makes sum2 > sum1)

#### Implementation:
We account for both of the above possibilities and return the maximum of the two.
So we can easily find the maximum/minimum subarray sum difference ie. ```{ sum(nums2[l...r]) - sum(nums1[l...r]) }```
using Kadane's algorithm in O(n) time

#### Kadane's algo logic(feel free to skip): 

The basic logic of Kadane's algorithm is that we maintain a variable (maxEndingHere/minEndingHere) denoting the maximum sum of any subarray ending at the current index(ie element at current index has to be included)

At each index we have 2 options: 
1. include the curent element in, the subarray ending at the previous index
2. exlude the previous subarray and start a new subarray containing only the current element

This decision depends on our objective:
1. If objective is to minimize: <br> 
```
///including the previous subarray is better than considering only the current element
///therefore include it
if(minEndingHere+currEle<=currEle){
	minEndingHere = minEndingHere+currEle;
}else{//>=currEle , including the previous subarray is worse than considering only the current element
//therefore dont include it
	minEndingHere = curEle
}
```
Now that you have understood the logic
Another/Shorter way to write the code is:
```
minEndingHere += currEle
if(minEndingHere > currEle){
	minEndingHere = curEle
}
```

#### CODE for the problem given: 
```
class Solution {
    public int maximumsSplicedArray(int[] nums1, int[] nums2) {
        int sum1=0, sum2=0, n=nums1.length;
        for(int num:nums1) sum1+=num;
        for(int num:nums2) sum2+=num;
        
        if(sum2>sum1){
            int temp = sum2;
            sum2 = sum1;
            sum1 = temp;
            int[] temparr = nums2;
            nums2 = nums1;
            nums1 = temparr;
        }
        
        //now sum1>=sum2
        
        //maxEndingHere denotes the maximum sum subarray ending at current index(ie. element at current index has to be included)
        //minEndingHere denotes the minimum sum subarray ending at current index
        int maxEndingHere, minEndingHere, maxSoFar, minSoFar, currEle;
        maxEndingHere=minEndingHere=maxSoFar=minSoFar=nums2[0]-nums1[0];
        
        for(int i=1;i<n;i++){
            currEle = nums2[i]-nums1[i];
            minEndingHere += currEle;
            maxEndingHere += currEle;
            
            if(maxEndingHere < currEle){
                maxEndingHere = currEle;
            }
            if(minEndingHere > currEle){
                minEndingHere = currEle;
            }
            
            maxSoFar = Math.max(maxEndingHere, maxSoFar);
            minSoFar = Math.min(minEndingHere, minSoFar);
        }
        
        //return the maximum of the 2 possibilities dicussed
        //also keep care that maxSoFar>=0 and maxSoFar<=0
        return Math.max(sum1+Math.max(maxSoFar,0), sum2-Math.min(0, minSoFar));
    }
}

```


