# Java, sorting, beats 100%, explained

**Author:** gthor10
**Votes:** 146
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/388289/](https://leetcode.com/problems/minimum-absolute-difference/solutions/388289/)

---

The simplest way to achieve requested result is to sort elements and then check difference of each pair of neighbouring elements. Because of the sort if you take any one element the minimum distance will be between it and the next element only, because every next element will be greater than a previous one - thus difference increases. 

The simplest approach to find the min difference is to scan array saving current min difference and update if we found lower one. Then the second pass required to find every pair with such difference.

However I'd like to combine those two passes into one. We check for min difference as we go, adding to result list everytime our difference == min difference. When we met new min difference we clear the result list and start a new one.

O(nlgn) time - Onlg for sorting and On to form the result list. Space is O(1) - just several state variables. 

```
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        List<List<Integer>> res = new ArrayList();
        //sort elements
        Arrays.sort(arr);
        //init our min difference value
        int min = Integer.MAX_VALUE;
        //start looping over array to find real min element. Each time we found smaller difference
        //we reset resulting list and start building it from scratch. If we found pair with the same
        //difference as min - add it to the resulting list
        for (int i = 0; i < arr.length - 1; i++) {
            int diff = arr[i + 1] - arr[i];
            if (diff < min) {
                min = diff;
                res.clear();
                res.add(Arrays.asList(arr[i], arr[i + 1]));
            } else if (diff == min) {
                res.add(Arrays.asList(arr[i], arr[i + 1]));
            }
        }
        return res;
    }
```