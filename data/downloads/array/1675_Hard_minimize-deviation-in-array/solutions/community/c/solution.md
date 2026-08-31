# ✅ C++ || Easy || 2 Approaches || Priority Queue || Set

**Author:** knockcat
**Votes:** 251
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/1781709/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/1781709/)

---

# 1675. Minimize Deviation in Array
**KNOCKCAT**

```
1. Easy C++
2. Line by Line Explanation with Comments.
3. Detailed Explanation \u2705
4. 2 approaches one using Priority Queue & other using Set. 
5. Please Upvote if it helps\u2B06\uFE0F
6. Link to my Github Profile contains a repository of Leetcode with all my Solutions. \u2B07\uFE0F
```

[LeetCode](https://github.com/knockcat/Leetcode)

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)

**APPROACH 1 USING PRIORITY QUEUE**

**EXPLANATION**

```
1. To decrease the deviation either increase the minn or decrease the maxx.
2. Now, Make every number as maximum as possible to eliminate one operation(increase the minn)
3. since every element is as maximum as possible , you can not increase any number further
4. Now we are left with just one operation decrease the maxx
5. So perform this operation as many times as u can and keep track of the min_deviation
```

**Time Complexity: O(nlog(m)log(n))**
**Space Complexity: O(n)**

**If the maximum element is m, the number of candidates in its range is at most log(m), which happens when it is a power of 2. There are n elements, for a maximum of nlog(m) candidates. At each step, a new element is inserted into the priority queue with a time complexity of O(log(n)).**

*Complexity: O(nlog(m)log(n)) time, O(n) space*

**CODE**

```
							// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    int minimumDeviation(vector<int>& nums) {
        int n = nums.size();
        int mx = INT_MIN, mn = INT_MAX;
        
        // Increasing all elements to as maximum as it can and tranck the minimum,
        // number and also the resutl
        for(int i = 0; i<n; ++i)
        {
            if((nums[i]%2) != 0)    // multiplication by 2 if nums[i] is odd
                nums[i] *= 2;   // maximising all odd numbers

        
            mx = max(mx,nums[i]);
            mn = min(mn,nums[i]);
        }
        
        int min_deviation = mx - mn;
        
        priority_queue<int> pq;
        // Inserting into Priority queue (Max Heap) and try to decrease as much we can
        for(int i = 0; i<n; ++i)
        {
            pq.push(nums[i]);
        }
        
        while((pq.top()) % 2 == 0)
        {
            int top = pq.top();
            pq.pop(); // popped the top element
            
            min_deviation = min(min_deviation, top - mn);
            top /= 2;
            mn = min(mn, top);  // updating min
            pq.push(top);   // pushing again the top as we have to minimize the max
        }
        
        min_deviation = min(min_deviation, pq.top() - mn);
        
        // we are returning mx - mn
        
        return min_deviation;
    }
};

```

**APPROACH 2 USING SET**

**EXPLANATION**

```
Even numbers can be divided multiple times until it converts to an odd number.
Odd numbers can be doubled only once as it converts to an even number.
Therefore, even numbers can never be increased.
Follow the steps below to solve the problem: 
 

1. Traverse the vector and double all the odd vector elements. This nullifies the requirement for the 2nd operation.
2. Now, decrease the largest vector element while it\u2019s even.
3. To store the vector elements in sorted manner, insert all vector elements into a Set.
4. Greedily reduce the maximum element present in the Set
5. If the maximum element present in the Set is odd, break the loop.
6. Print the minimum deviation obtained.
```

**Time Complexity : O(N * log(N))**
**Space Complexity : O(N)**

**while loop O(n)
1.) begin():-Returns an iterator to the first element in the set. Tc=O(log(n))
2.) rbegin():-Returns a reverse iterator pointing to the last element in the container. Tc=O(log(n))**

*Hence,
Worst caseTime Complexity= O(n * log(n));*

**CODE**

```
							// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    int minimumDeviation(vector<int>& nums) {
        set <int>  s;
        
        // Storing all  elements  in sorted order
        //insert even directly and odd with one time multiplication
        //and it will become even
        for(int i = 0; i<nums.size() ; ++i)
        {
            if(nums[i] % 2 == 0)
                s.insert(nums[i]);
            
            else
                // Odd number are transformed
                // using 2nd operation
                s.insert(nums[i] * 2);
        }
        
        // maximum - minimun
        int diff = *s.rbegin() - *s.begin();
        
        //run the loop untill difference is minimized
        while(*s.rbegin() % 2 == 0)
        {
            
            // Maximum element of the set
            int x = *s.rbegin();
            s.erase(x);
            // remove begin element and inserted half of it for minimizing
            s.insert(x/2);
            
            diff = min(diff, *s.rbegin() - *s.begin());
        }
        return diff;
    }
};
```