# C++ solution using Kadane's Algo

**Author:** manishbishnoi897
**Votes:** 24
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/1106043/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/1106043/)

---

```
int kConcatenationMaxSum(vector<int>& arr, int k) {
	long long ans=0,curr=0,last;
	// Apply kadane's algo by traversing over the array two times to know the pattern
	// If at the end of second traversal, if sum (curr variable is storing the sum) is greater than what we get from 1st travresal then this means that (k-2) arrays when concatenated will always increase our sum
	// else our answer will be from first 2 arrays or traversal
	for(int i=1;i<=k && i<=2;i++){
		last=curr;  // storing sum of 1st traversal
		for(auto ele:arr){
			curr=curr+ele;
			if(curr<ele){
				curr=ele;
			}
			ans=(max(ans,curr))%1000000007;
			curr%=1000000007;
		}
	}
	// let the sums we got after 1st and 2nd traversal are 5 and 10 respectively.
	// Here, there is increase of 5 in sum(10-5=5). So when the remaining k-2 arrays are concatenated, the increase in sum will (k-2)*5
	if(curr-last>0 && k>1){
		ans=(ans+((curr-last)*(k-2))%1000000007)%1000000007;
	}
	return ans;
}
// Hit Upvote if you like... :)
```