# Java | Queue + TreeMap | Explained, Example

**Author:** ig-rib
**Votes:** 11
**Link:** [https://leetcode.com/problems/finding-mk-average/solutions/2851654/](https://leetcode.com/problems/finding-mk-average/solutions/2851654/)

---

Haven't seen this in the comments so I'll just go ahead with some bullet points.

* We need to be able to access the first and last k elements (of the last m elements) of the stream. If there was something as a SortedQueue in Java it would be cool, but there isn't, so **TreeMap** was all I could come up with, in order to manage the repeated elements correctly. This TreeMap will preserve the natural order of the last m elements of the stream.


* We're gonna keep track of the **totalSum** of the last m elements of the stream.

* We need to keep the last m elements of the Stream. We'll use a **queue** to do this. As soon as the queue has more than m elements, we push the first one out and subtract it from the total sum. We also reduce its count from the TreeMap (and delete the key if its count becomes 0).


* In order to subtract the first and last k elements, we literally just have to get that info from the TreeMap. In a SortedList, we would do an iteration for the first k and one for the last k, subtract the sum of those from the totalSum. Here we have to be more careful with how we advance through the keys, since they're grouped by counts.

* Next, just take the average, which is **(totalSum - sumOfExtremes) / (m - 2 * k)**

Example:

```
M = 5, K = 2
Stream:
[17612, 74607, 8272, 33433, 8272, 64938, [Takes average], 99741]

Observe, when the average is taken, our q is like
Q = [ 8272, 33433, 8272, 64938, 99741 ]

Our Tree Map is (, in order):
[ 8272 --> 2, 33433 -> 1, 64938 --> 1, 99741 --> 1 ]

Getting the sum of
* The first two elements: 8272 + 8272 = 16544
* The last two elements: 64938 + 99741 = 164679

Finally getting the average:

(totalSum - sumOfExtremes) / (m - 2*k) = (214656 - 181223) / (5 - 2 * 2) = 33433 / 1 = 33433
```


This is not the fastest implementation but the one I first came up with. It's giving me something between top 45% and top 80% regarding times.

**Time Complexity:** **`O(NlogN)`**, N being the size of the stream.
**Space Complexity:** **`O(M)`**

```
class MKAverage {

    private TreeMap<Integer, Integer> counts;
    private Deque<Integer> stream;
    private int m;
    private int k;
    private int totalSum = 0;
    private int totalSize = 0;
    
    
    public MKAverage(int m, int k) {
        counts = new TreeMap<>();
        stream = new LinkedList<>();
        this.m = m;
        this.k = k;
    }
    
    public void addElement(int num) {
        totalSum += num;
        totalSize++;
        stream.add(num);
        if (stream.size() > m) {
            Integer key = stream.removeFirst();
            counts.put(key, counts.get(key) - 1);
            totalSum -= key;
            if (counts.get(key) == 0) counts.remove(key);
        }
        counts.put(num, counts.getOrDefault(num, 0) + 1);
    }
    
    public int calculateMKAverage() {
        if (totalSize < m) return -1;
        
        int key = counts.firstKey();
        int lastKey = counts.lastKey();
        int kSmall = k, kLarge = k;

        int extremeSum = 0;

        System.out.println(counts.toString());
        
        while (kSmall > 0) {
            int toSubtractSmall = Math.min(kSmall, counts.get(key));
            kSmall -= toSubtractSmall;
            extremeSum += key * toSubtractSmall;
            System.out.println(key + toSubtractSmall);
            if (toSubtractSmall == counts.get(key)) key = counts.higherKey(key);
        }

        while (kLarge > 0) {
            int toSubtractLarge = Math.min(kLarge, counts.get(lastKey));
            kLarge -= toSubtractLarge;
            extremeSum += lastKey * toSubtractLarge;
            System.out.println(lastKey + toSubtractLarge);
            if (toSubtractLarge == counts.get(lastKey)) lastKey = counts.lowerKey(lastKey);
        }
        
        int ret = (totalSum - extremeSum) / (m - 2 * k);
        
        return ret;
    }
}

/**
 * Your MKAverage object will be instantiated and called as such:
 * MKAverage obj = new MKAverage(m, k);
 * obj.addElement(num);
 * int param_2 = obj.calculateMKAverage();
 */
```