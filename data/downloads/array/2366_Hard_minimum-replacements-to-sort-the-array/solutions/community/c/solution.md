# [C++,  Java] | Google Interview Question | O(N)

**Author:** IAmCoderrr
**Votes:** 197
**Link:** [https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/2388098/](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/2388098/)

---


Approach is simple just try to dry run after understanding the solution :)

Start traversing from the end of array 

if current no is divisible by the previous number and suppose 
current no is a, and prev no is b,
the we must need to divide current number(a) to a/b-1 times

suppose current number is 9 and previous number is 3,
then we can divide it into 9/3 times-1,
in this case prev remains same (No need to update)

now suppose if prev number is not divisible by current number,
suppose current is 7 prev is 5,
so we can divide 7 into
2 ,5
3, 4
out of this 3,4 is best choice , 

and for every element we have to add noOfTime to our ans,
i.e, no of times we need to divide a current element, 


 ***what is reason behind for finding prev by prev=nums[i]/noOfTime; how it find best fit***
suppose a number is 10 and we have to divide it into 3 times,
then our aim is to make minimum no from these three as maximum as possible,
but why ??
suppose array is 3 10 4
then our ans is , 2 
because we divide 10 into 3 pieces i.e, 3 3 4
but what if i divide it into 2 4 4, ? 
still the answer is 2 ???
No answers is 3 now, 

to select the minimum no out of these 3 partition number, 
we make prev=nums[i]/noOfTime;
means prev=10/3 , i.e, (3)



**Pls UPVOTE THE SOLUTION 
Happy coding :)**

**C++ SOLUTION**
```
long long minimumReplacement(vector<int>& nums) {
	int n=nums.size();
	long long ans=0, prev=nums[n-1];
	for(int i=n-2;i>=0;i--){
		int noOfTime=nums[i]/prev;   
		if((nums[i])%prev!=0){
			noOfTime++;
			prev=nums[i]/noOfTime;
		}   
		ans+=noOfTime-1;
	}
	return ans;
}
```

**JAVA  SOLUTION**
```
public long minimumReplacement(int[] nums) {
        int n=nums.length , prev=nums[n-1];;
        long ans=0;
        for(int i=n-2;i>=0;i--){
            int noOfTime=nums[i]/prev; 
            if((nums[i])%prev!=0){
			    noOfTime++;
                prev=nums[i]/noOfTime;
            }   
            ans+=noOfTime-1;
        }
        return ans;
    }	
```
	
**TIME COMPLEXITY : O(N)
SPACE COMPLEXITY : O(1)**