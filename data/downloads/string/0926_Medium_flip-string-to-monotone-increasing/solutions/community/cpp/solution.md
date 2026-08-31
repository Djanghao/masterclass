# ✅[C++]Easy solution with explaination[Without Dp]✅

**Author:** vishnoi29
**Votes:** 408
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3061178/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3061178/)

---

\uD83C\uDFA5\uD83D\uDD25 Exciting News! Join my Coding Journey! Subscribe Now! \uD83D\uDD25\uD83C\uDFA5

\uD83D\uDD17 Link in the leetcode profile 

New coding channel alert! \uD83D\uDE80\uD83D\uDCBB Subscribe to unlock amazing coding content and tutorials. Help me reach 1K subs to start posting more videos! Join now! \uD83C\uDF1F\uD83D\uDCAA

Thanks for your support! \uD83D\uDE4F\uD83C\uDF89
# Approach
When We are  traversing in the string S there will be two possibility
1. **Char=='1'**
   - It will not impact our minimum flips just keep the record of count of 1
2. **Char=='0'**
   - Here will be **2 cases**
      1. Keep is as 0 and flip all the 1 so far ,for that we need to know about the count the one so far
      2. Flip it to 1 and update our count_flip
      3. Take the minmum of count_flip and count_one and update the  count_flip because we want minimum(dry run for 1110000)
 
 Example: **string S= 00110**
**after 1st iteration** : count_one = 0,count_flip = 1,
    *count_flip=min(1,0)=0;*
**after 2nd iteration** : count_one = 0,count_flip = 1,
    *count_flip=min(1,0)=0;*
**after 3rd iteration** : count_one = 1,count_flip = 0,
**after 4th iteration** : count_one = 2,count_flip = 0,
**after 5th iteration** : count_one = 2,count_flip = 1,
   * count_flip=min(1,2)=1;*
**it will return 1 as answer**

Try to dry run with string S=010110 and string S=111100000 
  
# Complexity
- Time complexity:-  O(N)
- Space complexity:- O(1)

# Code
```
class Solution
{
public:
    int minFlipsMonoIncr(string S)
    {
        int count_flip = 0, count_one = 0;
        for (auto i : S)
        { 
 //keep track of all one (we will use count_one in else condition if we need)  
//if we want flip one into 0
            if (i == '1')
                count_one++;
            else{
                count_flip++;
            count_flip = min(count_flip, count_one);
            }
        }
        return count_flip;
    }
};
```
If you really found my solution helpful **please upvote it**, as it motivates me to post such kind of codes.
***Let me know in comment if i can do better***.
Let's connect on **[LINKDIN](https://www.linkedin.com/in/mahesh-vishnoi-a4a47a193/)**

![upvote.jfif](./images/0.jpeg)

