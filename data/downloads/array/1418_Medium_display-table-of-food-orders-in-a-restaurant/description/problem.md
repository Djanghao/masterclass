# [1418. Display Table of Food Orders in a Restaurant](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 427 | 492 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `nordstrom`, `jpmorgan`

## Description

Given the array `orders`, which represents the orders that customers have done in a restaurant. More specifically `orders[i]=[customerName_i,tableNumber_i,foodItem_i]` where `customerName_i` is the name of the customer, `tableNumber_i` is the table customer sit at, and `foodItem_i` is the item customer orders.



*Return the restaurant's &ldquo;**display table**&rdquo;*. The &ldquo;**display table**&rdquo; is a table whose row entries denote how many of each food item each table ordered. The first column is the table number and the remaining columns correspond to each food item in alphabetical order. The first row should be a header whose first column is &ldquo;Table&rdquo;, followed by the names of the food items. Note that the customer names are not part of the table. Additionally, the rows should be sorted in numerically increasing order.



 


**Example 1:**


```

Input: orders = [[&quot;David&quot;,&quot;3&quot;,&quot;Ceviche&quot;],[&quot;Corina&quot;,&quot;10&quot;,&quot;Beef Burrito&quot;],[&quot;David&quot;,&quot;3&quot;,&quot;Fried Chicken&quot;],[&quot;Carla&quot;,&quot;5&quot;,&quot;Water&quot;],[&quot;Carla&quot;,&quot;5&quot;,&quot;Ceviche&quot;],[&quot;Rous&quot;,&quot;3&quot;,&quot;Ceviche&quot;]]
Output: [[&quot;Table&quot;,&quot;Beef Burrito&quot;,&quot;Ceviche&quot;,&quot;Fried Chicken&quot;,&quot;Water&quot;],[&quot;3&quot;,&quot;0&quot;,&quot;2&quot;,&quot;1&quot;,&quot;0&quot;],[&quot;5&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;1&quot;],[&quot;10&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;]] 
Explanation:
The displaying table looks like:
Table,Beef Burrito,Ceviche,Fried Chicken,Water
3    ,0           ,2      ,1            ,0
5    ,0           ,1      ,0            ,1
10   ,1           ,0      ,0            ,0
For the table 3: David orders &quot;Ceviche&quot; and &quot;Fried Chicken&quot;, and Rous orders &quot;Ceviche&quot;.
For the table 5: Carla orders &quot;Water&quot; and &quot;Ceviche&quot;.
For the table 10: Corina orders &quot;Beef Burrito&quot;. 

```


**Example 2:**


```

Input: orders = [[&quot;James&quot;,&quot;12&quot;,&quot;Fried Chicken&quot;],[&quot;Ratesh&quot;,&quot;12&quot;,&quot;Fried Chicken&quot;],[&quot;Amadeus&quot;,&quot;12&quot;,&quot;Fried Chicken&quot;],[&quot;Adam&quot;,&quot;1&quot;,&quot;Canadian Waffles&quot;],[&quot;Brianna&quot;,&quot;1&quot;,&quot;Canadian Waffles&quot;]]
Output: [[&quot;Table&quot;,&quot;Canadian Waffles&quot;,&quot;Fried Chicken&quot;],[&quot;1&quot;,&quot;2&quot;,&quot;0&quot;],[&quot;12&quot;,&quot;0&quot;,&quot;3&quot;]] 
Explanation: 
For the table 1: Adam and Brianna order &quot;Canadian Waffles&quot;.
For the table 12: James, Ratesh and Amadeus order &quot;Fried Chicken&quot;.

```


**Example 3:**


```

Input: orders = [[&quot;Laura&quot;,&quot;2&quot;,&quot;Bean Burrito&quot;],[&quot;Jhon&quot;,&quot;2&quot;,&quot;Beef Burrito&quot;],[&quot;Melissa&quot;,&quot;2&quot;,&quot;Soda&quot;]]
Output: [[&quot;Table&quot;,&quot;Bean Burrito&quot;,&quot;Beef Burrito&quot;,&quot;Soda&quot;],[&quot;2&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;]]

```


 


**Constraints:**



	- `1 <= orders.length <= 5 * 10^4`

	- `orders[i].length == 3`

	- `1 <= customerName_i.length, foodItem_i.length <= 20`

	- `customerName_i` and `foodItem_i` consist of lowercase and uppercase English letters and the space character.

	- `tableNumber_i `is a valid integer between `1` and `500`.

---

**Links:** [Submissions](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/) | [Solutions](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/)
