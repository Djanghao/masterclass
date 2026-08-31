# find nearest palindrom to median || very simple

**Author:** kreakEmp
**Votes:** 39
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4414729/](https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4414729/)

---

# Approach

- We have to take median first and then check for the nearest possible palindrom of the median
- To find the possible palindrom, nearest to the median there are five cases need to check :
  - case 1: one digit less nearest palindrom
  - case 2: one digit more nearest palindrom
  - case 3: simply take the mirror image of the left half
  - case 4: take mirror image of the (left half + 1)
  - case 5: take mirror image of the (left half - 1)
  - You may check this : [find-the-closest-palindrome](https://leetcode.com/problems/find-the-closest-palindrome/description/)

- finally just check the cost with all three palindrom and then take the minimum cost.

##### Note : We have to take median not mean. Why so ?
- Lets say the the x is the value we are looking for and we have to take summ of all abs(nums[i] - x) to minimum.
- Now lets assume we have only two numbers [1, 100]. In this case it does not matter what value you choose in between [1, 100], cost will be same for all. But as soon as we add on e more number to it 1 or 100 then the cost will be min depending on what value we add. When we add 1, we have [1,1, 100] => Here the cost of first 1 and the 100 will be still 100 irrespective what value you consider for x, but for the middle 1 we have to add an extra cost of abs(1 - x) to the total cost. And minimise this we should set value of x = 1.

<b>Its worth remembering - when ever you want to equalize values in an array and the absolute value change in each item to make it equal we should consider the median value as the final value.</b> 

# Complexity
- Time complexity: O(N.logN)
- Space complexity: O(1)

Note : can be optimise further by checking case 1, if it is larger or smaller then midean. If its same then thats the nearest one. If it is higher then only check -1 from left half case. If it is smaller then ceck only the +1 case.

# Code
```
long long minimumCost(vector<int>& nums) {
    long long ans = LONG_MAX, median = 0, n = nums.size();
    sort(nums.begin(), nums.end());
    median = (n %2 )?nums[n/2]: (nums[n/2] + nums[n/2 - 1])/2;
    
    //Find out possible palindroms
    vector<long long> pal;
    string t = to_string(median);

    pal.push_back(pow(10, t.size()-1) - 1); //case 1 : next palindrom with one digit less
    pal.push_back(pow(10, t.size()) + 1);   //case 2: next palindrom with one digit more
    
    //case 3: palidrom with just mirror image of the left half
    for(int i = 0; i < t.size()/2; ++i) t[t.size() - i - 1] = t[i];
    pal.push_back(stoll(t));
    
    //case 4: palidrom with mirror image of the left half with left half + 1 
    string pal_next = to_string(stoi(t.substr(0,(t.size()+1)/2)) + 1);
    string temp = pal_next;
    if(t.size()%2) pal_next = pal_next.substr(0, pal_next.size() - 1);
    reverse(pal_next.begin(), pal_next.end());
    pal.push_back(stoll(temp + pal_next));
    
    //case 5: palidrom with mirror image of the left half with left half - 1 
    string pal_prev = to_string(stoi(t.substr(0,(t.size()+1)/2)) - 1);
    temp = pal_prev;
    if(t.size()%2)  pal_prev = pal_prev.substr(0, pal_prev.size() - 1);
    reverse(pal_prev.begin(), pal_prev.end());
    pal.push_back(stoll(temp + pal_prev));
    
    //find the cost with each palindrom and take the min as answer
    for(auto p: pal){
        long long sum = 0; 
        for(auto num: nums) sum += abs(num - p);
        ans = min(ans, sum);
    }
    
    return ans;
}
```



---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---