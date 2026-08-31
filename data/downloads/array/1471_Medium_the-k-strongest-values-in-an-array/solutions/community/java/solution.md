# Java O(nlogn) solution:Sorting done once

**Author:** manasviiiii
**Votes:** 10
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/1190867/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/1190867/)

---

To do this question,we need to sort the array,after sorting we can find the median by using the formula given in question.
A value arr[i] is said to be stronger than a value arr[j] if |arr[i] - m| > |arr[j] - m| where m is the median of the array.
Since we need to find stronger values,we can see from the above expression that a value is strong if its distance from median is greater.For eg:the distance of median from itself is zero.
For example:
arr=[1,1,3,4,5], k = 2
The median here is 3, and our strongest 2 elements are going to be [1,5]. After sorting we can see that the elements at extreme ends have max distance from median.So we can simply check which of the elements at extreme end(start vs end) has a greater distance from median.
And to account for |arr[i] - m| == |arr[j] - m|, as given in question that arr[i] is said to be stronger than arr[j] if arr[i] > arr[j],so we can just simply consider the last element as the array is sorted and it will definitely be greater than starting element.

As the sorting takes O(nlogn)) time and the while loop will run for O(k),the total time complexity is O(nlogn)


```
class Solution {
    public int[] getStrongest(int[] arr, int k) {
        Arrays.sort(arr);  
        int median=arr[(arr.length-1)/2];
        int i=0;
        int j=arr.length-1;
        int res=0;
        int[] result=new int[k];
        while(res<k)
        {
		//while loop will stop after we hace chosen the k greatest elements.
            if(Math.abs(arr[i]-median)>Math.abs(arr[j]-median))
            {
                result[res]=arr[i];
                i++;
                res++;
            }
            else{
                result[res]=arr[j];
                j--;
                res++;
            }
        }
        return result;
        
    }
}
```
Hope this helps someone!