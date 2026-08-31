# O(n) solution with monotonous stack || Full explaination

**Author:** guptasim8
**Votes:** 340
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1626628/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1626628/)

---

## Approach 1: Simple O(n2) solution
```
class Solution {
public:
    long long subArrayRanges(vector<int>& nums) {
        int n=nums.size();
        long long res=0;
        for(int i=0;i<n-1;i++){
            int maxi=nums[i], mini=nums[i];
            for(int j=i+1;j<n;j++){
                if(nums[j]>maxi)maxi=nums[j];
                else if(nums[j]<mini)mini=nums[j];
                res+=maxi-mini;
            }
        }
        return res;
    }
};
```
## Approach 2: O(n) solution
**What is monotonous increase stack?**
Roughly speaking, the elements in the an monotonous increase stack keeps an increasing order.

**What can monotonous increase stack do?**
**(1) find the previous less element of each element in a vector with O(n) time**:
What is the previous less element of an element?
For example:
[3, 7, 8, 4]
The previous less element of 7 is 3.
The previous less element of 8 is 7.
The previous less element of 4 is 3.
There is no previous less element for 3.
Instead of directly pushing the element itself, for simplicity, we can push the index.

**(2) find the next less element of each element in a vector with O(n) time:**
What is the next less element of an element?
For example:
[3, 7, 8, 4]
The next less element of 8 is 4.
The next less element of 7 is 4.
There is no next less element for 3 and 4.

**How can the monotonous increase stack be applied to this problem?**
For example: Consider the **element 3** in the following vector:

                            [2, 9, 7, 8, 3, 4, 6, 1]
			            (i=0)|      (j=4)|   (k=7)|
						      m=4-0=4     n=7-4=3
	             the previous less             the next less 
	                element of 3                element of 3

After finding both NLE and PLE of 3, we can determine the
distance between 3 and 2(previous less)= (j-i) = 4 =m, and 
the distance between 3 and 1(next less)= (k-j) = 3=n.
In this example, the distance is 4 and 3 respectively.
**How many subarrays with 3 being its minimum value?**
No. of subarrays with 3 being its minimum value= m * n = (j-i) * (k-j) =4 * 3=12
Here, these are-
* 9 7 8 3 
* 9 7 8 3 4 
* 9 7 8 3 4 6 
* 7 8 3 
* 7 8 3 4 
* 7 8 3 4 6 
* 8 3 
* 8 3 4 
* 8 3 4 6 
* 3 
* 3 4 
* 3 4 6

**Proof of multiplication give us the number of sub-arrays**
The max array length with 3 as min element has m + n - 1 elements
 [m={9, 7, 8, 3}, n={3, 4, 6}] => {9, 7, 8, 3, 4, 6 } = A (with m + n - 1 elements)

```
The number of subarray we have for the array A with length m + n - 1 is 
=1 + 2 + 3 + 4 + ... + m + n - 1 = Summation(1 +...+ (m + n - 1)),
=(m + n - 1) (m + n) / 2
```
Since 3 should be the minimum number,  we need to subtract number of subarrays which do not contain 3, which are subarrays of [9,7,8] with length (m - 1) and [4,6] with length (n - 1), 
```
number of subarrays for 
[9,7,8] is S1 = (m - 1 + 1)(m - 1) / 2 = m(m - 1) / 2 
[4,6] is S2 = n(n - 1) / 2
```

Finally, we have

```
S3 - S2 - S1 = (m + n - 1)(m + n)/2 - m(m - 1)/2 - n(n - 1)/2 
                       = (n^2 + mn - n + mn + m^2 - m - n^2 + n - m^2 + m) / 2
                       = (2 * m * n) / 2
                       = m * n 
```
, which is left distance multiply right distance.
**How much the element 3 contributes to the sum of the minimum element of all subarrays?**
It is 3*(4*3)

In general each index i in the array contributes in the sum of the minimum element of all subarrays-
`(A[i] * left[i] * right[i]) `
where -
  left[i] =the distance between element A[i] and its PLE.
  right[i] =the distance between element A[i] and its NLE.

For better understanding of monotonous stak you may refer-
https://leetcode.com/problems/sum-of-subarray-minimums/discuss/178876/stack-solution-with-very-detailed-explanation-step-by-step

 With the same method, we can also find the sum of the maximum element of all subarrays.

The solution for this problem can be formulated as sum(max(b)) - sum(min(b)), where b ranges over every (contiguous) subarray of n.

Final Solution-
```
long long subArrayRanges(vector<int>& n) {
    return sumSubarrayComp(n, less<int>()) - sumSubarrayComp(n, greater<int>());
}    
long long sumSubarrayComp(vector<int>& n, function<bool (int, int)> comp) {
    long long res = 0;
    vector<int> s;
    for (int i = 0; i <= n.size(); ++i) {
        while (!s.empty() && (i == n.size() || comp(n[s.back()], n[i]))) {
            int j = s.back(), k = s.size() < 2 ? -1 : s[s.size() - 2]; 
            res += (long long)(i - j) * (j - k) * n[j];
            s.pop_back();
        }
        s.push_back(i);
    }    
    return res;
}
```
or

```
class Solution {
public:
    
    long long subArrayRanges(vector<int>& nums) {
        int n=nums.size();
        long long sum=0;
        stack<int>st;
        vector<int> minPrev(n,-1),minNext(n,n),maxPrev(n,-1),maxNext(n,n);
        
        for(int i=0;i<n;i++)
        {
            while(!st.empty()&&nums[st.top()]>=nums[i]){st.pop();}
            if(!st.empty()){minPrev[i]=st.top();}
            st.push(i);
        }
        while(!st.empty()){st.pop();}
        for(int i=n-1;i>=0;i--)
        {
            while(!st.empty()&&nums[st.top()]>nums[i]){st.pop();}
            if(!st.empty()){minNext[i]=st.top();}
            st.push(i);
        }
        
         for(int i=0;i<n;i++)
         {
            while(!st.empty()&&nums[st.top()]<=nums[i]){st.pop();}
            if(!st.empty()){maxPrev[i]=st.top();}
            st.push(i);
         }
         while(!st.empty()){st.pop();}
         for(int i=n-1;i>=0;i--)
         {
            while(!st.empty()&&nums[st.top()]<nums[i]){st.pop();}
            if(!st.empty()){maxNext[i]=st.top();}
            st.push(i);
         }
        
        for(int i=0;i<n;i++)
        {
            long long leftMin=i-minPrev[i],rightMin=minNext[i]-i;
            long long leftMax=i-maxPrev[i],rightMax=maxNext[i]-i;
            sum+=(leftMax*rightMax-leftMin*rightMin)*nums[i];
            
        }
        return sum;
    }
};
```