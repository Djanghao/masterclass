# Golang O(1) solution faster than 100% with explanation and images

**Author:** nathannaveen
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/1080009/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/1080009/)

---

```
O(1) time, faster than 100%
```

* **

The idea of this solution is to get the number odd numbers from `0` to `high`, and then subtract the number of odd numbers from `0` to `low - 1`. The idea can be shown by an example:
* **
```
high: 7
low : 3
```

![image](./images/0.png)
* *The odd numbers from `0` to `high` (`7`).* There are `4` odd numbers from `0` to `7`.

![image](./images/1.png)
* *The odd numbers from `0` to `low - 1` (`2`).* There is `1` odd numbers from `0` to `2`.

The number of odd numbers would be `4 - 1 = 3`. Three odd numbers. 

* **
```
func countOdds(low int, high int) int {
	return (high + 1)/2 - low / 2
}
```

Remember to use PEMDAS, because `(high + 1)/2 - low / 2` equals `((high + 1)/2) - (low / 2)`.

***

**The Subraction Part Might be a Little Hard to Understand, So:**

Basicly we can find the number of odd numbers from `0` to `high` by doing `(high + 1) / 2`. Then we can find the number of odd numbers from `0` to `low` by doing `low / 2`. To find the number of odd numbers in between `low` and `high` we have to subtract the number of odd numbers from `0` to `low` from the number of odd numbers from `0` to `high`. 

We can take an example of: `Input: low = 4, high = 7`

Now we can find the number of odd numbers from `0` to `high` (The line with the numbers bellow is the number line, the `o` mark the spots where there are odd numbers):

```
   o     o     o     o
-------------------------
0  1  2  3  4  5  6  7  8
```

Now we can find the number of odd numbers from `0` to `low` (The `x` mark the spot where there are odd numbers):

```
   x     x
-------------------------
0  1  2  3  4  5  6  7  8
```

Now if we remove the odd numbers from `0` to `low` from the odd numbers from `0` to `high` we get:

```
   o     o     o     o
-------------------------
0  1  2  3  4  5  6  7  8

  minus

   x     x
-------------------------
0  1  2  3  4  5  6  7  8

==

               o     o
-------------------------
0  1  2  3  4  5  6  7  8
```
