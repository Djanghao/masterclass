# MULTIPLE APPROACHES. C++ . FAST SOLUTION

**Author:** Krypto2_0
**Votes:** 49
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/1751131/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/1751131/)

---

There are multiple approaches to solve this question. The question is pretty simple , so I won't explain what to do , I will just discuss the multiple variations. 

#### TC : O(N^2) APPROACH , SC : O(1)
In this approach we have to sort the elements on odd positions and even positions separately . We can do this by simply applying any sorting algorithm ( selection / bubble ) preferably , on  the elements of the mentioned positions (in-place) . We won't need any extra space . 

Here is the code : 

```
int minIndex;
// Here in this nested loop , we are sorting the elements at even indices in non-decreasing order.
        for(int i=0;i<nums.size();i+=2)
        {
            minIndex=i;
            for(int j=i+2;j<nums.size();j+=2)
            {
                if(nums[j]<nums[minIndex])
                    minIndex=j;
            }
            swap(nums[i],nums[minIndex]);
        }
// Here , we are trying to sort the elements at odd indices in non-increasing order. 
        for(int i=1;i<nums.size();i+=2)
        {
            minIndex=i;
            for(int j=i+2;j<nums.size();j+=2)
            {
                if(nums[j]>nums[minIndex])
                    minIndex=j;
            }
            swap(nums[i],nums[minIndex]);
        }
        
        return nums;
```
As you can see we don't need any extra space for this solution. 

#### TC : O(NlogN) , SC : O(N)  APPROACH

As we know that we have to **sort even indices and odd indices separately** , then why not simply **separate out the elements** , then **sort them separately** using the inbuilt sort function and then **place the elements of the odd indices vector at the odd indices and even indices vector at the even indices** ??


Here is the code : 

``` 
class Solution {
public:
    vector<int> sortEvenOdd(vector<int>& nums) {
        vector<int> odd, even;
        for(int i = 0; i < nums.size(); i++) {
            if(i & 1) {
                odd.push_back(nums[i]);
            } else {
                even.push_back(nums[i]);
            }
        }
        sort(odd.begin(), odd.end(), greater<int>());
        sort(even.begin(), even.end());
        for(int i = 0; i < nums.size(); i++) {
            if(i & 1) {
                nums[i] = odd[0];
                odd.erase(odd.begin());
            } else {
                nums[i] = even[0];
                even.erase(even.begin());
            }
        }
        return nums;
    }
};
```

A simple variation of the above approach : 
Instead of using 2 separate vectors (one for odd indices and the other for even indices ) , we can simply use 1 vector. Use it to store even/odd indices , sort it , place them in their respective locations in the resultant vector . Clear the vector , then store the other indices and do the same as mentioned above.   

IF YOU ARE READING THIS , THEN YOU PROBABLY READ THE COMPLETE POST AND FOUND IT HELPFUL . AND IF THAT'S THE CASE , THEN DO UPVOTE .