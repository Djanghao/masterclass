# Check if Sum of all remaining equal double of one item - Explained

**Author:** kreakEmp
**Votes:** 34
**Link:** [https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6098912/](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6098912/)

---

# Intution 
- The obivious intution we come accross is do some sort of presum and then evaluate the total sum by skipping outlier
- Also i thought that => the sum of the remaing will be highest one only and need to check the sum of others and compare it with the largest one but this leads to lots of corener cases and even later realised that it is not true ( ex. [-4, -2, 5, 9] )
- Later i realise the following after almost spending 30min in resolving above corner cases.
- If we consider one item as the outlier and when skipped then for the remaining items => 
    total sum is two times the sum of one of the items we considered  =>
    we need to take all sum and remove the current item ( outlier item) and then the sum should be double of one of the items in the considered items.
    
    Why this works ? 
    - consider you have a list of items ( a, b, c ) and one of them is the sum of remaing.
    - Lets assume a +b = c. So when we take sum of all items => a + b +c =  c + c = 2c
    - Which shows that the total sum is double of the one of the item.
    
- One corner case is => when the double of the total sum is equal to the outlier item
   - then in this case we need to check its freq => if greater then equal to 2 that means even we remove one of them as outlier we have at least one more which can be the sum of remaining.


# Approach
- Take sum of all items
- Also put twice of each item in the map and count freq
- Now iterate over each items and consider as the out lier 
  - if this is true then the sum of remaining items should be found in the map
  - Also if the sum of all remaining items equal to our outlier item then we need to check if its freq in map is greater then 2 or not.
  - Keep tracking the max possible item and return it as ans

# Complexity :
- Time complexity : O(N)
- Space complexity : O(N)

# Code
```
int getLargestOutlier(vector<int>& nums) {
    int ans = INT_MIN, sum = 0;
    unordered_map<int, int> freq;
    for(auto n : nums){
        sum += n;
        freq[n*2]++;
    }
    for(auto n: nums){
        int t = sum - n;
        if(freq[t] >= 2 || (freq[t] == 1) && (t != n*2)) ans = max(ans, n);
    }
    return ans;
}
```

---


<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted


---
