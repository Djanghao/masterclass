# Java, simulation, 1ms, explained

**Author:** gthor10
**Votes:** 6
**Link:** [https://leetcode.com/problems/array-transformation/solutions/420102/](https://leetcode.com/problems/array-transformation/solutions/420102/)

---

This is brute-force solution, seems it gives good performance results. Just check every element and keep the flag indicagtes whether or not the change happened. Do loops until there will be one where we didn't change any single element.

```
    public List<Integer> transformArray(int[] arr) {
        boolean changed = true;
        //while we had changes on previous loop cycle
        while (changed) {
            //reset the change flag
            changed = false;
            //set some vars to keep value of the array element before the change
            int p = arr[0], t = 0;
            for (int i = 1; i < arr.length - 1; i++) {
                //save the element so we can use it one next iteration "unchanged"
                t = arr[i];
                //check conditions for change, if there is match - change and set the flag
                if (arr[i] > p && arr[i]>arr[i + 1]) {
                    arr[i]--;
                    changed = true;
                } else if (arr[i] < p && arr[i] < arr[i + 1]) {
                    arr[i]++;
                    changed = true;
                }
                p = t;
            }
        }
        //combine result list
        List<Integer> res = new ArrayList();
        for (int num : arr)
            res.add(num);
        return res;
    }
```