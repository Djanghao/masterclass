# [C++] Easy(Production Ready Code) Solution with detailed explanation with comments

**Author:** khodsadul
**Votes:** 12
**Link:** [https://leetcode.com/problems/odd-even-jump/solutions/1241071/](https://leetcode.com/problems/odd-even-jump/solutions/1241071/)

---

# Approach:
It is a very good dynamic programming problem. In this problem, we have to build a dp array(`dp`) starting from backward in which each element `dp[i]` will have a pair of boolean as a value. The first element of pair will represent that if we take an odd-numbered jump (i.e. 1st, or 3rd or 5th..... jump) from this element `dp[i]`, will it make the end element accessible in the array? similarly, the second element of the pair will represent that if we take an even-numbered jump (i.e. 2nd, or 4th or 6th... jump) from this element `dp[i]`, will it make the end element accessible in the array? ***We will keep counting all the elements in which odd-numbered jumps will make the end element accessible, and this will be our solution, because we check from each position to see if we can reach the end, for each position the 1st step (self) will be the odd jump.***

# Logic to Build dp Array:
In simple words for each `dp[i]` we have to find two things from elements processed so far(i.e. elements in the map). 
1. First greater or equal element to `dp[i]` for making the odd jump: will find it using lower_bound function of the map.
2. First smaller or equal element to  `dp[i]` for making even jump: will find it using `prev(iterator_to_lower_bound)`. There is a catch in this which is that when lower_bound is equal to the current element(i.e. `dp[i]`) then the previous element of iterator is again same the lower_bound element so, we will increase the iterator in the solution so that prev(iterator) results to lower_bound itself.

Once we have found the first greater element for an odd-numbered jump then we will get `index` of greater number from the map and check if `dp[index].second` is `true` or `false`. if it's `true` that means that by taking an even-numbered jump from here onwards we can access the end element. So this means that if we take:
*"Odd numbered jump at `dp[i]` and even-numbered jump at `dp[index]` then we will be able to access end element(because `dp[index].second==true` indicates that we have proved that if we take even-numbered jump at `dp[index]` then it's possible to access end element)."*

Similarly first smaller number is at `index2` and `dp[index2].first` is `true` it means that if we take:
*"Even numbered jump at `dp[i]` and then we take an odd-numbered jump at `dp[index2]` then we will be able to access the end element(because `dp[index2].first==true` indicates that we have already proved that by taking an odd jump at `index2` we can access end element)."*
# Code:
```
class Solution {
public:
    int oddEvenJumps(vector<int>& arr) {
	
        /*
        * Initialize a vector dp, of pair having all values false initially. Where:
        * 1. dp[i]->first represents if it's possible to reach the end value by 
        * jumping with an odd step number, from the current element
        * 2. dp[i]->second represents if it's possible to reach to the end 
        * value by jumping with an even step number, from the current element
        */
        vector<pair<bool, bool>> dp = {arr.size(), {0, 0}};
        
        /*
        * Initialize a map to store index of 
        * each processed array value
        * key => array element, value => array element index
        */
        map<int, int> indexMap;
        
        /*
        * End element is always accessible from end element so 
        * initialize end element as accessible from both odd and even
        * numbered jumps
        */
        dp[arr.size()-1] = {1,1};
        int ans = 1;
        
        for(int i = (arr.size() - 1); i >= 0; i--) {
            /*
            * lowwer bound return iterator to key such that => 
            * key >= arr[i]
            */
            auto itr = indexMap.lower_bound(arr[i]);
            
            /*
            * if a lower bound exists then it's possible to make an
            * odd-numbered jump from current element arr[i] so, check 
            * if end element is accessible by taking even-numbered jumps
            * on lower bound if yes then => odd-numbered jump on a[i] and then 
            * even-numbered jumps on lower bound and subsequent jumps can lead to the end element
            */
            if(itr != indexMap.end())
                ans += dp[i].first = dp[itr->second].second;
            
            /*
            * if the lower bound value is the same as of arr[i] then increase itr 
            * so that we get the previous itr as itr in next code snippet
            */
            if(itr->first == arr[i])
                itr++;
            
            /*
            * If itr is not pointing to the beginning of the map then
            * check the immediate smaller(previous) element in the map
            * and see if the end element is accessible by taking an odd-numbered jump 
            * from this element if yes then we can take an even-numbered jump 
            * from the current element and then odd-numbered jump on the previous element 
            * and subsequent jumps can lead to the end element
            */
            if(itr != begin(indexMap)) 
                dp[i].second = dp[prev(itr)->second].first;
            
            // Put arr[i] and i in map
            indexMap[arr[i]] = i;
        }
        
        /*
        * finally will return ans. Note that in ans we just keep count 
        * of elements from which odd jumps can lead to end element because 
        * the first jump from any element is odd
        */
        return ans;
    }
};
```

# Complexities:
Time Complexity: O(Nlog(N))
Space Complexity: O(N)


**Thanks for reading hope you find it helpful. If you like the solution and find it helpful, please hit the upvote button.** 
*~Sadul Khod*