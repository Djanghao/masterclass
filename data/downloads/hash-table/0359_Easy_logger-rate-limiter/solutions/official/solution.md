# Official Solution

**Link:** [https://leetcode.com/problems/logger-rate-limiter/solution/](https://leetcode.com/problems/logger-rate-limiter/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/824220484" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Queue + Set

#### Intuition

Before we tackle the problem, it is imperative to clarify the conditions of the problem, since it was not explicit in the problem description. Here is one important note:

>It is possible that several messages arrive roughly at the same time.

We could interpret that the input messages are in chronological order, _i.e._ the timestamps of the messages are monotonically increasing, though not _strictly_. This constraint is critical, since it would simplify the task, as one will see in the following solutions.

As a first solution, let us build a solution _intuitively_ following the tasks described in the problem.

>We keep the incoming messages in a **queue**. In addition, to accelerate the check of duplicates, we use a **set** data structure to index the messages.

![pic](../Figures/359/359_deque.png)

As one can see from the above example where the number indicates the timestamp of each message, the arrival of the message with the timestamp `18` would invalidate both the messages with the timestamp of `5` and `7` which go beyond the time window of 10 seconds.

#### Algorithm

- First of all, we use a queue as a sort of sliding window to keep all the printable messages in certain time frame (10 seconds).

- At the arrival of each incoming message, it comes with a `timestamp`. This timestamp implies the evolution of the sliding windows. Therefore, we should first invalidate those _expired_ messages in our queue. 

- Since the `queue` and `set` data structures should be in sync with each other, we would also remove those expired messages from our message set.

- After the updates of our message queue and set, we then simply check if there is any duplicate for the new incoming message. If not, we add the message to the queue as well as the set.

<iframe src="https://leetcode.com/playground/FbxMR5Rd/shared" frameBorder="0" width="100%" height="500" name="FbxMR5Rd"></iframe>

As one can see, the usage of set data structure is not _absolutely_ necessary. One could simply iterate the message queue to check if there is any duplicate.

Another important note is that if the messages are not chronologically ordered then we would have to iterate through the entire queue to remove the expired messages, rather than having _early stopping_. Or one could use some sorted queue such as **Priority Queue** to keep the messages.

#### Complexity Analysis

- Time Complexity: **Amortized** $\mathcal{O}(1)$ per call.
  
  While in the worst case a single call might remove up to $N$ obsolete messages from the queue (where $N$ is the number of messages in the queue), **each message is added and removed at most once**. So over multiple calls, the **total work is linear**, and the average (amortized) cost per call remains constant.

- Space Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the size of the queue. 

  We keep the incoming messages in both the queue and set. The upper bound of the required space would be $$2N$$, if we have no duplicate at all.

---

### Approach 2: Hashtable / Dictionary

#### Intuition

One could combine the queue and set data structure into a **hashtable** or **dictionary**, which gives us the capacity of keeping all unique messages as of queue as well as the capacity to quickly evaluate the duplication of messages as of set.

>The idea is that we keep a hashtable/dictionary with the message as key, and its timestamp as the value. The hashtable keeps all the unique messages along with the latest timestamp that the message was printed.

![pic](../Figures/359/359_hashtable.png)

As one can see from the above example, there is an entry in the hashtable with the message `m2` and the timestamp `2`. Then there comes another message `m2` with the timestamp `15`. Since the message was printed 13 seconds before (_i.e._ beyond the buffer window), it is therefore eligible to print again the message. As a result, the timestamp of the message `m2` would be updated to `15`.

#### Algorithm

- We initialize a hashtable/dictionary to keep the messages along with the timestamp.

- At the arrival of a new message, the message is eligible to be printed with either of the two conditions as follows:

    - case 1). we have never seen the message before.

    - case 2). we have seen the message before, and it was printed more than 10 seconds ago.

- In both of the above cases, we would then update the entry that is associated with the message in the hashtable, with the latest timestamp.

<iframe src="https://leetcode.com/playground/9UjWpJgu/shared" frameBorder="0" width="100%" height="497" name="9UjWpJgu"></iframe>

*Note: for clarity, we separate the two cases into two blocks. One could combine the two blocks together to have a more concise solution.*

The main difference between this approach with hashtable and the previous approach with queue is that in previous approach we do *proactive* cleaning, _i.e._ at each invocation of function, we first remove those expired messages. 

While in this approach, we keep all the messages even when they are expired. This characteristics might become problematic, since the usage of memory would keep on growing over the time. Sometimes it might be more desirable to have the _garbage collection_ property of the previous approach.

#### Complexity Analysis

- Time Complexity: $$\mathcal{O}(1)$$. The lookup and update of the hashtable takes a constant time.

- Space Complexity: $$\mathcal{O}(M)$$ where $$M$$ is the size of all incoming messages. Over the time, the hashtable would have an entry for each unique message that has appeared.

---