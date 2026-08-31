# c++ faster than 100% easy solution  commented

**Author:** Pragya_Anand
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1213654/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1213654/)

---

```

```class Solution {
public:
    int reinitializePermutation(int n) {
      //you need to permute according to the question and count the number of steps required till index come become 1 because if we will fix the position of 1 then others will automatically occupy its position.
        int indexof1=n/2;
      int ans=1;
      while(indexof1!=1)
      {
        //according to given question if indexof1 is odd the it will give remainder 1 so we will convert indecxof1->n/2+(indexof1)/2 else if it is even then we will just divide it by 2.
        indexof1=(indexof1%2)*n/2+indexof1/2;
        ans++;
      }return ans;
    }
};
do upvote if you find it useful......