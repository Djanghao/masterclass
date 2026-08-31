# [Java] Full explanation + Interview tips + 2 Solutions

**Author:** gahfy
**Votes:** 33
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/1905632/](https://leetcode.com/problems/stock-price-fluctuation/solutions/1905632/)

---

# Interview process
This problem is not so complicated for a leetcode perspective, so that's why it is considered as medium. For an interview, it may be a hard problem, because of many traps we can fall in.

## The easy trap to fall in
Go directly to code the solution. There is actually two optimal solutions, and it all depends on ... clarifying questions.
For this problem, don't miss them.

One very important question to ask : "*How frequently may update be called compare to the max and min methods?*"

If the answer is (very unlikely) : update may be called billions of times while max and min may be called only once. Consider that we log all the stock price, but want to get the statistics only once a month, then the first solution will be the best approach.

If the answer is (very likely) : they will be all called approximately the same amount of time, then the second approach is the best.

In an interview, you will always be in the second scenario, because the first one is not interesting for an interview purpose (as we will see, it's just about sorting a list). But the fact that you ask will clearly show that you consider all possible cases.

## Get the current price

This is the common part of the code, we just keep the last timestamp, and if a record is made with a timestamp which is equal or greater than the last timestamp, we update the value:

```
class StockPrice {
    private int currentStockPrice;
    private int currentTimestamp;
    public StockPrice() {
        currentStockPrice = 0;
        currentTimestamp = 0;
    }
    
    public void update(int timestamp, int price) {
        if(timestamp >= currentTimestamp) {
            currentTimestamp = timestamp;
            currentStockPrice = price;
        }
    }
    
    public int current() {
        return currentStockPrice;
    }
    
    public int maximum() {
    }
    
    public int minimum() {
    }
}
```

## List or PriorityQueue vs Map or Set

This is a general thought about the best solution. Now we will need to store all the stock prices. We could store it as a list, or as a Map with occurrences.
Of course, when it comes to duplicate values for stock price, the Map will be better than the list in terms of space used, even if this does not improve the space complexity.

## If max and min are called a lot less than update

In that case, we want to have the best time complexity for update(), and according to that, the best possible complexity for maximum and minimum.
So all we have to do here is to store all the stock prices, and sort them when max or min is called.

**ATTENTION: This solution will end to a Time Limit Exceeded in Leetcode**

```
class StockPrice {
    private int currentStockPrice;
    private int currentTimestamp;
    private final Map<Integer, Integer> timestampPrices;
    private final Map<Integer, Integer> occurrences;
    
    public StockPrice() {
        currentStockPrice = 0;
        currentTimestamp = 0;
        occurrences = new HashMap();
        timestampPrices = new HashMap();
    }
    
    public void update(int timestamp, int price) {
        if(timestamp >= currentTimestamp) {
            currentTimestamp = timestamp;
            currentStockPrice = price;
        }
        if(timestampPrices.containsKey(timestamp)) {
            int oldPrice = timestampPrices.get(timestamp);
            if(occurrences.get(oldPrice) == 1) {
                occurrences.remove(oldPrice);
            } else {
                occurrences.put(oldPrice, occurrences.get(oldPrice)-1);
            }
        }
        timestampPrices.put(timestamp, price);
        occurrences.put(price, occurrences.getOrDefault(price, 0)+1);
    }
    
    public int current() {
        return currentStockPrice;
    }
    
    public int maximum() {
        List<Integer> prices = new ArrayList(occurrences.keySet());
        Collections.sort(prices);
        return prices.get(prices.size()-1);
    }
    
    public int minimum() {
        List<Integer> prices = new ArrayList(occurrences.keySet());
        Collections.sort(prices);
        return prices.get(0);
    }
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * StockPrice obj = new StockPrice();
 * obj.update(timestamp,price);
 * int param_2 = obj.current();
 * int param_3 = obj.maximum();
 * int param_4 = obj.minimum();
 */
```

In this case, the time complexity of the `update()` method is `O(1)` while `minimum()` and `maximum()` methods have a time complexity of `O(nlogn)` as we are sorting the values.

## If all methods are called approximately the same amount of time.

Then the problem is not the same, we want to optimize the time complexity of each method, and not only the `update()` method. For example, using a TreeSet in Java will have a time complexity of `O(logn)` for each operation (search, add, remove, ...).
This could end up to a `O(logn)` time complexity for `update` and `O(1)` for minimum and maximum.

### Thought : Why isn't it an optimal solution in first scenario

So to clarify, in the first scenario, we ended up with an `O(nlogn)` solution for min and max, and `O(1)` for update. Now considering that the `update` method will be called `n` times, why is this worst than the current approach which has a complexity of `logn`.
It's an other trap of time complexity calculation : calling with the same word (here `n`) things which are not the same. When we say max and min have a complexity of `O(nlogn)` we consider `n` as the number of distinct prices in the list, not the number of times you called the `update` method.
If we consider a scenario with a lot of duplicate, and a lot of updates for the same timestamp, then the number of times we call the `update` method will be significantly higher than what we call `n`.

The the solution for the second scenario is:

```
class StockPrice {
    private final Map<Integer, Integer> map;
    private TreeSet<Integer> set;
    private int currentStockPrice;
    private int currentTimestamp;
    private Map<Integer, Integer> occurrences;
    public StockPrice() {
        map = new HashMap();
        set = new TreeSet();
        occurrences = new HashMap();
        currentStockPrice = 0;
        currentTimestamp = 0;
    }
    
    public void update(int timestamp, int price) {
        if(timestamp >= currentTimestamp) {
            currentTimestamp = timestamp;
            currentStockPrice = price;
        }
        if(map.containsKey(timestamp)) {
            int oldPrice = map.get(timestamp);
            if(occurrences.get(oldPrice) == 1) {
                occurrences.remove(oldPrice);
                set.remove(oldPrice);
            } else {
                occurrences.put(oldPrice, occurrences.get(oldPrice)-1);
            }
        }
        int currentPrice = price;
        map.put(timestamp, currentPrice);
        set.add(currentPrice);
        occurrences.put(currentPrice, occurrences.getOrDefault(currentPrice, 0) + 1);
    }
    
    public int current() {
        return currentStockPrice;
    }
    
    public int maximum() {
        return set.last();
    }
    
    public int minimum() {
        return set.first();
    }
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * StockPrice obj = new StockPrice();
 * obj.update(timestamp,price);
 * int param_2 = obj.current();
 * int param_3 = obj.maximum();
 * int param_4 = obj.minimum();
 */
```

Here, the `update` method has a time complexity of : `O(1)` for the current price + `O(logn)` for removal + `O(logn)` for addition, which simplifies to `O(logn)`.
The `maximum` and `minimum` methods just look for the first and last element, so they have a time complexity of `O(1)`, same as `current`.

If anything is unclear, feel free to ask by commenting this post.

## Follow-up question

Actually, an other clarifying question may come to an other solution, and the question is *How often will the maximum value be updated to a lower value, or the minimum value be updated to a higher value*.

If the answer is never, then I let you find the `O(1)` solution for each method. If the answer is almost never, then it may be a good idea to calculate the min and the max each time it is updated in the `update()` method. As the answer *never* or *almost never* will never be answered, then I will not share this solution here.

To be honest, you don't have to ask this question, think about time first, so no need to ask too much questions. But when the interviewer will ask you *Is there any way you could improve this algorithm*, then you can share about this scenario, and that in this case, you would calculate the min and max in `update()` directly, without the use of a `TreeSet`.