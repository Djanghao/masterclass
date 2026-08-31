# Explained - Reminder checking || Very Simple & Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 124
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3231219/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3231219/)

---


# Intuition
Trick to see how the addition of a new digit to the end impact the divisibility result of the new number.

# Approach
Let say a number n when we devide it by m we get q as quotient & r as reminder.
So we can write => n = qm + r

Now add a new digit ( say d)  to the the end.
This is equivalent to multiplying 10 with previous number and then add d to it.
So the new number can be written as n*10 + d;
Now replace value of n from prvious equation, we get 
= n*10 + d
= (qm + r) * 10 + d
= 10qm + 10r + d

so in the above result there are three term aout of which the first is always divisible by m. So the remaining part is 10r + d
Now we just need to check if 10 * r + d is divisible by m or not. 

Keep continuing above for all digits in word.


# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

### Up Vote if you like the solution.

# Code
```
    vector<int> divisibilityArray(string word, int m) {
        vector<int> ans(word.size(), 0);
        long long t = 0;
        for(int i = 0; i < word.size(); ++i){
            t = (t * 10 + (word[i] - '0') ) % m;
            if(t == 0) ans[i] = 1; 
        }
        return ans;
    }
```

Here is an article of my recent interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted