# Java O(1) space general solution, NO 14 DAYS TRICK

**Author:** pzhang15
**Votes:** 10
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/334367/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/334367/)

---

**A lot of people using 14 days tricks to speed up the process, which is not going to fly in the real interview because it requires exhaust-search to find the pattern**. 
Also, the 14 days magic number only works for a cell size of 8. If it's not 8, then it requires another exhaust-search of the pattern. Thus I think it's better to know the general approach to this problem.
The intuition is this: the patterns after K days will start repeating while running the simulation, we call it a cycle. Such cycle preserves the state of cells in chronological order from day 1 to day K.
For example:
N = 7 and K = 3
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Then, we can just directly return the 7%3, which is Day 1 array in the cycle table.
Now we have two questions:
1. How do we know there is a cycle while we are running the simulation?
2. How do we preserve the chronological order of such a cycle?

For question1, a <b>HashMap</b> would be suitable for checking if we already encountered the same cells by using the containsKey method, which is only O(1) (A HashSet is also good, but the mapping helps us return the result array). <b>Since Java doesn't support direct comparison between two integer arrays,  we can map it by using an integer key</b>(String also works, but it takes up more memory space).
For the <b>toInteger()</b> function: We treat each day's cell as a binary string and convert it to an integer. We will use this integer as a key for our look up in the hashmap. For example, prison cell: [0, 0, 0, 0, 0 ,0 , 1, 0] will convert to number 2, [0, 0, 0, 0, 0 ,1 , 0, 1] will convert to 2^2 + 2^0 = 5 (i << 1 is just a way to multiply each position by 2). Thus, we can use a unique integer as a key to represent an array in our LinkedHashMap

For question2, a LinkedHashMap can also preserve the insertion order as well. Thus we can maintain a chronological records for such cycle.

<b>So, as soon as we have the cycle LinkedHashMap, we can just lookup the remainder of N % K in the cycle.</b>
```
class Solution {
    //Save memory space for int[] comparison
    private int toInteger(int[] cells){
        int res = 0;
        for(int i = 0; i < 8;i++){
            res += (1 << i) * cells[i];
        }
        return res;
    }
    public int[] prisonAfterNDays(int[] cells, int N) {
        LinkedHashMap<Integer, int[]> map = new LinkedHashMap<>();
        int K = 0;
        while(K < N){
            int[] newCell = new int[8];
            for(int i = 1; i < 7;i++){
                newCell[i] = cells[i - 1] == cells[i + 1]? 1 : 0;
            }
            cells = newCell;
            int key = toInteger(cells);
            if(map.containsKey(key)){
                break;
            }
            map.put(key, cells);
            K++;
           
        }
        //K is the cycle length
        if(K < N){
            ArrayList<Integer> arr = new ArrayList<>(map.keySet());
            //IMPORTANT, the array index start at 0
            //We need to pad it so that the day index starts on 1, which align with N % K index lookup
            arr.add(0, -1);
            int idx = N % K;
            //If N % K is 0, that means we want the last element of the cycle
            return map.get(arr.get(idx == 0? arr.size() - 1 : idx));
         
        }
        return cells;
    }
}
```