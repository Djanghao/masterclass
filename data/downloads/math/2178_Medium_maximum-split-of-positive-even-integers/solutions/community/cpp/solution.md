# Easy C++ code, easy to understand with comments.

**Author:** Rohithch7102
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1783313/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1783313/)

---

If the given finalSum is odd then we can not divide it into sum of even numbers so we will return an empty vector in this scenario.

So, if the given sum in even than we can divide it into sum of even numbers.
But we need it to be longest length possible and all the numbers should be unique.

We can think of a greedy way, every time we pick a smallest even number and return it and finally if we get a number which is already used we will add it to the last inserted number.

For example: 28

first i will pick 2.
 And the number becomes 26 and vector becomes {2};
Next I will pick 4 so the number becomes 22 and vector becomes (2,4};
Next I will pick 6 so the number becomes 16 and vector becomes (2,4,6};
Next I will pick 12 so the number becomes 4 and vector becomes (2,4,6,12};
 But i already used 4 so i will add 4 to the last inserted number (all the elements must be unique) so our final answer becomes {2,4,6,16}; 

**Time complexity** : O(sqrt(n)).
**Space complexity** : O(1).

C++ code:

```
class Solution {
public:
    vector<long long> maximumEvenSplit(long long sum) {
        vector<long long> ans;
        if(sum%2) return ans;  // if given sum is odd return empty vector.
        
        long long cnt = sum/2;     // how many 2's available for each time.
        
        long long i=1;          // how many 2's we are currently using.
        while(cnt>=i){
            ans.push_back(2*i);
            cnt -= i;
            i++;
        }
        if(cnt){     // if any 2's are left we are adding them to the last inserted element.
            ans[ans.size()-1] = ans[ans.size()-1] + (2*cnt);
        }
        return ans;
    }
};

```

**Why the time complexity is O(sqrt(n)) ?**

Consider this problem, given a number x and we need to Split it into a sum of a maximum number of unique positive integers.

Inorder to solve this we every time pick a smallest avalible positive integer. We do this until we get sum of first n natural numbers equal to the given x or greater than x and remove the last number and add the remaining part to last added number.
 
 So the sum of first n natural numbers is n*(n+1)/2.
 From this we can get the time complexity as O(sqrt(n));

**Upvote if it helps!!**