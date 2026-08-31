# Official Solution

**Link:** [https://leetcode.com/problems/design-underground-system/solution/](https://leetcode.com/problems/design-underground-system/solution/)

---

[TOC]

## Solution

---

If you were asked this question in a real interview, you should expect to discuss real-world issues related to it. For example, it would not be realistic to store the data in volatile computer memory. In practice, computers fail (e.g. lose power) so we need to store the data in a permanent medium, such as a database. 

Additionally, we might need to consider scalability. In a large city, such as Tokyo, the metro system gets 7 million passenger trips per day! With a little math, we can quickly estimate that during peak travel time, there must be *thousands* of check-ins and check-outs every *second*. This is a lot of data that one computer would need to receive through its network connection! To make this work, we'd probably be using more than one computer. This introduces concurrency issues that would need to be addressed.

It's also likely that this module would have to fit in with other code in the passenger-tracking system. It's not likely that a little average time tracker will get exclusive use of all resources.

For your actual implementation, you'll probably be expected to use `HashMap`s. This is common in system design interview questions: you're given a complex real world problem to explore and then are asked to implement a small piece of it.

<br/>

---

### Approach 1: Two HashMaps

**Intuition**

The first thing to do when faced with a design problem like this one is to carefully read through what each of the methods needs to do. Observe that two of the methods take input but don't return anything; `checkIn(...)` and `checkOut(...)`. On the other hand, the `getAverageTime(...)` method both takes input and returns a value. 

This effectively means that there's only one place the data structure needs to *output* data. Therefore, a good place to start is by looking at what exactly `getAverageTime(...)` needs to return, and what it needs to do this. `getAverageTime(...)` takes two input parameters; a start station and an end station. It then needs to return the average trip time between these two stations. This means that we need to somehow obtain "trip times", collated by a pair of stations; start and end. We could represent this data as a table of some kind. We'll talk more about this in a bit!

![Table of sample trip times](../Figures/1396/trip_times.png)

The "trip times" are obtained, unsurprisingly, through the `checkIn(...)` and `checkOut(...)` methods. A customer with a given `id` checks into station `stationName` at time `t`, using the `checkIn(...)` method. At some point in the future, the customer checks out with the `checkOut(...)` method. The input to the `checkOut(...)` method is the same `id`, but a different `stationName` and `t`, representing the exit station and exit time. The start station, end station, start time, and end time (that were all under the same `id`) can be used to calculate a journey time between the start station and end station, that could be entered into the table we discussed above.

![Table of sample check in times and stations](../Figures/1396/check_in_table.png)

The `checkIn(...)` and `checkOut(...)` method calls for a customer with a particular `id` aren't necessarily made one-after-the-other. In fact, many other customers could have been processed in-between. We'll need to store the entry station and time that go with a particular customer `id` so that we can then get them back when that same customer `id` does a `checkOut(...)`. One way we could do this is to use `HashMap`s to map `id`s to check-in stations and times.

```text

averagesTable = a table of some kind
checkInTimes = a new HashMap (id -> checkInTime)
checkInStations = a new HashMap (id -> stationName)
 
define function checkIn(id, stationName, t):
    checkInTimes.put(id, t)
    checkInStations.put(id, stationName)

define function checkOut(id, stationName, t):
    startTime = checkInTimes.get(id)
    startStation = checkInStations.get(id)
    journeyTime = t - startTime
    journey = (startTime, startStation)
    # We'll worry about how exactly this bit works soon...
    averagesTable.enter(journey, journeyTime)
```

Now when `getAverageTime(...)` is called, we can look in `averagesTable` for the information needed to answer the query. Let's go back to looking at how we could represent the `averagesTable`.

One way is to use a `HashMap` that maps pairs of stations to `List`s of journey times. Then when `getAverageTime(...)` is called, it could look up the relevant `List`, add the times in it together, and then divide by the number of times that were in the list (this is the standard way of calculating an average).

![Table of sample trip times with average time column](../Figures/1396/trip_times_with_average_time.png)

Instead of needing to add them up every time though, we could just store the total so far. This will work fine, seeing as we never need to re-access the individual journey times. If we do this, we'll also need to store the total number of journeys. Then with these 2 pieces of information, we can calculate the average time with $$O(1)$$ time complexity. This is a lot better than storing a list of individual journey times; repeated calls to `getAverageTime(...)` would have, in the worst case, repeatedly added thousands of times together. 

Our `checkOut(...)` function should be modified as follows.

```text
journeyTotals = a new HashMap (startStation, endStation -> total)
numberOfJourneys = a new HashMap (startStation, endStation -> count) 

define function checkOut(id, stationName, t):
    startTime = checkInTimes.get(id)
    startStation = checkInStations.get(id)
    journeyTime = t - startTime
    journey = (startTime, startStation)
    set journeyTotals.get(journey) to journeyTotals.get(journey) + journeyTime
    set numberOfJourneys.get(journey) to numberOfJourneys.get(journey) + 1
```

Using these new data structures, `getAverageTime(...)` can be implemented as follows.

```text
define function getAverageTime(startStation, endStation):
    journey = (startTime, startStation)
    total = journeyTotals.get(journey)
    count = numberOfJourneys.get(journey)
    return total / count
```

One detail we overlooked earlier was deleting data from `checkInTimes` and `checkInStations` after the corresponding call to `checkOut(...)`. Seeing as we can assume `checkIn(...)` and `checkOut(...)` calls are always valid, we know that if the user with `id` comes back later, after doing their `checkOut(...)`, that they must now be doing a `checkIn(...)`. This will *overwrite* the *old* check-in data, without causing any issues. In short, we don't *have* to explicitly delete the old data.

However, it would actually be better to delete the data. We don't need it (hence the reason it being overwritten isn't an issue), and in fact keeping it around will slowly increase the memory usage of the program over time. This is because every `id` that had ever used the program will have an entry in the check-in tables. If, instead, we delete the old entries, then only `id`s that are currently undergoing a journey (have checked-in but not checked-out) will be in the table. Removing old entries is an $$O(1)$$ time complexity operation. Therefore, it's best to remove the entries to save memory.

**Algorithm**

Some of the implementation design decisions here have no "right" answer.

***Saving the total time vs the average time***

One design decision we need to make is whether to *store* the total-time or the average-time for each possible route. The benefit of storing the average-time is that the system will be able to store a lot more data before being affected by overflow (remember, the total-count is always *eventually* going to be affected). The downside of storing average-time though is that we need to update it with division every time a new journey is made on that route. This leads to compounded floating-point error. 

Given that overflow isn't an issue with the problem constraints we're given here, it's safest to store the total-time so that we can avoid the floating-point error. In a real world system, you would use a `Decimal` library that supports arbitrary precision and doesn't suffer from floating-point error.

***Number of HashMaps to use***

In the discussion above, we broke the data into 4 separate `HashMaps`. While this would be an okay way to implement it, we often group similar data together. This would give us the following two `HashMaps`:

```text
checkInData = a new HashMap (id -> startStation, checkInTime)
journeyData = a new HashMap (startStation, endStation -> total, count)
```

In a realistic system, there's likely to be more operations than just `getAverageTime(...)`, and the data will likely be put into and pulled from a database. Database design is another massive area of system design where many factors need to be taken into account to come up with the design that best achieves what is needed for the particular queries that will need to be answered.

Here, we chose to use the `Pair` class for the Java implementation, but whether or not this is good design is probably down to personal preference. It does have the benefit of being less code to write (and less whiteboard space in an interview!). However, it is a bit contextually strange that one member of the `Pair` is known as "the key" and the other as "the value".

Where we need to represent a key with both a start station and an end station, the code below appends the strings with a `->` between them to make a single string. This is safe for the constraints we're given, as station names can only be letters or numbers. In a real world system, this would need to be thought through carefully. In Python, we can simply use a tuple as the key (without the code becoming needlessly verbose).

Other options would include using nested `HashMaps` or defining your own objects.

<iframe src="https://leetcode.com/playground/J99BWPxJ/shared" frameBorder="0" width="100%" height="500" name="J99BWPxJ"></iframe>


**Complexity Analysis**

- Time complexity : $$O(1)$$ for all.

    - `checkIn(...)`: Inserting a key/value pair into a `HashMap` is an $$O(1)$$ operation.  

    - `checkOut(...)`: Additionally, getting the corresponding value for a key from a `HashMap` is also an $$O(1)$$ operation.

    - `getAverageTime(...)`: Dividing two numbers is also an $$O(1)$$ operation.

- Space complexity : $$O(P + S^2)$$, where $$S$$ is the number of stations on the network, and $$P$$ is the number of passengers making a journey concurrently during peak time.

    - The program uses two `HashMap`s. We need to determine the maximum sizes these could become.

    - Firstly, we'll consider `checkInData`. This `HashMap` holds one entry for each passenger who has `checkIn(...)`ed, but not `checkOut(...)`ed. Therefore, the maximum size this `HashMap` could be is the maximum possible number of passengers making a journey at the same time, which we defined to be $$P$$. Therefore, the size of this `HashMap` is $$O(P)$$.

    - Secondly, we need to consider `journeyData`. This `HashMap` has one entry for each pair of stations that has had at least one passenger start and end a journey at those stations. Over time, we could reasonably expect every possible pair of the $$S$$ stations on the network to have an entry in this `HashMap`, which would be $$O(S^2)$$.

    - Seeing as we don't know whether $$S^2$$ or $$P$$ is larger, we need to add these together, giving a total space complexity of $$O(P + S^2)$$.

<br/>