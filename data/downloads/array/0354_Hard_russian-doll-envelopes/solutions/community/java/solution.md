# Java NLogN Solution with Explanation

**Author:** AyanamiA
**Votes:** 698
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/82763/](https://leetcode.com/problems/russian-doll-envelopes/solutions/82763/)

---

 1. Sort the array. Ascend on width and descend on height if width are same.
 2. Find the [longest increasing subsequence][1] based on height. 


----------

 - Since the width is increasing, we only need to consider height. 
 - [3, 4] cannot contains [3, 3], so we need to put [3, 4] before [3, 3] when sorting otherwise it will be counted as an increasing number if the order is [3, 3], [3, 4]


----------


    public int maxEnvelopes(int[][] envelopes) {
        if(envelopes == null || envelopes.length == 0 
           || envelopes[0] == null || envelopes[0].length != 2)
            return 0;
        Arrays.sort(envelopes, new Comparator<int[]>(){
            public int compare(int[] arr1, int[] arr2){
                if(arr1[0] == arr2[0])
                    return arr2[1] - arr1[1];
                else
                    return arr1[0] - arr2[0];
           } 
        });
        int dp[] = new int[envelopes.length];
        int len = 0;
        for(int[] envelope : envelopes){
            int index = Arrays.binarySearch(dp, 0, len, envelope[1]);
            if(index < 0)
                index = -(index + 1);
            dp[index] = envelope[1];
            if(index == len)
                len++;
        }
        return len;
    }


  [1]: https://leetcode.com/problems/longest-increasing-subsequence/