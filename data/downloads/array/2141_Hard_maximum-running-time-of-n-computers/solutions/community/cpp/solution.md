# Binary Search + Observation || Easy Explanation || 2 Approach || Short Code

**Author:** HoneyJammer
**Votes:** 60
**Link:** [https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3821914/](https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3821914/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The maximum possible ans can be sum of all batteries divide by no computers.
The minimum possible ans can 1.
so we found a range for ans from 1 to sum/n and we need maximum time to run computer => **BINARY SEARCH**

# Approach-1
<!-- Describe your approach to solving the problem. -->
- Take low as 0 and high as sum/n.
- mid is the maximum time of 1 computer 
- Now we check how much time each batteries last

---

-  n = 2, batteries = [1,4,4]
low =1 , high = 9/2 = 4 , mid =3
time avilable = 1 4 4
time need     = 3 3 3
time we get = min(1,3)+min(4,3) + min(4,3) = 1+3+3=7

---


Now if 1 computer take mid time then n computer take n*mid time.
So if time >= mid*n then there is some time left to run more computer 
=> low = mid 
else time < mid*n then we dont have time to run every computer mid time => high=mid-1


# Complexity
- Time complexity:O(NlogK) where k=10^9
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    long long maxRunTime(int n, vector<int>& b) {
        long long low =1;
        long long high = accumulate(begin(b),end(b),0LL)/n;

        while(low < high){
            long long mid = (high+low+1)/2;
            long long time=0;
            for(int t : b) time += min((long long)t,mid);

            if(mid*n <= time) low = mid;
            else high = mid-1;
        }
        return low;
    }
};
```
---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In this approach, we start with the maximum value battery and assign it to a computer. We then check if there is enough battery capacity left to be distributed among the remaining computers such that they can all run for the same amount of time. If there is enough capacity, we can treat this battery as an "infinite" battery for the purposes of our problem and continue with the next highest battery. If there is not enough capacity left, we stop and the answer is the sum of the remaining battery capacities divided by the number of computers.
# Approach-2
1. Sort the batteries in ascending order to have the highest capacity battery at the end.
2. Calculate the sum of all the batteries (sum).
3. Initialize a pointer i to the end of the sorted battery array (m-1)
4. While i is greater than or equal to 0 and the average capacity of the remaining batteries (sum/n) is less than the capacity of the battery at index i, we do the following:
Subtract the capacity of the battery at index i from the total sum (sum).
Decrement the number of computers (n) by 1.
Decrement the pointer i by 1.
The answer is the remaining sum of battery capacities divided by the number of computers (sum/n).

N computers are give and M batteries are given.
So if one battery have charge of infinity then what happen?

- We just assign this battery to one computer then check for remaning batteries.
- n=3 , batteries = [4,7,3,1000]
- so 1000 charge battery can be treated as INF battery?
- YES, because avg = 1014/3 {sum/n} and 1000 > avg 
- INF battery can run for long time but remaining will not and we have make sure that all n computers are on simultaneously.
- so we assign one 1000 battery to one computer so n-1 => 2 computers are left.
- Now if check we can treat 7 as INF or not.
- so AVG sum = 3 + 4 + 7= 14 , avg = 14/2=7 does 7 > 7 ? NO
- so ans is sum/n = 14/2 =7

# Complexity
- Time complexity:O(NlogN)+O(N)+O(N) = O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    long long maxRunTime(int n, vector<int>& b) {
        int m = b.size();
        sort(b.begin(),b.end());
        long long sum = accumulate(begin(b),end(b),0LL);
        int i=m-1;
        while(i>=0 && sum/n < b[i] ){
            sum -= b[i];
            n--;i--;
        }
        return sum/n;
    }
};
```
> Comment **Jai Shree Ram** if you get the Intuition.




