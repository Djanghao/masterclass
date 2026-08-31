# Share my O(NlogN) C++ solution with proof and explanation

**Author:** KJer
**Votes:** 138
**Link:** [https://leetcode.com/problems/beautiful-array/solutions/187669/](https://leetcode.com/problems/beautiful-array/solutions/187669/)

---

---
## 1. Problem

---
For some fixed ```N```, an array ```A``` is *beautiful* if it is a permutation of the integers ```1, 2, ..., N```, such that:

For every ```i < j```, there is **no** ```k``` with ```i < k < j``` such that ```A[k] * 2 = A[i] + A[j]```.

Given ```N```, return **any** beautiful array ```A```.  (It is guaranteed that one exists.)

**Example 1:**
```
Input: 4
Output: [2,1,4,3]
```
**Example 2:**
```
Input: 5
Output: [3,1,2,5,4]
```
Note:

* ```1 <= N <= 1000```

---
## 2. Thinking process

---
#### 2.1 Analysis

---
The problem is to make a permutation of integers 1 to N in an array A. For every i < j, there is no k with i < k < j such that A[k] * 2 = A[i] + A[j].

**A[k]** here is the **average number of A[i] and A[j]**, which means the rule here can be expressed as

>#### There is **no average number of A[i] and A[j] between A[i] and A[j]** (i < j).

At first glance, the rule is a little bit complicated, but we can find an **interesting fact**.

The **fact** is

>#### **The average number of an odd number and an even one is not an integer.**

---
#### 2.2 First level partition

---

In order to explain the problem easily, here we take **N = 10** as an example.

The numbers to be processed are

**Universal set:**
>#### **S = [1,2,3,4,5,6,7,8,9,10]**.

Now it is divided into 2 subsets **S1** and **S2**:

**Subset 1 (odd):**
>#### **S1 = [1,3,5,7,9]**.

In **S1**, 
>#### the **0-th binary digit(LSB) of all elements** are **same (equals 1)**.
which means for **all A[i] \u2208 S1**
>#### **A[i] & 1 \u2260 0**.

**Subset 2 (even):**
>#### **S2 = [2,4,6,8,10]**.

In **S2**, 
>#### the **0-th binary digit(LSB) of all elements** are **same (equals 0)**.
which means for **all A[i] \u2208 S2**
>#### **A[i] & 1 = 0**.

Now think about the average of **all A[i]-A[j] pairs** (i < j) in the **universal set**, there are **3 situations**:
1. **one** from **S1**, **the other** also from **S1**. **The average** may be
    * in **S1** (for example: 1 and 5, the average is 3).
    * in **S2** (for example: 1 and 3, the average is 2).
2. **one** from **S2**, **the other** also from **S2**. **The average** may be
    * in **S1** (for example: 2 and 4, the average is 3).
    * in **S2** (for example: 2 and 6, the average is 4).
3. **one** from **S1**, **the other** from **S2**. **The average** is **NOT** in **both S1 and S2**.

If we put all numbers of **S1** **before** all numbers of **S2**, we will get a permutation
>#### [**1**,**3**,**5**,**7**,**9**,*2*,*4*,*6*,*8*,*10*].

In this case, there are no need for us to worry about situation 3.
>#### **S1** and **S2** may be processed **separately**.

But how?

---
#### 2.3 Second level partition

---
In section 2.2, although the position of a certain element in S hasn't been determined yet, the relative position of all S1 elements and S2 elements has been determined.

The **Exclusion Rule** is
>#### After **dividing the universal set S into 2 subsets S1 and S2**, it should be **guaranteed** that
>#### For **any A[i] \u2208 S1, A[j] \u2208 S2**, **the average of A[i] and A[j] will NOT appear in BOTH S1 and S2.**

If the **universal set** is **S1 in section 2.2**, can it be divided into **2 new Subsets** following the **Exclusion Rule**?

Since **S1 is an odd set**, all its elements p can be expressed as
>#### **p = 2k + 1**.

Choosing 2 elements **m, n \u2208 S1**, if

>#### **m = 2x + 1, n = 2y + 1**.

the average will be

>#### **(m + n)/2 = x + y + 1**.

As the rule says, if S1 can be divided into 2 subsets, the average

>#### **x + y + 1** is **not in S1**.

which means

>#### **x + y + 1** is **even**, **x + y** is **odd**.
>#### **x** and **y** have **different parity**.

Now S1 can be divided into 2 subsets according to k = (A[i] - 1) / 2.
**Subset 1.1 (odd k):**
>#### **S11 = [3,7]**.

In **S11**, 
>#### **the 1-st, 0-th binary digits of all elements** are **same (equals 11)**.
which means for **all A[i] \u2208 S11**
>#### **A[i] & 2 \u2260 0**.

**Subset 1.2 (even k):**
>#### **S12 = [1,5,9]**.

In **S12**, 
>#### **the 1-st, 0-th binary digits of all elements** are **same (equals 01)**.
which means for **all A[i] \u2208 S12**
>#### **A[i] & 2 = 0**.

---

Now we focus on S2.

If the **universal set** is **S2 in section 2.2**, can it be divided into **2 new Subsets** following the **Exclusion Rule**?

Since **S2 is an even set**, all its elements p can be expressed as
>#### **p = 2k**.

Choosing 2 elements **m, n \u2208 S2**, if

>#### **m = 2x, n = 2y**.

the average will be

>#### **(m + n)/2 = x + y**.

As the rule says, if S2 can be divided into 2 subsets, the average

>#### **x + y** is **not in S2**.

which means

>#### **x + y** is **odd**.
>#### **x** and **y** have **different parity**.

Now S2 can be divided into 2 subsets according to k = A[i] / 2.
**Subset 2.1 (odd k):**
>#### **S21 = [2,6,10]**.

In **S21**, 
>#### **the 1-st, 0-th binary digits of all elements** are **same (equals 10)**.
which means for **all A[i] \u2208 S21**
>#### **A[i] & 2 \u2260 0**.

**Subset 2.2 (even k):**
>#### **S22 = [4,8]**.

In **S22**, 
>#### **the 1-st, 0-th binary digits of all elements** are **same (equals 00)**.
which means for **all A[i] \u2208 S22**
>#### **A[i] & 2 = 0**.

After first and second level partition, the permutation becomes
>#### [**3**,**7**,*1*,*5*,*9*,***2***,***6***,***10***,4,8].

---
#### 2.4 Two guesses

---
If A[i]'s binary representation is

>#### **A[i] = M(r)M(r-1)M(r-2)...M(0), M(i) = 0 or 1, 0 \u2264 i \u2264 r, r > 0**.

The **first level partition** focuses on **A[i] & 1 - in other words, the 1st LSB M(0)**.

* If M(0) = 1, A[i] \u2208 S1. If M(0) = 0, A[i] \u2208 S2.

The **second level partition** focuses on **A[i] & 2 - in other words, the 2nd LSB M(1)**.

* If M(0) = 1,
  * If M(1) = 1, A[i] \u2208 S11.
  * If M(1) = 0, A[i] \u2208 S12.
* If M(0) = 0,
  * If M(1) = 1, A[i] \u2208 S21.
  * If M(1) = 0, A[i] \u2208 S22.

**......**

we can infer that the **Partition Rule** is
>#### The k-th (k > 0) level partition is based on A[i] & 2^(k - 1) - in other words, the k-th LSB M(k-1) is 1 or 0.

As shown in section 2.2 and 2.3,

After **first level partition**,

>#### The **0-th binary digit (1 least significant bit, LSB)** of all elements in S1 (or S2) are **same**. 

After **second level partition**,

>#### The **1-st, 0-th binary digits (2 LSBs)** of all elements in S11 (or S12, S21, S22) are same.

**......**

we guess

**Guess A:**
If we follow the **Partition Rule**,

>#### **after k-th (k > 0) level partition, the k LSBs of all elements in each generated subsets are same.**

**Guess B:**
If we follow the **Partition Rule**,

>#### **the generated subsets will ALWAYS satisfy the Exclusion Rule in section 2.3.**

---
#### 2.5 Proof

---
In order to prove Guess A and B, the mathematical Induction is applied.

**Guess A:**

if we follow the **Partition Rule**

**Base case:**

When k = 1, as shown in section 2.2,

after first level partition, the LSB of all elements in each generated subsets (S1 or S2) are same.

**Step case:**

After k-th level partition, the k LSBs of all elements in each generated subsets are same.

Choosing any subset U generated after k-th level partition,

supposing the k+1 LSBs of one element x \u2208 U is M(k)M(k-1)...M(0).

when doing the k+1-th partition, the binary digit M(k) will be checked,

* If M(k) = 1, x \u2208 U1.
* If M(k) = 0, x \u2208 U2.

Before k+1-th partition, all elements in U have same M(k-1)...M(0).

After k+1-th partition, all elements with same M(k) are put into one subset, which means

>#### **all elements in U1 (or U2) have same M(k)M(k-1)... M(0) (k + 1 LSBs). Proved.**

---
**Guess B:**

For any elements A[i] \u2208 S1, A[j] \u2208 S2, if we follow the **Partition Rule**,

**Base case:**

When k = 1, as shown in section 2.2,

if we follows the **Partition Rule**, the average of any A[i]-A[j] pair is not an integer. (not in both S1 and S2).

**Step case:**

As proved Guess A, after k-th level partition, the k LSBs of all elements in each generated subsets are same.

Choosing any subset U generated after k-th level partition,

supposing the k+1 LSBs of one element x \u2208 U is M(k)M(k-1)...M(0).

when doing the k+1-th partition, the binary digit M(k) will be checked,

- If M(k) = 1, x \u2208 U1.
- If M(k) = 0, x \u2208 U2.

Choosing any A[i] \u2208 U1, A[j] \u2208 U2

if P is odd, Q is even (P,Q \u2265 0), and

>#### **res = M(k-1)...M(0).**

A[i] and A[j] can be represented as

>#### **A[i] = P \xD7 2^k + res.**

>#### **A[j] = Q \xD7 2^k + res.**

The average

>#### **(A[i] + A[j])/2 = (P + Q) \xD7 2^(k - 1) + res.**

Since P is odd, Q is even, P + Q is odd, which means

>#### **1 will be added to M(k-1) - the most significant bit (MSB) of res.**

which means

>#### **The k LSBs of the average is different from those of both A[i] and A[j].**

That is to say,

>#### **The average is not in both U1 and U2. Proved.**

---
## 3. Algorithm

---

As been discussed above, this is a divide and conquer problem, which is suitable for recursion.

**Stop situation:**

When the generated subset's size is small enough (contains **0** or **1** element), the recursion should stop.

**Recursion logic:**

As the problem can be treated as a special sorting problem, 

the whole logic can be divided into patition part and sorting part .

When sorting, there are 4 inputs,

* vector **v**.
* start index **start**.
* end index **end**.
* **mask** for judging elements and put them into subsets.

After the inputs are introduced to partition part,

the elements in **v** from **start** to **end** are swapped like doing quicksort, the border index **mid** is returned.

After doing partition

* all elements from index **start** to index **mid - 1** belongs to Subset **1**.

* all elements from index **mid** to index **end** belongs to Subset **2**.

When the partition finished, we can sort on **start** to **mid - 1** and **mid** to **end** recursively, 

Accoring to the **Partition Rule**, the **mask** should be **doubled**.

**Initial values:**

* v = [1,2,3,4,...,N].
* start = 0.
* end = N-1.
* mask = 1.

---
## 4. Complexity Analysis

---

#### 4.1 Time complexity

---
On each level, the recursion branch will iterate over all elements.

On k-th level, the k-th LSB will be checked. 

The number of iteration will be **AT MOST log2N**.

>#### The time complexity is **O(NlogN)**.

---

#### 4.2 Space complexity

---

The algorithm is an **in-place implementation**. 
As it's a recursion algorithm, and the depth of the recursion tree is AT MOST log2N.

>#### The space complexity is **O(N)**.

---
## 5. Code

---
```
class Solution {
public:
    int partition(vector<int> &v, int start, int end, int mask)
    {
        int j = start;
        for(int i = start; i <= end; i++)
        {
            if((v[i] & mask) != 0)
            {
                swap(v[i], v[j]);
                j++;
            }
        }
        return j;
    }
    
    void sort(vector<int> & v, int start, int end, int mask)
    {
        if(start >= end) return;
        int mid = partition(v, start, end, mask);
        sort(v, start, mid - 1, mask << 1);
        sort(v, mid, end, mask << 1);
    }
    
    vector<int> beautifulArray(int N) {
        vector<int> ans;
        for(int i = 0; i < N; i++) ans.push_back(i + 1);
        sort(ans, 0, N - 1, 1);
        return ans;
    }
};
```