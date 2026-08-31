# Intutive || Beginner Friendly || Explained

**Author:** pankaj_patel63
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/3012839/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/3012839/)

---


```
"/*

Intution: question states that return minimum number 
of buckets to feed the hamsters. 

1. So think about the way you can minimize the food buckets ??
If we feed two hamsters with two food buckets then it costs 2 
bucket but what if we can feed two hamsters in the one bucket then 
it will cost only 1 bucket.

2. So first of all we need to find how many empty buckets are 
such that if we fill it we can feed two hamsters .
After feeding all the hamsters in this way we mark all the 
fed hamsters by 1.

3. Now the rest hamsters that we haven't fed yet we can feed them one by one.

But keep tracking that if there are any hamsters such that we can 
not feed them in this case return -1;

There are few edge cases in which we cannot feed them:-
1. "..HHH.."
2.".HH"
3."HH."
"
*/ 
class Solution {
public:
    int minimumBuckets(string H) {
        int n = H.size();

        if(n == 1)return H[0] == '.' ? 0 : -1;//Case: "H" or "."

        if((H[0] == 'H' && H[1] == 'H') || (H[n - 1] == 'H' && H[n - 2] == 'H'))return -1;//Case: "HH.." or ".HH"

        vector<int> fed(n, 0);
        int countB = 0;
        for(int i= 1;i < n - 1;i++){

            if(H[i - 1] == 'H' && H[i] == 'H' && H[i + 1] == 'H')return -1;//Case: "HHH"

            if(H[i] == '.' && H[i - 1] == 'H' && H[i + 1] == 'H' && !fed[i - 1]){
                countB++;
                fed[i - 1] = 1;
                fed[i + 1] = 1;
            }
        }
        for(int i = 0;i < n;i++){
            if(H[i] == 'H' && !fed[i])countB++;
        }
        return countB;
    }
};
```
Please Upvote if it was helpfull.\uD83D\uDE0A