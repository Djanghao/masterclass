# [Java/C++] THE EASIEST EXPLANATION

**Author:** hi-malik
**Votes:** 131
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/1881240/](https://leetcode.com/problems/two-city-scheduling/solutions/1881240/)

---

How's going Ladies - n - Gentlemen, today we are going to solve another coolest problem i.e. **Two City Scheduling**

**`This is a little confusing problem, it tooks a lot of time to me figure it out, but trust me i try to made it as simple as possible <^^>`**

What the problem statement is saying,
```
People have given choices to fly either to cityA OR to cityB. But they have to book their flight's by themself.
Now, everyone will choose that city which is cheapest to visit and they'll book the flight ticket according to that city.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
```

So, let's understand this problem using an simple example:-

```
[[10,20], [30,200], [40,500], [30, 20]]
```

Just for sake in the starting assume that we are sending first half to `cityA` & Second half to `cityB`

```
[[10,20], [30,200], [40,500], [30,20]]
  A        A            B         B
```

And we calcualte the cost it'll be :-

**Cost =** `10 + 30 + 500 + 20` **`= 560`**

Now as we can see the cost is way higher, can we do this in better??

So, ya there will be 3 possiblities:-
1. If we go from `cityA` to `cityB` & there difference is equals. Means, there loss value is **0**
2. If we go from `cityA` to `cityB` & cost of `cityA` **>** `cityB`. Means, going to **cityB** is a much better choice.
3. If we go from `cityA` to `cityB` & cost of `cityA` **<** `cityB`. Means, this will give a loss of  **-ve** which means it's not loss it's profitable going to `cityA`

```
[[10,20], [30,200], [40,500], [30, 20]]

Cost = 10 + 30 + 500 + 20 = 560 

Loss = -10  -170  -460  10
```

Let's sort the list inorder , in which people are more profitable to going to `cityA`
```
Loss = -460  -170  -10  10
```

Now let's change their position :-
```
[[10,20], [30,200], [40,500], [30,20]]
     B     A         A            B
	 
	 
Cost = 10 + 30 + 500 + 20 = 560 

NewCost = 20 + 30 + 40 + 20 = 110
```

So, this is a better choice then 560, as wes have gonne to our min cost choice.

I hope so ladies - n - gentlemen approach is absolute clear,  **Let's code it up:**

**Java**
```
class Solution {
    public int twoCitySchedCost(int[][] costs) {
        Arrays.sort(costs, (a, b) -> {
            return (a[0] - a[1]) - (b[0] - b[1]);
        });
        
        int price = 0;
        for(int i = 0; i < costs.length / 2; i++){
            price += costs[i][0];
        }
        for(int i = costs.length / 2; i < costs.length; i++){
            price += costs[i][1];
        }
        return price;
    }
}
```
**C++**
```
class Solution {
public:
    int twoCitySchedCost(vector<vector<int>>& costs) {
        sort(costs.begin(), costs.end(), [](const vector<int>&a, const vector<int>&b){
            return (a[0] - a[1]) < (b[0] - b[1]);
        });
        
        int price = 0;
        for(int i = 0; i < costs.size() / 2; i++){
            price += costs[i][0];
        }
        for(int i = costs.size() / 2; i < costs.size(); i++){
            price += costs[i][1];
        }
        return price;
    }
};
```
ANALYSIS :-
* **Time Complexity :-** BigO(NlogN)

* **Space Complexity :-** BigO(1)