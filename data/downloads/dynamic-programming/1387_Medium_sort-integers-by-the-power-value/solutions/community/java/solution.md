# Java Simple and easy to understand solution, 36 ms, faster than 91.13%, clean code with comments

**Author:** satyaDcoder
**Votes:** 35
**Link:** [https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/1138444/](https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/1138444/)

---

**PLEASE UPVOTE IF YOU LIKE THIS SOLUTION**



```
class Solution {
    
    HashMap<Integer, Integer> cache;
    public int getKth(int lo, int hi, int k) {
        cache = new HashMap();
        

        PriorityQueue<Item> maxHeap = new PriorityQueue<Item>((a, b) -> (a.power == b.power) ? (b.num - a.num) : (b.power - a.power));
        
        for(int num = lo; num <= hi; num++){
            //get the power of each num
            //store in maxheap
            maxHeap.add(new Item(num, getPower(num)));
            
            //if heap size beacome greater than k
            if(maxHeap.size() > k){
                //just remove item with maximum power
                maxHeap.remove();
            }
        }
        
        return maxHeap.remove().num;
    }
    
    private int getPower(int n){
        if(n == 1) return 0;
        
        //retrieve from cache
        if(cache.containsKey(n)) return cache.get(n);
        
        int power = 1 + ((n % 2 == 0) ?  getPower(n / 2) : getPower((3 * n) + 1));
        
        //save in cache
        cache.put(n, power);
        
        return power;
    }
}

class Item {
    int num;
    int power;
    
    public Item (int num, int power){
        this.num = num;
        this.power = power;
    }
}
```