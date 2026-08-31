# C++ || Simple Code || Full Explanation

**Author:** TlTAN
**Votes:** 154
**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189338/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189338/)

---

***Upvote to support if found helpful :*** 

## Clean code at the end of the post

**Intuition :**

The problem says that we need to check if we did the given operation on any element any number of times on an array with all 1 will we get the target array or not. So if we can do the reverse operations on the target array we should get the array with all 1.
* Now in each step the sum of the old array is replaced with any element of the old array to get current array.
* So the greatest element of current array is the sum of old array. 
* Let old array be `[a, b, c, d]` and new array after doing 1 operation may be `[a, b, c, (a+b+c+d)]`. 
* We have to find `d` from here to get the old array back. So if we thake sum of the current array and exclude `the greatest element i.e. sum of previous array` we get `(a+b+c)`. Now if we minus it from the previous sum we get `(a+b+c+d) - (a+b+c) = d`. We are getting old element back.

Let's take an example to see how a target array is made and what we can do to reverse the process.

```
[1, 1, 1, 1, 1]     - sum = 5
[1, 1, (5), 1, 1]   - sum = 9,  Sum - greatest element = 9-5 = 4, Greatest element - sum = 5-4 = 1 (i.e. previous element)
[1, (9), 5, 1, 1]   - sum = 17, Sum - greatest element = 17-9 = 8, Greatest element - sum = 9-8 = 1 (i.e. previous element)
[1, (17), 5, 1, 1]  - sum = 25, Sum - greatest element = 25-17 = 8, Greatest element - sum = 17-8 = 9 (i.e. previous element)
[(25), 17, 5, 1, 1] - sum = 49, Sum - greatest element = 49-25 = 24, Greatest element - sum = 25-24 = 1 (i.e. previous element)
...
...
```

**Approach :**

* We can store the elements of target array in a priority queue (pq) to always get the greatest element at the top.
* Calculate the total sum along with it.
* Exclude top element of pq from sum. 
* Now minus the sum from the top element to get the previous element. **If multiple operations were done on same element we have to do this same operation multiple times. Insted we can just return pq.top() % sum.** 
***Broader Explanation:*** If the sum and replace operation was done at a single position multiple times then in that case the sum of remaining numbers were added multiple times to thae number. So to get back the old number we have to substract the remaining sum from the same top element over and over again untill the element becomes less than the remaining sum and any ither element becomes the top value. So the ultimate old value which will not be the top, is the remainder i.e. `pq.top() % sum`. In this way we can save `pq.top() / sum` iterations in each step.  `This saves the code from running into TLE` 

* Pop the current top element from pq and push the old elemnt found. Also add the old element to the remaining sum.
* Now comes the cases where we have to return true. Firstly if sum is 0. Sum can not be 0 in any case as minimum element should be 1. Sum can not be also greater than or equal to the top element as in that case the old element will become negetive or 0.
* Secondly as we are doing modulus so the old value can be obtained as 0 which is not possible. But there is only 1 case where it is possible which is in case sum becomes 1. Sum will be 1 only if the remaining and only element of array is 1 i.e. when the array has only 2 elelments. So we can either check if the size of array is 2 else if sum is equal to 1.

**Implementation :**

1. At first declare a `priority queue (pq) to store all elements of target in decreasing order`.

2. Insert elements in pq and also calculate their sum.

3. `Iterate in loop and do operations` untill all elements in pq becomes 1 (So we can only `check if pq.top() is 1 or not`). 

4. In loop `exclude the top element from sum to get the remaining sum`. Then find old element by deleting remaining sum from top elelmet as many times as possible (`can be done by pq.top() % sum`). Then `delete the top elelment and add old element to the pq` and also `add it to sum to update it`.

5. `In the middle check for the conditions which will indicate that all premetive elements were not 1.` 
* 	`if(sum == 0 || sum >= pq.top()) return false;`
* 	`if(target.size() != 2 && old == 0) return false;` or `if(sum != 1 && old == 0) return false;` 

6. Return `true if the top element becomes 1`. As we are not adding any element less than 1 so this gives correct result.

**Code with Full Explanation :**


```
class Solution {
public:
    bool isPossible(vector<int>& target) {
        
        //Priority queue for storing all the nums in taget in decreasing order.
        priority_queue<int> pq;
        long long sum = 0; //for storing total sum

        for(auto num : target){ //adding the nums in pq and sum
            pq.push(num);
            sum+=num;
        }
        
        //iterating untill all elements in pq become 1 (in turn pq.top() will also become 1);
        while(pq.top() != 1){

            sum -= pq.top(); //removing the greatest element as it was last upadted when converting [1,1,1...] array to target. So we are left with sum of other elements.
            
            //when there are elements greeter than 1 then sum of other elements can not be 0 or sum can not be greater than top element because sum + x(any number>0) is pq.top().
            if(sum == 0 || sum >= pq.top()) return false;
            
            //if we delete all copies of sum from pq.top() we get an old element.
            int old = pq.top() % sum;
            
            //all old elements were > 0 so it can not be 0 unless sum is 1 (This is only possible if array has only 2 elements)
            if(sum != 1 && old == 0) return false;
            
            pq.pop();     //Deleting greatest element

            pq.push(old); //Adding old element to restore array.
            sum += old;   //Updating sum
        }
        
        //if all elements are 1 then return true
        return true;
    }
};
```

**Clean Code :**

```
class Solution {
public:
    bool isPossible(vector<int>& target) {
        priority_queue<int> pq;
        long long sum = 0;
        for(auto num : target){
            pq.push(num);
            sum+=num;
        }
        while(pq.top() != 1){
            sum -= pq.top();
            if(sum == 0 || sum >= pq.top()) return false;
            int old = pq.top()%sum;
            if(sum != 1 && old == 0) return false;
            pq.pop();
            pq.push(old);
            sum += (old);
        }
        return true;
    }
};
```