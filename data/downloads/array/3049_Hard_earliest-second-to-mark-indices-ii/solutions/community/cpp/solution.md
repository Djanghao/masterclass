# ✅ C++ | Binary Search + Priority Queue | O(m.log(m)) ✅

**Author:** Navdeep1609
**Votes:** 14
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4785019/](https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4785019/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
***BINARY SEARCH?***
As we can find the answer in any portion uptil x in [1,..,x,..,m], and we need not check x+1 to m even in case we get solution in earlier part itself, so consider using binary search. 
Now, problem reduces to solving "if possible to solve in the chosen portion" and at the end we would automatically get optimal i.e (minimum x)
due to binary search. Here, x = ans = mid+1

***PRIORITY QUEUE?***
We can think of solving the question by trying to make all the nums[i] as 0 (if not already 0) and then marking it.
Note: (i is in range [1,n])

It would need 2 seconds for each index, 
-> one second to convert nums[i] to 0
-> one second second to mark i 

But it won't be possible to mark it 0 always, what if we have no second left after making it 0 to mark that index?
So, try to making only as many largest ones as possible 0 and try using decrement operation for remaining ones.
Why use decrement for the smaller ones? 
Consider nums=[100,90,1,2] we would want the larger ones like 100, 90 to be marked as 0 as if we use decrement for them it would cost 101+91 seconds to decrement and mark. So try to mark as many larger ones as possible as 0 and use decrement for the smaller ones.
For smaller ones if we previously encountered extraOprs we can use those instead.

# Approach
<!-- Describe your approach to solving the problem. -->
> Note:  Priority Queue Stores the indices for which we considered using Make nums[i]=0 operation and mark it in later second.

Use binary search,
If possible, currAns = mid +1; //Can have a shorter mid though
If not update start accordingly,

We need minimum mid, which binary search would handle, let's see if possible function,

1)Storing the Indices corresponding to their first occurrence in changeIndices why first ? if we store last one than we would not have any more second left to mark it just in case it's the last element
Ex: nums=[100,90,1,2] CI=[1,1,2,3,4,2,2,4] if we take last occurrence of 4 we can make nums[4] 0 at that second, but can't mark it 0 as no seconds left,
But if we take it's first occurrence can mark it later on.

2) Storing the max possible ans in worst case i.e sum(nums)+n

3) Iterate backwards, if not at first index of any i [1,n] or value i.e nums[i]=0, so can consider doing nothing and in case later need to do something we can update extraOpr++

4) Otherwise, push the current val in queue.

5) Now, I can have operations left or not, if extra oprs left, extraOprs-- as we just added something to queue which would use one opr to mark it later.

6) If no oprs left, means we need to remove the least element from queue (as that has the best possibility to be solved in minimum seconds using decrement operations). And extraOprs++ as I removed something so no need to mark it later.

7) Calculate teh summ of all the values in queue.

8)Now, total  = Worst case oprs/seconds required
       pq_sum = oprs/seconds used for making 0 and also marking
       req    = oprs/seconds required for decrementing to 0 and marking

9)If required oprs are less than extraOprs we have so possible to solve.

10)If possible to solve return mid+1 else return -1.

Thanks for reading! 
If there is any mistake in my understanding do let me know, if this helped please do upvote!\uD83D\uDE00



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> $$O(m.log(m))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> $$O(m+n)$$
O(n) for storing first index vector
O(m) for priority queue

# Code
```
class Solution {
public:

    bool isPossible(vector<int>& nums, vector<int>& changeIndices,int mid,int n){
        //Storing the Indices corresponding to their first occurrence in changeIndices
        vector<int> firstIndex(n,-1);
        for(int i=0;i<=mid;i++){
            if(firstIndex[changeIndices[i]-1]==-1)
                firstIndex[changeIndices[i]-1]=i;
        }

        //Storing the max possible ans in worst case i.e sum(nums)+n;
        long long totalOpr=0; //Total Operations
        for(long long val:nums) totalOpr+=val+1; //+1 as for nums=[2,1] we need 3+2 opr's
        // one opr to mark and nums[i] oprs to reduce it to 0 by subtraction

        long long extraOpr=0;//Extra denotes the times we didn't to anything but could have

        //Storing priority queue (min heap) as we should only consider 
        //using opr 3 (in ques) for the largest/worst elements 
        //Ex: nums=[100,90,1,2,0,3], here we should use 3rd operation i.e making 0 only if
        //    its possible(i.e we have some time s later where we can mark it as well) 
        //    and for larger elements like prefer using it for 100 and 90 instead of lower
        //    If not possible we can try using extraOpr we have and decrease those
        priority_queue<int, vector<int>, greater<int> >pq;
        //why min heap so we can remove the ones with lower priority first in case we have
        //no operations

        for(int s=mid;s>=0;s--){//Iterating from back
            int currIdx=changeIndices[s]-1;
            int val=nums[currIdx];
            // If I am not at first index or val==0 I can consider doing nothing 
            if(firstIndex[currIdx]!=s or val==0){
                extraOpr++;//As did nothing, so can come back to use this opr so 1 extraOpr
                continue;
            }

            pq.push(val); //pushed the current val if I am at first occurrence of curr idx
                          //in changeIndices and val is not 0 i.e can mark directly so 
                          //why consider putting it in queue
            
            if(extraOpr) extraOpr--; //If I have extraOpr reduce it, means considered 
                                     // using opr 3 i.e making it 0 as we 
                                     //have extra opr to mark it later on 
            else{
                extraOpr++;   //if can't mark it later on, try to reduce it by          
                              //decrement and mark it later on so revert extraOpr++
                pq.pop();     //And pop the minimum val from queue
            }
        }
        
        //Counting the sum of all the values in pq
        //i.e elements considered for opr3
        long long pqSum=0;
        while(!pq.empty()){
            long long it=pq.top();
            pq.pop();
            pqSum+=it+1;
        }
        //Now, total  = Worst case oprs/seconds required
        //     pq_sum = oprs/seconds used for making 0 and also marking
        //     req    = oprs/seconds required for decrementing to 0 and marking
        long long req=totalOpr-pqSum;
        //If required oprs are less than extraOprs we have so possible to solve
        return req<=extraOpr;
    }

    int earliestSecondToMarkIndices(vector<int>& nums, vector<int>& changeIndices) {
        int ans=-1,n=nums.size(),m=changeIndices.size();
        //Since we can find the answer in any portion of [1,m] so use binary search
        //Now, problem reduces to solving if possible in the chosen portion and 
        //if so what is the ans in that case
        int start=0,end=m-1;
        while(start<=end){
            int mid=(start+end)/2;
            if(isPossible(nums,changeIndices,mid,n)){
                end=mid-1;
                ans=mid; // If possible ans is mid (at end of binary search,
                         //                         we will have minimum mid)
            }
            else{
                start=mid+1;
            }
        }
        return ans==-1?-1:ans+1;
    }
};
```