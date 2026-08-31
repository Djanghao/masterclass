# Official Solution

**Link:** [https://leetcode.com/problems/design-log-storage-system/solution/](https://leetcode.com/problems/design-log-storage-system/solution/)

---

[TOC]



## Solution

---
### Approach #1 Converting timestamp into a number [Accepted]

This solution is based on converting the given timestap into a number. This can help because retrieval of Logs lying
within a current range can be very easily done if the range to be used can be represented in the form of a single number.
Let's look at the individual implementations directly.

1. `put`: Firstly, we split the given timestamp based on `:` and store the individual components obtained into an $$st$$ array.
Now, in order to put this log's entry into the storage, firstly, we convert this timestamp, now available as individual components 
in the $$st$$ array into a single number. To obtain a number which is unique for each timestamp, the number chosen is such that 
it represents the timestamp in terms of seconds. But, doing so for the Year values can lead to very large numbers, which could 
lead to a potential overflow. Since, we know that the Year's value can start from 2000 only, we subtract 1999 from the Year's value 
before doing the conversion of the given timestamp into seconds. We store this timestamp(in the form of a number now), along with the 
Log's id, in s $$list$$, which stores data in the form $$[converted\_timestamp, id]$$. 

2. `retrieve`: In order to retrieve the logs' ids lying within the timestamp $$s$$ and $$e$$, with a granularity $$gra$$, firstly, we 
need to convert the given timestamps into seconds. But, since, we need to take care of granularity, before doing the conversion, we 
need to consider the effect of granularity. Granularity, in a way, depicts the precision of the results. Thus, for a granularity corresponding to 
a Day, we need to consider the portion of the timestamp considering the precision upto Day only. The rest of the fields 
can be assumed to be all 0's. After doing this for both the start and end timestamp, we do the conversion of the timestamp with the 
required precision into seconds. Once this has been done, we iterate over all the logs in the $$list$$ to obtain the ids of those 
logs which lie within the required range. We keep on adding these ids to a $$res$$ list which is returned at the end of this function call.

<iframe src="https://leetcode.com/playground/zHbRZ2y6/shared" frameBorder="0" name="zHbRZ2y6" width="100%" height="515"></iframe>
**Performance Analysis**

* The `put`method takes $$O(1)$$ time to insert a new entry into the given set of logs.

* The `retrieve` method takes $$O(n)$$ time to retrieve the logs in the required range. Determining the granularity takes $$O(1)$$ time. But, to find the logs lying in the required range, we need to iterate over the set of logs atleast once. Here, $$n$$ refers to the number of entries in the current set of logs.


---
### Approach #2 Better Retrieval [Accepted]

This method remains almost the same as the last approach, except that, in order to store the timestamp data, we make use 
of a TreeMap instead of a list, with the key values being the timestamps converted in seconds form and the values being the 
ids of the corresponding logs.

Thus, the `put` method remains the same as the last approach. However, we can save some time in `retrieve` approach by making use 
of `tailMap` function of TreeMap, which stores the entries in the form of a sorted navigable binary tree. By making use of this function, instead of iterating over all the timestamps in 
the storage to find the timestamps lying within the required range(after considering the granularity as in the last approach),
we can reduce the search space to only those elements whose timestamp is larger than(or equal to) the starting timestamp value.


<iframe src="https://leetcode.com/playground/5bhZzaNE/shared" frameBorder="0" name="5bhZzaNE" width="100%" height="515"></iframe>
**Performance Analysis**

* The TreeMap is maintained internally as a Red-Black(balanced) tree. Thus, the `put`method takes $$O\big(log(n)\big)$$ time to insert a new entry into the given set of logs. Here, $$n$$ refers to the number of entries currently present in the given set of logs.

* The `retrieve` method takes $$O(m_{start})$$ time to retrieve the logs in the required range. Determining the granularity takes $$O(1)$$ time. To find the logs in the required range, we only need to iterate over those elements which already lie in the required range. Here, $$m_{start}$$ refers to the number of entries in the current set of logs which have a timestamp greater than the current $$start$$ value.