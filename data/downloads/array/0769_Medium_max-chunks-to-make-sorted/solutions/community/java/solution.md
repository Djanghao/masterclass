# Java || O(n) || Easy Approach with Explanation || 0ms

**Author:** swapnilGhosh
**Votes:** 17
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/1300349/](https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/1300349/)

---

```
class Solution
{
    public int maxChunksToSorted(int[] arr) 
    {//index corresponds to the sorting order
        int max=0,count=0;
        
        for(int i=0;i<arr.length;i++)//traversing 
        {
            max=Math.max(arr[i],max);//calculating the maximum for every element 
            
            if(i==max)//partition upper limit found(unsorted region lies in this region)
                count+=1;//increasing the partiton count that has to be sorted, to get an ascending sorted array
        }
        
        return count;//returing the maximum numer of partision required 
    }
}//Please do vote me, It helps a lot
```