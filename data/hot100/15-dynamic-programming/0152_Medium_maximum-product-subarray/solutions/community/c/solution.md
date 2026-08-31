# C++ | Discussion in detail | Easy to understand

**Author:** priyam_vd
**Votes:** 321
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/1608800/](https://leetcode.com/problems/maximum-product-subarray/solutions/1608800/)

---

There can be Mutliple ways to frame the solution once we get the intuition right !! So, what should the intuition be ? Let's discuss that out !

***Let's consider array to have no 0s*** (for the moment)...... 
So, on what factor does the answer depends now ?? It surely depends on the count of negative numbers in the array !!

**There are 2 possibilities** - *either the count of -ve numbers is even or odd*.... --->>>
1. If the count is **even**, then obviously we would want to include all of them(in fact the whole array) to maximise the product. As multiplying an even number of -ve numbers would make the result +ve.
2. If the count is **odd**, then we would want to exclude  one -ve number from our product, so that the product gets maximised. So, now the question is, which -ve number to exclude? Example ---> arr={-2,-3,-1,-4,-5} which number should be excluded ? On observing it , we should get one fact clear, that the number which is going to get ignored is either going to be the first one or the last one.

   *  Note that, we cannot exclude a -ve number that is not the first or the last, because, if we do so, we will need to exclude all(because you are breaking the product at this point) other -ve nums following that -ve number and then that needn't result in the maximum product.
   *  Having said all that, now the question is whether to exclude the first -ve num or the last -ve num in the array. We can only know the answer by trying both.
   *  So, firstly we will take the product from the beginning of the array and we will include the first -ve number and will leave out the last one !!
   *  And will do the vice-versa for checking the other scenario !!
   *  So , in that example we would leave the first -ve number... (-2 and then total_product will be product of rest of the numbers in array) or we would leave the last number...(-5) ... And maximum of those 2 cases will be the answer !!
   
 Now, ***what if array has zeroes?***  Well, it changes nothing much to be honest, we can consider the part on both the side of 0 as the subarrays and the maximum product that way will be the max(subarray1_ans, subarray2_ans) .... And how to mark the division point ? How do we seperate the subarrays????...
Thats pretty simple and we have done it in kadane's algo, just make the curr_ongoing_prod=1 !! And maintain one maxm_prod variable seperately ....

**Example** -->>>  arr={-2,1,4,5,0,-3,4,6,1,-2} .... so we can consider subarray1={-2,1,4,5} and subarray2={-3,4,6,-2} and then the max_ans(subarray1,subarray2) will be our answer !!
 
 Let's have a look on our code now ....
 
**2-pass solution(for better understanding)** 
 ```
 class Solution {
public:
    int maxProduct(vector<int>& nums) {
        
        int curr_product = 1, res = INT_MIN;
        
        for (auto i: nums) {
            curr_product = curr_product * i;
            res = max(curr_product, res);
            if(curr_product == 0) {
                curr_product = 1;
            }
        }
        
        curr_product = 1;
        
        for (int i = nums.size()-1; i>=0; i--) {
            curr_product = curr_product * nums[i];
            res = max(curr_product, res);
            if(curr_product == 0) {
                curr_product = 1;
            }      
        }
        return res;
    }
};
```

* But wait, you might be thinking, why we are still continuing to multiply even beyond the last -ve number in forward iteration and beyond the first -ve number in the forward iteration.

* That's all actually is waste in case of array with odd count of -ve numbers, as the product is only going to increase in negativity beyond those points. The maximum is already updated, so this doesn't affect at all.
* And in case of even count of -ve numbers ... we do need to multiply all the way through... So it is must in that case !!



***code can obviously be made more crisp and cane be done in one-pass***
We will make both the iterations, forward and the backward one simultaneously and will appoint 2-pointer at the front and the backend (mentioning it by l(left_prod, it will leave the last -ve number out) and r(right_prod , it will leave the first -ve number out))....will compare the result everytime with both the products(left and right) and will update it with the maximum value encountered till then.... 
and will do the same thing here too, updating the left_prod and right_prod by 1 whenever they become 0 !!
**1-pass optimal solution(2-pointer)** 
```
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int n = nums.size(), res = nums[0], l = 1, r = 1;
        for (int i = 0; i < n; i++) {
            l =  (l) * nums[i];
            r =  (r) * nums[n - 1 - i];
            res = max(res, max(l, r));
            if(l==0)l=1;
            if(r==0)r=1;
        }
        return res;
    }
};
```

**Thanks for reading it out, I hope you got something out of it !!!**