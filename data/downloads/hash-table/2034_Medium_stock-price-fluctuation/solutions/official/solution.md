# Official Solution

**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solution/](https://leetcode.com/problems/stock-price-fluctuation/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given a stream of **records** of the **price** of stock at different **timestamps**. We need to implement some functions to get the lowest, highest, and latest price of the stock based on the records provided.     
      
The records do not come in chronological order. Another record with the same timestamp may appear later in the stream, correcting the price of the previous wrong record; this correction can affect the lowest, highest, and latest price of the stock.

Let's walk through an example to make sure we clearly understand what this problem is asking. Suppose the stock prices in increasing order of timestamp are, $$ [2, 10, 3, 3, 5, 9] $$.       
Here, the lowest price of the stock is $$ 2 $$, the highest price is $$ 10 $$, and the latest price is $$ 9 $$.       
- If the $$ 1^{st} $$ record is corrected from $$ 2 $$ to $$ 4 $$, then the lowest price changes from $$ 2 $$ to $$ 3 $$. 
- If the last record is corrected from $$ 9 $$ to $$ 6 $$, then the latest price changes to $$ 6 $$.      
- If $$ 2^{nd} $$ record is corrected from $$ 10 $$ to $$ 20 $$, then the highest price changes to $$ 20 $$. 

Thus, we need to store all the records of the stock price and make corrections when necessary.        
We can use a hashmap to store timestamp as key and price as value, where the correction of records will only take constant time.

Now we need to get the highest and lowest price of the stock. We could think of sorting the stock prices but when an update or an insertion of a new price is made we would need to sort the prices again.

Thus, we will prefer using a data structure that allows us to track the current minimum and maximum values efficiently. We can use a sorted set, sorted map, or min and max-heaps; the intuition will remain the same only the implementation will differ. 
All these data structures keep the elements sorted, and the insertion and removal of elements take only logarithmic time.

---

### Approach 1: Hashed and Sorted Map

**Intuition**

We will use a hashmap (`timestampPriceMap`) to store the price of the stocks. A hashmap stores the elements as key-value pairs. Here, our key is the timestamp and the value is the price of the stock at the respective timestamp, i.e. the hashmap maps `timestamp` to `price`.    

Now, we will use a sorted map (`priceFrequency`) to store the stock prices in increasing order.         
A sorted map also stores the elements as key-value pairs and keeps elements sorted on the basis of the key. Thus, we will store the price of the stocks as the key and its occurrence (count) in our records stream as the value, i.e. the sorted map maps the `price` to the `frequency`. It denotes how many times a price is present in our records stream.

**Insertion of Record:**     
- Insert the stock price at the current timestamp in `timestampPriceMap`.
- Increase the stock price's count in `priceFrequency`. Initially, it is assumed the count is 0 when the price is not present in the map.   

**Updation of Record:**     
- Update the stock price of the current timestamp in `timestampPriceMap`.       
- Decrease the count of the old price from `priceFrequency` and if the count reaches $$ 0 $$ then remove it and increase the correct stock price's count.

**Get the Latest Price:**
- Use one variable to keep track of the latest time and get the stock's price at the latest time from `timestampPriceMap`.

**Get Minimum and Maximum Stock Price:** 
- The first element's key of `priceFrequency` is the lowest price of the stock.
- The last element's key of `priceFrequency` is the highest price of the stock.

!?!../Documents/2034/slideshow1.json:960,540!?!

<br />



**Algorithm**

1. Initialize variables:
    - `latestTime`, variable to store the latest timestamp according to the records.
    - `timestampPriceMap`, a hashmap to store timestamp and prices of the stock.
    - `priceFrequency`, a sorted map to store all prices in increasing order.
2. In the `update` function, the current record can be a new record or a correction to an old record:
    - Try to update `latestTime`, to the current timestamp.
    - If the current timestamp is already present in `timestampPriceMap` it means this record is a correction then we reduce the count of the old price from `priceFrequency`.
    - Add/update the current timestamp's price in `timestampPriceMap`.
    - Increment the count of the current timestamp's price in `priceFrequency`.
3. In the `current` function, we need to return the latest price of the stock, i.e. price of the stock at `latestTime` in `timestampPriceMap`.
4. In the `maximum` function, we need to return the maximum stock price, i.e. the key of the last element in `priceFrequency's`.
5. In the `minimum` function, we need to return the minimum stock price, i.e. the key of the first element in `priceFrequency's`.



**Implementation**

<iframe src="https://leetcode.com/playground/8TK6bMw6/shared" frameBorder="0" width="100%" height="500" name="8TK6bMw6"></iframe>



**Complexity Analysis**

If $$ N $$ is the number of records in the input stream.

* Time complexity: $$ O(N \log N) $$

  - In the `update` function, we add and remove a record in both hashmap and sorted map. In hashmap, both operations take constant time, but in the sorted map they take $$ O(\log N) $$ time.

  - Each call to the `maximum`, `minimum`, or `current` function will take only constant time to return the result.
    > But in Java, getting first or last element of tree map takes `log(N)` time. Thus, here `maximum`, `minimum` functions will take `O(log(N))` time for each function call.
  
  - In the worst-case scenario, all $$ N $$ calls will be to the `update` function, which will require a total of $$ O(N \log N) $$ time. 


* Space complexity: $$ O(N) $$

  -  In the `update` function, we add and remove a record in both the hashmap and sorted map. Thus each function call takes $$ O(1) $$ space. So for $$ N $$ update calls, it will take $$ O(N) $$ space.

  - The `maximum`, `minimum`, and `current` functions do not use any additional space.

  - Thus, in the worst-case, we will add all $$ N $$ records in both the hashmap and sorted map, which takes $$ O(N) $$ space.

<br />

---



### Approach 2: Hashmap and Heaps

**Intuition**

In this approach, again, we will use a hashmap (`timestampPriceMap`) to record the stock's price at each `timestamp`. 

However, it is not necessary for us to maintain a sorted map as we did in the previous approach. Any time we need to efficiently keep track of the lowest or highest value, we should consider using a heap data structure. Here, we will store each record in 2 different heaps, a min-heap to efficiently track the lowest stock price and a max-heap to efficiently track the highest stock price.

Now the real challenge will be, how to update stock prices?     
We can directly change the stock price in the hashmap, but in the heaps, we would have to pop all stock prices until the old price comes on top and then push the new price and all other popped prices back. This would make the update operation very costly.

One way to resolve this issue is every time we get a new price, we push it into each heap, and only while getting the top element we need to verify if the price is correct or outdated.   

But how do we know which prices are outdated?        
For this, we can use our hashmap (`timestampPriceMap`). Every time we receive a `(price, timestamp)` pair, we will set the value for the key (`timestamp`) to the given `price`. If the `timestamp` already exists in the hashmap, we overwrite the old price. 
So, when finding the maximum or minimum price, we will check to see if the `(price, timestamp)` pair on the top of the heap agrees with the `price` listed for the `timestamp` in the hashmap. If it does not, then the price is outdated, and we discard this pair and get the next top element and again check with the hashmap.           


**Insertion/Updation of Record:**     
- Insert/Update the stock price at the current timestamp in `timestampPriceMap`.
- Push the `(price, timestamp)` pair into the `minHeap` and `maxHeap`.  

**Get the Latest Price:**
- Use one variable to keep track of the latest time and get the stock's price at the latest time from `timestampPriceMap`.

**Get Minimum and Maximum Stock Price:** 
- Get the `(price, timestamp)` pair from the top of `minHeap`/`maxHeap`.
- If `timestampPriceMap[timestamp] != price`, it means the price for the current `timestamp` was updated and that this `price` is outdated. So we discard this pair and repeat the above step. Otherwise, return the current `price`.

!?!../Documents/2034/slideshow2.json:960,540!?!

<br />



**Algorithm**

1. Initialize variables:
    - `latestTime`, variable to store the latest timestamp according to the records.
    - `timestampPriceMap`, a hashmap to store timestamp and prices of the stock.
    - `minHeap, maxHeap`, heaps to store `(price, timestamp)` pairs and sort elements based on `price`.
2. In the `update` function, the current record can be a new record or a correction to an old record:
    - Try to update `latestTime`, to the current timestamp.
    - Add/update the current timestamp's price in `timestampPriceMap`.
    - Push `(price, timestamp)` pair in the heaps.
3. In the `current` function, we need to return the latest price of the stock, i.e. price of the stock at `latestTime` in `timestampPriceMap`.
4. In the `maximum` / `minimum` function, we get the `(price, timestamp)` pair from the top of `maxHeap` / `minHeap`. If `timestampPriceMap[timestamp]` is not same as `price`, we discard this pair and repeat the same step again. Otherwise, return the current `price`.

**Implementation**

> **Note:** In python, in min-heap we push stock prices after multiplying with `-1` so that the min-heap behaves as a max-heap. This helps in keeping the implementation simpler.    

<iframe src="https://leetcode.com/playground/AWB3W6HW/shared" frameBorder="0" width="100%" height="500" name="AWB3W6HW"></iframe>


**Complexity Analysis**

Let $$ N $$ be the number of records in the input stream.

* Time complexity: $$ O(N \log N) $$

  - In the `update` function, we add one record to the hashmap and to each heap. Adding the record to the hashmap takes constant time. However, for a heap, each push operation takes $$ O(\log N) $$ time. So for $$ N $$ update calls, it will take $$ O(N\log N) $$ worst-case time.

  - Each `current` function call takes only constant time to return the result. 
  
  - In the `maximum` and `minimum` functions, we pop any outdated records that are at the top of the heap. In the worst-case scenario, we might pop $$ (N - 1) $$ elements and each pop takes $$ O(\log N) $$ time, so it might seem for one function call the time complexity is $$N \log N$$, so for $$ N $$ functions calls it could be $$ N^{2} \log N $$. 
  However, when we pop a record from the heap, it's gone and won't be popped again. So overall, if we push $$N$$ elements into a heap, we cannot pop more than $$N$$ elements, taking into account all function calls. Thus, calls to `maximum` and `minimum` will at most require $$ O(N \log N) $$ time.



* Space complexity: $$ O(N) $$

  -  In the `update` function, we add a record to the hashmap and each heap. Since each stock price takes $$ O(1) $$ space, for $$ N $$ update calls, it will take $$ O(N) $$ space.

  - The `current` function does not use any additional space.

  - In the `maximum` and `minimum` functions, we only remove elements from the heap thus these functions also do not use any additional space.

  - Thus, in the worst-case, we will add all $$ N $$ records to the hashmap and to both heaps, which takes $$ O(N) $$ space.