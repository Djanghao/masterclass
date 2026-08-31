# Official Solution

**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solution/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solution/)

---

[TOC]

## Solution

--- 

### Overview

This problem is a variation of the classic task-scheduling problem. The tricky part is finding the correct available server (For convenience, we will call those idle servers **free**, as opposed to **busy** servers handling requests). 
When we want to assign request `i` to a server, we must start trying the `i % k`-th server, then the `i % k + 1`-th server, and so forth. This requirement makes the problem seem a little tricky at first glance. But no worries, we will present two approaches to solve it! 


---

### Approach 1: Sorted Containers.


#### Intuition   


Servers only have two states: busy or free. Naturally, we store them separated by availability state into two containers, `busy` and `free`.
When a server having free state is assigned a request, we move it from `free` to `busy`. Similarly, when a busy server has finished its request, we move it from `busy` to `free`. That sounds like a good idea, doesn't it?




> How do we store busy servers?

Each request `i` has two parameters: arrival `arrival[i]` and load `load[i]`, so we have the starting time `arrival[i]` and the ending time `arrival[i] + load[i]` of each request. Whenever we have a new request, we should look into servers in `busy` and check if any server has finished its task. It indicates that we should store each busy server in `busy` in a format similar to `(ending time, server ID)`. 




During the process, we may have to keep adding busy servers to `busy` and remove free servers from `busy`. The priority queue is a suitable data structure to store busy servers according to their ending times. 
Therefore, we don't need to iterate over the entire `busy` to find the free ones and always look for the server on top of the queue having the earliest ending time.    



> How do we store free servers?

Suppose we have moved all free servers from `busy` to `free`. Now its time to pick the correct one for request `i`. How do we find this target server?

![img](../Figures/1606/1606-1_1.png)

We can surely use the brute force approach, that is to iterate over `free` by ID from `i % k`, `i % k + 1`, `i % k + 2`, and so on until we find the correct one, but it takes a linear time for each request in the worst-case scenario.



We can improve this time complexity by keeping the free servers in sorted order, so we can use a binary search to locate the correct server in logarithmic time! Hence, we shall maintain servers in `free` sorted by their IDs. There are built-in data structures (set in C++, TreeSet in Java, sortedList in Python) that keep elements sorted and allow us to insert, remove, or perform binary search in a logarithmic time. We can use them to maintain the free servers.


According to the question, when we are assigning task `4` to the a server, we are looking for the the smallest server ID that is equal to or greater than `4 % i`, which is also the insert position of `4 % 3 = 1` to `free`. Therefore, we can perform a binary search on `free`. If the IDs of all free servers are smaller than `i % k`, we have to pick the one with the smallest ID.

As shown in the picture below, the sorted IDs of free servers are `free = [0, 2]`, we find the insert position of `1` to `free` is `1`, so we assgin this task to server `free[1] = 2`. 

![img](../Figures/1606/1606-1_2.png)

More examples are shown in the picture below: we find that the `4` is the smallest server ID that is no less than `2`, thus we assign task `2` to server `4`; In the case on the right, all servers have IDs less than `7`, so we assign task `7` to the server with the smallest ID `1`.

![img](../Figures/1606/1606-bs.png)

Now let's look at how requests in example 1 are assigned.



!?!../Documents/1606/s2.json:601,241!?!


<br>

#### Algorithm

1) Initialize an empty priority queue `free` and a sorted container `busy` to store free servers and busy servers separately.
2) Use an array `count` of size `k` to record the workload of each server.
3) Add all `k` servers to `free`.
4) Iterate over requests, for each request `[start[i], load[i]]`, do the following steps by order:
   i) If there are servers that become free before `start[i]`, we remove them from `busy` and add them to `free`.
   ii) If there is no server in `free`, abandon this request by repeating step 4.
   iii) Otherwise, perform a binary search on `free` to find the first server larger than or equal to `i`. If all servers are smaller than `i`, choose the smallest one to handle this request. Increment the workload of this server by 1 and repeat step 4.
5) After the iteration stops, collect all servers having the maximum workload.

#### Implementation

<iframe src="https://leetcode.com/playground/UNCwjEBh/shared" frameBorder="0" width="100%" height="500" name="UNCwjEBh"></iframe>


#### Complexity Analysis

Let $$k$$ be the number of servers and $$n$$ be the size of the input array `arrival`, that is, the number of requests.

* Time complexity: $$O(n \cdot \log k)$$

    - We used a priority queue `busy` and a sorted container `free`.
    - Operations like adding and removing in the priority queue take logarithmic time. Since there may be at most $$k$$ servers stored in the priority queue, thus each operation takes $$O(\log k)$$ time.


    - Sorted containers are implemented using a red-black tree, and operations like inserting, deleting, and performing a binary search on the red-black tree take $$O(\log k)$$ time.


    - In each step, we perform multiple operations on `busy` and `free`. Therefore, the overall time complexity is $$O(n \cdot \log k)$$.
    

* Space complexity: $$O(k)$$

    - The total number of servers stored in `busy` and `free` is $$n$$, so they take $$O(k)$$ space.
    - We used an array `count` to record the number of requests handled by each server, which takes $$O(k)$$ space.
    - To sum up, the overall time complexity is $$O(k)$$.

<br/>



---

### Approach 2: Two Priority Queues

#### Intuition   

In the previous approach, we relied on some built-in functions to help maintain free servers in sorted order. Here we also introduce a method that does not require binary search nor a complex sorting container, but simply two priority queues. Let's get into it now!



Let's temporarily change the conditions of the topic a little: whenever we have a request, we want to assign it to the **smallest** free server. 
Now the problem becomes much easy;
 We just need another priority queue named `free` to maintain a min-heap of all free servers. Each time we encounter a new request, pop the first server from the `free` queue that is guaranteed to be the smallest one.


Back to this problem, what will happen if we still use a priority queue to store free servers? Will we still get the correct result?

Let's look at the example below. We want to assign request `4` to a server. Since all free servers are stored in `free` by their IDs, assign it to the server on the top of `free`, that is, server `0`.


![img](../Figures/1606/1606-1_1.png)

Oops, this is the wrong choice! This request should be assigned to server `1` but is assigned to server `0`! We use a priority queue as the container, so the first available server always has the smallest ID, regardless of what ID we want first. 

This implies that we can't simply add the free server back to the `free` queue with its **original ID**, we can try modifying its ID before adding it to `free`. 



![img](../Figures/1606/1606-test2.png)


But this is certainly not a random modification, and we must change the ID according to these rules:

- The modified ID represents its priority to be assigned to a request `i`. In other words, the smallest ID represents the correct server for request `i`. 
Suppose we have two free servers, `0` and `2`, and the current `i % k` is `1`. In this case, we should choose server `2`, so the modified ID of server `2` should be **smaller than** that of server `0` (meaning server `2` has a higher priority than server `0`).


- The modified ID is still mapped to its original ID so that we can track a server by its modified ID.

Hence, we can increment each ID by multiple `k` to make it equal to or greater than `i`. Therefore, the value of the modified ID represents its priority to be assigned to task `i`, and we can always get its original ID by taking the remainder of this ID to `k`. Back to the problem, we add `3` to both servers `0` and `2` to make them `3` and `5`. Now both modified IDs are no less than `3`, and we assign task `3` to the server with the smaller modified ID (server `2`).



![img](../Figures/1606/1606-test3.png)



Now, we can always get the correct server for each request. Refer to the slides below!


!?!../Documents/1606/s1.json:601,241!?!

<br>

#### Algorithm

1) Initialize an empty priority queue named `free` and a sorted container  `busy` to store free and busy servers separately.
2) Use an array `count` of size `k` to record the workload of each server.
3) Put all `k` servers to `free`.
4) Iterate over requests, for each request `[start[i], load[i]]`, do the following steps by order:
5) Remove free servers from `busy`, increment their IDs by multiple `k`s to make them no less than `i`, and add them to `free`.

6) If there are free servers in `free`, remove the first one and get its original ID `busy_id` by taking the residual of `k` for the modified ID, add this server to `busy`, and increment `count[busy_id]` by 1. 


   - Otherwise, this request is abandoned, as we currently have no free server.

   Repeat step 4.
7) After the iteration stops, collect all servers having the maximum workload.


#### Implementation

<iframe src="https://leetcode.com/playground/ehEcWLfN/shared" frameBorder="0" width="100%" height="500" name="ehEcWLfN"></iframe>


#### Complexity Analysis

Let $$k$$ be the number of servers and $$n$$ be the size of the input array `arrival`, that is, the number of requests.

* Time complexity: $$O(n \cdot \log k)$$

    - We used two priority queues named `busy` and `free` to store all servers, each operation like adding and removing in a priority queue of size $$O(k)$$ takes $$O(\log k)$$ time. 

    - In each iteration step, we make several operations on `busy` and `free` that take $$O(\log k)$$ time. 

    - Therefore, the overall time complexity is $$O(n \cdot \log k)$$.
    

* Space complexity: $$O(k)$$

    - We used two priority queues named `busy` and `free` to store all servers, that take $$O(k)$$ space.
    - We used an array `count` to record the number of requests handled by each server, which also takes $$O(k)$$ space.
    - To sum up, the overall time complexity is $$O(k)$$.

<br/>