# {C++|Java|C|Python} || Explained & Beats 100%

**Author:** lRaml
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3005125/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3005125/)

---

## Logic
- To buy The maximum amount of icecream, we need to buy the cheapest ones first.
## Approach
1. Sort costs from cheapest to most expensive.
2. Buy the cheapest icecream & Update Coins `coins -= cost`
3. Repeat until ``coins <= 0`` OR all icecreams are bought.(\u02F5 \u0361\xB0 \u035C\u0296 \u0361\xB0\u02F5)

[+] Update coins while comparing it with cost

    instead of :
        coins -= costs[i]
        if(coins < 0) Break
    Do :
        if( (coins-= costs[i]) <0 ) Break
## Explained Code
```c++ []
    int maxIceCream(vector<int>& costs, int coins) {
        sort(costs.begin(),costs.end()); // Sort Costs

        for(int i=0 ;i<costs.size(); ++i)
            if( (coins-=costs[i])<0) //Update && check
                return i; 

        //if we still have coins after buying all the icecream :
        return costs.size(); 
    }
```
```java []
    public int maxIceCream(int[] costs, int coins) {
        Arrays.sort(costs); // Sort costs

        for(int i=0 ;i<costs.length;++i)
            if( (coins-=costs[i])<0) // Update && check
                return i; 

        //if we still have coins after buying all the icecream :
        return costs.length;
    }
```
```C []
int comparator(const void *p, const void *q) // used in qsort
    {return (*(int*)p-*(int*)q);} 

int maxIceCream(int* costs, int size, int coins){
    qsort((void*)costs, size, sizeof(costs[0]), comparator);

    for(int i=0 ;i<size; ++i)
        if((coins-=costs[i])<0) return i;
    return size;
}
```
```Python3 []
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        costs.sort()
        for i in range(len(costs)):
            coins -= costs[i] # Buy the ith iceream
            if coins < 0: # check if we can afford more
                return i
        #if we bought all icecreams and still got coins
        return len(costs)
```
```python []
    def maxIceCream(self, costs, coins):
        costs.sort()
        for i in range(len(costs)):
            coins -= costs[i] # Buy the ith iceream
            if coins < 0: # check if we can afford more
                return i
        #if we bought all icecreams and still got coins
        return len(costs)
```
## Raw Code
```c++ []
    int maxIceCream(vector<int>& costs, int coins) {
        sort(costs.begin(),costs.end()); 
        for(int i=0 ;i<costs.size(); ++i)
            if( (coins-=costs[i])<0) return i; 
        return costs.size(); 
    }
```
```java []
    public int maxIceCream(int[] costs, int coins) {
        Arrays.sort(costs);
        for(int i=0 ;i<costs.length;++i)
            if( (coins-=costs[i])<0) return i;
        return costs.length;
    }
```
```C []
int comparator(const void *p, const void *q)
    {return (*(int*)p-*(int*)q);} 

int maxIceCream(int* costs, int size, int coins){
    qsort((void*)costs, size, sizeof(costs[0]), comparator);

    for(int i=0 ;i<size; ++i)
        if((coins-=costs[i])<0) return i;
    return size;
}
```
```Python3 []
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        costs.sort()
        for i in range(len(costs)):
            coins -= costs[i]
            if coins < 0: 
                return i
        return len(costs)
```
```python []
    def maxIceCream(self, costs, coins):
        costs.sort()
        for i in range(len(costs)):
            coins -= costs[i]
            if coins < 0:
                return i
        return len(costs)
```
Time Complexity  : $$O(nlogn)$$
Space Complexity : $$O(1)$$

![image.png](./images/0.png)
