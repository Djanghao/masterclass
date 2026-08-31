# Min-Heap || Greedy || How & why - Explanation with example || c++

**Author:** Navi_here
**Votes:** 1
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5687613/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5687613/)

---

This problem similar to problem in previous contest of [codechef](https://www.codechef.com/problems/JUSTTWO) 
**Prerequisite:-** Modular Exponentiation (Power in Modular Arithmetic), Priority Queue(min heap)/multiset.

**Natural Strategy:-** First idea comes to mind is to **put all the elements of array in min heap** and **repeatedly multiply the smallest** element(top element of min heap) by `multiplier` till `k` times. 
This is greedy idea and yes it is correct and we have to use it. But here number of operations `k` can be very large, so a direct approach will be too slow and the numbers will quickly get too big to handle.

Instead of this what we will do is to apply operation only till our **(smallest element * multiplier)** in heap is **less than maximum element of our array**.
i.e., `multiplier * pq.top() <= max(of array)`
**why?:-** We want to find the point where any operation will make array repeat itself.
consider this example:- `nums = [2,1,3,5,6], k = 10, multiplier = 2`
put them in queue. and try to simluate.
`pq: 1 2 3 5 6` `k= 10 and multipler = 2 , mx = 6(maximum of array) `
```
operation 1 -  pick top element => 1*2 = (2 <= 6) , valid  k = 9 , pq = 2 2 3 5 6
operation 2 -  pick top element => 2*2 = (4 <= 6) , valid  k = 8 , pq = 2 3 4 5 6
operation 3 -  pick top element => 2*2 = (4 <= 6) , valid  k = 7,  pq = 3 4 4 5 6 
operation 4 -  pick top element => 3*2 = (6 <= 6) , valid  k = 6 , pq = 4 4 5 6 6
operation 5 -  pick top element => 4*2 = (8 <= 6) , Invalid  Stop here
```
Now, if we look carefully our elements are in **sorted** order as well as **near to each other**.
Our elements are ` 4 4 5 6 6`.
At this stage, whenever we multiply the smallest element, it\u2019ll become larger than everything else.
That means:
* 4 get muliplied, & becomes larger than everything else. another 4 is now the smallest. which is `4 5 6 6 8`
* Another 4 get muliplied and becomes larger than everything else. 5 is now the smallest. which is `5 6 6 8 8`
* similarly, till last element (6) get muliplied, and becomes larger than everything else. which is `8 8 10 12 12`

In other words, Let say final array after heap operation  is a1, a2, a3, ....., an;
Then if we apply operation` n` times , it will simply become , `multiplier*a1, multiplier*a2,......multiplier*an`
like in above example after heap our elements are  ` 4 4 5 6 6` , if we apply operation `5` times, `2*4, 2*4, 2*5, 2*6, 2*6` = `8 8 10 12 12`

Since everything was get multiplied exactly once, the process simply repeats itself again & again.

By this pattern we can optimize the operations: each element will now receive `k / n ` operations(as the cycle repeat), and then first `k%n ` smallest elements will receive one extra operation.
* Each operation is  multiplication by `multiplier`, so the final value of element will be **elt * power(Multipler, total operations).**

using above example , after heap we got  `k= 6, and n=5  pq = 4 4 5 6 6`
so each element will receive k/n => 6/5  => **1 operation**. after that k will be , 6%5=1,  one extra operation will be received by first smallest element. right here this 4. If remaining k would have been 3 then one extra operation would have been received by first 3 smallest elements  `4 4 5`
In another terms, here
a1: 4 => 1+1 operations ( 2 operations) => 4 * (multiplier * multiplier) . multiplier multiplied by 2 times => 4 * power(multiplier,2) = `4* 2*2 = 16`
a2: 4 =>1 operation => 4 * (multiplier ) multiplied by 1 times => 4 * power(multiplier,1) = `4* 2* 1= 8` and so on...

As pow(Multipler, total operations)  can be vey large so this will be calculated using  Modular Exponentiation (Power in Modular Arithmetic)
**Note**: to keep track of original element also store the index of element in heap

`Time Complexity:- ~O(NlogN)`
Here is the C++ code:- 
```
class Solution {
typedef long long ll;
typedef pair<ll,ll> ppi;
const int mod = 1e9+7;
private:
//function to find the power(x,y)%mod
    ll power(long long x, ll y, int p) {
        ll res = 1; 
        x = x % p; 
        if (x == 0)
            return 0;
        while (y > 0){
            if (y & 1)
            res = (res * x) % p;
            y = y >> 1; // y = y/2
            x = (x * x) % p;
        }
        return res;
    }
public:
    vector<int> getFinalState(vector<int>& nums, int k, int multiplier) {
        priority_queue<ppi,vector<ppi>,greater<ppi>> pq;
        ll mx = 0;
        int n = nums.size();
		// if multipler is 1 we can return same array. as all elements will be same
        if(multiplier==1)
            return nums;
        for(int i=0;i<nums.size();i++){
            if(mx<nums[i]){
                mx=nums[i];
            }
            pq.push({nums[i],i});
        }
        while (k > 0 && (multiplier * pq.top().first <= mx))
        {
            auto x = pq.top();
            ll elt = x.first;
            ll index = x.second;
            pq.pop();
            pq.push({elt * multiplier,index});
            k--;
        }
		// after the heap operation, we will find how many times operation will get repeated
        int round = k / n;
		//extra variable will tell how many  smaller element will recieve one more operation
		int extra = k % n;
		
		//ex:- let k = 13 after heap operations and number of elements are 5. 
		//each element will get multiplied 13/5 = 2 times for sure.
		//and k%n = 13%5 = 3. one more operation will be recived by first 3 smallest elements. 
		//so first 3 smaller elements will receive total 3 operation and remaining will get 2 operation
        
        vector<int> ans(n,0);
        while (pq.size() != 0)
        {
            auto x = pq.top();
            ll elt = x.first;
            pq.pop();
            elt = (elt * power(multiplier, round + (extra > 0), mod)) % mod;
			// we have already stored the original index in heap. to keep track of them
            ans[x.second]=elt;
            extra--;
        }
        return ans;
    }
};
```



