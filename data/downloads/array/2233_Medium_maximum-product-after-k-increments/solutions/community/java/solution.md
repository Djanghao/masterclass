# [JAVA] , [C++] | MinHeap | Greedy

**Author:** IAmCoderrr
**Votes:** 29
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/1931098/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/1931098/)

---

Key Points
we tried to add k to numbers in such a way that the possible differnce between them is minimum
But why so ?
because suppose we have 2 numbers 1 , 1 and k=7
then we can do
1. a=1+1, b=1+6     (2*7)=14
1. a=1+2, b=1+5    (3*6)=18
1. a=1+3, b=1+4     (4*5)=20
so by minimising the diff we get the maximum possible product.

Proof
Lets consider 3 integers x, y, z. Where x<y<z. Now we need to add 1 to any of these integers and find which integers increment will lead to maximum product.
```
x incremented	y incremented	z incremented
(x+1)*y*z	x*(y+1)*z	x*y*(z+1)
xyz + yz	xyz + xz	xyz + xy
```


xyz is common in all of the three cases and yz(additional factor) will lead to maximum product. Incrementing least number in the array will always have additional factor which will consists of products of all integers except the smallest one. If we increment any-other number the smallest number will be included in the additional factor and the incremented number is excluded. Thus the prior case always leads to maximum product

So how we achieve this by writng code ??
we have to extract minimum say **num1** and 2nd minimum say **num2** for that i am using priority queue
once we extract i have to add  **Math.min(k,(num2-num1)+1)** in our minimum and **subtract same from the k**
do the till the value of k is not become 0

Now question may be arises why Math.min(k,(num2-num1)+1) ?
ANS-> because we have to add the diff between the min and 2 min, instead of adding 1 every time,
It will reduce time complexity.

Suppose we have arr=[1,10^5], k=10^5
in this case The TC of my code will be O(1)
but if we add 1 every time Then The TC will become 10^5;

**Please Upvote The solution**

**C++ Soltuion**
	
	```
	int maximumProduct(vector<int>& nums, int k) {
        priority_queue<int, vector<int>, greater<int>> pq;
        long long ans=1, MOD = 1e9+7;
        if(nums.size()==1){
            ans=(k+nums[0])%MOD;
            return ans;
        }
        for(auto ele:nums) pq.push(ele);
        while(k) {
            int x = pq.top(); pq.pop();
            int y=pq.top(); pq.pop();
            int diff=min(k,y-x+1);
            x+=diff;
            k-=diff;
            pq.push(x);
            pq.push(y);
        }
        while(!pq.empty()) {
            int x = pq.top(); pq.pop();
            ans = (ans*x)%MOD;
        }
        return ans;
    }
	```
	
**Java Solution**
```
public int maximumProduct(int[] nums, int k) {
        int n=nums.length;
        long mod=1000000007;
        if(n==1){
            long ans=(nums[0]+k)%mod;
            return (int)ans;
        }
        PriorityQueue<Long> pq=new PriorityQueue<>();
        for(int a:nums){
            pq.add((long)a);
        }
        while(k>0){
            long num1=pq.remove();
            long num2=pq.remove();
            long diff=Math.min(k,(num2-num1)+1);
            num1+=diff;
            k-=diff;
            pq.add(num1);
            pq.add(num2);
        }
        long ans=1;
        while(!pq.isEmpty()){
            ans=(ans*pq.remove())%mod;
        }
        return (int)ans;
    }
```