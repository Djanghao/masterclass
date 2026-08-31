# easy fast solution

**Author:** hurshidbek
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/2501802/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/2501802/)

---

```
PLEASE UPVOTE IF YOU LIKE
```
```
        int len = nums.length - 1;
        List<Integer> ans = new ArrayList<>();

        int[] arr = new int[len+1];
        int dist1 = 0, dist2 = 0;

        for (int i = 0; i <= len; i++) {
            if (nums[i] == key) dist1 = k + 1;
            if (dist1 > 0){
                arr[i]++;
                dist1--;
            }

            if (nums[len-i] == key) dist2 = k+1;
            if (dist2 > 0){
                arr[len-i]++;
                dist2--;
            }
        }

        for (int i = 0; i < arr.length; i++)
            if (arr[i] > 0)
                ans.add(i);
				
		return ans;