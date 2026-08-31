# ✅ C++ | Easy Simulation | O(MaximumNumbers) Time | O(1) Space

**Author:** chandanagrawal23
**Votes:** 316
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1783191/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1783191/)

---

So it's clear from question that if **n** is odd answer is not possible (bcz we can't represent a odd number as a sum of even numbers)

Now if **n** is **even** , then we have to make the largest list of unique even number such that the sum is equal to given n.

Now to make the largest we have to take smallest numbers first like 2,4,6,8... and so on.

but wait what happen if we are doing in this manner and the total sum is greater than desired , no worries , we wll do this step untill our sum is less than or equal to given number , and just add the remaining difference to last number in the list.

Take n =14 
1) i = 2 , crSum = 0 , list = []    (crSum + 2 <= 14 , so push it) , crSum + i = 2 , list = [2]
2) i = 4 , crSum = 2 , list = [2]   (crSum + 4 <= 14 , so push it) , crSum + i = 6 , list = [2,4]
3) i = 6 , crSum = 6 , list = [2,4] (crSum + 6 <= 14 , so push it) , crSum + i = 12 , list = [2,4,6]
4) i = 8 , crSum = 12 , list = [2,4,6] (crSum + 8 > 14 , so **don't** push it , **break** the loop)

Now we have crSum = 12 , and we want 14 , so simply add difference (which is 14-12 = 2 ) in the last element of list

so list = [2,4,6+(14-12)] = [2,4,8]

```
class Solution {
public:
    vector<long long> maximumEvenSplit(long long n) {
        if(n%2) // odd
            return {};

		vector<long long> ans;
        long long i = 2;
        long long crSum=0;
		
        while((crSum+i)<= n)
        {
            ans.push_back(i);
            crSum+=i;
            i+=2;
        }
		
		// add remaining difference to the last value in answer list
		int sz = ans.size();
        ans[sz-1] += (n-crSum);
        return ans;
    }
};
```