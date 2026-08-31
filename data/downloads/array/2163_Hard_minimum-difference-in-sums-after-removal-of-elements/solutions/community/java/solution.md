# [Java] explanation with comments

**Author:** jusdoit
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/1747338/](https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/1747338/)

---

The goal is to compute:
Min (first 1/3 length - second 1/3 length) <= Min(first) -Max(second);
So we use two priority queue to track:

the **min** sum(size=1/3 length) of first m elements [0,...m];
the **max** sum(size=1/3 length) after m elements [m,...n-1];
m should be beweet 1/3 length and 2/3 length;

.
````
class Solution {
    public long minimumDifference(int[] nums) {
        int n=nums.length;  //length of nums
        int len3=n/3;       // 1/3 length
        long res=Long.MAX_VALUE; // final result;
        //Try to make first part as min as possible;
        //first[m] store the value, the min value of the size=len3, from[0,1,..., m];  
        long[] first=new long[n]; 
        //Try to make second part as max as possible;
        //second[m] store the value, the max value of the size=len3, from[m,...,n-1];  
        long[] second=new long[n];
        
//--------------------for first part compute -------------------------------------
        //Build max heap for first part;
        PriorityQueue<Integer> max=new PriorityQueue<Integer>(Comparator.reverseOrder());
        
        long sum=0;

        // Initialize with the first 1/3 n part.
        for(int i=0;i<len3;i++){
            sum+=nums[i];
            max.add(nums[i]);
        }
        //For the second part between 1/3 ~ 2/3. When we move to next index.
        //we keep the sum as total 1/3n size: each time poll the max one and add the new one;
        //And we keep tracking the exchange by long[] first;
        //
        for(int i=len3;i<=2*len3;i++){
            first[i]=sum;     //add sum from  1/3
            max.add(nums[i]); //put new one in queue;
            sum+=nums[i];     //sum + new one;
            sum-=max.poll();  //sum - max one;
        }
//--------------------for second part compute -----------------------
        sum=0;
        //Build min heap for first part;
        PriorityQueue<Integer> min=new PriorityQueue<Integer>();
        // Initialize with the last 1/3 n part.
        for(int i=0;i<len3;i++){
            sum+=nums[n-1-i];
            min.add(nums[n-1-i]);
        }
        //For the second part between 2/3~1/3 When we move to next index:
        // we keep update the sum with(+ new element, - min element), and update second;
        for(int i=len3;i<=2*len3;i++){
            second[n-i]=sum;
            min.add(nums[n-1-i]);
            sum+=nums[n-1-i];
            sum-=min.poll();
        }
//-----------------compute the final result------------

        //find the max value in second part [ i,..., n-1];
        //find the min value in first part [0,....,i];
        // find the result;
        for(int i=len3;i<=2*len3;i++){
            res=Math.min(res,first[i]-second[i]);
        }
        
        return res;
    }
}

````