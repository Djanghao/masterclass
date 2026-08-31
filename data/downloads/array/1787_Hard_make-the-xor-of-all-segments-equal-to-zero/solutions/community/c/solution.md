# [C++] An easy solution with detailed explanation to a really hard problem

**Author:** annashekhawat
**Votes:** 154
**Link:** [https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/solutions/1099112/](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/solutions/1099112/)

---

# Intuition
Skip this section if you already know v[i] needs to be equal to v[k * c + i]).

Let's take an example array [3,4,7,1] and k = 3.
There are two segments in this example. We oberserve that 3^4^7 = 0. So the first segment is fine. And for the second segment, the equation 4 ^ 7 ^ x = 0 has only one solution which is x = 3. So the fourth number has to be 3 if we want to keep the first three numbers. Final array = [3,4,7,3]. Similarly, if there were to be a fifth element, and we want to keep the first four unchanged, then it would have to be 4 because 7 ^ 3 ^ x = 0 gives x = 4. Final array [3,4,7,3,4]. The first k numbers (such that their xor is 0) would have to keep repeating throughout the array.

# How to Approach
In general, the target is to make v[i] = v[k * c + i] for all i, where c is an integer.
Array positions such as k * c + i will be called just i hereafter. So there will be a bunch of i = 0 positions, a bunch of i = 1 positions, and so on up to i = k - 1.

Now, we will only focus on choosing k numbers because we know they need to keep repeating.

We will first calculate the frequencies of different numbers at all the indices 0 to k - 1.

Then intuition says that the number that has the highest frequency for some index can probably be assigned to this index. A greedy solution can be formed this way. But a problem with this algorithm is breaking ties. Let's say at index 5, there are two numbers with the max frequency of 3. Then which one should we select? This selection can really impact the result going forward as this number will be xor'ed to other numbers that we are yet to see. So we'll have to explore both these cases as in DFS. But this may lead to exponential complexity.

This is when we can think that dp can help.

# Algorithm

dp[i][j] = minimum total number of elements we need to change from index 0 to i so that the xor of the subarray from index 0 to i is equal to j.

Calculating dp[i][j]:
Index = i. target xor value = j.

Main task at hand -
At index i, we need to select a number x such that x ^ (*some_xor_up_to_index_i-1*)= j.
What are the values we can choose x from? We can choose anything from 0 to 1023.
That *some_xor_up_to_index_i-1* = j ^ x.
dp[i][j] will be the sum of two components:
**Component 1:** How many changes need to be done up to index i - 1? It is dp[i - 1][j ^ x].
**Component 2:** How many changes we need to do at index i. It is (total number of times index i occurs) - (frequency of x at index i).

So far, we know dp[i][j], if we choose x at index i, is sum of component 1 and component 2.
And overall, dp[i][j] = min (dp[i][j] made by choosing x) over all x in [0, 1023]).

If we iterate over [0, 1023] for the value of x and calculate corresponding answers and then take their minimum to find dp[i][j], that will make the solution's overall complexity cubic and we can't afford that given the constraints.

Breaking down our search space of x:
1. Select x whose freq at index i is 0
In this case component 2 is same for all such numbers. So the minimum value only depends on component 1 which will be the minimum value of in dp[i - 1]. So there's no point iterating over these x's. We can do it in one go.

2. Select x such that its freq at index i is greater than 0
We need to iterate over such numbers to calculate dp[i][j] for all these x individually because we can't know what is best.

Finally dp[k - 1][0] will be the answer because the xor of all the k numbers needs to be 0 as the requirement by the question.

# Time Complexity
Refer code.
The first for loop runs k times.
The second for loop runs 1024 times.
The third for loop runs n/k times. Explanation: If an array of size n has been split into subarrays of size k, then how many such subarrays will there be? Answer: n/k. So any index of a subarray (a position from 0 to k - 1) can have at max n/k unique value in the different subarrays.

So overall time complexity = k * 1024 * (n / k) = n * 1024

# Code
```
class Solution {
public:
    
    int minChanges(vector<int>& v, int k) {
        int n = v.size();
        
        // freq[i][x] = frequency of the number x at position i where i in [0, k - 1]
        vector<vector<int> > freq(k, vector<int>(1024, 0));
        /* dp[i][j] = minimum total number of elements we need to change from index 0 to i so that
           the xor of the subarray from index 0 to i is equal to j */
        vector<vector<int> > dp(k, vector<int>(1024, n + 1));
        // numsAtPosition[i] = set of unique numbers at position i where i in [0, k - 1]
        unordered_set<int> numsAtPosition[k];
                
        for(int i = 0; i < n; i++) {
            int position = i % k;
            freq[position][v[i]]++;
            numsAtPosition[position].insert(v[i]);
        }
        
        int bestUptoLast = 0;
        
        for(int i = 0; i < k; i++) { // this loop runs k times
            
            // how many i indices exist in the array
            int cntOfPos = n / k + (((n % k) > i) ? 1 : 0);
            
            // will track best value at i
            int bestAti = n + 1;
            
            // find the best way to make the xor sum equal to j from index 0 to i
            for(int j = 0; j < 1024; j++) { // this loop runs 1024 times
                if(i == 0) {
                    dp[i][j] = cntOfPos - freq[i][j];
                }
                else {
                    
                    // iterate over all numbers that occur at index i
                    for(auto x : numsAtPosition[i]) { // this loop runs n/k times
                        dp[i][j] = min(dp[i][j], dp[i - 1][j ^ x] + cntOfPos - freq[i][x]);
                    }
                    
                    // this will do for all the numbers that don't occur at index i
                    // we are changing all the numbers at index i with an arbitrary number that gives best result
                    dp[i][j] = min(dp[i][j], bestUptoLast + cntOfPos);
                }
                bestAti = min(bestAti, dp[i][j]);
            }
            bestUptoLast = bestAti;
        }
        
        return dp[k - 1][0];
    }
};
```

Code inspired by @k_m_066