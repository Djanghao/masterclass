# Explained in detail || Simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 48
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4277051/](https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4277051/)

---



# Intuition
- First we check possible value for first candiate distribution :
  - To get the min possible value we need to see if we remove max limit for other two candidate then what ever left is the min value for first => n - 2 * limit. But there may be case when we can not allocate limit to other two so the min value here become negative - in this case min value will be zero. So the min value is max(0, n - 2*limit)
  - To get the max possible value we just need to check the min of the limit & n. Because we can not distribute more than n or limit number of candies as per the problem. So min value is min(limit, n)
- Now we have to take each possible value of the first candidate candi distribution and figure out the possiblity of the second candidate possible value. Basically we fix the first candidate's possible value and then figure out the min possbile value and max possible value for the second candidate with the similar approach that we have done for the first one. <b>And once we got that, we just need to add number possible values for the second candidate to our ansewer</b>. 
- The only difference is that we just need to leave limit once from the remaining amount of candies as we have only one candidate left and the available candies will become n - i as we have allocated i candies to first candidate.
- Remaining candies after allocating i candies to first candidate = n - i. To evaluate min value for second = remaining candies - limit. We give max to thired candidate and check how many remaining. if it goes negative then the min value will be zero. So min value is = (n-i) - limit => max(0, n - i - limit). Similarly max possible is min of the limit & remaining candies = min(limit, n - i).
- Now we just need to add maxPossible value for second  - min possible value of second to the answer. This is becuse for a fixed candies i give to first we have secondMax - secondMin ways possible. 
- We do not have to do this for third, as once we allocate to first and second the remaining will automatically given to third one and hence no need of extra effort. 

# Approach
- Evaluate min and max possible value for the first candidate.
- Iterate from min to max for the first candidate
- Evaluate min max possible for the second candate after giving i candies to the first candiate.
- Add possible values count to the answer

# Complexity
- Time complexity: O(N)

- Space complexity: O(1)

## C++
```
long long distributeCandies(int n, int limit) {
    long long ans = 0;
    int firstMin = max(0, n - 2*limit);
    int firstMax = min(limit, n);
    for(int i = firstMin; i <= firstMax; ++i ){
        int secondMin = max(0, n - i - limit);
        int secondMax = min(limit, n - i);
        ans += secondMax - secondMin + 1;
    }
    return ans;
}
```

## Java
```
public long distributeCandies(int n, int limit) {
    long ans = 0;
    int firstMin = Math.max(0, n - 2*limit);
    int firstMax = Math.min(limit, n);
    for(int i = firstMin; i <= firstMax; ++i ){
        int secondMin = Math.max(0, n - i - limit);
        int secondMax = Math.min(limit, n - i);
        ans += secondMax - secondMin + 1;
    }
    return ans;
}
```

Note: This solution is the master piece in the math work behind min max evaluation of above explained idea :  https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4276620/a-b-c-n/

---


<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---