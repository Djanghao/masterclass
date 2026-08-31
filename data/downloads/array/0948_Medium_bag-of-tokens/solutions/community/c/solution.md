# [C++] | Detailed Explanation w/ WHY | Simple Commented Solution

**Author:** aryanttripathi
**Votes:** 69
**Link:** [https://leetcode.com/problems/bag-of-tokens/solutions/2468056/](https://leetcode.com/problems/bag-of-tokens/solutions/2468056/)

---

**IDEA:**
* This is something related with ***greedy + two pointer***. 
* We firstly ***sort the array***.

* **How sorting helps?** Sorting helps in such a way that we know in order to play face up either we pick any element
that is having very much large value or we pick any element that is having very less value, 
our score in both the cases is going to increase by 1.
* Similarly, we know in order to play face down to earn more power, either we add small value or large 
value in both cases our score is going to decrease by 1.
* ***So, why not to play logically, When we have to spend our power in order to increase score
 we will try to spend as less as we can, so that we left with more power.***
* ***And also, when we have to spend our score in order to increase our power we will try to pick as much as big value 
so that our power will increase more.***
* 	Since we want to maximise our score so we **try to play as much as face up** we can.
* 	If at any point we are not able to play face up, that means at this point we do not have enough 
power to play face up.
* Now at this point our goal becomes to gain power.
* **And how can we gain power?**
* We can gain power only when we have atleast 1 score. 
And if we have choice to pick any element of the array and add to our power,
it's kind of obvious choice to take that element which is having maximum value at that time.
* That's why we will use **Sorting + two Pointer.**
____________________
**So, What we will do?**
* We will play face up till when we have enough power.

* If at any point we do not have enough power, at that point we will try to play face down.
* We will play face down by picking up the element maximum available element at that time.
________
***Solution - I (Greedy + Two pointer, Accepted)-***
```
class Solution {
public:
    /*
    Time Complexity: O(n*logn) // since we are using sorting
    Space Complexity: O(1) // we are not using any additional data structure here
    */
    int bagOfTokensScore(vector<int>& arr, int power) {
        int n = arr.size(); // extract size of array
        
        int score = 0; // intially we have score zero
        
        sort(arr.begin(), arr.end()); // sort the array
        
        int i = 0, j = n - 1; // put two pointers on first and last
        
        // equal sign is not here, because for a single element,
        // we can't use it as to increase score and also use 
        // it as to increase power
        while(i < j) 
        {
            if(power >= arr[i]) // if we have available power to increase score, use it
            {
                power -= arr[i++];
                score++;
            }   
			                                                // for power to be gain, we should have at least one score
            else if(score >= 1 && power + arr[j] >= arr[i]) // and we have to make sure by gaining this power we are able to earn score
                                                           //  else it makes no point of spending score
            {
                power += arr[j--];
                score--;
            }
            else break; // because we already know that array is sorted,
			//so further values wil be definately in increasing order
        }
        
        while(i < j + 1 && power >= arr[i]) // when gap remains, then for that
        {
            power -= arr[i++];
            score++;
        }
        
        return score; // finally return score
    }
};
```
***`If u find this useful , please consider to give a upvote!!`***