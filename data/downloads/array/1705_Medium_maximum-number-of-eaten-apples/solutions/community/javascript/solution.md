# Javascript | Simple Solution w/ Explanation | beats 100% / ~98%

**Author:** sgallivan
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/1000602/](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/1000602/)

---

***Idea:***
First, it should be pointed out that early on, there were some testcases missing that allowed some incorrect answers to be accepted. The code below beats 100% / ~98% of *correctly* accepted solutions with a best result of **88ms / 46.3MB**.

That being said, the challenge that we're faced with in this problem is the fact that we will at times have many apples with many different amounts of time left before rotting, leaving us with the questions: how do we keep track of this information and how do we decide which apples to eat on a given day?

For the latter, the answer is somewhat straightforward: we should always eat the apples that are the soonest to rot while leaving ones with a longer duration for later.

As far as a data structure to keep track of apples and dates, my first thought was a priority queue based on how soon each batch of apples would rot, but then I noticed that the maximum length of **A** and **D** were fairly small at **2e4+1**. Any time you have data that you want to be able to access by a number with a relatively small range, it makes sense to check whether an **Array** will prove more efficient.

` `
***Implementation:***
In this case, since the maximum value for **i** is **2e4** and since the apples can rot up to the maximum value of **days[i]** later (which is also **2e4**), we only need an **Array** with a max index of **4e4**, which is pretty maneagable.

Since we'll likely need to iterate **i** past **A.length**, we'll need to keep track of the **last** possible **i** value (representing the largest **i** value seen), starting with **last = A.length**. We'll also need to use a second pointer **j** for keeping track of from which batch of apples we're currently eating. 

On each new day, we start by incrementing **j** if it falls behind **i**, so we don't eat rotten apples. Then we check if there are any apples to add (**A[i]**) before we do any eating, as sometimes it will be necessary to eat from those apples on the same day. We add the new apples **A[i]** to their expiration date at **times[exp]**. Then, we need to update the values of **j** and **last** if the new **exp** represents a more urgent batch or a new max index.

Once we're done adding any new apples, we need to make sure that **j** is pointing at an index with a defined, non-zero value, so we increment **j** until it is. We can stop if we pass **last**, as we know there won't be any suitable values after that.

Then, if we have found a suitable batch from which to eat, we eat an apple, adding **1** to our **ans** and decreasing **times[j]** by **1**.

Finally, just return **ans**.

` `
***Code:***
```
var eatenApples = function(A, D) {
    let time = new Array(40001), ans = 0, last = A.length
    for (let i = 0, j = Infinity; i <= last; i++) {
        if (j < i) j = i
        if (A[i]) {
            let exp = i + D[i] - 1
            if (time[exp]) time[exp] += A[i]
            else time[exp] = A[i]
            if (exp < j) j = exp
            if (exp > last) last = exp
        }
        while (!time[j] && j < last) j++
        if (time[j]) ans++, time[j]--
    }
    return ans
};
```