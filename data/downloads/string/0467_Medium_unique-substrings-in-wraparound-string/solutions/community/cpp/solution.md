# C++ Explained Solution O(n)

**Author:** ashish_ohri
**Votes:** 61
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/1473555/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/1473555/)

---


## Explanation

**Part 1**
Lets think of the problem for a second as counting the substrings in the wraparound string and forget about the unique part.
* For a single character lets say "a" the answer is 1 (**current answer: 1**). 
* Now if we add another character in continuation, we have the string "ab". We now are able to form as many solutions as previous answer (i.e. 1 - "b") plus 1 (i.e. "ab" which includes all the characters) (**current answer: 2**).
* Similarly, adding "c" we have the string as "abc" and we'll be able to form as many substrings as previous answer also having the last character "c" (i.e. 2 - "c","bc") plus 1 having all characters (i.e. 3 -"abc") (**current answer: 3**).

*By now it would be clear but let's do this one last time.* 
* Adding "d" we have the string "abcd" and we'll be able to form as many solutions as previous answer which has one length lesser and having the last character "d" (i.e 3 - "d","cd","bcd") plus 1 having all the characters ("abcd") (**current answer: 4**).

Adding current answer at each step in our final answer will give us the solution.

*Note: As soon as continuation breaks ("abcdm" continuation breaks at "m") we'll reset the current answer to 1.*


**In summary the answer is the sum of lengths of all the continuous substrings found (For non unique solution).**

**Part 2**

To deal with unique substrings we'll create a 26 size array initialized with 0.
At each string index i, we store the answer at that point (i.e. current answer) in the array. The current answer is stored in the array position of the respective character found at index i.

Lets take an example string "ababc".
* Initially the array is ```[0,0,0,0,.....]```
* At string index 0, array becomes ```[1,0,0,0,.....]``` (because the answer at that point is 1 for "a").
* At string index 1, array becomes ```[1,2,0,0,.....]``` (the current answer is 2 for "ab").
* At string index 2, the continuation breaks. Hence we set the current answer to 1. Since we have 1 at the position of "a" in the array, we know that we must have found a substring having length 1 ending at "a" (i.e. "a") hence we do nothing at this point at go to the next step.
* At string index 3, we have the current answer as 2 (for string "ab"). Since we already have 2 at position "b" in the array, we know that we have previously found substring ending at "b" of length 2 (i.e. "ab") hence we do nothing and go to the next step.
* At string index 4, we calculate the current answer as 3 (for string "abc"). Since at position "c" in the array we have 0, this is the best solution found at this point. The array becomes ```[1,2,3,0,.....]```.

**If at any point we find a greater or equal number in the array, we know that we have already found a  solution in which our current answer solution is included. If our current answer is better than the one stored in the array for the respective character than we'll replace it with our current answer. The final answer is the sum of the elements in the array.**
## Code
```
class Solution {
public:
    int findSubstringInWraproundString(string p) {
        int ans=1,prev_ans=1;
        vector<int> arr(26,0);
        arr[p[0]-'a']=1;
        for (int i=1;i<p.size();i++){
            if ((p[i-1]-'a'+1)%26==p[i]-'a') // Checking for continuation
                prev_ans++;
            else
                prev_ans=1;
            if (arr[p[i]-'a']<prev_ans){
                ans+=prev_ans-arr[p[i]-'a'];
                arr[p[i]-'a']=prev_ans;
            }
        }
        return ans;
    }
};
```

***Please consider upvoting if you found this solution helpful***

